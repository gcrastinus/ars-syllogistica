# How to Use This Package — One-Model Flow

## What each file is for

| File | Who it's for | Ever goes to Opus 5? |
|---|---|---|
| 00-Master-Plan | You (reference: sequence, checkpoints, doctrine decisions) | No |
| 01-Script-Format-and-Standing-Prompt | Opus 5 | Yes — every chat |
| 02-Briefs-Unit0 | Opus 5 | Yes — Unit 0 chat only |
| 03-Briefs-Unit1 | Opus 5 | Yes — Unit 1 chat only |
| 04-Briefs-Unit2 | Opus 5 | Yes — Unit 2 chat only |
| 05-Briefs-Unit3 | Opus 5 | Yes — Unit 3 chat only |
| 06-Ars-Syllogistica-Alignment-Notes | You (and the app's author) | No |
| 07-How-To-Use (this file) | You | No |

## Per unit: 4 chats total for the whole program

**Step 1.** Open a new Opus 5 chat. Name it "Logic Unit N."

**Step 2.** Attach three files:
- `01-Script-Format-and-Standing-Prompt.md`
- the unit's brief file (`02` for Unit 0, `03` for Unit 1, `04` for Unit 2, `05` for Unit 3)
- the Andres PDF (Units 0–2; skip for Unit 3)

**Step 3.** First message, paste exactly:

> Read the attached 01-Script-Format-and-Standing-Prompt.md. The standing prompt in its Section B is your instructions; the format in its Section A is the required output format. The attached briefs file contains one brief per lesson. Write the full script for Lesson [N] per its brief and the format.

**Step 4.** For each following lesson in the unit, one line in the same chat:

> Write the full script for Lesson [N] per its brief and the format.

**Step 5.** Read the script once before teaching (check: canonical wordings intact, corrections present, review section draws on earlier lessons). Teach it.

**Step 6.** If a lesson taught badly, same chat:

> Lesson [N] broke at [where/what happened]. Revise that section only.

**Step 7.** New unit → new chat (back to Step 1). Don't reuse a chat across units; don't ask for two lessons in one reply.

## Rules of thumb

- One lesson per request. Long chats stay coherent because each unit has its own.
- The app assignments inside each script tell you when the children use Ars Syllogistica; the checkpoints at L7, L15, L27, L30 tell you what must be passed before moving on (details in 00).
- Grok 4.6 is optional (file 01, Section C): only for the four mastery-test lessons or a script that failed twice.
