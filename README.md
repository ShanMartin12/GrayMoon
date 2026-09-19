# Meridian Global Imports — Website

Professional website for an international import business, built with React, TypeScript, Vite, and Tailwind CSS.

## Deploy to GitHub Pages

This repo includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and deploys the site to GitHub Pages on every push to `main`.

### Setup steps

1. Push this project to a GitHub repository.
2. In the repo, go to **Settings > Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Push to `main` — the workflow will build and deploy automatically.
5. Your site will be live at `https://<your-username>.github.io/<repo-name>/`.

### Local development

```bash
npm install
npm run dev
```

### Build

```bash
npm run build
```

Output is in `dist/`.
