/* Ars Syllogistica — shared logic engine
   Question generators, Venn diagrams, ontologies, and Node exports.
   Loaded by index.html (student exercises) and teacher-quiz.html.
*/
/* ================================================================
   CORE LOGIC — Aristotelian-scholastic syllogistic
   Mood = [major type, minor type, conclusion type], types A E I O.
   Figures:  1: M–P / S–M    2: P–M / S–M
             3: M–P / M–S    4: P–M / M–S
   Traditional account (existential import): 24 valid mood-figure
   pairs, including the five subaltern (weakened) moods.
   ================================================================ */

const VALID = {
  1:{AAA:'Barbara', EAE:'Celarent', AII:'Darii', EIO:'Ferio', AAI:'Barbari', EAO:'Celaront'},
  2:{EAE:'Cesare', AEE:'Camestres', EIO:'Festino', AOO:'Baroco', EAO:'Cesaro', AEO:'Camestros'},
  3:{AAI:'Darapti', IAI:'Disamis', AII:'Datisi', EAO:'Felapton', OAO:'Bocardo', EIO:'Ferison'},
  4:{AAI:'Bramantip', AEE:'Camenes', IAI:'Dimaris', EAO:'Fesapo', EIO:'Fresison', AEO:'Camenos'}
};
const SUBALTERN = new Set(['1AAI','1EAO','2EAO','2AEO','4AEO']);
const FIG_POS = {1:['MP','SM'], 2:['PM','SM'], 3:['MP','MS'], 4:['PM','MS']};
const TYPES = ['A','E','I','O'];

function isValidSyll(fig, mood){ return !!(VALID[fig] && VALID[fig][mood]); }
function moodName(fig, mood){ return VALID[fig] ? VALID[fig][mood] || null : null; }

const isNeg  = t => t==='E' || t==='O';
const isPart = t => t==='I' || t==='O';
/* distribution: A distributes subject; E both; I neither; O predicate */
function distributes(type, place){ // place 0 = subject, 1 = predicate
  if(type==='A') return place===0;
  if(type==='E') return true;
  if(type==='I') return false;
  return place===1; // O
}
function termDistInPremise(fig, premIdx, mood, role){
  const pos = FIG_POS[fig][premIdx];         // e.g. 'MP'
  const place = pos.indexOf(role);           // 0 or 1
  if(place<0) return null;
  return distributes(mood[premIdx], place);
}
/* Returns list of broken rules (empty ⇔ valid on the traditional account) */
function violations(fig, mood){
  const [t1,t2,tc] = mood;
  const out = [];
  if(isNeg(t1) && isNeg(t2))
    out.push('Exclusive premises: from two negative premises nothing follows.');
  const mDist = termDistInPremise(fig,0,mood,'M') || termDistInPremise(fig,1,mood,'M');
  if(!mDist)
    out.push('Undistributed middle: the middle term is distributed in neither premise, so the premises are never made to connect.');
  if(distributes(tc,1) && !termDistInPremise(fig,0,mood,'P'))
    out.push('Illicit major: the major term is distributed in the conclusion but not in the major premise.');
  if(distributes(tc,0) && !termDistInPremise(fig,1,mood,'S'))
    out.push('Illicit minor: the minor term is distributed in the conclusion but not in the minor premise.');
  if((isNeg(t1)||isNeg(t2)) && !isNeg(tc))
    out.push('A negative premise demands a negative conclusion.');
  if(!isNeg(t1) && !isNeg(t2) && isNeg(tc))
    out.push('A negative conclusion demands a negative premise.');
  if(isPart(t1) && isPart(t2))
    out.push('Two particular premises: nothing follows.');
  if(out.length===0 && !isValidSyll(fig,mood))
    out.push('The form fails to preserve truth from premises to conclusion.');
  return out;
}

/* ---------------- terms ---------------- */
const GEN_TERMS = [
  'philosopher','singer','sailor','baker','gardener','student','teacher','musician','poet',
  'farmer','dancer','painter','carpenter','astronomer','librarian','cyclist','swimmer',
  'beekeeper','violinist','historian','shepherd','weaver','archer','scribe','mathematician',
  'juggler','mariner','botanist','sculptor','stargazer','cartographer','falconer','innkeeper',
  'organist','chorister','geometer','calligrapher','bird','cat','dog','horse','mammal',
  'animal','reptile','songbird','hound','owl','eagle','sparrow','kitten','terrier'
];
const NAMES = ['Socrates','Plato','Aristotle','Cicero','Seneca','Hypatia','Boethius','Euclid',
  'Homer','Sappho','Virgil','Dante','Petrarch','Galen','Archimedes','Porphyry'];
/* Schematic term letters. Deliberately excludes A, E, I, O (the four proposition
   forms), S, P, M (subject, predicate, middle), and R — “Some R are T” makes the
   letter run together with the word “are” and pulls the eye off the exercise. */
const LETTERS = ['B','C','D','F','G','H','K','L','N','T','W','Z'];

const rand = a => a[Math.floor(Math.random()*a.length)];
function sample(arr, n){
  const pool = arr.slice(), out = [];
  for(let i=0;i<n;i++) out.push(pool.splice(Math.floor(Math.random()*pool.length),1)[0]);
  return out;
}
const art = w => /^[aeiou]/i.test(w) ? 'an' : 'a';
const cap = s => s.charAt(0).toUpperCase()+s.slice(1);
const PLURAL_EX = {
  'thing that has vegetative powers':'things that have vegetative powers',
  'thing that has sensitive powers':'things that have sensitive powers',
  'thing that can fly':'things that can fly',
  'thing that can swim':'things that can swim',
  'thing made by man':'things made by man'
};
const PLURAL_EX_REV = {};
for(const k in PLURAL_EX) PLURAL_EX_REV[PLURAL_EX[k]] = k;
const plural = w => PLURAL_EX[w] || (/[^aeiou]y$/.test(w) ? w.slice(0,-1)+'ies' : w+'s');

/* term objects: {kind:'g', s} general-english | {kind:'n', name} singular-english
                 {kind:'L', l} general-letter  | {kind:'l', l} singular-letter   */
function makeTerms(mode, singRole){ // singRole: null | 'S' | 'M'
  const roles = {};
  if(mode==='letters'){
    const ls = sample(LETTERS,3);
    ['S','M','P'].forEach((r,i)=>{
      roles[r] = (r===singRole) ? {kind:'l', l:ls[i].toLowerCase()} : {kind:'L', l:ls[i]};
    });
  } else {
    const ws = sample(GEN_TERMS,3);
    ['S','M','P'].forEach((r,i)=>{
      roles[r] = (r===singRole) ? {kind:'n', name:rand(NAMES)} : {kind:'g', s:ws[i]};
    });
  }
  return roles;
}
const isSing = t => t.kind==='n' || t.kind==='l';
function subjTxt(t){ return t.kind==='n'?t.name : (t.kind==='l'||t.kind==='L')?t.l : plural(t.s); }
function predTxtGeneral(t){ return (t.kind==='L')?t.l : plural(t.s); }
function predTxtSingularCtx(t){ return (t.kind==='L')?t.l : art(t.s)+' '+t.s; }

/* Standard-form sentence for proposition (type, S-term, P-term) */
function propText(type, S, P){
  if(isSing(S)){
    const pd = predTxtSingularCtx(P);
    return type==='E'||type==='O' ? `${subjTxt(S)} is not ${pd}` : `${subjTxt(S)} is ${pd}`;
  }
  const s = subjTxt(S), p = predTxtGeneral(P);
  if(type==='A') return `All ${s} are ${p}`;
  if(type==='E') return `No ${s} are ${p}`;
  if(type==='I') return `Some ${s} are ${p}`;
  return `Some ${s} are not ${p}`;
}
function premiseTerms(fig, idx, roles){
  const pos = FIG_POS[fig][idx];
  return [roles[pos[0]], roles[pos[1]]];
}

/* ---------------- difficulty ---------------- */
const DIFF = {
  1:{gain:16, loss:8,  figs:[1],        sub:false, near:0.25, label:'Novice — first figure only · +16 / −8'},
  2:{gain:14, loss:11, figs:[1,2],      sub:false, near:0.4,  label:'Apprentice — figures I–II · +14 / −11'},
  3:{gain:12, loss:14, figs:[1,2,3],    sub:true,  near:0.55, label:'Journeyman — figures I–III, weakened moods · +12 / −14'},
  4:{gain:10, loss:17, figs:[1,2,3,4],  sub:true,  near:0.65, label:'Scholar — all four figures · +10 / −17'},
  5:{gain:8,  loss:20, figs:[1,2,3,4],  sub:true,  near:0.75, label:'Master — everything in play, tilted to the subtle · +8 / −20'}
};

function validPool(d){
  const cfg = DIFF[d], out = [];
  for(const f of cfg.figs)
    for(const m in VALID[f])
      if(cfg.sub || !SUBALTERN.has(f+m)) out.push({fig:f, mood:m});
  return out;
}
function pickValid(d){
  const pool = validPool(d);
  // full variety always; at the high levels a modest extra draw toward the
  // trickier valid forms — figures III–IV and the weakened moods
  if(d>=4 && Math.random()<0.35){
    const hard = pool.filter(x=>x.fig>=3 || SUBALTERN.has(x.fig+x.mood));
    if(hard.length) return rand(hard);
  }
  return rand(pool);
}

function pickInvalid(d){
  const cfg = DIFF[d];
  if(Math.random() < cfg.near){                 // near-miss: mutate a valid form
    for(let i=0;i<80;i++){
      const v = rand(validPool(d));
      let fig = v.fig, mood = v.mood;
      if(cfg.figs.length>1 && Math.random()<0.5){
        fig = rand(cfg.figs.filter(f=>f!==v.fig));
      } else {
        const k = Math.floor(Math.random()*3);
        const t = rand(TYPES.filter(t=>t!==mood[k]));
        mood = mood.slice(0,k)+t+mood.slice(k+1);
      }
      if(!isValidSyll(fig,mood)) return {fig, mood};
    }
  }
  for(let i=0;i<400;i++){                       // random invalid, obvious flaws at low levels
    const fig = rand(cfg.figs);
    const mood = rand(TYPES)+rand(TYPES)+rand(TYPES);
    if(isValidSyll(fig,mood)) continue;
    if(d<=2){
      const [a,b,c] = mood;
      const obvious = (isNeg(a)&&isNeg(b)) || (isPart(a)&&isPart(b)) ||
        ((isNeg(a)||isNeg(b)) && !isNeg(c)) || (!isNeg(a)&&!isNeg(b)&&isNeg(c));
      if(!obvious && Math.random()<0.7) continue;
    }
    return {fig, mood};
  }
  return {fig:1, mood:'AAO'};
}

/* Can a singular term be placed? Returns possible role or null. */
function singularOption(fig, mood){
  const opts = [];
  const uni = t => t==='A'||t==='E';
  if((fig===1||fig===2) && uni(mood[1]) && uni(mood[2])) opts.push('S');
  if(fig===3 && uni(mood[0]) && uni(mood[1])) opts.push('M');
  return opts.length ? rand(opts) : null;
}

/* ============ Exercise generators ============ */

/* Sets 1 & 2: validity of a standard-form syllogism */
function genValidityQ(d, mode){
  const valid = Math.random() < 0.5;
  const {fig, mood} = valid ? pickValid(d) : pickInvalid(d);
  let singRole = null;
  if(Math.random() < 0.3) singRole = singularOption(fig, mood);
  const roles = makeTerms(mode, singRole);
  const lines = [0,1].map(i=>{
    const [s,p] = premiseTerms(fig,i,roles);
    return propText(mood[i], s, p);
  });
  const concl = propText(mood[2], roles.S, roles.P);
  return {kind:'validity', valid, fig, mood, roles, lines, concl,
          name: moodName(fig,mood), viols: valid?[]:violations(fig,mood)};
}

/* ---- Chain of syllogisms (a polysyllogism / sorites) ----
   Each link's conclusion becomes the minor premise of the next. The whole
   chain is valid iff every link is a valid syllogism; an invalid chain has
   exactly one broken link. Purely formal — schematic letters, no diagrams.
   Short chains (2–3 links) never repeat a kind of syllogism; longer chains
   (4–5) may repeat a kind at most once (twice in all). */
const LT = ch => ({kind:'L', l:ch});
function chainExtensions(fig, minorType){   // fig 1 or 2, minor premise type fixed
  const out = [];
  for(const mj of TYPES) for(const c of TYPES)
    if(isValidSyll(fig, mj+minorType+c)) out.push({fig, majType:mj, cType:c, name:moodName(fig, mj+minorType+c)});
  return out;
}
function chainInvalidMajor(fig, minorType, cType, notType){
  // a major-premise type that makes (fig, maj+minorType+cType) INVALID, ≠ notType
  const opts = TYPES.filter(mj=> mj!==notType && !isValidSyll(fig, mj+minorType+cType));
  return opts.length ? rand(opts) : null;
}
function genChainQ(d){
  const k = d<=3 ? (Math.random()<0.5?2:3) : (Math.random()<0.5?4:5);
  const maxSame = k<=3 ? 1 : 2;
  for(let attempt=0; attempt<300; attempt++){
    const letters = sample(LETTERS, k+2);
    const used = {};                       // count of each syllogism kind (name)
    const links = [];
    // ---- first link: a full syllogism in figure 1 or 2 ----
    const fig1 = Math.random()<0.5 ? 1 : 2;
    const moods = [];
    for(const mj of TYPES) for(const mn of TYPES) for(const c of TYPES)
      if(isValidSyll(fig1, mj+mn+c)) moods.push({mj,mn,c,name:moodName(fig1, mj+mn+c)});
    const m0 = rand(moods);
    const S = LT(letters[0]), M0 = LT(letters[1]), P0 = LT(letters[2]);
    const minText = propText(m0.mn, S, M0);
    const majText = fig1===1 ? propText(m0.mj, M0, P0) : propText(m0.mj, P0, M0);
    links.push({fig:fig1, minorType:m0.mn, majType:m0.mj, cType:m0.c, name:m0.name,
                premises:[majText, minText], conclTerms:[S, P0], concl: propText(m0.c, S, P0)});
    used[m0.name] = 1;
    let curPred = P0, curType = m0.c, good = true;
    // ---- subsequent links ----
    for(let i=2; i<=k; i++){
      const N = LT(letters[i+1]);
      const figs = Math.random()<0.5 ? [1,2] : [2,1];
      let cands = [];
      figs.forEach(f=> chainExtensions(f, curType).forEach(e=>{ if((used[e.name]||0) < maxSame) cands.push(e); }));
      if(!cands.length){ good = false; break; }
      const ch = rand(cands);
      const newPrem = ch.fig===1 ? propText(ch.majType, curPred, N) : propText(ch.majType, N, curPred);
      links.push({fig:ch.fig, minorType:curType, majType:ch.majType, cType:ch.cType, name:ch.name,
                  premises:[newPrem], conclTerms:[S, N], concl: propText(ch.cType, S, N)});
      used[ch.name] = (used[ch.name]||0) + 1;
      curPred = N; curType = ch.cType;
    }
    if(!good || links.length !== k) continue;
    // ---- valid or invalid? ----
    const makeInvalid = Math.random() < 0.5;
    let badIdx = -1;
    if(makeInvalid){
      badIdx = Math.floor(Math.random()*k);
      const L = links[badIdx];
      const badMaj = chainInvalidMajor(L.fig, L.minorType, L.cType, L.majType);
      if(badMaj === null) continue;                 // rare; retry whole chain
      L.badMajType = badMaj;
      // rewrite this link's *new* premise (the major) to the invalidating type,
      // keeping its stated conclusion — so the one step no longer follows
      if(badIdx === 0){
        const Sr = links[0].conclTerms[0], Pr = links[0].conclTerms[1], Mr = LT(letters[1]);
        L.premises[0] = L.fig===1 ? propText(badMaj, Mr, Pr) : propText(badMaj, Pr, Mr);
      } else {
        const prevPred = links[badIdx-1].conclTerms[1], N = L.conclTerms[1];
        L.premises[0] = L.fig===1 ? propText(badMaj, prevPred, N) : propText(badMaj, N, prevPred);
      }
      L.valid = false;
    }
    // ---- render ----
    let html = '';
    links.forEach(L=>{
      L.premises.forEach(p=> html += `<div class="chain-line">${p}.</div>`);
      html += `<div class="chain-line concl"><span class="therefore">∴</span> ${L.concl}.</div>`;
    });
    return {kind:'chain', valid: !makeInvalid, k, badIdx, html, links};
  }
  // fallback: a two-link Barbara chain (valid)
  const [a,b,c2,e] = sample(LETTERS,4);
  const html = `<div class="chain-line">All ${b} are ${c2}.</div><div class="chain-line">All ${a} are ${b}.</div>`
    + `<div class="chain-line concl"><span class="therefore">∴</span> All ${a} are ${c2}.</div>`
    + `<div class="chain-line">All ${c2} are ${e}.</div>`
    + `<div class="chain-line concl"><span class="therefore">∴</span> All ${a} are ${e}.</div>`;
  return {kind:'chain', valid:true, k:2, badIdx:-1, html};
}

/* Set 3: state the conclusion. General terms only. */
const REV_FIG = {'01':1,'11':2,'00':3,'10':4}; // key: majorMpos+minorMpos (0=subj,1=pred)
function mPosIdx(posStr){ return posStr.indexOf('M'); } // 0 subj, 1 pred

function acceptedConclusions(fig, t1, t2, roles, mode){
  const out = [];
  for(const c of TYPES){                        // forward: subject = S-role
    if(isValidSyll(fig, t1+t2+c))
      out.push({c, S:roles.S, P:roles.P, name:moodName(fig,t1+t2+c),
                text:propText(c, roles.S, roles.P)});
  }
  // reversed conclusion: subject = P-role term; premises swap major/minor
  const majM = mPosIdx(FIG_POS[fig][1]);        // old minor becomes major
  const minM = mPosIdx(FIG_POS[fig][0]);        // old major becomes minor
  const rfig = REV_FIG[String(majM)+String(minM)];
  for(const c of TYPES){
    if(isValidSyll(rfig, t2+t1+c))
      out.push({c, S:roles.P, P:roles.S, name:moodName(rfig,t2+t1+c),
                text:propText(c, roles.P, roles.S)});
  }
  return out;
}
function genConclusionQ(d, mode){
  const cfg = DIFF[d];
  const wantNone = d>=2 && Math.random() < 0.25;
  for(let i=0;i<600;i++){
    let fig, t1, t2;
    if(wantNone){
      fig = rand(cfg.figs); t1 = rand(TYPES); t2 = rand(TYPES);
    } else {
      const v = pickValid(d); fig = v.fig; t1 = v.mood[0]; t2 = v.mood[1];
    }
    const roles = makeTerms(mode, null);
    const acc = acceptedConclusions(fig, t1, t2, roles, mode);
    if(wantNone === (acc.length===0)){
      const lines = [0,1].map(j=>{
        const [s,p] = premiseTerms(fig,j,roles);
        return propText(j===0?t1:t2, s, p);
      });
      return {kind:'conclusion', fig, t1, t2, roles, lines, accepted:acc, none:acc.length===0};
    }
  }
  // fallback: Barbara
  const roles = makeTerms(mode, null);
  const acc = acceptedConclusions(1,'A','A',roles,mode);
  return {kind:'conclusion', fig:1, t1:'A', t2:'A', roles,
          lines:[propText('A',roles.M,roles.P), propText('A',roles.S,roles.M)],
          accepted:acc, none:false};
}

/* answer parsing for set 3 */
function normTerm(t){
  let s = t.toLowerCase().trim().replace(/[.!?,;:]+$/,'').replace(/\s+/g,' ');
  s = s.replace(/^(a|an|the)\s+/,'');
  if(PLURAL_EX_REV[s]) s = PLURAL_EX_REV[s];   // irregular multi-word plurals
  if(s.length>2 && s.endsWith('s')) s = s.slice(0,-1);
  return s;
}
function parseAnswer(input){
  let s = input.toLowerCase().trim().replace(/[.!?]+$/,'').replace(/\s+/g,' ');
  s = s.replace(/^(therefore|so|thus|hence|ergo|∴)[,:]?\s+/,'');
  if(/^(none|nothing|no conclusion( follows)?|nothing follows|no valid conclusion|invalid|does not follow|nothing)$/.test(s))
    return {none:true};
  let m;
  if((m = s.match(/^(?:all|every|each|any)\s+(.+?)\s+(?:are|is)\s+(.+)$/)))
    return {c:'A', s:m[1], p:m[2]};
  if((m = s.match(/^some\s+(.+?)\s+(?:are|is)\s+not\s+(.+)$/)))
    return {c:'O', s:m[1], p:m[2]};
  if((m = s.match(/^some\s+(.+?)\s+(?:aren't|isn't)\s+(.+)$/)))
    return {c:'O', s:m[1], p:m[2]};
  if((m = s.match(/^some\s+(.+?)\s+(?:are|is)\s+(.+)$/)))
    return {c:'I', s:m[1], p:m[2]};
  if((m = s.match(/^no\s+(.+?)\s+(?:are|is)\s+(.+)$/)))
    return {c:'E', s:m[1], p:m[2]};
  return null;
}
function termKey(t){
  if(t.kind==='L'||t.kind==='l') return t.l.toLowerCase();
  if(t.kind==='n') return normTerm(t.name);
  return normTerm(t.s);
}
function checkConclusionAnswer(q, input){
  const parsed = parseAnswer(input);
  if(!parsed) return {parsed:false};
  if(parsed.none) return {parsed:true, correct:q.none};
  if(q.none) return {parsed:true, correct:false};
  const su = normTerm(parsed.s), pu = normTerm(parsed.p);
  const hit = q.accepted.find(a => a.c===parsed.c && termKey(a.S)===su && termKey(a.P)===pu);
  return {parsed:true, correct:!!hit, hit};
}

/* Set 4: ordinary-English arguments */
const aan = t => art(t.s)+' '+t.s;
const TPL = {
  A: [
    (S,P)=>`Every ${S.s} is ${aan(P)}.`,
    (S,P)=>`${cap(plural(S.s))} are always ${plural(P.s)}.`,
    (S,P)=>`Whatever is ${aan(S)} is ${aan(P)}.`,
    (S,P)=>`If something is ${aan(S)}, then it is ${aan(P)}.`,
    (S,P)=>`Any ${S.s} is ${aan(P)}.`,
    (S,P)=>`${cap(plural(S.s))} are, without exception, ${plural(P.s)}.`
  ],
  Ahard: [ (S,P)=>`Only ${plural(P.s)} are ${plural(S.s)}.` ],
  E: [
    (S,P)=>`${cap(plural(S.s))} are never ${plural(P.s)}.`,
    (S,P)=>`Not a single ${S.s} is ${aan(P)}.`,
    (S,P)=>`Nothing that is ${aan(S)} is ${aan(P)}.`,
    (S,P)=>`There is no ${S.s} that is ${aan(P)}.`
  ],
  Ehard: [ (S,P)=>`${cap(plural(P.s))} are never ${plural(S.s)}.` ],
  I: [
    (S,P)=>`There are ${plural(S.s)} that are ${plural(P.s)}.`,
    (S,P)=>`At least some ${plural(S.s)} are ${plural(P.s)}.`,
    (S,P)=>`Certain ${plural(S.s)} are ${plural(P.s)}.`,
    (S,P)=>`A few ${plural(S.s)} are ${plural(P.s)}.`
  ],
  Ihard: [ (S,P)=>`Some ${plural(P.s)} are ${plural(S.s)}.` ],
  O: [
    (S,P)=>`Not all ${plural(S.s)} are ${plural(P.s)}.`,
    (S,P)=>`Some ${plural(S.s)} fail to be ${plural(P.s)}.`,
    (S,P)=>`There are ${plural(S.s)} that are not ${plural(P.s)}.`,
    (S,P)=>`Not every ${S.s} is ${aan(P)}.`
  ],
  singA: [
    (S,P)=>`${S.name} is ${aan(P)}.`,
    (S,P)=>`${S.name} is certainly ${aan(P)}.`,
    (S,P)=>`Clearly, ${S.name} is ${aan(P)}.`
  ],
  singE: [
    (S,P)=>`${S.name} is not ${aan(P)}.`,
    (S,P)=>`${S.name} is no ${P.s}.`
  ]
};
function paraphrase(type, S, P, d){
  if(isSing(S)){
    return rand(isNeg(type) ? TPL.singE : TPL.singA)(S,P);
  }
  let pool = TPL[type].slice();
  if(d>=4 && TPL[type+'hard']) pool = pool.concat(TPL[type+'hard']);
  return rand(pool)(S,P);
}
function decap(s){
  const first = s.split(/\s/)[0].replace(/[^A-Za-z]/g,'');
  if(NAMES.includes(first)) return s;
  return s.charAt(0).toLowerCase()+s.slice(1);
}
const stripDot = s => s.replace(/\.$/,'');
const FRAMES_EASY = [
  (p1,p2,c)=>`${p1} ${p2} Therefore, ${decap(c)}`,
  (p1,p2,c)=>`${p2} And ${decap(p1)} So ${decap(c)}`,
  (p1,p2,c)=>`Since ${decap(stripDot(p1))}, and ${decap(stripDot(p2))}, it follows that ${decap(c)}`
];
const FRAMES_HARD = [
  (p1,p2,c)=>`${stripDot(c)}, since ${decap(stripDot(p1))} and ${decap(stripDot(p2))}.`,
  (p1,p2,c)=>`${c} After all, ${decap(stripDot(p1))}, and ${decap(stripDot(p2))}.`
];
function genOrdinaryQ(d){
  const base = genValidityQ(d, 'english');
  const {fig, mood, roles} = base;
  const prem = [0,1].map(i=>{
    const [s,p] = premiseTerms(fig,i,roles);
    return paraphrase(mood[i], s, p, d);
  });
  const conclStd = propText(mood[2], roles.S, roles.P)+'.';
  let concl;
  if(isSing(roles.S)) concl = conclStd;
  else {
    // paraphrase the conclusion too, but gently: half the time keep standard form
    concl = Math.random()<0.5 ? conclStd : paraphrase(mood[2], roles.S, roles.P, d);
  }
  const frames = d>=3 ? FRAMES_EASY.concat(FRAMES_HARD) : FRAMES_EASY;
  const prose = rand(frames)(prem[0], prem[1], concl);
  return Object.assign(base, {kind:'ordinary', prose,
    standard:{lines:base.lines, concl:base.concl}});
}

/* ================================================================
   VENN DIAGRAMS
   Shading declares a region empty; × declares an occupant;
   ⊗ marks traditional existential import.
   ================================================================ */
const V2 = {
  circles:{A:{x:170,y:150,r:90}, B:{x:270,y:150,r:90}}, W:440, H:290,
  cent:{A:[138,150], AB:[220,150], B:[302,150], O:[220,266]},
  lab:{A:[110,30], B:[330,30]}
};
const V3 = {
  circles:{S:{x:155,y:138,r:95}, P:{x:265,y:138,r:95}, M:{x:210,y:233,r:95}}, W:420, H:358,
  cent:{S:[118,113], P:[302,113], M:[210,276], SP:[210,104], SM:[156,198], PM:[264,198], SPM:[210,168]},
  lab:{S:[92,24], P:[328,24], M:[210,352]}
};
const REGIONS3 = ['S','P','M','SP','SM','PM','SPM'];
const inRg = (reg,c) => reg.includes(c);
function zone3(X, Y, kind){ // 'int' = X∩Y, 'diff' = X∖Y
  return REGIONS3.filter(r => kind==='int' ? (inRg(r,X)&&inRg(r,Y)) : (inRg(r,X)&&!inRg(r,Y)));
}
/* Diagram the two premises of a syllogism onto the 3-circle Venn. */
function diagram3(fig, t1, t2){
  const shaded = new Set(), xs = [];
  const prems = [0,1].map(i=>({t: i?t2:t1, X:FIG_POS[fig][i][0], Y:FIG_POS[fig][i][1]}));
  for(const p of prems){
    if(p.t==='A') zone3(p.X,p.Y,'diff').forEach(r=>shaded.add(r));
    if(p.t==='E') zone3(p.X,p.Y,'int').forEach(r=>shaded.add(r));
  }
  for(const p of prems){
    if(p.t==='I'||p.t==='O'){
      const cand = zone3(p.X,p.Y, p.t==='I'?'int':'diff').filter(r=>!shaded.has(r));
      /* one open cell → definite ×; several open cells → ambiguous (×? in each) */
      if(cand.length) xs.push({regions:cand, kind:cand.length===1?'def':'ambig'});
    }
  }
  return {shaded, xs, importTerm:null};
}
function conclSatisfiedFor(diag, tc, subj, pred){
  const {shaded, xs} = diag;
  if(tc==='A') return zone3(subj,pred,'diff').every(r=>shaded.has(r));
  if(tc==='E') return zone3(subj,pred,'int').every(r=>shaded.has(r));
  const need = tc==='I' ? (r=>inRg(r,subj)&&inRg(r,pred)) : (r=>inRg(r,subj)&&!inRg(r,pred));
  return xs.some(x=>x.regions.every(need));
}
/* try adding an existential-import ⊗ so that the conclusion appears */
function tryImport(diag, tc, subj, pred){
  for(const T of ['M','S','P']){
    const un = REGIONS3.filter(r=>inRg(r,T) && !diag.shaded.has(r));
    if(un.length>=1 && un.length<=2){
      diag.xs.push({regions:un, kind:'import', term:T});
      if(conclSatisfiedFor(diag, tc, subj, pred)){ diag.importTerm = T; return true; }
      diag.xs.pop();
    }
  }
  return false;
}
function diagramSyllogism(fig, mood){
  const diag = diagram3(fig, mood[0], mood[1]);
  diag.satisfied = conclSatisfiedFor(diag,mood[2],'S','P');
  if(!diag.satisfied && isValidSyll(fig,mood))
    diag.satisfied = tryImport(diag, mood[2], 'S', 'P');
  return diag;
}
/* SVG rendering */
let vennUid = 0;
function svgVenn(layout, labels, shaded, xs, opts){
  opts = opts || {};
  const id = 'vn'+(++vennUid)+'_';
  const cs = layout.circles, keys = Object.keys(cs);
  const circ = (k,fill)=>`<circle cx="${cs[k].x}" cy="${cs[k].y}" r="${cs[k].r}" fill="${fill}"/>`;
  let defs = `<pattern id="${id}h" patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(45)">`+
    `<line x1="1" y1="0" x2="1" y2="8" stroke="var(--venn-shade)" stroke-width="2.6" opacity="0.85"/></pattern>`;
  defs += keys.map(k=>`<clipPath id="${id}c${k}"><circle cx="${cs[k].x}" cy="${cs[k].y}" r="${cs[k].r}"/></clipPath>`).join('');
  let fills = '';
  Array.from(shaded).forEach((reg,i)=>{
    const ins = keys.filter(k=>reg.includes(k)), outs = keys.filter(k=>!reg.includes(k));
    let core;
    if(ins.length===0){ // region outside every circle
      core = `<rect width="${layout.W}" height="${layout.H}" fill="white"/>`;
    } else {
      core = circ(ins[ins.length-1], 'white');
      for(let j=ins.length-2; j>=0; j--) core = `<g clip-path="url(#${id}c${ins[j]})">${core}</g>`;
    }
    defs += `<mask id="${id}m${i}"><rect width="${layout.W}" height="${layout.H}" fill="black"/>${core}${outs.map(k=>circ(k,'black')).join('')}</mask>`;
    fills += `<rect width="${layout.W}" height="${layout.H}" fill="url(#${id}h)" mask="url(#${id}m${i})"/>`;
  });
  const strokes = keys.map(k=>`<circle cx="${cs[k].x}" cy="${cs[k].y}" r="${cs[k].r}" fill="none" stroke="var(--venn-line)" stroke-width="2"/>`).join('');
  const labEls = keys.map(k=>{
    const p = layout.lab[k];
    const txt = String(labels[k]);
    const fs = txt.length>18 ? 12 : txt.length>13 ? 14 : 16;
    return `<text x="${p[0]}" y="${p[1]}" font-size="${fs}" font-style="italic" text-anchor="middle" fill="var(--ink-soft)" font-family="inherit">${txt}</text>`;
  }).join('');
  /* Existence marks: one definite cell → × (or ⊗ for import).
     Several open cells for the same “some” → ×? (or ⊗?) in the centre of
     each candidate cell, so the mark never sits on a circle’s edge. */
  const xEls = (xs||[]).map(x=>{
    const regs = (x.regions||[]).filter(r=>layout.cent[r]);
    if(!regs.length) return '';
    const ambig = regs.length>1 || x.kind==='ambig' || x.kind==='border';
    const isImp = x.kind==='import';
    const base = isImp ? '⊗' : '×';
    const fs = ambig ? (isImp?17:19) : (isImp?24:28);
    const dy = ambig ? 6 : 9;
    return regs.map(r=>{
      const px = layout.cent[r][0], py = layout.cent[r][1];
      if(ambig){
        return `<text x="${px}" y="${py+dy}" text-anchor="middle" fill="var(--venn-mark)" font-weight="bold" font-family="Georgia,serif">`+
          `<tspan font-size="${fs}">${base}</tspan>`+
          `<tspan font-size="${Math.round(fs*0.72)}" dx="1" dy="${-Math.round(fs*0.28)}">?</tspan></text>`;
      }
      return `<text x="${px}" y="${py+dy}" font-size="${fs}" text-anchor="middle" fill="var(--venn-mark)" font-weight="bold" font-family="Georgia,serif">${base}</text>`;
    }).join('');
  }).join('');
  return `<svg viewBox="0 0 ${layout.W} ${layout.H}" class="venn ${opts.cls||''}" xmlns="http://www.w3.org/2000/svg"><defs>${defs}</defs>${fills}${strokes}${labEls}${xEls}</svg>`;
}
function termLabel(t){
  if(t.kind==='g') return plural(t.s);
  if(t.kind==='n') return t.name;
  return t.l;
}

/* ---- Set V: diagram a proposition (2 circles, interactive) ---- */
function genVennQ(d, mode){
  const type = rand(TYPES);
  let S, P;
  if(mode==='letters'){
    const ls = sample(LETTERS,2);
    S = {kind:'L', l:ls[0]}; P = {kind:'L', l:ls[1]};
  } else {
    const ws = sample(GEN_TERMS,2);
    S = {kind:'g', s:ws[0]}; P = {kind:'g', s:ws[1]};
  }
  let sentence = propText(type,S,P);
  if(mode==='english' && d>=3 && Math.random()<0.55) sentence = stripDot(paraphrase(type,S,P,d));
  else if(mode==='letters' && d>=4 && type==='A' && Math.random()<0.4) sentence = `Only ${P.l} are ${S.l}`;
  const swap = Math.random()<0.5;
  const left = swap?P:S, right = swap?S:P;
  const sLune = swap?'B':'A';               // region "S outside P"
  const correct = {A:'none', AB:'none', B:'none'};
  if(type==='A') correct[sLune]='shade';
  if(type==='E') correct.AB='shade';
  if(type==='I') correct.AB='x';
  if(type==='O') correct[sLune]='x';
  return {kind:'venn', type, S, P, left, right, sLune, sentence, correct};
}
function vennStateToMarks(state){
  const shaded = new Set(), xs = [];
  for(const r of ['A','AB','B']){
    if(state[r]==='shade') shaded.add(r);
    if(state[r]==='x') xs.push({regions:[r], kind:'def'});
  }
  return {shaded, xs};
}
function checkVenn(q, user){
  return ['A','AB','B'].every(r=>user[r]===q.correct[r]);
}
function vennMistake(q, user){
  const regs=['A','AB','B'], mirror={A:'B',AB:'AB',B:'A'};
  for(const r of regs){
    if(q.correct[r]!=='none' && user[r]!=='none' && user[r]!==q.correct[r])
      return q.correct[r]==='shade'
        ? 'Right region, wrong mark. A universal proposition declares a region <em>empty</em> — that is shading. Students often feel a universal must “put something” into the diagram, but a universal only takes away; it asserts no existence.'
        : 'Right region, wrong mark. “Some” asserts that something <em>exists</em> — that is the ×. Shading would declare the region empty, the very opposite of what is said. The urge to shade comes from treating every proposition as a claim about a whole region.';
  }
  if(regs.some(r=>user[r]!=='none') && regs.every(r=>user[r]===q.correct[mirror[r]]))
    return 'You diagrammed the converse — subject and predicate changed places. “All S are P” empties S <em>outside</em> P (not P outside S), and “Some S are not P” marks S outside P. A and O propositions do not convert, so direction matters; this is the most common slip.';
  const uMarks = regs.filter(r=>user[r]!=='none').length;
  const cMarks = regs.filter(r=>q.correct[r]!=='none').length;
  if(uMarks>cMarks)
    return 'Too many marks. Each categorical proposition makes exactly one claim — one shaded region or one ×. Students often add what they take to be implied (e.g. shading elsewhere after an ×); diagram only what the proposition itself asserts.';
  if(q.type==='I' && user.AB==='none')
    return 'The × for “Some S are P” belongs in the <em>overlap</em>: the proposition asserts a common member. It is tempting to mark the subject’s own crescent because the sentence begins with S, but the claim concerns what S and P share.';
  if(q.type==='O' && user.AB!=='none')
    return '“Some S are not P” locates its witness in S <em>outside</em> P. Students often mark the overlap because both terms are mentioned — but the proposition asserts distance from P, not fellowship with it.';
  return 'Ask first: does the proposition <em>empty</em> a region (shade it) or <em>populate</em> one (place an ×)? Then ask which region: the subject’s crescent, or the overlap.';
}

