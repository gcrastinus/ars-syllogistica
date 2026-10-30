# Exercise V: existential import wording for O

Reference texts read first: the Exercise V intro card (index.html 3090: "The × for O marks something there for the diagram, while O itself carries no existential import") and the existential import cards (index.html 2772–2775, 3092–3093). Course doctrine: affirmatives (A, I) carry existential import; negatives (E, O) do not.

## Changed

1. ars-engine.js 679 (vennMistake, wrong mark: ⊗ where × belongs). Now branches on q.type.
   - BEFORE: The region is right, but the mark should be an ×, not a ⊗. A particular proposition itself asserts that something exists in this region, and that is shown by the ×. The ⊗ is kept for the existence that a universal affirmative asserts of its subject.
   - AFTER (I): The region is right, but the mark should be an ×, not a ⊗. “Some S are P” itself asserts that something exists in this region, and that is shown by the ×. The ⊗ is kept for the existence that a universal affirmative asserts of its subject.
   - AFTER (O): The region is right, but the mark should be an ×, not a ⊗. For “Some S are not P” the × is only the diagram’s way of marking this region; the O proposition asserts no existence. The ⊗ is kept for the existence that a universal affirmative asserts of its subject.

2. ars-engine.js 687 (vennMistake, wrong mark: shading where × belongs). Now branches on q.type.
   - BEFORE: The region is right but the mark is wrong. “Some” asserts that something <em>exists</em>, and that is shown by the ×. Shading would declare the region empty, the very opposite of what is said. Shading here usually comes from treating every proposition as a claim about a whole region.
   - AFTER (I): The region is right but the mark is wrong. “Some S are P” asserts that something <em>exists</em>, and that is shown by the ×. Shading would declare the region empty, the very opposite of what is said. Shading here usually comes from treating every proposition as a claim about a whole region.
   - AFTER (O): The region is right but the mark is wrong. A particular is drawn with an ×; for “Some S are not P” the × is only the diagram’s way of marking this region, since the O proposition asserts no existence. Shading would declare the region empty, the very opposite of what the diagram should show. Shading here usually comes from treating every proposition as a claim about a whole region.

3. ars-engine.js 695–696 (vennMistake, stray ⊗ in the wrong region; A and E keep their own earlier messages).
   - BEFORE: A particular proposition shows its existence with an ×, because the proposition itself says that something is there. The ⊗ is kept for the existence that a universal affirmative asserts of its subject.
   - AFTER (O): A particular proposition is drawn with an ×, not a ⊗. For “Some S are not P” the × is only the diagram’s way of marking the region; the O proposition asserts no existence. The ⊗ is kept for the existence that a universal affirmative asserts of its subject.
   - AFTER (I): An I proposition shows its existence with an ×, because the proposition itself says that something is there. The ⊗ is kept for the existence that a universal affirmative asserts of its subject.

4. ars-engine.js 748–753 (vennMistake3, two premises on three circles, ⊗ where × belongs). Branches on whether a premise is O (partO).
   - BEFORE: The cell is right, but the mark should be an ×, not a ⊗. The particular premise itself says that something is here, and that is shown by an ×. The ⊗ is kept for existence that comes from an affirmative universal premise.
   - AFTER (I premise): unchanged.
   - AFTER (O premise): The cell is right, but the mark should be an ×, not a ⊗. The particular premise is drawn with an ×; for an O premise the × is only the diagram’s way of marking the cell, since the O premise asserts no existence. The ⊗ is kept for existence that comes from an affirmative universal premise.

5. ars-engine.js 757–759 (vennMistake3, shading where × belongs).
   - BEFORE: The region is right but the mark is wrong: “some” asserts existence, and so calls for an ×. Shading would declare that very region empty, the opposite of what is said.
   - AFTER (I premise): unchanged.
   - AFTER (O premise): The region is right but the mark is wrong: a particular premise calls for an ×, which for an O premise only marks the region and asserts no existence. Shading would declare that very region empty, the opposite of what the diagram should show.

