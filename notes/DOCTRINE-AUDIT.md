# Doctrine Audit of Ars Syllogistica

Audited version: commit `d056602` on `main` (October 20, 2026). This is a read-only audit; no course file was changed.

## Scope and method

Everything the course teaches lives in two files, and the audit read both in full:

- `index.html`: the home page and its section glosses, the set descriptions (`SETS`), the "How to Proceed" help, *The Art of Grammar* (`GRAMMAR`, `GRAMMAR_EXTRA`), *What Is Logic · An Orientation* (`ORIENT`, `ORIENT_EXTRA`), the two study sections (the Diagram Workshop and the Square of Opposition), the fifteen "Before the Exercise" screens, and the answer handlers that write the feedback.
- `ars-engine.js`: every item bank, every answer key, every grading function, and every typical-mistake note.

`teacher-quiz.html` and `progress-report.html` draw their questions from the same engine and add no doctrine of their own. The Direct Instruction Scripts are outside the course and were not audited.

The grading logic was also run in Node to confirm what it assumes:

- The engine accepts 24 valid mood-figure pairs, five of them subaltern ("weakened").
- Each of the 232 invalid pairs is caught by at least one named rule, so the catch-all message ("The form fails to preserve truth...") never appears.
- Nine valid moods need an existential-import mark (⊗) in the diagram: Barbari, Celaront, Cesaro, Camestros, Camenos, Darapti, Felapton, Bramantip, and Fesapo.
- The validity of each conjunctive, disjunctive, and conditional mood agrees with its key in every generated case.

**Labels.** EXPLICIT means the point is stated to the student somewhere: in an intro, a help panel, a rule shown with the question, or the feedback. IMPLICIT means the point is only assumed by the items or the grading. When a point is stated only in the feedback after a wrong answer, it is marked "EXPLICIT (feedback only)", because a student who never errs never sees it.

**Locations** are given as `file:line`, together with the name of the array or function and, where helpful, the item's text, because the item banks have no ids.

## Size of the outline

The outline below has 24 sections: the grammar preliminary, the three study sections, the Third Act gloss, and the twenty-one exercise sets (IX and X share a section, as do XII and XIII). It contains 205 numbered doctrine points: 183 EXPLICIT (23 of them stated only, or first, in feedback) and 22 IMPLICIT. Part 4 lists 51 possible errors. The heaviest teaching is in the First Act (the predicables, categories, division, and definition), in Dialectic, and in the Fallacies. The thinnest is the categorical syllogism itself: sets VIII through XI have no intro screen, and the anatomy of the syllogism (its terms, figure, mood, distribution, and general rules) is never stated before the student needs it.

---

# Part 1. The outline, section by section

The order is the order of the home page: Preliminary, Study, First Act, Second Act, Third Act, Ad Demonstrationem, Dialectica, Rhetorica, Sophistica. (On the page Dialectica, set XX, comes before Rhetorica, set XIX.)

## 0. Preliminary: The Art of Grammar

Sources: `index.html:1486–1546` (panels 0–15) and `GRAMMAR_EXTRA` at `index.html:1648–2015` (five questions per panel).

| # | Doctrine point | Where | Status |
|---|---|---|---|
| 0.1 | The trivium is grammar, logic, and rhetoric, in that order, because logic works on statements and a statement is made of words. | panel 0 (`index.html:1487`) | EXPLICIT |
| 0.2 | The parts of speech are a division of functions, not a list of words, since one word can serve two functions ("paint the wall", "buy the paint"). | panel 1 (`:1491`) | EXPLICIT |
| 0.3 | A common noun can be said of many things and a proper noun of only one, and logic uses this as the difference between universal and singular terms. | panel 2 (`:1494`); `GRAMMAR_EXTRA[2]` q3 (`:1704`) | EXPLICIT |
| 0.4 | The verb is the only part of speech that carries time in itself. | panel 3 (`:1496`) | EXPLICIT |
| 0.5 | A noun signifies a stable thing; a verb signifies a doing, a being done, a becoming, or a being in a certain way. | panel 3 (`:1497`) | EXPLICIT |
| 0.6 | Single words are neither true nor false; only a complete statement joining a naming word and a verb is. | panel 4 (`:1499`) | EXPLICIT |
| 0.7 | The joining of noun and verb corresponds to the second act of the mind, which is judgment. | panel 4 (`:1500`); panel 15 | EXPLICIT |
| 0.8 | Grammar judges whether the words are rightly combined; logic judges whether the proposition is true and what follows from it. | panels 4 and 10 (`:1501`, `:1521`) | EXPLICIT |
| 0.9 | Subject and predicate are the two terms of every proposition. | panels 5 and 15 (`:1503`, `:1545`) | EXPLICIT |
| 0.10 | An adjective signifies a quality as belonging to something else, and so it cannot stand alone. | panel 6 (`:1508`) | EXPLICIT |
| 0.11 | The conjunctions "and", "or", and "if" form compound propositions whose truth depends on the connective. | panel 7 (`:1512`) | EXPLICIT |
| 0.12 | Grammatical accidents (number, person, tense) and case mark the function of a word. | panels 8–9 | EXPLICIT |
| 0.13 | A sentence can be grammatical and false, or ungrammatical and possibly true. | panel 10 (`:1522`) | EXPLICIT |
| 0.14 | The modists (thirteenth-century Paris grammarians) ordered the modes of being, understanding, and signifying, each based on the one before. | panels 11–12 | EXPLICIT |
| 0.15 | Thomas of Erfurt says the noun signifies *per modum habitus et quietis*, the verb *per modum fieri et fluxus*. | panel 13 (`:1535`) | EXPLICIT |
| 0.16 | Logic is more general than any one language, because the modes of signifying are common to all languages. | panel 14 (`:1540`) | EXPLICIT |
| 0.17 | To argue from the form of a word to the nature of a thing is the fallacy of figure of speech. | panel 14 (`:1541`) | EXPLICIT |

## S1. Study: What Is Logic · An Orientation

Sources: `ORIENT` at `index.html:1548–1641` and `ORIENT_EXTRA` at `index.html:2020–2174`.

