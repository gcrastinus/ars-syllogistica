# Propositions reframe

The second act now runs from the propositions deck and its Review to Exercise V (Diagramming Propositions), Exercise VI (Opposition, Equipollence, and Conversion), and Exercise VII (The Modal Propositions). Exercise numbers and set ids are unchanged. `notes/STYLE_GUIDE.md` is in the first commit and was followed for the new student-facing text.

## Commits

| Hash | Subject |
|---|---|
| `d296ad3` | Fold the Venn overview into the diagramming exercise. |
| `8a26671` | Reframe immediate inference as properties of the proposition. |

Both are on `main`. The style guide is part of `d296ad3`.

## Exercise V

The four-card study "Venn Diagrams: An Overview" is no longer a separate deck. Its matter opens Exercise V as two doctrine cards, and the two cards that were already there follow them.

1. **The diagram.** Venn diagrams are named once as a modern aid, published by John Venn, an English logician, in 1880, and used to picture what the tradition teaches. They are not part of its doctrine. The card keeps the four diagrams, the shade / × / plain convention, the other shading convention, and the statement that the diagrams prove nothing.
2. **Existence and the ⊗.** Classical existential import, and the rule for the ⊗.
3. **Finding the form.**
4. **Two premises on three circles.**

The study had `review: false` and stored no scored record. Set id 5 is unchanged, and no progress migration was added. Links, the home menu, the second-act closer, the recitation (point 17), the quiz maker, the instructor report, `tools/check.js`, and `make_text.py` no longer point at that deck.

## Exercise VI

The exercise is titled "Opposition, Equipollence, and Conversion" in the course, the quiz maker, and the instructor report. Set id 6 is unchanged.

Two doctrine cards open it.

1. **Properties of the proposition.** John of St. Thomas, a seventeenth-century Dominican commentator on St. Thomas, treats these in the *Summulae* (the first part of the *Ars Logica*) as properties of the whole proposition, and not as a separate kind of inference. Opposition covers contradictories, contraries, and subcontraries, with subalternation included under his qualification that it is not properly opposition except relatively. Equipollence is equivalence by placing the negation, with the verse *Prae Contradic, Post Contra, Prae postque Subalter.* Conversion is simple, or mutual; accidental, or nonmutual; and by contraposition, with the verse *FECI simpliciter convertitur, EVA per acci, ASTO per contra, sic fit conversio tota.* One sentence says that later logicians call these properties "immediate inferences."
2. **Converse, obverse, contrapositive, contradictory, equipollent.** The working rules, including John Buridan's rule on empty subject terms, are kept word for word. The equipollent is typed in standard form, or "none."

The same sentence is in the second-act closer and in recitation point 18.

### Doctrine check

The cards were checked against John of St. Thomas, *Outlines of Formal Logic*, translated by Francis C. Wade (Marquette University Press, 1955). The Dropbox PDF of that edition does not yield quotable text, because its embedded fonts have a broken character map. The same edition was read as HTML. The Latin *Summulae*, book II, was not found on corpusthomisticum.org (the search returned St. Thomas, not Poinsot) and no usable full Latin text was found on archive.org. No Latin sentence is quoted.

Quoted from the Wade text, as read: the list of the three properties (book II, chapter 9); the definition of opposition; the definition of conversion; and the two memory verses. The definition of equipollence on that page contains a dash, so the card paraphrases it as equivalence of opposed propositions, that is, their having the same meaning, by changing the place of a negative particle. Wade's name appears only in the sources line. The sentence about later logicians agrees with the Maritain card already in Advanced Studies, which was left as it stands.

Obversion is not equipollence in these chapters. It remains in the exercise because the existing items and the Buridan rule use it. It is counted separately below.

The Square of Opposition lab still says "immediate inference" for its own buttons (converse, obverse, contrapositive, contradictory). That lab does not name the removed study, and the wording was left.

Historical notes (`notes/DOCTRINE-AUDIT.md`, `notes/LEADINS-PHASE2-REPORT.md`, `notes/ADVANCED-STUDIES-PLAN.md`) still use the old title. They were not rewritten.

