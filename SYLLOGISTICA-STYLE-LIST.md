# Ars Syllogistica: style review list

Prepared October 10, 2026, against `main` at 9296fdc (after `git pull`). Nothing in the course has been changed and nothing is committed. This file is the only new file.

**What is on the list.** Every sentence in the cards (home page, study cards, “Before the Exercise” cards, the grammar and orientation panels) and in the answer explanations and feedback that does not read plainly by the rules in `CLAUDE.md` / `AGENTS.md` and `../Trivium/TIMOTHY-STYLE-PACK.md`. Sentences that already read plainly are left off. Each entry gives the place (`file:line` and where it shows in the course), the OLD wording, one NEW wording, and a box for your decision.

**What the rewrites keep.** No rewrite changes a proposition, syllogism, term, mood name, which answer is right, validity, a quotation, Latin, or code, and none adds or drops a claim. Where a sentence is also an answer option, the entry says so. An ellipsis (…) in OLD and NEW stands for words that stay as they are. In feedback that is built from a template, sample terms are filled in (for example “Barbara (AAA-1)”); only the fixed words would change.

**Your own wording.** I checked each listed sentence against `git log` and `git blame`, and against the style pack. Entries marked **⚑ Possibly your wording** are sentences that your hand edits introduced (a8a29da, Aug 12, “fixed grammar text”; a9517de, Aug 9, “AI slop fixes”, which the style pack calls probable), that 23fc802 (Oct 4, “Predicables revisions”) introduced, or that the style pack quotes as yours. They are listed only so you can decide; by the style pack’s rule 3 the default for them is to keep. Entries marked “Note” give other history or a caution. Sentences last touched by the Oct 6 agent passes (9e6a1c7, 74efe0b, c5385d7) are not flagged as yours.

## Counts

- Entries: **330**. Many entries hold two or three related sentences from the same place, so they cover more sentences than that.
- Flagged as possibly your wording: **21** (entries 40, 42, 87, 88, 91, 156, 173, 175, 176, 177, 178, 180, 182, 183, 185, 188, 191, 198, 206, 242, 313).
- Spelling only (American spelling): **20** entries, in the last section.
- By section: Home page: help panels and section introductions (22); Exercise cards on the home page (21); Study: The Diagram Workshop (11); Study: The Square of Opposition (15); Intro card: The Modes of Propositions (Exercise VII) (12); Intro card: The Five Predicables (Exercise I) (10); Intro card: The Ten Categories (Exercise II) (7); Intro card: The Kinds of Division (Exercise III) (7); Intro card: The Kinds of Definition (Exercise IV) (5); Intro card: Translating Ordinary Speech (Exercise XV) (9); Intro card: Immediate Inference (Exercise VI) (2); Intro card: The Conjunctive and Disjunctive (Exercise XII) (5); Intro card: The Hypothetical Syllogism (Exercise XIII) (5); Intro card: The Modal Syllogism (Exercise XVI) (3); Intro card: The Chain of Syllogisms (Exercise XVII) (3); Intro card: The Matter and the Form (Exercise XVIII) (5); Intro card: The Enthymeme (Exercise XIX) (4); Intro card: Dialectic (Exercise XX) (11); Intro card: The Fallacies (Exercise XXI) (12); Study: The Art of Grammar (panels) (9); Study: The Art of Grammar (answer explanations) (14); Study: What Is Logic · An Orientation (panels) (19); Study: What Is Logic · An Orientation (answer explanations) (13); Exercises: feedback written in the course page (index.html) (16); Exercise I, The Predicables (answer explanations) (2); Exercise III, Division (answer explanations) (1); Exercise IV, Definition (answer explanations) (2); Exercise V and VIII, Diagramming (feedback on a wrong diagram) (5); Exercise VI, Immediate Inference (feedback) (3); Exercise VII, The Modal Propositions (feedback and explanations) (6); Validity exercises (IX, X, XV, XVI, XVIII): note after a wrong answer (10); Exercise XI, Drawing the Conclusion (feedback) (4); Exercises XII to XIV, Conjunctive, Disjunctive, Hypothetical (explanations and feedback) (10); Exercise XVIII, The Matter and the Form (feedback) (2); Exercise XIX, The Enthymeme (explanations and feedback) (8); Exercise XX, Dialectic (explanations) (7); Exercise XXI, The Fallacies (explanations) (10); American spelling (cards, explanations, feedback, and the glosses and options they quote) (20).

## The changes, by kind

Most entries do one or more of these:
- Replace dashes with commas, parentheses, a colon or a semicolon (rule 14).
- Turn fragments and “Label: fragment” lines into full sentences (rule 4).
- Replace a figure that stands in for a claim with the literal claim: “road”, “engine”, “hinge”, “machinery”, “dress”, “gate”, “broken link”, “rescue a broken form”, “orphaned term” (rules 1 and 2).
- Replace “work” phrasing (“the article’s work”, “a different kind of work”, “does all the work”) with “function” or a plain verb (style pack rule 10).
- Turn coaching “you” and imperatives into “we” in the active voice, or into a statement (rule 7; style pack rule 4). Imperatives that tell the student how to work a control or do the exercise are left alone.
- Recast setup lines (“Notice that”, “Hold on to”, “A word on where this comes from”) and aphoristic closers as plain statements (rule 3).
- Use American spelling (rule 13).

## Home page: help panels and section introductions

**1.** `index.html:595` · How to Proceed, “What to do in an exercise”

> OLD: All moods and figures of the scholastic account are possible here — including the fourth figure and the weakened (subaltern) moods.
>
> NEW: All moods and figures of the scholastic account are possible here, including the fourth figure and the weakened (subaltern) moods.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**2.** `index.html:596` · How to Proceed, letters and English

> OLD: Letters are the easier dress: finish a set in letters, and it will invite you to attempt the same in English.
>
> NEW: Letters are the easier form. When a set is finished in letters, the course invites you to attempt the same set in English.

Decision: ☐ yes · ☑ change: ____________________ · ☐ keep

GROK BOT: Letters are the easier form. When we finish a set in letters, the course invites us to attempt the same set in English.

**3.** `index.html:597` · How to Proceed, the unscored options

> Note: The paragraph was revised in a9517de (Aug 9, “AI slop fixes”), which the style pack treats as probably yours; this sentence was already there before that commit.
>
> OLD: The Diagram Workshop lets you mark Venn diagrams freely — shade regions, place ×s — and shows what your marks assert. The Square of Opposition sets two terms in the four traditional relations and displays any immediate inference — converse, obverse, contrapositive, contradictory — drawn from whichever corner you choose.
>
> NEW: The Diagram Workshop lets you mark Venn diagrams freely (shading regions and placing ×s) and shows what your marks assert. The Square of Opposition sets two terms in the four traditional relations and displays any immediate inference (converse, obverse, contrapositive, contradictory) drawn from whichever corner you choose.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**4.** `index.html:604` · How the Guided Path Works, “Opening the acts”

> OLD: The gate to the Second Act is Division and Definition alone: pass those two and the Second Act appears. (The Predicables and the Categories do not gate the path — take your time with them, and deepen them as you go.)
>
> NEW: Only Division and Definition must be passed to open the Second Act; when those two are passed, the Second Act appears. (The Predicables and the Categories are not required to open the path, so they can be studied at leisure and deepened along the way.)

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**5.** `index.html:604` · How the Guided Path Works, “Opening the acts”

> OLD: Pass all of the Second Act, and the Third Act (the syllogism) appears; and when its reasoning is passed entire, the final sections — Ad Demonstrationem and Rhetorica — open together.
>
> NEW: When all of the Second Act is passed, the Third Act (the syllogism) appears; and when all of its exercises are passed, the final sections, Ad Demonstrationem and Rhetorica, open together.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**6.** `index.html:605` · How the Guided Path Works, “Earning true mastery”

> OLD: Passing opens the door; mastery is the summit, and it is earned only at Level V.
>
> NEW: Passing a set opens the next part of the path; mastery is the highest standing, and it is earned only at Level V.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**7.** `index.html:605` · How the Guided Path Works, “Earning true mastery”

> OLD: Lower levels build your skill and score and carry you to a pass, but mastery waits at the top. Mastering a set earns the ★ and enrols it in spaced review.
>
> NEW: Lower levels build your skill and score and can bring you to a pass, but mastery is earned only at the top level. Mastering a set earns the ★ and enrolls it in spaced review.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**8.** `index.html:611` · Preliminary section introduction

> Note: The first sentence of this paragraph is yours (Aug 12, then ff6ed1f on Oct 6) and is not listed. This second sentence was there before your edit.
>
> OLD: Logic works upon statements, and a statement is made of words — so before reasoning can be judged, the parts of a sentence must be known.
>
> NEW: Logic works upon statements, and a statement is made of words; so before reasoning can be judged, the parts of a sentence must be known.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**9.** `index.html:622` · Feedback note

> OLD: Every answer is illustrated with a Venn diagram of the correct analysis — shading declares a region empty; an × declares an occupant; ⊗ marks the existential import assumed in the traditional reading.
>
> NEW: Every answer is illustrated with a Venn diagram of the correct analysis: shading declares a region empty; an × declares an occupant; ⊗ marks the existential import assumed in the traditional reading.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**10.** `index.html:629` · First Act introduction

> OLD: The mind’s first act, before all judging or reasoning: simply to grasp what a thing is.
>
> NEW: The first act of the mind, which comes before all judging or reasoning, is simply to grasp what a thing is.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**11.** `index.html:629` · First Act introduction

> OLD: Here we learn the five predicables — the ways a universal is said of a subject — and the ten categories into which all that can be said of a thing falls; then to divide a whole into its kinds and to define what a thing essentially is — the arts by which a concept is made clear and distinct, and the road to everything that follows.
>
> NEW: Here we learn the five predicables (the ways a universal is said of a subject) and the ten categories into which all that can be said of a thing falls; then we learn to divide a whole into its kinds and to define what a thing essentially is. These are the arts by which a concept is made clear and distinct, and everything that follows depends on them.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**12.** `index.html:635` · Second Act introduction

> OLD: The mind’s second act, joining or separating concepts to affirm or deny — the proposition.
>
> NEW: The second act of the mind joins or separates concepts in order to affirm or deny, and what it forms is the proposition.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**13.** `index.html:642` · Third Act introduction

> OLD: The mind’s third act: from things already known, to reason out things unknown — the syllogism.
>
> NEW: The third act of the mind reasons from things already known to things unknown, and its form is the syllogism.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**14.** `index.html:642` · Third Act introduction

> OLD: That single test is applied here to arguments of every kind — categorical, conjunctive and disjunctive, conditional, modal, and dressed in ordinary speech — the conclusion always following the weaker part.
>
> NEW: That single test is applied here to arguments of every kind (categorical, conjunctive and disjunctive, conditional, modal, and stated in ordinary speech), and in each of them the conclusion follows the weaker part.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**15.** `index.html:648` · Ad Demonstrationem introduction

> OLD: Where valid form meets true matter, reasoning ripens into science — sure knowledge of why a thing must be so.
>
> NEW: When valid form is joined to true matter, reasoning becomes science, that is, sure knowledge of why a thing must be so.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**16.** `index.html:648` · Ad Demonstrationem introduction

> OLD: Weighing an argument in both form and matter at once, this exercise does not yet raise complete demonstrations, but it prepares the mind for those later and higher proofs.
>
> NEW: This exercise weighs an argument in form and in matter at once. It does not yet present complete demonstrations, but it prepares the mind for those later and higher proofs.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**17.** `index.html:654` · Dialectica introduction

> OLD: Where we cannot demonstrate, we still need not guess. Dialectic reasons from what is probable …
>
> NEW: Where we cannot demonstrate, we still need not guess, because dialectic reasons from what is probable …

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**18.** `index.html:654` · Dialectica introduction

> OLD: Learn the topics an argument may be drawn from, what standing a premise has before you offer it, and the four ways the schools answered an objection.
>
> NEW: Here we learn the topics an argument may be drawn from, what standing a premise has before we offer it, and the four ways the schools answered an objection.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**19.** `index.html:660` · Rhetorica introduction

> OLD: The third act’s reasoning carried into the art of persuasion. The enthymeme is the orator’s syllogism — a premise left unsaid and silently supplied by the hearer.
>
> NEW: Here the reasoning of the third act is carried into the art of persuasion. The enthymeme is the orator’s syllogism, in which a premise is left unsaid and silently supplied by the hearer.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**20.** `index.html:660` · Rhetorica introduction

> OLD: Learn to draw the hidden assumption into the open and look it in the face.
>
> NEW: Here we learn to state the hidden assumption and examine it.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**21.** `index.html:666` · Sophistica introduction

> OLD: A fallacy is an argument that looks sound and is not — and St Thomas insists that each has two causes: what makes it look good, and what makes it fail.
>
> NEW: A fallacy is an argument that looks sound and is not, and St Thomas insists that each has two causes: what makes it look good, and what makes it fail.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**22.** `index.html:666` · Sophistica introduction

> OLD: We study them not to use them but to see through those who do.
>
> NEW: We study them not to use them but to recognize them when others use them.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep


## Exercise cards on the home page

**23.** `index.html:1271` · Card I, The Predicables

> OLD: Name the predicable at work in each statement — and learn why “genus” and “species” are relative terms, and how a property differs from an accident.
>
> NEW: We name the predicable in each statement, and we learn why “genus” and “species” are relative terms, and how a property differs from an accident.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**24.** `index.html:1274` · Card II, The Categories

> OLD: … substance, and the nine accidents — quantity, quality, relation, action, passion, when, where, position, and habit. Place each predicate in its category, and learn St Thomas’s account of how the nine follow from their different relations to substance.
>
> NEW: … substance, and the nine accidents (quantity, quality, relation, action, passion, when, where, position, and habit). We place each predicate in its category and learn St Thomas’s account of how the nine follow from their different relations to substance.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**25.** `index.html:1277` · Card III, Division

> OLD: Division — the road to definition: a general kind divided by differences until a single species stands alone. Each question shows one rule — the members must cover the whole, must not overlap, must each actually belong to the whole, and must be sorted on a single basis — and the four kinds (essential, integral, by powers, accidental) are taught alongside.
>
> NEW: Division leads to definition: a general kind is divided by differences until a single species is left. Each question shows one rule (the members must cover the whole, must not overlap, must each actually belong to the whole, and must be sorted on a single basis), and the four kinds (essential, integral, by powers, accidental) are taught alongside.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**26.** `index.html:1280` · Card IV, Definition

> OLD: Learn the rules of definition by using them: each question puts one rule in front of you — exact fit, clarity, no circle, saying what a thing is rather than what it is not, and brevity — and asks which everyday definition breaks or keeps it.
>
> NEW: We learn the rules of definition by using them. Each question shows one rule (exact fit, clarity, no circle, saying what a thing is rather than what it is not, and brevity) and asks which everyday definition breaks or keeps it.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**27.** `index.html:1283` · Card V, Diagramming Propositions

