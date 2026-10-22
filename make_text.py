#!/usr/bin/env python3
"""
make_text.py — create/regenerate SYLLOGISTICA-TEXT.txt from the app sources.

Canonical sources (same folder):
  index.html       — path intros, the study decks, the lead-ins ("Before the
                     Exercise"), and SETS
  ars-advanced.js  — the Advanced Studies decks
  ars-engine.js    — exercise item banks (sampled, three per kind)

Run (from this folder, Python 3, stdlib only):
  python3 make_text.py

Options:
  python3 make_text.py --index index.html --engine ars-engine.js --out SYLLOGISTICA-TEXT.txt

Does not modify the app or push to GitHub.
"""
from __future__ import annotations

import argparse
import html as htmlmod
import json
import re
import subprocess
import tempfile
from pathlib import Path

INTRO = """ARS SYLLOGISTICA — all the words, in the order you meet them
============================================================

Scroll and you move through the course: an act, then a card, then the text of that card. The opening path and each “Before the Exercise” introduction are here in full. Exercise banks are not here in full: for each kind of question, three examples are given (with the answer and the explanation) so the wording can be checked.

How to edit
-----------
Change the sentences in place. Send the file back and the wording will be put back on the same screen, or into the same kind of question.

Each paragraph is a single line, except where a passage is several lines on purpose. A blank line starts a new paragraph.

Leave these lines alone. They say where a block belongs:
  a line that starts with @
  a line that starts with id:
  a line that starts with difficulty:
  a line of hyphens or hash marks
  a line in [square brackets] standing on its own

You can edit the words after Title: and Small heading:.

Marks inside the sentences
--------------------------
*these words* are italic on the page.
**these words** are bold.
A line that starts with - is one item in a list, or one choice.
The line Answer: is what the app counts as right.
Why: is the explanation shown after the answer.
"""


def html_to_markup(s: str) -> str:
    s = re.sub(r"<br\s*/?>", "\n", s, flags=re.I)
    s = re.sub(r"</p>", "\n\n", s, flags=re.I)
    s = re.sub(r"<p[^>]*>", "", s, flags=re.I)
    s = re.sub(r"<(strong|b)[^>]*>([\s\S]*?)</\1>", r"**\2**", s, flags=re.I)
    s = re.sub(r"<(em|i)[^>]*>([\s\S]*?)</\1>", r"*\2*", s, flags=re.I)
    s = re.sub(r'<span[^>]*class="[^"]*\blat\b[^"]*"[^>]*>([\s\S]*?)</span>', r"*\1*", s, flags=re.I)
    s = re.sub(r"<[^>]+>", "", s)
    s = htmlmod.unescape(s)
    s = re.sub(r"[ \t]+\n", "\n", s)
    s = re.sub(r"\n{3,}", "\n\n", s)
    return s.strip()


def extract_sets(index: str) -> list[dict]:
    m = re.search(r"const SETS\s*=\s*(\[[\s\S]*?\]);\s*\n", index)
    if not m:
        return []
    # JS object → JSON-ish
    raw = m.group(1)
    raw = re.sub(r"(\w+)\s*:", r'"\1":', raw)
    raw = raw.replace("'", '"')
    # trailing commas
    raw = re.sub(r",\s*}", "}", raw)
    raw = re.sub(r",\s*]", "]", raw)
    try:
        return json.loads(raw)
    except json.JSONDecodeError:
        # fallback regex
        items = []
        for sm in re.finditer(
            r"\{id:(\d+),\s*title:'([^']*)',\s*desc:'((?:\\'|[^'])*)',\s*instr:'((?:\\'|[^'])*)'",
            m.group(1),
        ):
            items.append(
                {
                    "id": int(sm.group(1)),
                    "title": sm.group(2),
                    "desc": sm.group(3).replace("\\'", "'"),
                    "instr": sm.group(4).replace("\\'", "'"),
                }
            )
        return items


