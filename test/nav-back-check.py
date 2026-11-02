#!/usr/bin/env python3
"""Back and Forward check for nav.js in Ars Logica (2 Nov 2026). Headless Chromium through Playwright for Python.
     python3 test/nav-back-check.py                      # against http://localhost:8023/index.html
     BASE=https://logica.studiuminstitute.org/ python3 test/nav-back-check.py   # read-only, fresh profile
   Each browser context is new, so nothing is kept between runs and nothing is sent anywhere."""
import json, os
from playwright.sync_api import sync_playwright

BASE = os.environ.get('BASE', 'http://localhost:8023/index.html')
STORE = 'arsSyllogistica.progress.v1'
results, errors = [], []

def check(name, ok, info=''):
    results.append((name, bool(ok)))
    print(('ok    ' if ok else 'FAIL  ') + name + (('  [' + str(info) + ']') if not ok and info != '' else ''))

def page_of(browser, **kw):
    ctx = browser.new_context(**kw)
    pg = ctx.new_page()
    pg.on('pageerror', lambda e: errors.append('pageerror: ' + str(e)))
    pg.on('console', lambda m: errors.append('console: ' + m.text) if m.type == 'error' else None)
    return ctx, pg

def screen(pg): return pg.evaluate("() => (document.querySelector('.screen.active') || {}).id")
def st(pg): return pg.evaluate("() => history.state")
def hl(pg): return pg.evaluate("() => history.length")
def step(pg): return pg.evaluate("() => { const e = document.querySelector('#orient-body .orient-prog'); return e ? e.textContent.trim() : ''; }")
def cont_open(pg): return pg.evaluate("() => { const b = document.getElementById('orient-cont'); return !!b && !b.disabled; }")
def has_q(pg): return pg.evaluate("() => !!document.querySelector('#orient-body .orient-opt')")
def settle(pg, ms=500): pg.wait_for_timeout(ms)
def back(pg, ms=500): pg.evaluate("() => { setTimeout(() => history.back(), 0); }"); settle(pg, ms)
def fwd(pg, ms=500): pg.evaluate("() => { setTimeout(() => history.forward(), 0); }"); settle(pg, ms)
def lstore(pg): return pg.evaluate("() => JSON.stringify(Object.keys(localStorage).sort().map(k => [k, localStorage.getItem(k)]))")
def asking(pg): return pg.evaluate("() => !!document.querySelector('.nav-ask')")
def advance(pg):
    """answers the card's Study Check (trying options until one is right), then Continue"""
    for _ in range(20):
        b = pg.locator('#orient-cont')
        if b.count() and b.is_enabled(): b.click(); settle(pg, 300); return True
        pg.evaluate("() => { const d = document.querySelector('#orient-body details.check'); if (d) d.open = true; }")
        opts = pg.locator('#orient-body .orient-opt:not([disabled])')
        if not opts.count(): return False
        opts.first.click(); settle(pg, 150)
        r = pg.locator('#orient-retry')
        if r.count(): r.click(); settle(pg, 150)
    return False

def deck_walk(pg, tag):
    pg.goto('about:blank'); pg.goto(BASE); settle(pg, 1200)
    L0 = hl(pg)
    check(tag + 'a0 first screen is home', screen(pg) == 'scr-home' and st(pg)['r'] == 'home')
    pg.click('#study-card-logic'); settle(pg, 500)
    check(tag + 'a1 study tile opens the deck as a new entry', screen(pg) == 'scr-orient' and hl(pg) == L0 + 1 and st(pg)['card'] == 0, (screen(pg), hl(pg), L0))
    for i in range(3): advance(pg)
    check(tag + 'a2 each Continue is its own entry', hl(pg) == L0 + 4 and st(pg)['card'] == 3 and step(pg).startswith('Step 4'), (hl(pg), st(pg), step(pg)))
    s0 = lstore(pg)
    ok, opn = True, True
    for want in (2, 1, 0):
        back(pg)
        ok = ok and screen(pg) == 'scr-orient' and st(pg)['card'] == want and step(pg).startswith('Step %d ' % (want + 1))
        opn = opn and cont_open(pg)
    check(tag + 'a3 Back goes card by card', ok, (st(pg), step(pg)))
    check(tag + 'a3b a card already passed keeps Continue open', opn)
    back(pg)
    check(tag + 'a4 then Back goes home', screen(pg) == 'scr-home' and st(pg)['r'] == 'home')
    fwd(pg); fwd(pg)
    check(tag + 'f1 Forward goes back into the cards', screen(pg) == 'scr-orient' and st(pg)['card'] == 1 and cont_open(pg), (st(pg), step(pg)))
    back(pg); back(pg)
    check(tag + 'x1 stepping changed nothing kept', lstore(pg) == s0)
    back(pg, 900)
    check(tag + 'a5 Back from the first screen leaves the app', pg.url == 'about:blank', pg.url)

