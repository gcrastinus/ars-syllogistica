# Ars Syllogistica: Decision Sheet 2

Prepared October 20, 2026. This sheet covers what commit `24dcd8c` left untouched. Each item was rechecked against current `main` (`/workspace/ars-syllogistica`), and every line number below is from that commit. Nothing in the app was changed, and nothing was pushed.

The items are in two groups. **Part A** holds the judgment calls: real choices for Timothy, each with a recommendation. **Part B** holds the plain slips, each with its fix.

Rules applied throughout:
- Affirmatives carry existential import; negatives do not.
- Modal syllogisms follow Aristotle.
- Fallacies follow St. Thomas.
- Definition and division follow St. Thomas and John of St. Thomas.
- Plain established terms, no technical Latinisms.

**[not verified]** marks anything I could not check against the text.

Sources read for this sheet:
- Aristotle, *Prior Analytics* I, Jenkinson's translation (Ross, Oxford 1928), from Wikisource with Bekker numbers.
- Aristotle, *Nicomachean Ethics* X, Ross's translation, from Wikisource.
- St. Thomas: *ST* I q. 3 a. 5; I-II q. 57 a. 4; q. 58 a. 3; q. 94 a. 2; *Expositio Posteriorum* I, lect. 1 and lect. 13; and *De fallaciis* (doubtful authenticity). All from the Corpus Thomisticum.
- John of St. Thomas, *Outlines of Formal Logic*, trans. Wade (Marquette, 1955), cited by printed page. Wade's Translator's Introduction is cited separately as "Wade, intro."

**Already resolved or changed, but not completely:**
- **E23:** the intro now gives the definition of "contingent" ("it can be, and can also not be," `index.html:1084`), and that is fine. But contingent premises are still graded with one blanket rule (A1 below).
- **E41:** still present at `ars-engine.js:1119`, and it now also appears at `:3130` (B7).
- **E25:** still present at `index.html:643`, and it now also appears at `ars-engine.js:3130` (B1).
- **Composition and division:** the bricks, team, and choir items are gone, but the stones item remains (B17).

---

# Part A. Judgment calls

### A1. Contingent premises in the modal syllogism (rest of E23)

Current text:
- `ars-engine.js:1820`: in `modalConclusion`, every valid form without the necessary-plus-plain case in figure 1 gets the weaker mode.
- `ars-engine.js:1829`: "a contingent premise makes the conclusion contingent".
- `ars-engine.js:1832–1834`: `genModalSyllQ` draws contingent premises in every figure from level 3 up.
- `index.html:1087`: "When one premise is contingent, the course draws the conclusion as contingent."
- `index.html:1007`: "in the other cases treated here the conclusion follows the weaker premise."

What Aristotle held (*Prior Analytics* I, Jenkinson):

**Second figure.** In this figure the course's grading differs most from Aristotle:
- **Both premises contingent:** nothing follows. I.17, 36b26: "In the second figure whenever both premisses are problematic, no syllogism is possible, whether the premisses are affirmative or negative, universal or particular."
- **One contingent, one plain:** the same chapter (36b28–31): "if the affirmative is assertoric no syllogism is possible, but if the universal negative is assertoric a conclusion can always be drawn."
- **One necessary, one contingent:** I.19, 38a13: "if the negative is necessary a syllogistic conclusion can be drawn, not merely a negative problematic but also a negative assertoric conclusion; but if the affirmative premiss is necessary, no conclusion is possible."
- **Conversion:** the universal negative contingent does not convert (I.17, 36b35ff).

**First figure.**
- **Both premises contingent:** the conclusion is contingent, and the syllogism is "perfect" (I.14, 32b38).
- **Contingent major, plain minor:** the same holds (I.15, 33b25–27).
- **Contingent minor:** "all the syllogisms will be imperfect, and those which are negative will establish not possibility according to the definition, but that the major does not necessarily belong to any, or to all, of the minor" (I.15, 33b27–31). In other words, the conclusion is one-sided "possible," not two-sided "contingent."
- **One necessary, one contingent, negative premise necessary:** the conclusion is "problematic negative, and assertoric negative" (I.16, 35b23ff). This is stronger than the rule of the weaker premise allows.