| # | Doctrine point | Where | Status |
|---|---|---|---|
| S1.1 | Logic is the art of reasoning well, because man is the rational animal and reason directs every well-directed act. | panel 1 (`:1551`) | EXPLICIT |
| S1.2 | Logic is also a science, the science of second intentions (relations things have only because they are known). | panel 2 (`:1555`) | EXPLICIT |
| S1.3 | The three acts of the mind are simple apprehension, judgment, and reasoning. | panel 3 (`:1560`) | EXPLICIT |
| S1.4 | Judgment composes (affirms) and divides (denies), and truth and falsity first appear in it. | panel 4 (`:1565`) | EXPLICIT |
| S1.5 | Reasoning moves from what is known to what is not yet known; the example given is a Festino ("No C is A; Some B is A; so Some B is not C"), though the mood is not named. | panel 5 (`:1569`) | EXPLICIT (mood IMPLICIT) |
| S1.6 | The parts of logic are demonstration, dialectic, rhetoric, and poetics, ordered from most to least certain. | panels 6–13 | EXPLICIT |
| S1.7 | Demonstration *quia* proves that a thing is so, often from an effect or a sign; demonstration *propter quid* proves why, through the proper cause. | panels 6–7 (`:1574`, `:1579`) | EXPLICIT |
| S1.8 | An argument is valid when it is impossible for the premises to be true and the conclusion false; validity concerns form and truth concerns matter, and the two together make an argument sound. | panel 8 (`:1584`); `ORIENT_EXTRA[8]` | EXPLICIT |
| S1.9 | Formal logic concerns the arrangement of terms, and material logic concerns the truth of premises. | panel 8 (`:1584`) | EXPLICIT |
| S1.10 | Dialectic concerns the probable; rhetoric inclines a hearer where the evidence is nearly equal; poetics proposes possible accounts. | panels 9–11 | EXPLICIT |
| S1.11 | Fallacies are errors studied in order to avoid them (Aristotle's *Sophistical Refutations*). | panel 12 (`:1603`) | EXPLICIT |
| S1.12 | In a Venn diagram, shading declares a region empty, an × declares at least one thing there, and a plain region is left undetermined. | panel 16 (`:1618`); `ORIENT_EXTRA[16]` | EXPLICIT |
| S1.13 | The four forms A, E, I, and O are drawn on two circles; universals shade and particulars place an ×. | panel 17 (`:1623–1634`) | EXPLICIT |
| S1.14 | Traditional logic treats every general term as non-empty, so a universal carries existential import and "All S are P" yields "Some S are P"; modern set theory denies this. | panel 18 (`:1635`) | EXPLICIT |
| S1.15 | Diagrams display what a proposition says but prove nothing; language is the first instrument of reason. | panel 19 (`:1640`) | EXPLICIT |

## S2. Study: The Diagram Workshop

Sources: `index.html:746–805` and `:2337–2510`; `readout2`, `readout3`, and `spConsequences` at `ars-engine.js:1492–1597`.

| # | Doctrine point | Where | Status |
|---|---|---|---|
| S2.1 | A general term is a universal standing over many individuals, and a circle pictures all the individuals it can be said of. | "What the circles mean" (`index.html:755`, `:783`) | EXPLICIT |
| S2.2 | Each categorical proposition makes exactly one mark: one shaded region or one ×. | "How to read a Venn diagram" (`:787`) | EXPLICIT |
| S2.3 | On three circles, a universal empties a lens of two cells, and one × can assert several particular propositions at once. | `:792` | EXPLICIT |
| S2.4 | Shading a whole circle contradicts the presumption that every term is non-empty. | `readout2`/`readout3` warnings (`ars-engine.js:1501`, `:1546`) | EXPLICIT |
| S2.5 | A conclusion is what the premise marks force about S and P; a direct marking of the S–P region is a further premise, not a conclusion. | `spConsequences` (`ars-engine.js:1549`); readout (`index.html:2502`) | EXPLICIT |
| S2.6 | When existential import is granted, a particular conclusion can follow from universal premises. | `spConsequences` `withImport` (`ars-engine.js:1591`) | EXPLICIT |
| S2.7 | Moods are named (Barbara, Celarent, and so on) and coded as mood-figure (AAA-1); the coding is never explained. | presets (`index.html:2446–2454`) | IMPLICIT |

## S3. Study: The Square of Opposition

Sources: `index.html:808–844` and `:2512–2606`.

| # | Doctrine point | Where | Status |
|---|---|---|---|
| S3.1 | Every simple categorical proposition has a quantity (universal or particular) and a quality (affirmative or negative), and their four combinations are named A, E, I, and O from *affirmo* and *nego*. | `:817–818` | EXPLICIT |
| S3.2 | Contradictories never share a truth value; contraries cannot both be true; subcontraries cannot both be false; in subalternation truth descends and falsity ascends. | `:820` | EXPLICIT |
| S3.3 | E and I convert simply; A converts only *per accidens*; O does not convert. | `:825–827` | EXPLICIT |
| S3.4 | Obversion changes the quality and negates the predicate; it applies to all four forms and gives an equivalent. | `:828` | EXPLICIT |
| S3.5 | Contraposition is obversion, conversion, and obversion again; A and O contrapose fully, E only *per accidens*, and I not at all. | `:829` | EXPLICIT |
| S3.6 | The contradictory reverses truth rather than preserving it. | `:830` | EXPLICIT |
| S3.7 | The weakening in conversion and contraposition *per accidens* depends on existential import. | `:826`, `:2596` | EXPLICIT |

## I. The Predicables

Sources: the intro at `index.html:881–910`; the engine at `ars-engine.js:2521–2778` (`PRED_RULES`, `PRED_DOCTRINE`, `PRED_ITEMS`, `PRED_PRINCIPLES`, `PRED_SORT_OPTS`, `PRED_SWAP`, `PRED_PAIRS`).

| # | Doctrine point | Where | Status |
|---|---|---|---|
| I.1 | There are five ways a general term can be said of a subject, after Porphyry (the third-century Neoplatonist who wrote the *Isagoge*): genus, species, difference, property, and accident. | intro (`index.html:888`); `PRED_RULES` (`ars-engine.js:2533`); `PRED_PRINCIPLES` "How many are the predicables" | EXPLICIT |
| I.2 | The genus is said of many things that differ in species, and it answers "what is it?" with the wider nature. | intro (`:890`); `PRED_DOCTRINE.gen` | EXPLICIT |
| I.3 | The species is the genus narrowed by a difference, and it is said of individuals. | intro (`:892`); `PRED_DOCTRINE.spec`; `PRED_PRINCIPLES` q1 | EXPLICIT |
| I.4 | The difference divides the genus and constitutes the species; it answers *quale quid*. | intro (`:894`); `PRED_PRINCIPLES` "The difference ... answers which question" | EXPLICIT |
| I.5 | The property follows from the essence without being part of it, and it belongs to every member of the species, to that species alone, and always. | intro (`:896`); `PRED_DOCTRINE.prop` | EXPLICIT |
| I.6 | An accident may be present or absent while the subject stays the same thing; it is separable or inseparable, but never part of the essence. | intro (`:898`); `PRED_PRINCIPLES` "An INSEPARABLE accident" | EXPLICIT |
| I.7 | Two questions sort four of the predicables: is the predicate part of what the subject is, and is it said of that subject alone? (The first concerns comprehension, the second extension.) | intro (`:900`); `genPredSortQ` (`ars-engine.js:2713`) | EXPLICIT |
| I.8 | A property converts with its species, but a genus and an inseparable accident do not. | intro (`:901`); `PRED_SWAP` | EXPLICIT |
| I.9 | The power to laugh is the property, and the act of laughing is an accident. | intro (`:902`); `PRED_PAIRS` | EXPLICIT |
| I.10 | Genus and species are relative along the tree of Porphyry; the supreme genus is never a species, the lowest species is never a genus, and an individual is neither. | intro (`:903`); `PRED_PRINCIPLES` "Animal — is it a genus or a species?" and "Which is the SUPREME genus" | EXPLICIT |
| I.11 | A remote genus is still a genus (an oak is a living thing). | `PRED_ITEMS.gen` tier 3 (`:2556`) | EXPLICIT |
| I.12 | Porphyry gives four senses of "property", and only the fourth (all, only, always) is the property in the strict sense. | `PRED_PRINCIPLES` tier 3 (`:2677`) | EXPLICIT |
| I.13 | The predicables are second intentions grounded in things, and the categories are first intentions. | intro to II (`:927`); `PRED_PRINCIPLES` (`:2673`) | EXPLICIT |
| I.14 | Signification does not change from sentence to sentence, but supposition does; in "Man is a species", "man" has simple supposition. | intro (`:904`); `PRED_PRINCIPLES` (`:2665`) | EXPLICIT |
| I.15 | Which predicable a predicate is depends on the subject it is said of (for example, "even" is the difference of the even numbers). | `PRED_ITEMS` across kinds | IMPLICIT |

## II. The Categories

Sources: the intro at `index.html:913–933`; the engine at `ars-engine.js:2797–2955` (`CAT_RULES`, `CAT_DOCTRINE`, `CAT_GLOSS`, `CAT_WORDS`, `CAT_PRINCIPLES`).

| # | Doctrine point | Where | Status |
|---|---|---|---|
| II.1 | There are ten categories: substance and nine accidents. | intro (`:920`); `CAT_RULES` | EXPLICIT |
| II.2 | Primary substance is the individual, and secondary substance is the species or genus it belongs to. | intro (`:922`); `CAT_PRINCIPLES` (`:2911`) | EXPLICIT |
| II.3 | Accidents exist only in a substance, and so all other categories depend on substance. | `CAT_PRINCIPLES` (`:2887`) | EXPLICIT |
| II.4 | St. Thomas derives the nine accidents from substance: quantity from matter, quality from form, relation toward another; action and passion from within; when, where, and posture as measures from outside; habit as something merely attached. | intro (`:923–926`); `CAT_RULES` (`:2810`); `CAT_PRINCIPLES` tier 2 | EXPLICIT |
| II.5 | The mark proper to substance is that one and the same substance receives contraries. | `CAT_PRINCIPLES` tier 3 (`:2919`) | EXPLICIT |
| II.6 | A relative is defined entirely by its reference to something else. | `CAT_PRINCIPLES` (`:2923`) | EXPLICIT |
| II.7 | Quantity is either discrete (number) or continuous (magnitude). | `CAT_PRINCIPLES` (`:2915`) | EXPLICIT |
| II.8 | Knowledge and virtue are habits, the first species of quality, and knowledge is also relative. | `CAT_PRINCIPLES` (`:2935`) | EXPLICIT |
| II.9 | Posture differs from where and from habit, because it is the arrangement of a thing's parts in its place. | `CAT_PRINCIPLES` (`:2927`) | EXPLICIT |
| II.10 | A predicate's category can be read from its form ("he is shod", "being cut", "twice as large"). | `CAT_WORDS` (`:2838`) | IMPLICIT |

## III. Division

Sources: the set description (`index.html:1279`); the intro at `index.html:936–963`; the engine at `ars-engine.js:2169–2519` (`DIV_RULES`, `DIV_STOCK`, `DIVKIND_STOCK`, `DIV_PRINCIPLES`, `divVerdict`).

| # | Doctrine point | Where | Status |
|---|---|---|---|
| III.1 | To divide is to break a whole into its members, and division leads to definition. | set description; intro (`:943`) | EXPLICIT |
| III.2 | There are four kinds of division: essential (a genus into its species), integral (a whole into its parts), by powers, and accidental. | intro (`:945–956`); `DIVKIND_DOCTRINE` (`:2392`) | EXPLICIT |
| III.3 | The members must cover the whole, must not overlap, must belong to the whole, and must be sorted on a single basis. | intro (`:957`); `DIV_RULES` (`:1859`); `DIV_RULE_META` | EXPLICIT |
| III.4 | In an essential division the species are marked off by opposed differences. | intro (`:945`) | EXPLICIT |
| III.5 | No integral part is called by the name of the whole. | intro (`:948`); `DIVKIND_DOCTRINE.int` | EXPLICIT |
| III.6 | Mixing bases makes the members overlap. | intro faulty example (`:947`); `DIV_STOCK.mixed` | EXPLICIT |
| III.7 | A genus may be divided by a privative difference ("those with backbones and those without"). | `DIVKIND_STOCK.ess` (`:2415`) | IMPLICIT |
| III.8 | Adequacy is judged by extension: membership, overlap, and covering are tested one member at a time. | `divVerdict` and `divFaults` (`:2178`, `:2198`) | IMPLICIT |
| III.9 | A division can break more than one rule, and each true diagnosis is accepted. | `genDivComputedQ` (`:2259`) | EXPLICIT (feedback) |

## IV. Definition

Sources: the intro at `index.html:966–985`; the engine at `ars-engine.js:1837–2168` (`DEF_RULES`, `DEF_ITEMS`, `DEF_RULE_META`, `DEF_KIND_DOCTRINE`, `DEF_KIND_STOCK`, `DEF_PRINCIPLES`).

| # | Doctrine point | Where | Status |
|---|---|---|---|
| IV.1 | A definition answers the question "what is it?" | intro (`:973`) | EXPLICIT |
| IV.2 | There are four kinds of definition: nominal, essential, descriptive, and causal. | intro (`:975–978`); `DEF_KIND_DOCTRINE` | EXPLICIT |
| IV.3 | The nominal definition comes first, after John of St. Thomas (João Poinsot, the seventeenth-century Dominican whose *Ars Logica* the course follows). | intro (`:975`); `DEF_PRINCIPLES` (`:2147`) | EXPLICIT |
| IV.4 | The essential definition gives the proximate genus and the specific difference. | intro (`:976`); `DEF_PRINCIPLES` q1 | EXPLICIT |
| IV.5 | A descriptive definition picks out the thing by a property or a telltale feature without saying what it is. | intro (`:977`) | EXPLICIT |
| IV.6 | A causal definition works through one of the four causes, and the final cause enters the definition of everything made by craft. | intro (`:978`); `DEF_KIND_STOCK.caus` | EXPLICIT |
| IV.7 | A good definition is convertible with the thing defined (neither too broad nor too narrow), clearer than it (no metaphor), not circular, positive where possible, and brief. | intro (`:979`); `DEF_RULES` (`:1858`) | EXPLICIT |
| IV.8 | Convertibility means that the definition is true of exactly the things the term is true of. | `DEF_PRINCIPLES` (`:2131`) | EXPLICIT |
| IV.9 | Brevity means giving only the genus and the difference, so adding a property counts as wasted words ("Man is a rational animal able to laugh"). | `DEF_RULE_META.extra`; `DEF_PRINCIPLES` (`:2143`) | EXPLICIT |
| IV.10 | A synonym, or a definition that uses a word from the same root, counts as circular ("Man is a human being"). | `DEF_ITEMS.circ` | IMPLICIT |
| IV.11 | Every sound rule-item definition is said to give the kind and the difference, including definitions of artifacts by their end. | `genDefRuleQ` feedback (`:2038`) | IMPLICIT |

## V. Diagramming Propositions

There is no intro screen. Sources: the set description (`index.html:1287–1289`); `genVennQ`, `vennMistake`, `genVenn2Q`, and `vennMistake3` (`ars-engine.js:613–720`); `submitVenn` and `submitVenn3` (`index.html:2912`, `:2980`).

| # | Doctrine point | Where | Status |
|---|---|---|---|
| V.1 | A shades S outside P, E shades the overlap, I places an × in the overlap, and O places an × in S outside P. | orientation (S1.13); feedback `DESC` (`index.html:2986`) | EXPLICIT |
| V.2 | A universal only declares a region empty and asserts no existence. | `vennMistake` (`ars-engine.js:653`); `vennMistake3` (`:706`) | EXPLICIT (feedback only) |
| V.3 | Diagramming the converse is a mistake, because A and O do not convert. | `vennMistake` (`:657`) | EXPLICIT (feedback only) |
| V.4 | "Only P are S" means "All S are P", and English paraphrases must be reduced to standard form. | Level IV+ letters (`:626`); English paraphrases at Level III+ (`:625`) | IMPLICIT here (taught in XV) |
| V.5 | Universal premises are shaded first, each emptying a lens of two cells, and a particular's × then goes where the shading leaves room. | feedback (`index.html:2922`; `ars-engine.js:713–719`) | EXPLICIT (feedback only) |

## VI. Immediate Inference

Sources: the intro at `index.html:1015–1033`; the engine at `ars-engine.js:1089–1255`.

| # | Doctrine point | Where | Status |
|---|---|---|---|
| VI.1 | An immediate inference draws a proposition from a single proposition, with no middle term. | intro (`:1022`) | EXPLICIT |
| VI.2 | The rules of conversion, obversion, contraposition, and the contradictory are as in S3. | intro (`:1024–1026`) | EXPLICIT |
| VI.3 | The relations of the square determine truth values, and "undetermined" is the answer wherever the square forbids nothing. | intro (`:1027`); `REL_TEXT`; `immMistakeTruth` (`:1254`) | EXPLICIT |
| VI.4 | Complements are written with "non-". | input hint (`index.html:2795`) | EXPLICIT |
| VI.5 | Contradictories differ in both quantity and quality; contraries are the two universals. | `immMistakeOp` (`:1232`) | EXPLICIT (feedback only) |
| VI.6 | The typed answer must match the expected form exactly, so only the full contrapositive ("All non-P are non-S") is accepted, not the partial one ("No non-P are S"). | `checkImm` (`:1178`) | IMPLICIT |

## VII. The Modal Propositions

Sources: the intro at `index.html:860–878`; the engine at `ars-engine.js:1599–1755`.

| # | Doctrine point | Where | Status |
|---|---|---|---|
| VII.1 | A modal proposition says how the predicate belongs: necessarily, impossibly, or possibly. | intro (`:867`) | EXPLICIT |
| VII.2 | There are four corners (necessary, impossible, possible, possible not), and "impossible" means "necessarily not". | intro (`:869`); `MODAL_GLOSS.equip` | EXPLICIT |
| VII.3 | The modal square has its contraries, subcontraries, contradictories, and subalterns. | intro (`:869`); `MODAL_GLOSS.msq`; `MREL_TEXT` | EXPLICIT |
| VII.4 | Two modal expressions are equipollent when they reduce to the same corner. | intro (`:870`) | EXPLICIT |
| VII.5 | A negation before the mode moves to the contradictory corner; a negation after it negates only the dictum. | intro (`:871`); `modalEquipMistake` | EXPLICIT |
| VII.6 | *Ab necesse ad posse valet consequentia*; *a posse ad necesse non valet*. | `MREL_TEXT` (`:1675`); `modalEquipMistake` (`:1658`) | EXPLICIT (feedback) |
| VII.7 | The scholastics' mnemonic is *Amabimus, Edentuli, Iliace, Purpurea*. | intro (`:871`); feedback (`index.html:3238`) | EXPLICIT (named, not explained) |
| VII.8 | The composite and divided senses differ in the scope of the mode. | intro (`:872`); `MODAL_GLOSS.sense`; `modalSenseNote` | EXPLICIT |
| VII.9 | A privation removes the power itself ("The blind man can see" is false in both senses). | `SENSE_POOL` (`:1731`) | EXPLICIT (feedback) |
| VII.10 | Essence fixes what is possible ("A man can be a stone" and "A horse can be a man" are false in both senses). | `SENSE_POOL` (`:1721–1724`) | EXPLICIT (feedback) |

## The Third Act: section gloss

| # | Doctrine point | Where | Status |
|---|---|---|---|
| T.1 | The form of reasoning is the syllogism, which moves from the known to the unknown. | `index.html:642` | EXPLICIT |
| T.2 | An argument is valid when its conclusion must be true if its premises are, whatever they are about. | `:642` | EXPLICIT |
| T.3 | In every kind of argument the conclusion follows the weaker part. | `:642` | EXPLICIT (see error E25) |

## VIII. Diagramming Syllogisms

There is no intro screen. Sources: the set description (`index.html:1290–1292`); `genVennSyllQ` and `vennMistake3` (`ars-engine.js:692–720`); `submitVenn3` (`index.html:2912`).

| # | Doctrine point | Where | Status |
|---|---|---|---|
| VIII.1 | Once the premises of a valid syllogism are diagrammed, the conclusion is already contained in the diagram. | feedback (`index.html:2921`) | EXPLICIT (feedback) |
| VIII.2 | Universal premises are shaded first, and then the ×s are placed. | `vennMistake3` (`:719`) | EXPLICIT (feedback only) |
| VIII.3 | Where a particular conclusion comes from universal premises, the ⊗ of existential import goes in the only unshaded cell of the term concerned. | set description (`:1292`); `vennMistake3` (`:710`) | EXPLICIT (only the bare instruction before the first error) |
| VIII.4 | Only valid moods are diagrammed in this set. | `genVennSyllQ` uses `pickValid` | IMPLICIT |

## IX–X. Syllogistic Form in the Abstract and in the Concrete

There is no intro screen. Sources: the set descriptions (`index.html:1293–1298`); `VALID`, `distributes`, `violations`, `genValidityQ`, `singularOption`, and `mistakeNoteValidity` (`ars-engine.js:5–64`, `198–223`, `1048–1068`); `validityDetail` (`index.html:3108`).

| # | Doctrine point | Where | Status |
|---|---|---|---|
| IX.1 | Validity depends on form alone, not on the truth of the premises. | set descriptions; `mistakeNoteValidity` (`:1066`) | EXPLICIT |
| IX.2 | Capital letters stand for general terms and lower-case letters for singular terms. | set IX description | EXPLICIT |
| IX.3 | The major premise is written first, the minor second, and the conclusion has S as subject and P as predicate. | `genValidityQ` layout | IMPLICIT |
| IX.4 | The four figures are fixed by the position of the middle term (1: M–P, S–M; 2: P–M, S–M; 3: M–P, M–S; 4: P–M, M–S). | `FIG_POS` (`:21`); feedback says only "figure 2" | IMPLICIT |
| IX.5 | A mood is the sequence of A, E, I, and O in the major, the minor, and the conclusion. | feedback codes "EIO-2" | IMPLICIT |
| IX.6 | There are 24 valid mood-figure pairs, including five subaltern moods and the fourth figure, and each has its mnemonic name. | `VALID` (`:14–19`); names in feedback | IMPLICIT (names EXPLICIT) |
| IX.7 | A distributes its subject, E both terms, I neither, and O its predicate. | `distributes` (`:30`) | IMPLICIT |
| IX.8 | The general rules are: no conclusion from two negatives; the middle must be distributed at least once; no illicit major; no illicit minor; a negative premise requires a negative conclusion; a negative conclusion requires a negative premise; no conclusion from two particulars. | `violations` (`:46–60`); `mistakeNoteValidity` (`:1051–1057`) | EXPLICIT (feedback only) |
| IX.9 | A singular proposition is treated as universal, so a singular subject is distributed. | `singularOption` (`:199`) | IMPLICIT here (EXPLICIT in XV, `index.html:1004`) |
| IX.10 | A singular middle term in the third figure gives an expository syllogism. | `singularOption` (`:203`) | IMPLICIT |
| IX.11 | The weakened moods are valid on the traditional reading, because universal premises carry existential import. | `validityDetail` (`index.html:3111`); `mistakeNoteValidity` (`:1062`) | EXPLICIT (feedback) |
| IX.12 | Fourth-figure syllogisms reverse the natural order of predication but break no rule. | `mistakeNoteValidity` (`:1064`) | EXPLICIT (feedback only) |
| IX.13 | Implausible premises do not make an argument invalid (set X). | `mistakeNoteValidity` (`:1066`); set X instruction | EXPLICIT |

## XI. Drawing the Conclusion

There is no intro screen. Sources: the set description (`index.html:1300–1302`); `acceptedConclusions`, `checkConclusionAnswer`, and `mistakeNoteConclusion` (`ars-engine.js:315–404`, `1069–1087`).

| # | Doctrine point | Where | Status |
|---|---|---|---|
| XI.1 | The conclusion joins the two extreme terms, and the middle term never appears in it. | `mistakeNoteConclusion` (`:1077`) | EXPLICIT (feedback only) |
| XI.2 | Any valid conclusion is accepted, including the weakened conclusion and the conclusion with the extremes reversed. So the major term is whichever extreme is predicate of the conclusion, whatever the order of the premises. | `acceptedConclusions` (`:319–336`); hint (`index.html:2802`) | IMPLICIT (the acceptance is EXPLICIT; the doctrine behind it is not) |
| XI.3 | When the premises secure only part of the subject, only a particular conclusion follows. | `mistakeNoteConclusion` (`:1080`) | EXPLICIT (feedback only) |
| XI.4 | A conclusion cannot simply be turned around, because only E and I convert. | `:1083` | EXPLICIT (feedback only) |
| XI.5 | Some pairs of premises yield no conclusion in any arrangement. | set description; `:1073` | EXPLICIT |

## XII–XIII. The Conjunctive and Disjunctive Syllogism; The Hypothetical Syllogism

Sources: the intros at `index.html:1036–1073`; `HYP_MOODS`, `HYP_INFO`, `hcBuild`, `hcBuildProp`, `hypMistake`, and `hypcMistake` (`ars-engine.js:1257–1487`).

| # | Doctrine point | Where | Status |
|---|---|---|---|
| XII.1 | These syllogisms are built on whole propositions joined by a connective, not on terms. | intro to XII (`:1043`) | EXPLICIT |
| XII.2 | The conjunctive ("not both") concludes only by *ponendo tollens*; *tollendo ponens* from it is a fallacy. | intro (`:1045`); `HYP_INFO.PT/TP` | EXPLICIT |
| XII.3 | The disjunctive concludes by *tollendo ponens*, and by *ponendo tollens* only when it is strict ("but not both"). | intro (`:1046–1047`); `HYP_MOODS` | EXPLICIT |
| XII.4 | The connective's marker decides whether the disjunction is strict or broad. | intro (`:1047`); `hypMistake` (`:1465`) | EXPLICIT |
| XII.5 | A component may be a categorical proposition of any quantity, and to deny it is to assert its contradictory. | hint (`index.html:2800`); `hcBuildProp` (`:1353`) | EXPLICIT (hint) |
| XIII.1 | A conditional asserts a connection, not a fact; it has an antecedent and a consequent. | intro to XIII (`:1063`) | EXPLICIT |
| XIII.2 | *Ponendo ponens* and *tollendo tollens* are valid; affirming the consequent and denying the antecedent are fallacies. | intro (`:1065–1067`); `HYP_INFO` | EXPLICIT |
| XIII.3 | The antecedent or the consequent may itself be negative. | `hcBuild` at Level IV (`:1396`) | IMPLICIT |

## XIV. The Mixed Consequence

There is no intro screen; the set relies on the intros to XII and XIII. Sources: the set description (`index.html:1312–1314`); `genHypConclQ` and `checkHypAnswer` (`ars-engine.js:1422–1459`).

| # | Doctrine point | Where | Status |
|---|---|---|---|
| XIV.1 | From each mood the student must produce the conclusion, or "none" when the mood is fallacious. | set description | EXPLICIT |
| XIV.2 | A proposition may be denied by stating its contradictory or by "it is not the case that ...". | hint (`index.html:2800`); `checkHypAnswer` (`:1438`) | EXPLICIT |

## XV. Arguments in Ordinary Speech

Sources: the intro at `index.html:988–1012`; `TPL`, `genOrdinaryQ`, `genWildHypQ`, and `genWildModalQ` (`ars-engine.js:406–489`, `1797–1835`).

| # | Doctrine point | Where | Status |
|---|---|---|---|
| XV.1 | When quantity is missing it is read from the sense, and the indefinite "a" can be universal or particular. | intro (`:997`) | EXPLICIT |
| XV.2 | "Not all" means O; "All S are not P" is ambiguous. | intro (`:998`) | EXPLICIT |
| XV.3 | "Only", "none but", and "no one except" reverse the terms. | intro (`:999`) | EXPLICIT |
| XV.4 | "A few" affirms, and "few" chiefly denies. | intro (`:1000`) | EXPLICIT |
| XV.5 | Existential sentences ("there are ...", "there are no ...") are reduced to standard form. | intro (`:1001`) | EXPLICIT |
| XV.6 | Words such as "since", "because", and "therefore" indicate premises and conclusions, and the conclusion may come first. | intro (`:1002`) | EXPLICIT |
| XV.7 | A verb other than the copula is restated with "are" and "things that". | intro (`:1003`) | EXPLICIT |
| XV.8 | A singular subject is taken as a universal with existential import. | intro (`:1004`) | EXPLICIT |
| XV.9 | The connectives must be identified, along with which moods each one licenses. | intro (`:1005`) | EXPLICIT |
| XV.10 | Modal words in the conclusion are governed by the weaker premise. | intro (`:1006`) | EXPLICIT |
| XV.11 | "Whatever is an S is a P" and "If something is an S, then it is a P" are A propositions; "S are never P", "not a single S", and "nothing that is an S" are E. | `TPL` (`:408–447`) | IMPLICIT |

## XVI. The Modal Syllogism

Sources: the intro at `index.html:1076–1093`; `genModalSyllQ` and `modalSyllMistake` (`ars-engine.js:1756–1777`).

| # | Doctrine point | Where | Status |
|---|---|---|---|
| XVI.1 | The three modes of premises are necessary, assertoric, and contingent. | intro (`:1083`) | EXPLICIT |
| XVI.2 | *Peiorem sequitur semper conclusio partem*: the conclusion follows the weaker premise in mode, as it does in quality and quantity. | intro (`:1085`); feedback (`index.html:3280`) | EXPLICIT |
| XVI.3 | The order of strength is necessary, then assertoric, then contingent. | intro (`:1086`) | EXPLICIT |
| XVI.4 | No mode can rescue an invalid form. | feedback (`index.html:3277`) | EXPLICIT (feedback) |
| XVI.5 | A necessary conclusion requires two necessary premises. | `modalSyllMistake` (`:1775`) | EXPLICIT (feedback only) |

## XVII. The Chain of Syllogisms

Sources: the intro at `index.html:1096–1113`; `genChainQ` (`ars-engine.js:225–313`).

| # | Doctrine point | Where | Status |
|---|---|---|---|
| XVII.1 | A chain of syllogisms is a polysyllogism, and when the intermediate conclusions are left unspoken it is a sorites. | intro (`:1103`) | EXPLICIT |
| XVII.2 | Each conclusion becomes a premise of the next syllogism. | intro (`:1105`) | EXPLICIT |
| XVII.3 | The chain is valid only if every link is valid. | intro (`:1106`) | EXPLICIT |
| XVII.4 | Each earlier conclusion serves as the minor premise of the next link, so the chain runs forward (episyllogistically). | `genChainQ` comment (`:226`) | IMPLICIT |

## XVIII. The Matter and the Form (Ad Demonstrationem)

Sources: the section gloss (`index.html:648`); the intro at `index.html:1116–1133`; the knowledge bases and glosses (`ars-engine.js:722–1045`).

| # | Doctrine point | Where | Status |
|---|---|---|---|
| XVIII.1 | A demonstration draws its conclusion from premises that are first, necessary, better known than the conclusion, and causal, and it shows why the thing must be so. | intro (`:1123`) | EXPLICIT |
| XVIII.2 | An argument is sound when it is valid and its premises are true, and unsound when it lacks either. | intro (`:1125`) | EXPLICIT |
| XVIII.3 | This exercise does not yet test whether the premises are first and causal. | intro (`:1126`) | EXPLICIT |
| XVIII.4 | A valid argument with a false premise is the commonest imitation of knowledge. | intro (`:1127`) | EXPLICIT |
| XVIII.5 | True premises cannot make an invalid form valid, and a conclusion may be true even when the argument fails. | feedback (`index.html:2945`, `:2951`) | EXPLICIT (feedback) |
| XVIII.6 | Truth is judged by the classical definitions. Euclid holds that the unit is not a number, that an isosceles triangle has two sides alone equal, and that a point is not a magnitude. St. Thomas holds that a passion is not a habit, that the theological virtues observe no mean, and that prudence is both intellectual and moral. *De Anima* holds that the oyster is an animal without sight. | KB comments (`:726–733`, `:776–782`, `:812–815`); `mistakeNoteSound` (`:1043`) | IMPLICIT (the glosses are EXPLICIT but partial; see errors E10–E11) |

## XX. Dialectic

Sources: the section gloss (`index.html:654`); the intro at `index.html:1157–1181`; the engine at `ars-engine.js:3587–3903` (`TOPICS`, `DIAL_TOPICS`, `INVENT_ITEMS`, `ENDOX`, `RESP`, `DIAL_DOCTRINE`).

| # | Doctrine point | Where | Status |
|---|---|---|---|
| XX.1 | A premise is probable when it seems so to everyone, or to most, or to the wise (and, among the wise, to all of them or to the most eminent). | intro (`:1166`); `DIAL_DOCTRINE` | EXPLICIT |
| XX.2 | Dialectic reaches a reasoned opinion, and demonstration reaches science. | intro (`:1168`) | EXPLICIT |
| XX.3 | A topic (*locus*) is a standing relation from which an argument is drawn. The course names twelve: definition, genus, species, property, opposites, more and less, likeness, whole and parts, cause and end, conjugates, the name, and authority. | intro (`:1169`) lists nine; `TOPICS` (`:3602`) has twelve | EXPLICIT |
| XX.4 | Each topic carries a maxim (*maxima propositio*) on which the argument depends. | intro (`:1174`); `DIAL_DOCTRINE` | EXPLICIT |
| XX.5 | Logic is divided into the art of finding (the Topics) and the art of judging (the Analytics). | intro (`:1173`); `DIAL_DOCTRINE` (`:3834`) | EXPLICIT |
| XX.6 | Authority is a real topic but the weakest. | intro (`:1171`); `DIAL_DOCTRINE` | EXPLICIT |
| XX.7 | A premise has one of four standings: demonstrable, granted by all, granted by the learned, or one person's opinion. | `ENDOX` (`:3726`) | EXPLICIT (rule shown) |
| XX.8 | An objection is answered in one of four ways: distinguish, deny, grant the premises and deny the consequence, or concede and narrow the thesis. | intro (`:1172`); `RESP` (`:3768`) | EXPLICIT |
| XX.9 | A disputation has an opponent and a respondent. | intro (`:1175`); `DIAL_DOCTRINE` (`:3846`) | EXPLICIT |
| XX.10 | A fallacy is an argument that depends on a maxim that is false but looks true. | intro (`:1174`) | EXPLICIT |
| XX.11 | Dialectic stands between rhetoric and demonstration, and it differs from the testing disputation. | `DIAL_DOCTRINE` (`:3858`, `:3866`) | EXPLICIT |

## XIX. The Enthymeme (Rhetorica)

Sources: the section gloss (`index.html:660`); the intro at `index.html:1136–1153`; the engine at `ars-engine.js:2957–3173`.

| # | Doctrine point | Where | Status |
|---|---|---|---|
| XIX.1 | An enthymeme is a syllogism with a premise (or the conclusion) left unspoken. | intro (`:1143`) | EXPLICIT |
| XIX.2 | A premise may be suppressed for brevity, because it is obvious, or because it is weak. | intro (`:1145`) | EXPLICIT |
| XIX.3 | In a first-order enthymeme the major is hidden; in a second-order enthymeme the minor is. | `ENTH_RULE_LINE` (`:3058`); feedback (`index.html:3178`) | EXPLICIT |
| XIX.4 | The tacit premise must join the middle term to the term of the conclusion that is missing from the given premise. | `enthMistake` (`:3053`) | EXPLICIT (feedback only) |
| XIX.5 | Any premise that completes a valid mood is accepted, and sometimes no premise can complete the argument. | hint (`index.html:2797`); `enthCandidates` | EXPLICIT |
| XIX.6 | The direction of the tacit premise matters, because its converse gives the fallacy of the consequent. | `ENTH_POOL` feedback | EXPLICIT (feedback) |
| XIX.7 | Aristotle distinguishes the necessary sign (milk, so she has given birth) from the refutable sign. | `ENTH_POOL` (`:3067`, `:3071`, `:3143`) | EXPLICIT (feedback only) |
| XIX.8 | Restoring validity does not restore soundness, because the tacit premise may be false. | feedback (`index.html:3187`) | EXPLICIT (feedback) |

## XXI. The Fallacies (Sophistica)

Sources: the section gloss (`index.html:666`); the intro at `index.html:1184–1207`; the engine at `ars-engine.js:3175–3585` (`FAL_KINDS`, `FAL_ITEMS`, `FAL_PRINCIPLES`, `FAL_DOCTRINE`, `DISP_KINDS`, `META_KINDS`).

| # | Doctrine point | Where | Status |
|---|---|---|---|
| XXI.1 | A fallacy is an argument that looks sound and is not. | intro (`:1191`); `FAL_RULES` | EXPLICIT |
| XXI.2 | Every fallacy has a cause of the appearance and a cause of the failure. | intro (`:1193`); `FAL_DOCTRINE` | EXPLICIT |
| XXI.3 | There are two families: six fallacies in the words and seven outside them. | intro (`:1195`) | EXPLICIT |
| XXI.4 | The six fallacies in the words follow from three kinds of ambiguity (actual, potential, and apparent). | intro (`:1196`); `FAL_DOCTRINE` (`:3524`) | EXPLICIT |
| XXI.5 | The thirteen fallacies are each given with a cause of the appearance, a cause of the failure, and an answer. | `FAL_KINDS` (`:3262`) | EXPLICIT |
| XXI.6 | Every argument depends on an unspoken rule; a sophism depends on a false one. | intro (`:1198`); `FAL_PRINCIPLES` | EXPLICIT |
| XXI.7 | The scholastic names are given with their modern equivalents. | intro (`:1199`); `FAL_KINDS.*.mod` | EXPLICIT (see E7, E30) |
| XXI.8 | There are four kinds of disputation: demonstrative, dialectical, testing, and sophistical. | `DISP_KINDS` (`:3187`) | EXPLICIT (rule shown) |
| XXI.9 | The sophist aims at five ends (*metae*): contradiction, falsehood, the absurd, solecism, and babbling, each offending a different art. | `META_KINDS` (`:3223`); `FAL_DOCTRINE` (`:3548`) | EXPLICIT |
| XXI.10 | A refutation must contradict the very thing said, in the same respect and at the same time. | `FAL_DOCTRINE` (`:3528`) | EXPLICIT |
| XXI.11 | Reasoning badly to oneself is always beside one's intention. | intro (`:1201`); `FAL_DOCTRINE` | EXPLICIT |
| XXI.12 | "Sophistical" means apparent wisdom. | `FAL_DOCTRINE` (`:3512`) | EXPLICIT |
| XXI.13 | The false and the improbable (*inopinabile*) differ. | `FAL_DOCTRINE` (`:3552`) | EXPLICIT (see E9) |

---

# Part 2. Gaps

## A. Doctrine the exercises require but never teach

The gaps that actually **block** a student, meaning that a careful beginner cannot answer correctly from what the course has said, are marked **BLOCKS**.

1. **BLOCKS. The anatomy of the categorical syllogism.** The terms "major term", "minor term", "major premise", "minor premise", "figure", and "mood" are never defined in student-facing text. "Middle term" appears only twice: once in the intro to immediate inference and once in a feedback note. Sets VIII through XI have no intro screen, and the feedback uses these words ("figure 2", "EIO-2", "Illicit major") as though they had been taught. This affects VIII, IX, X, XI, XIV, XV, XVI, XVII, XVIII, and the typed enthymemes in XIX.
2. **BLOCKS. Distribution of terms.** The grading turns on distribution (`distributes`, `ars-engine.js:30`), but the doctrine (A distributes its subject, E both terms, I neither, O its predicate) is stated nowhere. The word appears in student text only inside the rule-violation messages.
3. **BLOCKS. The general rules of the syllogism.** All seven rules the engine checks are stated only after a wrong answer, and one at a time. The rule that a particular premise yields a particular conclusion is stated only as part of the gloss "the conclusion follows the weaker part".
4. **BLOCKS (sets XI and XIX). Which extreme is the major.** The key accepts conclusions with the extremes reversed and relabels the premises (XI.2), and the enthymeme key does the same. The course never says that the predicate of the conclusion is the major term, so a student cannot see why "Some D are B" is right in one question and wrong in another.
5. **BLOCKS (set VIII). How to diagram a syllogism and where the ⊗ goes.** The procedure (shade the universals first, then place the ×, and add ⊗ in the only open cell of the term whose existence the conclusion needs) appears only in feedback after an error (`ars-engine.js:710`, `:719`).
6. **Partly blocks (set V). Whether a universal asserts existence.** The orientation says it does, and the Venn feedback says it does not (error E1). A student who follows the orientation and adds an × for an A proposition is marked wrong.
7. **The mood names.** Barbara, Celarent, and the rest are named in feedback, but the mnemonic (the vowels give the mood; some consonants govern reduction) is never explained. This does not block.
8. **The sign doctrine.** The enthymeme feedback relies on Aristotle's necessary and refutable signs, which are never taught. This does not block.
9. **Comprehension and extension.** These are named in the predicables intro (`index.html:900`) and never defined.
10. **"Dictum".** The word is used in the modal feedback ("negates the dictum (what is said)") but not in the intro.
11. **Possible and contingent.** Set VII uses the one-sided "possible" (not impossible); set XVI uses a "contingent" that means "it is so, yet might not be". The course never relates the two (see E24).
12. **Univocal, equivocal, and analogous terms.** These are needed to sort equivocation, figure of speech, and the "healthy" item in XXI, and are never taught.

## B. Standard doctrine at this level that is missing

Measured against Jacques Maritain's *Formal Logic*, H. W. B. Joseph's *Introduction to Logic* (Joseph was an Oxford logician whose 1916 textbook is the standard English Aristotelian manual), and the *Port-Royal Logic*, the course lacks the following:

- **Signs and terms.** It does not treat signs (natural and conventional, formal and instrumental), which John of St. Thomas and Maritain take first. It does not define the term or divide terms (categorematic and syncategorematic; univocal, equivocal, and analogous; concrete and abstract; collective and distributive). The distributive and collective use of terms is directly relevant to the composition items in XXI.
- **The antepredicaments and postpredicaments.** These are Aristotle's equivocals, univocals, and paronyms (the basis of the "conjugates" topic) and his kinds of opposition, priority, and "having".
- **The proposition.** The course gives no formal definition of the proposition or of its matter and form, and no treatment of indefinite propositions or of the opposition of singular propositions. Exponible propositions (exclusive, exceptive, reduplicative) appear only as translation tips in XV.
- **The dictum de omni et nullo and the perfection of the first figure.** The course never teaches why the first-figure moods are evident, or how the other figures are reduced to the first (directly by conversion, or *per impossibile*). This is central to Aristotelian and Thomist syllogistic.
- **The status of the fourth figure.** It is attributed to Galen (the second-century physician and logician), and for St. Thomas and John of St. Thomas its moods are the indirect moods of the first figure. The special rules of each figure are also missing.
- **Compound syllogisms.** The dilemma, the epicheirema, the prosyllogism and episyllogism, and the rules of the Aristotelian and Goclenian sorites are absent. The sorites is named in XVII but not taught.
- **Induction.** Neither complete nor incomplete induction is taught, nor the example (*paradeigma*) as the rhetorical form of induction. Induction is a major omission for a course with a Rhetorica section.
- **The copulative proposition.** The copulative ("and") is absent, and so is the reduction of hypothetical syllogisms to categorical ones.
- **Demonstration proper.** The course does not treat *per se* predication, the kinds of principle (axioms, definitions, suppositions), or the middle term as cause. It also does not relate the five predicables to the four "predicables" of the Topics (definition, property, genus, accident), which ground the topics.
- **Supposition.** Material supposition, the divisions of personal supposition, ampliation, and restriction are missing. Only signification versus supposition, with one example of simple supposition, is taught.
- **Rhetoric.** The three kinds of proof (character, emotion, argument) appear only in passing in the orientation.
- **The fallacy of equivocation.** St. Thomas divides it into three modes, and analogy is one of them. The course does not teach these modes.

---

# Part 3. To elaborate

These points are taught, but too thinly or only by example.

1. **Existential import (S1.14, VIII.3, IX.11).** The doctrine is stated in one orientation panel. It needs a plain account of which moods need it (nine, not five; see E28), why the diagram uses ⊗ only when the conclusion needs it, and how this convention relates to the claim that every universal carries existence.
2. **Conversion of singular propositions and the expository syllogism (IX.9–IX.10).** Singular terms are generated in the third figure without any account of why a singular proposition counts as universal there.
3. **The categories.** These are taught by example words. The reason "he is shod" is habit and "he is wearing a coat" is also habit, while "he is carrying a pack" is listed as habit too, would need the criterion (something adjacent to the body and not a measure of it).
4. **The kinds of division.** Each kind is taught with two examples. The difference between the potestative whole (the soul in its powers) and the integral whole needs stating, and so does the difference between the logical whole and essential parts (see E20–E22).
5. **The kinds of definition.** The line between essential, causal, and descriptive definitions is drawn by example only, and some examples cross it (see E15).
6. **The modal syllogism.** The course teaches one rule. The intro should at least say that this is the received (Theophrastean) rule and that Aristotle's own modal syllogistic differs (see E23).
7. **The chain of syllogisms.** The intro names the sorites but does not show one or give its rules.
8. **The enthymeme.** The course teaches the later definition (a truncated syllogism). Aristotle's own account (an argument from likelihoods and signs, *Rhetoric* I.2) is what most of the curated examples illustrate, and it is taught only through feedback.
9. **The topics.** The intro lists nine topics while the exercise uses twelve. Cause and end, conjugates, and the name are never introduced before they appear as answers.
10. **The four answers to an objection.** The fourth ("concede and narrow") needs a sentence on how it relates to the scholastic responses (*concedo*, *nego*, *distinguo*, *transeat*); see E37.
11. **Composition and division in XXI.** The course needs to state whether these are the Aristotelian fallacies in the words or the modern part–whole fallacies (see E8).
12. **Logic as art and science.** The orientation asserts both and ranks them ("primarily an art"). This is a disputed point among Thomists and should be presented as one.
13. **Venn diagrams of English paraphrase (V.4).** At Level III and above, set V presents paraphrased sentences ("Only P are S", "Not all S are P") before set XV teaches how to translate them.
14. **Truth values on the square (VI.3).** The course could show why "undetermined" follows from the definitions instead of leaving it to feedback.

---

# Part 4. Possible errors

Each entry gives the exact text, its location, the problem, and a confidence. Nothing has been changed. They are ordered roughly by how much they could mislead a student.

### E1. Whether a universal asserts existence: the orientation and the Venn feedback contradict each other. Confidence: high.
- `index.html:1635` (orientation panel 18): "The older logic of Aristotle treats every general term as non-empty (there really are men, dogs, triangles), so a universal already carries existence with it (the term of art is existential import), and “All S are P” yields “Some S are P.” ... This course follows the classical way: every term stands for real things."
- `ars-engine.js:653` (`vennMistake`): "Students often think that a universal must add a mark of existence to the diagram, but a universal only declares a region empty; it asserts no existence."
- `ars-engine.js:706` (`vennMistake3`): "The × asserts existence, which no universal claims."
- `index.html:787`: "Each categorical proposition makes exactly one mark".
- **Problem.** The orientation teaches that the course reads universals with existential import. The diagram feedback says, as doctrine, that a universal asserts no existence. The diagram convention (draw A with shading only, and add ⊗ only when a conclusion needs it) is a reasonable device, but the feedback states the modern reading as the truth about the proposition.

### E2. Secondary substance described as "not said of anything else". Confidence: high.
- `index.html:922`: "Substance — what exists in its own right. It is not said of anything else, nor does it exist in anything else: this man, this horse (primary substance); and the kinds they belong to, such as man and animal (secondary substance)."
- `ars-engine.js:2814` (`CAT_DOCTRINE.sub`): "SUBSTANCE exists in itself, neither said of a subject nor present in one as in a subject. It is either this man or this horse (primary substance), or the species and genera in which they fall, such as man and animal (secondary substance)."
- `ars-engine.js:2827` (`CAT_GLOSS.sub`): "exists in its own right, neither present in anything else nor said of anything else."
- **Problem.** In *Categories* 5 (2a11–19), only primary substance is neither said of a subject nor present in one. Secondary substances are said of a subject ("man" is said of Socrates), though they are not present in one. The course's own predicables section teaches that "man" is said of Socrates.

### E3. Obversion with a contrary term. Confidence: high.
- `index.html:1025` (intro to VI): "“Some men are just” ⇄ “Some men are not unjust.”"
- **Problem.** The obverse requires the contradictory term ("non-just"), not the contrary ("unjust"). "Some men are not unjust" does not imply "Some men are just", because a man may be neither just nor unjust. Joseph warns against exactly this substitution. The Square of Opposition section does it correctly ("Some poets are not non-singers").

### E4. Dialectic response keyed "deny" where the explanation calls for conceding. Confidence: high.
- `ars-engine.js:3792–3793` (`RESP_ITEMS`). The thesis is "The heavier body always falls faster." The objection is "Two stones of different weight, dropped together, strike the ground together." The key is `deny` ("Deny the premise, since it is simply not so"). The explanation reads: "No distinction is needed and nothing about the form is wrong. The premise of the thesis is simply false, and the observation shows it."
- **Problem.** The explanation says that the objection is right and the thesis is false. By the course's own definitions (`:3775–3776`), that is the case for "Grant the whole objection, since it is right and the thesis must be narrowed". To deny the premise would be to deny the observation.

### E5. A topic item keyed "from the narrower kind" that argues from the wider kind. Confidence: high.
- `ars-engine.js:3649` (`DIAL_TOPICS`, key `spec`): "Justice is a virtue, and every virtue is worth having. So justice is worth having."
- **Problem.** The argument brings down to the species (justice) what holds of the genus (virtue). That is the same structure as the item keyed "From the wider kind" at `:3642` ("Every bird has feathers, and a robin is a bird — so a robin has feathers"). A student who answers "From the wider kind (genus)" is marked wrong.

### E6. Two "nothing" sophisms keyed as different fallacies. Confidence: high that they are inconsistent; medium on which key is right.
- `ars-engine.js:3332` (key `equiv`): "Nothing is lighter than a feather. This box is lighter than a feather. So this box is nothing."
- `ars-engine.js:3351` (key `figura`): "Nothing is better than lifelong happiness. A dry crust is better than nothing. So a dry crust is better than lifelong happiness."
- **Problem.** Both arguments treat "nothing" as though it named something, so they rest on the same mechanism but are keyed as equivocation and as figure of speech. The tradition usually files this sophism under figure of speech, because the grammatical form of a name is taken for the signification of a thing.

### E7. The mapping of "accident" to its modern name, and inconsistent keys for accident and *secundum quid*. Confidence: medium-high.
- `index.html:1199`: "Accident is now called applying a general rule to a special case".
- `ars-engine.js:3293` (`FAL_KINDS.accid.mod`): "the fallacy of accident, also called a dicto simpliciter, destroying the exception, or applying a general rule to a special case".
- `ars-engine.js:3355` (key `accid`): "Cutting people with knives is a crime. Surgeons cut people with knives. So surgeons are criminals."
- `ars-engine.js:3359` (key `secquid`): "It is right to give people back what belongs to them. So it is right to hand a madman back his sword."
- **Problem.** The modern "accident" of Irving Copi (author of the standard American textbook *Introduction to Logic*) is a rule true simply, applied to a case its qualification excludes. That is Aristotle's *a dicto simpliciter ad dictum secundum quid*, not the Aristotelian and Thomist fallacy of accident (the Coriscus case, which the course defines correctly). So the modern name is attached to the wrong scholastic fallacy. The surgeon and madman items have the same structure but are keyed differently.

### E8. Composition and division placed "in the words", illustrated by part–whole arguments that involve no verbal ambiguity. Confidence: medium.
- `index.html:1196`: "Potential ambiguity is meaning several things according to how it is said: ... in a phrase, composition and division."
- Items keyed `comp` or `divis` at `ars-engine.js:3343`, `:3346`, `:3347`, `:3348`, and `:3350`: "Every brick in the wall is light. So the wall is light."; "Each player on the team is excellent. So the team is excellent."; "This machine is heavy. So every part of it is heavy"; "The choir sings beautifully. So each singer sings beautifully."; "The army is enormous. So the soldiers in it are enormous."
- **Problem.** For Aristotle and St. Thomas, composition and division are ambiguities of phrasing: whether words are taken together or apart, as in "a man can walk while sitting" and "five is two and three". The course uses those cases correctly too. The brick and choir arguments contain no phrase with two readings, so they are the modern part–whole fallacies. The course's own `FAL_PRINCIPLES` (`:3477`) treats them as resting on a false rule, which places them outside the words. Asked "in the words, or outside them?", a student who reasons from the course's definitions will answer "outside" and be marked wrong.

### E9. "Everything false is unbelievable" keyed as true. Confidence: medium-high.
- `ars-engine.js:3553` (`FAL_DOCTRINE`): the correct answer is "Everything false is unbelievable, but some unbelievable things are true".
- **Problem.** Many false things are widely believed, and a probable premise in dialectic may be false. St. Thomas's point is only that the false and the improbable (*inopinabile*) are distinct, and that some improbable things are true. The first half of the keyed answer is a false universal.

### E10. The isosceles gloss contradicts the key. Confidence: high.
- `ars-engine.js:981` (`KB_GLOSS`, shown above the argument as "Key terms"): "a triangle having two equal sides".
- `ars-engine.js:728–730` (the knowledge-base comment) and `propTruth`: "an isosceles triangle has two sides alone equal, so no equilateral triangle is isosceles".
- **Problem.** By the gloss on the screen, an equilateral triangle is isosceles. By the key, "No equilateral triangles are isosceles triangles" is true. The Euclidean sense ("two sides alone") appears only in feedback after a wrong answer (`:1043`).

### E11. Prudence: the glosses do not support the key. Confidence: medium.
- `ars-engine.js:953`: "moral virtue: a virtue perfecting appetite and conduct: justice, courage, temperance and their kin". `ars-engine.js:954`: "intellectual virtue: ... understanding, science, wisdom, art, and prudence".
- The key treats prudence as both moral and intellectual (`:787–788`), so "Some intellectual virtues are moral virtues" is true and "Some cardinal virtues are not moral virtues" is false.
- **Problem.** The doctrine is defensible (ST I-II 58.3 ad 1), but a student who follows the glosses shown on the screen will answer the other way.

### E12. "Only substance is always a genus" and "the highest genus of all". Confidence: medium-high.
- `index.html:903`: "Only substance is always a genus and never a species".
- `ars-engine.js:2664`: "Substance is the highest genus of all (genus generalissimum), said of everything beneath it but falling under no wider kind".
- **Problem.** Each of the ten categories is a supreme genus (quantity and quality are never species either), and being is not a genus. The claim is true only within the line of substance in the tree of Porphyry.

### E13. "Man is a species of animal" keyed as giving the species. Confidence: medium.
- `ars-engine.js:2562` (`PRED_ITEMS.spec`): "Man is a species of animal", with the question "In which of these does the predicate give the SPECIES of the subject?"
- **Problem.** Here the predicate is the second intention "species", and "man" is in simple supposition (as the course itself teaches at `:2665`). The sentence does not give the species of its subject the way "Socrates is a man" does.

### E14. "A body takes up space" as the difference. Confidence: medium-low.
- `ars-engine.js:2573`: "Taking up space is the difference that divides substance into the bodily and the spiritual".
- **Problem.** Occupying space follows from quantity and is usually treated as a property of body. Porphyry's difference is "corporeal". The item next to it ("An angel has no body") is sound.

### E15. The kinds of definition cross one another. Confidence: medium.
- `ars-engine.js:2074` (`DEF_KIND_STOCK.ess`): "Ice is water solidified by cold", with the explanation "naming the very stuff it is made of". By the course's own definition (`:2053`), a definition by matter and by efficient cause is causal.
- `:2075` and `:2076` (essential): "A nest is a shelter a bird builds to hold its eggs and its young" and "A well is a shaft dug in the ground to reach water", the second explained as "narrowed by what it is dug for". These are definitions by the final cause.
- `:2093` and `:2096` (causal): "A clock is an instrument made to measure time" and "A house is a building raised to shelter its dwellers". Yet the nearly identical "sound" definitions in the rules drill, "A clock is an instrument for measuring time" (`:1890`) and "A house is a shelter built to protect living things and goods" (`:1910`), are praised as giving "the kind and the difference" (`:2038`).
- `:2072` (essential): "A lamb is a young sheep". "Young" is an accident of a sheep, not a specific difference.
- `:2071` (essential): "A bachelor is an unmarried man". This is not a natural species, and its difference is privative.

### E16. Negative definitions praised as "positive". Confidence: medium-low.
- `ars-engine.js:2046`: "“${keeper.sound}” holds, since it fits exactly and is clear, positive, and brief."
- This feedback is shown for "A bachelor is an unmarried man" (`:1874`), "A point is that which has no part" (`:1963`), and "A line is length without breadth" (`:1959`).
- **Problem.** These definitions are acceptable under the rule ("wherever a positive account is available"), but they are not positive, so the feedback contradicts the rule it teaches.

### E17. A synonym keyed as circular. Confidence: medium-low.
- `ars-engine.js:1908`: "Man is a human being". `:1916`: "A number is what is counted in counting". Both carry the explanation "puts the defined term back into the definition".
- **Problem.** Neither contains the defined term. The first is a definition by synonym (at most a nominal definition); the second is closer to a definition by correlative.

### E18. Items keyed "metaphor" that are not metaphors. Confidence: medium-low.
- `ars-engine.js:1909`: "Man is the measure of all things". This is Protagoras's thesis, not a figure of speech.
- `:1962`: "A line is the track of a moving point". This is the genetic definition used by geometers since Proclus (the fifth-century commentator on Euclid).
- `:1970`: "A father is the head of the household". This is literal, though accidental and not convertible.
- `:1978`: "A shepherd is the guardian of the flock". This is nearly literal.

### E19. "Man is the animal that laughs" as the property. Confidence: medium-low.
- `ars-engine.js:2086` (`DEF_KIND_STOCK.desc`).
- **Problem.** The predicables section (`index.html:902`) teaches that "is laughing" is an accident and only "able to laugh" is the property. The intro to definition itself says "an animal that can laugh" (`:977`).

### E20. "Essential division" used for the division of a genus into species. Confidence: medium.
- `index.html:945`: "Essential — a general kind into the kinds beneath it." `ars-engine.js:2393`: "An ESSENTIAL division divides a general kind (a genus) into the kinds beneath it".
- **Problem.** In the scholastic manuals (Maritain among them), the division of a genus into its species is the division of a logical (universal) whole. "Essential" division is the division of a thing into its essential parts: matter and form, or genus and difference.

### E21. Division "by powers" applied to bodies and bodily parts. Confidence: medium-low.
- `ars-engine.js:2437`: "A horse into its power to run, to pull, and to carry". `:2434`: "The hand into its power to grasp and its power to strike". `:2436`: "The senses of an animal into sight, hearing, touch, taste, and smell".
- **Problem.** The potestative whole is classically the soul (or a power such as prudence), which is present whole in each part in essence but not in full power. The intro's own faulty example implies this (`index.html:953`: "a paw is a bodily part, not a power of the soul"). Dividing "the senses" into the five senses is closer to dividing a genus into its species.

### E22. "The bees of a hive into the queen, the workers, and the drones" keyed as an essential division. Confidence: medium.
- `ars-engine.js:2420`, with the explanation "It divides a general kind into the kinds beneath it".
- **Problem.** These are castes of one species, divided by function and sex, not species of a genus.

### E23. The modal syllogism rule and its example run against Aristotle. Confidence: medium-high on the history.
- `index.html:1087`: "“Every man is necessarily mortal; every scholar is (in fact) a man; therefore every scholar is mortal.” Yet the conclusion is drawn only as a plain assertion, not as a necessity, since the minor premise was merely assertoric."
- `index.html:1085` and `:1290`: "The received rule is peiorem sequitur semper conclusio partem".
- **Problem.** In *Prior Analytics* I.9 (30a15–23), Aristotle holds that in the first figure a necessary major and an assertoric minor yield a necessary conclusion, which is exactly the case in the example. The weaker-premise rule for modes is Theophrastus's (Theophrastus was Aristotle's successor at the Lyceum). Aristotle's syllogisms with contingent premises do not follow one simple rule either (for example, two contingent premises in the second figure yield nothing), but the course grades every valid assertoric form with contingent premises as concluding contingently. The course should say whose rule it is.

