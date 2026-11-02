# Manya B J – Portfolio (React + Vite)

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
```

## Update content
All text lives in `src/data/portfolioData.js`.
- Resume: replace `public/resume.pdf` (keep the filename, or change `resumeFile`).
- Project links: set `repo` and/or `demo` on a project; the buttons appear automatically.
- Social links / email: edit the `profile` object.

## Build
```bash
npm run build      # outputs dist/
npm run preview
```

## Deploy
Vercel: push to GitHub, import the repo at vercel.com (framework: Vite), Deploy.

GitHub Pages: the workflow in `.github/workflows/deploy.yml` builds and deploys `dist/` whenever
you push to `main`. In repository Settings → Pages, set the build and deployment source to
**GitHub Actions**. The Vite base path is configured for the `manya-portfolio` repository.
