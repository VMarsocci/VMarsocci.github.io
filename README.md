# Valerio Marsocci — personal academic website

A lightweight static website designed to run directly on GitHub Pages.

## Why this setup

- no framework
- no database
- no build step
- fast and easy to maintain
- works on GitHub Pages for free
- responsive + light/dark mode
- no analytics or tracking by default

## Publish on GitHub Pages

### Easiest option: `VMarsocci.github.io`

1. Log in to GitHub.
2. Create a new **public** repository named exactly `VMarsocci.github.io`.
3. Upload everything in this folder to the root of the repository.
4. Commit to the `main` branch.
5. Open **Settings → Pages**.
6. Under **Build and deployment**, choose **Deploy from a branch**.
7. Choose `main` and `/ (root)`, then Save.
8. After a minute or two the site should be available at `https://vmarsocci.github.io/`.

GitHub repository names are case-insensitive in URLs; the canonical public address will normally render lowercase.

## What to update next

- Add a portrait/headshot if desired.
- Add a normal academic CV PDF (not a grant-specific CV).
- Verify and expand the publications page.
- Add a Google Scholar link once the exact profile URL is confirmed.
- Add 2026 news/talks as desired.
- Optionally connect a custom domain later.

## Editing

Most textual content is in:

- `index.html` — homepage
- `publications.html` — publications
- `assets/styles.css` — visual design

The site uses only a tiny JavaScript file for the light/dark theme and footer year.

## Local preview

From this folder:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.