> OLD: Picture single propositions on a Venn diagram — shade what they declare empty, place an × where they assert existence. From 50 points onward, two premises together on three circles.
>
> NEW: We picture single propositions on a Venn diagram, shading what they declare empty and placing an × where they assert existence. From 50 points onward, two premises are diagrammed together on three circles.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**28.** `index.html:1289` · Card VII, The Modal Propositions

> OLD: Necessary, impossible, possible — after John of St Thomas: judge equipollences (same force, same corner of the square: does “not possible that not” come to “necessary”?), the modal square, and the composite versus the divided sense (may the seated man walk?).
>
> NEW: The modes necessary, impossible, and possible, after John of St Thomas. We judge equipollences (whether two expressions have the same force and the same corner of the square, as when we ask whether “not possible that not” comes to “necessary”), the modal square, and the composite and divided senses (whether the seated man may walk).

Decision: ☐ yes · ☑ change: ____________________ · ☐ keep

GROK BOT: The modes are necessary, impossible, and possible, as John of St Thomas treats them. We judge equipollences (whether two expressions have the same force and the same corner of the square, as when we ask whether “not possible that not” comes to “necessary”), the modal square, and the composite and divided senses (whether the seated man may walk).

**29.** `index.html:1295` · Card IX, Syllogistic Form in the Abstract

> OLD: Judge whether a syllogism in schematic letters is valid — the form laid bare.
>
> NEW: Judge whether a syllogism in schematic letters is valid, considering its form alone.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**30.** `index.html:1298` · Card X, Syllogistic Form in the Concrete

> OLD: Judge validity for syllogisms clothed in ordinary English terms, general or singular.
>
> NEW: Judge validity for syllogisms stated in ordinary English terms, general or singular.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**31.** `index.html:1304` · Card XII, The Conjunctive and Disjunctive Syllogism

> OLD: “Not both” — and “either–or”. … Watch the marker.
>
> NEW: The conjunctive (“not both”) and the disjunctive (“either–or”). … So the marker of the disjunction must be noted.

Decision: ☐ yes · ☑ change: ____________________ · ☐ keep

GROK BOT: There are two forms, the conjunctive (“not both”) and the disjunctive (“either–or”). … So we must note which marker the premise uses. (NEW narrows “the marker” to the disjunction only.)

**32.** `index.html:1307` · Card XIII, The Hypothetical Syllogism

> OLD: The conditional and its two lawful moods, ponendo ponens and tollendo tollens — beside the twin fallacies of affirming the consequent and denying the antecedent.
>
> NEW: The conditional and its two lawful moods, ponendo ponens and tollendo tollens, set beside the twin fallacies of affirming the consequent and denying the antecedent.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**33.** `index.html:1313` · Card XV, Arguments in Ordinary Speech

> OLD: Ordinary English arguments of every stripe — categorical, conditional, conjunctive, disjunctive, and modal — not in standard form.
>
> NEW: Ordinary English arguments of every kind (categorical, conditional, conjunctive, disjunctive, and modal), not in standard form.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**34.** `index.html:1316` · Card XVI, The Modal Syllogism

> OLD: The received rule: peiorem sequitur semper conclusio partem — the conclusion follows the weaker premise, in mode as in quality and quantity.
>
> NEW: The received rule is peiorem sequitur semper conclusio partem: the conclusion follows the weaker premise, in mode as in quality and quantity.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**35.** `index.html:1319` · Card XVII, The Chain of Syllogisms

> OLD: The purely formal art brought to a point: a chain of syllogisms (a polysyllogism), where each conclusion becomes a premise of the next. Follow the reasoning link by link and judge whether the whole chain holds — for one broken link breaks the chain. Schematic letters; no diagrams.
>
> NEW: The purely formal art at its fullest extent: a chain of syllogisms (a polysyllogism), where each conclusion becomes a premise of the next. Follow the reasoning link by link and judge whether the whole chain holds, for one invalid link makes the whole chain invalid. The terms are schematic letters, and there are no diagrams.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**36.** `index.html:1322` · Card XVIII, The Matter and the Form

> OLD: Judge the form (is it valid?) and the matter (are the premises in fact true?) — hence whether the argument proves its conclusion.
>
> NEW: Judge the form (is it valid?) and the matter (are the premises in fact true?), and so whether the argument proves its conclusion.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**37.** `index.html:1325` · Card XIX, The Enthymeme

> OLD: The syllogism with a premise left unsaid — where arguments hide their weakness. Supply the tacit premise in standard form (or “none”, when nothing can complete it), and weigh specimens ancient and modern — from Aristotle, Plato, Descartes, and St Thomas to the arguments of the street, the field, and the market: what is being taken for granted?
>
> NEW: The syllogism with a premise left unsaid, where arguments hide their weakness. Supply the tacit premise in standard form (or “none”, when nothing can complete it), and weigh examples ancient and modern, from Aristotle, Plato, Descartes, and St Thomas to the arguments of the street, the field, and the market, asking what is being taken for granted.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**38.** `index.html:1328` · Card XX, Dialectic

> OLD: … given something you must show, learn which of the twelve places will supply it, and what maxim the argument will depend on. Then judge what standing a premise has before you offer it, and answer an objection as the schools did — distinguish the term, deny the premise, grant it all and deny the consequence, or concede and narrow your claim.
>
> NEW: … given something we must show, we learn which of the twelve places will supply it, and what maxim the argument will depend on. Then we judge what standing a premise has before we offer it, and we answer an objection as the schools did: we distinguish the term, deny the premise, grant it all and deny the consequence, or concede and narrow the claim.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**39.** `index.html:1331` · Card XXI, The Fallacies

> OLD: Name the fallacy, name both causes, name the answer, and see the false rule an argument is standing on.
>
> NEW: We name the fallacy, its two causes, and the answer to it, and we find the false rule the argument depends on.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**40.** `index.html:1439` · Study card, The Diagram Workshop

> ⚑ **Possibly your wording.** This sentence was written in a9517de (Aug 9, “AI slop fixes”), which the style pack treats as probably yours.
>
> OLD: Mark a Venn diagram freely — shade regions, place ×s — and read what your diagram asserts. One proposition, two premises, or a whole syllogism.
>
> NEW: Mark a Venn diagram freely (shading regions and placing ×s) and read what your diagram asserts, whether for one proposition, two premises, or a whole syllogism.

Decision: ☐ yes · ☐ change: ____________________ · ☐ keep

GROK BOT: for Timothy. NEW removes the dashes and joins the fragment “One proposition, two premises, or a whole syllogism.” into the first sentence.

**41.** `index.html:1462` · Study card, What Is Logic · An Orientation

> OLD: A brief introduction to what logic is, its parts — demonstration, dialectic, rhetoric, poetics — and the three acts of the mind that these exercises perfect. … Not scored — a foundation to return to.
>
> NEW: A brief introduction to what logic is, its parts (demonstration, dialectic, rhetoric, poetics), and the three acts of the mind that these exercises perfect. … It is not scored; it is a foundation to return to.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**42.** `index.html:1471` · Card, The Art of Grammar

> ⚑ **Possibly your wording.** This sentence was written in a8a29da (Aug 12, “fixed grammar text”), your hand edit of the grammar text.
>
> OLD: From the beginning and assuming none of it: what a noun and a verb are, how they make a sentence that can be true or false, and where grammar stops and logic starts.
>
> NEW: It begins from the beginning and assumes no grammar: what a noun and a verb are, how they make a sentence that can be true or false, and where grammar stops and logic starts.

Decision: ☐ yes · ☐ change: ____________________ · ☐ keep

GROK BOT: for Timothy. NEW turns the opening fragment into a full sentence (“It begins from the beginning and assumes no grammar”).

**43.** `index.html:1471` · Card, The Art of Grammar

> OLD: Then the medieval question — why the parts of speech are what they are — and the modists’ answer, that grammar follows the shape of things. Not scored.
>
> NEW: Then it takes up the medieval question of why the parts of speech are what they are, and the modists’ answer, that grammar follows the shape of things. It is not scored.

Decision: ☐ yes · ☑ change: ____________________ · ☐ keep

GROK BOT: Then it takes up the medieval question of why the parts of speech are what they are, and the modists’ answer, that the modes of signifying follow the modes of understanding, which follow the modes of being of things (modi significandi, modi intelligendi, modi essendi). It is not scored.


## Study: The Diagram Workshop

**44.** `index.html:755` · “What the circles mean”

> OLD: Picture it looking down on them — the term above, and beneath it every single thing of which it can be truly said:
>
> NEW: We may picture it as standing over them, with the term above and beneath it every single thing of which it can be truly said:

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**45.** `index.html:781` · “What the circles mean”, caption under the drawing

> OLD: shade the region, and you declare: no dots down there at all
>
> NEW: shading the region declares that no individuals are there

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**46.** `index.html:783` · “What the circles mean”

> OLD: Two moves say everything: an × reaches down and picks one individual out at random — “some dog” — without saying which; shading declares that a region holds no individuals at all.
>
> NEW: There are only two marks. An × picks out one individual at random (“some dog”) without saying which; shading declares that a region holds no individuals at all.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**47.** `index.html:783` · “What the circles mean”

> OLD: When two or three circles overlap, their regions sort the individuals beneath — and the whole logic of propositions and syllogisms can be read off the picture.
>
> NEW: When two or three circles overlap, their regions sort the individuals beneath, and the whole logic of propositions and syllogisms can be read off the picture.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**48.** `index.html:787` · “How to read a Venn diagram”

> OLD: Shading declares a region empty; an × declares that something lives there.
>
> NEW: Shading declares a region empty; an × declares that something exists there.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**49.** `index.html:788` · “How to read a Venn diagram”

> OLD: “All S are P” — shade the part of S outside P (no S escapes P).
>
> NEW: “All S are P”: shade the part of S outside P (no S lies outside P).

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**50.** `index.html:792` · “How to read a Venn diagram”

> OLD: With three circles, a universal proposition empties a lens of two cells — one inside the third circle and one outside it.
>
> NEW: With three circles, a universal proposition empties a lens of two cells, one inside the third circle and one outside it.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**51.** `index.html:2423` · Workshop notice

> OLD: every cell for that claim is already shaded — clear something first
>
> NEW: every cell for that claim is already shaded, so something must be cleared first

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**52.** `index.html:2424` · Workshop notice

> OLD: the “some” has two open cells — shade a universal first, and its × will find a single home (or place it by hand)
>
> NEW: the “some” has two open cells, so shade a universal first, and its × will then have only one cell (or place it by hand)

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**53.** `index.html:2479, 2495` · Workshop readout, nothing marked yet

> OLD: Nothing is asserted yet — mark the diagram and I shall read it.
>
> NEW: Nothing is asserted yet. Once the diagram is marked, the readout will say what it asserts.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**54.** `index.html:2502` · Workshop readout, syllogism mode

> OLD: — but this is asserted directly by your own marking of the S–P region: a further premise about the outer terms, not a conclusion drawn from the others.
>
> NEW: ; but this is asserted directly by your own marking of the S–P region, so it is a further premise about the outer terms, not a conclusion drawn from the others.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep


## Study: The Square of Opposition

**55.** `index.html:817` · “The square of opposition, in itself”

> OLD: Every simple categorical proposition has a quantity — universal or particular — and a quality — affirmative or negative. Cross these two and exactly four forms result, …
>
> NEW: Every simple categorical proposition has a quantity (universal or particular) and a quality (affirmative or negative). When these two are combined, exactly four forms result, …

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**56.** `index.html:819` · “The square of opposition, in itself”

> OLD: The square sets these four at its corners — A and E along the top, I and O beneath — so that the logical bonds between them may be seen at a glance. Four such bonds hold:
>
> NEW: The square sets these four at its corners (A and E along the top, I and O beneath), so that the logical relations between them may be seen at a glance. There are four such relations:

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**57.** `index.html:820` · “The square of opposition, in itself”

> OLD: … truth descends from the universal to its particular, and falsity climbs from the particular to its universal.
>
> NEW: … truth descends from the universal to its particular, and falsity ascends from the particular to its universal.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**58.** `index.html:821` · “Why it is used”

> OLD: It is the oldest engine of valid inference from a single premise — and the ground of the immediate inferences below, which you can try out on any pair of terms in the square at the foot of this page.
>
> NEW: It is the oldest means of valid inference from a single premise, and the basis of the immediate inferences below, which you can try on any pair of terms in the square at the foot of this page.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**59.** `index.html:825` · “The immediate inferences, briefly”

> OLD: E and I convert simply, and the result is equivalent — truth passes both ways:
>
> NEW: E and I convert simply, and the result is equivalent, so truth passes both ways:

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**60.** `index.html:826` · “The immediate inferences, briefly”

> OLD: A converts only per accidens — the quantity drops: “All foxes are animals” yields “Some animals are foxes”. Why the drop?
>
> NEW: A converts only per accidens, that is, the quantity is reduced: “All foxes are animals” yields “Some animals are foxes”. Why is the quantity reduced?

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**61.** `index.html:826` · “The immediate inferences, briefly”

> OLD: … but it says nothing about the whole of the animals — “All animals are foxes” would claim far more than was given (the illicit conversion).
>
> NEW: … but it says nothing about the whole of the animals, so “All animals are foxes” would claim far more than was given (the illicit conversion).

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**62.** `index.html:826` · “The immediate inferences, briefly”

> OLD: Truth is preserved downward only — you cannot climb back from “Some animals are foxes” to “All foxes are animals”.
>
> NEW: Truth is preserved in one direction only: we cannot infer “All foxes are animals” back from “Some animals are foxes”.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**63.** `index.html:828` · “The immediate inferences, briefly”

> OLD: It works on all four forms and is fully truth-preserving — the obverse is equivalent to the original:
>
> NEW: It applies to all four forms and is fully truth-preserving, since the obverse is equivalent to the original:

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**64.** `index.html:829` · “The immediate inferences, briefly”

> OLD: Contraposition returns, from an A or an O, an equivalent with both terms changed places and replaced by their complements — but it is really three familiar steps in succession, not a single leap:
>
> NEW: Contraposition gives, from an A or an O, an equivalent in which both terms have changed places and been replaced by their complements; but it is really three familiar steps in succession, not a single step:

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**65.** `index.html:829` · “The immediate inferences, briefly”

> OLD: Take “All foxes are animals.” (1) Obvert — change the quality and negate the predicate: “No foxes are non-animals.” (2) Convert — an E converts simply: “No non-animals are foxes.”
>
> NEW: Consider “All foxes are animals.” (1) Obvert, changing the quality and negating the predicate: “No foxes are non-animals.” (2) Convert, since an E converts simply: “No non-animals are foxes.”

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**66.** `index.html:829` · “The immediate inferences, briefly”

