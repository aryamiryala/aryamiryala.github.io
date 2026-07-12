# Arya Miryala — Portfolio Website

My personal portfolio site, live at **[aryamiryala.github.io](https://aryamiryala.github.io)** — showcasing my work in data science, machine learning, and AI engineering.

## Tech Stack

- **HTML5** — semantic, single-page structure with a sticky sidebar + scrolling content layout
- **CSS3** — custom design system built on CSS variables (design tokens), Flexbox and Grid layouts, fully responsive (sidebar collapses on mobile), custom scrollbar and selection styling, `prefers-reduced-motion` support
- **Vanilla JavaScript** — no frameworks or dependencies:
  - Animated intro overlay with a wipe transition on page load
  - Scroll-spy navigation that highlights the active section as you scroll
  - Custom eased smooth-scrolling for nav links via `requestAnimationFrame`
- **Google Fonts** — [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) (headings), [IBM Plex Sans](https://fonts.google.com/specimen/IBM+Plex+Sans) (body), [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono) (labels & accents)
- **GitHub Pages** — static hosting, zero build step; every push to `main` deploys automatically

## Structure

```
index.html    — all content
styles.css    — design tokens at the top (:root) for easy re-theming
script.js     — intro overlay, scroll-spy nav, smooth scrolling
assets/       — images
docs/         — resume.pdf
```

## Local Development

No build tools needed — just open `index.html` in a browser, or serve it locally:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```