/* ---- Sets V (phase 2) & VI: diagramming premise pairs and whole syllogisms ---- */
function diagToState(diag){
  const st = {}; REGIONS3.forEach(r=>st[r]='none');
  diag.shaded.forEach(r=>st[r]='shade');
  diag.xs.forEach(x=>{ st[x.regions[0]] = 'x'; });
  return st;
}
/* two premises together (set V after 50 points) — always determinate (no ambiguous ×?) */
function genVenn2Q(d, mode){
  const cfg = DIFF[d];
  for(let i=0;i<500;i++){
    const fig = rand(cfg.figs), t1 = rand(TYPES), t2 = rand(TYPES);
    if(isPart(t1) && isPart(t2)) continue;
    const diag = diagram3(fig, t1, t2);
    if(diag.xs.some(x=>x.regions.length>1 || x.kind==='ambig' || x.kind==='border')) continue;
    const roles = makeTerms(mode, null);
    const lines = [0,1].map(j=>{const tp=premiseTerms(fig,j,roles); return propText(j?t2:t1, tp[0], tp[1]);});
    return {kind:'venn3', sub:'pair', fig, t1, t2, roles, lines, diag, expect:diagToState(diag)};
  }
  const roles = makeTerms(mode, null), diag = diagram3(1,'A','A');
  return {kind:'venn3', sub:'pair', fig:1, t1:'A', t2:'A', roles, diag, expect:diagToState(diag),
    lines:[propText('A',roles.M,roles.P), propText('A',roles.S,roles.M)]};
}
/* a whole valid syllogism (set VI) — premises plus, where needed, the import × */
function genVennSyllQ(d, mode){
  const v = pickValid(d);
  const diag = diagramSyllogism(v.fig, v.mood);
  const roles = makeTerms(mode, null);
  const lines = [0,1].map(j=>{const tp=premiseTerms(v.fig,j,roles); return propText(v.mood[j], tp[0], tp[1]);});
  return {kind:'venn3', sub:'syll', fig:v.fig, mood:v.mood, name:moodName(v.fig,v.mood),
    roles, lines, concl:propText(v.mood[2], roles.S, roles.P), diag, expect:diagToState(diag)};
}
function checkVenn3(q, user){ return REGIONS3.every(r=>user[r]===q.expect[r]); }
function vennMistake3(q, user){
  for(const r of REGIONS3)
    if(q.expect[r]!=='none' && user[r]!=='none' && user[r]!==q.expect[r])
      return q.expect[r]==='shade'
        ? 'Right region, wrong mark: a universal proposition <em>empties</em> its region — shade it. The × asserts existence, which no universal claims.'
        : 'Right region, wrong mark: “some” asserts existence — an ×. Shading would declare that very region empty, the opposite of what is said.';
  const imp = q.diag.xs.find(x=>x.kind==='import');
  if(imp && user[imp.regions[0]]!=='x')
    return `The conclusion asserts existence that the universal premises do not yet witness. The traditional account grants existential import: place the × in the sole unshaded region of “${termLabel(q.roles[imp.term])}”. Missing this is the commonest slip here — on the modern reading the weakened moods fail for exactly this reason.`;
  const expX = REGIONS3.filter(r=>q.expect[r]==='x'), usrX = REGIONS3.filter(r=>user[r]==='x');
  if(expX.length && usrX.join()!==expX.join())
    return 'Mind where the × lands. Shade the universal premises first — the shading then decides which cell of the “some”-zone can still hold a witness. An × in a shaded cell asserts what was declared empty; an × on the wrong side of a circle asserts a membership never claimed.';
  const expS = REGIONS3.filter(r=>q.expect[r]==='shade').length, usrS = REGIONS3.filter(r=>user[r]==='shade').length;
  if(usrS>expS)
    return 'Too much shading. Shade only what the universal premises declare empty — a lens of two cells each. Students often shade the conclusion as well, but its content should appear of itself once the premises are pictured.';
  if(usrS<expS)
    return 'Each universal premise empties a full lens of <em>two</em> cells — one inside the third circle and one outside it. Half-shading usually comes from forgetting that the zone continues into the third circle.';
  return 'Take the universals first and shade what they empty; then let the shading force each × into its one possible cell.';
}

/* ================================================================
   SET VII — THE MATTER AND THE FORM
   A self-contained ontology of classical (Euclidean) mathematics.
   Each term's extension is a set of representative atoms; the truth
   of any A/E/I/O proposition is computed by set inclusion, so all
   truths are decided inside the program. Definitions follow Euclid:
   a number is a multitude ≥ 2 (the unit is not a number, so square
   numbers are composite); an isosceles triangle has two sides alone
   equal, so no equilateral triangle is isosceles (Elements I, def. 20);
   a point, having no parts, is no magnitude; figures, lines and the
   like are magnitudes; no number is a magnitude (discrete vs continuous).
   ================================================================ */
const KB_ATOMS = (function(){
  const atoms = [];
  for(let n=2;n<=50;n++) atoms.push({id:'n'+n, name:'the number '+n, num:n});
  const g = (id,name,tags)=>({id, name, tags});
  atoms.push(
    g('teq','the equilateral triangle',            ['mag','fig','tri','equi']),
    g('tia','the acute isosceles triangle',        ['mag','fig','tri','iso']),
    g('tir','the isosceles right triangle',        ['mag','fig','tri','iso','right']),
    g('tio','the obtuse isosceles triangle',       ['mag','fig','tri','iso']),
    g('tsa','the acute scalene triangle',          ['mag','fig','tri','sca']),
    g('tsr','the scalene right triangle',          ['mag','fig','tri','sca','right']),
    g('tso','the obtuse scalene triangle',         ['mag','fig','tri','sca']),
    g('qsq','the square',                          ['mag','fig','quad','sq']),
    g('qob','the oblong',                          ['mag','fig','quad']),
    g('cir','the circle',                          ['mag','fig','circ']),
    g('lin','the straight line',                   ['mag','line']),
    g('pt','the point',                            ['pt'])
  );
  return atoms;
})();
const isPrimeN = n => { for(let k=2;k*k<=n;k++) if(n%k===0) return false; return n>1; };
const MATH_TERMS = {
  'number':               a=>a.num!==undefined,
  'prime number':         a=>a.num!==undefined && isPrimeN(a.num),
  'composite number':     a=>a.num!==undefined && !isPrimeN(a.num),
  'even number':          a=>a.num!==undefined && a.num%2===0,
  'odd number':           a=>a.num!==undefined && a.num%2===1,
  'square number':        a=>a.num!==undefined && Number.isInteger(Math.sqrt(a.num)),
  'magnitude':            a=>!!a.tags && a.tags.indexOf('mag')>=0,
  'figure':               a=>!!a.tags && a.tags.indexOf('fig')>=0,
  'triangle':             a=>!!a.tags && a.tags.indexOf('tri')>=0,
  'quadrilateral':        a=>!!a.tags && a.tags.indexOf('quad')>=0,
  'square':               a=>!!a.tags && a.tags.indexOf('sq')>=0,
  'circle':               a=>!!a.tags && a.tags.indexOf('circ')>=0,
  'equilateral triangle': a=>!!a.tags && a.tags.indexOf('equi')>=0,
  'isosceles triangle':   a=>!!a.tags && a.tags.indexOf('iso')>=0,
  'scalene triangle':     a=>!!a.tags && a.tags.indexOf('sca')>=0,
  'right triangle':       a=>!!a.tags && a.tags.indexOf('right')>=0,
  'straight line':        a=>!!a.tags && a.tags.indexOf('line')>=0,
  'point':                a=>!!a.tags && a.tags.indexOf('pt')>=0
};
const MATH_KEYS = Object.keys(MATH_TERMS);
/* ---- second matter: virtues, vices, and passions (Nic. Ethics; ST I-II, II-II) ----
   Doctrinal points encoded: every virtue and vice is a habit; no passion is a
   habit (passions are movements of the sensitive appetite); every moral and
   intellectual virtue observes a mean (ST I-II 64.1,3) but no theological
   virtue does (64.4); the four cardinal virtues are moral virtues, prudence
   being intellectual in essence yet moral in matter (58.3 ad 1; 61.1);
   injustice is a vice without paired extremes. */
const ETH_ATOMS = (function(){
  const v = (id,name,tags)=>({id, name, tags});
  const mk = (names, tags)=>names.map(n=>v('e_'+n.replace(/\W/g,''), n, tags));
  return [].concat(
    mk(['courage','temperance','justice'], ['virtue','moral','cardinal','mean','habit']),
    mk(['prudence'], ['virtue','moral','intellectual','cardinal','mean','habit']),
    mk(['liberality','magnanimity','meekness','truthfulness'], ['virtue','moral','mean','habit']),
    mk(['science','art','wisdom'], ['virtue','intellectual','mean','habit']),
    mk(['faith','hope','charity'], ['virtue','theological','habit']),
    mk(['cowardice','rashness','intemperance','insensibility','avarice','prodigality'], ['vice','extreme','habit']),
    mk(['injustice'], ['vice','habit']),
    [v('e_pfear','the passion of fear',['passion']), v('e_panger','the passion of anger',['passion']),
     v('e_pjoy','the passion of joy',['passion']), v('e_psorrow','the passion of sorrow',['passion']),
     v('e_plove','the passion of love',['passion']), v('e_pdaring','the passion of daring',['passion'])]
  );
})();
const hasTag = t => a => !!a.tags && a.tags.indexOf(t)>=0;
const ETH_TERMS = {
  'virtue': hasTag('virtue'),
  'moral virtue': hasTag('moral'),
  'intellectual virtue': hasTag('intellectual'),
  'theological virtue': hasTag('theological'),
  'cardinal virtue': hasTag('cardinal'),
  'vice': hasTag('vice'),
  'extreme': hasTag('extreme'),
  'mean': hasTag('mean'),
  'habit': hasTag('habit'),
  'passion': hasTag('passion')
};
/* ---- third matter: the soul and living things (De Anima; ST I 75–78) ----
   The ladder of life; touch alone common to all animals (the oyster lacks
   sight); powers of the soul are not living things nor bodies but that BY
   which the living live. “Sighted” is said of what has sight by nature. */
const SOUL_ATOMS = (function(){
  const v = (id,name,tags)=>({id, name, tags});
  return [
    v('s_man','the man',['living','animal','sentient','human','sighted']),
    v('s_horse','the horse',['living','animal','sentient','sighted']),
    v('s_dog','the dog',['living','animal','sentient','sighted']),
    v('s_eagle','the eagle',['living','animal','sentient','sighted']),
    v('s_oyster','the oyster',['living','animal','sentient']),
    v('s_oak','the oak',['living','plant']),
    v('s_vine','the vine',['living','plant']),
    v('s_rose','the rose',['living','plant']),
    v('s_sight','the power of sight',['power','sensepow','extsense']),
    v('s_hearing','the power of hearing',['power','sensepow','extsense']),
    v('s_touch','the power of touch',['power','sensepow','extsense']),
    v('s_imag','the imagination',['power','sensepow','intsense']),
    v('s_memory','the memory',['power','sensepow','intsense']),
    v('s_intellect','the intellect',['power','ratpow']),
    v('s_will','the will',['power','ratpow']),
    v('s_nutrition','the power of nutrition',['power','vegpow']),
    v('s_growth','the power of growth',['power','vegpow'])
  ];
})();
const SOUL_TERMS = {
  'living thing': hasTag('living'),
  'animal': hasTag('animal'),
  'plant': hasTag('plant'),
  'sentient being': hasTag('sentient'),
  'human being': hasTag('human'),
  'sighted animal': hasTag('sighted'),
  'thing that has vegetative powers': hasTag('living'),   // whatever nourishes itself and grows
  'thing that has sensitive powers': hasTag('sentient'),  // whatever has sensation
  'vital power': hasTag('power'),
  'sensitive power': hasTag('sensepow'),
  'external sense': hasTag('extsense'),
  'internal sense': hasTag('intsense'),
  'rational power': hasTag('ratpow'),
  'vegetative power': hasTag('vegpow')
};
/* ---- fourth matter: the everyday world of living things and things made ----
   Drawn from the same stock as the Division and Definition exercises, so that
   the matter of an argument can be weighed by ordinary knowledge and not by
   doctrine. Facts encoded: every tree is a plant and every plant a living
   thing; no plant is an animal; birds, fish and insects are all animals; not
   every bird flies (the ostrich); nothing made by man is alive. */
const NAT_ATOMS = (function(){
  const v = (id,name,tags)=>({id, name, tags});
  return [
    v('n_oak','the oak',            ['living','plant','tree']),
    v('n_pine','the pine',          ['living','plant','tree']),
    v('n_fern','the fern',          ['living','plant']),
    v('n_daisy','the daisy',        ['living','plant','flower']),
    v('n_rose','the rose',          ['living','plant','flower']),
    v('n_grass','the grass',        ['living','plant']),
    v('n_sparrow','the sparrow',    ['living','animal','bird','flier']),
    v('n_swan','the swan',          ['living','animal','bird','flier','swimmer']),
    v('n_ostrich','the ostrich',    ['living','animal','bird']),
    v('n_bee','the bee',            ['living','animal','insect','flier']),
    v('n_ant','the ant',            ['living','animal','insect']),
    v('n_salmon','the salmon',      ['living','animal','fish','swimmer']),
    v('n_dog','the dog',            ['living','animal','swimmer']),
    v('n_horse','the horse',        ['living','animal']),
    v('n_stone','the stone',        []),
    v('n_river','the river',        []),
    v('n_ladder','the ladder',      ['made','tool']),
    v('n_plough','the plough',      ['made','tool']),
    v('n_key','the key',            ['made','tool']),
    v('n_cloak','the cloak',        ['made'])
  ];
})();
const NAT_TERMS = {
  'living thing':      hasTag('living'),
  'plant':             hasTag('plant'),
  'tree':              hasTag('tree'),
  'flower':            hasTag('flower'),
  'animal':            hasTag('animal'),
  'bird':              hasTag('bird'),
  'fish':              hasTag('fish'),
  'insect':            hasTag('insect'),
  'thing that can fly':  hasTag('flier'),
  'thing that can swim': hasTag('swimmer'),
  'thing made by man': hasTag('made'),
  'tool':              hasTag('tool')
};
/* families: terms compared only within their own field of discourse, so no
   “some animals are vegetative powers” — creatures with creatures (including
   the “things that have …” bridges), powers with powers */
const KB_DOMAINS = {
  math:   {atoms: KB_ATOMS,   terms: MATH_TERMS, label:'classical mathematics'},
  ethics: {atoms: ETH_ATOMS,  terms: ETH_TERMS,  label:'the doctrine of virtue'},
  soul:   {atoms: SOUL_ATOMS, terms: SOUL_TERMS, label:'the soul and living things',
    families: [
      ['living thing','animal','plant','sentient being','human being','sighted animal',
       'thing that has vegetative powers','thing that has sensitive powers'],
      ['vital power','sensitive power','external sense','internal sense','rational power','vegetative power']
    ]},
  nature: {atoms: NAT_ATOMS, terms: NAT_TERMS, label:'the everyday world of living things and things made',
    families: [
      ['living thing','plant','tree','flower','animal','bird','fish','insect'],
      ['living thing','animal','bird','thing that can fly','thing that can swim',
       'thing made by man','tool']
    ]}
};
const DOM_KEYS = Object.keys(KB_DOMAINS);
const DOM_EXT = {};
for(const dkey of DOM_KEYS){
  DOM_EXT[dkey] = {};
  for(const t in KB_DOMAINS[dkey].terms)
    DOM_EXT[dkey][t] = KB_DOMAINS[dkey].atoms.filter(KB_DOMAINS[dkey].terms[t]);
}
const MATH_EXT = DOM_EXT.math;
function propTruth(type, xName, yName, dom){
  const E = DOM_EXT[dom||'math'];
  const ex = E[xName], ey = new Set(E[yName].map(a=>a.id));
  if(type==='A') return ex.length>0 && ex.every(a=>ey.has(a.id));
  if(type==='E') return !ex.some(a=>ey.has(a.id));
  if(type==='I') return ex.some(a=>ey.has(a.id));
  return ex.some(a=>!ey.has(a.id));
}
function counterexample(type, xName, yName, dom){
  const E = DOM_EXT[dom||'math'];
  const ex = E[xName], ey = new Set(E[yName].map(a=>a.id));
  if(type==='A'){ const a = ex.find(a=>!ey.has(a.id)); return a ? `${a.name} is ${art(xName)} ${xName} but not ${art(yName)} ${yName}` : ''; }
  if(type==='E'){ const a = ex.find(a=>ey.has(a.id)); return a ? `${a.name} is both ${art(xName)} ${xName} and ${art(yName)} ${yName}` : ''; }
  if(type==='I') return `in fact no ${plural(xName)} are ${plural(yName)}`;
  return `in fact every ${xName} is ${art(yName)} ${yName}`;
}
/* small-print helps for terms a student may not yet know */
const KB_GLOSS = {
  'magnitude':'continuous quantity — lines, surfaces, figures — as opposed to discrete number',
  'prime number':'a number measured only by the unit: 2, 3, 5, 7…',
  'composite number':'a non-prime number, measured by a smaller number besides the unit',
  'square number':'a number multiplied by itself: 4, 9, 16, 25…',
  'figure':'a bounded plane surface — triangles, quadrilaterals, circles',
  'habit':'a stable quality disposing one to act well or ill, formed by repeated acts',
  'virtue':'a good habit, disposing its possessor and his work to the good',
  'vice':'a bad habit, the corruption of good action',
  'passion':'a movement of the sensitive appetite — fear, anger, joy — neither good nor evil of itself',
  'moral virtue':'a virtue perfecting appetite and conduct: justice, courage, temperance and their kin',
  'intellectual virtue':'a virtue perfecting the intellect: understanding, science, wisdom, art, and prudence',
  'theological virtue':'faith, hope, or charity — bearing on God directly, infused rather than acquired',
  'cardinal virtue':'one of the four hinges of the moral life: prudence, justice, fortitude, temperance',
  'mean':'the middle course that virtue holds between excess and defect',
  'extreme':'a vice of excess or of defect, flanking the mean of a virtue',
  'vital power':'any power of the soul, by which a living thing lives and acts',
  'vegetative power':'the lowest powers of life: nutrition, growth, generation',
  'sensitive power':'the powers of sensation, outward and inward',
  'external sense':'sight, hearing, smell, taste, touch — sensing through bodily organs',
  'internal sense':'imagination, memory, the common sense — the senses working within',
  'rational power':'intellect and will, the powers proper to man',
  'sentient being':'a being endowed with sensation — every animal',
  'thing that has vegetative powers':'whatever nourishes itself and grows — every living thing',
  'thing that has sensitive powers':'whatever has sensation — every animal',
  'living thing':'whatever nourishes itself, grows, and reproduces — plant, animal, or man',
  'animal':'a living thing that also has sensation and moves itself',
  'plant':'a living thing that grows and reproduces but has no sensation',
  'human being':'the rational animal — an animal that also understands and chooses',
  'sighted animal':'an animal having the power of sight',
  'number':'a multitude composed of units: 2, 3, 4, 5…',
  'even number':'a number that divides into two equal whole numbers: 2, 4, 6…',
  'odd number':'a number that does not divide into two equal whole numbers: 3, 5, 7…',
  'triangle':'a plane figure bounded by three straight lines',
  'quadrilateral':'a plane figure bounded by four straight lines',
  'square':'a quadrilateral with equal sides and right angles',
  'circle':'a plane figure bounded by one line, every point of it equally far from the centre',
  'equilateral triangle':'a triangle whose three sides are equal',
  'isosceles triangle':'a triangle having two equal sides',
  'scalene triangle':'a triangle whose three sides are all unequal',
  'right triangle':'a triangle having one right angle',
  'straight line':'a line lying evenly between its ends',
  'point':'that which has no part — position without size',
  'tree':'a plant with a woody trunk — the oak, the pine',
  'flower':'a plant grown for its blossom — the rose, the daisy',
  'bird':'a feathered animal; not every one of them flies',
  'fish':'an animal that lives in water and breathes through gills',
  'insect':'a small animal with six legs — the bee, the ant',
  'thing that can fly':'whatever moves through the air under its own power',
  'thing that can swim':'whatever moves through water under its own power',
  'thing made by man':'an artefact — made, not grown',
  'tool':'a thing made to be used in doing work'
};
function glossFor(names){
  return names.filter(n=>KB_GLOSS[n]).map(n=>({term: plural(n), def: KB_GLOSS[n]}));
}
function genSoundnessQ(d){
  const target = rand(['sound','unsound','invalid']);
  const dom = rand(DOM_KEYS);
  const fams = KB_DOMAINS[dom].families || [Object.keys(KB_DOMAINS[dom].terms)];
  const keys = fams.length===1 ? fams[0]
    : (Math.random() < fams[0].length/(fams[0].length+fams[1].length) ? fams[0] : fams[1]);
  for(let i=0;i<900;i++){
    const wantValid = target!=='invalid';
    const vm = wantValid ? pickValid(d) : pickInvalid(d);
    const names = sample(keys,3);
    const roles = {S:{kind:'g',s:names[0]}, M:{kind:'g',s:names[1]}, P:{kind:'g',s:names[2]}};
    const tv = [0,1].map(j=>{
      const pos = FIG_POS[vm.fig][j];
      return propTruth(vm.mood[j], roles[pos[0]].s, roles[pos[1]].s, dom);
    });
    const allTrue = tv[0] && tv[1];
    if(target==='sound' && !allTrue) continue;
    if(target==='unsound' && allTrue) continue;
    if(target==='invalid' && !allTrue && Math.random()<0.55) continue;
    const valid = isValidSyll(vm.fig, vm.mood);
    const lines = [0,1].map(j=>{const tp=premiseTerms(vm.fig,j,roles); return propText(vm.mood[j], tp[0], tp[1]);});
    return {kind:'soundness', dom, fig:vm.fig, mood:vm.mood, valid, roles, lines,
      gloss: glossFor(names),
      concl: propText(vm.mood[2], roles.S, roles.P),
      name: moodName(vm.fig,vm.mood), viols: valid?[]:violations(vm.fig,vm.mood),
      truths: tv, premisesTrue: allTrue,
      conclTrue: propTruth(vm.mood[2], roles.S.s, roles.P.s, dom),
      answer: !valid ? 'invalid' : (allTrue ? 'sound' : 'unsound')};
  }
  const roles = {S:{kind:'g',s:'square'}, M:{kind:'g',s:'quadrilateral'}, P:{kind:'g',s:'figure'}};
  return {kind:'soundness', dom:'math', fig:1, mood:'AAA', valid:true, roles,
    gloss: glossFor(['square','quadrilateral','figure']),
    lines:['All quadrilaterals are figures','All squares are quadrilaterals'],
    concl:'All squares are figures', name:'Barbara', viols:[], truths:[true,true],
    premisesTrue:true, conclTrue:true, answer:'sound'};
}
function mistakeNoteSound(q, choice){
  if(q.answer!=='invalid' && choice==='invalid')
    return mistakeNoteValidity(q, 'english');
  if(q.answer==='invalid' && choice!=='invalid')
    return (q.premisesTrue ? 'Every premise here is true, and true matter makes a form feel trustworthy — but no truth of matter can repair a broken form. ' : '') + mistakeNoteValidity(q, 'english');
  if(q.answer==='unsound' && choice==='sound')
    return 'The deduction is flawless, but an argument is only as strong as its matter: a false premise hides easily inside a valid form. Students often stop once the form checks out — always try each premise against the definitions.';
  if(q.answer==='sound' && choice==='unsound')
    return 'Each premise here is true by the classical definitions, though one may have sounded doubtful (remember: Euclid’s isosceles has two sides <em>alone</em> equal; no passion is a habit; the theological virtues observe no mean; and the oyster is an animal without sight). Test surprising premises against the definitions, not against first impressions.';
  return 'Judge the form first, then the matter: validity concerns what would follow; soundness adds that the premises are in fact true.';
}

/* ---- typical-mistake notes ---- */
function mistakeNoteValidity(q, mode){
  if(!q.valid){ // student called it valid
    const v = q.viols[0]||'';
    if(v.indexOf('Exclusive')===0) return 'Two negatives feel as though they position the terms against one another; in truth two denials sever every link and establish nothing at all.';
    if(v.indexOf('Undistributed middle')===0) return 'The classic trap: both extremes are related to the middle term, so they seem related to each other. But unless the middle is taken in its whole extension at least once, each premise may speak of a different part of it — and the extremes never meet.';
    if(v.indexOf('Illicit major')===0) return 'The conclusion speaks of the major term in its whole extension, though the premise engaged only part of it. The sweeping sound of the premise hides the gap — check what the premise actually distributes.';
    if(v.indexOf('Illicit minor')===0) return 'The conclusion generalizes over the whole minor term, though the premise covered only part of it. This slips by easily when the premise sounds universal.';
    if(v.indexOf('A negative premise')===0) return 'A denial in the premises can never yield a joining in the conclusion. Students often let the affirmative-sounding terms carry them past the negative sign.';
    if(v.indexOf('A negative conclusion')===0) return 'Two affirmations can only join terms. The separation asserted in the conclusion must come from somewhere, and no premise supplies it.';
    if(v.indexOf('Two particular')===0) return 'Each “some” may pick out a different portion of the middle term, so the premises need never meet.';
    return 'Trace the distribution of each term: some rule of the syllogism is broken here.';
  }
  // student called a valid syllogism invalid
  if(isPart(q.mood[2]) && !isPart(q.mood[0]) && !isPart(q.mood[1]))
    return 'A very common hesitation: on the modern reading this fails, since “some” asserts an existence that universal premises do not supply. The scholastic account grants every term existential import, so the weakened conclusion follows.';
  if(q.fig===4)
    return 'Fourth-figure syllogisms run against the natural flow of predication, so even valid ones feel wrong. Recite the premises slowly and test the rules — none is broken.';
  if(mode!=='letters')
    return 'The likeliest culprit: the premises are implausible, and falsity feels like fallacy. But validity concerns form alone — grant the premises, however absurd, and see what must follow.';
  return 'This form keeps every rule: the middle is distributed once, no term is distributed in the conclusion alone, and negatives and particulars are balanced.';
}
function mistakeNoteConclusion(q, parsed){
  if(parsed.none)
    return 'Something does follow here — a connection easy to overlook, especially outside the first figure. Diagram the premises and read off what the shading forces.';
  if(q.none)
    return 'A natural instinct: two statements sharing a middle term feel as if they must connect the extremes. But here the middle never does its work — no valid mood fits these premises in any arrangement.';
  const su = normTerm(parsed.s), pu = normTerm(parsed.p);
  const mid = termKey(q.roles.M);
  if(su===mid || pu===mid)
    return 'The middle term never appears in the conclusion: its whole office is to join the extremes and then withdraw.';
  if(q.accepted.some(a=>termKey(a.S)===su && termKey(a.P)===pu &&
      ((parsed.c==='A'&&a.c==='I')||(parsed.c==='E'&&a.c==='O'))))
    return 'You concluded universally where only a particular follows. The premises secure a part of the subject term, not the whole of it — overclaiming the quantity is the most common slip in this exercise.';
  if(q.accepted.some(a=>termKey(a.S)===pu && termKey(a.P)===su) &&
     !q.accepted.some(a=>termKey(a.S)===su && termKey(a.P)===pu && a.c===parsed.c))
    return 'Mind the order of terms: A and O propositions do not convert simply, so a conclusion cannot merely be turned around. Only E and I convert term for term.';
  if(q.accepted.some(a=>termKey(a.S)===su && termKey(a.P)===pu && isNeg(a.c)!==isNeg(parsed.c)))
    return 'Mind the quality: a negative premise demands a negative conclusion, and purely affirmative premises can only affirm. Count the negative signs before concluding.';
  return 'Work from the diagram: shade the universal premises, mark the particulars, and assert only what the premises force.';
}

/* ================================================================
   SET I — IMMEDIATE INFERENCE
   Conversion, obversion, contraposition, contradictory (typed);
   and truth-propagation on the traditional square of opposition
   (contradictories, contraries, subcontraries, subalternation),
   with existential import throughout.
   ================================================================ */
function immProp(t, S, P, sNeg, pNeg){
  return {t, s:{term:S, neg:!!sNeg}, p:{term:P, neg:!!pNeg}};
}
function compTxt(side){
  const t = side.term;
  const base = (t.kind==='L') ? t.l : plural(t.s);
  return (side.neg ? 'non-' : '') + base;
}
function immPropText(pr){
  const s = compTxt(pr.s), p = compTxt(pr.p);
  if(pr.t==='A') return `All ${s} are ${p}`;
  if(pr.t==='E') return `No ${s} are ${p}`;
  if(pr.t==='I') return `Some ${s} are ${p}`;
  return `Some ${s} are not ${p}`;
}
function applyImmOp(op, pr){
  const {t,s,p} = pr;
  if(op==='contradictory')
    return {res:{t:{A:'O',O:'A',E:'I',I:'E'}[t], s, p}, perAcc:false};
  if(op==='converse'){
    if(t==='E'||t==='I') return {res:{t, s:p, p:s}, perAcc:false};
    if(t==='A') return {res:{t:'I', s:p, p:s}, perAcc:true};   // per accidens
    return {res:null};                                          // O: none
  }
  if(op==='obverse')
    return {res:{t:{A:'E',E:'A',I:'O',O:'I'}[t], s, p:{term:p.term, neg:!p.neg}}, perAcc:false};
  // contrapositive
  if(t==='A'||t==='O')
    return {res:{t, s:{term:p.term,neg:!p.neg}, p:{term:s.term,neg:!s.neg}}, perAcc:false};
  if(t==='E')
    return {res:{t:'O', s:{term:p.term,neg:!p.neg}, p:{term:s.term,neg:!s.neg}}, perAcc:true}; // per accidens
  return {res:null};                                            // I: none
}
const SQ_PAIR = {
  contradictory: [['A','O'],['O','A'],['E','I'],['I','E']],
  contrary:      [['A','E'],['E','A']],
  subcontrary:   [['I','O'],['O','I']],
  subalternDown: [['A','I'],['E','O']],
  subalternUp:   [['I','A'],['O','E']]
};
function sqAnswer(rel, given){
  if(rel==='contradictory') return given==='T' ? 'F' : 'T';
  if(rel==='contrary')      return given==='T' ? 'F' : 'U';
  if(rel==='subcontrary')   return given==='F' ? 'T' : 'U';
  if(rel==='subalternDown') return given==='T' ? 'T' : 'U';
  return given==='F' ? 'F' : 'U';   // subalternUp
}
function genImmediateQ(d, mode){
  const roles = makeTerms(mode, null);
  const S = roles.S, P = roles.P;
  if(Math.random()<0.5){
    const rels = ['contradictory','contrary'].concat(d>=2 ? ['subcontrary','subalternDown','subalternUp'] : []);
    const rel = rand(rels);
    const tp = rand(SQ_PAIR[rel]);
    const given = rand(['T','F']);
    return {kind:'imm', sub:'truth', rel, given, S, P,
      p1: immProp(tp[0],S,P), p2: immProp(tp[1],S,P), answer: sqAnswer(rel, given)};
  }
  const ops = ['contradictory','converse'].concat(d>=2?['obverse']:[]).concat(d>=3?['contrapositive']:[]);
  const op = rand(ops);
  let t;
  if(op==='converse') t = d>=3 ? rand(TYPES) : rand(['E','I']);
  else if(op==='contrapositive') t = d>=5 ? rand(TYPES) : (d>=4 ? rand(['A','O','I']) : rand(['A','O']));
  else t = rand(TYPES);
  const pr = immProp(t, S, P);
  const r = applyImmOp(op, pr);
  return {kind:'imm', sub:'op', op, pr, expected:r.res, perAcc:!!r.perAcc, S, P};
}
function parseImmAnswer(input){
  const raw = input.toLowerCase().trim().replace(/\s+/g,' ').replace(/[.!?]+$/,'');
  if(/^(none|nothing|no (converse|obverse|contrapositive|contradictory)|it has (none|no \w+)|cannot be (converted|contraposed|obverted)|not possible|impossible|there is none)$/.test(raw))
    return {none:true};
  const p = parseAnswer(input);
  if(!p) return null;
  if(p.none) return {none:true};
  const strip = w=>{
    let s = w.trim(), neg = false;
    if(/^non[- ]/.test(s)){ neg = true; s = s.replace(/^non[- ]/,''); }
    return {key: normTerm(s), neg};
  };
  return {c:p.c, s:strip(p.s), p:strip(p.p)};
}
function checkImm(q, input){
  const parsed = parseImmAnswer(input);
  if(!parsed) return {parsed:false};
  if(!q.expected) return {parsed:true, correct: !!parsed.none, parsedAns:parsed};
  if(parsed.none) return {parsed:true, correct:false, parsedAns:parsed};
  const e = q.expected;
  const ok = parsed.c===e.t
    && parsed.s.neg===e.s.neg && parsed.s.key===termKey(e.s.term)
    && parsed.p.neg===e.p.neg && parsed.p.key===termKey(e.p.term);
  return {parsed:true, correct:ok, parsedAns:parsed};
}
/* picture an immediate-inference proposition on the two original circles */
function immMarks(pr){
  const zone = inY=>{
    const a = pr.s.neg, b = inY ? pr.p.neg : !pr.p.neg;
    if(!a && !b) return 'AB';
    if(!a && b) return 'A';
    if(a && !b) return 'B';
    return 'O';
  };
  const shaded = new Set(), xs = [];
  const r = (pr.t==='A'||pr.t==='O') ? zone(false) : zone(true);
  if(r!=='O'){
    if(pr.t==='A'||pr.t==='E') shaded.add(r);
    else xs.push({regions:[r], kind:'def'});
  }
  return {shaded, xs};
}
function immMistakeOp(q, parsed){
  if(!q.expected)
    return q.op==='converse'
      ? 'An O proposition has no converse. “Some S are not P” speaks of a part of S only, and nothing guarantees any P outside S — yet the habit of converting E and I carries many students along.'
      : 'An I proposition has no contrapositive: contraposition obverts, then converts, then obverts — but the obverse of I is an O, and an O will not convert, so the process stalls.';
  if(parsed && parsed.none)
    return `This proposition does have a ${q.op}. Only O lacks a converse, and only I lacks a contrapositive.`;
  const e = q.expected;
  if(parsed){
    const plainSwap = parsed.s.key===termKey(q.pr.p.term) && parsed.p.key===termKey(q.pr.s.term)
                      && !parsed.s.neg && !parsed.p.neg;
    if(q.op==='converse' && q.pr.t==='A' && parsed.c==='A' && plainSwap)
      return 'Illicit conversion — the classic slip. “All S are P” distributes its subject only, so it converts merely <em>per accidens</em>: “Some P are S.”';
    if(q.op==='obverse'){
      if(parsed.c===e.t && !parsed.p.neg)
        return 'Obversion has two steps: change the quality <em>and</em> replace the predicate with its complement. You changed the quality only.';
      if(parsed.c===q.pr.t && parsed.p.neg)
        return 'Obversion has two steps: change the quality <em>and</em> replace the predicate with its complement. You negated the predicate only.';
    }
    if(q.op==='contrapositive'){
      if(plainSwap)
        return 'That is the converse. Contraposition is not one move but three — <em>obvert, then convert, then obvert</em>: “All S are P” → “No S are non-P” → “No non-P are S” → “All non-P are non-S.”';
      if(parsed.s.key===termKey(q.pr.s.term) && parsed.s.neg)
        return 'The complements are right, but the terms must also change places: the contrapositive of “All S are P” is “All non-P are non-S.”';
    }
    if(q.op==='contradictory' && ((q.pr.t==='A'&&parsed.c==='E')||(q.pr.t==='E'&&parsed.c==='A')))
      return 'That is the contrary, not the contradictory. Contradictories differ in both quantity and quality — A pairs with O, E with I. Contraries can both be false; contradictories never agree.';
    if(q.op==='contradictory' && ((q.pr.t==='I'&&parsed.c==='O')||(q.pr.t==='O'&&parsed.c==='I')))
      return 'That is the subcontrary. The contradictory of a particular is the universal of opposite quality: I pairs with E, O with A.';
  }
  return 'Recall the four operations: conversion exchanges the terms; obversion changes the quality and negates the predicate; contraposition does both at once; the contradictory reverses quantity and quality together.';
}
const REL_TEXT = {
  contradictory:'contradictories — they always take opposite truth-values',
  contrary:'contraries — never both true, though both may be false',
  subcontrary:'subcontraries — never both false, though both may be true',
  subalternDown:'superaltern and subaltern — truth descends from universal to particular, existential import supplying the witness',
  subalternUp:'subaltern and superaltern — falsity ascends from particular to universal, but truth does not'
};
function immMistakeTruth(q, choice){
  if(q.rel==='contrary' && q.given==='F')
    return 'Contraries may both be false — the falsity of one settles nothing about the other. Treating contraries like contradictories is the classic slip on the square.';
  if(q.rel==='subcontrary' && q.given==='T')
    return 'Subcontraries may both be true — the truth of one settles nothing. Only their joint falsehood is excluded.';
  if(q.rel==='subalternDown' && q.given==='F')
    return 'Falsity does not descend. A false universal leaves its particular entirely open: truth descends, falsity ascends.';
  if(q.rel==='subalternUp' && q.given==='T')
    return 'Truth does not ascend. A true particular leaves its universal entirely open: falsity ascends, truth descends.';
  return 'Contradictories always disagree — that much is fixed. For the other relations, ask what the square forbids; whatever it does not forbid remains undetermined.';
}