> OLD: Beware the tempting shortcut of converting first — “All animals are foxes” — for an A does not convert.
>
> NEW: Converting first is a tempting shortcut, but it gives “All animals are foxes”, and an A does not convert.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**67.** `index.html:831` · “The immediate inferences, briefly”

> OLD: In sum: simple conversion (E, I), obversion (all), and contraposition (A, O) are equivalences — truth passes both ways.
>
> NEW: In sum: simple conversion (E, I), obversion (all), and contraposition (A, O) are equivalences, so truth passes both ways.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**68.** `index.html:2590 and ars-engine.js:1210` · Square readout and Exercise VI feedback, when an I is contraposed (same sentence in both places)

> OLD: … contraposition obverts, then converts, then obverts — but the obverse of I is an O, and an O will not convert, so the process stalls.
>
> NEW: … contraposition obverts, then converts, then obverts; but the obverse of I is an O, and an O does not convert, so the process cannot be completed.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**69.** `index.html:2595 and 2847` · Square readout and Exercise VI feedback, conversion per accidens

> OLD: Conversion per accidens: the universal drops to a particular, existential import supplying the witness.
>
> NEW: Conversion per accidens: the universal is reduced to a particular, and existential import supplies the witness.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep


## Intro card: The Modes of Propositions (Exercise VII)

**70.** `index.html:869` · “The four corners”

> OLD: impossible (cannot be true — the same as “necessarily not”)
>
> NEW: impossible (cannot be true; the same as “necessarily not”)

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**71.** `index.html:869` · “The four corners”

> OLD: … and truth flows downward — what is necessary is thereby possible, but never the reverse.
>
> NEW: … and truth passes downward, since what is necessary is thereby possible, but never the reverse.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**72.** `index.html:870` · Heading

> OLD: Equipollence — same force, different dress.
>
> NEW: Equipollence: the same force in different words.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**73.** `index.html:870` · “Equipollence”

> OLD: Two expressions are equipollent when they mean the same thing and must share the same truth-value — they are equal in force (aequipollentia), though the wording differs.
>
> NEW: Two expressions are equipollent when they mean the same thing and must share the same truth-value; they are equal in force (aequipollentia), though the wording differs.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**74.** `index.html:870` · “Equipollence”

> OLD: If they land on different corners, they are not equipollent.
>
> NEW: If they reduce to different corners, they are not equipollent.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**75.** `index.html:871` · “The laws that produce equipollences”

> OLD: … a NOT placed before the mode flips it to the opposite corner — “not possible” is “impossible,” while “not necessary” yields only the weak “possible not”; a NOT placed after the mode negates the content alone — “possible that not.”
>
> NEW: … a NOT placed before the mode changes it to the opposite corner (“not possible” is “impossible,” while “not necessary” yields only the weak “possible not”); a NOT placed after the mode negates the content alone (“possible that not”).

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**76.** `index.html:871` · “The laws that produce equipollences”

> OLD: Fold the negations step by step until each expression shows its corner; then ask whether the two corners match.
>
> NEW: We fold in the negations step by step until each expression shows its corner, and then we ask whether the two corners match.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**77.** `index.html:871` · “The laws that produce equipollences”

> OLD: The commonest slip is hearing “not necessary” as “impossible”: denying the strong mode grants only the weak denial.
>
> NEW: The commonest slip is reading “not necessary” as “impossible”, but denying the strong mode grants only the weak denial.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**78.** `index.html:872` · “The two senses”

> OLD: … taken together as one package: “it is possible that (he is standing and sitting at once)” — false, since the parts cannot be true together.
>
> NEW: … taken together as one whole: “it is possible that (he is standing and sitting at once)”. This is false, since the parts cannot be true together.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**79.** `index.html:872` · “The two senses”

> OLD: Same words, two claims.
>
> NEW: The words are the same, but the claims are two.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**80.** `index.html:872` · “The two senses”

> OLD: … yet false divided (nothing runs by necessity — it could stop).
>
> NEW: … yet false divided (nothing runs by necessity, since it could stop).

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**81.** `index.html:872` · “The two senses”

> OLD: Whenever a modal sentence puzzles you, ask first: does the mode bind the whole composed statement, or only the subject taken by itself?
>
> NEW: Whenever a modal sentence is puzzling, the first question is whether the mode governs the whole composed statement, or only the subject taken by itself.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep


## Intro card: The Five Predicables (Exercise I)

**82.** `index.html:888` · Opening paragraph

> OLD: There are five ways a general term can be said of a subject — the five predicables of Porphyry.
>
> NEW: There are five ways a general term can be said of a subject, the five predicables of Porphyry.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**83.** `index.html:888` · Opening paragraph

> OLD: Learn to recognize each before you try to name it.
>
> NEW: We learn to recognize each before we try to name it.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**84.** `index.html:890` · “Genus”

> OLD: Said of many things of different kinds, naming the broader class they all share; it answers “what is it?” with the wider nature.
>
> NEW: It is said of many things of different kinds, naming the broader class they all share; it answers “what is it?” with the wider nature.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**85.** `index.html:892` · “Species”

> OLD: The genus narrowed by a difference, and said of the individuals that share that nature.
>
> NEW: It is the genus narrowed by a difference, and it is said of the individuals that share that nature.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**86.** `index.html:896` · “Property”

> OLD: It belongs to every member of the species, to that species alone, and at all times — so wherever you find the one you find the other.
>
> NEW: It belongs to every member of the species, to that species alone, and at all times, so the two are always found together.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**87.** `index.html:900` · “Two questions sort them”

> ⚑ **Possibly your wording.** Written in 23fc802 (Oct 4, “Predicables revisions”, committed as gcrastinus). May be yours.
>
> OLD: Ask of any predicate: is it part of what the subject is, and is it said of that subject alone? Part of it, and said of more: the genus (figure, of the triangle). Part of it, and said of it alone: the difference, that is, the last difference (three-sided). Not part of it, yet said of it alone, of all, and always: the property (angles equal to two right angles). Not part of it, and not said of it alone: the accident (drawn in chalk).
>
> NEW: We ask two questions of any predicate: is it part of what the subject is, and is it said of that subject alone? If it is part of it and said of more, it is the genus (figure, of the triangle). If it is part of it and said of it alone, it is the difference, that is, the last difference (three-sided). If it is not part of it, yet is said of it alone, of all, and always, it is the property (angles equal to two right angles). If it is not part of it and not said of it alone, it is the accident (drawn in chalk).

Decision: ☐ yes · ☐ change: ____________________ · ☐ keep

GROK BOT: for Timothy. NEW turns the “Part of it, and said of more:” fragments into “If … it is the …” sentences and adds “We ask two questions”.

**88.** `index.html:902` · “Able to, and doing”

> ⚑ **Possibly your wording.** Written in 23fc802 (Oct 4). May be yours.
>
> OLD: One word changes, and so does the predicable.
>
> NEW: So when one word changes, the predicable changes too.

Decision: ☐ yes · ☐ change: ____________________ · ☐ keep

GROK BOT: for Timothy. NEW turns the aphorism “One word changes, and so does the predicable.” into “So when one word changes, the predicable changes too.”

**89.** `index.html:903` · “And a caution on the relative terms”

> OLD: … an individual like Socrates is neither — he is only ever the thing being talked about.
>
> NEW: … an individual like Socrates is neither, since he is only ever the thing being talked about.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**90.** `index.html:903` · “And a caution on the relative terms”

> OLD: Each question ahead puts one predicable, or one point of the doctrine, in front of you.
>
> NEW: Each of the questions that follow takes up one predicable, or one point of the doctrine.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**91.** `index.html:904` · “Supposition”

> ⚑ **Possibly your wording.** Written in 23fc802 (Oct 4). May be yours.
>
> OLD: Which supposition the noun is under is a question for logic, and this art is its home.
>
> NEW: Which supposition the noun is under is a question for logic, which is the art that studies supposition.

Decision: ☐ yes · ☐ change: ____________________ · ☐ keep

GROK BOT: for Timothy. NEW replaces “this art is its home” with “which is the art that studies supposition”.


## Intro card: The Ten Categories (Exercise II)

**92.** `index.html:920` · Opening paragraph

> OLD: Anything that can be said about a thing falls under one of ten highest kinds — the categories of Aristotle.
>
> NEW: Anything that can be said about a thing falls under one of ten highest kinds, the categories of Aristotle.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**93.** `index.html:922` · “Substance”

> OLD: … this man, this horse (primary substance); and the kinds they belong to — man, animal (secondary substance).
>
> NEW: … this man, this horse (primary substance); and the kinds they belong to, such as man and animal (secondary substance).

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**94.** `index.html:923` · “What BELONGS TO the substance itself”

> OLD: From its matter — Quantity (how much? two feet long, a number); from its form — Quality (of what sort? white, hot, just); or as a bearing toward something else — Relation (double, half, a master).
>
> NEW: Quantity follows from its matter (how much? two feet long, a number); Quality follows from its form (of what sort? white, hot, just); and Relation is a bearing toward something else (double, half, a master).

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**95.** `index.html:924` · “What the substance DOES or UNDERGOES”

> OLD: Action — what it does to something else (cutting, burning); and Passion — what is done to it (being cut, being burnt).
>
> NEW: Action is what it does to something else (cutting, burning), and Passion is what is done to it (being cut, being burnt).

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**96.** `index.html:925` · “What measures it from outside”

> OLD: When — its position in time (yesterday, now); Where — its position in place (in the school, in the marketplace); and Posture — how its parts are arranged in that place (he sits, he lies).
>
> NEW: When is its position in time (yesterday, now); Where is its position in place (in the school, in the marketplace); and Posture is how its parts are arranged in that place (he sits, he lies).

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**97.** `index.html:926` · “What it merely HAS ON it”

> OLD: Habit (having) — something attached to the substance without measuring it: he is shod, he is armed.
>
> NEW: Habit (having) is something attached to the substance without measuring it: he is shod, he is armed.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**98.** `index.html:927` · “A last distinction”

> Note: The rest of this paragraph was written in 23fc802 (Oct 4); this closing sentence was there before.
>
> OLD: Each question ahead puts one category, or one point of the doctrine, in front of you.
>
> NEW: Each of the questions that follow takes up one category, or one point of the doctrine.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep


## Intro card: The Kinds of Division (Exercise III)

**99.** `index.html:943` · Opening paragraph

> OLD: But wholes come in different sorts, and so do divisions — here are the four kinds, each with two plain examples and one faulty case.
>
> NEW: But wholes are of different sorts, and so are divisions. There are four kinds, and each is given here with two plain examples and one faulty case.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**100.** `index.html:947` · “Essential”, faulty case

> OLD: Faulty: animals into the footed and the white — two different bases at once, and the members overlap.
>
> NEW: Faulty: animals into the footed and the white, which uses two different bases at once, so that the members overlap.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**101.** `index.html:950` · “Integral”, faulty case

> OLD: Faulty: a tree into root, trunk, and the soil — the soil is not a part of the tree at all, so it does not belong to the whole being divided.
>
> NEW: Faulty: a tree into root, trunk, and the soil, since the soil is not a part of the tree at all, so it does not belong to the whole being divided.

Decision: ☐ yes · ☑ change: ____________________ · ☐ keep

GROK BOT: Faulty: a tree into root, trunk, and the soil; the soil is not a part of the tree at all, so it does not belong to the whole being divided.

**102.** `index.html:951` · “By its powers”

> OLD: A single thing, divided not into pieces but into its capacities.
>
> NEW: A single thing is divided not into pieces but into its capacities.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**103.** `index.html:953` · “By its powers”, faulty case

> OLD: Faulty: the soul of an animal into sense and the paw — a paw is a bodily part, not a power of the soul.
>
> NEW: Faulty: the soul of an animal into sense and the paw, since a paw is a bodily part, not a power of the soul.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**104.** `index.html:956` · “Accidental”, faulty case

> OLD: Faulty: stones into the precious and the heavy — a heavy gem falls under both members at once.
>
> NEW: Faulty: stones into the precious and the heavy, since a heavy gem falls under both members at once.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**105.** `index.html:957` · “And the rules, for every kind”

> OLD: Each question ahead puts one rule, or one kind, in front of you.
>
> NEW: Each of the questions that follow takes up one rule, or one kind.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep


## Intro card: The Kinds of Definition (Exercise IV)

**106.** `index.html:973` · Opening paragraph

> OLD: A definition answers the question what is it? — but there is more than one way of answering. The tradition distinguishes four kinds; learn to recognize each before you judge it.
>
> NEW: A definition answers the question what is it?, but there is more than one way of answering. The tradition distinguishes four kinds, and we learn to recognize each before we judge it.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**107.** `index.html:976` · “Essential”

> OLD: The complete definition, saying what the thing is: the nearest wider kind (genus), narrowed by the difference that belongs to this thing and nothing else.
>
> NEW: It is the complete definition, and it says what the thing is: the nearest wider kind (genus), narrowed by the difference that belongs to this thing and nothing else.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**108.** `index.html:978` · “Causal”

> OLD: … what it is made of, its form, or what it is for — the last fits everything made by human craft.
>
> NEW: … what it is made of, its form, or what it is for; the last applies to everything made by human craft.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**109.** `index.html:979` · “And the rules”

> OLD: Whatever its kind, a good definition fits exactly what it defines — neither too broad nor too narrow; it is clearer than the thing defined, so no metaphor; …
>
> NEW: Whatever its kind, a good definition fits exactly what it defines, neither too broad nor too narrow; it is clearer than the thing defined, so it uses no metaphor; …

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**110.** `index.html:979` · “And the rules”

> OLD: Each question ahead will put one rule, or one kind, in front of you.
>
> NEW: Each of the questions that follow takes up one rule, or one kind.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep


## Intro card: Translating Ordinary Speech (Exercise XV)

**111.** `index.html:995` · Opening paragraph

> OLD: Ordinary language wears its logic loosely. Before judging the arguments, note where translation into standard form most often goes wrong.
>
> NEW: Ordinary language often states its logical form loosely. Before we judge the arguments, we should note where translation into standard form most often goes wrong.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**112.** `index.html:997` · “Missing quantity”

> OLD: When no sign appears, judge from the sense — and “a” swings both ways: “a whale is a mammal” is universal, “a man came to the door” particular.
>
> NEW: When no sign of quantity appears, we judge from the sense, and “a” can be read either way: “a whale is a mammal” is universal, “a man came to the door” particular.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**113.** `index.html:998` · “‘Not all’ is not ‘none’”