### E24. "Contingent" defined as "it is so, yet might not be". Confidence: medium.
- `index.html:1083`: "the contingent (it is so, yet might not be)".
- **Problem.** For Aristotle and the scholastics, the contingent is what is neither necessary nor impossible, and it does not imply that the thing is actually so. As defined here, a contingent premise would entail the assertoric one. The definition also conflicts with the "possible" of set VII, and the course does not relate the two.

### E25. "In each of them the conclusion follows the weaker part". Confidence: medium.
- `index.html:642` (the Third Act gloss): "That single test is applied here to arguments of every kind (categorical, conjunctive and disjunctive, conditional, modal, and stated in ordinary speech), and in each of them the conclusion follows the weaker part."
- **Problem.** The rule of the weaker part belongs to the categorical (and, by extension, the modal) syllogism. It has no application to *ponendo ponens* or *tollendo ponens*.

### E26. The Ad Demonstrationem gloss says valid form with true matter is science. Confidence: medium-high.
- `index.html:648`: "When valid form is joined to true matter, reasoning becomes science, that is, sure knowledge of why a thing must be so."
- **Problem.** A sound argument need not be a demonstration. The set's own intro says so (`:1126`: "This is not yet full demonstration, for we do not ask whether the premises are first and causal").

### E27. Formal and material logic placed "within demonstration". Confidence: medium.
- `index.html:1584`: "Within demonstration lie formal logic (how the terms are arranged) and material logic (whether the premises are in fact true, and how proof proceeds in each subject)."
- **Problem.** Formal logic (minor logic) governs the form of every kind of reasoning, dialectical and rhetorical included. In the usual division, demonstration falls under material logic (major logic), not the reverse.

