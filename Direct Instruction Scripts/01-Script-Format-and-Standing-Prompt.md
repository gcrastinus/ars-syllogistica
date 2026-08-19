# Script Format and Standing Prompt

Three parts: (A) the format every finished script must follow; (B) the standing prompt and single-model workflow — one model, one pass per lesson; (C) an optional two-model variant if a script ever needs heavier treatment.

**Recommended model: Opus 5.** The scripts live or die on two things — embedding the canonical wordings *exactly*, and building example sequences with genuinely minimal differences — and both are precision work, where Opus is the stronger of your two. Use Grok 4.6 when you want speed and volume (extra practice items, worksheet variants) or a second opinion on a script that taught badly; for the drafting itself, one Opus chat per unit is the whole machine. Keep each unit in a single continuous chat so the model remembers what earlier lessons taught and reviews it correctly.

---

## A. Script format specification

Every lesson script is a single document with these sections, in order:

```
LESSON N — Title                                    (~20–30 min, both students)

MATERIALS: (cards, whiteboard, app device if used today)

1. REVIEW (5–8 min) — cumulative, interleaved items from the active tracks.
   Scripted exactly like new material: teacher words in bold, expected
   responses after →, individual turns named "9" or "12" where differentiated.

2. NEW MATERIAL (8–12 min) — at most one or two new concepts.
   For each: MODEL (teacher states/works 2–3 items), LEAD (choral, on signal),
   TEST (choral then individual). Example sequences printed in full, in order,
   positives varied widely, negatives minimally different.
   CORRECTION box after each test: the exact words for the likely errors
   (model → test → note to retest in step 4).

3. GUIDED PRACTICE (5–8 min) — mixed items on today's concept woven with the
   nearest older track. TRUE/FALSE/UNKNOWN drills use those three words only.

4. DELAYED TESTS (2–3 min) — retest of anything corrected today, plus
   yesterday's new concept.

5. DEEPER (optional, 2–3 min) — extension items for the 12-year-old while the
   9-year-old repeats the firmest review track. Never new doctrine; only
   harder instances, longer chains, or Latin/Greek word-origins.

6. APP ASSIGNMENT (when applicable) — which Ars Syllogistica set, which
   difficulty, letters or English terms, and the stopping rule
   (e.g., "stop at 100 points or 15 minutes, whichever first").

7. MASTERY NOTE — the one sentence the teacher should be able to say at the
   end ("Both students can ___ with no help"), and what to re-run tomorrow
   if not.

8. SPARE ITEMS — 2× extra items per section, same constraints, for swapping
   out weak items or extending firming the next day.

9. DRAFTER'S FLAGS — the model lists any step where a 9-year-old could
   plausibly misread the instruction, with the fix already applied, so you
   can spot-check its reasoning.
```

Script conventions: teacher's spoken words in **bold**; (parenthetical stage directions in plain text); expected student response after →; "Signal" means tap the table. Every choral question gets think-time: ask, pause, signal. No teacher paraphrase of canonical wordings until the script marks them FIRM.

---

## B. Standing prompt and single-model workflow

Start one Opus 5 chat per unit. Paste the standing prompt below, then Section A above, once at the top. Attach the Andres PDF if the unit draws on it (Units 0–2) — the briefs carry the essential passages, so this is belt-and-braces, not required. Then for each lesson, paste that lesson's brief and say: **"Write the full script for this lesson per the brief and the format."** Read it once yourself before teaching — you are the quality gate, and the classroom is the real test. If a lesson teaches badly, tell the same chat what broke ("the L19 minimal pairs confused quantity with quality for the 9-year-old at item 4") and ask for a targeted revision.

### Standing prompt (paste at the top of each unit's chat)

> You are writing scripted Direct Instruction lessons in the tradition of Siegfried Engelmann (Theory of Instruction: faultless communication, model–lead–test, example/non-example sequences, choral response on signal, immediate correction with delayed retest, cumulative distributed review, mastery before progress). The students are a 9-year-old boy and a 12-year-old girl taught together, ~20–30 minutes per lesson, assumed to know nothing beyond prior lessons in this series.
>
> The subject is Aristotelian logic following the doctrine of Aristotle and St. Thomas as presented in the source material I will give you. You must not import modern-logic doctrine (no truth-functional connectives, no unrestricted existential-import skepticism, no "sets"); where the Ars Syllogistica app's conventions are taught, the brief will say so explicitly.
>
> Hard rules:
> 1. Use the CANONICAL WORDINGS from the brief exactly as given, wherever the doctrine they express is taught or reviewed. Write all other text fresh — do not paraphrase-and-quote-mangle the sources; either use the canonical wording exactly or write plainly in your own words.
> 2. Follow the SCRIPT FORMAT given below, section by section, including sections 8 (SPARE ITEMS) and 9 (DRAFTER'S FLAGS). Print every teacher utterance in bold, every expected response after →, and a correction procedure for every test item where an error is plausible.
> 3. Example sequences: for each new concept give at least 6 positive examples varying widely in irrelevant features and at least 4 negatives minimally different from positives, sequenced so that only the intended interpretation survives. Use concrete, child-familiar material (animals, foods, family, tools, saints, sports); avoid abstract examples until the concept is firm.
> 4. New material may occupy at most ~15% of the lesson. The rest is review from the tracks listed in the brief.
> 5. Before finalizing, reread the draft as a distractible 9-year-old: wherever an instruction could be misread, fix it and record the fix in DRAFTER'S FLAGS.
> 6. Vocabulary: say "statement" (with "proposition" only if the brief says the mapping has been taught). Keep sentences short. No jokes that depend on knowledge the children lack.
> 7. Deliver the complete script in one piece, ready to teach from, no meta-commentary outside section 9.

---

## C. Optional two-model variant (heavier treatment)

Not part of the normal flow. Use it only when a script matters more than usual (the mastery-test lessons L7, L15, L27, L30) or when a taught lesson failed and you want fresh eyes rather than a self-revision:

1. Opus 5 drafts as in Section B.
2. Paste the draft into Grok 4.6 with: "Here is a Direct Instruction script for a 9- and 12-year-old. (1) Play a distractible 9-year-old: transcript the three places the communication could be misread, and propose the minimal fix. (2) Generate 3× replacement items for whichever example sequence is weakest, same constraints. (3) Produce the answer key."
3. Return Grok's critique to the Opus chat for one revision pass.

The value is that a model critiques someone else's script more ruthlessly than its own; the cost is two extra steps per lesson. Reserve it for the lessons that earn it.