> OLD: And the English “All S are not P” is treacherous — it usually intends No S are P, but sometimes only Some S are not P. Read twice.
>
> NEW: And the English “All S are not P” is ambiguous: it usually means No S are P, but sometimes only Some S are not P, so it should be read twice.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**114.** `index.html:999` · “‘Only’ reverses the terms”

> OLD: “Only citizens are voters” says All voters are citizens — not the converse.
>
> NEW: “Only citizens are voters” says All voters are citizens, not the converse.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**115.** `index.html:1002` · Heading and text

> OLD: Find the conclusion, wherever it hides. … “therefore,” “so,” “hence,” and “it follows that” mark the conclusion — which often comes first: …
>
> NEW: Finding the conclusion. … “therefore,” “so,” “hence,” and “it follows that” mark the conclusion, which often comes first: …

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**116.** `index.html:1003` · Heading and text

> OLD: Odd verbs want the copula. “All dogs bark” becomes All dogs are things that bark — supply “things that” and restore is or are.
>
> NEW: Other verbs need the copula. “All dogs bark” becomes All dogs are things that bark; we supply “things that” and restore is or are.

Decision: ☐ yes · ☑ change: ____________________ · ☐ keep

GROK BOT: Verbs other than the copula must be restated with it. “All dogs bark” becomes All dogs are things that bark; we supply “things that” and restore is or are.

**117.** `index.html:1004` · Heading and text

> OLD: Singulars stand whole. “Socrates is a man” takes its subject in its entirety: treat it as a universal with existential import — one thing, wholly included or wholly shut out.
>
> NEW: Singular subjects are taken whole. “Socrates is a man” takes its subject in its entirety: we treat it as a universal with existential import, since it concerns one thing, which is either wholly included or wholly excluded.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**118.** `index.html:1005` · “Mark the connectives”

> OLD: “If… then” is the conditional (beware affirming the consequent); “not both” is the conjunctive, which concludes only by positing; “either… or” must confess itself — strict (“but not both”) licenses both moods, broad (“or perhaps both”) only tollendo ponens.
>
> NEW: “If… then” is the conditional (where the common error is affirming the consequent); “not both” is the conjunctive, which concludes only by positing; “either… or” must show which kind it is: the strict disjunction (“but not both”) licenses both moods, and the broad disjunction (“or perhaps both”) licenses only tollendo ponens.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**119.** `index.html:1006` · Heading and text

> OLD: Mind the modes. “Necessarily” and “contingently” cling to the conclusion at their peril: the conclusion may never be stronger in mode than the weaker premise.
>
> NEW: The modes. “Necessarily” and “contingently” must be attached to the conclusion with care, because the conclusion may never be stronger in mode than the weaker premise.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep


## Intro card: Immediate Inference (Exercise VI)

**120.** `index.html:1022` · Opening paragraph

> OLD: An immediate inference draws a new proposition from a single one — no middle term, no second premise; the conclusion is read straight off the first.
>
> NEW: An immediate inference draws a new proposition from a single one, with no middle term and no second premise, so the conclusion is read directly from the first.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**121.** `index.html:1026` · “Contraposition”

> OLD: Do not simply convert first — an A will not convert.
>
> NEW: We cannot simply convert first, because an A does not convert.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep


## Intro card: The Conjunctive and Disjunctive (Exercise XII)

**122.** `index.html:1043` · Opening paragraph

> OLD: Two are drilled here — the conjunctive and the disjunctive. Each has one lawful path to a conclusion; step off it and the argument fails.
>
> NEW: Two are practiced here, the conjunctive and the disjunctive. Each has one lawful way of reaching a conclusion, and any other way fails.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**123.** `index.html:1045` · “The conjunctive”

> OLD: From it you may conclude only by positing one member to remove the other — the mood ponendo tollens (“by positing, it takes away”): “He is in Rome; therefore he is not in Athens.” You may not reason the reverse: denying one member proves nothing of the other, for perhaps he is in neither.
>
> NEW: From it we may conclude only by positing one member in order to remove the other, which is the mood ponendo tollens (“by positing, it takes away”): “He is in Rome; therefore he is not in Athens.” We may not reason the reverse, since denying one member proves nothing of the other, for perhaps he is in neither.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**124.** `index.html:1046` · “The disjunctive”

> OLD: Its sure mood is tollendo ponens (“by removing, it posits”): deny one member and the other stands — “It is not odd; therefore it is even.”
>
> NEW: Its sure mood is tollendo ponens (“by removing, it posits”): if one member is denied, the other stands (“It is not odd; therefore it is even.”).

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**125.** `index.html:1047` · “Strict against broad”

> OLD: Whether you may also reason ponendo tollens — positing one member to remove the other — depends on the “or.”
>
> NEW: Whether we may also reason ponendo tollens (positing one member to remove the other) depends on the “or.”

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**126.** `index.html:1047` · “Strict against broad”

> OLD: … from “He is either clever or lucky” you cannot infer that, being clever, he is not also lucky. Mark the connective before you conclude.
>
> NEW: … from “He is either clever or lucky” we cannot infer that, being clever, he is not also lucky. So we must note the connective before we conclude.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep


## Intro card: The Hypothetical Syllogism (Exercise XIII)

**127.** `index.html:1063` · Opening paragraph

> OLD: A hypothetical (conditional) proposition asserts not a fact but a connexion: … Two moods reason soundly from such a premise, and two tempting fallacies counterfeit them.
>
> NEW: A hypothetical (conditional) proposition asserts not a fact but a connection: … Two moods reason soundly from such a premise, and two tempting fallacies imitate them.

Decision: ☐ yes · ☑ change: ____________________ · ☐ keep

GROK BOT: A hypothetical (conditional) proposition asserts not a fact but a connection: … Two moods reason validly from such a premise, and two tempting fallacies imitate them.

**128.** `index.html:1065` · “Ponendo ponens”

> OLD: Posit the if-clause and the then-clause follows: “It has rained; therefore the ground is wet.” Always valid.
>
> NEW: If the if-clause is posited, the then-clause follows: “It has rained; therefore the ground is wet.” This mood is always valid.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**129.** `index.html:1066` · “Tollendo tollens”

> OLD: Remove the then-clause and the if-clause falls with it: “The ground is not wet; therefore it has not rained.” Always valid.
>
> NEW: If the then-clause is removed, the if-clause is removed with it: “The ground is not wet; therefore it has not rained.” This mood is always valid.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**130.** `index.html:1067` · “The two fallacies”

> OLD: Affirming the consequent — “The ground is wet; therefore it has rained” — fails, for a burst pipe would wet it too. Denying the antecedent — “It has not rained; therefore the ground is not wet” — fails for the same reason.
>
> NEW: Affirming the consequent (“The ground is wet; therefore it has rained”) fails, for a burst pipe would wet it too. Denying the antecedent (“It has not rained; therefore the ground is not wet”) fails for the same reason.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**131.** `index.html:1067` · “The two fallacies”

> OLD: A conditional runs one way only: from antecedent to consequent, never back.
>
> NEW: A conditional holds in one direction only, from antecedent to consequent, and never from consequent to antecedent.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep


## Intro card: The Modal Syllogism (Exercise XVI)

**132.** `index.html:1083` · Opening paragraph

> OLD: A modal syllogism is one whose premises are qualified by a mode — the manner in which the predicate belongs to the subject. Three modes are in play: …
>
> NEW: A modal syllogism is one whose premises are qualified by a mode, that is, the manner in which the predicate belongs to the subject. Three modes are considered here: …

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**133.** `index.html:1085` · “The governing rule”

> OLD: Peiorem sequitur semper conclusio partem — the conclusion always follows the weaker premise. As a negative premise forces a negative conclusion, and a particular premise a particular one, so the weaker mode rules: join a necessary premise to a merely contingent one, and the conclusion can be no stronger than contingent.
>
> NEW: Peiorem sequitur semper conclusio partem: the conclusion always follows the weaker premise. As a negative premise requires a negative conclusion, and a particular premise a particular one, so the weaker mode governs the conclusion: if a necessary premise is joined to a merely contingent one, the conclusion can be no stronger than contingent.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**134.** `index.html:1087` · “An example”

> OLD: “… therefore every scholar is mortal” — yet the conclusion is drawn only as a plain assertion, … Judge each argument for the mode its weakest premise allows.
>
> NEW: “… therefore every scholar is mortal.” Yet the conclusion is drawn only as a plain assertion, … So we judge each argument by the mode its weakest premise allows.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep


## Intro card: The Chain of Syllogisms (Exercise XVII)

**135.** `index.html:1103` · Opening paragraph

> OLD: Reasoning rarely halts at a single syllogism. More often one conclusion becomes a premise of the next, and so a chain is forged — what the old logicians called a polysyllogism, …
>
> NEW: Reasoning rarely stops at a single syllogism. More often one conclusion becomes a premise of the next, and so a chain is formed, which the old logicians called a polysyllogism, …

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**136.** `index.html:1106` · “When the chain holds”

> OLD: A single broken link breaks the chain — even if the last line happens to look plausible. So follow each step: does this conclusion truly follow from the two propositions above it?
>
> NEW: A single invalid link makes the whole chain invalid, even if the last line happens to look plausible. So we follow each step and ask whether this conclusion truly follows from the two propositions above it.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**137.** `index.html:1107` · “What to do”

> OLD: No diagrams here — only the form, laid bare. The chains grow longer at the higher levels: two or three links at first, four or five for the master.
>
> NEW: There are no diagrams here, only the form of the reasoning. The chains grow longer at the higher levels: two or three links at first, and four or five at the Master level.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep


## Intro card: The Matter and the Form (Exercise XVIII)

**138.** `index.html:1123` · Opening paragraph

> OLD: A demonstration is a syllogism that yields science — sure knowledge — by drawing its conclusion …
>
> NEW: A demonstration is a syllogism that yields science (sure knowledge) by drawing its conclusion …

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**139.** `index.html:1125` · “Form and matter”

> OLD: An argument both valid in form and true in matter is called sound; lacking either, unsound.
>
> NEW: An argument both valid in form and true in matter is called sound; an argument that lacks either is unsound.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**140.** `index.html:1126` · “What this exercise trains”

> OLD: Here you judge both at once — is the form valid, and are the premises in fact true by the classical definitions?
>
> NEW: Here we judge both at once: whether the form is valid, and whether the premises are in fact true by the classical definitions.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**141.** `index.html:1126` · “What this exercise trains”

> OLD: This is not yet full demonstration, for we do not ask whether the premises are first and causal; but it is its nearest gate.
>
> NEW: This is not yet full demonstration, for we do not ask whether the premises are first and causal; but it is the nearest step toward it.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**142.** `index.html:1127` · “Why it matters”

> OLD: The valid-but-unsound argument — flawless in form, false in a premise — is the commonest counterfeit of knowledge. To catch it is to glimpse what parts mere consistency from truth, and opinion from science.
>
> NEW: The valid but unsound argument, which is valid in form but false in a premise, is the most common imitation of knowledge. To recognize it is to begin to see what separates mere consistency from truth, and opinion from science.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep


## Intro card: The Enthymeme (Exercise XIX)

**143.** `index.html:1143` · Opening paragraph

> OLD: An enthymeme is a syllogism with a premise — or, at times, the conclusion — left unspoken: …
>
> NEW: An enthymeme is a syllogism with a premise (or, at times, the conclusion) left unspoken: …

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**144.** `index.html:1145` · “Why the premise is left unsaid”

> OLD: … and sometimes because it is weak, and would not survive being spoken aloud. The art of examining an enthymeme is to drag the hidden premise into the light and ask whether it is true.
>
> NEW: … and sometimes because it is weak, and would not be accepted if it were stated. The art of examining an enthymeme is to state the hidden premise and ask whether it is true.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**145.** `index.html:1146` · “How common it is”

> OLD: The enthymeme is the ordinary form of reasoning in real life — far more frequent than the full syllogism. Everyday speech runs on it (…); the law lives by it (…); politics and advertising trade on it; …
>
> NEW: The enthymeme is the ordinary form of reasoning in daily life, and it is far more frequent than the full syllogism. Everyday speech relies on it (…); so does the law (…); politics and advertising depend on it; …

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**146.** `index.html:1147` · “Your task”

> OLD: Supply the unspoken premise that would make the argument valid — or, where none can, say that none will serve.
>
> NEW: Supply the unspoken premise that would make the argument valid, or, where no premise can, say that none will serve.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep


## Intro card: Dialectic (Exercise XX)

**147.** `index.html:1164` · Opening paragraph

> OLD: Dialectic is the art of reasoning well about them anyway — not from what is demonstrated, but from what may reasonably be granted.
>
> NEW: Dialectic is the art of reasoning well about them nonetheless, not from what is demonstrated, but from what may reasonably be granted.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**148.** `index.html:1166` · “What is ‘probable’ here”

> OLD: Not a guess about the odds. A premise is probable when it seems so to everyone, or to most people, or to the wise — and among the wise, to all of them or to the best known. It is what you may fairly ask an opponent to grant.
>
> NEW: It is not a guess about the odds. A premise is probable when it seems so to everyone, or to most people, or to the wise, and among the wise, to all of them or to the best known. It is what we may fairly ask an opponent to grant.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**149.** `index.html:1167, 1170` · Examples under “probable” and “the topics”

> OLD: a promise ought generally to be kept — granted by all; … every bird has feathers, and a robin is a bird — from the wider kind; …
>
> NEW: a promise ought generally to be kept (granted by all); … every bird has feathers, and a robin is a bird (from the wider kind); …

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**150.** `index.html:1168` · “What dialectic reaches”

> OLD: A reasoned opinion, well supported and still open to challenge. … Knowing which of the two you are doing keeps you honest about how much you have shown.
>
> NEW: It reaches a reasoned opinion, well supported and still open to challenge. … Knowing which of the two we are doing keeps us honest about how much we have shown.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**151.** `index.html:1169` · “The topics”

> OLD: A topic (Latin locus, a place) is a standing relation you can draw an argument out of: … Name the topic and you can usually see at once what would answer the argument.
>
> NEW: A topic (Latin locus, a place) is a standing relation from which we can draw an argument: … Once the topic is named, we can usually see at once what would answer the argument.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**152.** `index.html:1171` · “Authority is a topic, and the weakest one”

> OLD: But it moves us by who says a thing rather than by what makes it so — hence the weakest, and hence not nothing.
>
> NEW: But it moves us by who says a thing rather than by what makes it so; hence it is the weakest topic, though it is still a real reason.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**153.** `index.html:1172` · “Answering an objection”

> OLD: Or grant the whole objection and state your claim again more narrowly — because sometimes the objection is right.
>
> NEW: Or grant the whole objection and state the claim again more narrowly, because sometimes the objection is right.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**154.** `index.html:1173` · “The topics are for FINDING”

