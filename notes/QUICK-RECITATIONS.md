# Loading Quick recitation lines

Quick lines live in `recitation-quick.js`, in `window.__arsQuickRecitations`.
Each entry is a list of lines `{html, card, from}`, keyed by deck id (for example `act1`)
or by whole section (`section:art` for Logic as an Art, `section:science` for Logic as a Science).
Only act1 is loaded now. A deck or section with no entry shows only its Full recitation, as before.

To add decks or sections from the Editor's file:

    python3 tools/integrate-quick.py quick-all.json act2 act3 section:art

The script also accepts the section keys written as `section-art`, `art`, or "Logic as an Art"
(and the same for science), and it is fine if the file has no section entries.
Entries already loaded are kept. The script warns about dashes and unknown ids.
Then run `node tools/check.js` and open the tablet to read the lines.

How it behaves: Quick is offered first and needs at least 80 words, as Full does.
Pressing "Done" on Quick opens Full in the menu; the tablet stays on Quick and says
"Full is now open in the menu." Either kind of recitation moves the review schedule,
and each deck or section is listed once in "Time to recite again".
