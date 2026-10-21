#!/usr/bin/env node
/* Ars Syllogistica: data checks.  Run with  node tools/check.js
   1. Syntax of ars-engine.js and of the inline script of index.html.
   2. Every check question in every deck and lead-in: a valid correct index,
      distinct options, and at least three options (True/False questions in
      the older decks are counted and allowed).
   3. Every doctrine deck and every Advanced Studies deck has a Review.
   4. No prose dashes in deck, lead-in, or question text (ranges such as
      "I.14–15" and schematic forms such as "M–P" are allowed).
   5. The correct option is the longest option in no more than a third of
      the questions of each Advanced Studies deck and each new exercise set
      (reported, not enforced, for the older decks and lead-ins).
   6. Each new exercise set (ids 22 and up) generates valid items at every
      level, from a bank of at least 20 distinct items.
   Exits with status 1 if an enforced check fails. */
'use strict';
const fs = require('fs'), path = require('path'), vm = require('vm');
const ROOT = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const engineSrc = fs.readFileSync(path.join(ROOT, 'ars-engine.js'), 'utf8');
const advSrc = fs.readFileSync(path.join(ROOT, 'ars-advanced.js'), 'utf8');
let failures = 0;
const fail = m => { failures++; console.log('FAIL  ' + m); };
const note = m => console.log('      ' + m);
const ok = m => console.log('ok    ' + m);

/* 1. syntax */
const inline = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m => m[1]);
for (const [n, src] of [['ars-engine.js', engineSrc], ['ars-advanced.js', advSrc]]) {
  try { new vm.Script(src, {filename: n}); ok(n + ' parses'); }
  catch (e) { fail(n + ': ' + e.message); }
}
inline.forEach((s, i) => {
  try { new vm.Script(s, {filename: 'index.html#script' + i}); }
  catch (e) { fail('index.html inline script ' + i + ': ' + e.message); }
});
ok(`index.html: ${inline.length} inline script(s) parse`);

/* load the engine */
const eng = {module: {exports: {}}, console, Math, Date, JSON, Set, Map};
eng.window = undefined;
vm.createContext(eng);
vm.runInContext(engineSrc, eng, {filename: 'ars-engine.js'});
const E = eng.module.exports;

/* load the deck data: from `const Q =` to the end of the Advanced deck list */
const big = inline.find(s => s.includes('const STUDY_DECKS')) || '';
const a = big.indexOf('const Q = ');
const b = big.indexOf('function makeStudyTile');
const data = big.slice(a, b) + `
;this.__out = {INTRO_LOGIC, FIRST_ACT, SECOND_ACT, THIRD_ACT, CIRCLES, LEADINS, STUDY_DECKS,
  ADVANCED_DECKS: (typeof ADVANCED_DECKS!=='undefined') ? ADVANCED_DECKS : []};`;
const ctx = {$: () => null, document: {getElementById: () => null}, console};
ctx.window = ctx;
vm.createContext(ctx);
vm.runInContext(advSrc, ctx, {filename: 'ars-advanced.js'});
vm.runInContext(data, ctx, {filename: 'index.html#decks'});
const D = ctx.__out;

const plain = s => String(s == null ? '' : s).replace(/<[^>]+>/g, '').replace(/&[a-z]+;/g, ' ').trim();
const DASH = /—|–|--| - /g;
function badDashes(s) {
  const t = plain(s), out = [];
  let m;
  while ((m = DASH.exec(t))) {
    const before = t[m.index - 1] || '', after = t[m.index + m[0].length] || '';
    if (m[0] === '–' && /[0-9A-Z]/.test(before) && /[0-9A-Z]/.test(after)) continue;  /* range or schema */
    out.push(t.slice(Math.max(0, m.index - 40), m.index + 40));
  }
  return out;
}
function cardQs(card) { return ['q', 'q2', 'q3', 'q4', 'q5'].map(k => card[k]).filter(Boolean); }
function isTF(q) { return q.options.length === 2 && q.options.join('|') === 'True|False'; }
function longestIsCorrect(opts, idx) {
  const L = opts.map(o => plain(o).length), c = L[idx];
  return L.every((x, i) => i === idx || x < c);
}

