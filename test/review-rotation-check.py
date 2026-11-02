"""Deck Review: fewer questions and no repeated wordings across reviews.
Serve the repo on :8013, or set BASE.  python3 test/review-rotation-check.py"""
import os, json
from playwright.sync_api import sync_playwright
BASE = os.environ.get('BASE', 'http://localhost:8013/index.html')
KEY, PKEY = 'arsSyllogistica.progress.v1', 'arsSyllogistica.path'
res = []
def check(n, c, x=''): res.append(bool(c)); print(('ok   ' if c else 'FAIL ') + n, '' if c else x)

def run_review(pg, deck):
    """Open a deck Review from its tile, answer every question, return the prompts."""
    pg.evaluate(f"() => document.getElementById('review-btn-{deck}').click()")
    return finish(pg)
def finish(pg):
    seen = []
    for _ in range(20):
        if pg.locator('#rev-again').count(): break
        seen.append(pg.inner_text('#orient-body .orient-q'))
        pg.click('#orient-body .orient-opt >> nth=0')
        pg.click('#rev-next')
    return seen

with sync_playwright() as p:
    br = p.chromium.launch(); pg = br.new_page(); errs = []
    pg.on('pageerror', lambda e: errs.append(str(e)))
    pg.goto(BASE); pg.wait_for_timeout(1500)
    decks = pg.evaluate("() => window.__arsReviewDecks()")
    # c1 count rule: max(4, min(6, cards - 2))
    want = {7: 5, 8: 6, 9: 6, 11: 6, 6: 4, 5: 4, 4: 4}
    ok = True
    for n, w in want.items():
        got = pg.evaluate("n => window.__arsReviewPick(Array(n).fill(3), null).keys.length", n)
        ok = ok and got == w
    check('c1 question count: 7 cards 5, 8-11 cards 6, floor 4', ok)
    # c2-c4 with the real decks, 200 runs of 8 consecutive reviews each
    stats = pg.evaluate("""decks => {
      let rep = 0, cardRep = 0, allCovered = 0, runs = 0, distinctCards = 0, coverFail = [];
      for (const d of decks) for (let t = 0; t < 200; t++) {
        let rec = null, prev = null; const cards = new Set(), seenCycle = [];
        const nCards = d.forms.filter(x => x).length;
        for (let r = 0; r < 8; r++) {
          const x = window.__arsReviewPick(d.forms, rec); rec = JSON.parse(JSON.stringify(x.rec));
          const cs = x.keys.map(k => k.split('.')[0]);
          if (new Set(cs).size !== cs.length) distinctCards++;
          if (prev) { rep += x.keys.filter(k => prev.includes(k)).length;
                      const freshCards = d.forms.map((_, i) => String(i)).filter(i => !prev.some(k => k.split('.')[0] === i));
                      const need = Math.min(freshCards.length, x.keys.length);
                      if (cs.filter(c => freshCards.includes(c)).length < need) cardRep++; }
          cs.forEach(c => cards.add(c)); prev = x.keys;
          if (r === Math.ceil(nCards / x.keys.length) && cards.size === nCards) allCovered++;
          if (r === Math.ceil(nCards / x.keys.length) && cards.size !== nCards) coverFail.push(d.id);
        }
        runs++;
      }
      return {rep, cardRep, allCovered, runs, distinctCards, coverFail: coverFail.slice(0, 5)};
    }""", decks)
    check('c2 no card+wording repeats between consecutive reviews (all 18 decks)', stats['rep'] == 0, stats)
    check('c3 cards not asked last time are always preferred', stats['cardRep'] == 0, stats)
    check('c4 every card asked within ceil(cards/questions)+1 reviews', stats['allCovered'] == stats['runs'], stats)
    check('c5 one wording per card within a review', stats['distinctCards'] == 0, stats)
    # c6 no wording comes back until all of the deck's wordings were used (7-card deck)
    cyc = pg.evaluate("""() => { const f = Array(7).fill(3); let rec = null, used = [];
      for (let r = 0; r < 4; r++) { const x = window.__arsReviewPick(f, rec); rec = x.rec; used = used.concat(x.keys); }
      return {n: used.length, distinct: new Set(used).size}; }""")
    check('c6 7-card deck: the first 20 questions over 4 reviews are 20 different wordings', cyc['n'] == cyc['distinct'] == 20, cyc)
    # c7 11-card deck: 6 asked, the 5 left out come first next time
    d11 = pg.evaluate("""() => { const f = Array(11).fill(3); const a = window.__arsReviewPick(f, null);
      const b = window.__arsReviewPick(f, a.rec); const ca = a.keys.map(k => k.split('.')[0]), cb = b.keys.map(k => k.split('.')[0]);
      const left = [...Array(11).keys()].map(String).filter(c => !ca.includes(c));
      return {na: a.keys.length, leftAllAsked: left.every(c => cb.includes(c)), overlap: cb.filter(c => ca.includes(c)).length}; }""")
    check('c7 11-card deck: 6 asked; the 5 left out are all asked next time, plus 1 repeat card in a new wording', d11['na'] == 6 and d11['leftAllAsked'] and d11['overlap'] == 1, d11)
    # c8 bad or old records do not break anything
    bad = pg.evaluate("""() => [null, {}, {u: 'x'}, {u: ['99.9', 'a'], l: 5}, 'junk'].map(r => window.__arsReviewPick(Array(8).fill(3), r).keys.length)""")
    check('c8 missing, malformed or stale records still give a full review', bad == [6] * 5, bad)

    # c9-c12 the real screen, Guided Path with tracking, seeded with old saved data (rev flags, no revSeen)
    pg.evaluate("""([key, pkey]) => {
      const o = {schemaVersion: 1, settings: {trackingEnabled: true}, sets: {}, study: {lead: {act3: true}, rev: {act1: true, logic: true}},
                 renumbered1314: true, shiftedPredCat2: true, insertedChain17: true};
      localStorage.setItem(key, JSON.stringify(o)); localStorage.setItem(pkey, 'guided'); }""", [KEY, PKEY])
    pg.reload(); pg.wait_for_timeout(1500)
    done = pg.evaluate("() => document.getElementById('review-btn-act1').classList.contains('is-done')")
    check('c9 old saved data: existing Review done flags still show', done)
    a = run_review(pg, 'act3')
    b = finish(pg.click('#rev-again') or pg)
    check('c10 act3 (7 cards): 5 questions each time', len(a) == 5 and len(b) == 5, (len(a), len(b)))
    check('c11 "Review again" gives 5 new wordings', not set(a) & set(b), set(a) & set(b))
    o = pg.evaluate(f"() => JSON.parse(localStorage.getItem('{KEY}'))")
    st = o.get('study', {})
    check('c12 saved: rev flags kept (act1, logic, act3) and a per-deck record in study.revSeen',
          st.get('rev', {}).get('act1') and st.get('rev', {}).get('logic') and st.get('rev', {}).get('act3')
          and st.get('lead', {}).get('act3') and len(st.get('revSeen', {}).get('act3', {}).get('u', [])) == 10, st)
    pg.reload(); pg.wait_for_timeout(1500)
    c = run_review(pg, 'act3')
    check('c13 after a reload the third review still avoids the last one', not set(c) & set(b) and len(c) == 5, set(c) & set(b))
    lg = run_review(pg, 'logic')
    check('c14 logic (11 cards): 6 questions', len(lg) == 6, len(lg))
    check('c15 no page errors', not errs, errs)
    br.close()
print(f"{sum(res)}/{len(res)} passed"); raise SystemExit(0 if all(res) else 1)
