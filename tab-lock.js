/* One active tab at a time. Progress lives in localStorage, and two tabs writing it at once
   would overwrite each other, so only one tab is active. A second tab shows a notice with
   "Use it here"; choosing it makes that tab active (reloading it with the latest progress)
   and the other tab stops reading aloud and shows the notice in turn. The active tab renews
   its claim every 2 seconds; a claim older than about 5 seconds (a tab closed or crashed)
   is released, so a new tab simply takes over. */
(function(){
  'use strict';
  var me = document.currentScript;
  var APP = (me && me.getAttribute('data-app')) || 'This course';
  var KEY = (me && me.getAttribute('data-key')) || 'arsActiveTab';
  var BEAT = 2000, STALE = 5000;
  var store; try { store = window.localStorage; store.getItem(KEY); } catch (e) { return; }
  var id;
  try { id = sessionStorage.getItem(KEY + '.id'); } catch (e) {}
  if (!id) { id = Date.now().toString(36) + Math.random().toString(36).slice(2, 8); try { sessionStorage.setItem(KEY + '.id', id); } catch (e) {} }
  var active = false, timer = null, box = null;

  function read(){ try { return JSON.parse(store.getItem(KEY) || 'null'); } catch (e) { return null; } }
  function claim(){ try { store.setItem(KEY, JSON.stringify({ id: id, t: Date.now() })); } catch (e) {} }
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
      '.tab-lock-msg{font-size:19px; line-height:1.45; margin:0 0 18px}' +
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
      box.innerHTML = '<div class="tab-lock-card"><p class="tab-lock-msg" id="tab-lock-msg"></p>' +
        '<button type="button" class="tab-lock-btn">Use it here</button></div>';
      box.querySelector('.tab-lock-msg').textContent = APP + ' is open in another tab.';
      box.querySelector('.tab-lock-btn').onclick = function(){ claim(); location.reload(); };
    }
    if (!box.parentNode) document.body.appendChild(box);
    document.body.classList.add('tab-locked');
    try { box.querySelector('.tab-lock-btn').focus(); } catch (e) {}
  }
  function hide(){ if (box && box.parentNode) box.parentNode.removeChild(box); document.body.classList.remove('tab-locked'); }
  function activate(){
    active = true; claim(); hide();
    clearInterval(timer); timer = setInterval(function(){ var o = read(); if (o && o.id !== id) deactivate(); else claim(); }, BEAT);
  }
  function deactivate(){ active = false; clearInterval(timer); timer = null; stopSpeech(); show(); }

  /* While the notice is up, nothing else in the page takes keys. */
  ['keydown', 'keypress', 'keyup'].forEach(function(t){
    window.addEventListener(t, function(e){
      if (active || !box || !box.parentNode) return;
      if (box.contains(e.target)) return;
      e.stopImmediatePropagation(); e.preventDefault();
    }, true);
  });
  window.addEventListener('storage', function(e){
    if (e.key !== KEY && e.key !== null) return;
    var o = read();
    if (active && o && o.id !== id) deactivate();
  });
  window.addEventListener('pagehide', function(){
    if (!active) return;
    var o = read();
    if (o && o.id === id) { try { store.removeItem(KEY); } catch (e) {} }
  });
  window.addEventListener('pageshow', function(e){ if (e.persisted) start(); });

  function start(){
    var o = read();
    if (!o || o.id === id || Date.now() - (o.t || 0) > STALE) activate();
    else deactivate();
  }
  if (document.body) start(); else document.addEventListener('DOMContentLoaded', start);
})();
