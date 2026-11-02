/* nav.js: Back and Forward for a one-page app. Shared and app-agnostic (1 Nov 2026).
   Load it before the app's own scripts, like tab-lock.js. The app gives one function that draws a state;
   nav.js keeps every entry of the browser's history in step with the screen:
     Nav.init({ render(state), fromHash(hash) })   render draws a state; fromHash turns a typed or bookmarked hash into one
     Nav.how()                     'push' inside a tap or click, 'replace' while drawing a Back/Forward step or at load
     Nav.go(state, url, how)       records the screen just drawn: a new entry ('push') or the current one ('replace')
     Nav.state()                   the state on screen
     Nav.rewind(test)              goes back to the nearest earlier screen marked hub:true that passes test; false if none
     Nav.openLayer(name, close)    an overlay or menu opened by a tap: one entry, so Back closes it
     Nav.layerClosed(name)         the overlay was closed by its own button: its entry is taken off
     Nav.guard({ key, ask })       Back away from the entry with this key calls ask(); the entry stays meanwhile
     Nav.unguard(), Nav.leave(test)  ends the guard; leave() also goes back to the parent screen
     Nav.confirm(opts)             a question in large type in the page's own colours; resolves 'stay' or 'leave'
     Nav.deepLink(homeState, url)  a page opened straight on an inner screen gets a home entry under it, made at
                                   the first tap, so the browser does not skip it
   A state is a plain object { r: route, id, card, run, hub }. nav.js adds nav, d (place in the stack), anc (the hub
   screens beneath it) and layer. Entries are pushed only inside a tap, click or key press. Every step stops speech. */