/* ================================================================
   SETS VII–IX — THE CONJUNCTIVE AND HYPOTHETICAL SYLLOGISM
   After John of St Thomas, Ars Logica: the conditional syllogism
   concludes by ponendo ponens and tollendo tollens alone; the
   conjunctive ("not both at once") concludes only by ponendo
   tollens — from the denial of one member nothing follows, since
   both may be absent together.
   Components are predications about a single subject s; the Venn
   circles picture the two predicates, shading = a region the major
   closes to s, × = where the premises put s.
   ================================================================ */
const HC_POS = {A:['A','AB'], B:['AB','B']};
const HC_NEG = {A:['B','O'],  B:['A','O']};
function hcCells(comp){ return (comp.neg ? HC_NEG : HC_POS)[comp.c]; }
function hcExcluded(major){          // returns the ARRAY of cells the major closes
  if(major.kind==='conj') return ['AB'];
  if(major.kind==='disjS') return ['AB','O'];   // strict either–or: exactly one
  if(major.kind==='disjI') return ['O'];        // broad or: at least one
  const notCons = {c:major.cons.c, neg:!major.cons.neg};
  return [hcCells(major.ant).filter(r=>hcCells(notCons).indexOf(r)>=0)[0]];
}
function hcOpen(major, minor){
  const ex = hcExcluded(major);
  return hcCells(minor).filter(r=>ex.indexOf(r)<0);
}
function hcConcl(major, minor){
  const open = hcOpen(major, minor);
  const o = minor.c==='A' ? 'B' : 'A';
  if(open.length && open.every(r=>HC_POS[o].indexOf(r)>=0)) return {c:o, neg:false};
  if(open.length && open.every(r=>HC_NEG[o].indexOf(r)>=0)) return {c:o, neg:true};
  return null;
}
const HYP_MOODS = {
  cond:  {PP:true, TT:true, AC:false, DA:false},
  conj:  {PT1:true, PT2:true, TP1:false, TP2:false},
  disjS: {PT1:true, PT2:true, TP1:true,  TP2:true},   // strict: both moods lawful
  disjI: {PT1:false, PT2:false, TP1:true, TP2:true}   // broad: tollendo ponens only
};
const HYP_INFO = {
  PP:{name:'ponendo ponens (modus ponens)',
      why:'To posit the antecedent is to posit the consequent: the conditional binds them.'},
  TT:{name:'tollendo tollens (modus tollens)',
      why:'To destroy the consequent is to destroy the antecedent: no room remains for it.'},
  AC:{name:'the fallacy of affirming the consequent',
      why:'The consequent may hold on other grounds; positing it does not posit the antecedent.'},
  DA:{name:'the fallacy of denying the antecedent',
      why:'The consequent was never made to depend on the antecedent alone; removing the antecedent leaves it free.'},
  PT:{name:'ponendo tollens',
      why:'The conjunctive forbids the two together: to posit one member is to remove the other.'},
  TP:{name:'the fallacy of tollendo ponens',
      why:'A conjunctive promises neither member: both may be absent together, so denying one posits nothing.'},
  PTS:{name:'ponendo tollens (strict disjunction)',
      why:'Marked “but not both”, the disjunction is strict: exactly one member holds, so to posit one is to remove the other.'},
  TPS:{name:'tollendo ponens (strict disjunction)',
      why:'Exactly one member must hold: remove one and the other stands.'},
  TPI:{name:'tollendo ponens',
      why:'The disjunction pledges at least one member: remove one and the other cannot be refused.'},
  PTI:{name:'the fallacy of ponendo tollens (broad disjunction)',
      why:'A broad disjunction permits both members together; positing one removes nothing.'}
};
function hypMoodKey(q){
  const pt = q.mood.indexOf('PT')===0;
  if(q.hkind==='conj')  return pt ? 'PT'  : 'TP';
  if(q.hkind==='disjS') return pt ? 'PTS' : 'TPS';
  if(q.hkind==='disjI') return pt ? 'PTI' : 'TPI';
  return q.mood;
}
function hcMinorConcl(kind, mood, ant, cons){
  const negOf = x=>({c:x.c, neg:!x.neg});
  if(kind==='cond'){
    if(mood==='PP') return {minor:ant, concl:cons};
    if(mood==='TT') return {minor:negOf(cons), concl:negOf(ant)};
    if(mood==='AC') return {minor:cons, concl:ant};
    return {minor:negOf(ant), concl:negOf(cons)};
  }
  if(mood==='PT1') return {minor:{c:'A',neg:false}, concl:{c:'B',neg:true}};
  if(mood==='PT2') return {minor:{c:'B',neg:false}, concl:{c:'A',neg:true}};
  if(mood==='TP1') return {minor:{c:'A',neg:true},  concl:{c:'B',neg:false}};
  return {minor:{c:'B',neg:true}, concl:{c:'A',neg:false}};
}
function hcTermOf(q, c){ return c==='A' ? q.X : q.Y; }
function hcCompText(q, comp){
  const t = hcTermOf(q, comp.c), sn = termLabel(q.subj);
  if(t.kind==='L') return `${sn} is ${comp.neg?'not ':''}${t.l}`;
  return `${sn} is ${comp.neg?'not ':''}${art(t.s)} ${t.s}`;
}
function hcMajorText(q){
  const sn = termLabel(q.subj);
  const k = q.major.kind;
  const xd = q.X.kind==='L' ? q.X.l : art(q.X.s)+' '+q.X.s;
  const yd = q.Y.kind==='L' ? q.Y.l : art(q.Y.s)+' '+q.Y.s;
  if(k==='conj')  return `${sn} is not both ${xd} and ${yd}`;
  if(k==='disjS') return `${sn} is either ${xd} or ${yd}, but not both`;
  if(k==='disjI') return `${sn} is either ${xd} or ${yd} — or perhaps both`;
  return `If ${hcCompText(q, q.major.ant)}, then ${hcCompText(q, q.major.cons)}`;
}
/* Components may be of any quantity (John of St Thomas): from level 3,
   half the questions use whole categorical propositions as components.
   A component is denied by asserting its contradictory. */
const CONTRA_T = {A:'O', O:'A', E:'I', I:'E'};
function contraProp(pr){ return {t:CONTRA_T[pr.t], S:pr.S, P:pr.P}; }
function pPropText(pr){ return propText(pr.t, pr.S, pr.P); }
const lcProp = s => s.charAt(0).toLowerCase()+s.slice(1);
function hcBuildProp(d, mode, kind, mood){
  const roles = makeTerms(mode, null);
  const P1 = {t:rand(TYPES), S:roles.S, P:roles.M};
  const pair = rand([[roles.P,roles.M],[roles.M,roles.P],[roles.S,roles.P],[roles.P,roles.S]]);
  const P2 = {t:rand(TYPES), S:pair[0], P:pair[1]};
  const NC = {PT1:[[1,false],[2,true]], PT2:[[2,false],[1,true]], TP1:[[1,true],[2,false]], TP2:[[2,true],[1,false]]};
  const MAP = {
    cond:{PP:[[1,false],[2,false]], TT:[[2,true],[1,true]], AC:[[2,false],[1,false]], DA:[[1,true],[2,true]]},
    conj:NC, disjS:NC, disjI:NC
  };
  const mm = MAP[kind][mood];
  const comp = i => i===1 ? P1 : P2;
  const minor = {prop:comp(mm[0][0]), denied:mm[0][1]};
  const stated = {prop:comp(mm[1][0]), denied:mm[1][1]};
  const resolve = x => x.denied ? contraProp(x.prop) : x.prop;
  const q = {style:'prop', hkind:kind, mood, roles, P1, P2,
    minorRes: resolve(minor), resolvedConcl: resolve(stated),
    minorDenied: minor.denied, statedDenied: stated.denied,
    valid: HYP_MOODS[kind][mood]};
  const p1t = lcProp(pPropText(P1)), p2t = lcProp(pPropText(P2));
  q.lines = [
    kind==='conj'  ? `Not both: ${p1t}, and ${p2t}`
    : kind==='disjS' ? `Either ${p1t}, or ${p2t} — but not both`
    : kind==='disjI' ? `Either ${p1t}, or ${p2t} — or perhaps both`
    : `If ${p1t}, then ${p2t}`,
    pPropText(q.minorRes)
  ];
  q.concl = pPropText(q.resolvedConcl);
  return q;
}
function hcBuild(d, mode, kind, mood){
  if(d>=3 && Math.random()<0.5) return hcBuildProp(d, mode, kind, mood);
  const roles = makeTerms(mode, null);
  const q = {X:roles.S, Y:roles.P,
    subj: mode==='letters' ? {kind:'l', l:roles.M.l.toLowerCase()} : {kind:'n', name:rand(NAMES)}};
  let ant = {c:'A', neg:false}, cons = {c:'B', neg:false};
  if(kind==='cond' && d>=4){
    if(Math.random()<0.3) ant = {c:'A', neg:true};
    if(Math.random()<0.3) cons = {c:'B', neg:true};
  }
  q.major = {kind, ant, cons};
  const mc = hcMinorConcl(kind, mood, ant, cons);
  q.minor = mc.minor; q.stated = mc.concl;
  q.hkind = kind; q.mood = mood;
  q.excluded = hcExcluded(q.major);
  q.open = hcOpen(q.major, q.minor);
  const comp = hcConcl(q.major, q.minor);
  q.computed = comp;
  q.valid = !!(comp && comp.c===mc.concl.c && comp.neg===mc.concl.neg);
  q.lines = [hcMajorText(q), hcCompText(q, q.minor)];
  q.concl = hcCompText(q, mc.concl);
  q.style = 'sing';
  return q;
}
function genHypQ(d, mode, kind){
  const wantValid = Math.random()<0.5;
  let pool = Object.keys(HYP_MOODS[kind]).filter(m=>HYP_MOODS[kind][m]===wantValid);
  if(!pool.length) pool = Object.keys(HYP_MOODS[kind]);   // strict disjunction: every mood lawful
  const q = hcBuild(d, mode, kind, rand(pool));
  q.kind = 'hyp';
  return q;
}
function genHypConclQ(d, mode){
  const kind = rand(d>=2 ? ['cond','conj','disjS','disjI'] : ['cond','conj']);
  const q = hcBuild(d, mode, kind, rand(Object.keys(HYP_MOODS[kind])));
  q.kind = 'hypc';
  if(q.style==='sing') q.expected = q.computed;   // {c,neg} or null
  else q.expectedProp = q.valid ? q.resolvedConcl : null;
  return q;
}
function hcNothing(q){ return q.style==='sing' ? !q.expected : !q.expectedProp; }
function checkHypAnswer(q, input){
  let s = input.toLowerCase().trim().replace(/[.!?]+$/,'').replace(/\s+/g,' ');
  s = s.replace(/^(therefore|so|thus|hence|ergo|∴)[,:]?\s+/,'');
  if(/^(none|nothing|no conclusion( follows)?|nothing follows|invalid|does not follow)$/.test(s))
    return {parsed:true, none:true, correct: hcNothing(q)};
  if(q.style==='prop'){
    let negPrefix = false;
    const mN = s.match(/^(?:it is not the case that|it is false that|not[:,]?)\s+(.+)$/);
    if(mN){ negPrefix = true; s = mN[1]; }
    const p = parseAnswer(s);
    if(!p) return {parsed:false};
    if(p.none) return {parsed:true, none:true, correct: hcNothing(q)};
    const ans = {parsed:true, none:false};
    if(!q.expectedProp){ ans.correct = false; return ans; }
    const want = negPrefix ? contraProp(q.expectedProp) : q.expectedProp;
    ans.correct = p.c===want.t && normTerm(p.s)===termKey(want.S) && normTerm(p.p)===termKey(want.P);
    return ans;
  }
  const m = s.match(/^(.+?)\s+is\s+(not\s+)?(?:(?:a|an)\s+)?(.+)$/);
  if(!m) return {parsed:false};
  const subjOk = normTerm(m[1]) === normTerm(termLabel(q.subj));
  const neg = !!m[2];
  const predKey = normTerm(m[3].replace(/^(a|an)\s+/,''));
  const ans = {parsed:true, none:false, subjOk, neg, predKey};
  if(!q.expected){ ans.correct = false; return ans; }
  const t = hcTermOf(q, q.expected.c);
  ans.correct = subjOk && neg===q.expected.neg && predKey===termKey(t);
  return ans;
}
function hypMistake(q, saidValid){
  const k = hypMoodKey(q);
  if(!q.valid){
    if(k==='AC') return 'Perhaps the conditional was read backwards — as though “if B, then C” also said “if C, then B”. The consequent can be true from other causes; the diagram leaves the subject two possible regions.';
    if(k==='DA') return '“If B, then C” does not say “only if B, C”. Removing the antecedent leaves the consequent standing free — the classic mirror-image of modus tollens.';
    if(k==='PTI') return 'Watch the marker: this “or” is the broad one — the members may stand together, so positing one removes nothing. Only the strict “either–or, but not both” licenses ponendo tollens.';
    return 'It is tempting to hear the conjunctive as a disjunctive — as though one of the two must hold. But “not both” promises neither: both members may fail together.';
  }
  if(k==='PP') return 'The bond of the conditional is exactly this: grant the antecedent, and the consequent cannot be refused.';
  if(k==='TT') return 'Tollendo tollens runs backwards and so feels suspect — but deny the consequent and every region where the antecedent could live is closed.';
  if(k==='TPS'||k==='TPI') return 'The disjunction pledges at least one member: deny one, and the other cannot be refused. Tollendo ponens is the disjunctive’s native mood.';
  if(k==='PTS') return 'Marked “but not both”, this disjunction is strict: its members exclude each other, so ponendo tollens holds here as it does for the conjunctive.';
  return 'The conjunctive is a prohibition of company: where one member stands, the other must fall. Ponendo tollens is its one lawful mood.';
}
function hypcMistake(q, ans){
  const k = hypMoodKey(q);
  if(hcNothing(q) && ans && !ans.none)
    return HYP_INFO[k].why + ' Students supply the missing conclusion out of habit; here the mood is fallacious and nothing follows.';
  if(!hcNothing(q) && ans && ans.none)
    return `Something does follow: this is ${HYP_INFO[k].name}. ${HYP_INFO[k].why}`;
  if(q.style==='prop')
    return 'The mood posits and removes whole propositions. Ask which component the minor posits or denies (to deny is to assert the contradictory), then posit or remove the other accordingly.';
  if(ans && !ans.subjOk)
    return `The conclusion concerns ${termLabel(q.subj)} — the syllogism posits or removes a predicate of that one subject.`;
  if(q.expected && ans && ans.neg!==q.expected.neg)
    return 'Mind the quality: ask whether the premises place the subject inside the other predicate or shut it out.';
  return 'Locate the subject: shade what the major forbids, place the subject where the minor puts it, and read off what region remains.';
}

/* ================================================================
   DIDACTIC READOUTS — interpret a freely-marked diagram
   ================================================================ */
function readout2(marks, la, lb){
  const props = [], warns = [];
  if(marks.A==='shade')  props.push(`All ${la} are ${lb}`);
  if(marks.B==='shade')  props.push(`All ${lb} are ${la}`);
  if(marks.AB==='shade') props.push(`No ${la} are ${lb}`);
  if(marks.AB==='x')     props.push(`Some ${la} are ${lb}`);
  if(marks.A==='x')      props.push(`Some ${la} are not ${lb}`);
  if(marks.B==='x')      props.push(`Some ${lb} are not ${la}`);
  if(marks.A==='shade' && marks.AB==='shade')
    warns.push(`the whole of “${la}” is declared empty — traditional logic presumes every term non-empty`);
  if(marks.B==='shade' && marks.AB==='shade')
    warns.push(`the whole of “${lb}” is declared empty — traditional logic presumes every term non-empty`);
  return {props, warns};
}
function cellDesc3(r, labs){
  const ins = ['S','M','P'].filter(k=>inRg(r,k)).map(k=>labs[k]);
  const outs = ['S','M','P'].filter(k=>!inRg(r,k)).map(k=>labs[k]);
  return `things that are ${ins.join(' and ')}${outs.length ? ' but not ' + outs.join(' or ') : ''}`;
}
function readout3(marks, labs){
  const shaded = new Set(REGIONS3.filter(r=>marks[r]==='shade'));
  const used = new Set();
  const props = [], warns = [];
  const pairs = [['S','M'],['S','P'],['M','P']];
  for(const pr of pairs){
    const X = pr[0], Y = pr[1];
    for(const d of [[X,Y],[Y,X]]){
      const diff = zone3(d[0], d[1], 'diff');
      if(diff.every(r=>shaded.has(r))){
        props.push(`All ${labs[d[0]]} are ${labs[d[1]]}`);
        diff.forEach(c=>used.add(c));
      }
    }
    const inter = zone3(X, Y, 'int');
    if(inter.every(r=>shaded.has(r))){
      props.push(`No ${labs[X]} are ${labs[Y]}`);
      inter.forEach(c=>used.add(c));
    }
  }
  const frags = [];
  for(const r of REGIONS3)
    if(shaded.has(r) && !used.has(r))
      frags.push(`the region of ${cellDesc3(r, labs)} is declared empty — narrower than any single categorical proposition among these terms`);
  const xset = new Set();
  for(const r of REGIONS3) if(marks[r]==='x'){
    for(const pr of pairs){
      const X = pr[0], Y = pr[1], inX = inRg(r,X), inY = inRg(r,Y);
      if(inX && inY) xset.add(`Some ${labs[X]} are ${labs[Y]}`);
      else if(inX) xset.add(`Some ${labs[X]} are not ${labs[Y]}`);
      else if(inY) xset.add(`Some ${labs[Y]} are not ${labs[X]}`);
    }
  }
  for(const T of ['S','M','P'])
    if(REGIONS3.filter(r=>inRg(r,T)).every(r=>shaded.has(r)))
      warns.push(`the whole of “${labs[T]}” is declared empty — traditional logic presumes every term non-empty`);
  return {props, frags, xreads:Array.from(xset), warns};
}
/* What the marks force about S and P (syllogism mode).
   A universal S–P proposition counts as a CONCLUSION only when the
   premise-shading alone (the fully-shaded lenses of the S–M and M–P
   pairs) secures it; if only a direct marking of the S–P zone secures
   it, it is reported as a further assertion, not an inference. */
function spConsequences(marks, labs){
  const shadedAll = new Set(REGIONS3.filter(r=>marks[r]==='shade'));
  const xs = REGIONS3.filter(r=>marks[r]==='x').map(r=>({regions:[r], kind:'def'}));
  const prem = new Set();
  for(const d of [['S','M'],['M','S'],['M','P'],['P','M']]){
    const diff = zone3(d[0], d[1], 'diff');
    if(diff.every(r=>shadedAll.has(r))) diff.forEach(c=>prem.add(c));
  }
  for(const pr of [['S','M'],['M','P']]){
    const inter = zone3(pr[0], pr[1], 'int');
    if(inter.every(r=>shadedAll.has(r))) inter.forEach(c=>prem.add(c));
  }
  const fullDiag = {shaded:shadedAll, xs, importTerm:null};
  const premDiag = {shaded:prem, xs, importTerm:null};
  const derived = [], direct = [], withImport = [];
  let eDone = false, iDone = false;
  for(const dir of [['S','P'],['P','S']]){
    const s = dir[0], p = dir[1];
    const T = {A:`All ${labs[s]} are ${labs[p]}`, E:`No ${labs[s]} are ${labs[p]}`,
               I:`Some ${labs[s]} are ${labs[p]}`, O:`Some ${labs[s]} are not ${labs[p]}`};
    const satF = {}, satP = {};
    for(const c of TYPES){
      satF[c] = conclSatisfiedFor(fullDiag, c, s, p);
      satP[c] = conclSatisfiedFor(premDiag, c, s, p);
    }
    if(satP.A) derived.push(T.A);
    else if(satF.A) direct.push(T.A);
    if(!eDone){
      if(satP.E){ derived.push(T.E); eDone = true; }
      else if(satF.E){ direct.push(T.E); eDone = true; }
    }
    if(satF.I && !satF.A && !iDone){ derived.push(T.I); iDone = true; }
    if(satF.O && !satF.E) derived.push(T.O);
    for(const c of ['I','O']){
      if(satF[c] || (c==='I' && (satF.A || iDone)) || (c==='O' && satF.E)) continue;
      const clone = {shaded:prem, xs:xs.slice(), importTerm:null};
      if(tryImport(clone, c, s, p)){
        withImport.push(`${T[c]} — granting the existential import of “${labs[clone.importTerm]}”`);
        if(c==='I') iDone = true;
      }
    }
  }
  return {plain:derived, direct, withImport};
}

/* ================================================================
   SETS XII–XIII — THE MODALS (scholastic, not modern)
   After John of St Thomas: the four modes; equipollences (the
   mnemonic table of Amabimus, Edentuli, Iliace, Purpurea); the
   modal square; the composite and divided senses; and the modal
   syllogism under the received rule — peiorem sequitur semper
   conclusio partem, the conclusion follows the weaker part.
   Semantics by sense-distinction, not possible worlds.
   ================================================================ */
const M_CORNERS = ['Np','Nn','Pp','Pn'];   // necessary / impossible / possible / possible-not
function cornerOf(expr){
  let m = expr.mode, dn = !!expr.dictumNeg;
  if(m==='imp'){ m='nec'; dn=!dn; }
  if(expr.modeNeg){
    if(m==='nec'){ m='poss'; dn=!dn; } else { m='nec'; dn=!dn; }
  }
  return (m==='nec'?'N':'P') + (dn?'n':'p');
}
function exprText(expr, sn, pd){
  const w = {nec:'necessary', poss:'possible', imp:'impossible'}[expr.mode];
  return `It is ${expr.modeNeg?'not ':''}${w} that ${sn} ${expr.dictumNeg?'is not':'is'} ${pd}`;
}
function cornerClean(c){
  if(c==='Np') return {mode:'nec'};
  if(c==='Nn') return {mode:'imp'};
  if(c==='Pp') return {mode:'poss'};
  return {mode:'poss', dictumNeg:true};
}
const CORNER_NAME = {Np:'necessary', Nn:'impossible', Pp:'possible', Pn:'possible not'};
function cornerPhrase(c, sn, pd){ return exprText(cornerClean(c), sn, pd); }
function modalSubj(mode, roles){
  return mode==='letters' ? roles.M.l.toLowerCase() : rand(NAMES);
}
function modalPred(mode, roles){
  return roles.S.kind==='L' ? roles.S.l : art(roles.S.s)+' '+roles.S.s;
}
function genModalEquipQ(d, mode){
  const roles = makeTerms(mode, null);
  const sn = modalSubj(mode, roles), pd = modalPred(mode, roles);
  const target = rand(M_CORNERS);
  const dressings = [];
  for(const m of ['nec','poss','imp']) for(const mn of [false,true]) for(const dn of [false,true]){
    const e = {mode:m, modeNeg:mn, dictumNeg:dn};
    const negs = (mn?1:0)+(dn?1:0);
    if(cornerOf(e)!==target || negs===0) continue;
    if(d<3 && negs>1) continue;
    dressings.push(e);
  }
  const e1 = dressings.length ? rand(dressings) : cornerClean(target);
  const equip = Math.random()<0.5;
  const c2 = equip ? target : rand(M_CORNERS.filter(c=>c!==target));
  return {kind:'modal', sub:'equip', sn, pd, c1:target, c2, valid:equip,
    t1: exprText(e1, sn, pd), t2: cornerPhrase(c2, sn, pd)};
}
function modalEquipMistake(q){
  if(q.valid)
    return 'Fold the negations step by step: “impossible” is “necessary not”; a negation <em>before</em> the mode turns “necessary” into “possible not” and “possible” into “necessary not”; a negation <em>after</em> the mode changes only the dictum. Both expressions come to the same corner.';
  const pair = [q.c1, q.c2].sort().join('');
  if(pair==='NnPn') return '“Not necessary” is not “impossible”: denying the stronger mode grants only the weaker denial, possible-not. This is the commonest modal slip.';
  if(pair==='NpPp') return '“Possible” does not rise to “necessary”: a posse ad necesse non valet consequentia.';
  if(pair==='NnPp' || pair==='NpPn') return 'These are contradictories, not equipollents: they always take opposite truth-values.';
  if(pair==='NpNn') return 'These are contraries — both false of whatever is contingent — not equipollents.';
  if(pair==='PpPn') return 'These are subcontraries — both true of whatever is contingent — not equipollents.';
  return 'Reduce each expression to its corner of the modal square and compare.';
}
const MSQ_PAIR = {
  contradictory: [['Np','Pn'],['Pn','Np'],['Nn','Pp'],['Pp','Nn']],
  contrary:      [['Np','Nn'],['Nn','Np']],
  subcontrary:   [['Pp','Pn'],['Pn','Pp']],
  subalternDown: [['Np','Pp'],['Nn','Pn']],
  subalternUp:   [['Pp','Np'],['Pn','Nn']]
};
const MREL_TEXT = {
  contradictory:'contradictories on the modal square — always of opposite truth-value',
  contrary:'contraries — never both true, though both fail of the contingent',
  subcontrary:'subcontraries — never both false, though both hold of the contingent',
  subalternDown:'in subalternation — ab necesse ad posse valet consequentia: truth descends from the stronger mode',
  subalternUp:'in subalternation — falsity ascends from the weaker mode to the stronger; truth does not ascend'
};
function genModalSquareQ(d, mode){
  const roles = makeTerms(mode, null);
  const sn = modalSubj(mode, roles), pd = modalPred(mode, roles);
  const rels = ['contradictory','contrary'].concat(d>=2 ? ['subcontrary','subalternDown','subalternUp'] : []);
  const rel = rand(rels), pr = rand(MSQ_PAIR[rel]), given = rand(['T','F']);
  return {kind:'modal', sub:'msq', rel, given, sn, pd, ca:pr[0], cb:pr[1],
    t1: cornerPhrase(pr[0], sn, pd), t2: cornerPhrase(pr[1], sn, pd), answer: sqAnswer(rel, given)};
}
function modalSquareMistake(q){
  if(q.rel==='contrary' && q.given==='F')
    return '“Necessary” and “impossible” may both fail — precisely of whatever is contingent either way. The true contradictory of “necessary” is “possible not”, not “impossible”.';
  if(q.rel==='subcontrary' && q.given==='T')
    return '“Possible” and “possible not” may both be true — of everything contingent. Only their joint falsehood is excluded.';
  if(q.rel==='subalternDown' && q.given==='F')
    return 'Falsity does not descend: that a thing is not necessary leaves it possibly so and possibly not.';
  if(q.rel==='subalternUp' && q.given==='T')
    return 'Truth does not ascend: a posse ad necesse non valet consequentia. Only falsity climbs from the weaker mode to the stronger.';
  return 'Contradictories on the modal square always disagree; for the rest, ask what the square forbids — what it does not forbid remains undetermined.';
}
/* the composite and the divided sense — sensus compositus / divisus */
const SENSE_POOL = [
  {sent:'The man who is seated can walk', comp:false, div:true,
   why:'Compounded, it claims sitting-and-walking at once — impossible. Divided, it claims of the seated man the power to walk — true, for sitting does not destroy the power.'},
  {sent:'The white thing can be black', comp:false, div:true,
   why:'Nothing can be white-and-black at once in the same respect; but the white thing can come to be black.'},
  {sent:'The runner can rest', comp:false, div:true,
   why:'Not while running — the compound is impossible; but the power to rest belongs to him.'},
  {sent:'The sleeping man can be awake', comp:false, div:true,
   why:'Sleeping-and-waking at once is nothing; but waking is in his power.'},
  {sent:'The young man can be old', comp:false, div:true,
   why:'Young-and-old together is excluded; but age will come to him.'},
  {sent:'The sighted man can be blind', comp:false, div:true,
   why:'Not sighted-and-blind at once; but sight can be lost — privation is possible for the possessor.'},
  {sent:'A man is necessarily an animal', comp:true, div:true,
   why:'The predicate belongs by essence: the dictum is necessary, and of each man the predicate holds of necessity.'},
  {sent:'A triangle necessarily has three sides', comp:true, div:true,
   why:'Essential in both senses: the dictum cannot be false, and of each triangle the property holds necessarily.'},
  {sent:'The musician can build', comp:true, div:true,
   why:'The two are compossible — nothing hinders the musician building while a musician — and the power belongs to him.'},
  {sent:'The one who is seated is necessarily seated', comp:true, div:false,
   why:'Compounded — “necessarily: the seated is seated” — the dictum cannot be false, so it is true. Divided, it would make sitting essential to the man — false, for he sits contingently. The famous sophism trades on this.'},
  {sent:'The white thing is necessarily white', comp:true, div:false,
   why:'True compounded — whatever is white, is white; false divided — whiteness does not belong to the thing of necessity.'},
  {sent:'A man can be a stone', comp:false, div:false,
   why:'In neither sense: the essence of man excludes it, so no power reaches it and the compound is impossible.'},
  {sent:'A horse can be a man', comp:false, div:false,
   why:'In neither sense: natures do not migrate; the compound is impossible and the subject has no such power.'},
  {sent:'A bachelor can be married', comp:false, div:true,
   why:'Composite — “possibly: a bachelor is married” — is contradictory, for no one is married while unmarried. Divided is true: the man who is a bachelor has it in him to marry.'},
  {sent:'The silent man can speak', comp:false, div:true,
   why:'Not while silent — speaking-in-silence is nothing. But the power of speech remains his.'},
  {sent:'The winner of the race could have lost', comp:false, div:true,
   why:'Composite — “possibly: the winner loses” — contradicts itself. Divided is true: the man who in fact won might have lost.'},
  {sent:'The blind man can see', comp:false, div:false,
   why:'False in both senses: seeing-while-blind is contradictory, and blindness is a privation — the power itself is gone, not merely unexercised.'},
  {sent:'Fire can be cold', comp:false, div:false,
   why:'On the classical account heat belongs to fire’s nature: the compound is impossible, and no power in fire reaches coldness.'},
  {sent:'The literate man is necessarily literate', comp:true, div:false,
   why:'Composite — “necessarily: the literate is literate” — cannot be false. Divided it fails: literacy is acquired, and belongs to no one by necessity.'},
  {sent:'Two and three are necessarily five', comp:true, div:false,
   why:'True only composed: “necessarily: two and three are five” — taken together as one sum the dictum cannot fail. Divided, the parts are split: two is five and three is five — false. Aristotle’s own case of composition and division (Soph. El. 166a).'}
];
function genModalSenseQ(){
  const item = recentPick(SENSE_POOL, x=>x.sent);
  const answer = item.comp && item.div ? 'both' : item.comp ? 'comp' : item.div ? 'div' : 'neither';
  return {kind:'modal', sub:'sense', item, answer};
}
const SENSE_LABELS = ['In the composite sense only','In the divided sense only','In both senses','In neither sense'];
const SENSE_VALUES = ['comp','div','both','neither'];
function modalSenseNote(){
  return 'Two readings, two verdicts — the difference is one of <em>scope</em>. <strong>Composite</strong> (in sensu composito): the mode governs the whole proposition <em>composed</em> of its parts, taken together as one package — ask, <em>is the whole package (subject with predicate, both at once) possible or necessary?</em> <strong>Divided</strong> (in sensu diviso): the mode’s scope is <em>divided off</em> and narrowed to the subject alone — ask, <em>does this subject, as it actually is, have the power (or the necessity) claimed</em>, even if it cannot exercise it just now? So “the seated man can walk” is false composed (seated-and-walking together is impossible) but true divided (the man himself keeps the power to walk).';
}
/* small-print helps shown above each modal question */
const MODAL_GLOSS = {
  sense: '<em>composite sense</em> — the mode governs the whole proposition <em>composed</em> of its parts, taken together at once: is that whole package possible/necessary? &ensp;·&ensp; <em>divided sense</em> — the mode’s scope is narrowed to the subject alone: has the thing itself the power (or necessity), even if not while it is as it now is?',
  equip: '<em>equipollent</em> = equal in force: same meaning and truth-value, same corner of the square (though the words differ) &ensp;·&ensp; <em>laws</em>: “impossible” = “necessary not” · a NOT <em>before</em> the mode flips the corner (“not possible” = “impossible”; “not necessary” = only “possible not”) · a NOT <em>after</em> the mode negates the content alone',
  msq: '<em>the modal square</em>: necessary / impossible are contraries — never both true &ensp;·&ensp; possible / possible-not are subcontraries — never both false &ensp;·&ensp; necessary↔possible-not and impossible↔possible are contradictories &ensp;·&ensp; truth descends: necessary ⇒ possible'
};
/* the modal syllogism — conclusion follows the weaker part */
const MOD_RANK = {nec:3, assert:2, cont:1};
const MOD_PRE = {nec:'Necessarily, ', assert:'', cont:'Contingently, '};
const MOD_NAME = {nec:'necessary', assert:'assertoric', cont:'contingent'};
function genModalSyllQ(d, mode){
  const base = genValidityQ(d, mode);
  const pool = d>=3 ? ['nec','assert','cont'] : ['nec','assert'];
  const mods = [rand(pool), rand(pool)];
  const weaker = MOD_RANK[mods[0]] <= MOD_RANK[mods[1]] ? mods[0] : mods[1];
  const answer = base.valid ? weaker : 'none';
  const mlines = base.lines.map((l,i)=> MOD_PRE[mods[i]] ? MOD_PRE[mods[i]]+decap(l) : l);
  return Object.assign(base, {kind:'modsyll', mods, weaker, answer, mlines});
}
const MODSYLL_LABELS = ['Necessarily','Assertorically','Contingently','Nothing follows'];
const MODSYLL_VALUES = ['nec','assert','cont','none'];
function modalSyllMistake(q, choice){
  if(q.answer==='none') return mistakeNoteValidity(q, 'english');
  if(choice==='none') return mistakeNoteValidity(q, 'english');
  if(MOD_RANK[choice] > MOD_RANK[q.answer])
    return 'Peiorem sequitur semper conclusio partem: as the conclusion follows the negative and the particular premise, so it follows the weaker mode. A necessary conclusion needs necessity in both premises.';
  return 'You have weakened further than the premises require: the conclusion may take the mode of the weaker premise itself — here, the '+MOD_NAME[q.answer]+'.';
}
/* small SVG of the modal square for feedback */
function modalSquareSvg(hl){
  const P = {Np:[115,50], Nn:[325,50], Pp:[115,190], Pn:[325,190]};
  const box = (k)=>{
    const on = hl.indexOf(k)>=0;
    return `<rect x="${P[k][0]-62}" y="${P[k][1]-20}" width="124" height="40" rx="9"
      fill="${on?'var(--gold)':'var(--card)'}" stroke="var(--line)"/>
      <text x="${P[k][0]}" y="${P[k][1]+6}" text-anchor="middle" font-size="15" font-style="italic"
      fill="${on?'#fff':'var(--ink)'}" font-family="inherit">${CORNER_NAME[k]}</text>`;
  };
  const line = (a,b)=>`<line x1="${P[a][0]}" y1="${P[a][1]}" x2="${P[b][0]}" y2="${P[b][1]}" stroke="var(--line)" stroke-width="1.4"/>`;
  const lbl = (x,y,t)=>`<text x="${x}" y="${y}" text-anchor="middle" font-size="12" font-style="italic" fill="var(--ink-soft)" font-family="inherit">${t}</text>`;
  return `<svg viewBox="0 0 440 240" class="venn" style="max-width:330px" xmlns="http://www.w3.org/2000/svg">
    ${line('Np','Nn')}${line('Pp','Pn')}${line('Np','Pp')}${line('Nn','Pn')}${line('Np','Pn')}${line('Nn','Pp')}
    ${lbl(220,42,'contraries')}${lbl(220,208,'subcontraries')}${lbl(220,114,'contradictories')}
    ${lbl(70,124,'subalternation')}${lbl(370,124,'subalternation')}
    ${box('Np')}${box('Nn')}${box('Pp')}${box('Pn')}</svg>`;
}

/* ================================================================
   ARGUMENTS IN THE WILD (expanded) — categorical, hypothetical,
   conjunctive, and modal syllogisms in ordinary dress.
   ================================================================ */
/* frames that keep complex premises apart with punctuation, since a
   conditional or conjunctive premise may itself contain “and” */
