# Bijay Subedi Portfolio

Production-ready Gatsby portfolio focused on client project contributions, engineering impact, and resume-aligned experience.

## Overview

This portfolio highlights:

- Client projects contributed to: **Helios**, **Quoting**, **AListEngine**
- Software engineering experience and skills from the latest resume
- Search across portfolio content (About, Experience, Featured Work, Pensieve)
- Resume download and responsive, sticky navigation

## Tech Stack

- Gatsby 3
- React 17
- Styled Components
- GraphQL (Gatsby data layer)
- Markdown-driven content (`content/`)

## Project Structure

- `src/components/sections/` - Homepage sections (`hero`, `about`, `jobs`, `featured`, `contact`)
- `content/featured/` - Featured client projects shown in “Client Projects I’ve Contributed To”
- `content/jobs/` - Experience timeline content
- `static/resume.pdf` - Resume file opened by the Resume button
- `src/components/global-search.js` - Global search index + modal

## Run Locally

1. Install dependencies

```bash
npm install
```

2. Start development server

```bash
npm start
```

3. Build for production

```bash
npm run build
```

4. Serve production build locally

```bash
npm run serve
```

## Content Editing

### Featured projects

Edit markdown files:

- `content/featured/Helios/index.md`
- `content/featured/Quoting/index.md`
- `content/featured/AListEngine/index.md`

Each file supports fields like:

- `title`, `cover`, `external`, `tech`
- `domain`, `role`
- `projectTypes`, `estimationInputs`, `workflow`, `outcomes`

### Experience

Edit:

- `content/jobs/Upstatement/index.md`
- `content/jobs/Apple/index.md`

### About & skills

Edit:

- `src/components/sections/about.js`

### Resume file

Replace:

- `static/resume.pdf`

## Deploy to GitHub Pages (Free)

This repo is already prepared for GitHub Pages deployment.

### Local deploy command

Use your values below:

```bash
GH_PAGES_REPO=YOUR_REPO_NAME \
GATSBY_SITE_URL=https://YOUR_GITHUB_USERNAME.github.io \
npm run deploy
```

### GitHub settings (one-time)

1. Push code to GitHub.
2. Open repository **Settings -> Pages**.
3. Source: **Deploy from a branch**.
4. Branch: **gh-pages** / **root**.
5. Save.

Your site URL will be:

- `https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPO_NAME/`

If repo name is `YOUR_GITHUB_USERNAME.github.io`, run:

```bash
GATSBY_SITE_URL=https://YOUR_GITHUB_USERNAME.github.io npm run deploy
```

## Notes

- Archive is intentionally cleared for irrelevant legacy projects.
- Search index is focused on current portfolio-relevant content.
- Build may show non-blocking warnings from older Gatsby ecosystem packages.