def extract_intro_screens(index: str) -> list[tuple[str, str]]:
    """Return (title, body_text) for each Before-the-Exercise screen."""
    out = []
    for m in re.finditer(
        r'<div class="screen" id="(scr-intro-[^"]+)">([\s\S]*?)</div>\s*</div>\s*(?=<div class="screen"|<!--|\Z)',
        index,
    ):
        block = m.group(2)
        tm = re.search(r'class="quiz-title">([^<]+)', block)
        title = htmlmod.unescape(tm.group(1)).strip() if tm else m.group(1)
        # q-instr
        parts = []
        im = re.search(r'class="q-instr">([\s\S]*?)</div>', block)
        if im:
            parts.append(html_to_markup(im.group(1)))
        for item in re.findall(r'class="intro-item">([\s\S]*?)</div>\s*(?=<div class="intro-item"|</div>\s*<button|</div>\s*</div>)', block):
            # may include nested intro-eg
            text = html_to_markup(item)
            if text:
                parts.append(text)
        # also catch remaining intro-item more loosely
        if not any("intro-item" in block for _ in [0]):
            pass
        items = re.findall(r'<div class="intro-item">([\s\S]*?)</div>', block)
        # The above may over-split on nested divs; use a better approach:
        items = []
        for im2 in re.finditer(r'<div class="intro-item">([\s\S]*?)(?=<div class="intro-item">|<button|</div>\s*</div>\s*</div>)', block):
            items.append(html_to_markup(im2.group(1)))
        body = "\n\n".join([p for p in ([html_to_markup(im.group(1))] if im else []) + items if p])
        if body:
            out.append((title, body))
    return out


def extract_intro_screens_v2(index: str) -> list[tuple[str, str]]:
    out = []
    for m in re.finditer(
        r'<div class="quiz-title">(Before the Exercise[^<]*)</div>([\s\S]*?)(?=<div class="quiz-title">|<div class="screen"|<script|\Z)',
        index,
    ):
        title = htmlmod.unescape(m.group(1)).strip()
        block = m.group(2)
        chunks = []
        for im in re.finditer(r'class="q-instr">([\s\S]*?)</div>', block):
            chunks.append(html_to_markup(im.group(1)))
            break
        # intro items: non-greedy until next intro-item or button
        pos = 0
        while True:
            start = block.find('<div class="intro-item">', pos)
            if start < 0:
                break
            start += len('<div class="intro-item">')
            # find matching end: next intro-item or </div></div> near button
            nxt = block.find('<div class="intro-item">', start)
            btn = block.find("<button", start)
            end_candidates = [x for x in (nxt, btn) if x > 0]
            end = min(end_candidates) if end_candidates else len(block)
            chunk = block[start:end]
            # trim trailing closing divs
            chunk = re.sub(r"(</div>\s*)+$", "", chunk)
            chunks.append(html_to_markup(chunk))
            pos = start
            if nxt < 0:
                break
            pos = nxt
        body = "\n\n".join(c for c in chunks if c)
        if body:
            out.append((title, body))
    return out


def extract_opening(index: str) -> str:
    # Path / home prose, in page order: part titles among the section glosses.
    parts = []
    home = re.search(r'id="scr-home"(.*?)<!-- ============ LEVEL PICKER', index, re.S)
    block = home.group(1) if home else index
    for m in re.finditer(
        r'<h2 class="part-heading[^"]*"[^>]*>([^<]+)</h2>|<div class="section-gloss">([\s\S]*?)</div>',
        block,
    ):
        raw = m.group(1) if m.group(1) is not None else m.group(2)
        parts.append(html_to_markup(raw))
    # opening paragraphs in home
    for m in re.finditer(r'<p><strong>(Opening the acts|An art)[\s\S]*?</p>', index):
        parts.append(html_to_markup(m.group(0)))
    # unique preserve order
    seen = set()
    out = []
    for p in parts:
        if p and p not in seen:
            seen.add(p)
            out.append(p)
    return "\n\n".join(out)