**Third figure.**
- **Both contingent, or one contingent and one plain:** a contingent conclusion follows (I.20, 39a4–8; I.21, 39b7–8).
- **Necessary negative premise:** gives a plain negative (I.20, 39a8–11; I.22, 40a4–10).

**Fourth figure.** Aristotle has none.

Recommendation: don't build all of Aristotle's tables into the drill. Instead, keep contingent premises only where his rule is the simple one, and add one case that teaches that nothing follows.
1. In `genModalSyllQ`, allow contingent premises only in:
   - the first figure with a contingent major and a contingent or plain minor;
   - the third figure with contingent or plain premises.
2. Add second-figure items with two contingent premises, keyed "Nothing follows."
3. Don't generate contingent premises in the fourth figure, or mixed with necessary premises.
4. Proposed wording for `index.html:1087`: "When both premises are contingent, or one is contingent and the other plain, the conclusion is contingent in the first figure (when the major premise is the contingent one) and in the third. In the second figure two contingent premises give nothing at all (Aristotle, *Prior Analytics* I.17). Aristotle's other mixtures differ from mood to mood, and the course does not test them."
5. Proposed wording for `ars-engine.js:1829`: "in the first and third figures a contingent premise joined to a contingent or plain premise gives a contingent conclusion (*Prior Analytics* I.14–15, 20–21)".
6. Proposed feedback for the new items: "Nothing follows. In the second figure two contingent premises give no conclusion, whatever their quantity or quality (Aristotle, *Prior Analytics* I.17)."

### A2. "Granting the existential import of ..." in the Diagram Workshop

Current text:
- `ars-engine.js:1643` (`spConsequences`): "`${T[c]}, granting the existential import of “X”`".

The readout uses this wording for any term that `tryImport` picks. That includes a term that no affirmative universal in the student's marks has as its subject. This contradicts the decision now carried out in `importExplain` (from commit 24dcd8c). That function already distinguishes "The affirmative premise ... asserts that something falls under X" from "No premise asserts that something falls under X."

Judgment: the Workshop takes free markings, so there may be no premises to point to. Recommendation:
- When the shading includes the full emptied lens of some "All X are Y," say "which the universal affirmative “All X are Y” asserts."
- Otherwise say "if something is “X” (nothing drawn here asserts it)."
- Proposed code text: `` `${T[c]}, if something is “${labs[T]}”${src ? `, as “${src}” asserts` : ' (nothing in the diagram asserts this)'}` ``.

### A3. The loaf and the statue, keyed causal

Current text:
- `ars-engine.js:2180`: "A loaf is bread baked from kneaded dough", with "It defines through the making, the baking of the dough, that is, the efficient cause."
- `ars-engine.js:2181`: "A statue is bronze shaped by the sculptor into a likeness", with "It defines through its maker, the sculptor, who is the efficient cause."

John of St. Thomas: matter and form give the physical essential definition. "The causal definition is one that is given by the extrinsic causes ... efficient and final ... (since the matter and form are the intrinsic causes)" (*Outlines*, pp. 48–49). His own causal example puts a common term in place of a genus: the soul is "a form created by God for beatitude" (p. 49).

The two items mix the two kinds. Dough and bronze are matter, and a likeness is a form. The baking and the sculptor are efficient causes.

Recommendation: keep the items as causal, but remove the matter:
- "A statue is a likeness made by a sculptor." Explanation: "It defines through its maker, the sculptor, who is the efficient cause."
- "A loaf is bread shaped and baked by a baker." Explanation: "It defines through the one who makes it, the efficient cause."