> OLD: The topics are for FINDING, not for labelling. … Logic divides in two: the art of judging an argument you have been given, and the art of finding one you need.
>
> NEW: The topics are for FINDING, not for labeling. … Logic divides in two: the art of judging an argument we have been given, and the art of finding one we need.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**155.** `index.html:1173` · “The topics are for FINDING”

> OLD: Given something you must show, and something already granted, a topic tells you which place will turn the one into a reason for the other.
>
> NEW: Given something we must show, and something already granted, a topic shows which place will make the one a reason for the other.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**156.** `index.html:1174` · “Every topic carries a maxim”

> ⚑ **Possibly your wording.** “Note well: a fallacy is the same art turned about …” is yours (a9517de, in the style pack, Part 4C). Only the dash is touched there. The second sentence was there before your edit.
>
> OLD: Note well: a fallacy is the same art turned about — an argument that depends on a maxim which is false and merely looks true. Dialectic and the detection of fallacy are one doctrine learned from two ends.
>
> NEW: Note well: a fallacy is the same art turned about, that is, an argument that depends on a maxim which is false and merely looks true. So dialectic and the detection of fallacy are one doctrine, studied from opposite sides.

Decision: ☐ yes · ☐ change: ____________________ · ☐ keep

GROK BOT: for Timothy. NEW replaces the dash with “that is,” and changes “learned from two ends” to “studied from opposite sides”.

**157.** `index.html:1175` · “Two people, two parts”

> OLD: A disputation turns between the one who puts the case and the one who answers. Each question ahead puts you in one of those two chairs.
>
> NEW: A disputation takes place between the one who puts the case and the one who answers. In each of the questions that follow, you take one of those two parts.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep


## Intro card: The Fallacies (Exercise XXI)

**158.** `index.html:1193` · “Every fallacy has two causes”

> OLD: The cause of the appearance is what makes the argument look good — what moves you to accept it. … You are deceived by the two together: something appears, and is not.
>
> NEW: The cause of the appearance is what makes the argument look good, that is, what moves us to accept it. … We are deceived by the two together, since something appears to be so and is not.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**159.** `index.html:1194` · Example

> OLD: … it fails because a man and a feature he happens to wear are not the same thing.
>
> NEW: … it fails because a man and a feature he happens to have are not the same thing.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**160.** `index.html:1196` · “The six in the words”

> OLD: They fall out of a division rather than a list.
>
> NEW: They follow from a division rather than from a list.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**161.** `index.html:1196` · “The six in the words”

> OLD: Actual — one sound, unchanged, meaning several things: in a word, equivocation; in a phrase, amphiboly. Potential — meaning several things according to how it is said: … Apparent — a word that truly means one thing and seems to mean another: figure of speech.
>
> NEW: Actual ambiguity is one sound, unchanged, meaning several things: in a word, equivocation; in a phrase, amphiboly. Potential ambiguity is meaning several things according to how it is said: … Apparent ambiguity is a word that truly means one thing and seems to mean another: figure of speech.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**162.** `index.html:1196` · “The six in the words”

> OLD: Two, three, and one: six, and not by accident.
>
> NEW: Two, plus three, plus one makes six, and the number follows from the kinds of ambiguity.

Decision: ☐ yes · ☑ change: ____________________ · ☐ keep

GROK BOT: So there are six fallacies in the words (two, three, and one), and the number follows from the division.

**163.** `index.html:1197` · “The seven outside the words”

> OLD: the consequent (reading the arrow backwards) … These are the dangerous ones, because the language behaves perfectly and only the thinking is crooked.
>
> NEW: the consequent (reading a one-way connection backwards) … These are the dangerous ones, because the language is faultless and only the thinking is at fault.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**164.** `index.html:1198` · “The hidden rule”

> OLD: … depends on the same rule reversed — which is false. Both premises may be true and the argument still worthless, because the floor is not there.
>
> NEW: … depends on the same rule reversed, which is false. Both premises may be true and the argument still worthless, because the rule it depends on is false.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**165.** `index.html:1199` · “The same faults, under two sets of names”

> OLD: … in a certain respect taken flatly is hasty generalisation, or ignoring the qualification; …
>
> NEW: … in a certain respect taken flatly is hasty generalization, or ignoring the qualification; …

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**166.** `index.html:1199` · “The same faults, under two sets of names”

> OLD: And the consequent is what is now called affirming the consequent when it wears an “if,” and the undistributed middle when it does not — modern logic counts those one fault, as the schools did.
>
> NEW: And the consequent is what is now called affirming the consequent when it is stated with an “if,” and the undistributed middle when it is not; modern logic counts those one fault, as the schools did.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**167.** `index.html:1200` · “The other half of the same doctrine”

> OLD: In Dialectic you learn that every topic — every place an argument may be drawn from — carries a maxim, the rule the argument depends on.
>
> NEW: In Dialectic we learn that every topic (every place an argument may be drawn from) carries a maxim, the rule the argument depends on.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**168.** `index.html:1200` · “The other half of the same doctrine”

> OLD: A fallacy is that same machinery running backwards: an argument depending on a rule that is false and looks true. So the two exercises teach one thing from opposite ends, and the question below about the hidden rule is the hinge between them.
>
> NEW: A fallacy has the same structure, except that it depends on a rule that is false and looks true. So the two exercises teach one doctrine from opposite sides, and the question below about the hidden rule connects them.

Decision: ☐ yes · ☑ change: ____________________ · ☐ keep

GROK BOT: A fallacy is the same art turned about: an argument that depends on a rule that is false and looks true. So the two exercises teach one doctrine from opposite sides, and the question below about the hidden rule connects them.

**169.** `index.html:1201` · “Why we study them”

> OLD: Not to use them. St Thomas notes that reasoning badly to yourself always happens beside your intention — nobody sets out to deceive himself. … So use this on your own arguments first.
>
> NEW: We study them not in order to use them. St Thomas notes that when we reason badly by ourselves, it always happens beside our intention, since nobody sets out to deceive himself. … So we should apply this study to our own arguments first.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep


## Study: The Art of Grammar (panels)

**170.** `index.html:1487` · Panel 1, “The Art of Grammar”

> Note: The paragraph opens with your sentence (“Before logic we must study grammar.”). This phrase was there before your edit. Your own replacement for it in another course is CLAUDE.md, example 17, but it does narrow the wording slightly, so check it.
>
> OLD: … grammar, which is putting words together rightly; …
>
> NEW: … grammar, which is the art of speaking and writing correctly; …

Decision: ☐ yes · ☐ change: ____________________ · ☑ keep

**171.** `index.html:1490` · Panel 2, “The functions that words have”

> Note: Your Aug 12 edit (a8a29da) rewrote this panel but kept these sentences, which were there before.
>
> OLD: Start with a sentence: The old dog sleeps quietly by the fire. Every word in it is doing a different kind of work.
>
> NEW: Consider a sentence: The old dog sleeps quietly by the fire. Every word in it has a different function.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**172.** `index.html:1490` · Panel 2, “The functions that words have”

> Note: Kept from before your Aug 12 edit.
>
> OLD: By ties the sleeping to the fire.
>
> NEW: By subordinates the fire to the sleeping.

Decision: ☐ yes · ☑ change: ____________________ · ☐ keep

GROK BOT: By relates the sleeping to the fire.

**173.** `index.html:1491` · Panel 2, “The functions that words have”

> ⚑ **Possibly your wording.** Written in your Aug 12 edit (a8a29da). May be your wording.
>
> OLD: The functions of these different words are the parts of speech — the different kinds of work, divided up by what they do in the sentence.
>
> NEW: The functions of these different words are the parts of speech, that is, the different functions, divided up by what the words do in the sentence.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

GROK BOT: for Timothy. NEW replaces “kinds of work” with “functions”, which makes the sentence say the functions are the different functions.

**174.** `index.html:1494` · Panel 3, “The noun”

> Note: Kept from before your Aug 12 edit.
>
> OLD: Hold on to that distinction: logic uses it constantly, because a common noun can be said of many things and a proper noun of only one.
>
> NEW: Logic uses that distinction constantly, because a common noun can be said of many things and a proper noun of only one.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**175.** `index.html:1497` · Panel 4, “The verb”

> ⚑ **Possibly your wording.** Your wording (style pack, Part 3, example 10). Listed only because “seed” is on the list of figures.
>
> OLD: This distinction between nouns and verbs is the seed of the medieval account treated at the end of this introduction.
>
> NEW: This distinction between nouns and verbs is the basis of the medieval account treated at the end of this introduction.

Decision: ☐ yes · ☐ change: ____________________ · ☐ keep

GROK BOT: for Timothy. NEW replaces the figure “seed” with “basis”.

**176.** `index.html:1508` · Panel 7, “Some words depend on other words”

> ⚑ **Possibly your wording.** Your wording (style pack, Part 4J). Listed only because “Notice that” is on the list of setup phrases.
>
> OLD: Notice that an adjective cannot function without a noun to qualify.
>
> NEW: An adjective cannot function without a noun to qualify.

Decision: ☐ yes · ☐ change: ____________________ · ☐ keep

GROK BOT: for Timothy. NEW drops the setup “Notice that”.

**177.** `index.html:1539` · Panel 15, “Grammar, words, and logic”

> ⚑ **Possibly your wording.** In your Aug 12 panel. Only the spelling changes.
>
> OLD: First, the parts of speech are not an arbitrary list to memorise.
>
> NEW: First, the parts of speech are not an arbitrary list to memorize.

Decision: ☐ yes · ☐ change: ____________________ · ☐ keep

GROK BOT: for Timothy. Spelling only: memorise to memorize.

**178.** `index.html:1544` · Panel 16, “The three ways (trivium)”

> ⚑ **Possibly your wording.** Written in your Aug 12 edit (a8a29da). May be your wording.
>
> OLD: These three ways build on each other in that order. There is no arguing without sentences, and no persuading without arguments.
>
> NEW: These three ways build on each other in that order, because there is no arguing without sentences, and no persuading without arguments.

Decision: ☐ yes · ☐ change: ____________________ · ☐ keep

GROK BOT: for Timothy. NEW joins the two sentences with “because”, making the second the reason for the first.


## Study: The Art of Grammar (answer explanations)

**179.** `index.html:1656` · Panel 1 question, “Why must grammar come before logic?”

> OLD: … and the proposition is the centre of the whole course of study.
>
> NEW: … and the proposition is the center of the whole course of study.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**180.** `index.html:1669` · Panel 1 question, “Why not the others”

> ⚑ **Possibly your wording.** Written in your Aug 12 edit (a8a29da). May be your wording.
>
> OLD: Words, letters and paragraphs are the concern of grammar and of style; logic fastens on what is asserted.
>
> NEW: Words, letters and paragraphs are the concern of grammar and of style; logic is concerned with what is asserted.

Decision: ☐ yes · ☐ change: ____________________ · ☐ keep

GROK BOT: for Timothy. NEW replaces “logic fastens on” with “logic is concerned with”.

**181.** `index.html:1679` · Panel 2 question, which word says how

> OLD: Quietly answers “how?” about the sleeping. That is a different kind of work from naming.
>
> NEW: Quietly answers “how?” about the sleeping. That is a different function from naming.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**182.** `index.html:1687` · Panel 2 question, the parts of speech as a list

> ⚑ **Possibly your wording.** Written in your Aug 12 edit (a8a29da). May be your wording.
>
> OLD: It divides up the work, not the vocabulary.
>
> NEW: It divides the functions of words, not the vocabulary.

Decision: ☐ yes · ☐ change: ____________________ · ☐ keep

GROK BOT: for Timothy. NEW replaces “divides up the work” with “divides the functions of words”.

**183.** `index.html:1691` · Panel 2 question, what by does

> ⚑ **Possibly your wording.** Written in your Aug 12 edit (a8a29da). May be your wording.
>
> OLD: That is the work of a preposition.
>
> NEW: That is the function of a preposition.

Decision: ☐ yes · ☐ change: ____________________ · ☐ keep

GROK BOT: for Timothy. NEW replaces “work” with “function”.

**184.** `index.html:1729` · Panel 4 question, “he builds / he built”

> OLD: The doing is the same doing; only its place in time has moved. Carrying time is the verb’s own work.
>
> NEW: The doing is the same doing; only its place in time has moved. Carrying time is the verb’s own function.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**185.** `index.html:1733` · Panel 4 question, noun and verb

> ⚑ **Possibly your wording.** Written in your Aug 12 edit (a8a29da). It is a half-way version of the figure that you replaced in the panel itself; the NEW is your own panel wording.
>
> OLD: The noun holds its thing still as an entity under consideration; the verb has it happening.
>
> NEW: A noun refers to a thing, a stable entity under consideration; a verb is a doing, or a being done, or a becoming, or a being in a certain way.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

GROK BOT: for Timothy. NEW replaces the noun/verb figure with the fuller wording of your own grammar panel.

**186.** `index.html:1745` · Panel 5 question, “Why not the others”

> OLD: … sleeps quietly and by the fire are pieces waiting for something to attach to.
>
> NEW: … sleeps quietly and by the fire are incomplete parts that need something to attach to.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**187.** `index.html:1768` · Panel 6 question, “Why not the others”

> OLD: … the standard sits inside the predicate.
>
> NEW: … the standard is part of the predicate.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**188.** `index.html:1784` · Panel 6 question, “Why not the others”

> ⚑ **Possibly your wording.** Written in your Aug 12 edit (a8a29da). May be your wording.
>
> OLD: What is laid underneath is the subject; pointing is the article’s work; standing in for a noun is the pronoun’s.
>
> NEW: What is laid underneath is the subject; pointing is the article’s function; standing in for a noun is the pronoun’s.

Decision: ☐ yes · ☐ change: ____________________ · ☐ keep

GROK BOT: for Timothy. NEW replaces “the article’s work” with “the article’s function”.

**189.** `index.html:1818` · Panel 8 question, “Why not the others”

> OLD: Joining is the conjunction’s work, telling how is the adverb’s, and pointing is the article’s.
>
> NEW: Joining is the conjunction’s function, telling how is the adverb’s, and pointing is the article’s.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**190.** `index.html:1826` · Panel 8 question, “Why not the others”

> OLD: Replacing is the pronoun’s work, joining equals is the conjunction’s, and showing which one is meant is the article’s.
>
> NEW: Replacing is the pronoun’s function, joining equals is the conjunction’s, and showing which one is meant is the article’s.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**191.** `index.html:2002` · Panel 16 question, “Why not the others”

> ⚑ **Possibly your wording.** Written in your Aug 12 edit (a8a29da). Only the spelling changes.
>
> OLD: Forming sentences is grammar, drawing conclusions is logic, and memorising is no art of the trivium at all.
>
> NEW: Forming sentences is grammar, drawing conclusions is logic, and memorizing is no art of the trivium at all.