def sample_engine_banks(engine_path: Path) -> str:
    """Use Node to pull a few banks from ars-engine.js if Node is available."""
    js = r"""
const fs = require('fs');
const vm = require('vm');
const code = fs.readFileSync(process.argv[2], 'utf8');
const sandbox = { console, Math, Date, Array, Object, String, Number, Boolean, JSON, RegExp, Error, Map, Set, parseInt, parseFloat, isNaN, Infinity, undefined, NaN, module: { exports: {} }, exports: {}, require: () => ({}) };
sandbox.window = sandbox; sandbox.globalThis = sandbox;
const names = ['PRED_DOCTRINE','PRED_PRINCIPLES','PRED_ITEMS','CAT_DOCTRINE','CAT_PRINCIPLES','DEF_ITEMS','DIV_STOCK','FAL_DOCTRINE','DIAL_DOCTRINE',
  'SUPP_ITEMS','COMP_ITEMS','CARG_ITEMS','DIL_ITEMS','DEMO_ITEMS','PERSE_ITEMS','DEMO_FAULTS',
  'SUPP_LABEL','COMP_KIND','CARG_KIND','DIL_LABEL','DEMO_KIND','PERSE_LABEL','DEMO_FAULT_LABEL'];
try { vm.runInNewContext(code + '\n; this.__X = {' + names.map(n => n + ': (typeof ' + n + " !== 'undefined' ? " + n + ' : null)').join(',') + '};', sandbox, { timeout: 10000 }); } catch (e) {}
// engine attaches to global / module.exports
const g = sandbox;
const pick = (name) => (g.__X && g.__X[name]) || g[name] || (g.module && g.module.exports && g.module.exports[name]);
const banks = {};
const LABELS = {SUPP_ITEMS:'SUPP_LABEL', COMP_ITEMS:'COMP_KIND', CARG_ITEMS:'CARG_KIND', DIL_ITEMS:'DIL_LABEL', DEMO_ITEMS:'DEMO_KIND', PERSE_ITEMS:'PERSE_LABEL', DEMO_FAULTS:'DEMO_FAULT_LABEL'};
for (const name of ['PRED_DOCTRINE','PRED_PRINCIPLES','PRED_ITEMS','CAT_DOCTRINE','CAT_PRINCIPLES','DEF_ITEMS','DIV_STOCK','FAL_DOCTRINE','DIAL_DOCTRINE',
                    'SUPP_ITEMS','COMP_ITEMS','CARG_ITEMS','DIL_ITEMS','DEMO_ITEMS','PERSE_ITEMS','DEMO_FAULTS']) {
  let v = pick(name);
  if (!Array.isArray(v)) continue;
  if (LABELS[name]) { const L = pick(LABELS[name]) || {}; v = v.map(it => Object.assign({}, it, {q: it.s || it.t, correct: L[it.k] || it.k})); }
  banks[name] = v.slice(0, 12);
}
process.stdout.write(JSON.stringify(banks));
"""
    try:
        with tempfile.NamedTemporaryFile("w", suffix=".js", delete=False) as f:
            f.write(js)
            helper = f.name
        proc = subprocess.run(
            ["node", helper, str(engine_path)],
            capture_output=True,
            text=True,
            timeout=30,
        )
        if proc.returncode != 0:
            return f"[note]\nExercise banks could not be sampled via Node ({proc.stderr.strip()[:200]}).\n"
        banks = json.loads(proc.stdout or "{}")
    except (FileNotFoundError, subprocess.TimeoutExpired, json.JSONDecodeError) as e:
        return f"[note]\nExercise banks not sampled ({e}). Teaching intros above are complete.\n"

    lines = []
    for name, items in banks.items():
        lines.append(f"@bank {name}")
        lines.append(f"Title: {name.replace('_', ' ').title()} (samples)")
        lines.append("")
        for i, it in enumerate(items[:3], 1):
            lines.append(f"@example {i}")
            if isinstance(it, dict):
                if it.get("id"):
                    lines.append(f"id: {it['id']}")
                q = it.get("q") or it.get("prompt") or it.get("text") or ""
                a = it.get("correct") or it.get("a") or it.get("answer") or ""
                why = it.get("why") or it.get("explain") or ""
                ds = it.get("ds") or it.get("options") or []
                if q:
                    lines.append("")
                    lines.append("Question: " + html_to_markup(str(q)).replace("\n", " "))
                if ds:
                    lines.append("")
                    lines.append("Choices:")
                    opts = list(ds)
                    if a and a not in opts:
                        opts = [a] + opts
                    for o in opts[:5]:
                        lines.append("- " + html_to_markup(str(o)).replace("\n", " "))
                    lines.append("")
                    lines.append("Answer: " + html_to_markup(str(a)).replace("\n", " "))
                elif a:
                    lines.append("")
                    lines.append("Answer: " + html_to_markup(str(a)).replace("\n", " "))
                if why:
                    lines.append("")
                    lines.append("Why: " + html_to_markup(str(why)).replace("\n", " "))
            else:
                lines.append(str(it)[:500])
            lines.append("")
        lines.append("")
    return "\n".join(lines)


