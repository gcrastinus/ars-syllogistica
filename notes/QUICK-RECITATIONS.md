# Loading Quick recitation lines

Quick lines live in `recitation-quick.js`, in `window.__arsQuickRecitations`.
Each entry is a list of lines `{html, card, from}`, keyed by deck id (for example `act1`).
All 18 decks are loaded. A deck with no entry shows only its Full recitation.
The whole-section recitations have no Quick: they are Full only.

To add or reload decks from the Editor's file:

    python3 tools/integrate-quick.py quick-all.json act2 act3

Entries keyed as whole sections (any key starting "section") are skipped.
Entries already loaded are kept. The script warns about dashes and unknown ids.
Then run `node tools/check.js` and open the tablet to read the lines.

How it behaves: Quick is offered first and needs at least 80 words, as Full does.
Pressing "Done" on Quick opens Full in the menu; the tablet stays on Quick and says
"Full is now open in the menu." Either kind of recitation moves the review schedule,
and each deck is listed once in "Time to recite again".
