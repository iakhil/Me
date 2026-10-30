# Akhil Ivaturi — Personal website

A responsive, static portfolio with selected work, a searchable archive of 28 projects, an introduction, writing links, and contact information.

## Preview locally

Run `python3 -m http.server 8000 --bind 127.0.0.1` from this directory, then visit <http://127.0.0.1:8000>.

No dependency installation or build step is required. The site remains compatible with GitHub Pages, including hosting beneath `/Me/`.

## Edit the site

- `index.html`: homepage and selected projects.
- `projects.html`: complete project archive. Each `.archive-item` has a `data-category` used by the filters.
- `contact.html` and `public/about.html`: contact and about pages.
- `styles.css`: shared responsive design and reduced-motion support.
- `site.js`: progressively enhanced archive search and category filters. All projects remain visible without JavaScript.

External fonts have system fallbacks. Existing project, résumé, and social destinations are preserved.

The older Express/EJS demo in `server.js` and `views/` is separate from the static portfolio and is not needed to preview or host it.

## Social preview

`public/og.png` was created with the built-in image generation tool. The brief: a warm paper landscape card with near-black oversized “Akhil Ivaturi.” typography, burnt-orange accents, “Curious by default. Builder by instinct.” in italic serif, thin orbital rings, and “PROJECTS / IDEAS / EXPERIMENTS” in monospace. The Open Graph image URL uses this repository’s existing GitHub Pages address; update it if the hosting domain changes.

## Jeopardy! topic notebook

`jeopardy.html` contains editorial study-topic summaries for the 22 regular weekday games from September 30 through October 29, 2026 (an inclusive 30-day window). The homepage links to it. Each date expands without JavaScript to show Jeopardy!, Double Jeopardy!, and Final Jeopardy! summaries; October 13 also includes the tiebreaker.

The page links each game to the board reviewed on J! Archive or Jeopardy Today. Topic labels are interpretations, not official category transcriptions. The eight overview areas are editorial groupings, not clue-frequency statistics. This is a manually maintained snapshot, not a live feed. To refresh it, review the linked archives, edit the dated entries and sources, and update the coverage dates, game count, and review date on both the notebook and homepage.