DECKS_JS = r"""
const fs = require('fs'), vm = require('vm'), path = require('path');
const [indexPath, advPath] = process.argv.slice(2);
const html = fs.readFileSync(indexPath, 'utf8');
const big = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m => m[1]).find(s => s.includes('const STUDY_DECKS'));
const ctx = {console, $: () => null, document: {getElementById: () => null}};
ctx.window = ctx; vm.createContext(ctx);
vm.runInContext(fs.readFileSync(advPath, 'utf8'), ctx);
const a = big.indexOf('const Q = '), b = big.indexOf('function makeStudyTile');
vm.runInContext(big.slice(a, b) + ';this.__D = {STUDY_DECKS, ADVANCED_DECKS, LEADINS};', ctx);
const sm = big.match(/const SETS = (\[[\s\S]*?\n  \]);/);
const SETS = vm.runInContext('(' + sm[1] + ')', ctx);
const am = big.match(/const ACT_MEMBERS = (\{[\s\S]*?\});/);
const ACT_MEMBERS = vm.runInContext('(' + am[1] + ')', ctx);
const D = ctx.__D;
const qs = c => ['q','q2','q3','q4','q5'].map(k => c[k]).filter(Boolean)
  .map(q => ({prompt:q.prompt, options:q.options, answer:q.options[q.correct], explain:q.explain, wrong:q.wrong}));
const deck = d => ({id:d.id, num:d.num, title:d.title, desc:d.desc, cards:d.deck.map(c => ({src:c.src||'', h:c.h, qs:qs(c)}))});
const lead = id => ({id:'leadin-'+id, num:'BEFORE THE EXERCISE', title:'Before the Exercise · ' + (SETS.find(s=>s.id===id)||{}).title,
  desc:'', cards:(D.LEADINS[id]||[]).map(c => ({src:c.src||'', h:c.h, qs:qs(c)}))});
const out = [];
const sd = id => D.STUDY_DECKS.find(d => d.id === id);
out.push(deck(sd('logic')));
const actDeck = {a1:'act1', a2:'act2', a3:'act3'};
for (const k of ['a1','a2','a3','a4','a6','a5','a7']) {
  if (actDeck[k]) out.push(deck(sd(actDeck[k])));
  for (const id of ACT_MEMBERS[k]) if (D.LEADINS[id]) out.push(lead(id));
}
for (const g of ['v1','v2','v3']) D.ADVANCED_DECKS.filter(d => d.group === g).forEach(d => out.push(deck(d)));
process.stdout.write(JSON.stringify({sets:SETS, decks:out}));
"""


def node_decks(index_path: Path, adv_path: Path):
    with tempfile.NamedTemporaryFile("w", suffix=".js", delete=False) as f:
        f.write(DECKS_JS)
        helper = f.name
    proc = subprocess.run(["node", helper, str(index_path), str(adv_path)], capture_output=True, text=True, timeout=60)
    if proc.returncode != 0:
        raise SystemExit("Could not read the decks with Node: " + proc.stderr.strip()[:400])
    return json.loads(proc.stdout)


