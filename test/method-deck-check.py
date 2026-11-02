#!/usr/bin/env python3
"""Method: Reading, Recitation, Exercises (2 Nov 2026): a three-card study deck right below Course settings, before
   part one. No Study Checks, Continue open on every card, Back and Forward step through it, a reload reopens the
   same card. Finishing it records nothing: it is not in the Recitation Tablet, the reviews or the course record.
     python3 test/method-deck-check.py           # against http://localhost:8040/
     BASE=https://logica.studiuminstitute.org/ python3 test/method-deck-check.py
   With REF=<url of the page before the deck> it also checks that the rest of the homepage text is unchanged."""
import json, os
from playwright.sync_api import sync_playwright

BASE = os.environ.get('BASE', 'http://localhost:8040/')
REF = os.environ.get('REF', '')
KEY = 'arsSyllogistica.progress.v1'
EXPECTED = [
 "This course provides the best way for a student to master logic in depth.\n\n1. Study and read carefully.\n2. Recite everything you can remember from the lessons.\n3. Practice and refine your skills with the exercises.\n\nFirst, read and study in detail the content sections of the course.\n\nBut what do we mean by \"read\"? Do you read these sections the way you read a textbook or a novel you are reading for a course?\n\nNo.\n\nYou read these texts the way you would a text that you want to understand slowly and deeply, with great care: this is fundamental reading.\n\nThere is nothing casual about fundamental reading. It is reading with a purpose.\n\nEven if you are reading a great book for a course, you might still read it without being so intent on everything and every detail.\n\nBut the study materials in this course are meant for mastery.",
 "Second, after you have read the study sections, the very best thing you can do to master the material is also one of the oldest study methods on record: after you have read and studied the content of the lesson, you recite the lesson from memory, as much as you can recall.\n\nTo do this here in Ars Logica, you click on the tablet in the top left of the main course page, the Recitation Tablet; you select the lesson you have just studied and then you write everything you can remember about it into the text box. And this is key: at first you will write down a few things and then you will stop--but that is the precise point where you must go on; you must force yourself to keep remembering; that is where the true learning takes place, right then, as you try and struggle to remember. Write down everything you can. And then when you are done you view the course's own version of the Student Recitation; you compare what you wrote with an outline of the contents of the lessons; in the interactive course, you can mark off the things that you did remember and include in your recitation and you can also see the things that you did not remember. After that, at a later point, you should review the lessons again and ideally return later to perform a second recitation. For later recitations, you can choose to aim for a student recitation or a master recitation. The master recitation is a complete account in summary form of everything point made throughout the lesson.",
 "Third, practice with the exercises. Logic is primarily an art, and an art must be practiced. These sets of exercises are diverse, wide-ranging, and intensive. Use them over and over to perfect your skills in the application of the science of logic to example after example.\n\nSo, when you turn to study a lesson, it is important not just to skim it or read through the way one does when one is in a hurry or when one is looking for something.\n\nThe core practices of this course perfect the mind, the whole mind, by study, memory, understanding, and exercise."
]
SUB = 'Careful reading of each lesson; recitation of the lesson from memory; and practice with the sets of exercises.'
results, errors = [], []
def check(name, ok, info=''):
    results.append((name, bool(ok)))
    print(('ok    ' if ok else 'FAIL  ') + name + (('  [' + str(info)[:300] + ']') if not ok and info != '' else ''))
def settle(pg, ms=300): pg.wait_for_timeout(ms)
def screen(pg): return pg.evaluate("() => (document.querySelector('.screen.active') || {}).id")
def step(pg): return pg.evaluate("() => { const e = document.querySelector('#orient-body .orient-prog'); return e ? e.textContent.trim() : ''; }")
def cont_open(pg): return pg.evaluate("() => { const b = document.getElementById('orient-cont'); return !!b && !b.disabled; }")
def card_text(pg): return pg.evaluate("""() => [...document.querySelectorAll('#orient-body .orient-text > p')].map(p => {
    const c = p.cloneNode(true); c.querySelectorAll('br').forEach(b => b.replaceWith('\\n')); return c.textContent; }).join('\\n\\n')""")
def home_text(pg, drop):
    return pg.evaluate("""d => { const h = document.getElementById('scr-home').cloneNode(true);
      if (d) { const m = h.querySelector('#sets-method'); if (m) m.remove(); const mt = h.querySelector('#method-title'); if (mt) mt.remove(); }
      return h.textContent.replace(/\\s+/g, ' ').trim(); }""", drop)
def nav(pg, how): pg.evaluate("h => setTimeout(() => history[h](), 0)", how); settle(pg, 500)

