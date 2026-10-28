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