/* 2–5. decks */
function checkDeck(name, deck, enforce) {
  let qn = 0, tf = 0, longest = 0, mcq = 0;
  deck.forEach((card, ci) => {
    const where = `${name} card ${ci + 1}`;
    [card.h, card.src].forEach(t => badDashes(t).forEach(x => (enforce ? fail : note)(`${where}: dash in "${x}"`)));
    const qs = cardQs(card);
    if (enforce && qs.length < 3) fail(`${where}: ${qs.length} question form(s), three wanted`);
    qs.forEach((q, qi) => {
      qn++;
      const w = `${where} q${qi + 1}`;
      if (!Array.isArray(q.options) || !(q.correct >= 0 && q.correct < q.options.length)) { fail(`${w}: bad correct index`); return; }
      if (new Set(q.options.map(plain)).size !== q.options.length) fail(`${w}: duplicate options`);
      if (isTF(q)) { tf++; if (enforce) fail(`${w}: True/False question in an Advanced deck`); }
      else {
        mcq++;
        if (q.options.length < 3) fail(`${w}: fewer than three options`);
        if (longestIsCorrect(q.options, q.correct)) longest++;
      }
      [q.prompt, q.explain, q.wrong, ...q.options].forEach(t => badDashes(t).forEach(x => (enforce ? fail : note)(`${w}: dash in "${x}"`)));
    });
  });
  const ratio = mcq ? longest / mcq : 0;
  const msg = `${name}: ${deck.length} cards, ${qn} questions (${tf} true/false); correct option longest in ${longest}/${mcq} (${Math.round(100 * ratio)}%)`;
  if (enforce && ratio > 1 / 3) fail(msg + ', above one third'); else ok(msg);
}
[['What Logic Is', D.INTRO_LOGIC], ['First Act', D.FIRST_ACT], ['Second Act', D.SECOND_ACT],
 ['Third Act', D.THIRD_ACT], ['Seeing with Circles', D.CIRCLES]].forEach(([n, d]) => checkDeck(n, d, false));
Object.keys(D.LEADINS).forEach(id => checkDeck('Lead-in ' + id, D.LEADINS[id], false));
D.STUDY_DECKS.forEach(d => { if (!d.review) fail(`deck ${d.id} has no Review`); });
ok(`${D.STUDY_DECKS.length} doctrine decks have a Review`);
D.ADVANCED_DECKS.forEach(d => {
  if (!d.review) fail(`Advanced deck ${d.id} has no Review`);
  if (d.deck.length < 6 || d.deck.length > 10) fail(`Advanced deck ${d.id}: ${d.deck.length} cards (6 to 10 wanted)`);
  if (!d.deck[0].src) fail(`Advanced deck ${d.id}: no sources line on the first card`);
  else if (!/Logic \(General and Historical\)/.test(d.deck[0].src.split(';')[0]) ) fail(`Advanced deck ${d.id}: the ECT article is not first in the sources line`);
  checkDeck('Advanced · ' + d.title, d.deck, true);
});

/* 6. new exercise sets */
const NEW_SETS = (E.ADVANCED_SET_IDS || []);
NEW_SETS.forEach(id => {
  const seen = new Set(); let n = 0, longest = 0, mc = 0;
  for (let lvl = 1; lvl <= 5; lvl++) {
    for (let i = 0; i < 300; i++) {
      let q;
      try { q = E.generateQuizQuestion(id, lvl, 'letters'); }
      catch (e) { fail(`set ${id} level ${lvl}: ${e.message}`); break; }
      n++;
      if (q.kind !== 'mc4') { fail(`set ${id}: kind ${q.kind}, mc4 expected`); break; }
      if (!(q.correctIdx >= 0 && q.correctIdx < q.options.length)) fail(`set ${id} level ${lvl}: bad key in "${plain(q.prompt).slice(0, 60)}"`);
      if (new Set(q.options.map(plain)).size !== q.options.length) fail(`set ${id}: duplicate options in "${plain(q.prompt).slice(0, 60)}"`);
      if (q.options.length < 3) fail(`set ${id}: fewer than three options`);
      [q.prompt, q.promptRaw, q.mcInstr, q.why, q.rules, ...q.options].forEach(t => badDashes(t).forEach(x => fail(`set ${id}: dash in "${x}"`)));
      mc++; if (longestIsCorrect(q.options, q.correctIdx)) longest++;
      seen.add(plain(q.prompt || q.promptRaw) + '|' + plain(q.mcInstr) + '|' + plain(q.options[q.correctIdx]));
    }
  }
  const ratio = longest / Math.max(1, mc);
  const msg = `set ${id}: ${seen.size} distinct items over ${n} draws; correct option longest in ${Math.round(100 * ratio)}%`;
  if (seen.size < 20) fail(msg + ', fewer than 20 items');
  else if (ratio > 1 / 3) fail(msg + ', above one third');
  else ok(msg);
});

console.log(failures ? `\n${failures} failure(s)` : '\nall enforced checks pass');
process.exit(failures ? 1 : 0);