The alternative is to rekey the originals as essential (physical). That would teach a distinction the course does not otherwise teach.

### A4. Prudence (E11)

Current text:
- `ars-engine.js:1005`: "'moral virtue':'a virtue perfecting appetite and conduct: justice, courage, temperance and their kin'".
- `ars-engine.js:1006`: "'intellectual virtue':'a virtue perfecting the intellect: understanding, science, wisdom, art, and prudence'".
- The knowledge base (comment at `:832`) counts prudence as both moral and intellectual.

St. Thomas: "prudentia, secundum essentiam suam, est intellectualis virtus. Sed secundum materiam, convenit cum virtutibus moralibus ... Et secundum hoc, virtutibus moralibus connumeratur" (*ST* I-II q. 58 a. 3 ad 1). See also q. 57 a. 4.

Judgment: whether to keep the double classification at all. It is defensible, but subtle for a beginner. Recommendation: keep the key and make the glosses say what the key assumes.
- Moral virtue: "a virtue perfecting appetite and conduct: justice, courage, temperance, and prudence, which is counted with them because it concerns conduct".
- Intellectual virtue: "a virtue perfecting the intellect: understanding, science, wisdom, art, and prudence, which is intellectual in what it is".

### A5. The fourth figure as "the scholastic account" (E29)

Current text:
- `index.html:596`: "All moods and figures of the scholastic account are possible here, including the fourth figure and the weakened (subaltern) moods."

John of St. Thomas recognizes three figures and nineteen moods, with the indirect moods (Baralipton, Celantes, Dabitis, Fapesmo, Frisesomorum) placed in the first figure: "the fourth figure, which always concludes indirectly, is always reduced to the first figure after the premises are transposed; and therefore, as not being distinct from it, is not numbered separately" (*Outlines*, pp. 110–111).

Judgment: whether to keep the fourth figure. Recommendation: keep it, since the engine and the diagrams depend on it, and relabel it. Proposed wording: "All the moods of the later textbook account are possible here, including the weakened moods and the fourth figure, which St. Thomas and John of St. Thomas do not count separately but treat as the indirect moods of the first."

### A6. Logic as art and science (E47)

Current text:
- `index.html:2035`: "Logic aims at reasoning well and is also a science of the mind’s operations."
- `index.html:2039`: "Logic is primarily an art, and secondarily a science of the very acts the mind performs while reasoning."

Wade, summarizing John of St. Thomas:
- Logic is an art, and "Logic, therefore, is an art at the same time that it is a science." It is a liberal art, and it "must therefore be called a speculative science, for its end is to know" (Wade, intro, p. 7).
- Its formal object is second intentions: "Such second intentions constitute the formal object of Logic" (Wade, intro, p. 10).

I did not check John of St. Thomas's own Latin (*Ars Logica* II, q. 1) **[not verified]**.

Recommendation: drop "primarily ... secondarily," and make the object of the science second intentions.
- For `:2035`: "Logic aims at reasoning well, and it is also a science, whose object is the relations that things have only as they are known."
- For `:2039`: "Logic is both an art and a science: an art, because it gives rules for reasoning; a speculative science, because its end is to know."

### A7. Poetics (E50)

Current text:
- `index.html:1600`: "When we lack even probable evidence, we propose possible accounts — often *stories* — to make sense of what little we know".

St. Thomas: "Quandoque vero sola existimatio declinat in aliquam partem contradictionis propter aliquam repraesentationem, ad modum quo fit homini abominatio alicuius cibi, si repraesentetur ei sub similitudine alicuius abominabilis. Et ad hoc ordinatur poetica; nam poetae est inducere ad aliquod virtuosum per aliquam decentem repraesentationem" (*Expositio Posteriorum* I, lect. 1, n. 6).