### E28. "Weakened" used for every mood that needs existential import. Confidence: high.
- `index.html:1292` (description of set VIII): "where a weakened conclusion demands existence, the import ×".
- `index.html:2920`: "the ⊗ supplies the existential import ... that the weakened conclusion requires".
- `ars-engine.js:710`: "on the modern reading the weakened moods fail for exactly this reason".
- `ars-engine.js:1062`: "so the weakened conclusion follows".
- **Problem.** The engine's own list of weakened (subaltern) moods has five members (`SUBALTERN`, `:20`). Darapti, Felapton, Bramantip, and Fesapo also need import but are not weakened: their conclusions are the strongest the premises allow. A run of the diagram code confirms nine import moods.

### E29. The fourth figure presented as "the scholastic account". Confidence: medium.
- `index.html:595`: "All moods and figures of the scholastic account are possible here, including the fourth figure and the weakened (subaltern) moods."
- **Problem.** Aristotle, St. Thomas, and John of St. Thomas recognize three figures and treat the fourth-figure moods as indirect moods of the first (Baralipton, Celantes, Dabitis, Fapesmo, Frisesomorum). The names Bramantip, Camenes, Dimaris, Fesapo, and Fresison are later. The 24-mood count is the post-medieval textbook count.

### E30. "Modern logic counts them one fault". Confidence: medium.
- `index.html:1199`: "And the consequent is what is now called affirming the consequent when it is stated with an “if,” and the undistributed middle when it is not; modern logic counts those one fault, as the schools did."
- `ars-engine.js:3318`: "(modern logic counts them the same fault)".
- **Problem.** Modern textbooks treat affirming the consequent (a propositional fallacy) and the undistributed middle (a syllogistic one) as distinct formal fallacies. The identification of the two is Aristotle's (both fall under the consequent), not the moderns'.

