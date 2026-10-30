# Playwright check of Exercise V feedback for I and O (wrong mark, wrong region / stray ⊗)
import sys
from playwright.sync_api import sync_playwright
URL='http://localhost:8977/index.html'
CASES=[ # name, type, region, clicks, expected snippet
 ('I_wrong_mark_imp','I','AB',3,'“Some S are P” itself asserts that something exists in this region'),
 ('O_wrong_mark_imp','O','X',3,'the × is only the diagram’s way of marking this region; the O proposition asserts no existence'),
 ('I_wrong_mark_shade','I','AB',1,'“Some S are P” asserts that something <em>exists</em>'.replace('<em>','').replace('</em>','')),
 ('O_wrong_mark_shade','O','X',1,'since the O proposition asserts no existence. Shading would declare'),
 ('I_wrong_region_imp','I','A',3,'An I proposition shows its existence with an ×'),
 ('O_wrong_region_imp','O','Y',3,'For “Some S are not P” the × is only the diagram’s way of marking the region'),
]
fails=0; errors=[]
with sync_playwright() as p:
    b=p.chromium.launch(args=['--no-sandbox'])
    for name,t,reg,n,exp in CASES:
        pg=b.new_page(viewport={'width':1100,'height':1300})
        pg.on('console', lambda m: m.type=='error' and errors.append(m.text))
        pg.on('pageerror', lambda e: errors.append(str(e)))
        pg.goto(URL); pg.wait_for_timeout(1200)
        pg.evaluate("""t=>{const g=window.genVennQ; window.genVennQ=function(d,m){let q;for(let i=0;i<500;i++){q=g(d,m);if(q.type===t)break;}window.__q=q;return q;}; window.genVenn2Q=window.genVennQ;}""", t)
        pg.locator('h3',has_text='Diagramming Propositions').first.click(); pg.wait_for_timeout(600)
        pg.click('#lead-skip'); pg.wait_for_timeout(800)
        lv=pg.locator('.lp-lvl:not(.locked)').first
        if lv.count() and lv.is_visible(): lv.click(); pg.wait_for_timeout(600)
        for _ in range(n):
            rr=reg
            if reg=='X': rr=pg.evaluate("()=>['A','AB','B'].find(r=>window.__q.correct[r]==='x')")
            if reg=='Y': rr=pg.evaluate("()=>['A','B'].find(r=>window.__q.correct[r]!=='x')")
            pt=pg.evaluate("""reg=>{const svg=document.querySelector('#venn-box svg'),r=svg.getBoundingClientRect(),c=V2.circles;
              let x,y=c.A.y; if(reg==='AB') x=(c.A.x+c.B.x)/2; else if(reg==='A') x=c.A.x-c.A.r*0.6; else x=c.B.x+c.B.r*0.6;
              return [r.left+x/V2.W*r.width, r.top+y/V2.H*r.height];}""", rr)
            pg.mouse.click(*pt); pg.wait_for_timeout(150)
        pg.click('#btn-venn-submit'); pg.wait_for_timeout(600)
        txt=pg.evaluate("()=>document.querySelector('.fb-why')?.textContent||''")
        ok=exp in txt; fails+=not ok
        print(('PASS ' if ok else 'FAIL ')+name+': '+txt)
        pg.locator('.fb-why').first.scroll_into_view_if_needed()
        pg.screenshot(path=f'/workspace/logica-existential/shots/{name}.png')
        pg.close()
    b.close()
print('console errors:', errors)
sys.exit(1 if fails or errors else 0)