Judgment: the present account may be Timothy's own extension. Recommendation: lead with St. Thomas, and keep the extension as a second sentence. Proposed wording: "Below even probable evidence, the mind can still be inclined by a likeness: a story or an image makes a thing seem attractive or repugnant, as food is made repugnant when it is pictured as something disgusting. This part of logic is poetics, whose end, St. Thomas says, is to lead to virtue by a fitting representation."

### A8. "Everyone does it, so it must be good" (E32)

Current text:
- `index.html:1605`: "we may err in the very *form* of our reasoning — “everyone does it, so it must be good.”"
- `index.html:2129`: "The fault is in the shape of the argument, not in any single premise."
- Against both: `ars-engine.js:3212`, "The book must be good — everyone is reading it", completed by a false tacit premise.

By the course's own enthymeme doctrine, the completed argument is valid and its fault is in the matter. The appeal to popularity is not one of St. Thomas's thirteen fallacies (*De fallaciis* c. 5, c. 11).

Judgment: which example to use. Recommendation: give the orientation a real error of form, and leave the appeal to popularity to the enthymeme set.
- For `:1605`: "we may err in the very *form* of our reasoning — “if it rained, the ground is wet; the ground is wet; so it rained.”"
- For the `:2129` question, "everyone does it" should become the example of a false premise, with this explanation: "The argument needs the premise “Whatever everyone does is good,” and that premise is false."

### A9. The answers to an objection (E37)

Current text:
- `ars-engine.js:3854`: "Grant the whole objection, since it is right and the thesis must be narrowed".
- `index.html:1330`: "we answer an objection as the schools did: we distinguish the term, deny the premise, grant it all and deny the consequence, or concede and narrow the claim."

The schools' answers are usually given as "I grant," "I deny," "I distinguish," and "let it pass." I could not verify this list in St. Thomas or in the *Outlines* **[not verified]**.

Judgment: keep the fourth move, but stop calling it the schools' practice. Proposed wording for `:1330`: "we answer an objection as the schools did, by distinguishing the term, denying the premise, or granting the premises and denying the consequence; and when the objection is simply sound, we concede it and state the thesis again more narrowly."

### A10. "Habit" for two categories (E45), and "posture" or "position" (E46)

Current text:
- `index.html:927`: "**Habit** (having)".
- `ars-engine.js:2976`: "Habit (having)".
- `ars-engine.js:3014`: "Knowledge and virtue are habits, the first species of quality".
- `index.html:1276` and `ars-engine.js:2970` say "position," while `index.html:926` and `ars-engine.js:2977` say "Posture".

Following the plain-terms rule, I recommend:
- Name the tenth category "**Having**" everywhere, with "(also called habit)" given once.
- Add one sentence at `:3014`: "This is “habit” in the sense of a lasting quality, not the category of having."
- Use "posture" at `index.html:1276` and `ars-engine.js:2970`.

The cross-reference for the two senses of "habit," Aristotle's *Metaphysics* V.20, is **[not verified]**.

### A11. The topics from the genus and from the species (E36)

Current text:
- `ars-engine.js:3685` and `index.html:1176`: "Whatever belongs to the whole family belongs to each kind within it."
- `ars-engine.js:3688`: "Whatever is said of the kind is said of the individuals under it."
- `ars-engine.js:3687`: the narrower-kind gloss "what holds of the kind is carried up to the family, or applied to one of its members."

*De fallaciis* c. 2 gives as a true maxim "de quocumque praedicatur species, et genus." That is the topic from the species, running upward. The destructive maxim for the topic from the genus ("if the genus is removed, the species is removed"), found in Peter of Spain and Boethius, is **[not verified]**.

Recommendation:
- Make the narrower-kind maxim match St. Thomas: "Whatever the narrower kind is said of, the wider kind is said of too." The course already says exactly this at `index.html:1200`.
- Keep the wider-kind maxim, since it is true, but add: "and what the whole family lacks, each kind lacks."

---

# Part B. Plain slips