const WILD_FRAMES_EASY = [
  (p1,p2,c)=>`${p1} ${p2} Therefore, ${decap(c)}`,
  (p1,p2,c)=>`${p2} And ${decap(p1)} So ${decap(c)}`,
  (p1,p2,c)=>`${p1} Now ${decap(p2)} It follows that ${decap(c)}`
];
const WILD_FRAMES_HARD = [
  (p1,p2,c)=>`${stripDot(c)} — for ${decap(stripDot(p1))}; and ${decap(stripDot(p2))}.`,
  (p1,p2,c)=>`${c} After all, ${decap(stripDot(p1))}; and ${decap(stripDot(p2))}.`
];
function proseWrap(d, p1, p2, c){
  const frames = d>=3 ? WILD_FRAMES_EASY.concat(WILD_FRAMES_HARD) : WILD_FRAMES_EASY;
  return rand(frames)(p1+'.', p2+'.', c+'.');
}
function genWildHypQ(d){
  const q = genHypQ(d, 'english', rand(['cond','conj','disjS','disjI']));
  q.prose = proseWrap(d, q.lines[0], q.lines[1], q.concl);
  return q;
}
function genWildModalQ(d){
  const base = genModalSyllQ(d, 'english');
  let stated, valid;
  if(!base.valid){
    stated = rand(['nec','assert','cont']); valid = false;
  } else {
    const strongerOpts = ['nec','assert','cont'].filter(m=>MOD_RANK[m]>MOD_RANK[base.answer]);
    if(Math.random()<0.5 || !strongerOpts.length){ stated = base.answer; valid = true; }
    else { stated = rand(strongerOpts); valid = false; }   // peiorem violation
  }
  const cSent = stated==='assert' ? base.concl : MOD_PRE[stated] + decap(base.concl);
  return {kind:'wildmod', valid, stated, base,
    prose: proseWrap(d, base.mlines[0], base.mlines[1], cSent),
    standard: {lines: base.mlines, concl: cSent}};
}

/* ================================================================
   SETS I–II — DEFINITION AND DIVISION (John of St Thomas)
   The first operation of the intellect. Rules of definition:
   convertible with the defined; clearer than it; not circular;
   positive where a positive can be had; brief — proximate genus
   and specific difference. Rules of division: the members together
   equal the whole; they are mutually opposed; one basis, no leap.
   ================================================================ */
/* Some question material is a single term (“Number into the even and the odd”)
   and some is a run of sentences that already ends in a full stop. Add one only
   where one is wanted. */
const endPunct = t => /[.!?…”"']$/.test(String(t||'').trim());
const stop = t => endPunct(t) ? '' : '.';
function mc4Make(spec){
  const opts = spec.options.slice();
  for(let i=opts.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); const t=opts[i]; opts[i]=opts[j]; opts[j]=t; }
  return {kind:'mc4', prompt:spec.prompt||'', promptRaw:spec.promptRaw||'', ruleShow:spec.ruleShow||'',
          options:opts, correctIdx:opts.indexOf(spec.correct),
          why:spec.why, rules:spec.rules, mcInstr:spec.mcInstr};
}
const DEF_RULES = 'The rules of definition: it must fit exactly the thing defined — no more, no less — and be clearer than it; it must not contain the term being defined; it should say what a thing is rather than what it is not, wherever it can; and it should be brief — the nearest kind (genus) and the difference that marks the thing off, with no wasted words.';
const DIV_RULES = 'The rules of division: the members together must cover the whole, leaving nothing out; they must not overlap, so that nothing falls under two of them at once; every member must actually belong to the whole being divided; and the whole division must be made on a single basis.';
/* Rule-in-view: the rule is displayed with every question, so nothing is
   presupposed; the candidates are everyday definitions whose soundness or
   fault is visible to ordinary knowledge. */
/* Tiers: 1 = homely (retired at the highest levels), 2 = classical but plain,
   3 = subtle, drawn from Aristotle and St Thomas. */
const DEF_ITEMS = [
  {tier:1, name:'a triangle', sound:'A triangle is a three-sided figure',
   broad:'A triangle is a figure', narrow:'A triangle is a figure with three equal sides',
   circ:'A triangle is a triangular figure', neg:'A triangle is a figure that is not four-sided',
   met:'A triangle is geometry’s arrowhead', extra:'A triangle is a three-sided figure drawn with a ruler'},
  {tier:1, name:'a square', sound:'A square is a quadrilateral with equal sides and right angles',
   broad:'A square is a quadrilateral', narrow:'A square is a small quadrilateral with equal sides and right angles',
   circ:'A square is a square-shaped quadrilateral', neg:'A square is a quadrilateral that is not oblong',
   met:'A square is the bricklayer’s ideal', extra:'A square is a quadrilateral with equal sides, right angles, and four corners'},
  {tier:1, name:'a bachelor', sound:'A bachelor is an unmarried man',
   broad:'A bachelor is a man', narrow:'A bachelor is an unmarried man who dines alone',
   circ:'A bachelor is a man in the state of bachelorhood',
   met:'A bachelor is a ship that never found its harbour', extra:'A bachelor is an unmarried man without a wife'},
  {tier:1, name:'an island', sound:'An island is land surrounded by water',
   broad:'An island is a piece of land', narrow:'An island is land surrounded by warm seas',
   circ:'An island is an insular stretch of land', neg:'An island is land that is not joined to the mainland',
   met:'An island is a jewel set in the sea'},
  {tier:1, name:'a knife', sound:'A knife is a tool with a blade for cutting',
   broad:'A knife is a tool', narrow:'A knife is a tool with a blade for cutting bread',
   circ:'A knife is a tool used knife-fashion',
   met:'A knife is the kitchen’s tooth', extra:'A knife is a tool with a sharp blade made for cutting things that need cutting'},
  {tier:1, name:'a window', sound:'A window is an opening in a wall made to admit light',
   broad:'A window is an opening', narrow:'A window is an opening in a wall made to admit the morning sun',
   circ:'A window is an opening fitted with window-glass', neg:'A window is an opening that is not a door',
   met:'A window is the eye of a house'},
  {tier:1, name:'a clock', sound:'A clock is an instrument for measuring time',
   broad:'A clock is an instrument', narrow:'A clock is an instrument for measuring the hours of the night',
   circ:'A clock is an instrument that keeps clock-time', neg:'A clock is an instrument that is not a calendar',
   met:'A clock is the heartbeat of the household', extra:'A clock is an instrument for measuring time as it passes'},
  {tier:1, name:'a widow', sound:'A widow is a woman whose husband has died',
   broad:'A widow is a woman', narrow:'A widow is an aged woman whose husband has died',
   circ:'A widow is a woman in widowhood',
   met:'A widow is winter after summer'},
  {tier:1, name:'a key', sound:'A key is a shaped piece of metal made to open a lock',
   broad:'A key is a piece of metal', narrow:'A key is a shaped piece of iron made to open a door',
   circ:'A key is the keying-piece that unlocks a lock', neg:'A key is a piece of metal that is not a nail',
   met:'A key is the tongue that speaks to the lock', extra:'A key is a shaped piece of metal, carried in the pocket, made to open a lock'},
  {tier:1, name:'a ladder', sound:'A ladder is a set of rungs joined by rails, made for climbing',
   broad:'A ladder is a thing made for climbing', narrow:'A ladder is a set of wooden rungs joined by rails, made for climbing',
   circ:'A ladder is a laddered frame for climbing', neg:'A ladder is a way up that is not a stair',
   met:'A ladder is a road stood on end', extra:'A ladder is a set of rungs joined by rails, made and used for the purpose of climbing up'},
  {tier:2, name:'man', sound:'Man is a rational animal',
   broad:'Man is an animal', narrow:'Man is a rational animal that studies geometry',
   circ:'Man is a human being', neg:'Man is that which is not irrational',
   met:'Man is the measure of all things', extra:'Man is a rational animal able to laugh'},
  {tier:2, name:'a house', sound:'A house is a shelter built to protect living things and goods',
   broad:'A house is a building', narrow:'A house is a shelter built of stone',
   circ:'A house is a dwelling in which one is housed',
   met:'A house is a man’s shell', extra:'A house is a shelter with walls, a roof, and a door, keeping off wind, rain, sun, and cold'},
  {tier:2, name:'a number', sound:'A number is a multitude composed of units',
   broad:'A number is a quantity', narrow:'A number is a multitude of tens',
   circ:'A number is what is counted in counting',
   met:'A number is the shadow of quantity'},
  {tier:2, name:'ice', sound:'Ice is water solidified by cold',
   broad:'Ice is a solid', narrow:'Ice is water frozen in the mountains',
   circ:'Ice is icy water', neg:'Ice is water that is not liquid',
   met:'Ice is winter’s glass', extra:'Ice is water solidified by cold into hardness'},
  {tier:2, name:'an eclipse', sound:'An eclipse is a loss of light caused by another body coming between',
   broad:'An eclipse is a darkening', narrow:'An eclipse is the sun’s loss of light',
   circ:'An eclipse is an eclipsing of light',
   met:'An eclipse is the sky’s held breath'},
  {tier:2, name:'thunder', sound:'Thunder is a noise in the clouds caused by lightning',
   broad:'Thunder is a noise', narrow:'Thunder is a noise in the clouds at sea',
   circ:'Thunder is a thundering in the clouds', neg:'Thunder is a sound that is not musical',
   met:'Thunder is heaven’s drum'},
  {tier:2, name:'a harbour', sound:'A harbour is a sheltered stretch of water where ships may lie safe',
   broad:'A harbour is a stretch of water', narrow:'A harbour is a walled stretch of water where warships may lie safe',
   circ:'A harbour is a harbouring-place for ships', neg:'A harbour is water that is not the open sea',
   met:'A harbour is the arms of the land', extra:'A harbour is a sheltered stretch of water, ringed about, where ships may lie safe at anchor'},
  {tier:2, name:'a plough', sound:'A plough is a tool drawn through the soil to turn it before sowing',
   broad:'A plough is a farm tool', narrow:'A plough is an iron tool drawn by oxen through the soil to turn it before sowing',
   circ:'A plough is the tool with which one ploughs', neg:'A plough is a farm tool that is not a harrow',
   met:'A plough is the pen that writes on the field'},
  {tier:3, name:'a nest', sound:'A nest is a shelter a bird builds to hold its eggs and its young',
   broad:'A nest is a shelter a bird builds', narrow:'A nest is a shelter a bird builds of twigs to hold its eggs and its young',
   circ:'A nest is the nesting-place of a bird', neg:'A nest is a bird’s home that is not a burrow',
   met:'A nest is the cradle of the branches', extra:'A nest is a shelter a bird builds to hold its eggs and its young, made of twigs and set high up'},
  {tier:3, name:'a seed', sound:'A seed is the part of a plant from which a new plant grows',
   broad:'A seed is a part of a plant', narrow:'A seed is the part of a tree from which a new tree grows',
   circ:'A seed is the seeding part of a plant', neg:'A seed is a part of a plant that is not a leaf',
   met:'A seed is a sleeping forest'},
  {tier:3, name:'a well', sound:'A well is a shaft dug in the ground to reach water',
   broad:'A well is a hole dug in the ground', narrow:'A well is a stone shaft dug in a village to reach water',
   circ:'A well is a well-shaft sunk for water', neg:'A well is a source of water that is not a spring',
   met:'A well is the eye of the earth', extra:'A well is a shaft dug down into the ground so as to reach the water lying beneath it'},
  {tier:3, name:'a shadow', sound:'A shadow is the dark shape cast where a body blocks the light',
   broad:'A shadow is a dark shape', narrow:'A shadow is the dark shape a man casts in the sun',
   circ:'A shadow is the shadowing of a body', neg:'A shadow is a shape that is not lit',
   met:'A shadow is the ghost that walks beside you'},
  {tier:3, name:'a spring', sound:'A spring is water rising of itself out of the ground',
   broad:'A spring is a source of water', narrow:'A spring is cold water rising of itself out of a hillside',
   circ:'A spring is the springing-up of water from the ground', neg:'A spring is water that does not fall as rain',
   met:'A spring is the earth’s first word'},
  /* ---- tier 5: first seen at the Master level, with no rule or definition shown ---- */
  {tier:5, name:'a line', sound:'A line is length without breadth',
   broad:'A line is a magnitude', narrow:'A line is a straight length without breadth',
   circ:'A line is a linear extension', neg:'A line is that which is not a point',
   met:'A line is the track of a moving point', extra:'A line is length without any breadth or thickness of any kind'},
  {tier:5, name:'a point', sound:'A point is that which has no part',
   broad:'A point is a position', narrow:'A point is the smallest dot a pen can make',
   circ:'A point is a pointlike position', neg:'A point is that which is not a line',
   met:'A point is the seed of every figure'},
  {tier:5, name:'a father', sound:'A father is a male parent',
   broad:'A father is a parent', narrow:'A father is the male parent of a son',
   circ:'A father is one who has fathered a child', neg:'A father is a parent who is not the mother',
   met:'A father is the head of the household', extra:'A father is a male parent who has begotten offspring of his own'},
  {tier:5, name:'a river', sound:'A river is a large natural stream of flowing water',
   broad:'A river is a body of water', narrow:'A river is a large stream that flows into the sea',
   circ:'A river is a riverine flow of water', neg:'A river is flowing water that is not a lake',
   met:'A river is the vein of the land'},
  {tier:5, name:'a shepherd', sound:'A shepherd is one who tends sheep',
   broad:'A shepherd is a keeper of animals', narrow:'A shepherd is one who tends white sheep',
   circ:'A shepherd is one who shepherds a flock', neg:'A shepherd is a herdsman who does not keep cattle',
   met:'A shepherd is the guardian of the flock'},
  {tier:5, name:'a mirror', sound:'A mirror is a smooth surface that reflects images',
   broad:'A mirror is a surface', narrow:'A mirror is a glass that reflects the face',
   circ:'A mirror is a reflecting looking-glass', neg:'A mirror is a surface that does not let light through',
   met:'A mirror is the honest servant of the face'},
  {tier:5, name:'a bridge', sound:'A bridge is a structure built to carry a path across an obstacle',
   broad:'A bridge is a structure', narrow:'A bridge is a stone structure built across a river',
   circ:'A bridge is a structure that bridges a gap', neg:'A bridge is a crossing that is not a tunnel',
   met:'A bridge is the handclasp of two shores'},
  {tier:5, name:'a lamp', sound:'A lamp is a vessel made to give light',
   broad:'A lamp is a device', narrow:'A lamp is a vessel that gives light by burning oil',
   circ:'A lamp is a lamp for lighting', neg:'A lamp is a light-giver that is not the sun',
   met:'A lamp is a little sun for the room', extra:'A lamp is a vessel made and fashioned for the giving of light'}
];
/* tier 5 items are exclusive to Level V — first seen at the mastery level, with no rule shown */
const defTiers = d => d<=1 ? [1] : d===2 ? [1,2] : d===3 ? [1,2,3] : d===4 ? [2,3] : [2,3,5];
/* recent-memory: no definition or item returns until the pool demands it */
const DEF_RECENT = [];
function recentPick(pool, keyFn){
  const fresh = pool.filter(x=>DEF_RECENT.indexOf(keyFn(x))<0);
  let candidates = fresh;
  if(!candidates.length){
    // pool exhausted by memory: at the very least never repeat the last pick
    const last = DEF_RECENT[DEF_RECENT.length-1];
    candidates = pool.filter(x=>keyFn(x)!==last);
    if(!candidates.length) candidates = pool;
  }
  const it = rand(candidates);
  DEF_RECENT.push(keyFn(it));
  while(DEF_RECENT.length>10) DEF_RECENT.shift();
  return it;
}
const DEF_RULE_META = {
  broad:{rule:'A definition must fit exactly what it defines: it must not be TOO BROAD, covering more than the thing defined.',
    w:'gives little more than the general kind, and so covers far more than the thing defined.'},
  narrow:{rule:'A definition must fit exactly what it defines: it must not be TOO NARROW, leaving out part of what it should cover.',
    w:'adds a restriction that need not hold, and so leaves out part of what it should cover.'},
  circ:{rule:'The term being defined must not appear inside its own definition: nothing is made clearer by itself.',
    w:'puts the defined term back into the definition; a circle teaches nothing.'},
  neg:{rule:'A definition should say what a thing IS, not what it is not — wherever a positive account is available.',
    w:'says only what the thing is not, though a positive account is available.'},
  met:{rule:'A definition must be clearer than what it defines: a metaphor decorates, but does not define.',
    w:'is a figure of speech — it pleases, but explains nothing.'},
  extra:{rule:'A definition should be brief: the nearest kind (genus) and the difference, with no wasted words.',
    w:'carries words beyond the kind and the difference; the extra spoils it.'}
};
function genDefRuleQ(d){
  const keys = d<2 ? ['broad','narrow','circ'] : d<3 ? ['broad','narrow','circ','met','neg']
             : ['broad','narrow','circ','met','neg','extra'];
  const tiers = defTiers(d);
  const key = rand(keys), meta = DEF_RULE_META[key];
  const rShow = d>=5 ? '' : meta.rule;   /* Master level: judge without the rule in view */
  const pool = DEF_ITEMS.filter(it=>tiers.indexOf(it.tier)>=0);
  const withFlaw = pool.filter(it=>it[key]);
  if(d<2 || Math.random()<0.6){
    const culprit = recentPick(withFlaw, it=>it.name);
    const others = sample(pool.filter(it=>it!==culprit), 3);
    return mc4Make({ruleShow: rShow,
      options: [culprit[key]].concat(others.map(o=>o.sound)),
      correct: culprit[key],
      why: `“${culprit[key]}” ${meta.w} The other three are sound: each gives the kind and the difference, and fits exactly what it defines.`,
      rules: DEF_RULES, mcInstr: d>=5 ? 'One of these four breaks a rule of definition. Which one?' : 'One of these four breaks the rule shown. Which one?'});
  }
  const keeper = recentPick(pool, it=>it.name);
  const breakers = sample(withFlaw.filter(it=>it!==keeper), 3);
  return mc4Make({ruleShow: rShow,
    options: [keeper.sound].concat(breakers.map(b=>b[key])),
    correct: keeper.sound,
    why: `“${keeper.sound}” holds — it fits exactly, and is clear, positive, and brief. Each of the other three ${meta.w}`,
    rules: DEF_RULES, mcInstr: d>=5 ? 'Three of these break a rule of definition; one keeps it. Which one keeps it?' : 'Three of these break the rule shown; one keeps it. Which one keeps it?'});
}
const DEF_KIND_DOCTRINE = {
  nom:'A NOMINAL definition gives what the name means. It must come first, says John of St Thomas: we cannot ask what a thing is until we know what its name refers to.',
  ess:'An ESSENTIAL definition says what the thing is, by giving its nearest kind (genus) and the difference that marks it off from everything else of that kind.',
  desc:'A DESCRIPTIVE definition identifies the thing by a property, or by a telltale feature — marks that point it out without saying what it is.',
  caus:'A CAUSAL definition identifies the thing through one of its causes: what made it, what it is made of, its form, or what it is for.'
};
const DEF_KIND_NAME = {nom:'nominal', ess:'essential', desc:'descriptive', caus:'causal'};
const DEF_KIND_STOCK = {
  nom: [
    {tier:1, t:'‘Widow’ names a woman whose husband has died', w:'it explains what the word means, not what the thing is.'},
    {tier:1, t:'‘Geometry’ means the measuring of the earth', w:'the word’s signification, nothing more.'},
    {tier:1, t:'‘Island’ is the word for land standing in water', w:'what the name refers to, before any account of the thing itself.'},
    {tier:2, t:'‘Philosopher’ means a lover of wisdom', w:'the name explained — which must come first, since we cannot ask what a thing is until we know what its name refers to.'},
    {tier:2, t:'‘Manuscript’ means a thing written by hand', w:'the word’s own story, not the nature of any writing.'},
    {tier:2, t:'‘Hippopotamus’ means river-horse', w:'the word explained — hippos (horse) and potamos (river).'},
    {tier:3, t:'‘Eclipse’ means a forsaking — the light’s abandonment of its luminary', w:'the word’s origin, before any account of the cause.'},
    {tier:5, t:'‘Geography’ means a description of the earth', w:'the word’s signification — gē (earth) and graphē (description).'},
    {tier:5, t:'‘Monarch’ means one who rules alone', w:'the name explained — monos (alone) and archē (rule).'}
  ],
  ess: [
    {tier:1, t:'A triangle is a three-sided figure', w:'the nearest kind plus the difference: what the thing actually is.'},
    {tier:1, t:'A square is a quadrilateral with equal sides and right angles', w:'the nearest kind, with the differences that fit it exactly.'},
    {tier:1, t:'A bachelor is an unmarried man', w:'the whole of what the thing is, briefly said.'},
    {tier:1, t:'A lamb is a young sheep', w:'the nearest kind (a sheep) with a single difference (young) — as brief as a definition can be.'},
    {tier:2, t:'A number is a multitude composed of units', w:'Euclid’s account: the nearest kind (a multitude) with the difference (composed of units).'},
    {tier:2, t:'Ice is water solidified by cold', w:'it says what the thing is, naming the very stuff it is made of.'},
    {tier:3, t:'A nest is a shelter a bird builds to hold its eggs and its young', w:'the nearest kind (a shelter a bird builds) with the difference that marks it off.'},
    {tier:3, t:'A well is a shaft dug in the ground to reach water', w:'the nearest kind (a shaft dug in the ground) narrowed by what it is dug for.'},
    {tier:5, t:'A father is a male parent', w:'proximate genus (parent) narrowed by the difference (male).'},
    {tier:5, t:'A line is length without breadth', w:'genus (length) and difference (without breadth): the nature itself.'}
  ],
  desc: [
    {tier:1, t:'The cat is the animal that purrs', w:'a telltale feature points the thing out.'},
    {tier:1, t:'The bee is the insect that makes honey', w:'a characteristic work points the thing out without saying what it is.'},
    {tier:1, t:'The magnet is the stone that draws iron', w:'an effect peculiar to it points the thing out without saying what it is.'},
    {tier:1, t:'Gold is the metal that never rusts', w:'a characteristic mark, not the nature itself.'},
    {tier:2, t:'A triangle is the figure whose angles sum to two right angles', w:'a property — it follows from the thing’s nature and always goes with it, but it is not that nature.'},
    {tier:2, t:'Man is the animal that laughs', w:'the classic property: the power to laugh picks out man alone, without saying what he is.'},
    {tier:3, t:'Fire is the burning that gives off heat and light', w:'by its characteristic effects — the heat and light it gives off — which point the thing out without saying what it is.'},
    {tier:3, t:'Wine is the drink that gladdens the heart', w:'a characteristic effect, dear to the Psalmist — but not what wine is.'},
    {tier:5, t:'The camel is the beast that crosses the desert', w:'a telltale feature points the thing out, without saying what it is.'},
    {tier:5, t:'The nightingale is the bird that sings by night', w:'a characteristic mark picks the thing out without saying what it is.'}
  ],
  caus: [
    {tier:1, t:'A clock is an instrument made to measure time', w:'through the final cause — the end for which it is made.'},
    {tier:1, t:'A scar is the mark left by a healed wound', w:'through the efficient cause that produced it.'},
    {tier:1, t:'A footprint is the mark left by a foot pressed into soft ground', w:'through what brings it about — the foot that pressed it.'},
    {tier:1, t:'A house is a building raised to shelter its dwellers', w:'through the end for which it is built.'},
    {tier:2, t:'Thunder is the noise in the clouds made by a stroke of lightning', w:'through the efficient cause — the lightning-discharge whose report the thunder is.'},
    {tier:2, t:'A saw is a toothed blade made for the cutting of wood', w:'the end enters the definition of every tool (Physics II).'},
    {tier:2, t:'Ash is what remains when fire has consumed its fuel', w:'through the efficient cause and its matter.'},
    {tier:3, t:'Rust is what iron becomes when it is long left in damp air', w:'through what brings it about — the damp air working on the iron.'},
    {tier:5, t:'A loaf is bread baked from kneaded dough', w:'through the matter and the making — the efficient cause.'},
    {tier:5, t:'A statue is bronze shaped by the sculptor into a likeness', w:'through its matter (bronze) and its maker (the efficient cause).'}
  ]
};
function genDefKindQ(d){
  const kinds = ['nom','ess','desc','caus'];
  const tiers = defTiers(d);
  const target = rand(kinds);
  const chosen = {};
  kinds.forEach(k=>{
    const pool = DEF_KIND_STOCK[k].filter(x=>tiers.indexOf(x.tier)>=0);
    chosen[k] = (k===target) ? recentPick(pool, x=>x.t) : rand(pool);
  });
  const others = kinds.filter(k=>k!==target)
    .map(k=>`“${chosen[k].t}” is ${DEF_KIND_NAME[k]}`).join('; ');
  return mc4Make({ruleShow: d>=5 ? '' : DEF_KIND_DOCTRINE[target],
    options: kinds.map(k=>chosen[k].t),
    correct: chosen[target].t,
    why: `“${chosen[target].t}” — ${chosen[target].w} Of the rest: ${others}.`,
    rules: 'The four kinds: nominal (what the name means), essential (nearest kind and difference), descriptive (a property or telltale feature), causal (through one of its causes).',
    mcInstr: `Which of these is ${art(DEF_KIND_NAME[target])} ${DEF_KIND_NAME[target].toUpperCase()} definition?`});
}
/* ---- definition: questions on the rules and principles themselves ----
   Not an example to judge, but the doctrine directly: what a definition is,
   and why each rule holds. The rule is NOT shown (it would give the answer). */
const DEF_PRINCIPLES = [
  {tier:1, q:'By what is a thing properly (essentially) defined?',
   correct:'By its nearest kind (genus) and the difference that marks it off',
   ds:['By listing several of its familiar examples','By naming what it is most often confused with','By a vivid metaphor that brings it to mind'],
   why:'An essential definition gives the nearest kind and the difference that marks the thing off from everything else of that kind — no more and no less.'},
  {tier:1, q:'For a definition to “fit exactly” (be convertible with) what it defines means that…',
   correct:'It is true of exactly the things the term is true of — no more, no fewer',
   ds:['It can be recast as a valid categorical syllogism','It reads sensibly both forwards and backwards','It shares at least one word with the defined term'],
   why:'The definition and the term must cover exactly the same things — neither too broad nor too narrow.'},
  {tier:1, q:'Why may the defined term not appear within its own definition?',
   correct:'Because nothing is made clearer by itself',
   ds:['Because a definition must be a single word','Because only a division may repeat a term','Because it would make the definition too brief'],
   why:'The circular definition teaches nothing: a definition must be clearer than the defined, and a thing is not clarified by itself.'},
  {tier:2, q:'The rule that a definition be positive forbids…',
   correct:'Defining a thing only by what it is not',
   ds:['Naming the proximate genus of the thing','Stating the specific difference of the thing','Giving the end or purpose the thing serves'],
   why:'Say what the thing IS. A purely negative account fails to explain the thing whenever a positive one is available.'},
  {tier:2, q:'The rule of brevity in defining requires…',
   correct:'Just the nearest kind (genus) and the difference',
   ds:['Using the fewest possible words and letters','At least three distinguishing marks in all','An example to accompany each of its parts'],
   why:'Give the nearest kind and the difference, and nothing extra; wasted words spoil the definition.'},
  {tier:2, q:'Which kind of definition must come first, since we cannot ask what a thing is until we know what its name means?',
   correct:'The nominal definition — what the name means',
   ds:['The essential definition — nearest kind and difference','The descriptive definition — a telltale feature','The causal definition — through one of its causes'],
   why:'John of St Thomas: the nominal definition (the meaning of the name) comes first, since the question “what is it?” already assumes we know what the name refers to.'},
  {tier:2, q:'A metaphor such as calling a window “the eye of the house” fails as a definition because…',
   correct:'A definition must be clearer than the defined',
   ds:['It is far too short to be a real definition','It names the very same genus twice over','It is stated wholly in the negative voice'],
   why:'Figures of speech please but explain nothing; a definition must be clearer than the term it defines.'}
];
function genDefPrincipleQ(d){
  const pool = DEF_PRINCIPLES.filter(x=> d>=2 || x.tier===1);
  const it = recentPick(pool.length?pool:DEF_PRINCIPLES, x=>x.q);
  return mc4Make({ruleShow:'', prompt:'',
    options:[it.correct].concat(it.ds), correct:it.correct,
    why: it.why, rules: DEF_RULES, mcInstr: it.q});
}
function genDefQ(d){
  const r = Math.random();
  if(r<0.30) return genDefPrincipleQ(d);
  if(r<0.75) return genDefRuleQ(d);
  return genDefKindQ(d);
}
/* ---- division: adequacy computed from the ontologies ---- */
const DIV_SOUND_LIST = [
  {dom:'math', whole:'number', members:['even number','odd number']},
  {dom:'math', whole:'triangle', members:['equilateral triangle','isosceles triangle','scalene triangle']},
  {dom:'math', whole:'figure', members:['triangle','quadrilateral','circle']},
  {dom:'soul', whole:'vital power', members:['vegetative power','sensitive power','rational power']},
  {dom:'soul', whole:'sensitive power', members:['external sense','internal sense']},
  {dom:'ethics', whole:'habit', members:['virtue','vice']}
];
function divVerdict(dom, whole, members){
  const E = DOM_EXT[dom];
  const W = new Set(E[whole].map(a=>a.id));
  for(const m of members){
    const a = E[m].find(x=>!W.has(x.id));
    if(a) return {v:'exceeds', witness:a, member:m};
  }
  for(let i=0;i<members.length;i++) for(let j=i+1;j<members.length;j++){
    const s = new Set(E[members[i]].map(x=>x.id));
    const a = E[members[j]].find(x=>s.has(x.id));
    if(a) return {v:'overlap', witness:a, pair:[members[i],members[j]]};
  }
  const un = new Set();
  members.forEach(m=>E[m].forEach(x=>un.add(x.id)));
  const miss = E[whole].find(a=>!un.has(a.id));
  if(miss) return {v:'deficient', witness:miss};
  return {v:'sound'};
}
const DIV_OPTS = ['A sound division','Incomplete — part of the whole is left out',
  'The members overlap — something falls under two of them','One member does not belong to the whole being divided'];
const DIV_OPT_OF = {sound:DIV_OPTS[0], deficient:DIV_OPTS[1], overlap:DIV_OPTS[2], exceeds:DIV_OPTS[3]};
function divText(whole, members){
  const ms = members.map(plural);
  const list = ms.length===2 ? ms[0]+' and '+ms[1] : ms.slice(0,-1).join(', ')+', and '+ms[ms.length-1];
  return `${cap(plural(whole))} divide into ${list}`;
}
/* terms kept out of the division exercise: they belong to a doctrine of number
   the student has not been taught here, and the divisions are meant to be plain. */
const DIV_SKIP_TERMS = ['prime number','composite number','magnitude','square number',
  'equilateral triangle','isosceles triangle','scalene triangle','right triangle'];
function genDivComputedQ(d){
  const mathList = DIV_SOUND_LIST.filter(x=>x.dom==='math');   // transparent matter only
  const target = rand(['sound','deficient','overlap','exceeds']);
  let pick = null, verdict = null;
  if(target==='sound'){
    pick = rand(mathList);
    verdict = {v:'sound'};
  } else {
    for(let i=0;i<500 && !pick;i++){
      const base = rand(mathList);
      const keys = Object.keys(KB_DOMAINS[base.dom].terms).filter(k=>k!==base.whole && DIV_SKIP_TERMS.indexOf(k)<0);
      const n = Math.random()<0.5 ? 2 : 3;
      const members = sample(keys, Math.min(n, keys.length));
      const v = divVerdict(base.dom, base.whole, members);
      if(v.v===target){ pick = {dom:base.dom, whole:base.whole, members}; verdict = v; }
    }
    if(!pick){ pick = rand(mathList); verdict = {v:'sound'}; }
  }
  let why;
  if(verdict.v==='sound')
    why = 'The members together cover the whole and do not overlap: the division holds.';
  else if(verdict.v==='deficient')
    why = `The members leave part of the whole out: ${verdict.witness.name} is ${art(pick.whole)} ${pick.whole} that belongs to none of the members.`;
  else if(verdict.v==='overlap')
    why = `The members overlap: ${verdict.witness.name} falls under both “${verdict.pair[0]}” and “${verdict.pair[1]}”.`;
  else
    why = `The member “${verdict.member}” does not belong to the whole being divided: ${verdict.witness.name} is ${art(verdict.member)} ${verdict.member} but not ${art(pick.whole)} ${pick.whole}.`;
  return mc4Make({prompt: divText(pick.whole, pick.members), options: DIV_OPTS,
    correct: DIV_OPT_OF[verdict.v], why, rules: DIV_RULES,
    mcInstr: 'Is this division sound — and if not, where does it fail?'});
}
/* rule-in-view: divisions everyday and classical, the rule always displayed.
   Tiers as with definitions: 1 homely, 2 classical but plain, 3 subtle. */
/* Every item carries a genus tag `g`: within a single question no two options
   may divide the same genus (so “number into even and odd” and “numbers into the
   even and the multiples of three” never appear together). Examples are common
   knowledge, and drawn from classical arithmetic and geometry. */
const DIV_STOCK = {
  sound: [
    {tier:1, g:'number', t:'Number into the even and the odd'},
    {tier:1, g:'triangle', t:'Triangles into equilateral, isosceles, and scalene'},
    {tier:1, g:'day', t:'The days of the week into the weekdays and the weekend'},
    {tier:1, g:'card', t:'Playing cards into the red and the black'},
    {tier:1, g:'book', t:'Books into those written in prose and those written in verse'},
    {tier:1, g:'shoe', t:'Shoes into the left and the right'},
    {tier:1, g:'water', t:'Water into the fresh and the salt'},
    {tier:1, g:'men', t:'Men into the married and the unmarried'},
    {tier:1, g:'living thing', t:'Living things into plants, animals, and fungi'},
    {tier:1, g:'animal', t:'Animals into those that mainly live in the water, on the land, under the ground, and in the air'},
    {tier:2, g:'tree', t:'Trees into the deciduous and the evergreen'},
    {tier:2, g:'metal', t:'Metals into the precious and the base'},
    {tier:2, g:'ship', t:'Ships into those driven by oar and those driven by sail'},
    {tier:2, g:'year', t:'The year into spring, summer, autumn, and winter'},
    {tier:1, g:'angle', t:'Angles into the acute, the right, and the obtuse'},
    {tier:1, g:'letter', t:'Letters into the vowels and the consonants'},
    {tier:3, g:'line', t:'Lines into the straight and the curved'},
    {tier:3, g:'government', t:'Government into rule by one, by few, and by many'},
    {tier:5, g:'time', t:'Time into the past, the present, and the future'},
    {tier:5, g:'statement', t:'Statements into the true and the false'},
    {tier:5, g:'human', t:'Human beings into men and women'}
  ],
  deficient: [
    {tier:1, g:'angle', t:'Angles into the acute and the obtuse', w:'the right angle is neither acute nor obtuse — it is left out of both members'},
    {tier:1, g:'year', t:'The year into spring and summer', w:'autumn and winter are left out'},
    {tier:1, g:'fruit', t:'Fruit into apples, pears, and plums', w:'the orange and the grape are fruit too — they fall under none of the members'},
    {tier:2, g:'plant part', t:'The parts of a plant into the root, the stem, and the leaves', w:'the flower and the fruit are left out'},
    {tier:1, g:'men', t:'Men into the married and the widowed', w:'the never-married are left out of both members'},
    {tier:1, g:'polygon', t:'Polygons into triangles and quadrilaterals', w:'the pentagon is left out of both members'},
    {tier:2, g:'card', t:'Playing cards into the hearts, the diamonds, and the clubs', w:'the spades are left out'},
    {tier:2, g:'metal', t:'Metals into gold, silver, and iron', w:'copper, tin, and lead are metals too — they are left out of every member'},
    {tier:2, g:'living thing', t:'Living things into plants and animals', w:'the fungi belong to neither member — they are left out'},
    {tier:2, g:'bird', t:'Birds into those that swim and those that fly', w:'the ostrich neither swims nor flies — it is left out of both members'},
    {tier:3, g:'colour', t:'Colours into the white and the black', w:'all the colours between — red, green, and the rest — are left out'},
    {tier:5, g:'time', t:'Time into the past and the future', w:'the present is left out'},
    {tier:5, g:'year', t:'The four seasons into spring, summer, and autumn', w:'winter is left out'}
  ],
  overlap: [
    {tier:1, g:'number', t:'Numbers into the even and the multiples of three', w:'six is both even and a multiple of three — the members are not exclusive'},
    {tier:1, g:'men', t:'Men into the married and the tall', w:'a tall husband falls under both members'},
    {tier:1, g:'bird', t:'Birds into those that swim and those that are white', w:'the swan falls under both members'},
    {tier:1, g:'book', t:'Books into the old and the Latin', w:'an old Latin book falls under both members'},
    {tier:2, g:'triangle', t:'Triangles into the isosceles and the right-angled', w:'one triangle may be both at once'},
    {tier:1, g:'flower', t:'Flowers into the red and the sweet-smelling', w:'a red rose falls under both members'},
    {tier:2, g:'card', t:'Playing cards into the red and the face cards', w:'the king of hearts is both red and a face card'},
    {tier:2, g:'animal', t:'Animals into the swift and the striped', w:'a running tiger is both swift and striped'},
    {tier:3, g:'quadrilateral', t:'Quadrilaterals into the square and the rectangle', w:'every square is a rectangle — the members are not exclusive'},
    {tier:3, g:'letter', t:'Letters into the vowels and the capitals', w:'the capital A is both a vowel and a capital'},
    {tier:3, g:'plant', t:'Plants into trees and evergreens', w:'the pine is both a tree and an evergreen — the members are not exclusive'},
    {tier:5, g:'men', t:'Men into the fathers and the sons', w:'one man may be both a father and a son — the members are not exclusive'}
  ],
  exceeds: [
    {tier:1, g:'living thing', t:'Living things into plants, animals, and stones', w:'a stone is not a living thing at all — it does not belong to the whole being divided'},
    {tier:1, g:'triangle', t:'Triangles into equilateral, isosceles, and squares', w:'the square is no triangle at all'},
    {tier:1, g:'week', t:'The week into its seven days and the months', w:'months are no parts of a week'},
    {tier:1, g:'ship', t:'The parts of a ship into the hull, the mast, the sail, and the passengers', w:'the passengers are no part of the ship — they do not belong to the whole being divided'},
    {tier:1, g:'hand', t:'The fingers into thumb, forefinger, and the palm', w:'the palm is not a finger'},
    {tier:2, g:'letter', t:'Letters into the vowels, the consonants, and the syllables', w:'a syllable is built out of letters but is not itself a letter — it does not belong among them'},
    {tier:2, g:'tree', t:'Trees into oaks, pines, and ferns', w:'a fern is not a tree at all — it does not belong to the whole being divided'},
    {tier:2, g:'sense', t:'The five senses into sight, hearing, touch, taste, smell, and speech', w:'speech is not a sense at all — it does not belong among the five'},
    {tier:3, g:'direction', t:'The four directions into north, south, east, west, and the centre', w:'the centre is not a direction at all — it does not belong among the four'},
    {tier:5, g:'meal', t:'The meals of the day into breakfast, dinner, supper, and the kitchen', w:'the kitchen is not a meal at all — it does not belong among them'}
  ],
  mixed: [
    {tier:1, g:'shoe', t:'Shoes into leather shoes, sandals, and children’s shoes', w:'material, style, and wearer are three different bases — the cuts cross'},
    {tier:1, g:'book', t:'Books into the old, the Latin, and the heavy', w:'age, language, and weight are three bases — the members cross-cut'},
    {tier:1, g:'house', t:'Houses into the stone-built, the tall, and the rented', w:'material, size, and ownership cross one another'},
    {tier:1, g:'dog', t:'Dogs into hounds, black dogs, and puppies', w:'breed, colour, and age are three bases at once'},
    {tier:1, g:'cup', t:'Cups into the clay, the cracked, and the child’s', w:'material, condition, and owner are three different bases at once'},
    {tier:2, g:'horse', t:'Horses into the swift, the white, and the young', w:'speed, colour, and age are three different bases — the cuts cross'},
    {tier:2, g:'student', t:'Students into the beginners, the tall, and the diligent', w:'stage, height, and character are three bases at once'},
    {tier:3, g:'poem', t:'Poems into the epic, the ancient, and the Greek', w:'genre, age, and language are three different bases'},
    {tier:3, g:'ship', t:'Ships into the swift, the wooden, and the foreign', w:'speed, material, and origin are three different bases'},
    {tier:5, g:'soldier', t:'Soldiers into the brave, the tall, and the mounted', w:'courage, height, and kind of service are three different bases'}
  ]
};
const DIV_RULE_META = {
  deficient:{rule:'The members together must cover the whole: nothing that belongs to the whole may be left out.'},
  overlap:{rule:'The members must not overlap: nothing may fall under two of them at once.'},
  exceeds:{rule:'Every member must actually belong to the whole being divided: a division may not list something that falls outside it.'},
  mixed:{rule:'A division must sort on a single basis at a time: members sorted on different bases cut across one another.'}
};
/* Pick up to n items from pool whose genus differs from one another and from
   any genus in `exclude`. If distinct genera run short, fall back to filling
   from the rest of the pool (never repeating an item) so four options remain. */
