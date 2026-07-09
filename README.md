# Arya — Portfolio Website

A static portfolio site (plain HTML/CSS/JS — no build step) designed for GitHub Pages.

## Deploy to GitHub Pages

**Option A — user site (recommended): `https://<username>.github.io`**

1. Create a repo named exactly `<username>.github.io` (e.g. `arya.github.io`).
2. Push these files to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<username>/<username>.github.io.git
   git push -u origin main
   ```
3. Done — the site goes live at `https://<username>.github.io` within a minute or two.

**Option B — project site: `https://<username>.github.io/portfolio`**

1. Push to any repo (e.g. `portfolio`).
2. Repo → Settings → Pages → Source: "Deploy from a branch" → Branch: `main`, folder `/ (root)` → Save.

## Customize before publishing

- [ ] Replace `your-handle` and `you@example.com` in `index.html` (search-and-replace — appears in the social rail, project links, and contact buttons).
- [ ] Add your photo to `assets/me.png` and swap the `.portrait-placeholder` div for an `<img>` (the comment in the HTML shows where).
- [ ] Add project screenshots to `assets/` and replace each `.media-placeholder` div with an `<img>`.
- [ ] Drop your resume at `docs/resume.pdf`.
- [ ] Tweak copy in About / Projects / Contact as you like.

## Structure

```
index.html    — all content
styles.css    — design tokens at the top (:root) for easy re-theming
script.js     — role rotation, mobile menu, scroll reveal
assets/       — (create) images
docs/         — (create) resume.pdf
```

To change the accent color, edit `--accent` in `styles.css`.