### E31. The "healthy" item keyed as figure of speech. Confidence: medium-low.
- `ars-engine.js:3352`: "Food is healthy. A complexion is healthy. A body is healthy. So all three have health in them the same way."
- **Problem.** For St. Thomas the analogical term (one word said of one thing primarily and of others by reference to it, as "healthy" is) is a mode of equivocation, not figure of speech.

### E32. "Everyone does it, so it must be good" is treated as a fault of form in one place and of matter in another. Confidence: medium.
- `index.html:1603`: "we may err in the very form of our reasoning — “everyone does it, so it must be good.”" `index.html:2125–2127` (`ORIENT_EXTRA[12]`): the correct answer is "The form of the reasoning is faulty", with the explanation "The fault is in the shape of the argument, not in any single premise."
- `ars-engine.js:3136–3139` (`ENTH_POOL`): "The book must be good — everyone is reading it", completed by the false tacit premise "Whatever everyone reads is good"; the explanation calls this "the argumentum ad populum concealed in an enthymeme".
- **Problem.** By the enthymeme doctrine the completed argument is valid, and the fault is in the matter, which is the opposite of what the orientation teaches.

### E33. An axiom keyed as "demonstrable". Confidence: medium.
- `ars-engine.js:3745` (`ENDOX_ITEMS`, key `dem`): "Every whole is greater than any one of its parts." The label reads "Demonstrable, since it can be proved and need not be merely granted".
- **Problem.** This is a common notion (an axiom), known through itself and indemonstrable. It is certain, but it is not proved.