(function(){
  'use strict';
  if (window.Nav) return;
  var H = window.history;
  var app = { render: function(){}, fromHash: function(){ return null; } };
  var shown = null;          /* the state on screen (never a layer entry) */
  var layers = [];           /* open overlays, innermost last: { name, close } */
  var guard = null;          /* { key, d, ask } */
  var expectD = null;        /* a step nav.js made itself, to land on this depth without drawing */
  var expectLayerBack = false;
  var bypass = false;        /* a rewind the app asked for passes the guard */
  var drawing = 0, closing = false;
  var lastTap = -1, lastStep = 0;  /* when the reader last tapped, and when a Back, Forward or load last drew */
  var pendingGo = null;            /* a new screen ready while an overlay's entry is still being taken off */
  ['click', 'keydown', 'touchend', 'pointerup'].forEach(function(t){
    window.addEventListener(t, function(e){ if (e.isTrusted !== false) lastTap = Date.now(); }, true);
  });

  function activeTap(){ var u = navigator.userActivation; return u ? !!u.isActive : true; }
  function cur(){ var s = H.state; return s && s.nav ? s : null; }
  function stopSpeech(){
    try { if (typeof window.__arsStopSpeak === 'function') window.__arsStopSpeak(); } catch (e) {}
  }
  function key(s){ return s ? [s.r || '', s.id || '', s.card == null ? '' : s.card, s.run || ''].join('|') : ''; }
  function plain(s){ var o = {}; for (var k in s) if (k !== 'layer') o[k] = s[k]; return o; }
  function ancOf(base){
    if (!base) return [];
    var a = (base.anc || []).slice();
    if (base.hub) a.push({ d: base.d, r: base.r, id: base.id || '' });
    return a.slice(-12);
  }
  /* A new entry only for a screen the reader asked for: inside a tap, and not while a Back or Forward step is drawn
     (also when that drawing finishes later, after a file has loaded). */
  function how(){ return (drawing || !activeTap() || lastStep >= lastTap) ? 'replace' : 'push'; }
  function draw(s){
    shown = s;
    drawing++;
    try { app.render(s); } finally { drawing--; }
  }
  function closeLayers(){
    closing = true;
    try { while (layers.length){ var l = layers.pop(); try { l.close(); } catch (e) {} } } finally { closing = false; }
  }

  var Nav = {
    init: function(o){ for (var k in o) app[k] = o[k]; },
    how: how,
    state: function(){ return shown || cur(); },
    go: function(state, url, mode){
      mode = mode || how();
      if (expectLayerBack){ pendingGo = [state, url, mode]; shown = Object.assign({}, shown || {}, state); return shown; }
      var c = cur();
      var s = Object.assign({}, state, { nav: 1 });
      if (layers.length){ closeLayers(); }
      if (c && c.layer && mode === 'push'){ mode = 'replace'; s.d = c.d; s.anc = ancOf(shown); }
      else if (mode === 'push' && c){ s.d = c.d + 1; s.anc = ancOf(shown || c); }
      else if (c){ s.d = c.d; s.anc = c.anc || []; if (c.ins) s.ins = c.ins; }
      else { s.d = 0; s.anc = []; }
      url = url == null ? location.href : url;
      if (mode === 'push') H.pushState(s, '', url); else H.replaceState(s, '', url);
      shown = s;
      return s;
    },
    rewind: function(test){
      var c = cur(), base = shown || c;
      if (!c || !base) return false;
      var a = base.anc || [];
      for (var i = a.length - 1; i >= 0; i--){
        if (test(a[i]) && a[i].d < c.d){ bypass = true; H.go(a[i].d - c.d); return true; }
      }
      return false;
    },
    openLayer: function(name, close){
      var c = cur();
      var replace = !!(c && c.layer);
      if (layers.length){ closeLayers(); replace = !!(c && c.layer); }
      layers.push({ name: name, close: close });
      if (!c || how() !== 'push' || expectLayerBack) return;
      if (replace){ H.replaceState(Object.assign({}, c, { layer: name }), '', location.href); return; }
      H.pushState(Object.assign(plain(shown || c), { nav: 1, d: c.d + 1, layer: name, anc: (shown || c).anc || [] }), '', location.href);
    },
    layerClosed: function(name){
      if (closing) return;
      for (var i = layers.length - 1; i >= 0; i--) if (layers[i].name === name){ layers.splice(i, 1); break; }
      var c = cur();
      if (c && c.layer === name){ expectLayerBack = true; H.back(); }
    },
    guard: function(g){ var c = cur(); guard = { key: key(shown || c), d: c ? c.d : 0, ask: g.ask }; },
    unguard: function(){ guard = null; },
    guarded: function(){ return !!guard; },
    leave: function(test){
      guard = null;
      if (!Nav.rewind(test || function(){ return true; })) H.back();
    },
    confirm: confirmBox,
    deepLink: function(homeState){
      var c = cur();
      if (!c || c.d !== 0) return;
      var deep = Object.assign({}, c, { d: 1, ins: 1, anc: [{ d: 0, r: homeState.r, id: homeState.id || '' }] });
      H.replaceState(deep, '', location.href);
      shown = deep;
      armInsert(homeState);
    },
    /* At load: draw the entry the browser kept (a reload), or the screen the address names. */
    start: function(){
      lastStep = Date.now();
      var c = cur();
      if (c){
        if (c.layer){ c = plain(c); H.replaceState(c, '', location.href); }
        if (c.ins) armInsert({ r: 'home', hub: true });
        draw(c);
        return;
      }
      var s = Object.assign({}, app.fromHash(location.hash) || { r: 'home', hub: true }, { nav: 1, d: 0, anc: [] });
      H.replaceState(s, '', location.href);
      shown = s;
      if (s.r !== 'home') Nav.deepLink({ r: 'home', hub: true });
      draw(shown);
    },
    _key: key
  };

  /* The home entry under a deep link is made at the first tap or key press, so that it is not one the browser skips. */
  function armInsert(homeState){
    var evs = ['click', 'keydown', 'touchend', 'pointerup'];
    function fire(){
      if (!activeTap()) return;
      evs.forEach(function(t){ window.removeEventListener(t, fire, true); });
      var c = cur();
      if (!c || !c.ins) return;
      var url = location.href, home = location.pathname + location.search;
      var deep = Object.assign({}, c); delete deep.ins;
      H.replaceState(Object.assign({}, homeState, { nav: 1, d: 0, anc: [], hub: true }), '', home);
      H.pushState(deep, '', url);
      if (shown && shown.d === deep.d) shown = Object.assign({}, shown, { ins: undefined });
    }
    evs.forEach(function(t){ window.addEventListener(t, fire, true); });
  }

  window.addEventListener('popstate', function(e){
    var s = e.state && e.state.nav ? e.state : null;
    lastStep = Date.now();
    if (expectD !== null && s && s.d === expectD){ expectD = null; return; }
    stopSpeech();
    if (!s){
      /* a hash typed in the address bar or followed from a plain link: a new entry with no state */
      var made = app.fromHash(location.hash) || { r: 'home', hub: true };
      var prev = shown || { d: -1, anc: [] };
      s = Object.assign({}, made, { nav: 1, d: prev.d + 1, anc: ancOf(shown) });
      H.replaceState(s, '', location.href);
    }
    var layerBack = expectLayerBack; expectLayerBack = false;
    if (layerBack && pendingGo){ var g = pendingGo; pendingGo = null; if (!s.layer) shown = s; Nav.go(g[0], g[1], g[2] === 'push' ? 'push' : 'replace'); return; }
    if (layers.length && !(s.layer && layers[layers.length - 1].name === s.layer)) closeLayers();
    if (guard && !bypass && key(plain(s)) !== guard.key){
      var delta = guard.d - s.d;
      if (delta !== 0){ expectD = guard.d; H.go(delta); }
      guard.ask();
      return;
    }
    bypass = false;
    var base = s.layer ? plain(s) : s;   /* an overlay's old entry, reached again by Forward: the overlay stays shut */
    if (shown && key(base) === key(shown)){ shown = base; return; }
    draw(base);
  });

  /* Back/forward cache (iOS Safari above all): the page comes back as it was left; draw the entry again. */
  window.addEventListener('pageshow', function(e){
    if (!e.persisted) return;
    lastStep = Date.now(); guard = null; expectD = null; expectLayerBack = false; pendingGo = null;
    closeLayers();
    var c = cur();
    if (c) draw(c.layer ? plain(c) : c);
  });

  /* ---------- the question box ---------- */
  var box = null;
  function style(){
    if (document.getElementById('nav-ask-style')) return;
    var s = document.createElement('style'); s.id = 'nav-ask-style';
    s.textContent =
      '.nav-ask{position:fixed; inset:0; z-index:2147482000; display:flex; align-items:center; justify-content:center; padding:20px;' +
      ' background:color-mix(in srgb, var(--paper, #f6f0e1) 88%, transparent)}' +
      '.nav-ask-card{max-width:520px; width:100%; padding:32px 28px; text-align:center; background:var(--card, #fffdf4); color:var(--ink, #2b2118);' +
      ' border:1px solid var(--frame, #d3c29c); border-radius:0; box-shadow:none; font-family:var(--text, Georgia, serif)}' +
      '.nav-ask-msg{font-size:28px; line-height:1.3; margin:0 0 12px}' +
      '.nav-ask-note{font-size:22px; line-height:1.45; margin:0 0 26px; color:var(--ink-soft, #5a4a38)}' +
      '.nav-ask-row{display:flex; gap:16px; justify-content:center; flex-wrap:wrap}' +
      '.nav-ask-btn{font-family:var(--text, Georgia, serif); font-size:22px; padding:12px 30px; min-width:140px; cursor:pointer; border-radius:0;' +
      ' background:transparent; color:var(--ink, #2b2118); border:1px solid var(--frame, #d3c29c); transition:background-color .25s ease}' +
      '.nav-ask-btn:hover, .nav-ask-btn:focus-visible{background:var(--hover, #ede4cf); outline:2px solid var(--ink, #2b2118); outline-offset:2px}' +
      'body.nav-asking{overflow:hidden}' +
      '@media print{.nav-ask{display:none !important}}';
    document.head.appendChild(s);
  }
  function confirmBox(o){
    if (box) return box.promise;
    style();
    var el = document.createElement('div');
    el.className = 'nav-ask'; el.setAttribute('role', 'alertdialog'); el.setAttribute('aria-modal', 'true');
    el.setAttribute('aria-labelledby', 'nav-ask-msg'); el.setAttribute('aria-describedby', 'nav-ask-note');
    el.innerHTML = '<div class="nav-ask-card"><p class="nav-ask-msg" id="nav-ask-msg"></p><p class="nav-ask-note" id="nav-ask-note"></p>' +
      '<div class="nav-ask-row"><button type="button" class="nav-ask-btn" data-a="stay"></button><button type="button" class="nav-ask-btn" data-a="leave"></button></div></div>';
    el.querySelector('.nav-ask-msg').textContent = o.message || '';
    el.querySelector('.nav-ask-note').textContent = o.note || '';
    el.querySelector('[data-a="stay"]').textContent = o.stay || 'Stay';
    el.querySelector('[data-a="leave"]').textContent = o.leave || 'Leave';
    var back = document.activeElement;
    var done;
    var p = new Promise(function(res){ done = res; });
    function end(a){
      if (!box) return;
      window.removeEventListener('keydown', onKey, true);
      if (el.parentNode) el.parentNode.removeChild(el);
      document.body.classList.remove('nav-asking');
      box = null;
      if (a === 'stay' && back && back.focus){ try { back.focus({ preventScroll: true }); } catch (e) {} }
      done(a);
    }
    function onKey(e){
      if (e.key === 'Escape'){ e.preventDefault(); e.stopImmediatePropagation(); end('stay'); return; }
      if (e.key === 'Tab'){
        var bs = el.querySelectorAll('button'), i = Array.prototype.indexOf.call(bs, document.activeElement);
        e.preventDefault(); bs[(i + (e.shiftKey ? bs.length - 1 : 1)) % bs.length].focus();
        return;
      }
      if (!el.contains(e.target)){ e.stopImmediatePropagation(); e.preventDefault(); }
    }
    el.addEventListener('click', function(e){
      var b = e.target.closest && e.target.closest('[data-a]');
      if (b) end(b.getAttribute('data-a'));
    });
    window.addEventListener('keydown', onKey, true);
    document.body.appendChild(el);
    document.body.classList.add('nav-asking');
    box = { promise: p, end: end };
    el.querySelector('[data-a="stay"]').focus();
    return p;
  }
  Nav.asking = function(){ return !!box; };

  window.Nav = Nav;
})();