function divPickDistinct(pool, n, exclude){
  const used = new Set(exclude||[]);
  const shuffled = pool.slice();
  for(let i=shuffled.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); const t=shuffled[i]; shuffled[i]=shuffled[j]; shuffled[j]=t; }
  const out = [];
  for(const it of shuffled){ if(used.has(it.g)) continue; used.add(it.g); out.push(it); if(out.length>=n) break; }
  if(out.length<n) for(const it of shuffled){ if(out.indexOf(it)<0){ out.push(it); if(out.length>=n) break; } }
  return out;
}
function genDivRuleQ(d){
  const keys = d<2 ? ['deficient','overlap'] : d<3 ? ['deficient','overlap','exceeds']
             : ['deficient','overlap','exceeds','mixed'];
  const tiers = defTiers(d);
  const key = rand(keys), meta = DIV_RULE_META[key];
  const rShow = d>=5 ? '' : meta.rule;   /* Master level: judge without the rule in view */
  const flawPool = DIV_STOCK[key].filter(x=>tiers.indexOf(x.tier)>=0);
  const soundPool = DIV_STOCK.sound.filter(x=>tiers.indexOf(x.tier)>=0);
  if(d<2 || Math.random()<0.6){
    const culprit = recentPick(flawPool, x=>x.t);
    const others = divPickDistinct(soundPool, 3, [culprit.g]);
    return mc4Make({ruleShow: rShow,
      options: [culprit.t].concat(others.map(o=>o.t)),
      correct: culprit.t,
      why: `“${culprit.t}” breaks the rule: ${culprit.w}. The other three hold: their members cover the whole, do not overlap, and are sorted on one basis.`,
      rules: DIV_RULES, mcInstr: d>=5 ? 'One of these four divisions breaks a rule of division. Which one?' : 'One of these four divisions breaks the rule shown. Which one?'});
  }
  const keeper = recentPick(soundPool, x=>x.t);
  const breakers = divPickDistinct(flawPool, 3, [keeper.g]);
  return mc4Make({ruleShow: rShow,
    options: [keeper.t].concat(breakers.map(b=>b.t)),
    correct: keeper.t,
    why: `“${keeper.t}” keeps the rule. The others each break it: ${breakers.map(b=>b.w).join('; ')}.`,
    rules: DIV_RULES, mcInstr: d>=5 ? 'Three of these break a rule of division; one is sound. Which one is sound?' : 'Three of these break the rule shown; one keeps it. Which one keeps it?'});
}
const DIVKIND_DOCTRINE = {
  ess:'An ESSENTIAL division divides a general kind (a genus) into the kinds beneath it, marked off by opposed differences.',
  int:'An INTEGRAL division divides a whole into the parts that make it up — and no part is called by the name of the whole.',
  pot:'A DIVISION BY POWERS divides one thing according to what it is able to do — as a person into the powers of body and of mind.',
  acc:'An ACCIDENTAL division sorts a subject by features it can gain or lose without becoming a different thing.'
};
/* two simple examples of each kind — none of them used as exercise items —
   shown in the intro and again, in small print, wherever a kind is defined. */
const DIVKIND_EG = {
  ess:['a musical instrument into strings, winds, and percussion','a vertebrate into fish, amphibians, reptiles, birds, and mammals'],
  int:['a book into its chapters','a clock into its face, its hands, and its gears'],
  pot:['a bird into its power to fly, to sing, and to build a nest','a person into the powers of body and of mind'],
  acc:['apples into the red and the green','cloaks into the new and the old']
};
function divKindEgHtml(k){ return `<div class="rule-eg"><em>e.g.</em> ${DIVKIND_EG[k][0]}; &ensp; ${DIVKIND_EG[k][1]}.</div>`; }
/* short adjectival form for the “X is …” gloss, and full label for the prompt */
const DIVKIND_IS = {ess:'essential', int:'integral', pot:'a division by powers', acc:'accidental'};
const DIVKIND_LABEL = {ess:'an ESSENTIAL division', int:'an INTEGRAL division', pot:'a DIVISION BY POWERS', acc:'an ACCIDENTAL division'};
const DIVKIND_STOCK = {
  ess: [
    {tier:1, g:'letter', t:'Letters into the vowels and the consonants', w:'a general kind divided into the kinds beneath it by opposed differences.'},
    {tier:1, g:'number', t:'Number into the even and the odd', w:'every number falls into one kind or the other, by an opposed difference.'},
    {tier:1, g:'triangle', t:'Triangle into equilateral, isosceles, and scalene', w:'Euclid’s trichotomy of species.'},
    {tier:2, g:'backbone', t:'Animals into those with backbones and those without', w:'a general kind divided into the kinds beneath it by opposed differences.'},
    {tier:2, g:'angle', t:'Angles into the acute, the right, and the obtuse', w:'a general kind divided into the kinds beneath it by opposed differences.'},
    {tier:2, g:'living thing', t:'Living things into plants, animals, and fungi', w:'a general kind divided into the kinds beneath it by opposed differences.'},
    {tier:3, g:'plant', t:'Plants into trees, shrubs, and grasses', w:'a general kind divided into the kinds beneath it, by how each one grows.'},
    {tier:5, g:'line', t:'Line into the straight and the curved', w:'a general kind divided into its two kinds by an opposed difference.'},
    {tier:5, g:'bee', t:'The bees of a hive into the queen, the workers, and the drones', w:'a general kind divided into the kinds beneath it, each with its own work.'}
  ],
  int: [
    {tier:1, g:'house', t:'A house into foundation, walls, and roof', w:'parts that make up the whole; none of them is called a house.'},
    {tier:1, g:'week', t:'The week into its seven days', w:'the days make up the week; no single day is a week.'},
    {tier:1, g:'body', t:'The body into head, trunk, and limbs', w:'the parts that make up one whole body.'},
    {tier:1, g:'wheel', t:'A wheel into its hub, its spokes, and its rim', w:'the parts that make up the whole; no one of them is a wheel.'},
    {tier:2, g:'river', t:'A river into its source, its course, and its mouth', w:'the parts that make up the whole river; no one of them is a river.'},
    {tier:3, g:'song', t:'A song into its words and its tune', w:'the two parts that make up the whole; neither on its own is the song.'},
    {tier:5, g:'ship', t:'A ship into hull, mast, and sail', w:'the parts that make up the whole; no part is itself the ship.'},
    {tier:5, g:'sentence', t:'A sentence into its subject and its predicate', w:'the parts that make up the whole; neither on its own is the sentence.'}
  ],
  pot: [
    {tier:1, g:'animal power', t:'An animal into its power to be nourished, to move, and to sense', w:'one animal, divided not into pieces but into what it is able to do.'},
    {tier:1, g:'hand', t:'The hand into its power to grasp and its power to strike', w:'one part of the body divided by what it is able to do.'},
    {tier:1, g:'mind', t:'The mind into its power to remember, to understand, and to choose', w:'one mind, divided into what it is able to do.'},
    {tier:2, g:'sense', t:'The senses of an animal into sight, hearing, touch, taste, and smell', w:'one power of sensing divided into the five powers under it.'},
    {tier:2, g:'horse', t:'A horse into its power to run, to pull, and to carry', w:'one animal divided by what it is able to do, not into parts.'},
    {tier:3, g:'seed', t:'A seed into its power to sprout, to grow, and to bear fruit', w:'one seed divided by what it is able to do in its turn.'},
    {tier:5, g:'tongue', t:'The tongue into its power to taste and its power to speak', w:'one organ divided into its two powers.'},
    {tier:5, g:'dog', t:'A dog into its power to run, to smell, and to bark', w:'one animal divided by what it is able to do.'}
  ],
  acc: [
    {tier:1, g:'musical', t:'People into the musical and the unmusical', w:'a subject sorted by a feature it can gain or lose — nothing of what a person is.'},
    {tier:1, g:'shoe', t:'Shoes into the new and the worn', w:'sorted by a state they pass into with use — no part of what a shoe is.'},
    {tier:1, g:'book', t:'Books into the read and the unread', w:'a feature of the reader, not of what the book is.'},
    {tier:2, g:'sleeper', t:'Men into the sleeping and the waking', w:'a subject divided by a passing state — no part of what a man is.'},
    {tier:2, g:'coin', t:'Coins into the newly struck and the worn', w:'sorted by what handling has done to them — no part of what a coin is.'},
    {tier:3, g:'road', t:'Roads into the dry and the muddy', w:'a subject sorted by what the weather has done to it — no part of what a road is.'},
    {tier:5, g:'traveller', t:'Travellers into those on foot and those on horseback', w:'a subject divided by a passing feature — the manner of travel.'},
    {tier:5, g:'field', t:'Fields into the sown and the fallow', w:'a subject sorted by a passing state — no part of what a field is.'}
  ]
};
function genDivKindQ(d){
  const kinds = ['ess','int','pot','acc'];
  const tiers = defTiers(d);
  const target = rand(kinds);
  const chosen = {};
  const usedG = new Set();
  const tgtPool = DIVKIND_STOCK[target].filter(x=>tiers.indexOf(x.tier)>=0);
  chosen[target] = recentPick(tgtPool, x=>x.t);
  usedG.add(chosen[target].g);
  kinds.filter(k=>k!==target).forEach(k=>{
    let pool = DIVKIND_STOCK[k].filter(x=>tiers.indexOf(x.tier)>=0 && !usedG.has(x.g));
    if(!pool.length) pool = DIVKIND_STOCK[k].filter(x=>tiers.indexOf(x.tier)>=0);
    chosen[k] = rand(pool);
    usedG.add(chosen[k].g);
  });
  const others = kinds.filter(k=>k!==target)
    .map(k=>`“${chosen[k].t}” is ${DIVKIND_IS[k]}`).join('; ');
  const rShow = d>=5 ? '' : DIVKIND_DOCTRINE[target] + divKindEgHtml(target);
  return mc4Make({ruleShow: rShow,
    options: kinds.map(k=>chosen[k].t),
    correct: chosen[target].t,
    why: `“${chosen[target].t}” — ${chosen[target].w} Of the rest: ${others}.`,
    rules: 'The kinds of division: essential (a general kind into the kinds beneath it), integral (a whole into the parts that make it up), by powers (one thing according to what it can do), accidental (a subject sorted by features it can gain or lose).',
    mcInstr: `Which of these is ${DIVKIND_LABEL[target]}?`});
}
/* ---- division: questions on the rules and principles themselves ----
   The doctrine directly — the four rules and the kinds — not an example to judge. */
const DIV_PRINCIPLES = [
  {tier:1, q:'The members of a sound division must together…',
   correct:'Cover the whole, leaving nothing out',
   ds:['Be as few in number as possible','Each be simpler than the whole itself','Run in order from largest to smallest'],
   why:'The members taken together must cover the whole. If anything belonging to the whole falls under none of them, the division is incomplete.'},
  {tier:1, q:'That nothing fall under two members at once is the rule that the members…',
   correct:'Must not overlap (they are mutually exclusive)',
   ds:['Must be few in number','Must each fit the whole exactly','Must be stated positively'],
   why:'The members must be opposed, so that nothing belongs to two of them at once; overlapping members spoil the division.'},
  {tier:1, q:'A sound division must sort on one basis at a time. Which division breaks this rule?',
   correct:'Shoes into leather, canvas, and left-footed',
   ds:['Number into even and odd','Letters into the vowels and the consonants','Lines into the straight and the curved'],
   why:'One basis at a time: “leather/canvas” sorts by material, “left-footed” by something else entirely — mixing bases is the classic fault.'},
  {tier:2, q:'The rule that every member must belong to the whole forbids…',
   correct:'Listing a member that the whole does not actually contain',
   ds:['Dividing the whole into just two members','Dividing a general kind into the kinds beneath it','Naming the whole before naming its parts'],
   why:'Every member must be something the whole really includes. A member that lies outside it does not divide that whole at all — as “stones” does nothing to divide living things.'},
  {tier:2, q:'Dividing “living thing” into plant, animal, and fungus is sound because the three members are…',
   correct:'Complete, non-overlapping, and sorted on one basis',
   ds:['Arranged in strict alphabetical order','All three of them fixed by pure metaphor','Named after their efficient causes'],
   why:'They cover every living thing — plants and animals alone would leave the fungi out — nothing falls under two of them, and they are sorted on a single basis.'},
  {tier:2, q:'An essential division divides a general kind into the kinds beneath it. What does an integral division divide, and into what?',
   correct:'A whole into the parts that make it up',
   ds:['A subject into the features it can gain or lose','A general kind into its opposed differences','A name into the syllables that spell it'],
   why:'Integral division takes a whole (a house) into the parts that make it up (foundation, walls, roof) — and no part is called a house.'}
];
function genDivPrincipleQ(d){
  const pool = DIV_PRINCIPLES.filter(x=> d>=2 || x.tier===1);
  const it = recentPick(pool.length?pool:DIV_PRINCIPLES, x=>x.q);
  return mc4Make({ruleShow:'', prompt:'',
    options:[it.correct].concat(it.ds), correct:it.correct,
    why: it.why, rules: DIV_RULES, mcInstr: it.q});
}
function genDivQ(d){
  const r = Math.random();
  if(r<0.25) return genDivPrincipleQ(d);
  if(r<0.58) return genDivRuleQ(d);
  if(r<0.80) return genDivKindQ(d);
  return d>=3 ? genDivComputedQ(d) : genDivRuleQ(d);
}

/* ================================================================
   SET I — THE FIVE PREDICABLES (Porphyry, Isagoge)
   The five ways a general term may be said of a subject: genus,
   species, differentia, property (proprium), accident. The core
   account follows the author's article (the predicables treat of
   secondary substance and are second intentions founded in
   reality); the examples are Porphyry's and Aristotle's own —
   animal/man, rational, risibility, the black raven — supplemented
   from the wider corpus but kept to their teaching.
   Tiers as in Definition/Division: 1 homely, 2 classical but plain,
   3 subtle, 5 reserved for the Master level.
   ================================================================ */
const PRED_RULES = 'The five predicables (Porphyry): genus, species, difference, property, and accident — the five ways a general term can be said of a subject. The genus is the wider kind; the species the narrower kind under it; the difference is the mark that divides the genus and makes the species; the property follows from what the thing is and belongs to that species alone, always; the accident may come or go while the subject stays the same thing.';
const PRED_NAME = {gen:'genus', spec:'species', diff:'difference', prop:'property', acc:'accident'};
const PRED_DOCTRINE = {
  gen:'A GENUS is said of many things of different kinds, naming the broader class they share; it answers “what is it?” with the wider nature. Animal is the genus of man.',
  spec:'A SPECIES is the narrower kind under a genus, said of the individuals that share that nature. Man is a species of animal; Socrates falls under the species man.',
  diff:'A DIFFERENCE (differentia) is the mark that divides a genus and makes a species — it answers “what sort of thing, in its very nature?” Rational divides animal and makes man.',
  prop:'A PROPERTY (proprium) is no part of what a thing is, yet follows from it, and belongs to every member of the species, to that species alone, and always — so the two always go together. The power to laugh is the property of man.',
  acc:'An ACCIDENT is what a subject may have or lack while remaining the very same thing — present in it, but no part of what it is. White is an accident of man.'
};
/* Each item is a predication “subject — predicate”, tagged with the predicable
   the predicate bears to the subject. `subj` groups items so a single question
   need not put two options about the same subject side by side. */
const PRED_ITEMS = {
  gen: [
    {tier:1, subj:'man', t:'Man is an animal', w:'animal is the genus of man — the wider kind, said of many species at once (Porphyry).'},
    {tier:1, subj:'oak', t:'An oak is a tree', w:'tree, the genus, said of the oak as its wider kind.'},
    {tier:1, subj:'dog', t:'A dog is an animal', w:'animal, the genus, said of the dog as its common kind.'},
    {tier:1, subj:'rose2', t:'A rose is a plant', w:'plant, the wider kind under which the rose falls.'},
    {tier:2, subj:'copper', t:'Copper is a metal', w:'metal, the genus, said of copper as its wider kind.'},
    {tier:2, subj:'horse', t:'A horse is an animal', w:'animal, the genus, said of the horse as its common kind.'},
    {tier:2, subj:'triangle', t:'A triangle is a figure', w:'figure is the genus, the wider kind under which the triangle falls.'},
    {tier:2, subj:'hammer', t:'A hammer is a tool', w:'tool, the genus — the wider kind under which the hammer falls.'},
    {tier:3, subj:'bee', t:'A bee is an insect', w:'insect, the genus, said of the bee as its wider kind.'},
    {tier:3, subj:'oak', t:'An oak is a living thing', w:'a remote genus — an oak is a tree, a tree a plant, a plant a living thing. The genus need not be the nearest one (the tree of Porphyry).'},
    {tier:5, subj:'white', t:'White is a colour', w:'colour, the genus, said of white as its wider kind.'}
  ],
  spec: [
    {tier:1, subj:'Socrates', t:'Socrates is a man', w:'man, the species, said of the individual who falls under it (Porphyry).'},
    {tier:1, subj:'fido', t:'Fido is a dog', w:'the species dog, said of the individual Fido.'},
    {tier:1, subj:'man', t:'Man is a species of animal', w:'man is the lowest species under the genus animal — beneath it lie only individual men.'},
    {tier:2, subj:'rex', t:'Rex is a horse', w:'the species horse, said of the single animal Rex.'},
    {tier:2, subj:'daisy', t:'This flower is a daisy', w:'the species daisy, said of the single flower that falls under it.'},
    {tier:2, subj:'oak', t:'This tree is an oak', w:'the species oak, said of the single tree that falls under it.'},
    {tier:3, subj:'Plato', t:'Plato is a man', w:'the species man, said of the individual Plato.'},
    {tier:5, subj:'lamb', t:'This young sheep is a lamb', w:'the lowest species, said of the individual that falls under it.'}
  ],
  diff: [
    {tier:1, subj:'man', t:'Man is rational', w:'being able to reason — the difference that divides animal and makes man (Porphyry; the tree).'},
    {tier:1, subj:'triangle', t:'A triangle is three-sided', w:'having three sides — the difference that marks the triangle off from every other figure.'},
    {tier:2, subj:'angel', t:'An angel has no body', w:'having no body — the difference that divides substance into the bodily and the spiritual (the tree of Porphyry).'},
    {tier:2, subj:'lamb', t:'A lamb is young', w:'youth — the difference that marks the lamb off from the rest of the sheep.'},
    {tier:2, subj:'body', t:'A body takes up space', w:'taking up space — the difference that divides substance into the bodily and the spiritual (the tree of Porphyry).'},
    {tier:3, subj:'animal', t:'An animal can sense', w:'the power of sense — the difference that divides living things and makes the animal (the tree of Porphyry).'},
    {tier:3, subj:'plant', t:'A plant cannot sense', w:'lacking the power of sense — the difference that marks the plant off from the animal (the tree of Porphyry).'},
    {tier:5, subj:'number', t:'This number is even', w:'even — the difference that divides the genus number into the kinds beneath it.'}
  ],
  prop: [
    {tier:1, subj:'man', t:'Man is able to laugh', w:'the power to laugh belongs to man alone, to every man, and always; it follows from reason yet is no part of what a man is (the classic property).'},
    {tier:1, subj:'magnet', t:'A magnet draws iron', w:'drawing iron belongs to magnets alone, to every magnet, and always — it follows from what a magnet is, yet is not what a magnet is.'},
    {tier:2, subj:'man12', t:'Man is able to speak', w:'speech belongs to man alone, to every man, and always — it follows from his reason, yet is not what a man is (Porphyry).'},
    {tier:2, subj:'bee', t:'A bee makes honey', w:'making honey belongs to bees alone, to every bee, and always — it follows from what a bee is, yet is not what a bee is.'},
    {tier:2, subj:'triangle', t:'A triangle has its angles equal to two right angles', w:'a property — it follows from what a triangle is and always goes with it, yet is not what a triangle is (Aristotle’s model of a per se accident).'},
    {tier:3, subj:'ice', t:'Ice floats on water', w:'floating belongs to ice alone among the forms of water, to all ice, and always — it follows from what ice is, yet is not what ice is.'},
    {tier:3, subj:'square', t:'A square’s diagonals cross at right angles', w:'it follows from what a square is and holds of every square, yet it is not what a square is.'},
    {tier:5, subj:'oak', t:'An oak bears acorns', w:'bearing acorns belongs to oaks alone, to every oak, and always — it follows from what an oak is, yet is not what an oak is.'}
  ],
  acc: [
    {tier:1, subj:'Socrates', t:'Socrates is white', w:'whiteness is present in him but is no part of what he is; he might be dark and still be Socrates (a separable accident).'},
    {tier:1, subj:'apple', t:'This apple is ripe', w:'ripeness comes and goes; the apple is no less an apple unripe.'},
    {tier:1, subj:'peter', t:'Peter is seated', w:'sitting — a posture the man takes up and puts off again, changing nothing of what he is.'},
    {tier:1, subj:'door', t:'The door is open', w:'being open is a passing state of the door, no part of what a door is.'},
    {tier:1, subj:'lamp', t:'The lamp is lit', w:'being lit comes and goes; the lamp is a lamp whether lit or dark.'},
    {tier:1, subj:'boy', t:'The boy is asleep', w:'sleep — a separable accident: here now, gone when he wakes.'},
    {tier:1, subj:'road', t:'The road is muddy', w:'mud comes with the weather; it is no part of what a road is.'},
    {tier:1, subj:'coin', t:'This coin is old', w:'the coin has grown old with use, yet a new coin and an old one are equally coins.'},
    {tier:1, subj:'sky', t:'The sky is cloudy', w:'cloudiness is a passing accident of the sky today.'},
    {tier:1, subj:'field', t:'The field lies fallow', w:'lying fallow is a passing state of the field, no part of what a field is.'},
    {tier:2, subj:'raven', t:'A raven is black', w:'an inseparable accident: blackness never leaves the raven, yet being a raven does not consist in being black (Porphyry).'},
    {tier:2, subj:'man9', t:'This man is sitting', w:'sitting — a separable accident that comes and goes while the man stays the same (Porphyry).'},
    {tier:2, subj:'man10', t:'This man is musical', w:'Aristotle’s stock accident: the same man may be musical or not, and be the same man either way.'},
    {tier:2, subj:'swan', t:'This swan is white', w:'whiteness never leaves the swan, yet being a swan does not consist in being white — an inseparable accident.'},
    {tier:2, subj:'wine', t:'This wine is warm', w:'warmth is an accident the wine takes on and readily loses.'},
    {tier:2, subj:'soldier', t:'The soldier is weary', w:'weariness — a passing state, no part of what a soldier is.'},
    {tier:2, subj:'mary', t:'Mary is cheerful', w:'cheerfulness comes and goes; the person stays the same person through the change.'},
    {tier:3, subj:'Socrates2', t:'Socrates is in the marketplace', w:'being in a place — an accident that changes while the man stays the same man.'},
    {tier:3, subj:'iron', t:'This iron is rusty', w:'rust comes on the iron in time; iron is iron, bright or rusty.'},
    {tier:3, subj:'scholar', t:'The scholar is standing', w:'standing — a posture taken up and left again, changing nothing of what he is.'},
    {tier:5, subj:'wall', t:'The wall is white', w:'the whiteness is in the wall but is no part of what a wall is (Aristotle’s “present in a subject”).'},
    {tier:5, subj:'stone', t:'This stone is wet', w:'wetness — a separable accident; the stone dries and is the same stone.'},
    {tier:5, subj:'ship', t:'The ship is laden', w:'being laden is a passing accident of the ship, gone when it is unloaded.'},
    {tier:5, subj:'tree2', t:'This tree is in bloom', w:'blossom comes with the season; it is no part of what a tree is.'}
  ]
};
function genPredIdentifyQ(d, forcedTarget){
  const kinds = ['gen','spec','diff','prop','acc'];
  const tiers = defTiers(d);
  const target = forcedTarget || rand(kinds);
  const tgtPool = PRED_ITEMS[target].filter(x=>tiers.indexOf(x.tier)>=0);
  const chosen = {}; const usedSubj = new Set();
  chosen[target] = recentPick(tgtPool.length?tgtPool:PRED_ITEMS[target], x=>x.t);
  usedSubj.add(chosen[target].subj);
  const others = sample(kinds.filter(k=>k!==target), 3);
  others.forEach(k=>{
    let pool = PRED_ITEMS[k].filter(x=>tiers.indexOf(x.tier)>=0 && !usedSubj.has(x.subj));
    if(!pool.length) pool = PRED_ITEMS[k].filter(x=>tiers.indexOf(x.tier)>=0);
    if(!pool.length) pool = PRED_ITEMS[k];
    const it = rand(pool); chosen[k] = it; usedSubj.add(it.subj);
  });
  const optKinds = [target].concat(others);
  const glossOthers = others.map(k=>`“${chosen[k].t}” gives the ${PRED_NAME[k]}`).join('; ');
  return mc4Make({ruleShow: d>=5 ? '' : PRED_DOCTRINE[target],
    options: optKinds.map(k=>chosen[k].t),
    correct: chosen[target].t,
    why: `“${chosen[target].t}” — ${chosen[target].w} Of the rest: ${glossOthers}.`,
    rules: PRED_RULES,
    mcInstr: `In which of these does the predicate give the ${PRED_NAME[target].toUpperCase()} of the subject?`});
}
/* the doctrine itself — what each predicable is, and how they are ordered.
   The rule is not shown (it would give the answer). */
const PRED_PRINCIPLES = [
  {tier:1, q:'What turns a genus into one of the species under it?',
   correct:'A difference (differentia) added to the genus',
   ds:['By an accident that belongs to it alone','By a property that follows from what it is','By listing the individuals under it'],
   why:'A species is the genus narrowed by the difference that constitutes it: rational added to animal gives man.'},
  {tier:1, q:'What sets a PROPERTY (proprium) apart from an accident?',
   correct:'It follows from what the thing is, and belongs to the whole species, to it alone, and always',
   ds:['The subject may have it or lack it and stay the same thing','It answers the bare question “what is it?”','It is the widest kind said of the subject'],
   why:'A property (the power to laugh) always goes together with the species, even though it is not part of what the thing is; an accident (white) may come and go.'},
  {tier:1, q:'“Animal” — is it a genus or a species?',
   correct:'Both — a genus in relation to man, a species in relation to living body; the terms are relative',
   ds:['A genus only, never a species','A species only, never a genus','Neither: it is an individual'],
   why:'In the tree of Porphyry a middle term is a genus to whatever lies below it and a species to whatever lies above it; only the topmost is always a genus, only the lowest always a species.'},
  {tier:1, once:'pred-count', q:'How many are the predicables, and who fixed their number for the tradition?',
   correct:'Five — Porphyry, in the Isagoge: genus, species, difference, property, accident',
   ds:['Ten — Aristotle, in the Categories','Four — the causes','Three — the acts of the mind'],
   why:'Porphyry’s Isagoge, the classic introduction to Aristotle’s Categories, sets out the five predicables.'},
  {tier:2, q:'The difference (differentia) answers which question about a thing?',
   correct:'“What sort of thing is it?” — in its very nature (quale quid)',
   ds:['“What is it?” — the bare kind','“How much of it is there?”','“What merely happens to be true of it?”'],
   why:'Porphyry: the genus answers “what is it?”, the difference “what sort of thing, in its nature?” — rational tells us what sort of animal a man is.'},
  {tier:2, q:'Which is the SUPREME genus — said of everything below it, but itself under no higher kind?',
   correct:'Substance',
   ds:['Animal','Man','Socrates'],
   why:'Substance is the highest genus of all (genus generalissimum) — said of everything beneath it, but falling under no wider kind (the tree of Porphyry).'},
  {tier:2, q:'Which of these is an individual — neither a genus nor a species, but only something things are said about?',
   correct:'Socrates',
   ds:['Animal','Man','Substance'],
   why:'An individual such as Socrates is never said of anything else; things are only ever said of him. Man is the lowest species, animal a middle genus, substance the highest genus.'},
  {tier:2, q:'How do genus and species stand in relation to the ten categories?',
   correct:'They are second intentions — the mind’s ways of saying one thing of another, grounded in reality',
   ds:['They are individual substances existing outside the mind','They are the ten highest kinds of real being','They are mere names, with no basis in things'],
   why:'Aristotle and St Thomas: the predicables come from the mind’s way of knowing, yet they are grounded in the real natures of things. The categories, by contrast, divide real being itself.'},
  {tier:3, q:'Porphyry gives several senses of “property.” In the strict sense, a property belongs…',
   correct:'To the whole species, to it alone, and always',
   ds:['To one species, but not to all its members','To the whole species, but to other species as well','To the whole species and it alone, but only at times'],
   why:'Only the fourth sense — the power to laugh — always goes together with the species. Being a geometer, being two-footed, and growing grey each fail on one of the three marks.'},
  {tier:3, q:'An INSEPARABLE accident, such as the blackness of a raven…',
   correct:'Never leaves the subject, yet is still no part of what the subject is',
   ds:['Is part of what the subject is','Belongs to the subject alone and always, and so defines it','Can be gained and lost, as sitting or standing'],
   why:'Porphyry: blackness never leaves the raven, yet being a raven does not consist in being black — the accident is inseparable, but still not part of the nature. Sitting, by contrast, is a separable accident.'}
];
/* Questions marked `once` are asked at most a single time per set-run (or
   review): their key is banked here and reset when a session begins. */
const SESSION_ONESHOT = new Set();
function oneShotFree(x){ return !(x.once && SESSION_ONESHOT.has(x.once)); }
function genPredPrincipleQ(d){
  /* favour the weightier doctrine at the higher levels: at Levels IV–V the
     easy tier-1 principles drop away, leaving the subtler points. */
  const tiers = defTiers(d);
  let pool = PRED_PRINCIPLES.filter(x=> tiers.indexOf(x.tier)>=0 && oneShotFree(x));
  if(!pool.length) pool = PRED_PRINCIPLES.filter(x=> (d>=2 || x.tier===1) && oneShotFree(x));
  if(!pool.length) pool = PRED_PRINCIPLES.filter(oneShotFree);
  if(!pool.length) pool = PRED_PRINCIPLES;
  const it = recentPick(pool, x=>x.q);
  if(it.once) SESSION_ONESHOT.add(it.once);
  return mc4Make({ruleShow:'', prompt:'',
    options:[it.correct].concat(it.ds), correct:it.correct,
    why: it.why, rules: PRED_RULES, mcInstr: it.q});
}
/* The kinds of question this exercise can ask. Each is drilled with a
   short-term cooldown: once a kind is asked it is barred from the next TWO
   questions, returning to the pool on the third — so no run of, say, four
   “which is the property?” questions in a row. Within the available kinds the
   subtler ones (differentia, property, and the doctrine questions) are
   favoured, the more so as the level rises. */
const PRED_QTYPES = ['principle','id-gen','id-spec','id-diff','id-prop','id-acc'];
let PRED_RECENT_QTYPES = [];
function predQTypeWeight(t, d){
  const bump = {'id-diff':1, 'id-prop':1, 'principle':1, 'id-spec':0.5};   /* the harder kinds */
  return 2 + (bump[t]||0) * Math.max(0, d-1);   /* uniform at Level I; tilts higher by Level V */
}
function genPredicableQ(d){
  let pool = PRED_QTYPES.filter(t=>PRED_RECENT_QTYPES.indexOf(t)<0);
  if(!pool.length) pool = PRED_QTYPES.slice();
  const weights = pool.map(t=>predQTypeWeight(t, d));
  const total = weights.reduce((a,b)=>a+b,0);
  let r = Math.random()*total, pick = pool[pool.length-1];
  for(let i=0;i<pool.length;i++){ r -= weights[i]; if(r<=0){ pick = pool[i]; break; } }
  PRED_RECENT_QTYPES.push(pick);
  while(PRED_RECENT_QTYPES.length>2) PRED_RECENT_QTYPES.shift();   /* barred for the next two */
  return pick==='principle' ? genPredPrincipleQ(d) : genPredIdentifyQ(d, pick.slice(3));
}
/* Generic short-term cooldown: keep a question KIND from recurring within the
   next two questions of a set. `sigFn` maps a generated question to a signature
   string; on collision we regenerate (a few tries) before giving up. */
const EX_COOLDOWN = {};
function exCooldown(key, genFn, sigFn, tries){
  const recent = EX_COOLDOWN[key] || [];
  let q = genFn(), sig = sigFn(q);
  for(let i=1; i<(tries||16) && recent.indexOf(sig)>=0; i++){ q = genFn(); sig = sigFn(q); }
  EX_COOLDOWN[key] = recent.concat(sig).slice(-2);
  return q;
}
/* clear the once-per-session banks and cooldowns when a set or review begins */
function resetSessionOneShots(){
  SESSION_ONESHOT.clear();
  PRED_RECENT_QTYPES = [];
  Object.keys(EX_COOLDOWN).forEach(k=>delete EX_COOLDOWN[k]);
}

/* ================================================================
   SET II — THE TEN CATEGORIES (Aristotle, Categories 4;
   St Thomas, Commentary on the Metaphysics V, lect. 9, nos. 889–92)
   Substance and the nine accidents. The order and derivation follow
   the author's article and St Thomas: what belongs to the substance
   (by matter → quantity, by form → quality, toward another →
   relation) and what affects it (within → action, passion; without,
   as measure → when, where, position; without, as adjacent → habit).
   Examples are Aristotle's own from Categories 4 (man, horse; two
   feet; white, strong; double, half; in the school; yesterday;
   sits, lies; is shod, is armed; cuts, burns; is cut, is burnt),
   drawn out from the wider corpus but kept to their teaching.
   ================================================================ */
