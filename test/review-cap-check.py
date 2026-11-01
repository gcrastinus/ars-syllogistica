"""No pile-up of due mastered exercises (gpSpreadSets). Serve the repo on :8013, or set BASE."""
import os, json, re
from playwright.sync_api import sync_playwright
BASE = os.environ.get('BASE', 'http://localhost:8013/index.html')
KEY, PKEY = 'arsSyllogistica.progress.v1', 'arsSyllogistica.path'
res = []
def check(n, c, x=''): res.append(bool(c)); print(('ok   ' if c else 'FAIL ') + n, '' if c else x)
ids = [str(i) for i in range(1, 27)]
with sync_playwright() as p:
    br = p.chromium.launch(); pg = br.new_page(); errs = []
    pg.on('pageerror', lambda e: errs.append(str(e)))
    pg.goto(BASE); pg.wait_for_timeout(1500)
    schema = int(os.environ.get('SCHEMA', '1'))
    seed = pg.evaluate("""([ids, key, pkey, schema]) => {
      const d = n => { const x = new Date(); x.setDate(x.getDate() + n); return x.getFullYear()+'-'+String(x.getMonth()+1).padStart(2,'0')+'-'+String(x.getDate()).padStart(2,'0'); };
      const sets = {};
      ids.forEach((id, i) => { sets[id] = { state:'mastered', seen:20, correct:18, history:[], box:1 + i % 5, nextDue:d(-21 + (i % 7)), passedOn:d(-60), masteredOn:d(-50), masterLevel:5 }; });
      const o = { schemaVersion:schema, settings:{ trackingEnabled:true }, sets, renumbered1314:true, shiftedPredCat2:true, insertedChain17:true };
      localStorage.setItem(key, JSON.stringify(o)); localStorage.setItem(pkey, 'guided'); return o; }""", [ids, KEY, PKEY, schema])
    pg.reload(); pg.wait_for_timeout(1500)
    due = [str(x) for x in pg.evaluate("() => window.__arsDueSets()")]
    o = pg.evaluate(f"() => JSON.parse(localStorage.getItem('{KEY}'))")
    t = pg.evaluate("() => { const x = new Date(); return x.getFullYear()+'-'+String(x.getMonth()+1).padStart(2,'0')+'-'+String(x.getDate()).padStart(2,'0'); }")
    check('l1 at most 3 exercises due today', len(due) == 3, due)
    by = {}
    for k in ids: by[o['sets'][k]['nextDue']] = by.get(o['sets'][k]['nextDue'], 0) + 1
    check('l2 every later day has at most 3', all(n <= 3 for d, n in by.items() if d >= t), by)
    check('l3 box, pass, and mastery kept', all(o['sets'][i]['box'] == seed['sets'][i]['box'] and o['sets'][i]['masteredOn'] == seed['sets'][i]['masteredOn'] and o['sets'][i]['passedOn'] == seed['sets'][i]['passedOn'] for i in ids))
    old = sorted(ids, key=lambda i: (seed['sets'][i]['nextDue'], int(i)))
    check('l4 the most overdue come first', due == old[:3], (due, old[:3]))
    check('l5 all still mastered', all(o['sets'][i]['state'] == 'mastered' for i in ids))
    flags = pg.evaluate("() => [...document.querySelectorAll('.flag-due')].filter(e => e.offsetParent || true).length")
    check('l6 no more than 3 exercises marked review due', flags <= 3, flags)
    pg.reload(); pg.wait_for_timeout(1200); pg.evaluate("() => window.__arsDueSets()")
    o2 = pg.evaluate(f"() => JSON.parse(localStorage.getItem('{KEY}'))")
    check('l7 opening again the same day moves nothing', all(o2['sets'][i]['nextDue'] == o['sets'][i]['nextDue'] for i in ids))
    check('l9 no page errors', not errs, errs)
    br.close()
print(f"\n{len(res)} checks, {res.count(False)} failed.")
