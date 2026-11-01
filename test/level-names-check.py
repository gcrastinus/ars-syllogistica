"""Level names check: Apprentice -> Junior Student, Journeyman -> Student.
Usage: BASE=http://localhost:8013/ SHOTS=/workspace/level-rename python3 test/level-names-check.py"""
import os, re, pathlib
from playwright.sync_api import sync_playwright
BASE = os.environ.get('BASE', 'http://localhost:8013/').rstrip('/') + '/'
OUT = os.environ.get('SHOTS', '/workspace/level-rename')
ROOT = pathlib.Path(__file__).resolve().parent.parent
res = []
def check(n, c, x=''): res.append(bool(c)); print(('ok   ' if c else 'FAIL ') + n, '' if c else x)
OLD = re.compile(r'apprentice|journeym[ae]n', re.I)
if True:  # the repo files beside this test
    hits = [str(p.relative_to(ROOT)) for p in ROOT.rglob('*') if p.is_file() and '.git' not in p.parts
            and p.name != 'level-names-check.py' and p.suffix in ('.js', '.html', '.css', '.py', '.md', '.txt', '.json')
            and OLD.search(p.read_text(errors='ignore'))]
    check('files: no Apprentice or Journeyman left in the repo', not hits, hits)
EXPECT = ['I · Novice', 'II · Junior Student', 'III · Student', 'IV · Scholar', 'V · Master']
with sync_playwright() as p:
    b = p.chromium.launch()
    def page(w, h, z=1, dark=False):
        pg = b.new_page(viewport={'width': int(w / z), 'height': int(h / z)}, device_scale_factor=z)
        errs = []; pg.on('pageerror', lambda e: errs.append(str(e)))
        pg.goto(BASE + 'index.html?cb=' + str(os.getpid())); pg.wait_for_timeout(1200)
        if dark: pg.evaluate("() => { if(!document.body.classList.contains('dark')) document.getElementById('dark-toggle').click(); }")
        return pg, errs
    pg, errs = page(1280, 900)
    names = pg.evaluate("() => [1,2,3,4,5].map(d => DIFF[d].label.split(' — ')[0])")
    check('ladder: Novice, Junior Student, Student, Scholar, Master', names == ['Novice', 'Junior Student', 'Student', 'Scholar', 'Master'], names)
    pg.click('#level-menu button'); pg.wait_for_timeout(300)
    opts = pg.eval_on_selector_all('#level-menu [role=option] .choice-name', 'els => els.map(e => e.textContent)')
    check('menu: the five levels with the new names', opts == EXPECT, opts)
    pg.click('#level-menu [role=option][data-value="2"]'); pg.wait_for_timeout(300)
    check('menu: choosing Level II shows "II · Junior Student"', pg.inner_text('#level-menu button').strip().startswith('II · Junior Student'), pg.inner_text('#level-menu button'))
    expl = pg.inner_text('#level-expl')
    check('explanation reads "Level II, Junior Student:"', 'Level II, Junior Student:' in expl, expl[:80])
    check('page text has no old names', not OLD.search(pg.inner_text('body')))
    check('saved data holds level numbers, not names', not OLD.search(pg.evaluate("() => JSON.stringify(localStorage)")))
    check('no page errors', not errs, errs)
    for w, z, dark, tag in [(1280, 1, False, 'desktop-light'), (1280, 1, True, 'desktop-dark'), (375, 1, False, 'phone'), (375, 1.5, True, 'phone-150-dark'), (375, 2, False, 'phone-200'), (375, 2, True, 'phone-200-dark')]:
        pg, errs = page(w, 800, z, dark)
        pg.evaluate("() => document.getElementById('level-menu').scrollIntoView({block:'start'})")
        pg.click('#level-menu button'); pg.wait_for_timeout(300)
        fit = pg.evaluate("""() => { const vw = document.documentElement.clientWidth;
          const els = [document.querySelector('#level-menu button'), ...document.querySelectorAll('#level-menu [role=option]')];
          return els.every(e => { const r = e.getBoundingClientRect(); return r.left >= -1 && r.right <= vw + 1 && e.scrollWidth <= e.clientWidth + 1; }); }""")
        check(f'{tag}: level menu and "Junior Student" fit', fit)
        pg.screenshot(path=f'{OUT}/logica-{tag}.png')
    tq = b.new_page(); tq.goto(BASE + 'teacher-quiz.html'); tq.wait_for_timeout(800)
    t = tq.eval_on_selector_all('#diffSel option', 'els => els.map(e => e.textContent)')
    check('teacher quiz: Level II and III use the new names', 'II — Junior Student' in t and 'III — Student' in t, t)
    tq.select_option('#diffSel', '2'); tq.wait_for_timeout(200)
    check('teacher quiz: level hint reads Junior Student', tq.inner_text('#diffHint').startswith('Junior Student'), tq.inner_text('#diffHint'))
    b.close()
print(f'\n{len(res)} checks, {res.count(False)} failed.')
