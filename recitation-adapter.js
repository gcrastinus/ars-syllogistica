'use strict';
/* Recitation Tablet: the link between Ars Syllogistica and recitation.js (the Tablet code shared with
   Ars Grammatica and Ars Rhetorica). recitation.js expects a course structure, deck records, a store,
   and a deck loader; this file supplies them from the four Logic as an Art decks, the fourteen Logic as a
   Science studies (ars-advanced.js), and the course progress, and it holds the homepage callout that names a deck just finished.
   Load it after the page script and before recitation.js.

   The record is kept in the course progress (localStorage key arsSyllogistica.progress.v1), under recite:
   {
     decks: { logic: { done:true, doneAt } },   // a deck is done once its last card is finished
     recitations: { ... },                        // the Tablet's own record (see recitation.js)
     reciteNudges: { shown:{}, pending:[] }       // the "You have finished" callout on the homepage
   }
*/
window.ARS = window.ARS || {};

const RECITE_IDS = ['logic', 'act1', 'act2', 'act3'];
/* The Logic as a Science studies, in course order, as ars-advanced.js lists them. */
const RECITE_SCIENCE_IDS = (window.__arsAdvancedDecks || []).map(d => d && d.id).filter(Boolean);
const reciteDecks = {};
(window.__arsStudyDecks || []).concat(window.__arsAdvancedDecks || []).forEach(d => { if (d && d.id) reciteDecks[d.id] = d; });

ARS.decks = {};
RECITE_IDS.concat(RECITE_SCIENCE_IDS).forEach(id => {
  const d = reciteDecks[id];
  if (!d || !Array.isArray(d.recitation) || !d.recitation.length) return;
  d.id = id;
  /* Quick recitation (recitation-quick.js): offered first; the Full recitation opens after "Done" on Quick. */
  const quick = (window.__arsQuickRecitations || {})[id];
  const lines = Array.isArray(quick) ? quick.map(q => (typeof q === 'string' ? q : q && q.html)).filter(Boolean) : [];
  if (lines.length) d.quick = lines;   /* no lines: the deck has only its Full recitation */
  ARS.decks[id] = d;
});
const recitePart = (id, name, ids) => ({
  id: id,
  name: name,
  items: ids.filter(k => ARS.decks[k]).map(k => ({
    id: k, kind: 'study', built: true, title: ARS.decks[k].title
  }))
});
ARS.structure = [
  recitePart('art', 'Logic as an Art', RECITE_IDS),
  recitePart('science', 'Logic as a Science', RECITE_SCIENCE_IDS)
];
/* No roman, so the menu heading is the part name. The whole-part line uses the shared wording. */
ARS.reciteWords = { section: 'Part', prelim: 'Part' };

const RECITE_PROGRESS_KEY = 'arsSyllogistica.progress.v1';
const recite$ = id => document.getElementById(id);
let reciteBag = null;

function readReciteProgress(){
  if (typeof window.__arsReadProgress === 'function') return window.__arsReadProgress();
  try { return JSON.parse(localStorage.getItem(RECITE_PROGRESS_KEY) || 'null'); }
  catch (e) { return null; }
}
function courseStore(){
  if (!reciteBag) {
    const live = (typeof window.__arsReciteLive === 'function') ? window.__arsReciteLive() : null;
    if (live) reciteBag = live;
    else {
      const o = readReciteProgress();
      reciteBag = (o && o.recite && typeof o.recite === 'object') ? o.recite : {};
    }
  }
  if (!reciteBag.decks || typeof reciteBag.decks !== 'object') reciteBag.decks = {};
  return reciteBag;
}
function save(){
  const bag = courseStore();
  window.__arsReciteBag = bag;
  if (typeof window.__arsSaveProgress === 'function') { window.__arsSaveProgress(); return; }
  let o = readReciteProgress();
  if (!o || typeof o !== 'object' || Array.isArray(o)) o = {};
  o.recite = bag;
  try { localStorage.setItem(RECITE_PROGRESS_KEY, JSON.stringify(o)); }
  catch (e) {}
}
function loadDeck(id){
  return ARS.decks[id] ? Promise.resolve(ARS.decks[id]) : Promise.reject(new Error('No deck ' + id));
}