Decision: ☐ yes · ☐ change: ____________________ · ☐ keep

GROK BOT: for Timothy. Spelling only: memorising to memorizing.

**192.** `index.html:2281` · Shown above a second question on a panel (grammar and orientation)

> OLD: Another question on the same point — the second of five.
>
> NEW: Another question on the same point: the second of five.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep


## Study: What Is Logic · An Orientation (panels)

**193.** `index.html:1549` · Panel 1

> OLD: Before the exercises, a brief orientation — what logic is, its parts, and the three acts of the mind it perfects.
>
> NEW: Before the exercises, this orientation briefly sets out what logic is, its parts, and the three acts of the mind it perfects.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**194.** `index.html:1550` · Panel 1

> OLD: A word on where this comes from. Logic was first set out as a whole by Aristotle in the fourth century BC, whose logical works — the Organon — mapped terms, propositions, syllogisms, demonstration, dialectic, and fallacy; …
>
> NEW: Logic was first set out as a whole by Aristotle in the fourth century BC, whose logical works (the Organon) set out terms, propositions, syllogisms, demonstration, dialectic, and fallacy; …

Decision: ☐ yes · ☑ change: ____________________ · ☐ keep

GROK BOT: Logic was first set out as a whole by Aristotle in the fourth century BC, whose logical works (the Organon) treated terms, propositions, syllogisms, demonstration, dialectic, and fallacy; …

**195.** `index.html:1550` · Panel 1

> OLD: This Aristotelian logic served as the common logic of the Western world for some two thousand years — from about 300 BC to AD 1900 — underlying the rise of nearly every discipline; and it was brought to its highest refinement, and enlarged, by the medieval schoolmen — Albert the Great, Aquinas, Buridan, and later John of St Thomas.
>
> NEW: This Aristotelian logic served as the common logic of the Western world for some two thousand years (from about 300 BC to AD 1900), underlying the rise of nearly every discipline; and it was brought to its highest refinement, and enlarged, by the medieval schoolmen: Albert the Great, Aquinas, Buridan, and later John of St Thomas.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**196.** `index.html:1550` · Panel 1

> OLD: … modern symbolic (mathematical) logic, descended from Frege — an instrument of great power, though its dream of grounding all reasoning in itself foundered (as Gödel showed).
>
> NEW: … modern symbolic (mathematical) logic, descended from Frege, which is an instrument of great power, though its aim of grounding all reasoning in itself failed (as Gödel showed).

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**197.** `index.html:1551` · Panel 2, “What logic is”

> OLD: Reason itself is carried out with skill, according to its governing art — and that art is logic.
>
> NEW: Reason itself is carried out with skill, according to its governing art, and that art is logic.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**198.** `index.html:1555` · Panel 3, “An art, and also a science”

> ⚑ **Possibly your wording.** Written in 23fc802 (Oct 4, “Predicables revisions”). May be yours.
>
> OLD: It studies the relations things have only because they are known — genus, species, subject, predicate, statement, and conclusion.
>
> NEW: It studies the relations things have only because they are known: genus, species, subject, predicate, statement, and conclusion.

Decision: ☐ yes · ☐ change: ____________________ · ☐ keep

GROK BOT: for Timothy. NEW replaces the dash before the list with a colon.

**199.** `index.html:1560` · Panel 4, “The structure of reasoning”

> OLD: First, we grasp what a thing is, forming a concept from experience — this is called simple apprehension. Second, we join two concepts into a statement, affirming or denying one of the other — this is judgment. Third, from statements we already hold, we draw out a new one we had not yet seen — this is reasoning.
>
> NEW: First, we grasp what a thing is, forming a concept from experience; this is called simple apprehension. Second, we join two concepts into a statement, affirming or denying one of the other; this is judgment. Third, from statements we already hold, we draw out a new one we had not yet seen; this is reasoning.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**200.** `index.html:1565` · Panel 5, “The second act”

> OLD: Having concepts, the mind puts them together or holds them apart — the tradition’s phrase is that it composes and divides.
>
> NEW: Having concepts, the mind puts them together or holds them apart; the tradition’s phrase is that it composes and divides.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**201.** `index.html:1574` · Panel 7, “Demonstration”

> OLD: Highest is demonstration: reasoning that yields science (Latin scientia) — certain knowledge, knowledge that cannot be otherwise. … we may reason from an effect or a sign back toward its cause — coming to know for certain that something is the case, even before we have grasped the very cause that explains it.
>
> NEW: Highest is demonstration: reasoning that yields science (Latin scientia), that is, certain knowledge, knowledge that cannot be otherwise. … we may reason from an effect or a sign back toward its cause, and so come to know for certain that something is the case, even before we have grasped the very cause that explains it.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**202.** `index.html:1584` · Panel 9, “Form and matter”

> OLD: Within demonstration lie formal logic — how the terms are arranged — and material logic — whether the premises are in fact true, and how proof works in each subject.
>
> NEW: Within demonstration lie formal logic (how the terms are arranged) and material logic (whether the premises are in fact true, and how proof proceeds in each subject).

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**203.** `index.html:1589` · Panel 10, “Dialectic”

> OLD: Then we reason about what is only probable — true for the most part — weighing the arguments on each side and the opinions of those who know.
>
> NEW: Then we reason about what is only probable (true for the most part), weighing the arguments on each side and the opinions of those who know.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**204.** `index.html:1594` · Panel 11, “Rhetoric”

> OLD: To incline toward the better view we persuade — by fitting examples, the character of the speaker, the circumstances, even the hearer’s feelings.
>
> NEW: To incline toward the better view we persuade, by fitting examples, the character of the speaker, the circumstances, and even the hearer’s feelings.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**205.** `index.html:1612` · Panel 15, heading and opening

> OLD: History has a home in every discipline. A word before we go on, for the history of logic is woven through the exercises.
>
> NEW: Every discipline includes its own history. The history of logic appears throughout the exercises, so a word about history is needed before we go on.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**206.** `index.html:1617` · Panel 16, “How the course is ordered”

> ⚑ **Possibly your wording.** Written in a9517de (Aug 9); the style pack (Part 4F) lists it as probably yours.
>
> OLD: The First, Second, and Third Acts of the Mind are the three operations just treated — apprehension, judgment, reasoning.
>
> NEW: The First, Second, and Third Acts of the Mind are the three operations just treated: apprehension, judgment, and reasoning.

Decision: ☐ yes · ☐ change: ____________________ · ☐ keep

GROK BOT: for Timothy. NEW replaces the dash with a colon and adds “and” before “reasoning”.

**207.** `index.html:1617` · Panel 16, “How the course is ordered”

> OLD: Rhetorica takes up the enthymeme, the argument with a premise left unsaid — reason at work in persuasion.
>
> NEW: Rhetorica takes up the enthymeme, the argument with a premise left unsaid, which is reason at work in persuasion.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**208.** `index.html:1618` · Panel 17, “Seeing with circles”

> Note: The paragraph was revised in a9517de (probably yours); this sentence was there before.
>
> OLD: Two marks do all the work: to shade a region is to say it is empty — nothing falls there; an × says there is at least one thing there.
>
> NEW: Only two marks are used. To shade a region is to say it is empty, that nothing falls there; an × says there is at least one thing there.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**209.** `index.html:1630` · Panel 18, “The four propositions in a picture”

> OLD: Notice the pattern: the universals (A, E) shade a region empty, while the particulars (I, O) plant an × to say something is there.
>
> NEW: The universals (A, E) shade a region empty, while the particulars (I, O) place an × to say that something is there.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**210.** `index.html:1635` · Panel 19, “Two ways to shade”

> OLD: The older logic of Aristotle treats every general term as non-empty — there really are men, dogs, triangles — so a universal already carries existence with it — the term of art is existential import — and “All S are P” yields “Some S are P.”
>
> NEW: The older logic of Aristotle treats every general term as non-empty (there really are men, dogs, triangles), so a universal already carries existence with it (the term of art is existential import), and “All S are P” yields “Some S are P.”

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**211.** `index.html:1640` · Panel 20, “Only an instrument”

> Note: The panel was revised in a9517de (probably yours); this sentence was there before.
>
> OLD: The diagram is a servant, never a master.
>
> NEW: The diagram only assists the reasoning; it never replaces it.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep


## Study: What Is Logic · An Orientation (answer explanations)

**212.** `index.html:1559` · Panel 3 question

> OLD: Those relations turn up in every inquiry, so the art is not tied to one subject-matter.
>
> NEW: Those relations are found in every inquiry, so the art is not limited to one subject-matter.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**213.** `index.html:1578` · Panel 7 question

> OLD: It does not yet lay bare the proper cause; that is the work of demonstration of the cause, which follows.
>
> NEW: It does not yet show the proper cause; that belongs to demonstration of the cause, which follows.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**214.** `index.html:1602` · Panel 12 question (poetics)

> OLD: So we tell a child a tale to teach him to honour his parents.
>
> NEW: So we tell a child a tale to teach him to honor his parents.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**215.** `index.html:1606` · Panel 13 question (fallacies)

> OLD: We study them to recognize and avoid them, and to see through those (the old sophists) who use them to confuse and manipulate.
>
> NEW: We study them to recognize and avoid them, and to recognize them in those (the old sophists) who use them to confuse and manipulate.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**216.** `index.html:1611` · Panel 14 question (order of the parts)

> OLD: From the barest possibility (poetics), through persuasion (rhetoric) and the probable (dialectic), to proof through the cause (demonstration).
>
> NEW: The order runs from the barest possibility (poetics), through persuasion (rhetoric) and the probable (dialectic), to proof through the cause (demonstration).

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**217.** `index.html:2030` · Panel 3, “Why not the others”

> OLD: … those are parts of it or neighbours to it.
>
> NEW: … those are parts of it or neighbors to it.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**218.** `index.html:2084` · Panel 9, “Why not the others”

> OLD: And a conclusion’s truth never runs backwards to guarantee its premises.
>
> NEW: And the truth of a conclusion never guarantees the truth of its premises.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**219.** `index.html:2101` · Panel 10 question, “Why not the others”

> OLD: Certainty is demonstration’s work, persuasion is rhetoric’s, and a fitting story belongs to poetics.
>
> NEW: Certainty belongs to demonstration, persuasion to rhetoric, and a fitting story to poetics.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**220.** `index.html:2120` · Panel 13, “Why not the others”

> OLD: We study them to recognise and avoid them, and to see through those who use them on purpose.
>
> NEW: We study them to recognize and avoid them, and to recognize them in those who use them on purpose.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**221.** `index.html:2123` · Panel 13 question, the Sophistical Refutations

> OLD: … since good reasoning must be known before the counterfeit can be recognised.
>
> NEW: … since good reasoning must be known before its counterfeit can be recognized.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**222.** `index.html:2127` · Panel 13 question, “Everyone does it”

> OLD: The fault is in the shape of the argument, not in any single premise.
>
> NEW: The fault is in the form of the argument, not in any single premise.

Decision: ☐ yes · ☐ change: ____________________ · ☑ keep

**223.** `index.html:2142` · Panel 15 question, “Why not the others”

> OLD: … and the question is not left homeless.
>
> NEW: … and the history of the oceans does belong to a particular study.

Decision: ☐ yes · ☐ change: ____________________ · ☑ keep

**224.** `index.html:2163` · Panel 18 question, the pattern of the four forms

> OLD: A and E shade a region empty; I and O place an × to say that something is there. These two marks do all the work.
>
> NEW: A and E shade a region empty; I and O place an × to say that something is there. These two marks are all the diagrams use.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep


## Exercises: feedback written in the course page (index.html)

**225.** `index.html:2855` · Exercise VI, caption when the operation has no result

> OLD: The original proposition, of which nothing survives the operation.
>
> NEW: The original proposition; the operation yields no proposition from it.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**226.** `index.html:2943` · Exercise XVIII, after a sound argument

> OLD: True premises in a valid form: the conclusion is thereby proved.
>
> NEW: The premises are true and the form is valid, so the conclusion is proved.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**227.** `index.html:2945` · Exercise XVIII, after an invalid argument with true premises

> OLD: Even true premises cannot rescue a broken form.
>
> NEW: Even true premises cannot make an invalid form valid.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**228.** `index.html:3009` · Validity exercises, caption under the diagram

> OLD: Diagramming the premises already contains the conclusion: …
>
> NEW: The diagram of the premises already contains the conclusion: …

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**229.** `index.html:3143` · Exercise XV, modal argument with too strong a conclusion

> Note: “Sound” here means valid (the course’s own usage elsewhere), so the NEW says “valid”.
>
> OLD: Invalid, though the form itself is sound (Barbara), but the conclusion claims the necessary mode where the premises warrant only the assertoric: peiorem sequitur semper conclusio partem.
>
> NEW: Invalid. The form itself is valid (Barbara), but the conclusion claims the necessary mode where the premises warrant only the assertoric: peiorem sequitur semper conclusio partem.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**230.** `index.html:3148` · Exercise XV, modal argument wrongly judged invalid

> Note: “Sound” here means valid, as above.
>
> OLD: Modal language makes sound arguments feel doubtful. Reduced to its form and tested, with the rule of the weaker part applied, this argument proves to be in order.
>
> NEW: Modal language makes valid arguments seem doubtful. When it is reduced to its form and tested, with the rule of the weaker part applied, this argument proves to be in order.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**231.** `index.html:3174` · Exercise XIX, correct “none”

> OLD: That is right: no premise can complete this argument validly, since the conclusion outruns any possible help from the remaining term.
>
> NEW: That is right: no premise can complete this argument validly, since the conclusion claims more than any premise built from the remaining term could support.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**232.** `index.html:3175` · Exercise XIX, wrong answer where “none” was right

> OLD: In fact nothing can complete it: no arrangement of the middle with the orphaned term yields a valid mood for that conclusion.
>
> NEW: In fact nothing can complete it: no arrangement of the middle term with the term of the conclusion that is not in the given premise yields a valid mood for that conclusion.

Decision: ☐ yes · ☑ change: ____________________ · ☐ keep

GROK BOT: In fact nothing can complete it: no arrangement of the middle term with the conclusion’s term that is missing from the given premise yields a valid mood for that conclusion.

**233.** `index.html:3178` · Exercise XIX, the tacit premise

> OLD: The tacit premise: All men are mortal, completing Barbara (AAA-1). A first-order enthymeme: the major lay hidden.
>
> NEW: The tacit premise is All men are mortal, which completes Barbara (AAA-1). This is a first-order enthymeme, in which the major lay hidden.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**234.** `index.html:3219` · Exercise XIV, what follows

> OLD: What follows: Socrates is not a sailor: ponendo tollens. …
>
> NEW: What follows is Socrates is not a sailor; the mood is ponendo tollens. …

