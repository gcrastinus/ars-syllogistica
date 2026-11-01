"""Course settings title check. Usage: python3 check.py BASE NAME RULESEL"""
import sys, os
from playwright.sync_api import sync_playwright
BASE, NAME, RULE = sys.argv[1], sys.argv[2], sys.argv[3]
OUT = os.environ.get('SHOTS', '/workspace/course-settings')
res = []
def check(n, c, x=''): res.append(bool(c)); print(('ok   ' if c else 'FAIL ') + n, '' if c else x)
JS = """(rule) => {
  const els = [...document.querySelectorAll('.course-settings-title')];
  const t = els[0]; if (!t) return { n: 0 };
  const pre = document.querySelector('.intro-preface'), r = document.querySelector(rule), set = document.querySelector('#level-menu');
  const after = (a, b) => !!(a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING);
  const cs = getComputedStyle(t), h1 = getComputedStyle(document.querySelector('h1'));
  const rgb = s => s.match(/[\\d.]+/g).slice(0, 3).map(Number);
  const lum = c => { const v = c.map(x => { x /= 255; return x <= .03928 ? x / 12.92 : Math.pow((x + .055) / 1.055, 2.4); }); return .2126 * v[0] + .7152 * v[1] + .0722 * v[2]; };
  let bg = 'rgba(0, 0, 0, 0)', e = t;
  while (e && (bg === 'rgba(0, 0, 0, 0)' || bg === 'transparent')) { bg = getComputedStyle(e).backgroundColor; e = e.parentElement; }
  if (bg === 'rgba(0, 0, 0, 0)') bg = getComputedStyle(document.documentElement).backgroundColor;
  const L1 = lum(rgb(cs.color)), L2 = lum(rgb(bg));
  const rect = t.getBoundingClientRect();
  return { n: els.length, text: t.textContent, order: after(pre, t) && after(t, r) && after(r, set),
    italic: cs.fontStyle, align: cs.textAlign, size: parseFloat(cs.fontSize), h1: parseFloat(h1.fontSize), font: cs.fontFamily,
    contrast: (Math.max(L1, L2) + .05) / (Math.min(L1, L2) + .05), visible: rect.height > 0 && cs.display !== 'none',
    overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth, right: rect.right, vw: innerWidth,
    gap: r.getBoundingClientRect().top - rect.bottom };
}"""
def shot(pg, tag):
    pg.evaluate("() => document.querySelector('.course-settings-title').scrollIntoView({block:'center'})"); pg.wait_for_timeout(300)
    pg.screenshot(path=f'{OUT}/{NAME}-{tag}.png')
with sync_playwright() as p:
    br = p.chromium.launch(); errs = []
    pg = br.new_page(viewport={'width': 1280, 'height': 900}); pg.on('pageerror', lambda e: errs.append(str(e)))
    pg.goto(BASE); pg.wait_for_timeout(2000)
    pg.evaluate("() => { const b = document.querySelector('.tab-lock-card'); }")
    d = pg.evaluate(JS, RULE)
    check('c1 exactly one title', d['n'] == 1, d)
    check('c2 text is exactly "Course settings"', d.get('text') == 'Course settings', d.get('text'))
    check('c3 after the Preface button, before the line and the settings', d['order'])
    check('c4 italic and centered', d['italic'] == 'italic' and d['align'] == 'center', d)
    check('c5 modest size (20 to 28 px, below the title)', 20 <= d['size'] <= 28 and d['size'] < d['h1'], d['size'])
    check('c6 contrast at least 4.5 in light mode', d['contrast'] >= 4.5, d['contrast'])
    check('c7 the line follows closely', 0 <= d['gap'] <= 40, d['gap'])
    shot(pg, 'desktop-light')
    pg.evaluate("() => document.body.classList.add('dark')"); pg.wait_for_timeout(300)
    d = pg.evaluate(JS, RULE)
    check('c8 contrast at least 4.5 in dark mode', d['contrast'] >= 4.5 and d['visible'], d['contrast'])
    shot(pg, 'desktop-dark')
    fonts = []
    for f in ['garamond', 'plain']:
        pg.evaluate(f"() => document.documentElement.setAttribute('data-font', '{f}')"); pg.wait_for_timeout(200)
        fonts.append(pg.evaluate(JS, RULE)['font'])
    pg.evaluate("() => document.documentElement.removeAttribute('data-font')")
    check('c9 follows the chosen font', 'Garamond' in fonts[0] and 'Atkinson' in fonts[1], fonts)
    for w, z in [(375, 1), (375, 1.5), (375, 2)]:
        ph = br.new_page(viewport={'width': int(w / z), 'height': int(800 / z)}, device_scale_factor=z)
        ph.goto(BASE); ph.wait_for_timeout(1800)
        d = ph.evaluate(JS, RULE)
        check(f'c10 phone {w}px at {int(z*100)}%: title fits inside the screen (page overflow ' + str(d['overflow']) + 'px, unchanged from before)', d['right'] <= d['vw'] and d['overflow'] <= 13, d)
        if z == 1: shot(ph, 'phone'); ph.evaluate("() => document.body.classList.add('dark')"); shot(ph, 'phone-dark')
        if z == 2: shot(ph, 'phone-200')
        ph.close()
    check('c11 no page errors', not errs, errs)
    br.close()
print(f"\n{len(res)} checks, {res.count(False)} failed.")
sys.exit(1 if False in res else 0)