const CAT_RULES = 'The ten categories (Aristotle): substance, quantity, quality, relation, action, passion, when (time), where (place), posture, and habit. Substance exists in its own right; the other nine are accidents, which exist only in a substance or affect it. St Thomas derives them (Metaphysics V, lect. 9): what belongs to the substance itself follows from its matter (quantity), from its form (quality), or from a bearing toward something else (relation); what affects the substance does so from within (action, passion) or from outside — either measuring it (when, where, posture) or merely attached to it (habit).';
const CAT_NAME = {sub:'substance', qnt:'quantity', qual:'quality', rel:'relation', act:'action', pas:'passion', whn:'when (time)', whr:'where (place)', pos:'posture', hab:'habit (having)'};
const CAT_KEYS = ['sub','qnt','qual','rel','act','pas','whn','whr','pos','hab'];
const CAT_DOCTRINE = {
  sub:'SUBSTANCE exists in itself, neither said of a subject nor present in one as in a subject: this man, this horse (primary substance); or the species and genera in which they fall — man, animal (secondary substance).',
  qnt:'QUANTITY belongs to a substance by reason of its matter and answers “how much?”: two feet long, a number, a line, a surface.',
  qual:'QUALITY belongs to a substance by reason of its form and answers “of what sort?”: white, hot, healthy, just, strong, triangular.',
  rel:'RELATION is said toward another (ad aliquid) — its whole being consists in a bearing toward something else: double, half, greater, a master, a neighbour.',
  act:'ACTION is what a substance does as a principle of change passing into another: cutting, burning, heating, building.',
  pas:'PASSION (being-acted-upon) is the receiving of that change: being cut, being burnt, being heated.',
  whn:'WHEN (time) measures the substance by time: yesterday, last year, now, an hour ago.',
  whr:'WHERE (place) sets the substance in a place: in the school, in the marketplace, at home.',
  pos:'POSTURE (situs) is how a thing’s parts are arranged in the place it occupies: he lies, he sits, he stands, he reclines.',
  hab:'HABIT (having) is what a substance has on it — attached to it, but not measuring it: he is shod, he is armed, he is clothed.'
};
/* short, example-free glosses — safe to show beside word-options */
const CAT_GLOSS = {
  sub:'exists in its own right — not present in anything else, nor said of anything else.',
  qnt:'belongs to a thing by reason of its matter — answers “how much?”',
  qual:'belongs to a thing by reason of its form — answers “of what sort?”',
  rel:'said toward another — its whole being is a reference to something else.',
  act:'the doing of something — a change the thing brings about in another.',
  pas:'the undergoing of a change — the receiving end of an action.',
  whn:'places the thing in time.',
  whr:'places the thing somewhere.',
  pos:'how a thing’s parts are arranged in the place it occupies.',
  hab:'what a thing has on it — attached, but not measuring it.'
};
const CAT_WORDS = {
  sub: [{tier:1,t:'a man'},{tier:1,t:'a horse'},{tier:2,t:'an ox'},{tier:2,t:'a stone'},{tier:3,t:'a tree'},{tier:5,t:'this individual man'}],
  qnt: [{tier:1,t:'two feet long'},{tier:1,t:'the number ten'},{tier:2,t:'six feet long'},{tier:2,t:'a line'},{tier:3,t:'a surface'},{tier:5,t:'four feet wide'}],
  qual:[{tier:1,t:'white'},{tier:1,t:'strong'},{tier:2,t:'hot'},{tier:2,t:'triangular'},{tier:3,t:'just'},{tier:3,t:'sweet'},{tier:5,t:'straight'}],
  rel: [{tier:1,t:'double'},{tier:1,t:'half'},{tier:2,t:'greater'},{tier:2,t:'a master'},{tier:3,t:'a neighbour'},{tier:5,t:'twice as large'}],
  act: [{tier:1,t:'cutting'},{tier:1,t:'burning'},{tier:2,t:'heating'},{tier:2,t:'building'},{tier:3,t:'healing'},{tier:5,t:'teaching'}],
  pas: [{tier:1,t:'being cut'},{tier:1,t:'being burnt'},{tier:2,t:'being heated'},{tier:2,t:'being healed'},{tier:3,t:'being built'},{tier:5,t:'being taught'}],
  whn: [{tier:1,t:'yesterday'},{tier:1,t:'last year'},{tier:2,t:'now'},{tier:2,t:'an hour ago'},{tier:3,t:'tomorrow'},{tier:5,t:'at dawn'}],
  whr: [{tier:1,t:'in the school'},{tier:1,t:'in the marketplace'},{tier:2,t:'at home'},{tier:2,t:'in the city'},{tier:3,t:'in the garden'},{tier:5,t:'upon the road'}],
  pos: [{tier:1,t:'he lies'},{tier:1,t:'he sits'},{tier:2,t:'he stands'},{tier:2,t:'he reclines'},{tier:3,t:'he is bent over'},{tier:5,t:'he is stretched out'}],
  hab: [{tier:1,t:'he is shod'},{tier:1,t:'he is armed'},{tier:2,t:'he is clothed'},{tier:2,t:'he is wearing a coat'},{tier:3,t:'he is wearing a cloak'},{tier:5,t:'he is carrying a pack'}]
};
function catWordPick(key, tiers){
  let pool = CAT_WORDS[key].filter(x=>tiers.indexOf(x.tier)>=0);
  if(!pool.length) pool = CAT_WORDS[key];
  return pool;
}
/* Identify the category of a given word — four category NAMES as options. */
function genCatNameQ(d){
  const tiers = defTiers(d);
  const target = rand(CAT_KEYS);
  const word = recentPick(catWordPick(target, tiers), x=>x.t);
  const distract = sample(CAT_KEYS.filter(k=>k!==target), 3);
  const others = distract.map(k=>CAT_NAME[k]).join(', ');
  return mc4Make({ruleShow:'', prompt: cap(word.t),
    options: [CAT_NAME[target]].concat(distract.map(k=>CAT_NAME[k])),
    correct: CAT_NAME[target],
    why: `“${cap(word.t)}” falls under ${CAT_NAME[target]}: ${CAT_GLOSS[target]} (Not ${others}.)`,
    rules: CAT_RULES,
    mcInstr: `To which category does “${word.t}” belong?`});
}
/* Which of four words falls under a named category — the category's
   short gloss shown, four words as options. */
function genCatWhichWordQ(d){
  const tiers = defTiers(d);
  const target = rand(CAT_KEYS);
  const tgt = recentPick(catWordPick(target, tiers), x=>x.t);
  const distract = sample(CAT_KEYS.filter(k=>k!==target), 3);
  const chosen = {};
  distract.forEach(k=>{ chosen[k] = rand(catWordPick(k, tiers)); });
  const others = distract.map(k=>`“${chosen[k].t}” is ${CAT_NAME[k]}`).join('; ');
  return mc4Make({ruleShow: d>=5 ? '' : `<strong>${cap(CAT_NAME[target])}</strong> — ${CAT_GLOSS[target]}`,
    options: [tgt.t].concat(distract.map(k=>chosen[k].t)).map(cap),
    correct: cap(tgt.t),
    why: `“${cap(tgt.t)}” falls under ${CAT_NAME[target]}. Of the rest: ${others}.`,
    rules: CAT_RULES,
    mcInstr: `Which of these falls under the category of ${CAT_NAME[target].toUpperCase()}?`});
}
const CAT_PRINCIPLES = [
  {tier:1, q:'On which category do all the others depend, since they exist only in it or by affecting it?',
   correct:'Substance',
   ds:['Quality','Quantity','Relation'],
   why:'Substance alone exists in its own right; the nine other categories are accidents, which exist only in a substance (Categories 5; Metaphysics VII).'},
  {tier:1, once:'cat-count', q:'How many are the categories, and who set them out?',
   correct:'Ten — Aristotle, in the Categories',
   ds:['Five — Porphyry, in the Isagoge','Four — the causes','Three — the acts of the mind'],
   why:'Aristotle’s Categories names ten: substance, quantity, quality, relation, action, passion, when, where, position, and habit.'},
  {tier:1, q:'Which of these does NOT signify a substance?',
   correct:'white',
   ds:['man','horse','stone'],
   why:'“White” signifies a quality present in a subject; man, horse, and stone signify substances existing in themselves.'},
  {tier:1, q:'“He is shod” and “he is armed” fall under which category — what a man has on him, attached but not measuring him?',
   correct:'Habit (having)',
   ds:['Posture','Where','Passion'],
   why:'Habit (echein / habitus) is Aristotle’s tenth category — having shoes or arms on the body (Categories 4).'},
  {tier:2, q:'St Thomas derives quantity and quality thus: quantity belongs to a substance by reason of its ___, quality by reason of its ___.',
   correct:'matter; form',
   ds:['form; matter','end; agent','place; time'],
   why:'Commentary on the Metaphysics V, lect. 9: what belongs to a substance in its own right follows either from the matter (quantity) or from the form (quality).'},
  {tier:2, q:'Into which two categories does St Thomas divide what affects a substance from within — the doing and the being-done-to?',
   correct:'Action and passion',
   ds:['Quantity and quality','Place and time','Relation and habit'],
   why:'What affects the subject from within is action (in the doer) and passion (in the thing done to) — Metaphysics V, lect. 9.'},
  {tier:2, q:'Primary substance (this man) differs from secondary substance (man, animal) in that…',
   correct:'Primary substance is the individual thing; secondary substance is the species or genus it belongs to',
   ds:['Primary substance is the species; secondary the individual','Primary substance is an accident; secondary a nature','They differ in name only'],
   why:'Categories 5: an individual is a substance in the fullest sense (primary); the species and genera it falls under are substances in a secondary way.'},
  {tier:2, q:'Under which category do a “number” and a “line two feet long” fall?',
   correct:'Quantity',
   ds:['Quality','Relation','Substance'],
   why:'Number (discrete) and magnitude — line, surface, body (continuous) — are the species of quantity (Categories 6).'},
  {tier:3, q:'The most distinctive mark of substance, Aristotle says, is that…',
   correct:'One and the same substance can receive contraries — being at one time pale, at another dark',
   ds:['It has a contrary','It admits of more and less','It is always present in a subject'],
   why:'Categories 5: substance has no contrary and no degrees; its peculiar mark is that numerically one and the same substance receives contrary qualities through its own change.'},
  {tier:3, q:'Which category has for its whole being a “bearing toward another,” so that one term cannot be understood without the other?',
   correct:'Relation',
   ds:['Quality','Substance','Where'],
   why:'A relative term — double and half, master and slave, knowledge and the knowable — is defined entirely by its reference to something else (Categories 7).'},
  {tier:3, q:'The category of “posture” (situs), as in “he lies” or “he sits,” signifies…',
   correct:'How a thing’s parts are arranged in the place it occupies',
   ds:['The place in which a thing is','What a thing has on it','The time at which a thing acts'],
   why:'Posture (situs) differs from where (the place itself) and from habit: it is the arrangement of the parts — lying, sitting, standing (Metaphysics V, lect. 9).'},
  {tier:3, q:'How do the ten categories differ from the five predicables?',
   correct:'The categories are about real things themselves (first intentions); the predicables are about the mind’s ways of saying one thing of another (second intentions)',
   ds:['The categories are in the mind, the predicables in things','They are two names for the same ten kinds','The predicables concern bodies, the categories spirits'],
   why:'The categories divide real being. The predicables (genus, species, and the rest) are second intentions — ways the mind relates one term to another — though grounded in how things really are.'},
  {tier:3, q:'To which category does “knowledge,” taken as a stable state of the soul, belong?',
   correct:'Quality',
   ds:['Substance','Relation','Action'],
   why:'Knowledge and virtue are habits — the first species of quality, a lasting state (Categories 8). (Spoken of as “knowledge of the knowable,” it is also relative.)'}
];
function genCatPrincipleQ(d){
  let pool = CAT_PRINCIPLES.filter(x=> (d>=2 || x.tier===1) && oneShotFree(x));
  if(!pool.length) pool = CAT_PRINCIPLES.filter(oneShotFree);
  if(!pool.length) pool = CAT_PRINCIPLES;
  const it = recentPick(pool, x=>x.q);
  if(it.once) SESSION_ONESHOT.add(it.once);
  return mc4Make({ruleShow:'', prompt:'',
    options:[it.correct].concat(it.ds), correct:it.correct,
    why: it.why, rules: CAT_RULES, mcInstr: it.q});
}
function genCategoryQ(d){
  const r = Math.random();
  if(r<0.40) return genCatPrincipleQ(d);
  if(r<0.72) return genCatNameQ(d);
  return genCatWhichWordQ(d);
}

/* ================================================================
   SET XVI — THE ENTHYMEME
   A syllogism with a premise left unsaid. Two drills: supply the
   tacit premise (any premise that validly completes the argument
   is accepted — or “none”, when nothing can); and famous specimens,
   asking what is being taken for granted.
   ================================================================ */
const ENTH_FIG_OF = {'10':1,'00':2,'11':3,'01':4};   // key: majorMfirst + minorMfirst (1=yes)
function enthCandidates(givenSlot, givenType, givenMFirst, conclType){
  /* givenSlot: 0 = major given (missing minor), 1 = minor given (missing major).
     Returns every (type, orientation) for the missing premise that yields a
     valid traditional syllogism with the shown conclusion. */
  const out = [];
  for(const t of TYPES) for(const mFirst of [1,0]){
    const majT = givenSlot===0 ? givenType : t;
    const minT = givenSlot===0 ? t : givenType;
    const majM = givenSlot===0 ? givenMFirst : mFirst;
    const minM = givenSlot===0 ? mFirst : givenMFirst;
    const fig = ENTH_FIG_OF[String(majM)+String(minM)];
    const mood = majT + minT + conclType;
    if(isValidSyll(fig, mood)) out.push({t, mFirst, fig, mood, name: moodName(fig, mood)});
  }
  return out;
}
const ENTH_FRAMES = [
  (c,g)=>`${c}. After all, ${decap(g)}.`,
  (c,g)=>`${c} — for ${decap(g)}.`,
  (c,g)=>`${c}, since ${decap(g)}.`,
  (c,g)=>`${g}; therefore ${decap(c)}.`
];
function genEnthQ(d, mode){
  const wantNone = d>=2 && Math.random()<0.2;
  const useDom = d>=3 && Math.random()<0.4;
  let roles, dom = null;
  if(useDom){
    dom = rand(DOM_KEYS);
    const fams = KB_DOMAINS[dom].families || [Object.keys(KB_DOMAINS[dom].terms)];
    const keys = fams.length===1 ? fams[0]
      : (Math.random() < fams[0].length/(fams[0].length+fams[1].length) ? fams[0] : fams[1]);
    const names = sample(keys, 3);
    roles = {S:{kind:'g',s:names[0]}, M:{kind:'g',s:names[1]}, P:{kind:'g',s:names[2]}};
  } else roles = makeTerms(mode, null);
  let slot, gType, gMFirst, cType;
  if(wantNone){
    for(let i=0;i<400;i++){
      slot = Math.random()<0.5 ? 0 : 1;
      gType = rand(TYPES); gMFirst = Math.random()<0.5 ? 1 : 0; cType = rand(TYPES);
      if(enthCandidates(slot, gType, gMFirst, cType).length===0) break;
    }
  } else {
    const v = pickValid(d);
    slot = Math.random()<0.5 ? 0 : 1;                  // which premise is GIVEN
    gType = v.mood[slot];
    const pos = FIG_POS[v.fig][slot];
    gMFirst = pos[0]==='M' ? 1 : 0;
    cType = v.mood[2];
  }
  const cands = enthCandidates(slot, gType, gMFirst, cType);
  const X = slot===0 ? 'S' : 'P';                      // term of the missing premise
  const G = slot===0 ? 'P' : 'S';                      // term of the given premise
  const gTerms = gMFirst ? [roles.M, roles[G]] : [roles[G], roles.M];
  const givenText = propText(gType, gTerms[0], gTerms[1]);
  const conclText = propText(cType, roles.S, roles.P);
  const accepted = cands.map(c=>{
    const tms = c.mFirst ? [roles.M, roles[X]] : [roles[X], roles.M];
    return {t:c.t, S:tms[0], P:tms[1], name:c.name, fig:c.fig, mood:c.mood,
            text: propText(c.t, tms[0], tms[1])};
  });
  return {kind:'enth', none: accepted.length===0, accepted, dom, roles,
    order: slot===0 ? 'second' : 'first',              // missing minor = 2nd order; missing major = 1st
    missingRole: slot===0 ? 'minor' : 'major',
    givenText, conclText,
    prose: rand(ENTH_FRAMES)(conclText, givenText)};
}
function checkEnthAnswer(q, input){
  let s = input.toLowerCase().trim().replace(/[.!?]+$/,'').replace(/\s+/g,' ');
  s = s.replace(/^(therefore|so|thus|hence|because|for)[,:]?\s+/,'');
  if(/^(none|nothing|no premise( can complete it)?|cannot be completed|nothing completes( it)?|impossible|no valid premise)$/.test(s))
    return {parsed:true, none:true, correct:q.none};
  const p = parseAnswer(s);
  if(!p) return {parsed:false};
  if(p.none) return {parsed:true, none:true, correct:q.none};
  const su = normTerm(p.s), pu = normTerm(p.p);
  const hit = q.accepted.find(a=>a.t===p.c && termKey(a.S)===su && termKey(a.P)===pu);
  return {parsed:true, none:false, correct:!!hit, hit, parsedAns:p};
}
function enthMistake(q, res){
  if(q.none && res && !res.none)
    return 'Nothing can complete this one: no arrangement of the remaining term yields a valid mood with that conclusion. The strength of a conclusion can outrun any possible help — a particular or negative premise sets limits no addition overcomes.';
  if(!q.none && res && res.none)
    return `A premise does complete it: for instance, “${q.accepted[0].text}”. Join the middle term to the ${q.missingRole==='major'?'predicate':'subject'} of the conclusion and test the mood.`;
  if(res && res.parsedAns){
    const su = normTerm(res.parsedAns.s), pu = normTerm(res.parsedAns.p);
    const mKey = termKey(q.roles.M), xKey = termKey(q.missingRole==='major' ? q.roles.P : q.roles.S);
    const usedRight = (su===mKey&&pu===xKey)||(su===xKey&&pu===mKey);
    if(!usedRight)
      return `The tacit premise must join the middle term (“${termLabel(q.roles.M)}”) with the conclusion’s orphaned term (“${termLabel(q.missingRole==='major'?q.roles.P:q.roles.S)}”) — nothing else can bridge the gap.`;
    return 'The terms are right, but that premise makes no valid mood with the given premise and conclusion — check quantity and quality: the conclusion follows the weaker part, and the middle must be distributed once.';
  }
  return 'Ask: which term of the conclusion is left unsupported? The tacit premise must join it to the middle term, in a mood the rules allow.';
}
const ENTH_RULE_LINE = 'An enthymeme is a syllogism with a premise left unsaid — first-order when the major is hidden, second-order when the minor. The suppressed premise is where an argument hides its weakness: supply it, and look it in the face.';
const ENTH_POOL = [
  {tier:1, txt:'Socrates is mortal, for he is a man.',
   correct:'All men are mortal',
   traps:['All mortals are men','Some men are mortal','Socrates is a mortal man'],
   why:'A first-order enthymeme — the major lay hidden. Supplied, the argument is Barbara. “All mortals are men” is the illicit converse; “some men are mortal” is too weak to conclude.'},
  {tier:1, txt:'It must have rained — the streets are wet.',
   correct:'Whenever the streets are wet, it has rained',
   traps:['Whenever it rains, the streets are wet','The streets are usually dry','Rain always wets something'],
   why:'To conclude validly you need the suspicious premise, not the familiar one: “rain wets streets” is true but yields only the fallacy of affirming the consequent. The valid completion — “wet streets mean rain” — is refuted by every street-sweeper. Aristotle’s refutable sign.'},
  {tier:1, txt:'She has given birth, for she has milk.',
   correct:'Whoever has milk has given birth',
   traps:['Whoever has given birth has milk','Some mothers have milk','Milk is nourishing'],
   why:'Aristotle’s own example (Rhetoric II.27) of the necessary sign — the one kind of sign-argument that concludes of necessity. Note it needs the premise in this direction, not its converse.'},
  {tier:1, txt:'He cannot be trusted — he is a politician.',
   correct:'No politicians can be trusted',
   traps:['Some politicians cannot be trusted','No trustworthy man is in politics by choice','Politicians seek power'],
   why:'Valid only with the universal — and the universal is false, which is exactly why it stays unspoken. The particular “some politicians…” is true but concludes nothing about this one. The enthymeme’s cloak: tacit premises escape inspection.'},
  {tier:2, txt:'I think, therefore I am.',
   correct:'Whatever thinks, is',
   traps:['Whatever is, thinks','I think that I am','Whatever doubts, exists'],
   why:'Descartes’s cogito, completed as the schools would: the tacit major “whatever thinks, is.” The converse — “whatever is, thinks” — would people the world with minds.'},
  {tier:2, txt:'Dorieus has won a crown, for he has won at Olympia.',
   correct:'The prize at Olympia is a crown',
   traps:['Dorieus is a great athlete','Crowns are given for victories','Whoever wins a crown has won at Olympia'],
   why:'Aristotle’s example in Rhetoric I.2: the premise is dropped precisely because every hearer knows it — brevity, not concealment, is the honest enthymeme’s motive.'},
  {tier:2, txt:'He must be guilty — he fled the city.',
   correct:'Whoever flees is guilty',
   traps:['The guilty often flee','Some who flee are guilty','He had reason to flee'],
   why:'Valid only with the universal, and the universal is false: fear also makes the innocent run. “The guilty often flee” is the true premise — and it concludes nothing. The refutable sign again.'},
  {tier:2, txt:'The law is good, for it protects the poor.',
   correct:'Whatever protects the poor is good',
   traps:['All good laws protect the poor','The poor deserve protection','Some laws protect the poor'],
   why:'The needed premise runs from the mark to the goodness — its converse (“good laws protect the poor”) would leave the argument affirming the consequent.'},
  {tier:3, txt:'Whatever is moved is moved by another; so there must be a first mover.',
   correct:'There cannot be an infinite series of movers',
   traps:['Everything moves something else','Some mover is itself unmoved','Whatever moves another is itself moved'],
   why:'St Thomas’s first way, with its weight-bearing premise tacit: deny the impossibility of an infinite regress, and the stated premise concludes nothing. “Some mover is unmoved” merely restates the conclusion.'},
  {tier:3, txt:'Virtue is teachable, for it is knowledge.',
   correct:'All knowledge is teachable',
   traps:['All that is teachable is knowledge','Virtue is a kind of skill','Some knowledge is teachable'],
   why:'Socrates’s argument in the Meno. The tacit major is the battlefield: grant it, and Barbara concludes; the dialogue itself ends by doubting the stated minor instead.'},
  {tier:3, txt:'The soul is immortal, for it is ever in motion.',
   correct:'Whatever is ever in motion is immortal',
   traps:['Whatever is immortal is ever in motion','The soul moves the body','Some moving things are immortal'],
   why:'Plato’s proof in the Phaedrus (245c). The whole dispute lives in the suppressed premise — as so often, the argument’s visible part is the least contestable.'},
  {tier:3, txt:'Pleasure is not the good, for even fools attain it.',
   correct:'What even fools attain is not the good',
   traps:['Fools attain nothing good','The good is hard to attain','Some pleasures are foolish'],
   why:'An Aristotelian commonplace against hedonism. Supplied, the argument is valid — and the fight moves, where it belongs, to whether the tacit premise is true.'},
  {tier:1, txt:'The gods must be angry — the harvest has failed.',
   correct:'Whenever the harvest fails, the gods are angry',
   traps:['Whenever the gods are angry, the harvest fails','The gods send every misfortune upon men','Some failed harvests are sent by the gods'],
   why:'The refutable sign in an older dress. The familiar thought — that angry gods blight the fields — runs the wrong way and merely affirms the consequent; the premise that actually concludes, that every failed harvest bespeaks divine anger, is the suspicious one, and drought, blight, and pest refute it every season.'},
  {tier:1, txt:'The mushroom is safe to eat — the squirrels eat it.',
   correct:'Whatever the squirrels eat is safe for a man to eat',
   traps:['Whatever is safe for a man, the squirrels will eat','Squirrels know which mushrooms are poisonous','Some things the squirrels eat are safe for a man'],
   why:'Valid only through the universal — and the universal kills: squirrels stomach amanitas that fell a grown man. Nature keeps separate tables; the tacit premise merges them, and stays tacit for good reason.'},
  {tier:1, txt:'She must love the sea — she grew up on the coast.',
   correct:'Whoever grows up on the coast loves the sea',
   traps:['Whoever loves the sea grew up on the coast','She has lived within sight of the water all her life','Some who grow up on the coast love the sea'],
   why:'Only the universal concludes, and every fishing town that ever bred a landsman refutes it. The particular is true and powerless; the converse would conclude nothing of her at all.'},
  {tier:1, txt:'She will make a fine doctor — she took the top marks in her class.',
   correct:'Whoever takes the top marks will make a fine doctor',
   traps:['All fine doctors took the top marks in their class','Medicine demands years of hard study','Some who take the top marks make fine doctors'],
   why:'The argument stands only on the universal, and the universal is doubtful: examinations weigh the memory, not the bedside. Doubtful premises travel best unspoken — the enthymeme’s oldest service.'},
  {tier:2, txt:'A storm is coming — the swallows are flying low.',
   correct:'When the swallows fly low, a storm is coming',
   traps:['When a storm is coming, the swallows fly low','The swallows fly low to chase their food','Sometimes a storm follows when the swallows fly low'],
   why:'The countryman’s proverb supplies the major, dropped because every hearer owns it already — brevity, not concealment. And it holds often enough: before rain the heavy air keeps the insects low, and the swallows follow their dinner down.'},
  {tier:2, txt:'The old house must be soundly built — it has stood a hundred years.',
   correct:'Whatever has stood a hundred years was soundly built',
   traps:['Whatever is soundly built will stand a hundred years','They built better in the old days','Some houses that stand a hundred years were soundly built'],
   why:'The moderns call the trap survivorship: we walk past the houses that stood and never past those that fell. The familiar converse is idle here; the work is done by the hidden universal, and the fallen houses vote against it.'},
  {tier:2, txt:'The remedy cannot hurt you — it is all natural.',
   correct:'Nothing natural is harmful',
   traps:['Whatever is artificial is harmful','Nature heals more gently than art','Some natural things are harmless'],
   why:'Supply the major and the syllogism is Celarent — whereupon hemlock, nightshade, and the viper’s venom answer it at once. The appeal to nature persuades only while its premise stays out of sight.'},
  {tier:2, txt:'The book must be good — everyone is reading it.',
   correct:'Whatever everyone reads is good',
   traps:['Whatever is good, everyone reads','People read what pleases them','Some books that everyone reads are good'],
   why:'The argumentum ad populum in the enthymeme’s cloak. Spoken aloud, the major shrinks to its true size: the crowd’s custom is a fact about the crowd, not about the book.'},
  {tier:2, txt:'There was a frost overnight — the birdbath is iced over.',
   correct:'Whenever the birdbath is iced over, there has been a frost',
   traps:['Whenever there is a frost, the birdbath ices over','Ice is nothing but frozen water','Some frosts leave the birdbath iced over'],
   why:'The necessary sign, cousin to Aristotle’s milk: water takes ice only in freezing air, so the tacit premise holds of necessity and the enthymeme concludes as firmly as any syllogism. Note that the converse, true as it is, would conclude nothing — validity asks the direction, not merely the truth.'},
  {tier:2, txt:'The harvest will fail — the bees are vanishing from the orchard.',
   correct:'Where the bees fail, the harvest fails',
   traps:['Where the harvest fails, the bees have failed','The bees serve the blossom, and the blossom the fruit','Some harvests fail when the bees vanish'],
   why:'An honest enthymeme: the major is dropped because every orchardman knows it, and for orchards it is near enough true. Yet even here the universal quietly rides over its exceptions — wheat and the wind-wed grasses ask no bee’s leave.'},
  {tier:3, txt:'Running must strengthen the heart — the runners all have strong hearts.',
   correct:'What the runners have, their running gave them',
   traps:['Whoever runs has a strong heart','A strong heart makes a strong runner','Some runners strengthened their hearts by running'],
   why:'The tacit premise assigns the cause — and there lies the whole dispute, for perhaps strong hearts choose the sport rather than the sport make the heart. Correlation’s oldest ambush hides, as usual, in what is not said.'},
  {tier:3, txt:'The new remedy works — I took it, and the cold was gone within the week.',
   correct:'What the recovery followed, the recovery came from',
   traps:['What causes a recovery must come before it','Remedies are made and sold to cure','Some who take the remedy recover'],
   why:'Post hoc ergo propter hoc, stated at last as the missing major — and it refutes itself in the speaking, for colds die of themselves within the week. The premise persuades only so long as no one pronounces it.'},
  {tier:3, txt:'The machine cannot be creative — it only does what it is programmed to do.',
   correct:'Nothing that only does what it is programmed to do is creative',
   traps:['No machine has a soul','Men too only follow their given nature','Some things that only follow their programming are not creative'],
   why:'Lady Lovelace’s objection, completed. The entire question — whether following rules excludes creation — sits inside the tacit major, assumed rather than argued: the enthymeme as a hiding place for the very point at issue.'},
  {tier:3, txt:'Life must be common in the universe — the stars are without number.',
   correct:'What can happen among numberless stars happens often',
   traps:['Most stars are suns much like our own','The universe is far older than the earth','Some of the numberless stars may bear life'],
   why:'All the argument’s force hides in the tacit premise, and the premise begs a number no one holds: numberless chances multiplied by an unknown chance conclude nothing. Infinity times ignorance is ignorance.'}
];
function genEnthCuratedQ(d){
  const tiers = defTiers(d);
  const pool = ENTH_POOL.filter(x=>tiers.indexOf(x.tier)>=0);
  const it = recentPick(pool.length ? pool : ENTH_POOL, x=>x.txt);
  return mc4Make({prompt: it.txt.replace(/\.$/,''),
    options: [it.correct].concat(it.traps),
    correct: it.correct, why: it.why, rules: ENTH_RULE_LINE,
    mcInstr: 'What is being taken for granted?'});
}

/* ================================================================
   SET XXI — THE FALLACIES (St Thomas, De fallaciis; Aristotle, Soph. El.)
   The treatise's own order: what a disputation is, the four kinds of it,
   the five awkward places a sophist drives you to, and then the thirteen
   fallacies — each with the two causes De fallaciis insists on: what makes
   the argument LOOK sound (causa apparentiae) and what makes it FAIL
   (causa defectus). Technical terms are kept, always with their sense
   attached, so a young student meets the real vocabulary and can use it.
   ================================================================ */
const FAL_RULES = 'A fallacy is an argument that looks sound and is not. St Thomas: every fallacy has two causes — the cause of the appearance, which makes it look good, and the cause of the failure, which makes it break. Six fallacies come from the words (the language is ambiguous); seven come from outside the words (the language is fine, the thinking is not).';

/* ---- the four kinds of disputation (De fallaciis, c. 2) ---- */
const DISP_KINDS = {
  dem:{name:'Demonstrative (teaching)', gloss:'aimed at certain knowledge, from premises that are true and known in themselves — between a teacher and a learner.'},
  dial:{name:'Dialectical (weighing)',  gloss:'aimed at a reasoned opinion, from what is probable — what seems so to everyone, or to most, or to the wise.'},
  tent:{name:'Testing',                  gloss:'aimed at finding out whether someone really knows, by working from what seems true to him.'},
  soph:{name:'Sophistical (for show)',   gloss:'aimed at seeming wise and winning — from what looks true or probable but is not.'}
};
const DISP_ITEMS = [
  {tier:1, k:'dem',  t:'A teacher shows the class that the angles of a triangle add to two right angles, proving it step by step from what they already grant.'},
  {tier:1, k:'dial', t:'Two townspeople argue whether the new bridge should be built. Neither can prove it; each gives reasons a sensible person would allow.'},
  {tier:1, k:'tent', t:'A man says he knows what courage is. His friend asks him to say what it is, and keeps asking — not to teach him, but to find out whether he knows.'},
  {tier:1, k:'soph', t:'Whenever he is losing the argument, he changes what he claimed and says he meant something else all along.'},
  {tier:2, k:'dem',  t:'A geometry master proves that the base angles of an isosceles triangle are equal, and the class sees that it cannot be otherwise.'},
  {tier:2, k:'dial', t:'A council debates whether the harvest should be brought in early. Most farmers think so, and the most experienced think so — so it is taken as the better view.'},
  {tier:2, k:'tent', t:'An examiner asks a boy questions he can answer from his own opinions, to see how far his knowledge really goes.'},
  {tier:2, k:'soph', t:'He argues that since Socrates is an animal he must be a man — and the argument works only because nobody notices the rule it is standing on is false.'},
  {tier:3, k:'dial', t:'A physician weighs two treatments. Neither is certain, but one is favoured by nearly every physician of repute.'},
  {tier:3, k:'dem',  t:'From the definition of an even number it is shown that no odd number can be even — and the conclusion could not have been otherwise.'},
  {tier:3, k:'soph', t:'He wins by driving his opponent into saying something ungrammatical, and then laughs at the grammar.'},
  {tier:5, k:'tent', t:'She does not argue for any view of her own. She only draws out what he already believes, until he sees it will not hold together.'},
  {tier:5, k:'dial', t:'The question is whether a promise made under threat still binds. There are respected authorities on each side, and the argument weighs them.'}
];
function genFalDisputationQ(d){
  const tiers = defTiers(d);
  let pool = DISP_ITEMS.filter(x=>tiers.indexOf(x.tier)>=0);
  if(!pool.length) pool = DISP_ITEMS;
  const it = recentPick(pool, x=>x.t);
  const keys = ['dem','dial','tent','soph'];
  const others = keys.filter(k=>k!==it.k).map(k=>DISP_KINDS[k].name);
  return mc4Make({prompt:it.t, options:[DISP_KINDS[it.k].name].concat(others),
    correct: DISP_KINDS[it.k].name,
    ruleShow: d>=5 ? '' : 'The four kinds of disputation: DEMONSTRATIVE, which teaches from what is certain; DIALECTICAL, which weighs what is probable — what seems so to all, or to most, or to the wise; TESTING, which finds out whether a man knows; and SOPHISTICAL, which argues for show, from what only looks true.',
    why: `${DISP_KINDS[it.k].name} — ${DISP_KINDS[it.k].gloss}`,
    rules: FAL_RULES, mcInstr:'What kind of disputation is this?'});
}

/* ---- the five awkward places a sophist drives you to (De fallaciis, c. 3) ---- */
const META_KINDS = {
  red:{name:'To contradict yourself',      gloss:'you are made to take back, in the same argument, something you had just said — the fault St Thomas calls redargutio. It offends against metaphysics, which holds that contradictories cannot both be true.'},
  fal:{name:'To grant something plainly false', gloss:'you are forced into a statement anyone can see is untrue. It offends against natural science and mathematics, where we can check.'},
  ino:{name:'To grant something absurd',   gloss:'you are driven against what nearly everyone believes — which need not be false, but is hard to swallow. It offends against dialectic, which works from what people grant.'},
  sol:{name:'To say something ungrammatical', gloss:'you are manoeuvred into speaking badly. It offends against grammar.'},
  nug:{name:'To babble',                   gloss:'you are made to repeat the same thing uselessly — what St Thomas calls nugatio. It offends against rhetoric, whose business is to speak well.'}
};
const META_ITEMS = [
  {tier:1, k:'red', t:'You denied that you ate the raw meat. He argues: whatever you bought, you ate; you bought raw meat; so you ate raw meat.', w:'De fallaciis gives this one: the aim is to make you take back what you just denied.'},
  {tier:1, k:'fal', t:'Every dog can bark. The Dog Star is a dog. So the Dog Star can bark.', w:'De fallaciis gives this one: the aim is to force you into something plainly untrue.'},
  {tier:1, k:'ino', t:'Whoever can be beaten by someone is unhappy. A king can be beaten by an enemy. So the king is unhappy.', w:'De fallaciis gives this one: the aim is a conclusion nobody would accept, though it is not exactly false.'},
  {tier:1, k:'nug', t:'This nose is a snub nose. But snub means snub nose. So this is a nose nose snub.', w:'De fallaciis gives this one: the aim is to reduce you to useless repetition.'},
  {tier:2, k:'sol', t:'You know this. This is a stone. Therefore you know stone — which is not how the words go.', w:'De fallaciis gives this one: the aim is to trip you into bad grammar.'},
  {tier:2, k:'red', t:'You said the tax was too high. But you pay it every year without complaint. So you think it is about right after all.', w:'the aim is to make you retract what you asserted a moment ago.'},
  {tier:2, k:'fal', t:'Everything that shines is gold. The wet road shines. So the wet road is gold.', w:'the aim is a conclusion anyone can see is false.'},
  {tier:3, k:'ino', t:'Whoever gives away what he owns becomes poor. The generous man gives away what he owns. So the generous man is to be pitied.', w:'the aim is a conclusion that offends what everyone believes about generosity.'},
  {tier:3, k:'nug', t:'A wise man is a man who is wise. So a wise man is a man who is a man who is wise. So a wise man is a man who is a man who is a man who is wise.', w:'the aim is to set you repeating without adding anything.'},
  {tier:5, k:'red', t:'You granted that all promises must be kept. Now you say this one need not be. Which is it?', w:'the aim is to catch you conceding and denying the same thing in one argument.'}
];
function genFalMetaQ(d){
  const tiers = defTiers(d);
  let pool = META_ITEMS.filter(x=>tiers.indexOf(x.tier)>=0);
  if(!pool.length) pool = META_ITEMS;
  const it = recentPick(pool, x=>x.t);
  const keys = Object.keys(META_KINDS).filter(k=>k!==it.k);
  const others = sample(keys,3).map(k=>META_KINDS[k].name);
  return mc4Make({prompt:it.t, options:[META_KINDS[it.k].name].concat(others),
    correct: META_KINDS[it.k].name,
    ruleShow: d>=5 ? '' : 'A sophist wins by driving you somewhere awkward. St Thomas names five such places: to contradict yourself, to grant something plainly false, to grant something absurd, to say something ungrammatical, or to babble.',
    why: `${META_KINDS[it.k].name}: ${META_KINDS[it.k].gloss} Here, ${it.w}`,
    rules: FAL_RULES, mcInstr:'Where is the sophist trying to drive you?'});
}