Decision: ☐ yes · ☑ change: ____________________ · ☐ keep

GROK BOT: What follows is “Socrates is not a sailor”, by the mood ponendo tollens. …

**235.** `index.html:3277` · Exercise XVI, invalid form

> OLD: No mode can rescue a broken form, so nothing follows.
>
> NEW: No mode can make an invalid form valid, so nothing follows.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**236.** `index.html:3280` · Exercise XVI, valid form

> OLD: The form is valid — Barbara (AAA-1).
>
> NEW: The form is valid: Barbara (AAA-1).

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**237.** `index.html:3314` · Exercise XVII, invalid chain

> OLD: … and one broken link breaks the whole chain.
>
> NEW: … and one invalid link makes the whole chain invalid.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**238.** `index.html:3369` · Exercise XI, correct conclusion

> OLD: “Some B are C” follows — Darii. Accepted answers: …
>
> NEW: “Some B are C” follows, in Darii. Accepted answers: …

Decision: ☐ yes · ☑ change: ____________________ · ☐ keep

GROK BOT: “Some B are C” follows; the mood is Darii. Accepted answers: …

**239.** `index.html:4029` · End of a set, no errors

> OLD: Not one error. Nothing to review.
>
> NEW: There were no errors, so there is nothing to review.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**240.** `index.html:4057` · End of a set in letters

> OLD: Well done. Now attempt the same exercise in English terms — the harder dress, where the matter tempts the judgment.
>
> NEW: Well done. Now attempt the same exercise in English terms, which is harder, because the matter of the terms can sway the judgment.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep


## Exercise I, The Predicables (answer explanations)

**241.** `ars-engine.js:2579` · Explanation for “This iron is rusty”

> OLD: Rust comes on the iron in time; iron is iron, bright or rusty.
>
> NEW: Rust forms on iron over time, but the iron is still iron, whether it is bright or rusty.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**242.** `ars-engine.js:2641` · Explanation for “In ‘Man is a species,’ what does man stand for?”

> ⚑ **Possibly your wording.** Written in 23fc802 (Oct 4, “Predicables revisions”, “add supposition note”). May be yours. The same phrase is in the predicables intro card (index.html:904, listed above).
>
> OLD: Supposition is a property of terms in logic, and this art is its home.
>
> NEW: Supposition is a property of terms, and it is studied in logic.

Decision: ☐ yes · ☐ change: ____________________ · ☐ keep

GROK BOT: for Timothy. NEW replaces “in logic, and this art is its home” with “and it is studied in logic”.


## Exercise III, Division (answer explanations)

**243.** `ars-engine.js:2227` · Explanation for a sound division (computed questions)

> OLD: The members together cover the whole and do not overlap: the division holds.
>
> NEW: The members together cover the whole and do not overlap, so the division is sound.

Decision: ☐ yes · ☑ change: ____________________ · ☐ keep

GROK BOT: The members together cover the whole and do not overlap, so the division is correct.


## Exercise IV, Definition (answer explanations)

**244.** `ars-engine.js:2061` · Explanation for “‘Manuscript’ means a thing written by hand”

> OLD: It tells the word’s own story, not the nature of any writing.
>
> NEW: It gives the origin of the word, not the nature of any writing.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**245.** `ars-engine.js:2087` · Explanation for “Wine is the drink that gladdens the heart”

> OLD: It names a characteristic effect, dear to the Psalmist, but not what wine is.
>
> NEW: It names a characteristic effect, one the Psalmist mentions, but it does not say what wine is.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep


## Exercise V and VIII, Diagramming (feedback on a wrong diagram)

**246.** `ars-engine.js:653` · Exercise V, right region, wrong mark (shading wanted)

> OLD: Students often feel that a universal must “put something” into the diagram, but a universal only takes away; it asserts no existence.
>
> NEW: Students often think that a universal must add a mark of existence to the diagram, but a universal only declares a region empty; it asserts no existence.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**247.** `ars-engine.js:654` · Exercise V, right region, wrong mark (× wanted)

> OLD: The urge to shade comes from treating every proposition as a claim about a whole region.
>
> NEW: Shading here usually comes from treating every proposition as a claim about a whole region.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**248.** `ars-engine.js:665` · Exercise V, O proposition marked in the overlap

> OLD: Students often mark the overlap because both terms are mentioned, but the proposition asserts distance from P, not fellowship with it.
>
> NEW: Students often mark the overlap because both terms are mentioned, but the proposition places some S outside P, not inside it.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**249.** `ars-engine.js:710` · Exercise VIII, import × missing

> OLD: The traditional account grants existential import: place the × in the sole unshaded region of “dogs”.
>
> NEW: The traditional account grants existential import, so the × goes in the only unshaded region of “dogs”.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**250.** `ars-engine.js:719` · Exercise V (two premises) and VIII, general note

> OLD: The universals come first: shading what they empty leaves each × only one possible cell.
>
> NEW: We diagram the universal premises first, because once we shade what they declare empty, each × has only one possible cell.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep


## Exercise VI, Immediate Inference (feedback)

**251.** `ars-engine.js:1209` · O proposition given a converse

> OLD: … yet the habit of converting E and I carries many students along.
>
> NEW: … yet many students convert it out of the habit of converting E and I.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**252.** `ars-engine.js:1232` · Contrary given for the contradictory

> OLD: Contraries can both be false; contradictories never agree.
>
> NEW: Contraries can both be false; contradictories never have the same truth-value.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**253.** `ars-engine.js:1254` · Square of opposition, general note

> OLD: Contradictories always disagree; that much is fixed. For the other relations, …
>
> NEW: Contradictories always have opposite truth-values. For the other relations, …

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep


## Exercise VII, The Modal Propositions (feedback and explanations)

**254.** `ars-engine.js:1694` · Modal square, truth taken to ascend

> OLD: … Only falsity climbs from the weaker mode to the stronger.
>
> NEW: … Only falsity passes from the weaker mode to the stronger.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**255.** `ars-engine.js:1708` · Composite and divided senses, “The young man can be old”

> OLD: Being young and old together is excluded; but age will come to him.
>
> NEW: Being young and old together is excluded; but he can become old.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**256.** `ars-engine.js:1718` · Composite and divided senses, “The one who is seated is necessarily seated”

> OLD: The famous sophism trades on this.
>
> NEW: The famous sophism depends on this ambiguity.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**257.** `ars-engine.js:1722` · Composite and divided senses, “A man can be a stone”

> OLD: It is true in neither sense: the essence of man excludes it, so no power reaches it and the compound is impossible.
>
> NEW: It is true in neither sense: the essence of man excludes it, so man has no power to become a stone, and the compound is impossible.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**258.** `ars-engine.js:1726` · Composite and divided senses, “A bachelor can be married”

> OLD: In the divided sense it is true, since the man who is a bachelor has it in him to marry.
>
> NEW: In the divided sense it is true, since the man who is a bachelor has the power to marry.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**259.** `ars-engine.js:1734` · Composite and divided senses, “Fire can be cold”

> OLD: On the classical account heat belongs to fire’s nature, so the compound is impossible, and no power in fire reaches coldness.
>
> NEW: On the classical account heat belongs to fire’s nature, so the compound is impossible, and fire has no power to become cold.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep


## Validity exercises (IX, X, XV, XVI, XVIII): note after a wrong answer

**260.** `ars-engine.js:1051` · Called valid; two negative premises

> OLD: Two negatives feel as though they position the terms against one another; in truth two denials sever every link and establish nothing at all.
>
> NEW: Two negative premises seem to relate the terms to one another; in fact two denials leave the extremes unconnected and establish nothing at all.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**261.** `ars-engine.js:1052` · Called valid; undistributed middle

> OLD: This is the classic trap. Both extremes are related to the middle term, so they seem related to each other; but unless the middle is taken in its whole extension at least once, each premise may speak of a different part of it, and the extremes never meet.
>
> NEW: This is a classic error. Both extremes are related to the middle term, so they seem related to each other; but unless the middle is taken in its whole extension at least once, each premise may speak of a different part of it, and so the extremes are never connected.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**262.** `ars-engine.js:1053` · Called valid; illicit major

> OLD: The sweeping sound of the premise hides the gap, so what the premise actually distributes needs checking.
>
> NEW: Because the premise sounds general, the gap is easy to miss, so we need to check what the premise actually distributes.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**263.** `ars-engine.js:1054` · Called valid; illicit minor

> OLD: This slips by easily when the premise sounds universal.
>
> NEW: The error is easy to miss when the premise sounds universal.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**264.** `ars-engine.js:1055` · Called valid; negative premise, affirmative conclusion

> OLD: A denial in the premises can never yield a joining in the conclusion. Students often let the affirmative-sounding terms carry them past the negative sign.
>
> NEW: A negative premise can never yield an affirmative conclusion. Students often overlook the negative because the terms sound affirmative.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**265.** `ars-engine.js:1056` · Called valid; negative conclusion from affirmative premises

> OLD: Two affirmations can only join terms. The separation asserted in the conclusion must come from somewhere, and no premise supplies it.
>
> NEW: Two affirmative premises can only join terms. The conclusion separates its terms, and no premise supplies that separation.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**266.** `ars-engine.js:1057` · Called valid; two particular premises

> OLD: Each “some” may pick out a different portion of the middle term, so the premises need never meet.
>
> NEW: Each “some” may pick out a different part of the middle term, so the two premises may not speak of the same things at all.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**267.** `ars-engine.js:1062` · Called invalid; weakened mood

> OLD: This is a very common hesitation. On the modern reading this fails, …
>
> NEW: Many students hesitate here. On the modern reading this fails, …

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**268.** `ars-engine.js:1064` · Called invalid; fourth figure

> OLD: Fourth-figure syllogisms run against the natural flow of predication, so even valid ones feel wrong. But if the premises are read slowly and the syllogism is tested against the rules, it breaks none of them.
>
> NEW: Fourth-figure syllogisms reverse the natural order of predication, so even valid ones seem wrong. But if we read the premises slowly and test the syllogism against the rules, we find that it breaks none of them.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**269.** `ars-engine.js:1066` · Called invalid; English terms

> OLD: The likeliest cause of the error is that the premises are implausible, and falsity feels like fallacy.
>
> NEW: The likeliest cause of the error is that the premises are implausible, and a false premise is easily mistaken for a fallacy.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep


## Exercise XI, Drawing the Conclusion (feedback)

**270.** `ars-engine.js:1071` · Answered “none” where something follows

> OLD: Diagramming the premises and reading off what the shading forces will show it.
>
> NEW: If we diagram the premises and read off what the shading requires, the conclusion appears.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**271.** `ars-engine.js:1073` · Gave a conclusion where none follows

> OLD: But here the middle never does its work, and no valid mood fits these premises in any arrangement.
>
> NEW: But here the middle term never connects the extremes, and no valid mood fits these premises in any arrangement.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**272.** `ars-engine.js:1077` · Middle term put in the conclusion

> OLD: The middle term never appears in the conclusion, since its whole office is to join the extremes and then withdraw.
>
> NEW: The middle term never appears in the conclusion, since its whole office is to join the extremes in the premises.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**273.** `ars-engine.js:1086` · General note

> OLD: The diagram settles it: once the universal premises are shaded and the particulars marked, we assert only what the premises force.
>
> NEW: The diagram decides the question. Once the universal premises are shaded and the particulars marked, we assert only what the premises require.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep


## Exercises XII to XIV, Conjunctive, Disjunctive, Hypothetical (explanations and feedback)

**274.** `ars-engine.js:1299` · Explanation of tollendo tollens

> OLD: To destroy the consequent is to destroy the antecedent, because no room remains for it.
>
> NEW: To destroy the consequent is to destroy the antecedent, because the antecedent cannot hold without the consequent.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**275.** `ars-engine.js:1303` · Explanation of denying the antecedent

> OLD: The consequent was never made to depend on the antecedent alone; removing the antecedent leaves it free.
>
> NEW: The consequent was never made to depend on the antecedent alone, so removing the antecedent does not remove the consequent.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**276.** `ars-engine.js:1307` · Explanation of tollendo ponens in the conjunctive (fallacy)

> OLD: A conjunctive promises neither member; both may be absent together, so denying one posits nothing.
>
> NEW: A conjunctive asserts neither member; both may be absent together, so denying one posits nothing.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**277.** `ars-engine.js:1313` · Explanation of tollendo ponens in the disjunctive

> OLD: The disjunction pledges at least one member, so if one is removed the other cannot be refused.
>
> NEW: The disjunction asserts that at least one member holds, so if one is removed, the other must be granted.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**278.** `ars-engine.js:1464` · Called valid; denying the antecedent

> OLD: Removing the antecedent leaves the consequent standing free; this is the classic mirror-image of modus tollens.
>
> NEW: Removing the antecedent does not remove the consequent; this error is the reverse of modus tollens.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**279.** `ars-engine.js:1466` · Called valid; conjunctive taken as disjunctive

> OLD: It is tempting to hear the conjunctive as a disjunctive, as though one of the two must hold. But “not both” promises neither, and both members may fail together.
>
> NEW: It is tempting to read the conjunctive as a disjunctive, as though one of the two must hold. But “not both” asserts neither, and both members may fail together.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**280.** `ars-engine.js:1468` · Called invalid; ponendo ponens

> OLD: The bond of the conditional is exactly this: if the antecedent is granted, the consequent cannot be refused.
>
> NEW: The conditional asserts exactly this, that if the antecedent is granted, the consequent must be granted.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**281.** `ars-engine.js:1469` · Called invalid; tollendo tollens

> OLD: Tollendo tollens runs backwards and so feels suspect; but once the consequent is denied, every region where the antecedent could lie is closed.
>
> NEW: Tollendo tollens reasons from the consequent back to the antecedent, and so it seems suspect; but once the consequent is denied, every region where the antecedent could lie is shaded.

Decision: ☐ yes · ☑ change: ____________________ · ☐ keep

GROK BOT: Tollendo tollens reasons from the consequent back to the antecedent, and so it seems suspect; but once the consequent is denied, no case remains in which the antecedent could hold.

**282.** `ars-engine.js:1470` · Called invalid; tollendo ponens

> OLD: The disjunction pledges at least one member, so if one is denied the other cannot be refused. Tollendo ponens is the disjunctive’s native mood.
>
> NEW: The disjunction asserts that at least one member holds, so if one is denied, the other must be granted. Tollendo ponens is the proper mood of the disjunctive.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**283.** `ars-engine.js:1472` · Called invalid; ponendo tollens in the conjunctive

> OLD: The conjunctive forbids its members to stand together: where one member stands, the other must fall.
>
> NEW: The conjunctive denies that its members hold together, so if one member holds, the other does not.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep


## Exercise XVIII, The Matter and the Form (feedback)

