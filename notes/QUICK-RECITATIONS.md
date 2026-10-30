# Loading Quick recitation lines for a deck

Quick lines live in `recitation-quick.js`, in `window.__arsQuickRecitations`,
keyed by deck id. Each line is `{html, card, from}`. Only act1 is loaded now.
A deck with no entry shows Full only in the tablet.

To add decks from the Editor's file (same shape: `{"deckId": [{html, card, from}, ...]}`):

    python3 tools/integrate-quick.py quick-all.json act2 act3

Existing decks are kept. The script warns about dashes and unknown deck ids.
Then run `node tools/check.js` and open the tablet to read the lines.
