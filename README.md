# incompletebiped.github.io

Personal site, built with React + Vite + TypeScript. Deploys automatically to
GitHub Pages via GitHub Actions on every push to `main`.  

## Develop

```
npm install
npm run dev
```

## Build

```
npm run build
npm run preview
```

## Editing content

- Projects shown on the homepage live in `src/data/projects.ts` — add, edit,
  or remove entries there.
- Intro text and layout are in `src/App.tsx`; styles are in `src/App.css` and
  `src/index.css`.

## Deployment

The `.github/workflows/deploy.yml` workflow builds the site and publishes
`dist/` to GitHub Pages. In the repo settings, under **Pages**, set the
source to **GitHub Actions** (one-time setup) — after that, every push to
`main` deploys automatically.
