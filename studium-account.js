/* Studium Institute sign-in and saved progress (one account for every studiuminstitute.org app;
   the Worker and the shared script live in the Lectio repository, accounts/). Loaded only on the
   studiuminstitute.org site itself, so local copies and file:// work as before.
   Signed in, this app's progress is saved a few seconds after each change and loaded on every visit.
   "Sign in" appears wherever the page has data-studium-account (the + menu, under Dark mode). */
(function () {
  if (!/(^|\.)studiuminstitute\.org$/.test(location.hostname)) return;
  var s = document.createElement('script');
  s.src = 'https://accounts.studiuminstitute.org/studium-sync.js';
  s.async = true;
  s.dataset.app = 'ars-logica';
  s.dataset.appName = 'Ars Logica';
  s.dataset.prefixes = 'arsSyllogistica.';               // Guided Path progress and path choice
  s.dataset.keys = 'arsDark,arsFont,arsSpeakRate,arsFreeLeadins,arsDayStreak,arsLastDay,arsBestDayStreak';
  s.dataset.exclude = '*.steal,*.activeTab';
  document.head.appendChild(s);
})();