## How fully each property is drilled

Each figure is a share of 2,000 draws at that level, with letters and English terms mixed. Every drawn answer was checked against the engine, and none was marked wrong (`bad 0` at every level). Opposition here is a truth question on the square, or a request for the contradictory. Conversion is the converse or the contrapositive, excluding Buridan items. Equipollence is a proposition with the negative particle placed. Obversion is reported on its own line. Buridan items are the empty-subject obversions and contrapositions, and they are not applied to equipollence.

### Before

This is the engine at `d296ad3`, before equipollence items existed.

| Level | Opposition (truth / contradictory) | Conversion | Equipollence | Obversion | Buridan |
|---|---|---|---|---|---|
| I | 73.7% (47.3 / 26.4) | 26.3% | 0% | 0% | 0% |
| II | 65.8% (48.0 / 17.8) | 17.0% | 0% | 17.3% | 0% |
| III | 63.4% (51.5 / 11.9) | 23.1% | 0% | 13.5% | 0% |
| IV | 59.0% (49.7 / 9.3) | 18.9% | 0% | 8.6% | 13.5% |
| V | 60.0% (49.7 / 10.3) | 19.4% | 0% | 9.4% | 11.3% |

### After

| Level | Opposition (truth / contradictory) | Conversion | Equipollence | Obversion | Buridan |
|---|---|---|---|---|---|
| I | 51.6% (34.1 / 17.5) | 16.4% | 31.9% | 0% | 0% |
| II | 46.2% (33.9 / 12.3) | 10.0% | 33.0% | 10.9% | 0% |
| III | 42.6% (35.0 / 7.6) | 15.7% | 32.6% | 9.0% | 0% |
| IV | 36.8% (29.5 / 7.3) | 15.4% | 27.0% (19.1 follow, 7.9 none) | 7.5% | 13.2% |
| V | 37.7% (29.8 / 7.8) | 16.0% | 27.0% (20.3 follow, 6.8 none) | 6.4% | 13.0% |

Equipollence had not been drilled at all. It is now at least as frequent as conversion at every level, and opposition remains the largest share. From Level IV, about one item in eight is still a Buridan item, as before. The placements are: a negative before the proposition from Level I (all four forms); a negative after the subject of a universal from Level II; a negative both before and after from Level III; and the two placements that make no equipollent from Level IV.

## What was verified

`node tools/check.js` passed before the commit. `python3 make_text.py` regenerated `SYLLOGISTICA-TEXT.txt`. That file no longer contains "Immediate Inference" or "Venn Diagrams: An Overview." The John Venn sentence appears once.

Headless Chrome (the system Chrome binary, driven from outside the repository) opened `index.html` in light and in dark.

- Exercise V opened on "The diagram." The John Venn sentence was on that card. The next card was "Existence and the ⊗." Skipping then to Level I showed a proposition to diagram.
- Exercise VI opened on "Properties of the proposition," under the new title. At Level V the exercise presented an opposition item, an equipollence item whose wording places the negative, and a conversion item. Submitting an answer produced feedback and a next question.
- A seeded Guided Path record (sets 3 and 4 passed, sets 5 and 6 mastered on 2026-10-20, with the current migration flags) still showed "Mastered" on both cards after the exercises and after a reload. The original history was still the start of each record.
- The quiz maker and the instructor report both contain the new title. Neither page produced a console error.
- No console error appeared on the course page in either theme. A favicon failure would have been allowed; none had to be set aside.

## What was not verified

- The Latin text of *Summulae*, book II, was not on the page, so nothing in the cards is quoted from it.
- The instructor report reads an exported progress file through its file control. That upload was not exercised. The page was checked for the new title and for a clean console.
- The test used a fresh browser profile and a record written in the current schema. It did not open an existing student's browser profile.
- Layout was not changed, and a phone-width viewport was not checked.
- The Square of Opposition lab was left on its present wording, as noted above.