def deck_text(d: dict) -> str:
    lines = ["#" * 72, f"# {d['title']}", "#" * 72, "", f"@deck {d['id']}", f"Title: {d['title']}"]
    if d.get("num"):
        lines.append(f"Small heading: {d['num']}")
    if d.get("desc"):
        lines += ["", html_to_markup(d["desc"])]
    lines.append("")
    for i, c in enumerate(d["cards"], 1):
        lines.append(f"@card {i}")
        if c.get("src"):
            lines.append("Sources: " + html_to_markup(c["src"]).replace("\n", " "))
        lines += ["", html_to_markup(c["h"]), ""]
        for j, q in enumerate(c["qs"], 1):
            lines.append(f"@question {i}.{j}")
            lines.append("Question: " + html_to_markup(q["prompt"]).replace("\n", " "))
            lines.append("Choices:")
            for o in q["options"]:
                lines.append("- " + html_to_markup(o).replace("\n", " "))
            lines.append("Answer: " + html_to_markup(q["answer"]).replace("\n", " "))
            if q.get("explain"):
                lines.append("Why: " + html_to_markup(q["explain"]).replace("\n", " "))
            if q.get("wrong"):
                lines.append("Why not the others: " + html_to_markup(q["wrong"]).replace("\n", " "))
            lines.append("")
    lines.append("")
    return "\n".join(lines)


def build_text(index: str, engine_path: Path, data: dict | None = None) -> str:
    chunks = [INTRO, ""]
    chunks.append("Ars Syllogistica")
    chunks.append("The second art of the trivium")
    chunks.append("")
    chunks.append(
        "**Logic is the art of reasoning well, and the science of second intentions.** "
        "It studies the relations things have only because they are known — genus, species, "
        "subject, predicate, statement, and conclusion — and trains the mind to move from what is known to what follows logically."
    )
    chunks.append("")
    opening = extract_opening(index)
    if opening:
        chunks.append("@" + "path")
        chunks.append("Title: Opening the path")
        chunks.append("")
        chunks.append(opening)
        chunks.append("")

    chunks.append("The parts")
    chunks.append("---------")
    chunks.append("")
    sets = (data or {}).get("sets") or extract_sets(index)
    for s in sets:
        chunks.append(f"{s.get('id', '')}. {s.get('title', '')}")
        desc = s.get("desc") or ""
        if desc:
            chunks.append(f"    {desc}")
    chunks.append("")
    chunks.append("=" * 60)
    chunks.append("")

    for d in (data or {}).get("decks", []):
        chunks.append(deck_text(d))
    intros = [] if data else extract_intro_screens_v2(index)
    for title, body in intros:
        chunks.append("#" * 72)
        chunks.append(f"# {title}")
        chunks.append("#" * 72)
        chunks.append("")
        chunks.append(f"@intro")
        chunks.append(f"Title: {title}")
        chunks.append("")
        chunks.append(body)
        chunks.append("")
        chunks.append("")

    chunks.append("#" * 72)
    chunks.append("# Exercise banks (samples)")
    chunks.append("#" * 72)
    chunks.append("")
    chunks.append(sample_engine_banks(engine_path))
    return "\n".join(chunks).rstrip() + "\n"


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("--index", default="index.html")
    ap.add_argument("--engine", default="ars-engine.js")
    ap.add_argument("--out", default="SYLLOGISTICA-TEXT.txt")
    args = ap.parse_args()
    index_path = Path(args.index)
    engine_path = Path(args.engine)
    if not index_path.is_file():
        raise SystemExit(f"Missing {index_path}")
    if not engine_path.is_file():
        raise SystemExit(f"Missing {engine_path}")
    adv_path = index_path.parent / "ars-advanced.js"
    data = node_decks(index_path, adv_path) if adv_path.is_file() else None
    text = build_text(index_path.read_text(encoding="utf-8"), engine_path, data)
    Path(args.out).write_text(text, encoding="utf-8")
    print(f"Wrote {args.out} ({len(text)} chars, {text.count(chr(10))+1} lines)")


if __name__ == "__main__":
    main()
