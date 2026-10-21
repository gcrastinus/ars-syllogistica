# Cleanups and Advanced Studies: Phase 3 report

Prepared October 21, 2026. This phase made two cleanups (prose dashes; the attributions to St. Thomas in set XX) and built the Advanced Studies: fourteen doctrine decks and five paired exercise sets (XXII–XXVI), placed after Sophistica on the home page and gated in the Guided Path. The plan is `notes/ADVANCED-STUDIES-PLAN.md`; the "Further guidance" of October 20 (history and modern logic after the ECT article; Peifer, Simon, John of St. Thomas's *Material Logic*, the Klima–Noone book) was followed.

## Follow-up after Timothy's decisions (October 21)

| Commit | What |
|---|---|
| `a679ddd` | The Advanced Studies decks moved to `ars-advanced.js`, loaded after `ars-engine.js`; `index.html` builds them with `arsAdvancedDecks(Q, sources)` and drops from about 707 KB to 433 KB |
| `7cb4853` | Exercise VI follows Buridan's limits (Decision 5 below) |
| `f2acb3c` | Set XXI and lead-in XXI follow *De fallaciis* on non-cause as cause (Decision 6) |
| `64365c2`, `3db225b` | Older studies and lead-ins rebalanced for the one-third rule (Decision 19) |
| `59ff574` | `make_text.py` extended and run; `SYLLOGISTICA-TEXT.txt` regenerated; the progress report's window starts from graded exercises only (Decision 4) |
| this commit | Report updated |

- **Exercise VI.** From Level IV, a quarter of the operation questions state that nothing falls under the subject ("There are no unicorns"; "Suppose that nothing is B"). Then obversion of E or O and contraposition of E or O yield nothing, and the answer is "none," since the result would be an affirmative about nothing. Lead-in VI gains a paragraph on the rule (with Buridan introduced by appositive) and one new question form; the feedback and the teacher's quiz explain it. Answers when the terms stand for existing things are unchanged.
- **Non-cause as cause.** `FAL_KINDS.noncausa` now defines the fallacy as *De fallaciis* ch. 17 does (an idle premise counted among the premises, chiefly in an argument to the impossible, so that a true premise is blamed for an absurdity it did not produce). Its four post hoc items were replaced by four arguments to the impossible, one of them the treatise's soul-and-life example. One sentence, in lead-in XXI and in the feedback, says that modern books use "false cause" for a different fault. The Advanced Fallacies deck now says the same.
- **The one-third rule** now holds for every deck, lead-in, and set, and `tools/check.js` enforces it everywhere. In each changed question one distractor was lengthened with a plausible, false continuation; in two questions a long correct answer was shortened to "Nothing follows"; the three-option questions on the square now read "Undetermined / It must be true / It must be false." No doctrine or answer key changed.
- **`make_text.py`** had read only the intro screens that Phase 2 removed, and its bank sampler read the wrong file (an off-by-one in `process.argv`), so the old export held neither the studies nor any bank samples. It now reads every study deck, lead-in, and Advanced deck through Node, with sources lines and check questions (choices, answer, why, why not), in the order of the home page, and samples the five new banks. The export now holds 40 decks, 574 check questions, and 12 bank samples.
- **Checks.** `node tools/check.js` passes. Headless Chrome: all 14 Advanced decks walk to the end and their Reviews score; sets XXII–XXVI run at Levels I–V; exercise VI at Level V gives the empty-subject questions with the correct feedback; no overflow at 360 px; no console errors from the course (only the test server's favicon 404).

### Decisions that touch doctrine, for Timothy to confirm

These were applied as recommended in the first report because they follow the sources and the Decision Sheets, but each states doctrine:

1. **Natural supposition** (exercise XXII and the Supposition deck): "Every triangle has three angles" is true when no triangle is drawn, while an accidental affirmative with an empty subject ("Peter is running," Peter having died) is false. This follows Maritain and Klima (Decision Sheet §1, bullet 5).
2. **The modal vowels** are given as A, E, I, U, after Maritain, not A, E, I, O.
3. **The fourth figure** enters exercise XXIV at Level IV and the weakened moods at Level V, as the later textbook account (Decision A5).
4. **Kilwardby and St. Albert's "simply" qualification** in the modal-syllogism deck is taken from the Decision Sheet's report of the SEP and was not checked in their texts.
5. **Details stated from standard knowledge, not from a file I opened:** Aristotle's four predicables (*Topics* I.4, I.8, with Houser p. 55); the planets, the wall, the round wounds, and Bryson (checked through St. Thomas's commentary and Conway, not Aristotle's Greek); Galatians 1:8 (Douay-Rheims); *ST* I q. 1 a. 2 on theology as a subalternated science; Tertullian's dilemma (from Maritain).

## Commits

| # | Commit | What |
|---|---|---|
| 1 | `20ef3a1` | Prose dashes replaced; label dashes kept; `tools/check.js` added |
| 2 | `a96b387` | Set XX: attributions to St. Thomas checked against the Latin |
| 3 | `7f1eedc` | Plan; Minerd's slides text committed as a source (pptx gitignored) |
| 4 | `7da5fc2` | First Act: four decks and exercise XXII (Supposition) |
| 5 | `81d9224` | Second Act: three decks and exercise XXIII (Compound and Exponible Propositions) |
| 6 | `fe579a0` | Third Act: seven decks and exercises XXIV–XXVI |
| 7 | `21cbf1d` | Home section, Guided Path, teacher quiz, progress report |
| 8 | this commit | This report |

## What was built

**Decks** (in `ADVANCED_DECKS`, `index.html`; each with three check questions per card, a deck Review, and a sources line with the ECT article first and Maritain second):

| Act | Deck | Cards | Questions | Gate (Guided Path) |
|---|---|---|---|---|
| First | The Predicables in Depth | 8 | 24 | I–IV |
| First | The Categories in Depth | 8 | 24 | I–IV |
| First | Definition and Division in Depth | 8 | 24 | I–IV |
| First | Supposition | 8 | 24 | I–IV |
| Second | Opposition and Conversion in Depth | 9 | 27 | V–VII |
| Second | The Modal Proposition in Depth | 7 | 21 | V–VII |
| Second | Compound and Exponible Propositions | 8 | 24 | V–VII |
| Third | Figures and Moods | 8 | 24 | VIII–XVII |
| Third | Reduction | 7 | 21 | VIII–XVII |
| Third | The Modal Syllogism in Depth | 7 | 21 | VIII–XVII |
| Third | Compound Arguments | 8 | 24 | VIII–XVII |
| Third | Induction and Example | 8 | 24 | VIII–XVII |
| Third | Demonstration | 8 | 24 | XVIII |
| Third | The Fallacies in Depth | 9 | 27 | XXI |
| | **Total** | **111** | **333** | |

No True/False questions; no check question uses its own card's example; the correct option is the longest in at most a third of each deck's questions (25–33%, see Checks).

**Exercise sets** (engine block "ADVANCED STUDIES SETS" in `ars-engine.js`, dispatched by `genAdvancedQ`; all `mc4`, so the exercise page, teacher quiz, and scoring needed no new rendering):

| Set | Title | Bank | Levels |
|---|---|---|---|
| XXII | Supposition | 38 marked terms; 7 arguments that change supposition (+8 sound ones as options); 12 empty-subject cases | I–II material, simple, personal; III adds singular, determinate, distributive; IV adds merely confused, collective, improper, and existence; V adds the arguments |
| XXIII | Compound and Exponible Propositions | 44 propositions, used for four question forms (kind; when true; contradictory; resolution) | I–II classify open compounds; III adds exponibles and truth conditions; IV–V contradictories and resolutions, reduplicatives at V |
| XXIV | Figures, Moods, and Reduction | generator over `VALID` (24 mood-figure pairs) and a reduction table of the 15 reducible moods, terms drawn by `makeTerms` | I figure; II mood (figures 1–2); III mood and target; IV operations and the fourth figure; V adds the weakened moods and reduction to the impossible |
| XXV | Compound Arguments | 22 arguments to classify; 9 dilemmas to judge; a generator of Aristotelian sorites (valid, or breaking one rule) | I–II classify; III adds sorites; IV–V adds dilemmas |
| XXVI | Demonstration | 14 arguments (reasoned fact, fact through effect, fact through remote cause, probable); 17 predications (per se modes); 8 failed demonstrations | by tier; failed demonstrations from III |

Moods are named English first with the Latin name once in parentheses ("AAA in the first figure (Barbara)").

**Wiring.** `SETS` and `ROMAN` gain 22–26; `ACT_MEMBERS` and `GP.ACTS` gain `v1`–`v3`; `GP.PREREQS`: 22 → [1,2,3,4], 23 → [5,6,7], 24 and 25 → [8…17], 26 → [18]. A group shows in the Guided Path once any of its sets is open; decks show a "Locked — opens once you pass …" flag until their gate is passed. Help texts describe the Advanced Studies. No id was renumbered, so old exported progress files load unchanged (verified: a file with I–IV passed opens the First Act group and set XXII). `teacher-quiz.html` offers XXII–XXVI. `progress-report.html` lists them in a separate "optional, not graded" card and keeps the grade on the twenty-one original exercises.

## Sources

Paths and loci are in the plan (§1). Used: Maritain, *Formal Logic* (primary); Minerd, "BCS Logic 2023" (`notes/sources/MINERD-BCS-LOGIC-2023.txt`); the ECT article (final author edits, `/Documents/Philosophy/Logic/`); Noone and Klima, *A Little Practical Olde Logick* (manuscript, `/Storage/Philosophia/Logic/Aristotelian Logic/Noone Klima Book/`); Houser, *Logic as a Liberal Art*; Conway, *Aristotelian Formal and Material Logic*; Oesterle; John of St. Thomas, *Outlines* (Wade) and *Material Logic*; Cajetan on Porphyry; Aristotle, *Categories* (Edghill); Peifer, *The Concept in Thomism* (the PDF is truncated; read by OCR with macOS Vision); St. Thomas, *Expositio Posteriorum* and *De fallaciis* (Corpus Thomisticum Latin). Not found: Simon's *An Introduction to Metaphysics of Knowledge* (searched a second time by name and full text; only MacIntyre's review, used for orientation only, and nothing in student text depends on it); Brungardt's logic packet; Vincent Edward Smith's logic text; Klima's Buridan introduction.

## Set XX attribution table

| Old text (`ars-engine.js`, `DIAL_DOCTRINE`) | Verdict | Source checked | New text |
|---|---|---|---|
| "This is the definition Aristotle gives and St. Thomas repeats." (the probable) | Verified, locus added | *Topics* I.1; *Expositio Posteriorum* I, lect. 31, n. 4 ("quae videntur vel pluribus, vel maxime sapientibus"); also lect. 8, n. 5 | "This is the definition Aristotle gives (*Topics* I.1), and St. Thomas repeats it (commentary on the *Posterior Analytics*, bk. I, lect. 31)." |
| "St. Thomas says that a disputation takes place between the opponent and the respondent. Teacher and learner belong to demonstrative disputation…" | Attribute correctly: the text is *De fallaciis* | *De fallaciis*, proem and ch. 1 ("duae personae opponentis et respondentis"); ch. 2 ("inter docentem et addiscentem") | "*De fallaciis*, a treatise attributed to St. Thomas, says that a disputation takes place between the opponent and the respondent (proem and ch. 1). Teacher and learner belong to demonstrative disputation, which is a different kind (ch. 2)." |
| "St. Thomas gives the qualification carefully." ("to the wise, and among the wise the most eminent") | Attribute correctly | *Topics* I.1; *De fallaciis* ch. 2 ("vel sapientibus, et his autem omnibus vel praecipuis et maxime notis") | "Aristotle gives the qualification carefully (*Topics* I.1), and *De fallaciis*, a treatise attributed to St. Thomas, repeats it (ch. 2)." |
| Lead-in XXI (neighboring): "When we reason badly by ourselves, St. Thomas notes, it is always beside our intention" | Attribute correctly | *De fallaciis*, proem ("praeter intentionem hoc accidit quia nullus sui ipsius deceptionem intendit") | "When we reason badly by ourselves, *De fallaciis* notes (proem), it is always beside our intention" |

The set XX lead-in itself attributes nothing to St. Thomas; no doctrine or answer key was changed.

## Dashes

Replaced in `index.html` and `ars-engine.js`: enthymeme and dialectic item texts, two predicable prompts, the eclipse definition, the hypothetical "or perhaps both / but not both" frames, ordinary-speech frames, input hints, Guided Path messages, the help texts, and the teacher-quiz answer separator (" — or — " became "; or "). **Kept as labels:** the level names ("Novice — first figure only", whose text before the dash is read by `DIFF[d].label.split('—')`); the fallacy option names ("Equivocation — one word, two meanings", split by `K.name.split(' — ')`); the page title and calendar-event title; "For instructors — …" links; the Diagram Workshop legend ("× — 'some dog'", "'No S are P' — shade the overlap"); the "A — universal affirmative" key; Guided Path status flags ("Locked — opens once…", "Mastered ★ — …", the "— n of last m" stat); the "—" placeholder for an empty value; the read-aloud joiner; ranges (I.14–15, 1–4) and schematic forms (M–P, A–O). Unsure: the status flags and the Workshop legend, which read as labels but are close to prose.

## Checks

- `node tools/check.js` (new): syntax of the engine and the inline script; every check question's key, distinct options, and three or more options; Reviews on every doctrine and Advanced deck; no prose dashes in deck, lead-in, or set text; the longest-option rule (enforced for Advanced decks and sets, reported for the older ones); every new set at all five levels from at least 20 distinct items. Result: all enforced checks pass. Advanced decks: correct option longest in 25–33% of questions. Sets: XXII 9%, XXIII 16%, XXIV 18%, XXV 24%, XXVI 22% of draws.
- The older decks and lead-ins **break** the longest-option rule (What Logic Is 72%, First Act 61%, Second Act 55%, Third Act 60%, several lead-ins 50–83%); they were not changed (see Decisions).
- Headless Chrome (playwright-core, local Chrome, `python3 -m http.server`): Advanced section after Sophistica; Introduction holds only What Logic Is; in each group the first deck is full width (836 px at 1200 px) and the rest half width (409 px); all 14 decks open and walk to "Finish · Return home"; all 14 Reviews score; sets XXII–XXVI run at Levels I–V; Guided Path hides the Advanced groups until their gates open and shows the locked flags; 360 px width has no horizontal overflow (after the grid fix); `teacher-quiz.html` and `progress-report.html` load. Console: no errors from the course; the only line is the server's 404 for `/favicon.ico`.

## Decisions for Timothy

1. **Scope of the decks.** Fourteen decks (not one per topic in the starting map): the predicables, the categories (antepredicaments and postpredicaments), definition and division, and supposition; opposition with conversion, modal propositions, and compound propositions; figures and moods, reduction, the modal syllogism, compound arguments, induction, demonstration, and the fallacies.
2. **Paired exercises.** Five new sets (XXII–XXVI); no new set for the predicables, categories, opposition, modal propositions, induction, or fallacies, where sets I, II, VI, VII, and XXI already drill the matter.
3. **Gates.** Demonstration (deck and set) opens with XVIII rather than with the whole Third Act, and the Fallacies deck with XXI. The Advanced groups appear in the Guided Path once any of their sets is open.
4. **Grades.** The Advanced sets are optional in `progress-report.html` and not graded, so no existing grade changes. The report's 16-week window now starts from the graded exercises only.
5. **Buridan's limits** (Opposition deck). *Decided: yes; done.*: contraposition of A and O, and obversion from the negative side to the affirmative, need existing terms. This follows Decision §1, but exercise VI still treats obversion and contraposition as unrestricted. Should VI change?
6. **"Non-cause as cause."** *Decided: yes; done.* *De fallaciis* ch. 17 makes it a fault in arguments to the impossible (an idle premise blamed for an absurdity). Lead-in XXI and set XXI present it as modern "false cause." The Advanced deck teaches the treatise's sense and calls false cause "a near relation." Should XXI be brought into line?
7. **Natural supposition.** Following Maritain and Klima (Decision §1, bullet 5), XXII counts "Every triangle has three angles" as true when none is drawn, and an accidental affirmative with an empty subject as false.
8. **The modal vowels.** Maritain's vowels are A, E, I, U (not A, E, I, O); the deck gives them once, in parentheses, with his verse.
9. **De dicto / de re** are taught in English ("of what is said," "of the thing") with the Latin once in parentheses. The deck descriptions avoid the Latin.
10. **The fourth figure.** *Decided; done.* The Figures and Moods deck and the rules text of set XXIV now say that the Aristotelian and Thomist tradition treats the fourth figure as the indirect first figure, following Maritain (*Formal Logic*, pp. 186–187: "the indirect first figure"; "in reality but the first figure concluding indirectly by the transposition of the premisses"). The Galen attribution is given as what historians of logic report ("Historians of logic report that this fourth figure was attributed to Galen"), not in the course's own voice; Maritain himself says only that Galen "is said to have" held it and that it was "attributed to Galen by the Arabs." The indirect moods are named both ways. XXIV includes the fourth figure from Level IV and the weakened moods at Level V.
11. **Theophrastus** appears in one short note at the end of the modal-syllogism deck, as instructed; Kilwardby and St. Albert's "simply" qualification is added from the Decision Sheet (SEP), not verified in their texts.
12. **Aristotle's four predicables** (*Topics* I.4, I.8) are stated from Aristotle and Houser p. 55; the *Organon* PDFs in Dropbox are image-only and were not OCR'd.
13. **Unverified details stated from standard knowledge:** Aristotle's planets, wall, round wounds, and Bryson examples (verified through St. Thomas's commentary and Conway, not the Greek); Galatians 1:8 quoted in the Douay-Rheims; *ST* I q. 1 a. 2 on theology as a subalternated science; Tertullian's dilemma (from Maritain).
14. **Appositives** are given at a person's first mention in each deck (each deck can be opened alone), not once in the whole course.
15. **Terence Parsons** is spelled with one r (the ECT article has "Terrence").
16. **Supposition items show the marked term in bold, not in quotation marks**, even when its supposition is material, since quotation marks would give the answer away.
17. **Quoted example arguments use "you"** ("If you study, you will tire yourself…"); this is the voice of the argument quoted, not coaching.
18. **The help text** now says that Ad Demonstrationem, Dialectica, Rhetorica, and Sophistica open together; it had named only two, though `PREREQS` already opened all four.
19. **The older decks and lead-ins.** *Decided: rebalance; done.* Originally: break the one-third longest-option rule (up to 83%). Rebalancing them would change wording in many questions; it was not done.
20. **Grid fix.** `.sets` now uses `minmax(min(340px,100%),1fr)`, removing a 2 px overflow at 360 px that predates this phase.
21. **index.html size.** Done: the decks are now in `ars-advanced.js`.
22. **`make_text.py` and `SYLLOGISTICA-TEXT.txt`.** Done: extended, run, and committed (see Follow-up).
