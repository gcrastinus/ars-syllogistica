/* One active tab at a time. Progress lives in localStorage, and two tabs writing it at once
   would overwrite each other, so only one tab is active. A second tab shows a notice with
   "Use it here"; choosing it makes that tab active (reloading it with the latest progress)
   and the other tab stops reading aloud and shows the notice in turn.
   The lock is a Web Lock (navigator.locks), held by the active tab for as long as the page
   lives. The browser releases it the moment that tab is closed, reloaded, crashes or is
   discarded, so there is no heartbeat and no stale claim; a waiting tab takes over at once.
   Where Web Locks are unavailable (old browsers, file://), nothing is blocked. */
(function(){
  'use strict';
  var me = document.currentScript;
  var APP = (me && me.getAttribute('data-app')) || 'This course';
  var KEY = (me && me.getAttribute('data-key')) || 'arsActiveTab';
  var NAME = 'ars-tab-lock:' + KEY;
  var locks = null;
  try { if (location.protocol !== 'file:' && window.isSecureContext && navigator.locks && typeof navigator.locks.request === 'function') locks = navigator.locks; } catch (e) {}
  if (!locks) return;   /* fallback: never block */
  try { localStorage.removeItem(KEY); } catch (e) {}   /* old heartbeat claim, no longer used */

  var active = false, box = null, holding = false, waiting = false, gen = 0;

  function stopSpeech(){
    try { if (typeof window.__arsStopSpeak === 'function') window.__arsStopSpeak(); } catch (e) {}
    try { if (window.speechSynthesis) window.speechSynthesis.cancel(); } catch (e) {}
  }
  function style(){
    if (document.getElementById('tab-lock-style')) return;
    var s = document.createElement('style'); s.id = 'tab-lock-style';
    s.textContent =
      '.tab-lock{position:fixed; inset:0; z-index:2147483000; display:flex; align-items:center; justify-content:center; padding:20px;' +
      ' background:color-mix(in srgb, var(--paper, #f6f0e1) 88%, transparent)}' +
      '.tab-lock-card{max-width:440px; width:100%; padding:28px 26px; text-align:center; background:var(--card, #fffdf4); color:var(--ink, #2b2118);' +
      ' border:1px solid var(--frame, #d3c29c); border-radius:0; box-shadow:none; font-family:var(--text, Georgia, serif)}' +
      '.tab-lock-msg{font-size:19px; line-height:1.45; margin:0 0 12px}' +
      '.tab-lock-note{font-size:17px; line-height:1.5; margin:0 0 20px; text-align:left; color:var(--ink-soft, #5a4a38)}' +
      '.tab-lock-btn{font-family:var(--text, Georgia, serif); font-size:17px; padding:10px 22px; cursor:pointer; border-radius:0;' +
      ' background:transparent; color:var(--ink, #2b2118); border:1px solid var(--frame, #d3c29c); transition:background-color .25s ease}' +
      '.tab-lock-btn:hover, .tab-lock-btn:focus-visible{background:var(--hover, #ede4cf); outline:none}' +
      'body.tab-locked{overflow:hidden}' +
      '@media print{.tab-lock{display:none !important}}';
    document.head.appendChild(s);
  }
  function show(){
    style();
    if (!box){
      box = document.createElement('div');
      box.className = 'tab-lock'; box.setAttribute('role', 'alertdialog'); box.setAttribute('aria-modal', 'true');
      box.setAttribute('aria-labelledby', 'tab-lock-msg');
      box.innerHTML = '<div class="tab-lock-card"><p class="tab-lock-msg" id="tab-lock-msg"></p><p class="tab-lock-note"></p>' +
        '<button type="button" class="tab-lock-btn">Use it here</button></div>';
      box.querySelector('.tab-lock-msg').textContent = APP + ' is open in another tab.';
      box.querySelector('.tab-lock-note').textContent = 'If you use it here, the other tab will stop, and this one will reload with your saved progress. ' +
        'Your saved progress carries over, but an exercise you are in the middle of will start over, and its unfinished answers are lost.';
      box.querySelector('.tab-lock-btn').onclick = steal;
    }
    if (!box.parentNode) document.body.appendChild(box);
    document.body.classList.add('tab-locked');
    try { box.querySelector('.tab-lock-btn').focus(); } catch (e) {}
  }
  function hide(){ if (box && box.parentNode) box.parentNode.removeChild(box); document.body.classList.remove('tab-locked'); }
  function deactivate(){ active = false; stopSpeech(); show(); }

  /* Hold the lock until the page goes away (or another tab steals it). */
  function hold(lock, onGranted){
    if (!lock) return null;
    holding = true; active = true; hide();
    if (onGranted) onGranted();
    return new Promise(function(){});
  }
  function lost(){ holding = false; if (active) deactivate(); wait(); }

  /* Queue behind the holder: granted when it closes, then this tab takes over with fresh progress. */
  function wait(){
    if (waiting || holding) return;
    waiting = true; var g = gen;
    locks.request(NAME, function(lock){
      waiting = false;
      if (g !== gen || !lock) return;
      /* Granted only because a tab that just chose "Use it here" is reloading: let it have the lock back. */
      if (recentSteal()) return new Promise(function(r){ setTimeout(r, 1500); }).then(function(){ setTimeout(wait, 0); });
      var wasBlocked = !!(box && box.parentNode);
      return hold(lock, function(){ if (wasBlocked) location.reload(); });
    }).catch(function(){ waiting = false; if (!holding) setTimeout(wait, 0); });
  }
  function recentSteal(){ try { return Date.now() - (+localStorage.getItem(KEY + '.steal') || 0) < 10000; } catch (e) { return false; } }
  /* Take the lock now (the other tab stops at once), then reload with the latest saved progress;
     after the reload this tab takes the lock again. */
  function steal(){
    gen++;   /* drop any queued wait */
    try { localStorage.setItem(KEY + '.steal', String(Date.now())); sessionStorage.setItem(KEY + '.steal', '1'); } catch (e) {}
    locks.request(NAME, { steal: true }, function(lock){
      return hold(lock, function(){ location.reload(); });
    }).catch(function(){ lost(); });
  }
  function start(){
    if (holding) return;
    var answered = false, reclaim = false;
    try { reclaim = sessionStorage.getItem(KEY + '.steal') === '1'; sessionStorage.removeItem(KEY + '.steal'); } catch (e) {}
    if (reclaim && !recentSteal()) reclaim = false;
    if (!reclaim) { try { localStorage.removeItem(KEY + '.steal'); } catch (e) {} }
    locks.request(NAME, reclaim ? { steal: true } : { ifAvailable: true }, function(lock){
      answered = true;
      if (reclaim) { try { localStorage.removeItem(KEY + '.steal'); } catch (e) {} }
      if (!lock) { deactivate(); wait(); return; }
      return hold(lock);
    }).catch(function(e){ if (answered) lost(); else { deactivate(); wait(); } });
  }

  /* While the notice is up, nothing else in the page takes keys. */
  ['keydown', 'keypress', 'keyup'].forEach(function(t){
    window.addEventListener(t, function(e){
      if (active || !box || !box.parentNode) return;
      if (box.contains(e.target)) return;
      e.stopImmediatePropagation(); e.preventDefault();
    }, true);
  });
  /* Back/forward cache: a restored page may have lost its lock. */
  window.addEventListener('pageshow', function(e){
    if (!e.persisted) return;
    locks.query().then(function(st){
      var mine = holding && (st.held || []).some(function(l){ return l.name === NAME; });
      if (!mine) { holding = false; waiting = false; gen++; start(); }
    }).catch(function(){});
  });

  function go(){
    if (document.prerendering) document.addEventListener('prerenderingchange', start, { once: true });
    else start();
  }
  if (document.body) go(); else document.addEventListener('DOMContentLoaded', go);
})();