/* Called when the last card of a study deck is finished. Decks without an outline are ignored. */
function reciteDeckFinished(key){
  const d = ARS.decks[key];
  if (!d) return;
  const decks = courseStore().decks;
  const st = decks[key] || (decks[key] = { done:false });
  const first = !st.done;
  st.done = true;
  if (first){ st.doneAt = Date.now(); noteReciteNudge(key, d.title); }
  save();
}

/* A finished study deck is named once, on the main page.
   Shown is recorded when the callout is displayed, so a later return home does not show it again.
   Closing it, or opening the tablet while it is up, also clears anything still waiting. */
function nudgeBag(){
  const r = courseStore();
  if (!r.reciteNudges || typeof r.reciteNudges !== 'object') r.reciteNudges = { shown: {}, pending: [] };
  if (!r.reciteNudges.shown || typeof r.reciteNudges.shown !== 'object') r.reciteNudges.shown = {};
  if (!Array.isArray(r.reciteNudges.pending)) r.reciteNudges.pending = [];
  return r.reciteNudges;
}
function noteReciteNudge(id, name){
  if (!id || !name) return;
  const bag = nudgeBag();
  if (bag.shown[id] || bag.pending.some(p => p && p.id === id)) return;
  bag.pending.push({ id: id, name: name, at: Date.now() });
  save();
}
function concealReciteNudge(){
  const el = recite$('recite-callout'), icon = recite$('recite-open');
  if (el) el.hidden = true;
  if (icon) icon.classList.remove('is-glow');
  document.body.classList.remove('recite-nudge');
}
function dismissReciteNudge(){
  const el = recite$('recite-callout');
  if (!el || el.hidden) return;
  const bag = nudgeBag();
  bag.pending.forEach(p => { if (p && p.id) bag.shown[p.id] = true; });
  bag.pending = [];
  save();
  concealReciteNudge();
}
function refreshReciteNudge(){
  const home = recite$('scr-home');
  if (!home || !home.classList.contains('active')) { concealReciteNudge(); return; }
  const bag = nudgeBag();
  const pending = bag.pending.filter(p => p && p.id && !bag.shown[p.id]);
  if (!pending.length) { concealReciteNudge(); return; }
  const item = pending.slice().sort((a, b) => (b.at || 0) - (a.at || 0))[0];
  const el = recite$('recite-callout'), name = recite$('recite-callout-name'), icon = recite$('recite-open');
  if (!el || !name) return;
  name.innerHTML = item.name;
  el.hidden = false;
  if (icon) icon.classList.add('is-glow');
  document.body.classList.add('recite-nudge');
  bag.shown[item.id] = true;
  bag.pending = bag.pending.filter(p => !p || p.id !== item.id);
  save();
}
recite$('recite-callout').onclick = dismissReciteNudge;

/* The Tablet button shows only on the homepage. */
function reciteScreenChanged(id){
  const open = recite$('recite-open');
  if (open) open.style.display = (id === 'scr-home') ? '' : 'none';
  document.body.classList.toggle('off-home', id !== 'scr-home');
  if (id === 'scr-home'){
    refreshReciteNudge();
    if (typeof renderReciteReminder === 'function') renderReciteReminder();
  } else concealReciteNudge();
}

/* The Progress page can replace or erase the record. These keep the in-memory bag in step. */
window.__arsReciteAdopt = function(recite){
  if (recite && typeof recite === 'object') {
    reciteBag = recite;
    if (!reciteBag.decks || typeof reciteBag.decks !== 'object') reciteBag.decks = {};
    window.__arsReciteBag = reciteBag;
  } else {
    reciteBag = null;
    window.__arsReciteBag = null;
  }
};
window.__arsReciteReset = function(){
  reciteBag = null;
  window.__arsReciteBag = null;
};