with sync_playwright() as p:
    br = p.chromium.launch()

    ctx, pg = page_of(br, viewport={'width': 1280, 'height': 900})
    deck_walk(pg, '')
    ctx.close()
    ctx, pg = page_of(br, viewport={'width': 390, 'height': 844}, device_scale_factor=2, is_mobile=True, has_touch=True)
    deck_walk(pg, 'm.')
    ctx.close()

    # ---------- reload keeps the place; the card reached stays gated ----------
    ctx, pg = page_of(br)
    pg.goto(BASE); settle(pg, 1200)
    pg.click('#study-card-act1'); settle(pg, 400)
    advance(pg); advance(pg)
    before = (st(pg)['card'], step(pg), cont_open(pg))
    pg.reload(); settle(pg, 1500)
    after = (st(pg)['card'], step(pg), cont_open(pg))
    check('r1 reload reopens the same deck at the same card', screen(pg) == 'scr-orient' and before[:2] == after[:2] and pg.evaluate("() => document.getElementById('orient-title').textContent").startswith('The First Act'), (before, after))
    check('r2 a card not yet answered stays gated after reload', has_q(pg) == (not after[2]), after)
    back(pg)
    check('r3 Back after reload still steps to the card before', st(pg)['card'] == before[0] - 1 and cont_open(pg), st(pg))
    ctx.close()

    # ---------- deep link ----------
    ctx, pg = page_of(br)
    pg.goto('about:blank'); pg.goto(BASE.split('#')[0] + '#study/act2'); settle(pg, 1500)
    check('d1 #study/act2 opens that deck at its first card', screen(pg) == 'scr-orient' and st(pg)['r'] == 'study' and st(pg)['id'] == 'act2' and step(pg).startswith('Step 1 '), (screen(pg), st(pg)))
    pg.click('#orient-title'); settle(pg, 200)
    back(pg)
    check('d2 Back from a deep link goes home', screen(pg) == 'scr-home' and st(pg)['r'] == 'home', (screen(pg), st(pg)))
    back(pg, 900)
    check('d3 then Back leaves the app', pg.url == 'about:blank', pg.url)
    pg.goto(BASE.split('#')[0] + '#study/act2/../../x'); settle(pg, 1200)
    check('d4 an unknown address opens home', screen(pg) == 'scr-home')
    ctx.close()

    # ---------- an exercise: lead-in, sitting, guard ----------
    ctx, pg = page_of(br)
    pg.goto(BASE); settle(pg, 1200)
    L0 = hl(pg)
    pg.click('.exercise-set:has(#set-flag-1)'); settle(pg, 400)
    check('e1 an exercise opens its lead-in as a new entry', screen(pg) == 'scr-orient' and st(pg)['r'] == 'lead' and hl(pg) == L0 + 1, st(pg))
    sk = pg.locator('#lead-skip, #lead-skip-top')
    sk.first.click(); settle(pg, 400)
    if screen(pg) == 'scr-levelpick':
        pg.click('#lp-levels .lp-lvl:not(.locked) >> nth=0'); settle(pg, 400)
    check('e2 the sitting is its own entry', screen(pg) == 'scr-quiz' and st(pg)['r'] == 'set', (screen(pg), st(pg)))
    hq = hl(pg)
    back(pg)
    check('e3 Back in a sitting asks first and stays', asking(pg) and screen(pg) == 'scr-quiz' and st(pg)['r'] == 'set', (asking(pg), screen(pg)))
    pg.click('.nav-ask [data-a="stay"]'); settle(pg, 300)
    check('e4 Stay keeps the sitting', not asking(pg) and screen(pg) == 'scr-quiz')
    back(pg)
    pg.click('.nav-ask [data-a="leave"]'); settle(pg, 800)
    check('e5 Leave goes home', screen(pg) == 'scr-home' and st(pg)['r'] == 'home', (screen(pg), st(pg)))
    pg.click('.exercise-set:has(#set-flag-1)'); settle(pg, 400)
    pg.locator('#lead-skip, #lead-skip-top').first.click(); settle(pg, 400)
    if screen(pg) == 'scr-levelpick':
        pg.click('#lp-levels .lp-lvl:not(.locked) >> nth=0'); settle(pg, 400)
    pg.reload(); settle(pg, 1500)
    check('r4 reload in a sitting reopens the same exercise', screen(pg) in ('scr-quiz', 'scr-levelpick') and 'I' in pg.evaluate("() => (document.getElementById(document.querySelector('.screen.active').id === 'scr-quiz' ? 'quiz-title' : 'lp-title') || {}).textContent || ''"), screen(pg))
    pg.click('#btn-home') if screen(pg) == 'scr-quiz' and pg.locator('#btn-back').count() == 0 else None
    ctx.close()

    # ---------- Review, Progress, workshops: each one step ----------
    ctx, pg = page_of(br)
    pg.goto(BASE); settle(pg, 1200)
    pg.click('#review-btn-logic'); settle(pg, 400)
    check('v1 a deck Review is its own entry', screen(pg) == 'scr-orient' and st(pg)['r'] == 'review', st(pg))
    back(pg)
    check('v2 Back from a Review goes home', screen(pg) == 'scr-home', screen(pg))
    fwd(pg)
    check('v3 Forward to a Review left behind shows home, not a dead Review', screen(pg) == 'scr-home', screen(pg))
    pg.evaluate("() => localStorage.setItem('arsSyllogistica.path', 'guided')"); pg.reload(); settle(pg, 1200)
    pg.click('#btn-progress'); settle(pg, 400)
    check('v4 Progress is its own entry', screen(pg) == 'scr-progress' and st(pg)['r'] == 'prog', st(pg))
    back(pg)
    check('v5 Back from Progress goes home', screen(pg) == 'scr-home', screen(pg))
    pg.locator('#lab1-open, [id^=lab1-open]').first.click(); settle(pg, 400)
    check('v6 a workshop is its own entry', screen(pg) == 'scr-lab1' and st(pg)['r'] == 'lab1', st(pg))
    back(pg)
    check('v7 Back from a workshop goes home', screen(pg) == 'scr-home', screen(pg))
    ctx.close()

    # ---------- the Recitation Tablet is one step ----------
    ctx, pg = page_of(br)
    pg.goto('about:blank'); pg.goto(BASE); settle(pg, 1200)
    pg.click('#recite-open'); settle(pg, 500)
    opened = pg.evaluate("() => !document.getElementById('recite-overlay').hidden")
    back(pg)
    check('t1 Back closes the Recitation Tablet and stays in the app', opened and pg.url != 'about:blank' and pg.evaluate("() => document.getElementById('recite-overlay').hidden") and screen(pg) == 'scr-home', (opened, pg.url))
    pg.click('#recite-open'); settle(pg, 400)
    pg.click('#recite-close'); settle(pg, 500)
    back(pg, 900)
    check('t2 its Close button takes its entry off (Back then leaves the app)', pg.url == 'about:blank', pg.url)
    ctx.close()

    br.close()

bad = [n for n, ok in results if not ok]
print('\nerrors:', errors[:8])
print('%d/%d passed' % (len(results) - len(bad), len(results)))
raise SystemExit(1 if bad or errors else 0)
