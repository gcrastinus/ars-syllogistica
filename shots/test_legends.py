# Playwright check of the reworded legends, directions, and cards (1280/390, light/dark)
import sys
from playwright.sync_api import sync_playwright
URL='http://localhost:8977/index.html'; D='/workspace/logica-existential/shots/'
errors=[]; fails=[]
def ov(pg,tag):
    w=pg.evaluate("()=>document.documentElement.scrollWidth-document.documentElement.clientWidth")
    if w>0: fails.append(f'overflow {w}px {tag}')
def need(pg,txt,tag):
    if txt not in pg.evaluate("()=>document.body.innerText"): fails.append(f'missing "{txt}" {tag}')
def page(b,w,dark,init=''):
    pg=b.new_page(viewport={'width':w,'height':900})
    pg.add_init_script(f"try{{localStorage.setItem('arsDark','{1 if dark else 0}')}}catch(e){{}}")
    pg.on('console', lambda m: m.type=='error' and errors.append(m.text))
    pg.on('pageerror', lambda e: errors.append(str(e)))
    pg.goto(URL); pg.wait_for_timeout(1200)
    if dark: pg.evaluate("()=>document.body.classList.add('dark')")
    if init: pg.evaluate(init)
    return pg
FORCE="""m=>{const g=window.genVennQ,g2=window.genVenn2Q;window.genVennQ=function(d,x){let q;for(let i=0;i<500;i++){q=g(d,x);if(q.type==='O')break;}return q;};
 if(m==='pair') window.genVennQ=function(d,x){return g2(3,x);};}"""
with sync_playwright() as p:
    b=p.chromium.launch(args=['--no-sandbox'])
    for w in (1280,390):
      for dark in (False,True):
        tag=f'{w}_{"dark" if dark else "light"}'
        # home card (Exercise VIII desc with the changed legend sentence)
        pg=page(b,w,dark)
        c=pg.locator('h3',has_text='Diagramming Syllogisms').first; c.scroll_into_view_if_needed()
        pg.screenshot(path=D+f'home_viii_{tag}.png'); ov(pg,'home '+tag); pg.close()
        # Exercise V lead-in cards
        pg=page(b,w,dark)
        pg.locator('h3',has_text='Diagramming Propositions').first.click(); pg.wait_for_timeout(600)
        seen=''
        for i in range(25):
            seen+=pg.evaluate("()=>document.body.innerText")
            pg.screenshot(path=D+f'v_lead_{i:02d}_{tag}.png'); ov(pg,f'lead{i} '+tag)
            btn=pg.locator('#orient-cont')
            if not btn.count() or not btn.is_visible(): break
            if btn.is_disabled():
                n=pg.evaluate("()=>[...document.querySelectorAll('button')].filter(e=>e.offsetParent&&!e.id&&!e.className.includes('speak')).length")
                for k in range(n):
                    if not btn.is_disabled(): break
                    pg.evaluate("k=>[...document.querySelectorAll('button')].filter(e=>e.offsetParent&&!e.id&&!e.className.includes('speak'))[k].click()",k); pg.wait_for_timeout(300)
                if btn.is_disabled(): break
            btn.click(); pg.wait_for_timeout(400)
        for t in ['for I it says that something is there, and for O it only marks the region']:
            if t not in seen: fails.append(f'lead missing "{t}" {tag}')
        pg.close()
        # Venn lab (click directions)
        pg=page(b,w,dark); pg.evaluate("()=>document.getElementById('lab1-open').click()"); pg.wait_for_timeout(600)
        need(pg,'twice for an × (region marked; for I, something exists)','lab '+tag)
        pg.locator('#scr-lab1 .venn-legend').scroll_into_view_if_needed()
        pg.screenshot(path=D+f'lab1_{tag}.png'); ov(pg,'lab '+tag); pg.close()
        # Exercise V quiz single and pair, Exercise VIII quiz
        for name,mode,card in [('v_single','one','Diagramming Propositions'),('v_pair','pair','Diagramming Propositions'),('viii','one','Diagramming Syllogisms')]:
            pg=page(b,w,dark,"("+FORCE+")('"+mode+"')")
            pg.locator('h3',has_text=card).first.click(); pg.wait_for_timeout(600)
            pg.click('#lead-skip'); pg.wait_for_timeout(800)
            need(pg,'region marked; for I, something exists',name+' '+tag)
            if name!='v_pair': need(pg,'×: the region is marked (for I, something is here)',name+' '+tag)
            pg.locator('#venn-box').scroll_into_view_if_needed()
            pg.screenshot(path=D+f'{name}_{tag}.png',full_page=False); ov(pg,name+' '+tag); pg.close()
    b.close()
print('fails:',fails); print('console errors:',errors)
sys.exit(1 if fails or errors else 0)
