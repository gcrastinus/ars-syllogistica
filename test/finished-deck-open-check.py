#!/usr/bin/env python3
"""A study deck finished before opens freely (2 Nov 2026): Continue on every card without answering; the Study Check
   is still there and can be answered. Unfinished decks stay gated; Erase all progress closes them again.
     python3 test/finished-deck-open-check.py           # against http://localhost:8023/index.html
     BASE=https://logica.studiuminstitute.org/index.html python3 test/finished-deck-open-check.py"""
import json, os
from playwright.sync_api import sync_playwright

BASE = os.environ.get('BASE', 'http://localhost:8023/index.html')
KEY = 'arsSyllogistica.progress.v1'
results, errors = [], []
def check(name, ok, info=''):
    results.append((name, bool(ok)))
    print(('ok    ' if ok else 'FAIL  ') + name + (('  [' + str(info) + ']') if not ok and info != '' else ''))
def page_of(br, init=None, **kw):
    ctx = br.new_context(**kw)
    if init: ctx.add_init_script(init)
    pg = ctx.new_page()
    pg.on('pageerror', lambda e: errors.append('pageerror: ' + str(e)))
    pg.on('console', lambda m: errors.append('console: ' + m.text) if m.type == 'error' else None)
    return ctx, pg
def settle(pg, ms=300): pg.wait_for_timeout(ms)
def screen(pg): return pg.evaluate("() => (document.querySelector('.screen.active') || {}).id")
def step(pg): return pg.evaluate("() => { const e = document.querySelector('#orient-body .orient-prog'); return e ? e.textContent.trim() : ''; }")
def cont_open(pg): return pg.evaluate("() => { const b = document.getElementById('orient-cont'); return !!b && !b.disabled; }")
def has_q(pg): return pg.evaluate("() => !!document.querySelector('#orient-body .orient-opt')")
def prog(pg): return pg.evaluate("k => localStorage.getItem(k)", KEY)
def done_of(pg, id): return pg.evaluate("([k, id]) => { try { const o = JSON.parse(localStorage.getItem(k)); return !!(o && o.recite && o.recite.decks && o.recite.decks[id] && o.recite.decks[id].done); } catch(e) { return false; } }", [KEY, id])
def back(pg): pg.evaluate("() => setTimeout(() => history.back(), 0)"); settle(pg, 500)
def advance(pg):
    for _ in range(20):
        b = pg.locator('#orient-cont')
        if b.count() and b.is_enabled(): b.click(); settle(pg, 250); return True
        pg.evaluate("() => { const d = document.querySelector('#orient-body details.check'); if (d) d.open = true; }")
        opts = pg.locator('#orient-body .orient-opt:not([disabled])')
        if not opts.count(): return False
        opts.first.click(); settle(pg, 120)
        r = pg.locator('#orient-retry')
        if r.count(): r.click(); settle(pg, 120)
    return False
def gated_somewhere(pg, n=4):
    """walks the first cards; True when a card with a Study Check holds Continue shut"""
    for _ in range(n):
        if has_q(pg): return not cont_open(pg)
        advance(pg)
    return False