6. index.html 2220 (Exercise V description on the home card).
   - BEFORE: shading what they declare empty and placing an × where they assert existence.
   - AFTER: shading what they declare empty and placing an × in the region a particular proposition marks.

7. index.html 3083 (Exercise V card "The diagram").
   - BEFORE: with shading where the proposition declares a region empty and an × where it asserts that something exists.
   - AFTER: with shading where the proposition declares a region empty and an × in the region that a particular proposition marks.

8. index.html 3093 (Exercise V card "Existence and the ⊗").
   - BEFORE: A particular shows its existence with an ×, and not with a ⊗.
   - AFTER: An I proposition shows its existence with an ×, and not with a ⊗, and the × for O only marks its region.

9. index.html 3441 (Exercise VI/syllogism diagram question feedback; the case covers O premises such as Bocardo).
   - BEFORE: The × of the particular premise already supplies the existence, so nothing more is drawn.
   - AFTER: The × of the particular premise already shows what the conclusion needs, so nothing more is drawn.

## Reviewed and left unchanged

- ars-engine.js 499–500 VENN_KEY / VENN_KEY1 ("×: something is here. ⊗: something is here because an affirmative universal ... asserts that its subject exists, not because a particular ... says so"): a legend of what each mark means on the diagram, matching the intro card ("marks something there for the diagram"). Flagged for Timothy (see doubts).
- Diagram-convention statements of the same kind, left for the same reason: index.html 2023 (textbook convention, × as "something is here"), 2036, 4677, 4688 (click legends "× (something exists)"), 2042, 2229, 2776, 2882, 3090 (the intro card itself), 3390, 3870; notes/recitations/recitation-act2.js 21 (copy of 3870, kept consistent since 3870 is unchanged); teacher-quiz.html 388; ars-engine.js 4878 (instruction "mark × where something exists").
- ars-engine.js 515, 517, 756–761, 1115; index.html 5088: already say correctly that a particular negative asserts no existence and that the ⊗ for O conclusions is only a supposition of the diagram.
- ars-engine.js 702 ("locates its witness in S outside P"), 766; index.html 4999: "witness" names the place of the ×, not a claim of existence.
- index.html 2026, 2772–2775, 2858–2860, 3092, 3864–3869, 4559, 4820; ars-advanced.js 429, 526, 561–567, 652, 687, 693; ars-engine.js 1381: correct statements that affirmatives (A, I) carry import and negatives do not, or expositions of the traditional and modern readings.
- index.html 3437: Darapti; existence comes from an affirmative premise. Correct.
- notes/recitations/*.js and recitation*.js: no other hits. recitation-quick.js is absent from this clone; /workspace/deck-split-logica/quick-drafts/quick-all.json was searched (not edited) and has no statement that O or the × asserts existence.

## Verification

- node tools/check.js: all enforced checks pass.
- shots/test_venn.py (Playwright, chromium --no-sandbox, port 8973): Exercise V forced to I and to O; wrong mark (⊗), wrong mark (shading), and stray ⊗ in the wrong region all show the new text; no console errors. Screenshots in shots/.
- Node check of vennMistake3 with I and O premises: both branches return the expected text.

# Second pass: clear wording for the × (Timothy's decision: keep the × for O, no circle mark, no ○ selector)

Line numbers are those after this commit.

## 1. Legends and click directions
- ars-engine.js 499 VENN_KEY. BEFORE: Shading: the region is empty. ×: something is here. ⊗: something is here because an affirmative universal premise asserts that its subject exists, not because a particular premise says so. AFTER: Shading: the region is empty. ×: the region is marked (for I, something is here). ⊗: something is here because an affirmative universal premise asserts that its subject exists, not because of a particular premise.
- ars-engine.js 500 VENN_KEY1. Same change ("proposition" in place of "premise").
- index.html 2036, 4677, 4688 (twice). BEFORE: twice for an × (something exists). AFTER: twice for an × (region marked; for I, something exists).
- index.html 2042. BEFORE: Shading declares a region empty, an × declares that something is there, and a ⊗ … AFTER: Shading declares a region empty, an × marks a region (for I, that something is there), and a ⊗ …
- index.html 2229 (Exercise VIII description). BEFORE: Shading declares a region empty; an × declares that something is there; a ⊗ declares … not because a particular premise says so. AFTER: Shading declares a region empty; an × marks a region (for I, that something is there); a ⊗ declares … not because of a particular premise.
- index.html 2776, 3870 (recitation array), notes/recitations/recitation-act2.js 21, notes/recitations/LOGIC-AS-AN-ART-RECITATIONS.md 94 (kept in sync). BEFORE: shading a region declares it empty and an × declares that something is there. AFTER: shading a region declares it empty and an × marks a region (for I, that something is there).
- index.html 2882 (Study Check feedback). BEFORE: Shading declares a region empty; an × declares that something is there. AFTER: Shading declares a region empty; an × marks a region (for I, that something is there).
- index.html 3390 (Study Check feedback). BEFORE: A and E shade a region empty. I and O place an × to say that something is there. AFTER: A and E shade a region empty. I and O place an ×: for I it says that something is there, and for O it only marks the region.
- teacher-quiz.html 388. BEFORE: place × where something exists. AFTER: place × in the region a particular proposition marks.

## 2. Intro card (index.html 3090)
- BEFORE: … and the particulars (I and O) place an × to say that something is there. … The × for O marks something there for the diagram, while O itself carries no existential import, so “Some unicorn is not white” is true.
- AFTER: … and the particulars (I and O) place an ×: for I it says that something is there, and for O it only marks the region. … O itself carries no existential import, so “Some unicorn is not white” is true.

## 3. Instruction (ars-engine.js 4888)
- BEFORE: Diagram what the proposition asserts (shade empty regions; mark × where something exists).
- AFTER: Diagram what the proposition asserts (shade empty regions; place an × in the region a particular proposition marks).

## 4. "Witness"
- ars-engine.js 707 (O only). BEFORE: “Some S are not P” locates its witness in S <em>outside</em> P. AFTER: “Some S are not P” places its × in S <em>outside</em> P.
- ars-engine.js 776 (serves both I and O premises; about where the × goes). BEFORE: which cell of the “some”-zone can still hold a witness. AFTER: which cell of the “some”-zone can still hold the ×.
- index.html 4999 (caption for "×?" cells; serves I and O). BEFORE: since one of those cells holds the witness, but the premises do not say which. AFTER: since the × belongs in one of those cells, but the premises do not say which.

## Left unchanged
- index.html 2023: reports the textbooks' convention (Venn, Copi, Hurley, Gensler) in quotation marks; it is an accurate report, and the course's own reading follows at 2042.
- index.html 3389 ("occupied would need an ×"): answers a general question about what a diagram can mark; not a claim that O asserts existence.
- ars-engine.js 776 second sentence ("An × in a shaded cell asserts what was declared empty"): about contradiction between marks, kept.
- ars-engine.js 1391, index.html 4559, 4820 ("existential import supplying the witness"): about subalternation and conversion per accidens of universals; correct doctrine.
- Doctrine cards on existential import of A and of affirmatives: unchanged.
- teacher-quiz.html 388 keeps its existing dash ("mark the blank circles — shade …"); outside the scope of this change.

## Verification (second pass)
- node tools/check.js: all enforced checks pass.
- shots/test_legends.py (Playwright, chromium --no-sandbox, port 8977) at 1280 and 390 wide, light and dark: home card (Exercise VIII), Exercise V lead-in cards, Venn lab click directions, Exercise V one-proposition question (directions plus VENN_KEY1), Exercise V two-premise question, Exercise VIII question (directions plus VENN_KEY). The new text is present, there is no horizontal overflow, and there are no console errors. Screenshots in shots/.
- shots/test_venn.py rerun: all six I and O feedback cases pass.