/* ---- the thirteen, each with its two causes ----
   `side`: 'dict' = in the words (the ambiguity is in the language)
           'extra' = outside the words (the language is fine; the thinking is not)
   `app`  = cause of the appearance — why it looks sound
   `def`  = cause of the failure — why it breaks
   `ans`  = the move that answers it                                        */
const FAL_KINDS = {
  equiv:{side:'dict', mod:'equivocation — the name has not changed', name:'Equivocation — one word, two meanings',
    app:'One word is used, so it seems to name one thing.',
    def:'The one word is naming two different things.',
    ans:'Make him say the word twice, once for each premise, in different words.',
    doc:'EQUIVOCATION uses a single word in two senses. St Thomas’s own case: “dog” means the barking animal, the star, and a fish of the sea.'},
  amphi:{side:'dict', mod:'amphiboly, or syntactic ambiguity', name:'Amphiboly — one phrase, two readings',
    app:'One sentence is used, so it seems to make one claim.',
    def:'The grammar allows two readings, and the argument takes each in turn.',
    ans:'Rewrite the sentence so only one reading survives, then see if it still works.',
    doc:'AMPHIBOLY is ambiguity not in a word but in a whole phrase. St Thomas’s case: “the book of Aristotle” — the one he wrote, or the one he owned?'},
  accent:{side:'dict', mod:'the fallacy of accent, or of emphasis; quoting out of context is its near relation', name:'Accent — how the word is said',
    app:'The word looks the same on the page, so it seems to be one word.',
    def:'Said with a different stress it is a different word, or a different claim.',
    ans:'Put the stress back where the speaker put it, and read it again.',
    doc:'ACCENT turns on how a word is stressed or pronounced. Shift the stress and you have changed the claim without changing a letter.'},
  comp:{side:'dict', mod:'the fallacy of composition', name:'Composition — true of them one by one, claimed of them together',
    app:'It holds of each of them, so it looks as though it must hold of them all together.',
    def:'What holds of them one by one need not hold of them taken together: the joining itself can change the case.',
    ans:'Ask whether the claim is being made of them one by one, or of them all together.',
    doc:'COMPOSITION moves from what is true of things taken singly to what is claimed of them taken together. Each brick is light; the wall made of them is not. A seated man can walk, but he cannot walk while seated.'},
  divis:{side:'dict', mod:'the fallacy of division', name:'Division — true of them together, claimed of them one by one',
    app:'It holds of them taken together, so it looks as though it must hold of each of them.',
    def:'What holds of them together need not hold of each: it may belong to them precisely as joined.',
    ans:'Ask whether the claim was made of them together, or of each one by itself.',
    doc:'DIVISION is composition run backwards: from what is true of things taken together to what is claimed of each singly. Two and three are five taken together; two by itself is not five. The choir sings beautifully; not every singer in it does.'},
  figura:{side:'dict', mod:'the fallacy of grammatical analogy; where the words name different sorts of thing altogether it is what is now called a category mistake', name:'Figure of speech — words that look alike but work differently',
    app:'Two words share a shape, so they seem to work the same way.',
    def:'The likeness is only in the shape; the things named are of different sorts.',
    ans:'Ask what each word is actually naming. If the grammar runs parallel and the things do not, the grammar is doing the arguing.',
    doc:'FIGURE OF SPEECH — St Thomas calls it the likeness of a word — is when two expressions of the same shape are treated as of the same sort.'},
  accid:{side:'extra', mod:'the fallacy of accident — also called <em>a dicto simpliciter</em>, destroying the exception, or applying a general rule to a special case', name:'Accident — taking a passing feature for the thing itself',
    app:'The passing feature and the thing really do go together here.',
    def:'The passing feature and the thing are nevertheless not the same.',
    ans:'Ask whether the thing is taken as what it is, or under some feature it happens to wear.',
    doc:'ACCIDENT treats what is only incidentally true of a thing as if it belonged to the thing itself. St Thomas’s case: I know the man who is coming; Coriscus is the man coming; so I know Coriscus.'},
  secquid:{side:'extra', mod:'converse accident, or <em>secundum quid</em> — modern books usually call it hasty generalisation, or ignoring the qualification', name:'In a certain respect, taken flatly',
    app:'What is true in some respect looks like what is true without qualification.',
    def:'The qualification was doing real work, and it has been quietly dropped.',
    ans:'Put the qualification back in, out loud, and read the argument again.',
    doc:'IN A CERTAIN RESPECT, TAKEN FLATLY: something true in one way, or at one time, or for one person, is asserted without any limit at all.'},
  ignel:{side:'extra', mod:'ignoratio elenchi, the irrelevant conclusion, or missing the point; the straw man and the red herring are species of it', name:'Missing the point — proving something else',
    app:'A conclusion really has been proved.',
    def:'It is not the conclusion that was in dispute. A real refutation must contradict the very thing said, in the same respect, at the same time.',
    ans:'Say your own claim again, in the same words, and ask whether it has been touched.',
    doc:'MISSING THE POINT — the schools call it ignorance of the refutation — proves something, but not the thing that was denied.'},
  petitio:{side:'extra', mod:'begging the question, or circular reasoning — arguing in a circle', name:'Begging the question — assuming what you set out to prove',
    app:'The premise is granted and the conclusion follows from it perfectly well.',
    def:'Nobody who doubted the conclusion could have granted that premise. The argument has helped itself to the point.',
    ans:'Ask whether someone who doubted the conclusion could accept the premise.',
    doc:'BEGGING THE QUESTION puts the conclusion into the premises, usually in different words, so that the argument goes in a circle.'},
  noncausa:{side:'extra', mod:'false cause; where the mistake is that one thing merely came after another, <em>post hoc ergo propter hoc</em> — “correlation is not causation”', name:'Treating what is not the cause as the cause',
    app:'The two things really do go together.',
    def:'Going together is not the same as one producing the other.',
    ans:'Ask what else the two have in common, and whether the supposed cause can be removed while the effect stays.',
    doc:'NOT THE CAUSE AS CAUSE takes something that merely accompanies a thing for what produced it.'},
  conseq:{side:'extra', mod:'affirming the consequent when it wears an “if”; in the categorical form, the undistributed middle — modern logic counts them the same fault', name:'The consequent — arguing backwards along a one-way link',
    app:'The link really does hold one way, so it looks as though it must hold the other way too.',
    def:'The link runs one way only: the mark belongs to more things than the one named, so finding the mark does not find the thing.',
    ans:'Ask what else carries the same mark. If anything else does, the argument proves nothing.',
    doc:'THE CONSEQUENT supposes that a one-way link works both ways. Aristotle’s own cases: a man is called an adulterer because he dresses finely and walks abroad at night — but many men do that who are not adulterers; and a man in a fever is hot, yet a man who is hot need not have a fever. In “if” form it is the same fault: the ground is wet, so it must have rained.'},
  plures:{side:'extra', mod:'the loaded question, or the complex question', name:'Many questions asked as one',
    app:'One question is asked, so one answer seems to be called for.',
    def:'A second question is hidden inside it, and either answer concedes it.',
    ans:'Take the question apart and answer the hidden one first.',
    doc:'MANY QUESTIONS AS ONE hides a second question inside the first, so that yes and no both grant it.'}
};
const FAL_KEYS = Object.keys(FAL_KINDS);
const FAL_ITEMS = [
  {tier:1, k:'equiv',   t:'All banks are beside rivers. I keep my money in a bank. So I keep my money beside a river.'},
  {tier:2, k:'equiv',   t:'Nothing is lighter than a feather. This box is lighter than a feather. So this box is nothing.'},
  {tier:3, k:'equiv',   t:'Every dog can bark. The Dog Star is a dog. So the Dog Star can bark.'},
  {tier:5, k:'equiv',   t:'A good pen writes well. He has a good pen. So he writes well.'},
  {tier:1, k:'amphi',   t:'The notice says dogs must be carried on the escalator. I have no dog. So I may not use the escalator.'},
  {tier:2, k:'amphi',   t:'The oracle said that if he crossed the river he would destroy a great kingdom. He crossed. So the enemy kingdom was doomed.'},
  {tier:3, k:'amphi',   t:'He left the book of Aristotle to his son. Aristotle owned that book. So the son inherited nothing Aristotle wrote.'},
  {tier:5, k:'amphi',   t:'She saw the man with the telescope. So she was holding a telescope.'},
  {tier:1, k:'accent',  t:'I never said he stole the money — so I have shown he did not steal it.'},
  {tier:2, k:'accent',  t:'The paper is invalid. An invalid is a sick person. So the paper is unwell.'},
  {tier:3, k:'accent',  t:'A desert is a dry waste. He got his just desert. So he was given a dry waste.'},
  {tier:5, k:'accent',  t:'They will present the present at present. Three of the same word, so three of the same thing.'},
  {tier:1, k:'comp',    t:'Every brick in the wall is light. So the wall is light.'},
  {tier:2, k:'comp',    t:'Each of these stones can be lifted by one man. So all of them together can be lifted by one man.'},
  {tier:3, k:'comp',    t:'A man who is sitting can walk. So a man can walk while he is sitting.'},
  {tier:5, k:'comp',    t:'Each player on the team is excellent. So the team is excellent.'},
  {tier:1, k:'divis',   t:'This machine is heavy. So every part of it is heavy — including that one small screw.'},
  {tier:2, k:'divis',   t:'The choir sings beautifully. So each singer sings beautifully.'},
  {tier:3, k:'divis',   t:'Five is two and three. So five is two, and five is three.'},
  {tier:5, k:'divis',   t:'The army is enormous. So the soldiers in it are enormous.'},
  {tier:1, k:'figura',  t:'Nothing is better than lifelong happiness. A dry crust is better than nothing. So a dry crust is better than lifelong happiness.'},
  {tier:2, k:'figura',  t:'Food is healthy. A complexion is healthy. A body is healthy. So all three have health in them the same way.'},
  {tier:3, k:'figura',  t:'He is a false friend. So he is a friend — of the false sort.'},
  {tier:5, k:'figura',  t:'A large mouse is a large animal, since a mouse is an animal and this one is large.'},
  {tier:1, k:'accid',   t:'Cutting people with knives is a crime. Surgeons cut people with knives. So surgeons are criminals.'},
  {tier:2, k:'accid',   t:'You know your brother. That man in the mask is your brother. So you know that man in the mask.'},
  {tier:3, k:'accid',   t:'I know the man who is coming. Coriscus is the man who is coming. So I know Coriscus.'},
  {tier:5, k:'accid',   t:'The wine is good. This is the same wine, gone sour. So this is good.'},
  {tier:1, k:'secquid', t:'It is right to give people back what belongs to them. So it is right to hand a madman back his sword.'},
  {tier:2, k:'secquid', t:'Medicine is good for the sick. So medicine is good, and the more of it the better.'},
  {tier:3, k:'secquid', t:'He is a good runner. So he is a good man.'},
  {tier:5, k:'secquid', t:'The Ethiopian is white as to his teeth. So the Ethiopian is white.'},
  {tier:1, k:'ignel',   t:'“The road should not be built there.” “But roads are useful things, and we all use them.”'},
  {tier:2, k:'ignel',   t:'“The plan costs too much.” “So you want us to do nothing at all?”'},
  {tier:3, k:'ignel',   t:'She argued that the tax was unfair to farmers. He proved at length that taxes are necessary.'},
  {tier:5, k:'ignel',   t:'He was asked whether the boy had told the truth, and answered that the boy is a good boy.'},
  {tier:1, k:'petitio', t:'Everyone should learn Latin, because it is a subject everyone ought to study.'},
  {tier:2, k:'petitio', t:'The book is trustworthy, because it says so itself, and what it says is true.'},
  {tier:3, k:'petitio', t:'He must be innocent, for a man like that would never do such a thing.'},
  {tier:5, k:'petitio', t:'Free trade is best for the country, since the country does best when trade is free.'},
  {tier:1, k:'noncausa',t:'He wore that coat both times we won. So the coat wins matches.'},
  {tier:2, k:'noncausa',t:'More ice cream is sold in the months when more people drown. So ice cream causes drowning.'},
  {tier:3, k:'noncausa',t:'The cock crows and then the sun rises. So the cock’s crowing brings up the sun.'},
  {tier:5, k:'noncausa',t:'Since the new master came the harvest has been poor. So the master has spoiled the harvest.'},
  {tier:1, k:'conseq',  t:'Every thief wants money. This man wants money. So he is a thief.'},
  {tier:2, k:'conseq',  t:'If it has rained, the ground is wet. The ground is wet. So it has rained.'},
  {tier:3, k:'conseq',  t:'If he were guilty he would look nervous. He looks nervous. So he is guilty.'},
  {tier:5, k:'conseq',  t:'Every oak has roots. This tree has roots. So this tree is an oak.'},
  {tier:1, k:'plures',  t:'Have you stopped cheating at cards? Answer yes or no.'},
  {tier:2, k:'plures',  t:'Why is this plan so badly thought out?'},
  {tier:3, k:'plures',  t:'Do you still keep the money you took? Yes or no.'},
  {tier:5, k:'plures',  t:'Are these two things, a man and a horse, one thing or two? Answer for both at once.'}
];

/* Distractors are drawn from the same side of the division at the higher
   levels, so the student must first settle "in the words, or outside them?" */
/* The schools' name and the modern one, always together: a student should be
   able to read either book afterwards. */
function falDoc(K){ return `${K.doc} <em>Modern books call this ${K.mod}.</em>`; }
function falDistractors(k, d, n){
  const side = FAL_KINDS[k].side;
  const same = FAL_KEYS.filter(x=>x!==k && FAL_KINDS[x].side===side);
  const any  = FAL_KEYS.filter(x=>x!==k);
  const pool = (d>=3 && same.length>=n) ? same : any;
  return sample(pool, n);
}
function falPick(d){
  const tiers = defTiers(d);
  let pool = FAL_ITEMS.filter(x=>tiers.indexOf(x.tier)>=0);
  if(!pool.length) pool = FAL_ITEMS;
  return recentPick(pool, x=>x.t);
}
const SIDE_WORD = {dict:'in the words — the language itself is slippery',
                   extra:'outside the words — the language is fine; the thinking is not'};
function genFalNameQ(d){
  const it = falPick(d), K = FAL_KINDS[it.k];
  const others = falDistractors(it.k, d, 3).map(x=>FAL_KINDS[x].name);
  return mc4Make({prompt:it.t, options:[K.name].concat(others), correct:K.name,
    ruleShow: d>=5 ? '' : 'Six fallacies come from the words: equivocation, amphiboly, accent, composition, division, figure of speech. Seven come from outside the words: accident; in a certain respect taken flatly; missing the point; begging the question; not the cause as cause; the consequent; many questions as one.',
    why: `${falDoc(K)} It is a fallacy ${SIDE_WORD[K.side]}. It looks sound because: ${K.app} It fails because: ${K.def}`,
    rules: FAL_RULES, mcInstr:'Which fallacy is this?'});
}
function genFalSideQ(d){
  const it = falPick(d), K = FAL_KINDS[it.k];
  const inW = 'In the words — the fault is in the language itself';
  const outW = 'Outside the words — the language is fine; the thinking is not';
  const opts = [inW, outW,
    'Neither — the argument is sound',
    'Both at once — the words and the thinking fail together'];
  return mc4Make({prompt:it.t, options:opts, correct: K.side==='dict' ? inW : outW,
    ruleShow: d>=5 ? '' : 'St Thomas divides every fallacy in two. If what makes the argument look good comes from the WORD — one sound taken for one thing — the fallacy is in the words. If it comes from the THING — two things that agree somehow taken as simply one — it is outside the words.',
    why: `${K.name.split(' — ')[0]} — and that is a fallacy ${SIDE_WORD[K.side]}. What makes it look sound: ${K.app}`,
    rules: FAL_RULES, mcInstr:'Does this fallacy come from the words, or from outside them?'});
}
function genFalAppearQ(d){
  const it = falPick(d), K = FAL_KINDS[it.k];
  const others = falDistractors(it.k, d, 3).map(x=>FAL_KINDS[x].app);
  return mc4Make({prompt:it.t, options:[K.app].concat(others), correct:K.app,
    ruleShow: d>=5 ? '' : 'Every fallacy has a CAUSE OF THE APPEARANCE — what makes it look sound, and moves a person to accept it. Name that, and you understand why the trick works.',
    why: `${falDoc(K)} And what makes it fail is something else again: ${K.def}`,
    rules: FAL_RULES, mcInstr:'What makes this argument LOOK sound?'});
}
function genFalDefectQ(d){
  const it = falPick(d), K = FAL_KINDS[it.k];
  const others = falDistractors(it.k, d, 3).map(x=>FAL_KINDS[x].def);
  return mc4Make({prompt:it.t, options:[K.def].concat(others), correct:K.def,
    ruleShow: d>=5 ? '' : 'Every fallacy also has a CAUSE OF THE FAILURE — what actually destroys the argument. It is never the same as what made it look good; that is exactly why a man is deceived.',
    why: `${falDoc(K)} What made it look sound in the first place was something else: ${K.app}`,
    rules: FAL_RULES, mcInstr:'What makes this argument FAIL?'});
}
function genFalAnswerQ(d){
  const it = falPick(d), K = FAL_KINDS[it.k];
  const others = falDistractors(it.k, d, 3).map(x=>FAL_KINDS[x].ans);
  return mc4Make({prompt:it.t, options:[K.ans].concat(others), correct:K.ans,
    ruleShow: d>=5 ? '' : '',
    why: `${falDoc(K)} It fails because: ${K.def}`,
    rules: FAL_RULES, mcInstr:'How do you answer this argument?'});
}

/* ---- the hidden principle an argument rides on (De fallaciis, c. 2 and c. 4) ---- */
const FAL_PRINCIPLES = [
  {tier:1, t:'Socrates is an animal, therefore Socrates is a man.',
   correct:'Whatever the wider kind is said of, the narrower kind is said of too',
   ds:['Whatever the narrower kind is said of, the wider kind is said of too',
       'Whatever is true of a part is true of the whole',
       'Whatever is true at one time is true at every time'],
   why:'St Thomas’s own pair. The good argument — Socrates is a man, therefore an animal — depends on a true rule: whatever the species is said of, the genus is said of. Reverse it and you get a false rule, and this argument depends on it.'},
  {tier:1, t:'Socrates is a man, therefore Socrates is an animal.',
   correct:'Whatever the narrower kind is said of, the wider kind is said of too',
   ds:['Whatever the wider kind is said of, the narrower kind is said of too',
       'Whatever is true of the whole is true of each part',
       'Whatever looks alike is alike'],
   why:'This one depends on a rule that is simply true, which is why the argument holds. Every man really is an animal.'},
  {tier:2, t:'I know the man who is coming. Coriscus is the man who is coming. So I know Coriscus.',
   correct:'Whatever is true of a passing feature is true of the thing that has it',
   ds:['Whatever is true of the thing is true of its passing features',
       'Whatever the wider kind is said of, the narrower kind is said of too',
       'Whatever is said of many things is said of each'],
   why:'St Thomas’s worked case. The rule is false, because a thing and a feature it happens to wear are not the same. It looks true because here they do go together.'},
  {tier:2, t:'The wall is white. So every part of the wall is white.',
   correct:'Whatever is true of the whole is true of each part',
   ds:['Whatever is true of each part is true of the whole',
       'Whatever is true of a passing feature is true of the thing',
       'Whatever is said at one time is said at all times'],
   why:'This rule fails whenever the property belonged to the whole precisely as a whole. Sometimes it happens to hold; it never holds necessarily.'},
  {tier:3, t:'Every brick is light, so the wall is light.',
   correct:'Whatever is true of each part is true of the whole',
   ds:['Whatever is true of the whole is true of each part',
       'Whatever follows from a thing belongs to the thing',
       'Whatever two things go together, one causes the other'],
   why:'Weight adds up; lightness does not survive the addition. The rule looks true because many properties do carry from parts to whole — colour often does.'},
  {tier:3, t:'The ground is wet, so it has rained.',
   correct:'Whatever produces an effect is the only thing that could have produced it',
   ds:['Whatever follows from a cause must have had that cause',
       'Whatever is true of the whole is true of each part',
       'Whatever is granted once is granted always'],
   why:'The rule is false: many causes can produce one effect. It looks true because rain is the usual cause, and the usual cause is easy to mistake for the only one.'},
  {tier:5, t:'They always go together, so one of them makes the other.',
   correct:'Whatever two things go together, one of them causes the other',
   ds:['Whatever causes a thing goes with it',
       'Whatever is true of a part is true of the whole',
       'Whatever the wider kind is said of, the narrower is said of'],
   why:'Going together is not producing. Both may follow from some third thing, as ice cream and drowning both follow the hot weather.'}
];
function genFalPrincipleQ(d){
  const tiers = defTiers(d);
  let pool = FAL_PRINCIPLES.filter(x=>tiers.indexOf(x.tier)>=0);
  if(!pool.length) pool = FAL_PRINCIPLES;
  const it = recentPick(pool, x=>x.t);
  return mc4Make({prompt:it.t, options:[it.correct].concat(it.ds), correct:it.correct,
    ruleShow: d>=5 ? '' : 'Every argument depends on a rule, usually unspoken. A good argument depends on a true one; a sophistical argument depends on one that is false but looks true. Find the rule and you have found the fault.',
    why: it.why, rules: FAL_RULES,
    mcInstr:'What unspoken rule does this argument depend on?'});
}

/* ---- the doctrine itself ---- */
const FAL_DOCTRINE = [
  {tier:1, q:'What does St Thomas say a fallacy always has two of?',
   correct:'Two causes — one that makes it look sound, one that makes it fail',
   ds:['Two premises, both of them false','Two conclusions that contradict each other','Two words that mean the same thing'],
   why:'The cause of the appearance makes the argument look good; the cause of the failure breaks it. A man is deceived by the two together — something appears, and is not.'},
  {tier:1, q:'“Sophistical” comes from a word meaning what?',
   correct:'Apparent wisdom — wisdom that only looks like wisdom',
   ds:['Careful reasoning','A short argument','Speech before a crowd'],
   why:'St Thomas: sophistica quasi apparens sapientia. The sophist argues for glory, wanting to seem wise.'},
  {tier:1, q:'A disputation, says St Thomas, is an act of one person toward another — for what purpose?',
   correct:'To show something proposed',
   ds:['To display a form of argument as an example','To pass the time agreeably','To discover a new science'],
   why:'That last part marks a real disputation off from an argument given merely to illustrate a pattern. A disputation is going somewhere.'},
  {tier:2, q:'What does the tradition mean by calling a premise “probable”?',
   correct:'It seems so to everyone, or to most people, or to the wise',
   ds:['It is more likely than not to be true','It has been proved, but only roughly','It is what one particular expert happens to think'],
   why:'St Thomas gives the definition exactly: probabilia are what seem so to all, or to most, or to the wise — and among the wise, to all of them or the most eminent. It is what a reasonable person may be asked to grant, not a guess about odds.'},
  {tier:2, q:'Why are there exactly six fallacies in the words?',
   correct:'Because ambiguity is threefold, and two of the three divide again into word and phrase',
   ds:['Because Aristotle happened to find six of them','Because there are six parts of speech','Because six is the number of the true loci'],
   why:'Actual ambiguity gives equivocation (in a word) and amphiboly (in a phrase); potential ambiguity gives accent (in a word) and composition and division (in a phrase); apparent ambiguity gives figure of speech. Two, plus three, plus one — six, and not by accident.'},
  {tier:2, q:'A real refutation must contradict the very thing said — and in what further way?',
   correct:'In the same respect and at the same time',
   ds:['In the same words the speaker used','Before the speaker has finished','In front of the same audience'],
   why:'Miss any of that and you have refuted something nobody claimed. This is the fault called missing the point, or ignorance of the refutation.'},
  {tier:3, q:'When a man reasons badly by himself, St Thomas says it always happens how?',
   correct:'Beside his intention — nobody sets out to deceive himself',
   ds:['On purpose, for the pleasure of it','Because he has not read Aristotle','Because his memory has failed him'],
   why:'It is the reason the study of fallacies is aimed first at your own arguments. Reasoning badly to someone else may be deliberate; reasoning badly to yourself never is.'},
  {tier:2, q:'A modern book calls an argument “affirming the consequent.” Which of the thirteen is that?',
   correct:'The consequent — arguing backwards along a one-way link',
   ds:['Not the cause as cause','Begging the question','Accident'],
   why:'The same fault under two names. Where the argument has no “if” in it — every thief wants money, this man wants money, so he is a thief — modern books call it the undistributed middle instead, but it is the one fallacy: a link that runs one way is read as running both.'},
  {tier:2, q:'A modern book calls an argument a “straw man.” Which of the thirteen is it a species of?',
   correct:'Missing the point — proving something else',
   ds:['Equivocation','Many questions asked as one','Composition'],
   why:'Ignoratio elenchi covers every case of proving something other than what was in dispute. The straw man distorts the claim first and then refutes the distortion; the red herring simply changes the subject. Both are the same fault underneath.'},
  {tier:3, q:'What makes an argument sophistical, if both its premises may be true?',
   correct:'It depends on a hidden rule that is false but looks true',
   ds:['It is stated too quickly to follow','Its conclusion is false','It uses technical words'],
   why:'St Thomas’s example: “Socrates is an animal, therefore a man” has a true premise and a false conclusion — because the rule it rides on, that whatever the genus is said of the species is said of, is false.'},
  {tier:3, q:'The sophist drives you into five different awkward places. Why five, and why those?',
   correct:'Each offends a different science, so that he appears to know them all',
   ds:['They are the five parts of a syllogism','They are the five predicables applied to argument','They are the five ways a premise can be false'],
   why:'Contradiction offends metaphysics; plain falsehood offends natural science and mathematics; the absurd offends dialectic; bad grammar offends grammar; babbling offends rhetoric. Dragging you through all five, the sophist looks universally wise.'},
  {tier:5, q:'What is the difference between something false and something merely unbelievable?',
   correct:'Everything false is unbelievable, but some unbelievable things are true',
   ds:['They are two names for the same thing','Everything unbelievable is false, but not the reverse','The false offends grammar; the unbelievable offends rhetoric'],
   why:'St Thomas’s own distinction, with his own example: that a star is bigger than the earth is against common opinion, and true. The sophist can win by driving you to the merely unbelievable.'}
];
function genFalDoctrineQ(d){
  const tiers = defTiers(d);
  let pool = FAL_DOCTRINE.filter(x=>tiers.indexOf(x.tier)>=0);
  if(!pool.length) pool = FAL_DOCTRINE;
  const it = recentPick(pool, x=>x.q);
  return mc4Make({ruleShow:'', prompt:'', options:[it.correct].concat(it.ds),
    correct:it.correct, why:it.why, rules:FAL_RULES, mcInstr:it.q});
}
const FAL_QTYPES = ['name','side','appear','defect','answer','principle','doctrine','disp','meta'];
let FAL_RECENT_Q = [];
function genFallacyQ(d){
  let pool = FAL_QTYPES.filter(t=>FAL_RECENT_Q.indexOf(t)<0);
  if(!pool.length) pool = FAL_QTYPES.slice();
  /* the naming and the two causes are the heart of it, and are favoured */
  const w = {name:3, appear:2.5, defect:2.5, side:2, answer:1.5, principle:1.5, doctrine:1.5, disp:1, meta:1.5};
  const tot = pool.reduce((a,t)=>a+(w[t]||1),0);
  let r = Math.random()*tot, pick = pool[pool.length-1];
  for(const t of pool){ r -= (w[t]||1); if(r<=0){ pick = t; break; } }
  FAL_RECENT_Q.push(pick); while(FAL_RECENT_Q.length>2) FAL_RECENT_Q.shift();
  if(pick==='name')      return genFalNameQ(d);
  if(pick==='side')      return genFalSideQ(d);
  if(pick==='appear')    return genFalAppearQ(d);
  if(pick==='defect')    return genFalDefectQ(d);
  if(pick==='answer')    return genFalAnswerQ(d);
  if(pick==='principle') return genFalPrincipleQ(d);
  if(pick==='disp')      return genFalDisputationQ(d);
  if(pick==='meta')      return genFalMetaQ(d);
  return genFalDoctrineQ(d);
}

/* ================================================================
   SET XX — DIALECTIC (Aristotle, Topics; the scholastic disputation)
   Reasoning not from what is demonstrated but from what is granted —
   what Aristotle calls the probable, and what may reasonably be asked
   of an opponent. Three things are drilled: the TOPIC an argument runs
   on, the STANDING of a premise offered, and the RESPONSE an objection
   calls for — the distinguo of the disputed question.
   ================================================================ */
const DIAL_RULES = 'Dialectic reasons from what is probable — what seems so to everyone, or to most, or to the wise — and reaches a reasoned opinion, not a proof. Its instrument is the topic (locus): a standing relation, such as genus to species or whole to part, from which an argument may be drawn. Its practice is the disputation, where one puts a case and another answers.';

/* ---- the topics: standing places an argument may be drawn from ---- */
/* Each topic carries its MAXIM — the governing proposition the argument
   depends on. The schools called it the maxima propositio. A dialectical
   argument holds because its maxim is true; a sophistical one only seems to
   hold because its maxim is false and looks true. Same machinery, both ways. */
const TOPICS = {
  def:{name:'From the definition', gloss:'what the thing is is used to settle what belongs to it.',
       max:'Whatever fits the definition fits the thing defined, and whatever does not, does not.',
       use:'when you must show that something is, or is not, of a certain kind'},
  gen:{name:'From the wider kind (genus)', gloss:'what holds of the whole family is brought down to the member.',
       max:'Whatever belongs to the whole family belongs to each kind within it.',
       use:'when you must show that something has a feature its whole family has'},
  spec:{name:'From the narrower kind (species)', gloss:'what holds of the kind is carried up to the family, or applied to one of its members.',
       max:'Whatever is said of the kind is said of the individuals under it.',
       use:'when you must show that some individual has what its kind has'},
  prop:{name:'From the property', gloss:'a mark that belongs to the thing alone and always is used to identify or exclude it.',
       max:'Where the property is, the thing is; where it is absent, the thing is absent.',
       use:'when you must show that this is, or is not, the very thing'},
  opp:{name:'From opposites', gloss:'what holds of one of two opposites is used to settle the other.',
       max:'What holds of one opposite, the contrary holds of the other.',
       use:'when you must praise or blame something and its contrary is easier to judge'},
  more:{name:'From the more and the less', gloss:'if it holds where it is less likely, it holds where it is more likely — or the reverse.',
       max:'If it holds where it is less to be expected, it holds all the more where it is more to be expected.',
       use:'when you have an easier case in hand than the one in dispute'},
  like:{name:'From likeness', gloss:'what holds in one case is carried to a case that resembles it in the relevant way.',
        max:'What holds in one case holds in a case like it, so far as they are alike.',
        use:'when the case in dispute is unfamiliar but resembles a familiar one'},
  whole:{name:'From the whole and its parts', gloss:'what holds of the whole, or of all the parts together, is used to settle the rest.',
         max:'What holds of the whole holds of the parts, when it holds of the whole by reason of the parts.',
         use:'when the thing in dispute is a part of something already agreed'},
  cause:{name:'From the cause and the end', gloss:'what a thing comes from, or what it is for, is used to settle what it is or ought to be.',
         max:'Where the cause is, the effect follows; and a thing is judged by what it is for.',
         use:'when you must show why something is so, or whether it is any good'},
  conj:{name:'From words of the same root (conjugates)', gloss:'what holds of one form of a word holds of its kin — just, justice, justly.',
        max:'What holds of the thing holds of what is named from it: if justice is good, acting justly is good.',
        use:'when the dispute is over one form of a word and another form is already granted'},
  nom:{name:'From the name', gloss:'what the word itself means, or where it came from, is used to settle the question.',
       max:'What the name means tells something of what the thing is — though not always, and never on its own.',
       use:'when the word carries its meaning on its face, or has been misunderstood'},
  auth:{name:'From authority', gloss:'the judgement of those who know is offered as a reason — the weakest of the topics, says the tradition, though not nothing.',
        max:'What those who know a subject agree on may be granted, until better reason appears.',
        use:'when the matter is beyond your own competence and the learned agree'}
};
const TOPIC_KEYS = Object.keys(TOPICS);
const DIAL_TOPICS = [
  {tier:1, k:'gen',  t:'Every bird has feathers, and a robin is a bird — so a robin has feathers.'},
  {tier:1, k:'def',  t:'A widow is a woman whose husband has died. She has never married. So she is no widow.'},
  {tier:1, k:'opp',  t:'If courage is to be praised, then cowardice is to be blamed.'},
  {tier:1, k:'whole',t:'If the whole roof is sound, the tiles over the kitchen are sound too.'},
  {tier:1, k:'prop', t:'Only a bell rings when struck like that. This rings when struck like that. So it is a bell.'},
  {tier:2, k:'more', t:'If he will not lend a penny to his brother, he will hardly lend a pound to a stranger.'},
  {tier:2, k:'like', t:'A city is governed as a household is: badly, if nobody is in charge of the whole.'},
  {tier:2, k:'spec',t:'Justice is a virtue, and every virtue is worth having. So justice is worth having.'},
  {tier:2, k:'auth',t:'Every physician of standing holds that the fever must be let run. So it should be let run.'},
  {tier:2, k:'def',  t:'A definition must fit exactly what it defines. This one fits more. So it is no definition.'},
  {tier:3, k:'more', t:'If even the innocent are punished under this law, how much more the guilty who are merely suspected.'},
  {tier:3, k:'opp',  t:'If health is to be sought, sickness is to be avoided — they are contraries, and the one follows from the other.'},
  {tier:3, k:'like', t:'A ship needs one pilot, not a committee of them. So too, they argued, does a state.'},
  {tier:3, k:'whole',t:'Every part of the argument has been granted. So the argument as a whole has been granted.'},
  {tier:5, k:'prop',t:'Whatever laughs is a man, and only man laughs. He laughs. So he is a man.'},
  {tier:5, k:'gen', t:'No plant has sensation, and moss is a plant. So moss has no sensation.'},
  {tier:5, k:'auth',t:'Aristotle says it, and on such a question there is no better judge. So it is to be held, until better reason appears.'},
  {tier:1, k:'cause',t:'A knife is for cutting. This one will not cut. So it is a poor knife.'},
  {tier:1, k:'conj', t:'Justice is good. So acting justly is good, and the just man is good.'},
  {tier:2, k:'nom',  t:'A “manuscript” means something written by hand. This was printed. So it is no manuscript.'},
  {tier:2, k:'cause',t:'Damp air rusts iron. This gate has stood in damp air for years. So we should expect it to be rusted.'},
  {tier:2, k:'conj', t:'Courage is worth having. So a courageous act is worth doing.'},
  {tier:3, k:'cause',t:'A law is made for the common good. This one serves only the lawmaker. So it falls short of what a law should be.'},
  {tier:3, k:'nom',  t:'“Philosopher” means a lover of wisdom. He hates to be corrected. So he is a philosopher in name only.'},
  {tier:5, k:'conj', t:'If health is to be sought, then the healthy life is to be led, and healthy things are to be chosen.'}
];
/* Given a thesis, which place will supply an argument? This is what the schools
   called the science of FINDING (inventio), and it is what the Topics is for. */
const INVENT_ITEMS = [
  {tier:1, k:'opp',  t:'You must show that laziness is to be blamed — and everyone already grants that hard work is to be praised.'},
  {tier:1, k:'gen',  t:'You must show that this oak will one day die — and everyone grants that every living thing dies.'},
  {tier:1, k:'def',  t:'You must show that this shape is not a square — and you have its definition in hand.'},
  {tier:1, k:'cause',t:'You must show that this tool is a bad one — and everyone agrees what the tool is for.'},
  {tier:2, k:'conj', t:'You must show that acting bravely is worth doing — and your opponent has already granted that bravery is worth having.'},
  {tier:2, k:'more', t:'You must show that a rich man should give to the poor — and your hearers already grant that a poor man should.'},
  {tier:2, k:'like', t:'You must show that a state needs one person at its head — and your hearers know that a ship needs one pilot.'},
  {tier:2, k:'whole',t:'You must show that this chapter is worth reading — and everyone grants that the book is worth reading.'},
  {tier:3, k:'prop', t:'You must show that this creature is a man — and you have marks that belong to men alone and always.'},
  {tier:3, k:'auth', t:'You must show that the fever should be let run — and you are no physician, but every physician of standing says so.'},
  {tier:3, k:'spec', t:'You must show that this particular act was unjust — and it has already been granted that acts of that kind are unjust.'},
  {tier:5, k:'nom',  t:'You must show that what he calls a democracy is nothing of the sort — and the word itself says rule by the people.'},
  {tier:5, k:'opp',  t:'You must show that peace would mend our troubles — and it is agreed that the war caused them.'},
  {tier:5, k:'cause',t:'You must show that this argument is worthless — and you can show what produced it was a wish to win, not a wish for truth.'}
];
function genDialInventQ(d){
  const tiers = defTiers(d);
  let pool = INVENT_ITEMS.filter(x=>tiers.indexOf(x.tier)>=0);
  if(!pool.length) pool = INVENT_ITEMS;
  const it = recentPick(pool, x=>x.t);
  const others = sample(TOPIC_KEYS.filter(k=>k!==it.k), 3).map(k=>TOPICS[k].name);
  return mc4Make({prompt:it.t, options:[TOPICS[it.k].name].concat(others),
    correct:TOPICS[it.k].name,
    ruleShow: d>=5 ? '' : 'The Topics is a book about FINDING, not about judging. Given something you must show, a topic tells you where to go and look for an argument. Ask what you already have in hand, and which place will turn it into a reason.',
    why: `Go to ${TOPICS[it.k].name.toLowerCase()} — ${TOPICS[it.k].use}. The rule that does the work: ${TOPICS[it.k].max}`,
    rules: DIAL_RULES, mcInstr:'Where will you go to find an argument?'});
}
/* The maxim of a topic and the hidden rule of a fallacy are one machinery:
   a true maxim gives an argument its force, a false one only its appearance. */
