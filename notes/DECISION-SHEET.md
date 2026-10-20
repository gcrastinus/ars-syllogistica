# Ars Syllogistica: Decision Sheet

Prepared October 20, 2026, from `notes/DOCTRINE-AUDIT.md` (commit `12925d9`), checked against `index.html` and `ars-engine.js` at that commit. Nothing in the app was changed and nothing was pushed. Each entry gives the current text (file:line), what the authority says (with citation), and a correction worded for the course. A **[not verified]** mark means I could not check the claim against the text.

Sources I read directly:

- Gyula Klima, "Existence and Reference in Medieval Logic," in A. Hieke and E. Morscher, eds., *New Essays in Free Logic* (Kluwer, 2001), 197–226. I read Klima's preprint (faculty.fordham.edu/klima/FILES/Freelogic.pdf). Page numbers below are **preprint** pages; the printed page numbers in the volume are not verified.
- St. Thomas, *Super Sent.* I, d. 38, q. 1, a. 5; *De veritate* q. 2, a. 12; *Expositio Posteriorum* I, lect. 13–14; *ST* I-II, q. 94, a. 4; *De fallaciis*; *De propositionibus modalibus* (all from the Corpus Thomisticum Latin text).
- Pseudo-Thomas, *Summa totius logicae Aristotelis*, tr. 7, c. 13 (Logic Museum Latin text).
- John of St. Thomas, *Outlines of Formal Logic*, trans. Francis C. Wade (Marquette, 1955). This is the copy in Timothy's Dropbox (`/Storage/Philosophia/Logic/Aristotelian Logic/`). It is a retyped edition whose page headers match the printed pages, and I checked them against the Marquette scan. Page numbers below are the printed pages.
- Stanford Encyclopedia of Philosophy, "Medieval Theories of Modality" (on Kilwardby).

Authenticity: the Corpus Thomisticum marks both *De fallaciis* and *De propositionibus modalibus* "authenticitate dubium." The *Summa totius logicae* is spurious, though John of St. Thomas cites it as St. Thomas's (*Outlines*, p. 97, n. 8: "Sum. Tot. Log. Arist. tr. 6, c. 14").

---

## 1. Existential import (E1, E28, set V, the ⊗ marks)

**Decision:** Universal affirmatives carry existential import.

### What Klima says