with sync_playwright() as p:
    br = p.chromium.launch()
    for tag, kw in (('', {'viewport': {'width': 1280, 'height': 900}}), ('m.', {'viewport': {'width': 390, 'height': 844}, 'is_mobile': True, 'has_touch': True})):
        ctx, pg = page_of(br, **kw)
        pg.goto(BASE); settle(pg, 1200)
        pg.click('#study-card-logic'); settle(pg, 400)
        check(tag + 'u1 an unfinished deck stays gated', gated_somewhere(pg))
        pg.click('#orient-back'); settle(pg, 400)
        pg.click('#study-card-logic'); settle(pg, 400)
        n = int(step(pg).split(' of ')[1])
        for i in range(n): advance(pg)
        check(tag + 'f0 finishing the last card records it (recite.decks.logic.done)', screen(pg) == 'scr-home' and done_of(pg, 'logic'), screen(pg))
        s0 = prog(pg)
        pg.click('#study-card-logic'); settle(pg, 400)
        allopen, qs, steps = True, 0, []
        for i in range(n):
            allopen = allopen and cont_open(pg)
            qs += 1 if has_q(pg) else 0
            steps.append(step(pg))
            if i < n - 1: pg.click('#orient-cont'); settle(pg, 200)
        check(tag + 'f1 a finished deck opens first to last without answering', allopen and steps[-1].startswith('Step %d of %d' % (n, n)), steps[-3:])
        check(tag + 'f2 its Study Checks are still shown', qs >= 3, qs)
        back(pg); back(pg)
        check(tag + 'f3 Back steps through its cards', step(pg).startswith('Step %d ' % (n - 2)) and cont_open(pg), step(pg))
        while not has_q(pg): pg.click('#orient-cont'); settle(pg, 200)
        pg.evaluate("() => { const d = document.querySelector('#orient-body details.check'); if (d) d.open = true; }")
        pg.locator('#orient-body .orient-opt').first.click(); settle(pg, 200)
        shown = pg.evaluate("() => { const e = document.getElementById('orient-explain'); return e && e.style.display !== 'none' && /Correct|Incorrect/.test(e.textContent); }")
        check(tag + 'f4 a question can still be answered (marked, with its explanation)', shown and cont_open(pg))
        while cont_open(pg) and screen(pg) == 'scr-orient': pg.click('#orient-cont'); settle(pg, 200)
        check(tag + 'f5 clicking through credits nothing (progress record unchanged)', screen(pg) == 'scr-home' and prog(pg) == s0)
        pg.click('#study-card-act2'); settle(pg, 400)
        check(tag + 'f6 another, unfinished deck stays gated', gated_somewhere(pg))
        ctx.close()

    # legacy record (a deck finished before this change)
    legacy = json.dumps({'recite': {'decks': {'act1': {'done': True, 'doneAt': 1761900000000}}}})
    ctx, pg = page_of(br, init="localStorage.getItem('%s') || localStorage.setItem('%s', %s)" % (KEY, KEY, json.dumps(legacy)))
    pg.goto(BASE); settle(pg, 1200)
    pg.click('#study-card-act1'); settle(pg, 400)
    n = int(step(pg).split(' of ')[1]); ok = True
    for i in range(n - 1):
        ok = ok and cont_open(pg); pg.click('#orient-cont'); settle(pg, 150)
    check('l1 a deck already recorded as finished opens freely', ok and step(pg).startswith('Step %d ' % n))
    pg.click('#orient-back'); settle(pg, 400)
    pg.click('#study-card-act3'); settle(pg, 400)
    check('l2 a deck with no record stays gated', gated_somewhere(pg))
    ctx.close()

    # Erase all progress clears it (Guided Path, tracking on)
    guided = json.dumps({'schemaVersion': 1, 'settings': {'trackingEnabled': True}, 'sets': {}, 'recite': {'decks': {'logic': {'done': True, 'doneAt': 1761900000000}}}})
    ctx, pg = page_of(br, init="if (!sessionStorage.getItem('seeded')) { sessionStorage.setItem('seeded', '1'); localStorage.setItem('arsSyllogistica.path', 'guided'); localStorage.setItem('%s', %s); }" % (KEY, json.dumps(guided)))
    pg.goto(BASE); settle(pg, 1200)
    pg.click('#study-card-logic'); settle(pg, 400)
    check('z0 seeded finished deck opens freely on the Guided Path', cont_open(pg))
    pg.click('#orient-back'); settle(pg, 400)
    pg.click('#btn-progress'); settle(pg, 500)
    pg.once('dialog', lambda d: d.accept())
    pg.click('#prog-erase'); settle(pg, 500)
    pg.click('#prog-back'); settle(pg, 400)
    pg.click('#study-card-logic'); settle(pg, 400)
    check('z1 after Erase all progress the deck is gated again', gated_somewhere(pg) and not done_of(pg, 'logic'))
    ctx.close()
    br.close()

bad = [n for n, ok in results if not ok]
print('\nerrors:', errors[:8])
print('%d/%d passed' % (len(results) - len(bad), len(results)))
raise SystemExit(1 if bad or errors else 0)