### E34. A response explanation that describes the objection instead of the answer. Confidence: low-medium.
- `ars-engine.js:3794`. The thesis is "Every part of the wall is white, so the wall is white." The objection is "Every brick is light, yet the wall is not light." The key is `conc`, with the explanation "The objection grants the pattern and shows that it fails elsewhere, which is to attack the form of the inference, not the truth of any premise."
- **Problem.** The explanation describes what the objection does, not why the respondent should grant the premises and deny the consequence. The thesis itself also uses the parts-to-whole pattern that XXI treats as resting on a false rule.

### E35. A whole-and-parts topic item that runs from the parts to the whole. Confidence: low-medium.
- `ars-engine.js:3655`: "Every part of the argument has been granted. So the argument as a whole has been granted." The maxim of the topic is "What holds of the whole holds of the parts, when it holds of the whole by reason of the parts" (`:3625`).
- **Problem.** The item runs in the opposite direction from the maxim, in the parts-to-whole pattern that XXI calls composition.

### E36. Nonstandard maxims for the topics from genus and from species. Confidence: medium-low.
- `ars-engine.js:3607`: "Whatever belongs to the whole family belongs to each kind within it." `:3610`: "Whatever is said of the kind is said of the individuals under it."
- **Problem.** Both maxims are forms of the *dictum de omni*. In the medieval topics (Boethius; Peter of Spain, the thirteenth-century author of the *Summulae logicales*), the topic from the genus is chiefly destructive ("if the genus is removed, the species is removed"), and the topic from the species is constructive ("whatever the species is said of, the genus is said of").