**B1. E25.**
- Current text: `index.html:643`, "in each of them the conclusion follows the weaker part"; also `ars-engine.js:3130`.
- John of St. Thomas applies the weaker part to categorical syllogisms and to "and" propositions: "the copulative always follows its weaker part, the disjunctive its stronger part" (p. 98). It has no place in "if" and "or" moods.
- Fix for `:643`: "... and in categorical and modal arguments the conclusion follows the weaker part."

**B2. E26.**
- Current text: `index.html:649`, "When valid form is joined to true matter, reasoning becomes **science**".
- St. Thomas: "sufficit enim in aliis syllogismis quod syllogizetur ex veris ... sed in demonstratione tantum oportet hoc observare," that is, that it proceed from necessary principles (*Expositio Posteriorum* I, lect. 13, n. 4).
- Fix: "When valid form is joined to true matter, the argument is sound; when its premises are also necessary, first, and causal, it becomes **science** ...".

**B3. E27.**
- Current text: `index.html:1586`, "Within demonstration lie **formal logic** ... and **material logic**".
- St. Thomas: certainty comes "vel ex ipsa forma syllogismi tantum, et ad hoc ordinatur liber priorum analyticorum ... vel etiam cum hoc ex materia," for which he points to the *Posterior Analytics* (*Expositio Posteriorum* I, lect. 1, n. 6).
- Fix: "Logic considers the **form** of every argument (how the terms are arranged) and its **matter** (whether the premises are true, and of what kind); demonstration belongs to the study of matter."

**B4. E12.**
- Current text: `index.html:904`, "Only **substance** is always a genus and never a species"; `ars-engine.js:2740`, "Substance is the highest genus of all".
- St. Thomas: "ens non potest esse genus alicuius" (*ST* I q. 3 a. 5, citing *Metaphysics* III).
- Fix: "Each of the ten categories is a highest genus, never a species; in the tree of Porphyry that genus is **substance**." For `:2740`: "Substance is the highest genus in its own line (the tree of Porphyry); being itself is not a genus."

**B5. E33.**
- Current text: `ars-engine.js:3824`, key `dem`, "Every whole is greater than any one of its parts."
- St. Thomas lists "omne totum est maius sua parte" among the propositions "per se notae communiter omnibus" (*ST* I-II q. 94 a. 2).
- Fix: rekey to the standing "granted by all" in `ENDOX`, with the explanation "It is known through itself, as soon as the terms are understood; it is certain, but it is not proved." Replace the `dem` item with a theorem, for example "The angles of a triangle equal two right angles."

**B6. E38.**
- Current text: `ars-engine.js:3180`, "Pleasure is not the good, for even fools attain it."
- I found the nearest passage in Aristotle: "any chance person — even a slave — can enjoy the bodily pleasures no less than the best man; but no one assigns to a slave a share in happiness" (*Nicomachean Ethics* X.6, 1177a6–9).
- Fix: keep the item, cite *Nicomachean Ethics* X.6 in its explanation, and call it "after Aristotle". The exact wording with "fools" is not his.

**B7. E41.**
- Current text: `ars-engine.js:1119` and `:3130`, "the middle is distributed once".
- Fix: "the middle is distributed at least once."

**B8. E42.**
- Current text: `ars-engine.js:1288`, "contraposition does both at once".
- Fix: "contraposition obverts, converts, and obverts again".

**B9. E43.**
- Current text: `index.html:1068`, "A conditional holds in one direction only, from antecedent to consequent, and never from consequent to antecedent."
- Fix: "A conditional asserts the connection in one direction only, from antecedent to consequent; it does not assert the reverse, even when the reverse happens to be true."

**B10. E44.**
- Current text: `index.html:780`, "one picked out at random"; `index.html:784`, "picks out one individual at random".
- Fix: "says that at least one individual is there, without saying which".

**B11. E39.**
- Current text: `index.html:999`, "it usually means *No S are P*, but sometimes only *Some S are not P*".
- Fix: "it may mean *No S are P* or only *Some S are not P* (“All that glitters is not gold” means the second), so it should be read twice."