1. Medieval logicians did not assume that every common term has something under it. Some modern readers credit Aristotle with "the assumption of the non-emptiness of common terms," and "this suggestion would definitely be rejected by the most ardent followers and expounders of Aristotle's logic, namely, medieval logicians" (§1, preprint p. 1).
2. Import belongs to the affirmatives because of how supposition works. An empty subject term "refer[s] to nothing (*pro nullo supponunt*). But then the affirmative categoricals are false, whence their contradictories are true, that is to say, affirmative categoricals have existential import, while negative ones do not, which 'automatically' yields the relationships of the Square" (§2, preprint p. 2). Both medieval theories of predication give this result "for affirmative categoricals in general, including universal affirmatives" (§2, preprint p. 3).
3. Buridan states the rule this way: "omnis propositio affirmativa cujus subjectum vel praedicatum pro nullo supponit est falsa" (*Sophismata* c. 1, quoted in n. 11, preprint p. 22; Scott's translation, pp. 66 and 72). For Aristotle as the authority, Klima cites *Cat.* 13b27–35, *De int.* 19b5–20b13, and *Pr. An.* 51b6–52b25 (n. 12).
4. Particular negatives: "later medievals rather settled on not attributing existential import to particular negatives, treating them as the genuine contradictories of universal affirmatives" (§3, preprint p. 7). On this reading "Some winged horse is not a horse" is true, because there are no winged horses.
5. A limit: when the subject is ampliated (tense, modality) or has natural supposition, as in laws of nature, A still implies I, but A does not imply that the subject actually exists (§4.2, preprint p. 10; n. 9).

**Not verified:** Klima's introduction to Buridan, *Summulae de Dialectica* (Yale, 2001). I had no copy, so I give no page from it.

So Timothy's decision is the traditional reading, with one refinement: import belongs to the **affirmative** (A and I), not to "every term." E and O carry none.

### What the decision means for E1

Current text:

- `index.html:1635` (Orientation panel 18): "The older logic of Aristotle treats every general term as *non-empty* ... so a universal already carries existence with it ... This course follows the classical way: every term stands for real things."
- `index.html:1639` (its question): "Traditional logic presumes every term non-empty (there *are* dogs), which is why a universal carries existential import".
- `ars-engine.js:653` (`vennMistake`): "Students often think that a universal must add a mark of existence to the diagram, but a universal only declares a region empty; it asserts no existence."
- `ars-engine.js:706` (`vennMistake3`): "The × asserts existence, which no universal claims."
- `index.html:787`: "Each categorical proposition makes exactly one mark".

Change:

- **`ars-engine.js:653` and `:706` are now false doctrine** and must change. Proposed wording for `:653`: "The region is right but the mark is wrong. The diagram shows a universal by what it denies, so the region it empties is shaded. A universal affirmative does carry existence, but the diagram shows that existence with ⊗ only when an argument needs it." Proposed wording for `:706`: "The region is right but the mark is wrong: a universal proposition empties its region, and so the region is shaded. Its existential import is drawn as ⊗ only when the conclusion needs it."
- **`index.html:1635` and `:1639`**: change the ground. The import comes from the affirmative, not from a rule that every term is non-empty. Proposed wording: "In the older logic an affirmative proposition is true only if its subject stands for something that exists, so an affirmative whose subject stands for nothing is false. That is why "All S are P" yields "Some S are P." A negative proposition carries no such existence. Modern set theory reads "All S are P" as true when there are no S, and so denies the step. This course follows the classical way."
- **`index.html:787`**: add "In the diagram, that is; what an affirmative universal also says about existence is shown by ⊗ when it is needed."

### What it means for set V

Set V draws an A proposition as shading only, and marks a student wrong for adding a mark of existence. Keep the drawing convention, since the feedback will now call it a convention. Better still, accept an A diagram that also puts ⊗ in the open cell of S, and say in the feedback that the course does not require it. The `DESC` text (`index.html:2986`) can stay as it is.

### What it means for E28 and the ⊗ marks

Current text: `index.html:1292` "where a weakened conclusion demands existence, the import ×"; `index.html:2920` "the ⊗ supplies the existential import ... that the weakened conclusion requires"; `ars-engine.js:710` "on the modern reading the weakened moods fail for exactly this reason"; `ars-engine.js:1062` "so the weakened conclusion follows."

The engine marks nine moods with ⊗, and I confirmed the list by running `diagramSyllogism` in Node. Only five of them are weakened (`SUBALTERN`, `ars-engine.js:20`). On Timothy's decision:

| Mood | ⊗ on | Premise that supplies the existence |
|---|---|---|
| Barbari AAI-1 | S | minor A "All S are M" |
| Celaront EAO-1 | S | minor A "All S are M" |
| Cesaro EAO-2 | S | minor A "All S are M" |
| Darapti AAI-3 | M | A premises "All M are …" |
| Felapton EAO-3 | M | minor A "All M are S" |
| Bramantip AAI-4 | P | major A "All P are M" |
| Fesapo EAO-4 | M | minor A "All M are S" |
| Camestros AEO-2 | S | **none**: S appears only in the E premise "No S are M" |
| Camenos AEO-4 | S | **none**: S appears only in the E premise "No M are S" |

In seven moods the ⊗ shows the import of an A premise, which fits the decision exactly. Camestros and Camenos are different. Their ⊗ on S is not backed by any affirmative premise. On Klima's medieval reading they are still valid, but for another reason: their O conclusion carries no import and is true even when S is empty. The diagram needs the ⊗ only because it draws O as an × (existence) in S outside P. Timothy has two choices:

- (a) Keep the ⊗ in all nine moods and say in one sentence that the diagram writes O with an ×. The course then reads O as "some S exists that is not P," which is stronger than the medieval "not every S is P."
- (b) Keep "every term stands for real things" as an extra course presumption, which covers Camestros and Camenos. This is the "non-emptiness" assumption that Klima says the medievals rejected.

I recommend (a).

Wording:

- `index.html:1292`: "... and, where the conclusion needs the existence of a term, the import mark ⊗."
- `index.html:2920`: "the ⊗ supplies the existential import of “X” that the conclusion requires."
- `ars-engine.js:710`: "... on the modern reading these moods (the five weakened ones and Darapti, Felapton, Bramantip, and Fesapo) fail for exactly this reason."
- `ars-engine.js:1062`: keep "weakened" only when the mood is in `SUBALTERN`; otherwise "so the conclusion follows."

---

## 2. The modal syllogism (E23)

**Decision:** Teach the view St. Thomas held.

### Current app text

- `index.html:1085`: "*Peiorem sequitur semper conclusio partem*: the conclusion always follows the weaker premise. As a negative premise requires a negative conclusion, and a particular premise a particular one, so the weaker *mode* governs the conclusion: if a necessary premise is joined to a merely contingent one, the conclusion can be no stronger than contingent."
- `index.html:1086`: "Necessity is strongest, the plain assertion stands between, contingency is weakest. A conclusion may sink to the level of the weaker premise, but never rise above it."
- `index.html:1087`: "“Every man is necessarily mortal; every scholar is (in fact) a man; therefore every scholar is mortal.” Yet the conclusion is drawn only as a plain assertion, not as a necessity, since the minor premise was merely assertoric. So we judge each argument by the mode its weakest premise allows."
- `index.html:1316` (set XVI description; the audit's ":1290" is wrong): "The received rule is peiorem sequitur semper conclusio partem: the conclusion follows the weaker premise, in mode as in quality and quantity."
- `index.html:1006` (XV): "the conclusion may never be stronger in mode than the weaker premise."
- `index.html:3280`, `:3143`; `ars-engine.js:1775` "A necessary conclusion needs necessity in both premises."

### What St. Thomas held

St. Thomas wrote no commentary on the *Prior Analytics*, and no authentic work of his treats the modal syllogism as a topic. **He never settles the question explicitly.** He does meet Aristotle's rule twice, and both times he lets it stand:

- *Super Sent.* I, d. 38, q. 1, a. 5, arg. 5: "secundum philosophum in Lib. priorum, ex majori de necessitate, et minori de inesse, sequitur conclusio de necessitate." The objection then argues: whatever God knows must necessarily be true; this is known by God; so it is necessarily true. St. Thomas answers (ad 5) by distinguishing the **major**, not by denying the rule: "ista: omne scitum a Deo necesse est esse, est duplex, eo quod potest esse de dicto, vel de re: et si sit de dicto vera est, et si sit de re, falsa est: et similiter conclusio duplex est."
- *De veritate* q. 2, a. 12, arg. 4 cites the same rule: "secundum philosophum in I Prior., ex maiori de necesse et minori de inesse sequitur conclusio de necesse." Ad 4 again answers only by the *de dicto*/*de re* distinction of the major.

His reply works on the premise and takes the rule for granted. Read naturally, he accepts Aristotle's first-figure rule: a necessary major (*de re*) with an assertoric minor gives a necessary conclusion. That is the opposite of the *peiorem* rule for modes. This is an inference from how he answers. He does not state the rule as his own thesis.

- *Expositio Posteriorum* I, lect. 14, n. 5 (on 75a): "licet ex praemissis contingentibus non sequatur conclusio necessaria necessitate absoluta, sequitur tamen secundum quod est ibi necessitas consequentiae." Lect. 13, n. 4: "Conclusio necessaria non potest sciri nisi ex principiis necessariis." These concern demonstration and the necessity of the consequence, not the mixed modal syllogism.
- *De propositionibus modalibus* (doubtful authenticity) treats modal propositions, their quantity and quality, opposition, and equipollence. It does not treat the modal syllogism.

### The school

- **Pseudo-Thomas, *Summa totius logicae*, tr. 7, c. 13**, which the school read as St. Thomas's and which John of St. Thomas cites as his: "in prima figura, maiori propositione existente necessaria et minori de inesse, sequetur semper conclusio necessaria. Maiori vero existente de inesse, quantumcumque minor sit necessaria, non tamen conclusio erit necessaria." This is Aristotle's rule (*Pr. An.* I.9, 30a15–23).
- **Albert the Great and Kilwardby**, St. Thomas's teacher and the authority Albert drew on, follow Aristotle. They add that the assertoric minor must be "simpliciter" assertoric, that is, a necessarily true *per se* predication (SEP, "Medieval Theories of Modality," citing Kilwardby, *Notule libri Priorum* 15.255–301).
- **John of St. Thomas**: the *Outlines* (the *Summulae*, Wade's translation) has **no chapter on the modal syllogism**. Its only "weaker part" rule is for compound propositions: "the copulative always follows its weaker part, the disjunctive its stronger part" (p. 98; see p. 97). I could not check the *Ars Logica* Part II on modal syllogisms **[not verified]**.

### Recommendation

The example at `:1087` is exactly the case in which Aristotle, the school's *Summa totius logicae*, and (by implication) St. Thomas grant a necessary conclusion. As written, it teaches the opposite of the Thomist view. Either:

- (i) keep *peiorem* as the course's simple rule, but name it as Theophrastus's, change the example, and add the note below; or
- (ii) teach the Aristotelian and Thomist rule for the first figure. This needs grading changes in `genModalSyllQ` and `modalSyllMistake`: in figure 1, a necessary major with an assertoric minor concludes necessarily. The other figures have their own cases, which the *Summa totius logicae* c. 13 lists.

If (i), proposed wording for `:1085`: "**The rule taught here.** *Peiorem sequitur semper conclusio partem*: the conclusion follows the weaker premise. This is the rule of Theophrastus, Aristotle's successor, and the course uses it as the safe rule." Proposed wording for `:1087`, with a new example: "“Every man is necessarily an animal; every runner is in fact a man; therefore every runner is an animal.” By the rule taught here, the conclusion is drawn as a plain assertion, not as a necessity."

Wherever `:1006` says "may never be stronger," the same qualification should read "by the rule taught here."

**Note on the other view (not taught):**
> Aristotle himself does not follow the rule of the weaker premise in mode. In the first figure, he holds that a necessary major premise and a plain minor premise give a necessary conclusion: if every man is necessarily an animal, and every runner is a man, then every runner is necessarily an animal, since what is said necessarily of every man is said necessarily of whatever falls under "man" (*Prior Analytics* I.9). He denies the reverse: a plain major and a necessary minor give only a plain conclusion. The medieval commentators, the logic handed down under St. Thomas's name, and St. Thomas when he cites the rule, all follow Aristotle. Theophrastus held the simpler rule that this course uses. Where the two disagree, a student should know that the stronger conclusion has Aristotle's authority.

E24 is related: "the contingent (it is so, yet might not be)" at `index.html:1083`. *De propositionibus modalibus* says "possibile et contingens idem significant." Both the Aristotelian and the scholastic contingent are what is neither necessary nor impossible, and neither implies that the thing actually is so. Proposed wording: "the **contingent** (it can be, and can also not be)."

---

## 3. Fallacies (E7, E8, E31, with E6 and E30)

**Authority:** *De fallaciis* (doubtful authenticity; in Leonine vol. 43). Aristotle, *Soph. El.* 4–5. John of St. Thomas, *Outlines* pp. 135–136, agrees throughout.

### E7. Accident and *secundum quid*

Current text: `index.html:1199` "*Accident* is now called applying a general rule to a special case"; `ars-engine.js:3293` (`FAL_KINDS.accid.mod`) "the fallacy of accident, also called *a dicto simpliciter*, destroying the exception, or applying a general rule to a special case"; items `:3355` (surgeon, key `accid`) and `:3359` (madman's sword, key `secquid`).

St. Thomas's accident is something said of one thing being concluded of another that is one with it only *per accidens*, with a diverse acceptance of the middle: "quando est fallacia accidentis, semper est diversa acceptio medii" (*De fallaciis* c. 12). His examples: "cognosco Coriscum. Coriscus est veniens. Igitur cognosco venientem"; "animal est quadrupes. Homo est animal: igitur homo est quadrupes" (c. 12). John of St. Thomas gives "I know the one coming, Peter is the one coming, Therefore I know Peter" (p. 135).

*Secundum quid et simpliciter* is "deceptio proveniens ex eo quod dictum secundum quid accipitur ac si esset dictum simpliciter" (c. 13). St. Thomas's handling of the madman case: returning deposits "ut in pluribus verum est, sed potest in aliquo casu contingere quod sit damnosum ... puta si aliquis petat ad impugnandam patriam" (*ST* I-II, q. 94, a. 4). A rule that holds only "for the most part" is taken as holding simply.

How each item classifies:

- Madman's sword (`:3359`): *secundum quid et simpliciter*. The key stands.
- Surgeon (`:3355`): on St. Thomas's analysis this is a true fallacy of **accident**. "Cutting people with knives is a crime" holds of cutting only as it differs from the surgeon's cutting, just as "quadruped" holds of animal only as it differs from man. The middle is taken in two senses, so the key `accid` can stand. The explanation should say so. The *modern* label is what is wrong.

Change at `index.html:1199` and `ars-engine.js:3293`: drop "applying a general rule to a special case" and "*a dicto simpliciter*" from accident, and move them to *secundum quid*. Proposed text for `:1199`: "*Accident* has no exact modern name; it concludes of a thing what belongs only to something joined with it by accident. *In a certain respect taken flatly* is what modern books call hasty generalization, or ignoring the qualification; in its other direction, applying a rule that holds for the most part to a case it does not fit, they call the fallacy of accident, *a dicto simpliciter ad dictum secundum quid*." The surgeon item's explanation should name the two senses of "cutting with knives."

### E8. Composition and division

Current text: `index.html:1196` "in a phrase, **composition** and **division**". The items keyed `comp` and `divis` are at `ars-engine.js:3343` (bricks), `:3346` (team), `:3347` (machine and screw), `:3348` (choir), and `:3350` (army).

St. Thomas: in composition and division "deceptio provenit ex potentiali multiplici unius orationis ... dictiones eaedem diversimode componi possunt ad invicem, vel ab invicem distingui." His examples are "quidquid vivit semper est," "nigrum possibile est esse album," and "duo et tria sunt quinque" (c. 8, with c. 5). John of St. Thomas: "when the composite sense is changed into the divided or conversely" (p. 135). None of the five items has a sentence that changes meaning when its words are joined or separated. They are therefore **outside the words**.

On St. Thomas's scheme, the parts-to-whole items (bricks, team) come nearest to *secundum quid et simpliciter* in its fourth mode: "quando determinatio addita significat partem ... et hic modus se extendit ad alias partes ... aliorum totorum" (c. 13). The whole-to-parts items (machine, choir, army) take what belongs to the whole as whole and give it to the part as separate from the whole, which is the pattern of accident in c. 12. That last placement is my judgment; *De fallaciis* gives no whole-to-part example.

Change: rekey the five items. Either (a) move them to a separate drill, "The modern part and whole errors," whose answers are *secundum quid* or accident; or (b) replace them with genuine items such as "Whatever lives always is" (taken together or apart), "Two and three are five, so five is even and odd," and "A sitting man can walk."

### E31. "Healthy"

Current text: `ars-engine.js:3352`, key `figura`: "Food is healthy. A complexion is healthy. A body is healthy. So all three have health in them the same way."

St. Thomas, in the second species of equivocation: "ad hanc speciem reducitur multiplicitas nominum analogorum quae dicuntur de pluribus secundum prius et posterius: sicut sanum dicitur aliquando de animali, urina et diaeta" (c. 6).

Change: rekey to `equiv`. Proposed explanation: "The word "healthy" is said of the body first, and of food and complexion by reference to the body's health, as cause and as sign. St. Thomas counts such analogous words under equivocation."

### E6. The "nothing" sophisms (related)

Current text: `ars-engine.js:3332` (key `equiv`) "Nothing is lighter than a feather ... So this box is nothing."; `:3351` (key `figura`) "Nothing is better than lifelong happiness ...".

Figure of speech is "deceptio proveniens ex eo quod aliqua dictio similis alteri dictioni videtur habere eumdem modum significandi" (c. 10). Equivocation needs one word with several significations (c. 6). "Nothing" has one signification, but it looks like a name of something. Neither "nothing" sophism is in *De fallaciis*; I classify them by his definitions. Change: key both `figura`.

### E30 (related)

Current text: `index.html:1199` "modern logic counts those one fault, as the schools did"; `ars-engine.js:3318` "(modern logic counts them the same fault)". John of St. Thomas puts both the conditional and the categorical example under the consequent (p. 136). Change: "Modern books count these two faults; Aristotle and the schools counted them one, the fallacy of the consequent."

---

## 4. Definition and division (E15, E20, E21, E22; E13, E14, E19)

**Authority:** John of St. Thomas, *Outlines*, Book I, chs. 3–4, pp. 45–51.

### E20. "Essential" division

Current text: `index.html:945` "**Essential — a general kind into the kinds beneath it.**"; `ars-engine.js:2393` "An ESSENTIAL division divides a general kind (a genus) into the kinds beneath it".

John of St. Thomas, p. 50: the whole can be divided "to the parts that constitute its essence ... it is an *essential* division into its constituents; for example ... one part of man is *soul*, another is *body*; one element of man is *animal*, another is *rational*." Dividing a genus into its species is the *subordinative*, quidditive division ("according to predication"): "this division is most proper and quidditive" (p. 50; diagram p. 51).

Change: rename the kind. Proposed wording for `:945`: "**Quidditive (of a universal whole) — a genus into its species.**" Then add, or keep separate, a true essential division: "**Essential — a thing into the parts of its essence:** man into body and soul, or into animal and rational."

### E21. Division "by powers"

Current text: `ars-engine.js:2434` "The hand into its power to grasp and its power to strike"; `:2436` "The senses of an animal into sight, hearing, touch, taste, and smell"; `:2437` "A horse into its power to run, to pull, and to carry".

John of St. Thomas, p. 50: "If the division is into the subordinated parts that are potencies, it is a division of a potential whole. For example, if you said that souls are intellectual or appetitive; that prudence is judicative, advisory, or imperative." In other words, the whole is the soul or a power.

Change:

- Replace the hand and horse items, which divide bodily things, with "The soul into the vegetative, the sensitive, and the rational powers" and "Prudence into taking counsel, judging, and commanding" (John of St. Thomas's own example).
- The senses item can stay only if its explanation says that the sensitive power is the potential whole. Otherwise move it to the quidditive kind.

### E22. Bees

Current text: `ars-engine.js:2420` "The bees of a hive into the queen, the workers, and the drones", keyed essential, with "It divides a general kind into the kinds beneath it."

The quidditive division is "of the genus into the species" (p. 50). Queen, worker, and drone are not species. They are one species divided by function and sex, so this is an accidental division of a subject by its accidents ("one animal is *white*, another *black*," p. 50). Change: rekey as accidental, or drop the item.

### E15. Kinds of definition

Current text: `ars-engine.js:2053` "A CAUSAL definition identifies the thing through one of its causes: what made it, what it is made of, its form, or what it is for."; `index.html:978` (same). Items `:2074` ice, `:2075` nest, `:2076` well, `:2072` lamb, and `:2071` bachelor, all keyed essential; `:2093` clock and `:2096` house, keyed causal.

John of St. Thomas, p. 48: real definitions are "essential, descriptive and causal." The essential definition is twofold: "the physical, which is given through the matter and form; the metaphysical, which is given through the genus and differentia." "The causal definition is one that is given by the extrinsic causes. These extrinsic causes are two, viz. efficient and final ... because they do not constitute the nature but are outside of it (since the matter and form are the intrinsic causes)" (pp. 48–49). His example: the soul is "a form created by God for beatitude" (p. 49).

Changes:

- `:2053` and `index.html:978`: "A causal definition identifies the thing through its outside causes: what made it, or what it is for. A definition by matter and form is a kind of essential definition, the physical."
- Nest (`:2075`) and well (`:2076`): rekey as causal, since they define by the end.
- Ice (`:2074`): it mixes matter (water) and efficient cause (cold). Either rekey as causal or replace it.
- Lamb (`:2072`): "young" is an accident, so the definition is descriptive (p. 48: "by means of a thing's accidents, either proper or common"). Rekey.
- Bachelor (`:2071`): this is nominal, so rekey or drop. It is not a species under a genus, and John of St. Thomas says a strict definition "can be given only of something which is under a genus" (p. 47).
- In the rules drill, "sound" definitions such as the clock (`:1890`) are praised for giving "the kind and the difference" (`:2038`). That praise fits John of St. Thomas: even descriptive and accidental definitions give "something that serves in place of" genus and difference (p. 46). The two drills will agree once the causal items are keyed by the end.

### E19. "The animal that laughs"

Current text: `ars-engine.js:2086` "Man is the animal that laughs". John of St. Thomas's example of a descriptive definition is "*Man is a risible animal*" (p. 48), that is, able to laugh. Change: "Man is the animal that can laugh."

### E14. "Takes up space"

Current text: `ars-engine.js:2573` "Taking up space is the difference that divides substance into the bodily and the spiritual". John of St. Thomas: substance is divided "into corporeal and spiritual, and corporeal into living and non-living" (p. 49). The difference is "corporeal"; taking up space follows from quantity. Change: make the item "A body is corporeal substance" with the difference "corporeal." Alternatively, move "takes up space" to the property items, if Timothy wants it treated as a property of body.

### E13. "Man is a species of animal"

Current text: `ars-engine.js:2562`, keyed as giving the species. In this sentence "man" has simple supposition. St. Thomas uses the parallel "homo est species. Socrates est homo: igitur Socrates est species" as a fallacy of figure of speech, "a simplici suppositione ad discretam" (*De fallaciis* c. 10). Change: replace it with "Socrates is a man," or reword it to "Man is the species under the genus animal" and move it to the `PRED_PRINCIPLES` question on supposition.

### Unverified attribution

`ars-engine.js:2050` and `index.html:975` say the nominal definition "must come first, says John of St Thomas." The *Outlines* (pp. 47–48) divides nominal from real definition but does not say that the nominal must come first **[not verified in the *Outlines*]**. The point is Aristotle's (*Post. An.* II.10). Unless Timothy has the passage, credit Aristotle.

---

## 5. Plain slips

- **E2** (`index.html:922`; `ars-engine.js:2814`, `:2827`). Change to: "Substance — what exists in its own right, not in anything else. Primary substance (this man, this horse) is neither said of a subject nor in one; secondary substance (man, animal) is said of a subject but is in none (*Categories* 5, 2a11–19)."
- **E3** (`index.html:1025`). Change "Some men are not unjust" to "Some men are not non-just".
- **E4** (`ars-engine.js:3792–3793`). Rekey from `deny` to `full` ("Grant the whole objection"), and change the explanation to: "The observation is true, and the thesis as stated is false, so the respondent grants the objection and restates the thesis." Alternatively, keep `deny` and rewrite the case so that the objection is the false one.
- **E5** (`ars-engine.js:3649`). Rekey to `gen`. For `spec`, write an item that argues from the species, for example: "A robin can fly; so some bird can fly."
- **E6**. Key both "nothing" sophisms `figura` (see section 3).
- **E9** (`ars-engine.js:3553`). Change the correct answer to "The false and the unbelievable differ: some false things are widely believed, and some unbelievable things are true."
- **E10** (`ars-engine.js:981`). Change the gloss to "a triangle having two sides alone equal (Euclid, *Elements* I, def. 20)."
- **E51** (`index.html:622`). Change to: "Every answer in the categorical sets is illustrated with a Venn diagram ...".

---

## Things to check

- The printed page numbers for Klima's chapter (pp. 197–226); I give preprint pages.
- Klima's Buridan introduction (Yale, 2001): not consulted.
- John of St. Thomas, *Ars Logica* Part II, on modal syllogisms: not consulted.
- The authenticity of *De fallaciis* and *De propositionibus modalibus*: both are marked doubtful.
