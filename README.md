# Arya Miryala — Portfolio Website

My personal portfolio site, live at **[aryamiryala.github.io](https://aryamiryala.github.io)** — showcasing my work in data science, machine learning, and AI engineering.

## Tech Stack

- **HTML5** — semantic, single-page structure
- **CSS3** — custom design system built on CSS variables (design tokens), Grid and Flexbox layouts, fully responsive with mobile navigation, `prefers-reduced-motion` support
- **Vanilla JavaScript** — no frameworks or dependencies; handles the rotating role text, mobile menu, and scroll-reveal animations via the IntersectionObserver API
- **Google Fonts** — [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) (display), [Inter](https://fonts.google.com/specimen/Inter) (body), [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) (code accents)
- **GitHub Pages** — static hosting, zero build step; every push to `main` deploys automatically

## Structure

```
index.html    — all content
styles.css    — design tokens at the top (:root) for easy re-theming
script.js     — role rotation, mobile menu, scroll reveal
assets/       — images
docs/         — resume.pdf
```

## Local Development

No build tools needed — just open `index.html` in a browser, or serve it locally:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```