**B12. E40.**
- Current text: `index.html:1823`, "*And* gives the conjunctive syllogism".
- Fix: "*Not both* gives the conjunctive syllogism, *or* the disjunctive, *if* the conditional."

**B13. E16.**
- Current text: `ars-engine.js:2125`, "holds, since it fits exactly and is clear, positive, and brief."
- The rule allows a negative definition where no positive one is available, but this feedback is shown for negative definitions too.
- Fix: use "positive" only when the definition is not negative; otherwise say "is clear and brief, and is negative only because no positive account is available."

**B14. E17.**
- Current text: `ars-engine.js:1987`, "Man is a human being", and `:1995`, "A number is what is counted in counting", both under the rule at `:2094`, "The term being defined must not appear inside its own definition".
- John of St. Thomas requires that the definition be "clearer in meaning than the thing defined" and that "the defined ought not come into the definition" (p. 46). A synonym explains only the name (p. 47).
- Fix: replace them with definitions that really contain the term ("A man is a man that reasons"; "A number is a numbered multitude"). Alternatively, explain them as "gives only a word of the same meaning, which makes nothing clearer."

**B15. E18.**
- Current text, all keyed "metaphor": `ars-engine.js:1988`, "Man is the measure of all things"; `:2041`, "A line is the track of a moving point"; `:2049`, "A father is the head of the household"; `:2057`, "A shepherd is the guardian of the flock".
- Fix: replace them with true metaphors, for example "Man is a reed that thinks," "A father is the oak of the family," "Sleep is the brother of death," and "A ship is a plow of the sea." Aristotle's discussion of metaphor in definitions (*Topics* VI.2) is **[not verified]**.

**B16. E34 and E35.**
- E34, current text: `ars-engine.js:3874`, "The objection grants the pattern and shows that it fails elsewhere ...". Fix: "Every premise of the thesis may be granted, but the consequence is denied: what holds of each part need not hold of the whole, as the bricks show."
- E35, current text: `ars-engine.js:3734`, "Every part of the argument has been granted. So the argument as a whole has been granted." Fix: replace it with an item in the maxim's direction: "The whole wall is white because it is plastered white. So this patch of it is white."

**B17. The stones item.**
- Current text: `ars-engine.js:3420`, key `comp`, "Each of these stones can be lifted by one man. So all of them together can be lifted by one man."
- This is the parts-to-whole pattern that decision 3 moved outside the words. There is no phrase with two readings, because "each" and "together" are unambiguous.
- St. Thomas's own example of this kind of composition: "quod potest unum solum ferre, plura potest ferre," where "only" can be joined with "can" or with "carry" (*De fallaciis* c. 8, third mode).
- Fix: "He who can carry only one stone can carry many. So he who cannot carry more than one stone can carry many." Explanation: "Taken together, “can carry only one” means he is unable to carry more, and the premise is false; taken apart, it means that he now carries only one, and the premise is true."
- Note: the triangle item at `ars-engine.js:3424` ("All the angles of a triangle ...") is a real ambiguity between "all together" and "each," so it may stay.

**B18. E48.**
- Current text: `ars-engine.js:927` makes the dog a swimmer, while the horse (no tag) is not. Insects carry no swimmer tag (`:924–925`), so "No insects are things that can swim" is graded true.
- Fix: replace the predicate with one that is plainly true or false of each animal, such as "thing that has fins."

**B19. E49.**
- `ars-engine.js:1989`: "A house is a shelter built to protect living things and goods" is too broad, since it also fits a barn. Fix: "A house is a building made for people to live in."
- `ars-engine.js:2364`: "Ships into those driven by oar and those driven by sail" is keyed sound, but the members overlap (galleys used both) and do not cover the whole (steamships). Fix: rekey it as faulty on both counts.