### E37. "Grant the whole objection and narrow the claim" as one of the scholastic answers. Confidence: low.
- `index.html:1172`; `ars-engine.js:3775`.
- **Problem.** The usual responses are *concedo*, *nego*, *distinguo*, and *transeat*. To concede the objection is to give up the thesis as stated; restating it is a new thesis, not an answer the schools counted among the four.

### E38. An unverified attribution. Confidence: low.
- `ars-engine.js:3104–3107`: "Pleasure is not the good, for even fools attain it." The explanation calls it "an Aristotelian commonplace against hedonism".
- **Problem.** I could not match the phrase to a passage in Aristotle. The attribution should be checked or dropped.

### E39. "All S are not P usually means No S are P". Confidence: low-medium.
- `index.html:998`.
- **Problem.** Most textbooks call the form ambiguous, and the stock English example ("All that glitters is not gold") means O. "Usually" is doubtful.

### E40. "And gives the conjunctive syllogism". Confidence: low.
- `index.html:1821` (`GRAMMAR_EXTRA[7]`): "And gives the conjunctive syllogism, or the disjunctive, if the conditional."
- **Problem.** The conjunctive syllogism rests on a negated conjunction ("not both"), as the course teaches at `:1045`.

### E41. "The middle is distributed once" said of every valid form. Confidence: low.
- `ars-engine.js:1067`: "This form keeps every rule: the middle is distributed once".
- **Problem.** The rule is "at least once", and in Darapti and Felapton the middle is distributed twice.