with sync_playwright() as p:
    br = p.chromium.launch()
    for tag, kw in (('', {'viewport': {'width': 1280, 'height': 900}}), ('m.', {'viewport': {'width': 390, 'height': 844}, 'is_mobile': True, 'has_touch': True})):
        ctx = br.new_context(**kw); pg = ctx.new_page()
        pg.on('pageerror', lambda e: errors.append('pageerror: ' + str(e)))
        pg.on('console', lambda m: errors.append('console: ' + m.text) if m.type == 'error' else None)
        pg.goto(BASE); settle(pg, 1200)
        place = pg.evaluate("""() => { const t = document.getElementById('study-card-method'); if (!t) return null;
          const box = t.parentElement, pre = box.previousElementSibling.id === 'method-title' ? box.previousElementSibling.previousElementSibling : box.previousElementSibling, part = document.querySelector('#scr-home .part');
          return { box: box.id, afterHeader: pre && pre.tagName,
                   settingsInHeader: !!pre.querySelector('.course-settings-title'),
                   beforePart: !!(box.compareDocumentPosition(part) & Node.DOCUMENT_POSITION_FOLLOWING), tiles: box.querySelectorAll(':scope > .set-card, :scope > .study-tile, :scope > [data-id], :scope > [data-deck], :scope > *:not(.sec-rule)').length,
                   title: t.querySelector('h3').textContent, review: !!t.querySelector('.ex-link'), text: t.textContent.trim() }; }""")
        check(tag + 'p1 the tile sits right below Course settings, before part one', place and place['box'] == 'sets-method' and place['afterHeader'] == 'HEADER' and place['settingsInHeader'] and place['beforePart'] and place['tiles'] == 1, place)
        sec = pg.evaluate("""() => { const h = document.getElementById('method-title'); if (!h) return null; const box = h.nextElementSibling;
          const kids = [...box.children], r = kids[kids.length - 1], first = document.querySelector('.part-heading:not(#method-title)');
          const fs = e => getComputedStyle(e).fontSize, ff = e => getComputedStyle(e).fontFamily;
          return { tag: h.tagName, text: h.textContent, box: box.id, tiles: kids.filter(k => !k.classList.contains('sec-rule')).length,
                   rule: r.className, ruleHidden: r.getAttribute('aria-hidden'), labelled: box.getAttribute('aria-labelledby'),
                   sameType: fs(h) == fs(first) && ff(h) == ff(first), firstAfter: !!(box.compareDocumentPosition(first) & Node.DOCUMENT_POSITION_FOLLOWING) }; }""")
        check(tag + 's1 Method is its own section: an h2 "Method" in the type of the section titles, the tile, then the section rule, then the first section', sec and sec['tag'] == 'H2' and sec['text'] == 'Method' and sec['box'] == 'sets-method' and sec['tiles'] == 1 and sec['rule'] == 'sec-rule sec-rule-main' and sec['ruleHidden'] == 'true' and sec['labelled'] == 'method-title' and sec['sameType'] and sec['firstAfter'], sec)
        check(tag + 'p2 the tile: its title and STUDY, its subtitle, no Review button', place and place['title'] == 'Method: Reading, Recitation, Exercises' and SUB in place['text'] and not place['review'] and place['text'].endswith('STUDY ⟶'), place)
        s0 = pg.evaluate("k => localStorage.getItem(k)", KEY)
        pg.click('#study-card-method'); settle(pg, 400)
        check(tag + 'c0 it opens with its title', screen(pg) == 'scr-orient' and pg.text_content('#orient-title') == 'Method: Reading, Recitation, Exercises')
        texts, opens, qs, steps = [], [], 0, []
        for i in range(3):
            steps.append(step(pg)); texts.append(card_text(pg)); opens.append(cont_open(pg))
            qs += pg.evaluate("() => document.querySelectorAll('#orient-body details.check, #orient-body .orient-opt').length")
            if i < 2: pg.click('#orient-cont'); settle(pg, 250)
        check(tag + 'c1 three cards', steps == ['Step 1 of 3', 'Step 2 of 3', 'Step 3 of 3'], steps)
        for i in range(3): check(tag + 'c2 card %d text exactly as written' % (i + 1), texts[i] == EXPECTED[i], texts[i])
        check(tag + 'c3 no Study Checks', qs == 0, qs)
        check(tag + 'c4 Continue open on every card', all(opens), opens)
        nav(pg, 'back'); a = step(pg); nav(pg, 'back'); b = step(pg); nav(pg, 'forward'); c = step(pg)
        check(tag + 'n1 Back steps through its cards, Forward returns', (a, b, c) == ('Step 2 of 3', 'Step 1 of 3', 'Step 2 of 3') and cont_open(pg), (a, b, c))
        pg.reload(); settle(pg, 1200)
        check(tag + 'n2 a reload reopens the same card', screen(pg) == 'scr-orient' and step(pg) == 'Step 2 of 3' and texts[1] == card_text(pg), step(pg))
        pg.click('#orient-cont'); settle(pg, 250); pg.click('#orient-cont'); settle(pg, 500)
        check(tag + 'f1 the last card returns home', screen(pg) == 'scr-home')
        s1 = pg.evaluate("k => localStorage.getItem(k)", KEY)
        check(tag + 'f2 finishing records nothing (course record unchanged, no "method" anywhere)', s1 == s0 and 'method' not in (s1 or ''), s1)
        r = pg.evaluate("""() => ({ tablet: Object.keys((window.ARS || {}).decks || {}).includes('method'),
            menu: JSON.stringify((window.ARS || {}).structure || []).includes('method'),
            review: (window.__arsReviewDecks ? window.__arsReviewDecks() : []).some(d => d.id === 'method'),
            study: (window.__arsStudyDecks || []).concat(window.__arsAdvancedDecks || []).some(d => d.id === 'method'),
            nudge: /Method/.test((document.getElementById('recite-due') || {}).textContent || '') || (() => { const h = document.getElementById('scr-home').cloneNode(true); h.querySelector('#sets-method').remove(); return /Method: Reading/.test(h.textContent); })() })""")
        check(tag + 'f3 not in the Recitation Tablet, the reviews or the deck counts', not any(r.values()), r)
        ctx.close()
    if REF:
        out = []
        for u, drop in ((REF, False), (BASE, True)):
            ctx = br.new_context(viewport={'width': 1280, 'height': 900}); pg = ctx.new_page()
            pg.goto(u); settle(pg, 1200); out.append(home_text(pg, drop)); ctx.close()
        check('x1 the rest of the homepage text is unchanged', out[0] == out[1], (len(out[0]), len(out[1])))
    br.close()
check('e1 console clean', not errors, errors)
print('%d/%d passed' % (sum(r for _, r in results), len(results)))
raise SystemExit(0 if all(r for _, r in results) else 1)