**284.** `ars-engine.js:1039` · Called valid; invalid form with true premises

> OLD: Every premise here is true, and true matter makes a form feel trustworthy; but no truth of matter can repair a broken form.
>
> NEW: Every premise here is true, and true premises make a form seem trustworthy; but no truth in the matter can make an invalid form valid.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**285.** `ars-engine.js:1041` · Called sound; a premise is false

> OLD: The deduction is flawless, but an argument is only as strong as its matter, and a false premise hides easily inside a valid form. Students often stop once the form checks out, but each premise should also be tried against the definitions.
>
> NEW: The deduction is valid, but an argument is only as strong as its matter, and a false premise is easy to miss in a valid form. Students often stop once they see that the form is valid, but each premise should also be tested against the definitions.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep


## Exercise XIX, The Enthymeme (explanations and feedback)

**286.** `ars-engine.js:3018` · Gave a premise where none can complete it

> OLD: The strength of a conclusion can outrun any possible help, because a particular or negative premise sets limits that no addition overcomes.
>
> NEW: A conclusion can claim more than any added premise could support, because a particular or negative premise sets limits that no added premise can overcome.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**287.** `ars-engine.js:3026` · Premise with the wrong terms

> OLD: The tacit premise must join the middle term (“…”) with the conclusion’s orphaned term (“…”), since nothing else can bridge the gap.
>
> NEW: The tacit premise must join the middle term (“…”) with the term of the conclusion that is not in the given premise (“…”), since nothing else can connect them.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**288.** `ars-engine.js:3048` · “He cannot be trusted — he is a politician.”

> OLD: So the enthymeme conceals its premises, and tacit premises escape inspection.
>
> NEW: So the enthymeme conceals its premises, and premises that are not stated are not examined.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**289.** `ars-engine.js:3064` · “The law is good, for it protects the poor.”

> OLD: The needed premise runs from the mark to the goodness.
>
> NEW: The needed premise takes the mark (protecting the poor) as its subject and goodness as its predicate.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**290.** `ars-engine.js:3084` · “The gods must be angry — the harvest has failed.”

> OLD: The familiar thought, that angry gods blight the fields, runs the wrong way and merely affirms the consequent.
>
> NEW: The familiar thought, that angry gods blight the fields, has its terms the wrong way round and merely affirms the consequent.

Decision: ☐ yes · ☑ change: ____________________ · ☐ keep

GROK BOT: The familiar thought, that angry gods blight the fields, has the anger as antecedent and the failed harvest as consequent; to reason from the failed harvest to the anger merely affirms the consequent.

**291.** `ars-engine.js:3096` · “She will make a fine doctor …”

> OLD: The argument stands only on the universal, and the universal is doubtful, …
>
> NEW: The argument depends only on the universal, and the universal is doubtful, …

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**292.** `ars-engine.js:3104` · “The old house must be soundly built …”

> OLD: The familiar converse does no work here; the work is done by the hidden universal, and the houses that fell are evidence against it.
>
> NEW: The familiar converse contributes nothing here; the conclusion depends on the hidden universal, and the houses that fell are evidence against it.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**293.** `ars-engine.js:3108` · “The remedy cannot hurt you — it is all natural.”

> OLD: The appeal to nature persuades only while its premise stays out of sight.
>
> NEW: The appeal to nature persuades only while its premise is left unstated.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep


## Exercise XX, Dialectic (explanations)

**294.** `ars-engine.js:3608` · Topic “from the name”, shown in the explanation

> OLD: when the word carries its meaning on its face, or has been misunderstood
>
> NEW: when the word plainly shows its meaning, or has been misunderstood

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**295.** `ars-engine.js:3667` · Finding questions, rule shown above the question

> OLD: The question is what we already have in hand, and which place will turn it into a reason.
>
> NEW: The question is what we already know, and from which place it can be made into a reason.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**296.** `ars-engine.js:3682` · Maxim questions, explanation

> OLD: A fallacy works the same way, only backwards, since it depends on a maxim that is false and looks true.
>
> NEW: A fallacy has the same structure, except that it depends on a maxim that is false and looks true.

Decision: ☐ yes · ☑ change: ____________________ · ☐ keep

GROK BOT: A fallacy works in the same way but in reverse, since it depends on a maxim that is false and looks true.

**297.** `ars-engine.js:3758` · Objection to “Every bird has feathers”

> OLD: Everything in the objection is true, and none of it touches the thesis, …
>
> NEW: Everything in the objection is true, and none of it bears on the thesis, …

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**298.** `ars-engine.js:3814` · “What is the maxim of a topic?”

> OLD: A fallacy depends on a maxim that is false and looks true, so it works in the same way, only backwards.
>
> NEW: A fallacy depends on a maxim that is false and looks true, so it has the same structure, except that its maxim is false.

Decision: ☐ yes · ☑ change: ____________________ · ☐ keep

GROK BOT: A fallacy depends on a maxim that is false and looks true, so it works in the same way but in reverse.

**299.** `ars-engine.js:3834` · “How does dialectic differ from a testing disputation?”

> OLD: A testing disputation works from what seems true to the respondent, and aims at taking his measure.
>
> NEW: A testing disputation works from what seems true to the respondent, and aims at finding out how much he knows.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**300.** `ars-engine.js:3842` · “Why does the tradition place dialectic between rhetoric and demonstration?”

> OLD: The three are stages of one inquiry as it matures.
>
> NEW: The three are successive stages of one inquiry.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep


## Exercise XXI, The Fallacies (explanations)

**301.** `ars-engine.js:3157` · Rule shown with every fallacy question

> OLD: … and the cause of the failure, which makes it break.
>
> NEW: … and the cause of the failure, which makes it fail.

Decision: ☐ yes · ☐ change: ____________________ · ☑ keep

**302.** `ars-engine.js:3253` · Composition, the cause of the failure

> Note: This sentence is also one of the answer options, so the option would change too.
>
> OLD: What holds of them one by one need not hold of them taken together, since the joining itself can change the case.
>
> NEW: What holds of them one by one need not hold of them taken together, since being joined can change what is true of them.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**303.** `ars-engine.js:3262–3263` · Figure of speech, the two causes

> Note: These sentences are also answer options. “Form” for “shape” follows your own change in the grammar panel (style pack, Part 4C).
>
> OLD: Two words share a shape, so they seem to work the same way. … The likeness is only in the shape; the things named are of different sorts.
>
> NEW: Two words have the same form, so they seem to signify in the same way. … The likeness is only in the form; the things named are of different sorts.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**304.** `ars-engine.js:3265` · Figure of speech, explanation

> OLD: … is when two expressions of the same shape are treated as of the same sort.
>
> NEW: … is when two expressions of the same form are treated as of the same sort.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**305.** `ars-engine.js:3273` · In a certain respect, the cause of the failure

> Note: This sentence is also an answer option.
>
> OLD: The qualification was doing real work, and it has been quietly dropped.
>
> NEW: The qualification mattered, and it has been dropped without notice.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**306.** `ars-engine.js:3283` · Begging the question, the cause of the failure

> Note: This sentence is also an answer option.
>
> OLD: Nobody who doubted the conclusion could have granted that premise. The argument has helped itself to the point.
>
> NEW: Nobody who doubted the conclusion could have granted that premise. The argument has assumed the point at issue.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**307.** `ars-engine.js:3377` · Fallacy outside the words, explanation

> OLD: outside the words — the language is fine; the thinking is not
>
> NEW: outside the words, since the language is fine but the thinking is not

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**308.** `ars-engine.js:3454` · “Every brick is light, so the wall is light.”

> OLD: Weight adds up, but lightness does not survive the addition.
>
> NEW: Weight adds up, so what is light in each part need not be light in the whole.

Decision: ☐ yes · ☑ change: ____________________ · ☐ keep

GROK BOT: Weight adds up, but lightness does not, so a wall of light bricks need not be light.

**309.** `ars-engine.js:3466` · “They always go together, so one of them makes the other.”

> OLD: Going together is not producing. Both may follow from some third thing, …
>
> NEW: That two things go together does not mean that one produces the other. Both may follow from some third thing, …

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**310.** `ars-engine.js:3516` · “A modern book calls an argument a ‘straw man.’”

> OLD: Both are the same fault underneath.
>
> NEW: Both are species of the same fault.

Decision: ☐ yes · ☐ change: ____________________ · ☑ keep


## American spelling (cards, explanations, feedback, and the glosses and options they quote)

**311.** `index.html:576, 3918, 1227` · Home streak box and the end-of-set button

> OLD: Practise today to begin your streak · Practise Again
>
> NEW: Practice today to begin your streak · Practice Again

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**312.** `index.html:976` · Intro card, Definition, example sentence

> OLD: … every point of which lies equally distant from the centre.
>
> NEW: … every point of which lies equally distant from the center.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**313.** `index.html:1487` · Grammar panel 1

> ⚑ **Possibly your wording.** This sentence is in the panel you revised (a8a29da, then ff6ed1f). Only the spelling changes.
>
> OLD: … and the centre of this whole course of study is the proposition.
>
> NEW: … and the center of this whole course of study is the proposition.

Decision: ☐ yes · ☐ change: ____________________ · ☐ keep

GROK BOT: for Timothy. Spelling only: centre to center.

**314.** `ars-engine.js:979` · Term gloss shown above Exercise XVIII arguments

> OLD: a plane figure bounded by one line, every point of it equally far from the centre
>
> NEW: a plane figure bounded by one line, every point of it equally far from the center

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**315.** `ars-engine.js:993` · Term gloss shown above Exercise XVIII arguments

> OLD: an artefact, made rather than grown
>
> NEW: an artifact, made rather than grown

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**316.** `ars-engine.js:880` · Name used in Exercise XVIII counterexamples

> OLD: the plough
>
> NEW: the plow

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**317.** `ars-engine.js:1876, 1929–1936` · Exercise IV options, quoted in the explanations

> Note: The defined words are also answer options.
>
> OLD: … a ship that never found its harbour … A harbour is a sheltered stretch of water … A plough is a tool drawn through the soil …
>
> NEW: … a ship that never found its harbor … A harbor is a sheltered stretch of water … A plow is a tool drawn through the soil …

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**318.** `ars-engine.js:2279` · Exercise III division, option and explanation

> OLD: Colours into the white and the black … all the colours in between (red, green, and the rest) are left out
>
> NEW: Colors into the white and the black … all the colors in between (red, green, and the rest) are left out

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**319.** `ars-engine.js:2306` · Exercise III division, option and explanation

> OLD: … north, south, east, west, and the centre … the centre is not a direction at all, …
>
> NEW: … north, south, east, west, and the center … the center is not a direction at all, …

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**320.** `ars-engine.js:2313, 2315` · Exercise III division, explanations

> OLD: breed, colour, and age … speed, colour, and age
>
> NEW: breed, color, and age … speed, color, and age

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**321.** `ars-engine.js:2422` · Exercise III division, option

> OLD: Travellers into those on foot and those on horseback
>
> NEW: Travelers into those on foot and those on horseback

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**322.** `ars-engine.js:2530` · Exercise I predicables, option and explanation

> OLD: White is a colour … Colour is the genus, said of white as its wider kind.
>
> NEW: White is a color … Color is the genus, said of white as its wider kind.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**323.** `ars-engine.js:2790, 2815` · Exercise II categories, doctrine shown above the question, and an option

> OLD: … double, half, greater, a master, a neighbour. · a neighbour
>
> NEW: … double, half, greater, a master, a neighbor. · a neighbor

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**324.** `ars-engine.js:2894, 2902` · Exercise II categories, options

> OLD: It is always present in a subject, as colour is · What a thing has on it, such as shoes or armour
>
> NEW: It is always present in a subject, as color is · What a thing has on it, such as shoes or armor

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**325.** `ars-engine.js:3200` · Exercise XXI, explanation of “to say something ungrammatical”

> OLD: the respondent is manoeuvred into speaking badly.
>
> NEW: the respondent is maneuvered into speaking badly.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**326.** `ars-engine.js:3271` · Exercise XXI, modern name in the explanation

> OLD: modern books usually call it hasty generalisation, or ignoring the qualification
>
> NEW: modern books usually call it hasty generalization, or ignoring the qualification

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**327.** `ars-engine.js:3454` · Exercise XXI, explanation

> OLD: … as colour often does.
>
> NEW: … as color often does.

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**328.** `ars-engine.js:3609, 3824` · Exercise XX, topic gloss in the explanation, and an option

> OLD: the judgement of those who know
>
> NEW: the judgment of those who know

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**329.** `ars-engine.js:3837` · Exercise XX, option

> OLD: Yes, and since it is probable no defence of it is needed
>
> NEW: Yes, and since it is probable no defense of it is needed

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep

**330.** `index.html:1988, 2000, 2116` · Grammar and orientation question prompts and an option

> OLD: Are the parts of speech an arbitrary list to be memorised? · The art of memorising what has been said · Why tell a child a story to teach him to honour his parents?
>
> NEW: Are the parts of speech an arbitrary list to be memorized? · The art of memorizing what has been said · Why tell a child a story to teach him to honor his parents?

Decision: ☑ yes · ☐ change: ____________________ · ☐ keep


## Noted but not listed

Each of these needs your decision about content, so it falls outside this wording-only list:

- **“Not scored” and other notes about the course itself.** Examples are “Nothing here is scored.” (grammar panel 1, index.html:1488), “Nothing here is scored or tracked.” (orientation panel 1, index.html:1549), and “Not scored” on the study cards. You removed tags like these from Ars Grammatica, but deleting them here would drop a statement, so they are not listed. Where such a tag was a fragment, the listed NEW turns it into a sentence and keeps it.
- **“takes a capital letter”** (index.html:1702, a grammar answer explanation). Your rule 5 example is “usually begins with a capital letter”, but adding “usually” adds a qualification, so it is not listed.
- **“Colourless green ideas sleep furiously.”** (index.html:1880, a grammar question prompt). This is a quotation, and Chomsky’s original spelling is “Colorless”. Quotations are outside this pass. Note that the current text does not match the source.
- **Dashes in your own Aug 12 grammar panels** (index.html:1496–1545) are left off. The panels are yours, and the dashes there are the only departure from the rules.
- **Question prompts and answer options** are not reviewed, except where an option is the same string as an explanation (marked in the entry) or for spelling.
- **Interface text** is not reviewed: the Guided Path and progress messages, the streak and reminder box, input hints, keyboard hints and parse-error messages. The two British spellings in the streak box are in the spelling section.
- **“St Thomas”** is written without a period throughout. That is consistent, so it is not listed.

GROK BOT: One more note for Timothy. The “Colourless green ideas” quotation was left off the list, but it should be corrected to Chomsky’s “Colorless green ideas sleep furiously”, since the app misquotes it with the British spelling.