### E42. "Contraposition does both at once". Confidence: low.
- `ars-engine.js:1236`: "conversion exchanges the terms; obversion changes the quality and negates the predicate; contraposition does both at once".
- **Problem.** The course elsewhere teaches correctly that contraposition is obversion, then conversion, then obversion again.

### E43. "A conditional holds in one direction only". Confidence: low-medium.
- `index.html:1067`: "A conditional holds in one direction only, from antecedent to consequent, and never from consequent to antecedent."
- **Problem.** A conditional asserts only one direction, but some conditionals are also true in the other direction. "Never" overstates the point.

### E44. "An × picks out one individual at random". Confidence: low.
- `index.html:783`.
- **Problem.** The × asserts that at least one individual is there, without saying which one. "At random" misdescribes it.

### E45. "Habit" used for two categories without warning. Confidence: medium-low.
- The tenth category is called "Habit (having)" (`index.html:926`; `ars-engine.js:2900`). Elsewhere, "Knowledge and virtue are habits, the first species of quality" (`ars-engine.js:2938`), and the ethics glosses define "habit" as a stable quality (`:949`).
- **Problem.** The same English word names the tenth category (*habitus*, having) and the first species of quality (*habitus*, a lasting disposition), and the course never says so.

### E46. "Posture" and "position". Confidence: low.
- The set description (`index.html:1275`) and `CAT_PRINCIPLES` (`ars-engine.js:2894`) say "position"; the intro and the exercise say "Posture".

### E47. Logic as a "science of the mind's operations". Confidence: low-medium.
- `index.html:2033` (`ORIENT_EXTRA[2]`): "Logic aims at reasoning well and is also a science of the mind’s operations."
- **Problem.** The panel itself says that logic is the science of second intentions (`:1555`). For the Thomists, the acts of the mind as such belong to psychology. The next item, "Logic is primarily an art, and secondarily a science" (`:2037`), states a disputed position flatly.

### E48. The everyday matter. Confidence: low.
- In the `nature` domain, "No insects are things that can swim" is graded true (some beetles swim), and "thing that can swim" covers the dog but not the horse (`ars-engine.js:875–876`).

### E49. "Sound" items that break a rule. Confidence: low.
- `ars-engine.js:1910`: "A house is a shelter built to protect living things and goods" is too broad, since it also fits a barn or a kennel.
- `ars-engine.js:2285`: "Ships into those driven by oar and those driven by sail" is keyed as sound, but galleys used both (so the members overlap) and steamships use neither (so the division is incomplete).

### E50. The poetics account departs from St. Thomas. Confidence: low.
- `index.html:1598`: "When we lack even probable evidence, we propose possible accounts — often stories".
- **Problem.** In the proem to St. Thomas's commentary on the *Posterior Analytics*, poetics moves the mind by representation, which makes a thing seem attractive or repugnant. It is not chiefly hypothesis-making. The course's version is a defensible extension, but it should be presented as one.

### E51. The home page claims every answer is illustrated with a Venn diagram. Confidence: high (not a point of doctrine).
- `index.html:622`: "Every answer is illustrated with a Venn diagram of the correct analysis".
- **Problem.** This is true only of the categorical sets. The answers in sets I–IV, VII, XII–XIV, XVII, and XIX–XXI carry no diagram.

---

# Part 5. Proposed deck plan (proposal only)

Each line gives a card title and a one-line summary of its content. The decks are ordered as on the home page.

**0. The Art of Grammar.** The current panels already serve as cards, so no new deck is proposed.

**S1. Orientation.** No new cards are proposed. Card S1.14 should be reconciled with V and VIII (E1).

**I. The Predicables**
1. *The Five Ways of Being Said Of*: genus, species, difference, property, and accident, with one example each.
2. *Part of the Essence, or Not?*: the two sorting questions, with comprehension and extension defined.
3. *The Convertibility Test*: a property converts with its species; a genus and an accident do not.
4. *Power and Act*: "able to laugh" against "is laughing".
5. *The Tree of Porphyry*: supreme genus, subalternate genera, lowest species, individual (with the note that each category has its own tree).
6. *Signification and Supposition*: personal, simple, and material supposition.

**II. The Categories**
1. *Substance, Primary and Secondary*: said of a subject, present in a subject (corrects E2).
2. *How St. Thomas Derives the Nine*: matter, form, toward another; acting and undergoing; measure; adjacency.
3. *The Marks of Each Category*: one test question per category.
4. *Two Senses of "Habit"*: having, as against a quality (E45).
5. *First and Second Intentions*: why the categories and the predicables differ.

**III. Division**
1. *What a Division Is*: a whole, its members, and the basis.
2. *The Four Rules*: exhaustive, exclusive, belonging to the whole, one basis.
3. *Kinds of Whole*: logical, integral, essential, and potestative (E20–E21).
4. *Accidental Division*: subject into accidents, accident into subjects, accident into accidents.
5. *Dichotomy and Subdivision*: division by contradictory differences, and dividing again.

**IV. Definition**
1. *Nominal and Real Definition*: why the nominal comes first.
2. *Essential Definition*: proximate genus and specific difference; why it fits substances best.
3. *Causal and Descriptive Definition*: where each is used, and how to tell them apart (E15).
4. *The Five Rules*: convertible, clearer, not circular, positive where possible, brief.
5. *Negative and Synonymous Definitions*: when they are permitted (E16–E17).

**V. Diagramming Propositions**
1. *The Proposition*: subject, copula, predicate; quantity and quality.
2. *A, E, I, O*: the four forms and their names.
3. *Drawing the Four*: which region and which mark.
4. *Existence in the Diagram*: what shading asserts, what × asserts, and the course's ⊗ convention (E1).
5. *Distribution*: which terms each form distributes, and how the diagram shows it.

**VI. Immediate Inference**
1. *The Square*: the four relations and their truth rules.
2. *Conversion*: simple, *per accidens*, and none.
3. *Obversion*: the complementary term "non-", not the contrary (E3).
4. *Contraposition*: partial and full, step by step.
5. *Why Existential Import Matters Here*: subalternation and conversion *per accidens*.

**VII. The Modal Propositions**
1. *Mode and Dictum*: what a modal proposition is made of.
2. *The Four Corners*: necessary, impossible, possible, and possible not.
3. *Negation Before and After the Mode*: the laws of equipollence.
4. *The Modal Square*: its relations and its two rules of consequence.
5. *Composite and Divided Senses*: scope, with the seated man.
6. *Possible and Contingent*: one-sided and two-sided possibility (E24).

**VIII. Diagramming Syllogisms**
1. *Three Circles*: the seven cells and the two-cell lens.
2. *The Order of Work*: universals first, then particulars.
3. *The Import Mark*: which nine moods need ⊗, and where it goes (E28).
4. *Reading the Conclusion*: what the premises force about S and P.

**IX–X. Syllogistic Form**
1. *The Parts of a Syllogism*: major, minor, and middle terms; major and minor premises.
2. *Distribution of Terms*: one card per form.
3. *The General Rules*: the seven rules, each with a one-line reason.
4. *Figure*: the four positions of the middle term.
5. *Mood*: the three vowels, and how to read the names Barbara, Celarent, and so on.
6. *Weakened Moods and Import Moods*: two different groups (E28).
7. *Singular Terms*: why a singular proposition counts as universal; the expository syllogism.
8. *Form and Matter*: why implausible premises do not make an argument invalid.

**XI. Drawing the Conclusion**
1. *Which Term Is the Major*: the predicate of the conclusion fixes it.
2. *Finding the Conclusion*: a procedure (locate the middle, check distribution, pick the strongest valid form).
3. *When Nothing Follows*: the four common reasons.

**XII–XIV. Hypothetical Syllogisms**
1. *Propositions Joined by a Connective*: conditional, conjunctive, disjunctive (with a note on the term "conjunctive" in English textbooks).
2. *Conditional Moods*: two valid moods and two fallacies.
3. *Conjunctive Moods*: *ponendo tollens* only.
4. *Disjunctive Moods*: strict and broad disjunction.
5. *Denying a Categorical Component*: deny it by stating its contradictory.

**XV. Ordinary Speech**
1. *Signs of Quantity*: missing, indefinite, "few" and "a few".
2. *Exclusives and Exceptives*: "only", "none but", "all except".
3. *Indicator Words*: premise and conclusion markers.
4. *Restating with the Copula*: "things that ...".

**XVI. The Modal Syllogism**
1. *The Rule of the Weaker Part*: stated, with its source in Theophrastus.
2. *What Aristotle Held*: the necessary-major case, as a note (E23).
3. *Contingent Premises*: what the course grades and why.

**XVII. The Chain of Syllogisms**
1. *Prosyllogism and Episyllogism*: how links join.
2. *The Sorites*: the Aristotelian and Goclenian forms, with their rules.

**XVIII. The Matter and the Form**
1. *Valid, Sound, Demonstrative*: three different achievements (E26).
2. *The Conditions of Demonstration*: true, first, immediate, better known, prior, causal.
3. *Quia and Propter Quid*: from effect and from cause.
4. *Using a Definition to Test a Premise*: Euclid's isosceles, the unit, the point (E10).

**XX. Dialectic**
1. *The Probable*: the definition, with examples of each standing.
2. *Finding and Judging*: the two parts of logic.
3. *The Twelve Topics*: one line each, with its maxim (E36).
4. *The Four Predicables of the Topics*: definition, property, genus, accident.
5. *Answering an Objection*: *concedo*, *nego*, *distinguo*, *transeat*, and the course's fourth move (E37).

**XIX. The Enthymeme**
1. *Two Accounts of the Enthymeme*: the truncated syllogism, and Aristotle's argument from likelihoods and signs.
2. *Orders of Enthymeme*: first, second, and third order.
3. *Supplying the Premise*: join the middle term to the unsupported term, then test the mood.
4. *Signs*: necessary and refutable signs, with Aristotle's examples.
5. *The Example*: rhetorical induction.

**XXI. The Fallacies**
1. *Two Causes*: appearance and failure.
2. *In the Words*: the threefold ambiguity and the six fallacies.
3. *Outside the Words*: the seven fallacies.
4. *Modes of Equivocation*: including analogy (E31).
5. *Composition and Division, Old and New*: the phrasal fallacies and the modern part–whole errors (E8).
6. *Accident and Secundum Quid*: the distinction, and the correct modern names (E7).
7. *Disputations and the Sophist's Ends*: the four kinds and the five *metae*.