function genDialMaximQ(d){
  const tiers = defTiers(d);
  let pool = DIAL_TOPICS.filter(x=>tiers.indexOf(x.tier)>=0);
  if(!pool.length) pool = DIAL_TOPICS;
  const it = recentPick(pool, x=>x.t);
  const others = sample(TOPIC_KEYS.filter(k=>k!==it.k), 3).map(k=>TOPICS[k].max);
  return mc4Make({prompt:it.t, options:[TOPICS[it.k].max].concat(others),
    correct:TOPICS[it.k].max,
    ruleShow: d>=5 ? '' : 'Every topic carries a MAXIM — the governing proposition an argument drawn from that place depends on. The schools called it the maxima propositio. When the maxim is true the argument holds; when it is false but looks true, you have a fallacy instead.',
    why: `This argument is drawn ${TOPICS[it.k].name.toLowerCase()}, and that place carries this maxim. Notice that a fallacy works the same way, only backwards: it depends on a maxim that is false and looks true.`,
    rules: DIAL_RULES, mcInstr:'Which maxim does this argument depend on?'});
}
function genDialTopicQ(d){
  const tiers = defTiers(d);
  let pool = DIAL_TOPICS.filter(x=>tiers.indexOf(x.tier)>=0);
  if(!pool.length) pool = DIAL_TOPICS;
  const it = recentPick(pool, x=>x.t);
  const others = sample(TOPIC_KEYS.filter(k=>k!==it.k), 3).map(k=>TOPICS[k].name);
  return mc4Make({prompt:it.t, options:[TOPICS[it.k].name].concat(others),
    correct:TOPICS[it.k].name,
    ruleShow: d>=5 ? '' : 'A topic (locus) is a standing place an argument can be drawn from: the definition, the wider kind, the narrower kind, the property, opposites, the more and the less, likeness, whole and parts, or authority. Name the topic and you can see at once what would answer the argument.',
    why: `${TOPICS[it.k].name}: ${TOPICS[it.k].gloss}`,
    rules: DIAL_RULES, mcInstr:'From which topic is this argument drawn?'});
}

/* ---- the standing of a premise: may I ask my opponent to grant it? ---- */
const ENDOX = {
  dem:{short:'Demonstrable', name:'Demonstrable — it can be proved, and need not be merely granted',
       gloss:'a matter of science: it follows from what cannot be otherwise, so it is not the business of dialectic at all.'},
  all:{short:'Granted by everyone', name:'Granted by everyone — you may simply assume it',
       gloss:'probable in the fullest sense: it seems so to all, and an opponent who denied it would be thought perverse.'},
  wise:{short:'Granted by the learned', name:'Granted by the learned, though not by everyone',
       gloss:'still probable, and still usable — but you must expect to defend it, since the many do not hold it.'},
  one:{short:'One person’s opinion', name:'One person’s opinion — not yet something you may assume',
       gloss:'it may be true, but it is not yet probable in the required sense, and an opponent may refuse it without shame.'}
};
const ENDOX_ITEMS = [
  {tier:1, k:'all', t:'A promise ought generally to be kept.'},
  {tier:1, k:'dem',t:'The angles of any triangle add to two right angles.'},
  {tier:1, k:'one',t:'Autumn is the finest of the four seasons.'},
  {tier:1, k:'all',t:'Parents should look after their children.'},
  {tier:1, k:'dem',t:'No odd number can be divided into two equal whole numbers.'},
  {tier:2, k:'wise',t:'The fever should be let run its course rather than broken early.'},
  {tier:2, k:'one', t:'This poem is the best in the language.'},
  {tier:2, k:'all', t:'It is worse to suffer a great harm than a small one.'},
  {tier:2, k:'dem', t:'Every whole is greater than any one of its parts.'},
  {tier:3, k:'wise',t:'A law that nobody can obey is no true law.'},
  {tier:3, k:'one', t:'The old road was pleasanter than the new one.'},
  {tier:3, k:'all', t:'A judge should not decide a case in which he himself has an interest.'},
  {tier:5, k:'wise',t:'Punishment aims at the good of the one punished, and not only at the good of the city.'},
  {tier:5, k:'dem', t:'If no B is C and every A is C, then no A is B.'},
  {tier:5, k:'one', t:'The best hour of the day is just before dawn.'}
];
function genDialEndoxQ(d){
  const tiers = defTiers(d);
  let pool = ENDOX_ITEMS.filter(x=>tiers.indexOf(x.tier)>=0);
  if(!pool.length) pool = ENDOX_ITEMS;
  const it = recentPick(pool, x=>x.t);
  const keys = Object.keys(ENDOX);
  const others = keys.filter(k=>k!==it.k).map(k=>ENDOX[k].name);
  return mc4Make({prompt:it.t, options:[ENDOX[it.k].name].concat(others),
    correct: ENDOX[it.k].name,
    ruleShow: d>=5 ? '' : 'Dialectic works from the probable — what seems so to everyone, or to most, or to the wise. Before you use a premise, ask what standing it has: is it demonstrable, granted by all, granted by the learned only, or merely somebody’s opinion?',
    why: `${ENDOX[it.k].short}: ${ENDOX[it.k].gloss}`,
    rules: DIAL_RULES, mcInstr:'What standing has this premise, if you offer it in argument?'});
}

/* ---- answering an objection: the four moves of the disputed question ---- */
const RESP = {
  dist:{short:'the distinguo', name:'Distinguish the term — it is true in one sense, false in another',
        gloss:'it works whenever a word in the objection carries two senses: grant the sense that is true, deny the other, and the objection falls apart.'},
  deny:{short:'denying the premise', name:'Deny the premise — it is simply not so',
        gloss:'it is the answer when the objection simply rests on something false — no distinction is needed; you refuse the premise and say why.'},
  conc:{short:'conceding the matter and denying the consequence', name:'Grant it all, and deny that the conclusion follows',
        gloss:'it is the answer when every premise stands and the conclusion still does not follow — the matter is sound, the form is not.'},
  full:{short:'a plain concession', name:'Grant the whole objection — it is right, and your thesis must be narrowed',
        gloss:'it is the honest answer when the objection is simply sound: concede, and state the claim again more carefully.'}
};
const RESP_KEYS = Object.keys(RESP);
const RESP_ITEMS = [
  {tier:1, th:'A good knife cuts well.', ob:'But a good knife in the hands of a murderer does harm — so a good knife is not good.',
   k:'dist', w:'“Good” is said in two ways: good as a knife, and good in what it is used for. Grant the first, deny the second, and the objection is answered.'},
  {tier:1, th:'Promises ought to be kept.', ob:'But a promise made to a madman to give back his sword ought not to be kept. So promises need not be kept.',
   k:'dist', w:'“Ought to be kept” holds without qualification of promises whose keeping does no grave harm. Distinguish, and the rule stands in the sense it was meant.'},
  {tier:1, th:'Every bird has feathers.', ob:'But the bat flies and has no feathers, so not every flying thing has feathers.',
   k:'conc', w:'Everything in the objection is true, and none of it touches the thesis. The thesis was about birds, not about flying things. Grant it all; the conclusion does not follow.'},
  {tier:1, th:'This road is the shortest way to the town.', ob:'But the bridge on it is down, so nobody can get through.',
   k:'full', w:'The objection is simply right, and it defeats the thesis as stated. The honest move is to concede and say instead that it is the shortest way when passable.'},
  {tier:2, th:'A definition must fit exactly what it defines.', ob:'But “man is a rational animal” fits every man, and so does “man is a featherless biped.” So exact fit is not enough.',
   k:'conc', w:'Both premises may be granted, and the conclusion still does not follow: the thesis said exact fit is necessary, not that it is sufficient. The form is at fault, not the matter.'},
  {tier:2, th:'Nobody willingly does what harms him.', ob:'But men drink themselves sick knowing it will harm them. So some do it willingly.',
   k:'dist', w:'“Willingly” is said of what a man chooses as good for him, and of what he chooses knowing it is bad. Distinguish the senses and the thesis holds in the first.'},
  {tier:2, th:'The heavier body always falls faster.', ob:'Two stones of different weight, dropped together, strike the ground together.',
   k:'deny', w:'No distinction is needed and nothing about the form is wrong. The premise of the thesis is simply false, and the observation shows it.'},
  {tier:2, th:'Every part of the wall is white, so the wall is white.', ob:'Every brick is light, yet the wall is not light.',
   k:'conc', w:'The objection grants the pattern and shows it fails elsewhere — which is to attack the form of the inference, not the truth of any premise.'},
  {tier:3, th:'Knowledge is always of what cannot be otherwise.', ob:'But I know that you are sitting down, and you might stand up.',
   k:'dist', w:'“Knowledge” is said strictly, of what is demonstrated and cannot be otherwise, and loosely, of what we are sure of at the time. Distinguish, and the thesis holds in the strict sense.'},
  {tier:3, th:'A law binds everyone in the realm.', ob:'But the law was never published in this province, and nobody there has heard it.',
   k:'full', w:'The objection is sound and the thesis must be narrowed: a law binds when it has been made known. Concede, and restate.'},
  {tier:3, th:'Whatever is learned is learned from a teacher.', ob:'But the first teacher had no teacher, and yet knew.',
   k:'dist', w:'“Learned from a teacher” covers learning by instruction; discovery is another way of coming to know. Distinguish the two and the thesis stands of the first.'},
  {tier:5, th:'No one errs willingly.', ob:'The forger knows he is forging, and does it on purpose.',
   k:'dist', w:'To err is one thing, to do wrong another. The forger does not err about what he is doing; he chooses it. Distinguish erring from choosing badly.'},
  {tier:5, th:'Every effect has a cause.', ob:'But we often cannot find the cause, so some effects have none.',
   k:'conc', w:'Grant that we often cannot find it. That we cannot find a thing is no proof that it is not there — the conclusion simply does not follow from the premise.'},
  {tier:5, th:'The city should always follow the majority.', ob:'The majority once voted to exile its best general, to its own ruin.',
   k:'full', w:'The objection stands and the thesis as stated cannot. Concede, and state the thesis again with the qualification the case demands.'}
];
function genDialResponseQ(d){
  const tiers = defTiers(d);
  let pool = RESP_ITEMS.filter(x=>tiers.indexOf(x.tier)>=0);
  if(!pool.length) pool = RESP_ITEMS;
  const it = recentPick(pool, x=>x.ob);
  const others = RESP_KEYS.filter(k=>k!==it.k).map(k=>RESP[k].name);
  return mc4Make({
    promptRaw: `<div class="disp-row"><span class="disp-label">The claim</span>${it.th}</div>`
             + `<div class="disp-row"><span class="disp-label">The objection</span>${it.ob}</div>`,
    options:[RESP[it.k].name].concat(others), correct:RESP[it.k].name,
    ruleShow: d>=5 ? '' : 'Four answers are open to an objection. DISTINGUISH the term — the distinguo — when a word is true in one sense and false in another. DENY the premise when it is simply false. GRANT it all and deny that the conclusion follows, when the matter is sound but the form is not. Or GRANT the whole objection and narrow your claim, when the objection is right.',
    why: `${it.w} — this is the move the schools call ${RESP[it.k].short}, and ${RESP[it.k].gloss}`,
    rules: DIAL_RULES, mcInstr:'How should this objection be answered?'});
}

/* ---- the doctrine of dialectic itself ---- */
const DIAL_DOCTRINE = [
  {tier:1, q:'Dialectic reasons from premises of what sort?',
   correct:'Probable ones — what seems so to everyone, or to most, or to the wise',
   ds:['Ones that have been demonstrated and cannot be otherwise','Ones that are known to be false','Ones invented for the sake of the argument'],
   why:'This is the definition Aristotle gives and St Thomas repeats. The probable is not a guess about odds; it is what a reasonable person may be asked to grant.'},
  {tier:1, q:'What does dialectic reach, at its best?',
   correct:'A reasoned opinion, well supported but not proved',
   ds:['Certain knowledge of the cause','A persuasive speech','A story that makes sense of the facts'],
   why:'Demonstration reaches science; dialectic reaches opinion held for good reasons. Knowing which one you are doing keeps you honest about how much you have shown.'},
  {tier:1, q:'Logic divides into two arts. What are they?',
   correct:'The art of finding an argument, and the art of judging one',
   ds:['The art of speaking, and the art of writing','The art of defining, and the art of dividing','The art of the true, and the art of the probable'],
   why:'The schools called them the science of finding (inventio) and the science of judging (judicium). The Prior and Posterior Analytics teach judging; the Topics teaches finding. This exercise is mostly about finding.'},
  {tier:2, q:'What is the maxim (maxima propositio) of a topic?',
   correct:'The governing rule an argument drawn from that place depends on',
   ds:['The strongest argument that can be drawn from it','The name of the topic in Latin','The conclusion the argument reaches'],
   why:'From the wider kind, the maxim is: whatever belongs to the whole family belongs to each kind within it. When the maxim is true the argument holds. A fallacy depends on a maxim that is false and looks true — the same machinery backwards.'},
  {tier:1, q:'What is a topic (locus) in dialectic?',
   correct:'A standing relation an argument may be drawn from, such as genus to species',
   ds:['A subject that is being argued about','A place in a book where the argument is found','The conclusion an argument aims at'],
   why:'A topic is the place an argument is drawn from: the definition, the wider kind, opposites, the cause, and so on. Its first use is finding — given something to show, it tells you where to look.'},
  {tier:2, q:'Two people are disputing. Who are the two parties called?',
   correct:'The one who puts the case and the one who answers',
   ds:['The teacher and the learner','The speaker and the audience','The judge and the witness'],
   why:'St Thomas: a disputation turns between the opponens and the respondens. Teacher and learner belong to demonstrative disputation, which is a different kind.'},
  {tier:2, q:'Why is the argument from authority called the weakest of the topics?',
   correct:'Because it gives no reason drawn from the thing itself, only the judgement of those who know',
   ds:['Because authorities are usually wrong','Because it is not a topic at all','Because only the ignorant use it'],
   why:'It is genuinely a topic and genuinely probable — but it moves us by who says a thing rather than by what makes it so. Hence weakest, and hence not nothing.'},
  {tier:2, q:'What is the distinguo?',
   correct:'Answering by dividing a term into the sense in which the claim is true and the sense in which it is false',
   ds:['Refusing to answer until the terms are defined','Proving the opposite of what was claimed','Asking a question in reply to a question'],
   why:'It is the characteristic move of the disputed question, and it is not a dodge: most objections that look decisive turn on a word doing two jobs at once.'},
  {tier:3, q:'How does dialectic differ from a testing disputation?',
   correct:'Dialectic argues toward the better view; testing only finds out whether a man knows',
   ds:['They are two names for the same thing','Dialectic uses syllogisms and testing does not','Testing reaches certainty and dialectic does not'],
   why:'A testing disputation works from what seems true to the respondent, and aims at taking his measure. It need not care which view is better.'},
  {tier:3, q:'A premise is granted by the learned but not by most people. May you use it?',
   correct:'Yes — it is probable in the required sense, but you should expect to defend it',
   ds:['No — only what everyone grants may be used','Yes, and no defence of it is needed','Only if you can also demonstrate it'],
   why:'Aristotle’s definition of the probable includes what seems so to the wise. What it does not do is excuse you from defending it when the many disagree.'},
  {tier:3, q:'Why does the tradition place dialectic between rhetoric and demonstration?',
   correct:'Because it has more than persuasion and less than proof',
   ds:['Because it is easier than rhetoric and harder than demonstration','Because it came later in history','Because it uses fewer premises'],
   why:'Rhetoric inclines us where evidence is nearly even; dialectic reaches what is probable; demonstration proves through the cause. The three are stages of one inquiry ripening.'},
  {tier:5, q:'An objection is granted in every premise, and the conclusion still does not follow. What has gone wrong with it?',
   correct:'Its form — the matter is sound but the inference is not',
   ds:['Its matter — one premise must be false after all','Its terms — a word must be ambiguous','Nothing: if the premises are granted the conclusion follows'],
   why:'This is the third of the four answers: concede everything and deny the consequence. It is the answer to give whenever an objection is true in every part and still proves nothing.'},
  {tier:5, q:'What does it mean to say the probable is what seems so “to the wise, and among the wise to the most eminent”?',
   correct:'That the standing of a premise rises with the standing of those who grant it',
   ds:['That only the wise may take part in a disputation','That the wise are always right','That a premise is probable only if all the wise agree'],
   why:'St Thomas gives the qualification carefully. Not every opinion of every man is probable; but neither does dialectic need everyone to agree.'}
];
function genDialDoctrineQ(d){
  const tiers = defTiers(d);
  let pool = DIAL_DOCTRINE.filter(x=>tiers.indexOf(x.tier)>=0);
  if(!pool.length) pool = DIAL_DOCTRINE;
  const it = recentPick(pool, x=>x.q);
  return mc4Make({ruleShow:'', prompt:'', options:[it.correct].concat(it.ds),
    correct:it.correct, why:it.why, rules:DIAL_RULES, mcInstr:it.q});
}
const DIAL_QTYPES = ['topic','invent','maxim','endox','resp','doctrine'];
let DIAL_RECENT_Q = [];
function genDialecticQ(d){
  let pool = DIAL_QTYPES.filter(t=>DIAL_RECENT_Q.indexOf(t)<0);
  if(!pool.length) pool = DIAL_QTYPES.slice();
  const w = {topic:2, invent:2.5, maxim:2, resp:2.5, endox:2, doctrine:1.5};
  const tot = pool.reduce((a,t)=>a+(w[t]||1),0);
  let r = Math.random()*tot, pick = pool[pool.length-1];
  for(const t of pool){ r -= (w[t]||1); if(r<=0){ pick = t; break; } }
  DIAL_RECENT_Q.push(pick); while(DIAL_RECENT_Q.length>2) DIAL_RECENT_Q.shift();
  if(pick==='topic')  return genDialTopicQ(d);
  if(pick==='invent') return genDialInventQ(d);
  if(pick==='maxim')  return genDialMaximQ(d);
  if(pick==='endox') return genDialEndoxQ(d);
  if(pick==='resp')  return genDialResponseQ(d);
  return genDialDoctrineQ(d);
}

/* ================================================================
   TEACHER QUIZ API — printable stems and answer keys
   ================================================================ */
const QUIZ_MODE_SETS = new Set([5,6,7,8,11,12,13,14,16,19]);

function generateQuizQuestion(setId, diff, mode){
  const d = Math.max(1, Math.min(5, diff|0));
  const m = mode==='english' ? 'english' : 'letters';
  if(typeof resetSessionOneShots==='function'){ /* keep one-shots available across a quiz */ }
  if(setId===20) return genDialecticQ(d);
  if(setId===21) return genFallacyQ(d);
  if(setId===1) return genPredicableQ(d);
  if(setId===2) return genCategoryQ(d);
  if(setId===3) return genDivQ(d);
  if(setId===4) return genDefQ(d);
  if(setId===5) return (Math.random()<0.45 && d>=2) ? genVenn2Q(d, m) : genVennQ(d, m);
  if(setId===6) return genImmediateQ(d, m);
  if(setId===7){
    const r = Math.random();
    if(r<0.4) return genModalEquipQ(d, m);
    if(r<0.75) return genModalSquareQ(d, m);
    return genModalSenseQ();
  }
  if(setId===8) return genVennSyllQ(d, m);
  if(setId===9) return genValidityQ(d, 'letters');
  if(setId===10) return genValidityQ(d, 'english');
  if(setId===11) return genConclusionQ(d, m);
  if(setId===12) return genHypQ(d, m, rand(['conj','disjS','disjI']));
  if(setId===13) return genHypQ(d, m, 'cond');
  if(setId===14) return genHypConclQ(d, m);
  if(setId===15){
    const r = Math.random();
    if(r<0.45) return genOrdinaryQ(d);
    if(r<0.72) return genWildHypQ(d);
    return genWildModalQ(d);
  }
  if(setId===16) return genModalSyllQ(d, m);
  if(setId===17) return genChainQ(d);
  if(setId===18) return genSoundnessQ(d);
  if(setId===19) return Math.random()<0.55 ? genEnthQ(d, m) : genEnthCuratedQ(d);
  return genValidityQ(d, m);
}

function quizFingerprint(q){
  if(!q) return '';
  const bits = [q.kind, q.sub||'', q.sent||'', q.sentence||'', q.prose||'', q.prompt||'', q.mcInstr||''];
  if(q.lines) bits.push(q.lines.join('|'));
  if(q.mlines) bits.push(q.mlines.join('|'));
  if(q.t1) bits.push(q.t1); if(q.t2) bits.push(q.t2);
  if(q.options) bits.push(q.options.join('|'));
  if(q.item && q.item.sent) bits.push(q.item.sent);
  return bits.join('::').slice(0, 400);
}

function _shuffle(arr){
  const a = arr.slice();
  for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); const t=a[i]; a[i]=a[j]; a[j]=t; }
  return a;
}
function _letters(){ return ['a','b','c','d','e','f']; }

/** Turn a generated question into printable stem + answer key fields. */
function formatQuizItem(q){
  const out = {
    kind: q.kind,
    sub: q.sub||'',
    instr: '',
    stemHtml: '',
    choices: null,       // [{letter, text}] or null
    workClass: '',       // s1/s2/s3 blank work area
    answerText: '',
    explainHtml: '',
    diagramHtml: ''      // for answer key (filled Venn)
  };
  const L = _letters();

  if(q.kind==='mc4'){
    out.instr = q.mcInstr || 'Choose the best answer.';
    if(q.ruleShow) out.stemHtml += `<div class="qrule">${q.ruleShow}</div>`;
    if(q.promptRaw) out.stemHtml += `<div class="qprompt">${q.promptRaw}</div>`;
    else if(q.prompt) out.stemHtml += `<div class="qprompt">“${q.prompt}”</div>`;
    const opts = _shuffle(q.options.slice());
    const ci = opts.indexOf(q.options[q.correctIdx]);
    // correctIdx is index into shuffled options array from mc4Make — but options
    // on q are already shuffled and correctIdx points into them. Re-shuffle for print.
    // Use the correct *string* as source of truth:
    const correctStr = q.options[q.correctIdx];
    const printOpts = _shuffle(q.options.slice());
    out.choices = printOpts.map((t,i)=>({letter:L[i], text:t}));
    const ans = out.choices.find(c=>c.text===correctStr);
    out.answerText = ans ? `(${ans.letter}) ${ans.text}` : correctStr;
    out.explainHtml = q.why || '';
    return out;
  }

  if(q.kind==='validity' || q.kind==='ordinary' || q.kind==='wildmod' || q.kind==='chain' ||
     (q.kind==='hyp' && !q.prose)){
    out.instr = 'Is the following syllogism valid or invalid?';
    if(q.kind==='ordinary' || q.kind==='wildmod') out.instr = 'Is the argument below a valid syllogism?';
    if(q.kind==='chain') out.instr = 'Is the whole chain valid, or does some link fail?';
    if(q.prose) out.stemHtml = `<div class="qprompt">“${q.prose}”</div>`;
    else if(q.html) out.stemHtml = `<div class="argblock">${q.html}</div>`;
    else if(q.lines) out.stemHtml = `<div class="argblock">${q.lines.map(l=>l+'.').join('<br>')}<br><span class="therefore">∴</span> ${q.concl}.</div>`;
    out.choices = [{letter:'a', text:'Valid'},{letter:'b', text:'Invalid'}];
    out.answerText = q.valid ? '(a) Valid' : '(b) Invalid';
    if(!q.valid && typeof mistakeNoteValidity==='function'){
      try{ out.explainHtml = mistakeNoteValidity(q, 'english') || ''; }catch(e){}
    } else if(q.valid) out.explainHtml = 'The form is valid.';
    return out;
  }

  if(q.kind==='hyp' && q.prose){
    out.instr = 'Is this syllogism valid or invalid?';
    out.stemHtml = `<div class="qprompt">“${q.prose}”</div>`;
    out.choices = [{letter:'a', text:'Valid'},{letter:'b', text:'Invalid'}];
    out.answerText = q.valid ? '(a) Valid' : '(b) Invalid';
    return out;
  }

  if(q.kind==='soundness'){
    out.instr = 'Is the argument valid in form, and are its premises in fact true?';
    out.stemHtml = `<div class="argblock">${q.lines[0]}.<br>${q.lines[1]}.<br><span class="therefore">∴</span> ${q.concl}.</div>`;
    out.choices = [
      {letter:'a', text:'Valid & sound'},
      {letter:'b', text:'Valid, unsound'},
      {letter:'c', text:'Invalid'}
    ];
    const map = {sound:'(a) Valid & sound', unsound:'(b) Valid, unsound', invalid:'(c) Invalid'};
    out.answerText = map[q.answer] || q.answer;
    try{ out.explainHtml = mistakeNoteSound(q, q.answer) || ''; }catch(e){ out.explainHtml = ''; }
    return out;
  }

  if(q.kind==='modsyll'){
    out.instr = 'In what mode, if any, does the conclusion follow?';
    out.stemHtml = `<div class="argblock">${q.mlines[0]}.<br>${q.mlines[1]}.<br><span class="therefore">∴</span> ${q.concl} — <em>in what mode?</em></div>`;
    out.choices = MODSYLL_LABELS.map((t,i)=>({letter:L[i], text:t}));
    const ix = MODSYLL_VALUES.indexOf(q.answer);
    out.answerText = ix>=0 ? `(${L[ix]}) ${MODSYLL_LABELS[ix]}` : q.answer;
    return out;
  }

  if(q.kind==='modal'){
    if(q.sub==='equip'){
      out.instr = 'Are these two expressions equipollent — equal in force, the same corner of the square?';
      out.stemHtml = `<div class="qprompt">“${q.t1}.”<br><em>and</em><br>“${q.t2}.”</div>`;
      out.choices = [{letter:'a', text:'Equipollent'},{letter:'b', text:'Not equipollent'}];
      out.answerText = q.valid ? '(a) Equipollent' : '(b) Not equipollent';
      out.explainHtml = q.valid
        ? `Both reduce to <strong>${CORNER_NAME[q.c1]}</strong>.`
        : `First → <strong>${CORNER_NAME[q.c1]}</strong>; second → <strong>${CORNER_NAME[q.c2]}</strong>.`;
    } else if(q.sub==='msq'){
      out.instr = 'What does the modal square determine?';
      out.stemHtml = `<div class="qprompt">Suppose it is <strong>${q.given==='T'?'true':'false'}</strong> that:<br>“${q.t1}.”<br>What then of:<br>“${q.t2}”?</div>`;
      out.choices = [{letter:'a',text:'True'},{letter:'b',text:'False'},{letter:'c',text:'Undetermined'}];
      const map = {T:'(a) True', F:'(b) False', U:'(c) Undetermined'};
      out.answerText = map[q.answer] || q.answer;
    } else {
      out.instr = 'In which sense is this proposition true?';
      out.stemHtml = `<div class="qprompt">“${q.item.sent}.”</div>`;
      out.choices = SENSE_LABELS.map((t,i)=>({letter:L[i], text:t}));
      const ix = SENSE_VALUES.indexOf(q.answer);
      out.answerText = ix>=0 ? `(${L[ix]}) ${SENSE_LABELS[ix]}` : q.answer;
      out.explainHtml = q.item.why || '';
    }
    return out;
  }

  if(q.kind==='imm'){
    if(q.sub==='op'){
      out.instr = `Give the ${q.op} in standard form (or “none”).`;
      out.stemHtml = `<div class="qprompt">${immPropText(q.pr)}.</div>`;
      out.workClass = 's1';
      out.answerText = q.expected ? immPropText(q.expected) : 'none';
      if(q.perAcc) out.explainHtml = 'Per accidens (quantity weakens).';
    } else {
      out.instr = 'What truth-value does the square of opposition assign?';
      out.stemHtml = `<div class="qprompt">Suppose it is <strong>${q.given==='T'?'true':'false'}</strong> that:<br>“${immPropText(q.p1)}.”<br>What then of:<br>“${immPropText(q.p2)}”?</div>`;
      out.choices = [{letter:'a',text:'True'},{letter:'b',text:'False'},{letter:'c',text:'Undetermined'}];
      const map = {T:'(a) True', F:'(b) False', U:'(c) Undetermined'};
      out.answerText = map[q.answer] || q.answer;
    }
    return out;
  }

  if(q.kind==='conclusion' || q.kind==='hypc'){
    out.instr = 'What conclusion, if any, follows? (Standard form, or “none”.)';
    out.stemHtml = `<div class="argblock">${q.lines[0]}.<br>${q.lines[1]}.<br><span class="therefore">∴</span> <em>?</em></div>`;
    out.workClass = 's1';
    if(q.none || !q.accepted || !q.accepted.length) out.answerText = 'none';
    else out.answerText = q.accepted.map(a=>a.text || a).join(' — or — ');
    return out;
  }

  if(q.kind==='enth'){
    out.instr = 'What premise is left unsaid? (Standard form, or “none”.)';
    out.stemHtml = `<div class="qprompt">“${q.prose}”</div>`;
    out.workClass = 's2';
    if(q.none || !q.accepted || !q.accepted.length) out.answerText = 'none';
    else out.answerText = q.accepted.map(a=>a.text || a).join(' — or — ');
    if(q.why) out.explainHtml = q.why;
    return out;
  }

  if(q.kind==='venn'){
    out.instr = 'Diagram what the proposition asserts (shade empty regions; mark × where something exists).';
    out.stemHtml = `<div class="qprompt">${q.sentence}.</div>` + _blankVenn2();
    out.workClass = '';
    const cm = vennStateToMarks(q.correct);
    const labels = {A:termLabel(q.left), B:termLabel(q.right)};
    out.diagramHtml = svgVenn(V2, labels, cm.shaded, cm.xs);
    const DESC = {A:'shade subject outside predicate', E:'shade the overlap', I:'× in the overlap', O:'× in subject outside predicate'};
    out.answerText = `Form ${q.type}: ${DESC[q.type]}.`;
    return out;
  }

  if(q.kind==='venn3'){
    out.instr = q.sub==='pair'
      ? 'Diagram what the two premises together assert.'
      : 'Diagram the full syllogism (shade universals; mark × / ⊗ where needed).';
    const lines = (q.lines||[]).map(l=>l+'.').join('<br>');
    const concl = q.concl ? `<br><span class="therefore">∴</span> ${q.concl}.` : '';
    out.stemHtml = `<div class="argblock">${lines}${concl}</div>` + _blankVenn3();
    const labels = {S:termLabel(q.roles.S), P:termLabel(q.roles.P), M:termLabel(q.roles.M)};
    out.diagramHtml = svgVenn(V3, labels, q.diag.shaded, q.diag.xs);
    out.answerText = q.sub==='syll'
      ? `Valid ${q.name || (q.mood+'-'+q.fig)}.`
      : 'See diagram.';
    return out;
  }

  // fallback
  out.instr = 'Answer the question.';
  out.stemHtml = `<div class="qprompt">${q.prose || q.sentence || JSON.stringify(q.kind)}</div>`;
  out.workClass = 's1';
  out.answerText = '(See instructor.)';
  return out;
}

function _blankVenn2(){
  return `<svg class="blank-venn" viewBox="0 0 440 290" xmlns="http://www.w3.org/2000/svg">
    <circle cx="170" cy="150" r="90" fill="none" stroke="#333" stroke-width="1.5"/>
    <circle cx="270" cy="150" r="90" fill="none" stroke="#333" stroke-width="1.5"/>
    <text x="110" y="40" font-size="14" font-style="italic" text-anchor="middle" fill="#555">S</text>
    <text x="330" y="40" font-size="14" font-style="italic" text-anchor="middle" fill="#555">P</text>
  </svg>`;
}
function _blankVenn3(){
  return `<svg class="blank-venn" viewBox="0 0 420 358" xmlns="http://www.w3.org/2000/svg">
    <circle cx="155" cy="138" r="95" fill="none" stroke="#333" stroke-width="1.5"/>
    <circle cx="265" cy="138" r="95" fill="none" stroke="#333" stroke-width="1.5"/>
    <circle cx="210" cy="233" r="95" fill="none" stroke="#333" stroke-width="1.5"/>
    <text x="92" y="28" font-size="14" font-style="italic" text-anchor="middle" fill="#555">S</text>
    <text x="328" y="28" font-size="14" font-style="italic" text-anchor="middle" fill="#555">P</text>
    <text x="210" y="348" font-size="14" font-style="italic" text-anchor="middle" fill="#555">M</text>
  </svg>`;
}

/* export for testing in Node */
if(typeof module!=='undefined' && module.exports){
  module.exports = {VALID, SUBALTERN, FIG_POS, isValidSyll, violations, moodName,
    genValidityQ, genConclusionQ, genOrdinaryQ, parseAnswer, normTerm,
    checkConclusionAnswer, acceptedConclusions, pickValid, pickInvalid,
    makeTerms, propText, premiseTerms, singularOption, DIFF, TYPES,
    diagram3, diagramSyllogism, conclSatisfiedFor, tryImport, svgVenn, V2, V3, REGIONS3,
    genVennQ, checkVenn, vennMistake, vennStateToMarks, termKey,
    mistakeNoteValidity, mistakeNoteConclusion, termLabel,
    diagToState, genVenn2Q, genVennSyllQ, checkVenn3, vennMistake3,
    KB_ATOMS, MATH_TERMS, MATH_KEYS, MATH_EXT, propTruth, counterexample,
    genSoundnessQ, mistakeNoteSound,
    KB_DOMAINS, DOM_KEYS, DOM_EXT, ETH_ATOMS, ETH_TERMS, SOUL_ATOMS, SOUL_TERMS,
    genDefQ, genDivQ, genDivComputedQ, divVerdict, DIV_SOUND_LIST, DIV_OPTS, DIV_OPT_OF,
    mc4Make, divText, DEF_ITEMS, DEF_RULE_META, DEF_KIND_STOCK, genDefRuleQ, genDefKindQ,
    DIV_STOCK, DIV_RULE_META, DIVKIND_STOCK, genDivRuleQ, genDivKindQ,
    genPredicableQ, genPredIdentifyQ, genPredPrincipleQ, PRED_ITEMS, PRED_DOCTRINE, PRED_NAME, PRED_PRINCIPLES,
    genCategoryQ, genCatNameQ, genCatWhichWordQ, genCatPrincipleQ, CAT_WORDS, CAT_KEYS, CAT_NAME, CAT_DOCTRINE, CAT_PRINCIPLES,
    resetSessionOneShots, genChainQ,
    genFallacyQ, genFalNameQ, genFalSideQ, genFalAppearQ, genFalDefectQ, genFalAnswerQ,
    genFalPrincipleQ, genFalDoctrineQ, genFalDisputationQ, genFalMetaQ,
    FAL_KINDS, FAL_ITEMS, FAL_KEYS, DISP_ITEMS, META_ITEMS, FAL_PRINCIPLES, FAL_DOCTRINE,
    genDialecticQ, genDialTopicQ, genDialEndoxQ, genDialResponseQ, genDialDoctrineQ,
    genDialInventQ, genDialMaximQ, INVENT_ITEMS,
    TOPICS, DIAL_TOPICS, ENDOX_ITEMS, RESP_ITEMS, DIAL_DOCTRINE,
    immProp, immPropText, applyImmOp, SQ_PAIR, sqAnswer, genImmediateQ,
    parseImmAnswer, checkImm, immMarks, immMistakeOp, immMistakeTruth,
    readout2, readout3, cellDesc3, spConsequences,
    hcCells, hcExcluded, hcOpen, hcConcl, hcMinorConcl, hcBuild, genHypQ, genHypConclQ,
    checkHypAnswer, hypMistake, hypcMistake, HYP_MOODS, HYP_INFO, hypMoodKey, hcCompText,
    hcBuildProp, contraProp, pPropText, hcNothing,
    cornerOf, exprText, cornerClean, cornerPhrase, genModalEquipQ, genModalSquareQ,
    genModalSenseQ, genModalSyllQ, modalEquipMistake, modalSquareMistake, modalSyllMistake,
    modalSenseNote, MODAL_GLOSS,
    enthCandidates, genEnthQ, checkEnthAnswer, enthMistake, genEnthCuratedQ, ENTH_POOL,
    MSQ_PAIR, SENSE_POOL, MOD_RANK, M_CORNERS, modalSquareSvg, SENSE_VALUES, MODSYLL_VALUES,
    proseWrap, genWildHypQ, genWildModalQ,
    QUIZ_MODE_SETS, generateQuizQuestion, quizFingerprint, formatQuizItem};
}

