# Lindsay Cheng — Personal Website

Personal site and blog, built with [Gatsby](https://www.gatsbyjs.org/) and hosted as a static site.

Design based on [v4 by Brittany Chiang](https://github.com/bchiang7/v4) (MIT).

## Running locally

```sh
nvm use          # Node 18 (see .nvmrc)
yarn install
yarn develop     # http://localhost:8000
```

Other commands:

| Command       | What it does                                   |
| ------------- | ---------------------------------------------- |
| `yarn build`  | Production build into `public/`                |
| `yarn serve`  | Serve the production build locally             |
| `yarn clean`  | Clear the Gatsby cache (fixes most odd errors) |
| `yarn format` | Run Prettier over the source                   |

> **Note on Node versions.** Gatsby 3 uses webpack's md4 hashing, which OpenSSL 3
> (Node 17+) rejects. `yarn build` and `yarn develop` set
> `NODE_OPTIONS=--openssl-legacy-provider` for you, so modern Node works.

## Where the content lives

Almost everything on the site is markdown under `content/` — you shouldn't need to
touch React to update the site.

| Path                    | Shows up as                               |
| ----------------------- | ----------------------------------------- |
| `content/jobs/`         | The "Where I've Worked" tabs              |
| `content/projects/`     | The "Things I've Built" grid + `/archive` |
| `content/publications/` | The "Publications" section                |
| `content/posts/`        | Blog posts at `/blog`                     |

Name, email, social links, nav items and the giscus settings live in
[`src/config.js`](src/config.js). Site title, description and URL live in
[`gatsby-config.js`](gatsby-config.js).

### Adding a blog post

Create `content/posts/<some-folder>/index.md`:

```markdown
---
title: The title of the post
description: One line, used for previews and SEO
date: 2026-09-01
draft: false
slug: /blog/the-title-of-the-post
tags:
  - Agents
  - Evaluation
---

Your post body.
```

Set `draft: true` to keep a post out of the build. Images can sit next to the
`index.md` and be referenced relatively (`![alt](./diagram.png)`).

Posts support **LaTeX math** — `$inline$` and `$$display$$` — rendered at build
time by KaTeX, and syntax-highlighted code fences. Each post automatically gets a
table of contents, a reading-time estimate, tags, a citation block, previous/next
links, and a comment thread.

## Blog comments

Comments use [giscus](https://giscus.app), which stores each thread as a
[GitHub Discussion](https://docs.github.com/en/discussions) on this repository.
No database, no ads, no tracking — and you moderate from GitHub. Commenters sign
in with a GitHub account.

Until it's configured, posts show a short placeholder instead of the comment box.
To turn it on:

1. **Make sure this repository is public.** Giscus can only read discussions on
   public repos.
2. **Enable Discussions:** repository _Settings_ → _General_ → _Features_ → tick
   **Discussions**.
3. **Install the giscus app** on this repository:
   <https://github.com/apps/giscus>.
4. **Get your IDs.** Go to <https://giscus.app>, enter `szcheng0702/v4-personal-website`
   in the repository field, pick _Discussion title contains page pathname_ as the
   page↔discussion mapping, and choose a discussion category (the
   **Announcements** category is a good choice — only maintainers can create
   threads in it, so nobody can pre-create one). The page then shows a snippet
   containing `data-repo-id` and `data-category-id`.
5. **Paste them into `src/config.js`:**

   ```js
   giscus: {
     repo: 'szcheng0702/v4-personal-website',
     repoId: 'R_kgDO...',        // from giscus.app
     category: 'Announcements',
     categoryId: 'DIC_kwDO...',  // from giscus.app
     ...
   },
   ```

6. Rebuild. The comment box appears at the bottom of every post.

Those two IDs are public identifiers, not secrets — it's fine to commit them.

To moderate, open the repository's **Discussions** tab: you can edit, delete,
hide or lock any thread there, and deletions are reflected on the site.

### Using a different comment provider

Comments are isolated in [`src/components/comments.js`](src/components/comments.js)
and rendered once at the bottom of `src/templates/post.js`. Swapping giscus for
Disqus, utterances or anything else means changing that one file. Disqus is worth
considering if you'd rather not require commenters to have a GitHub account — the
trade-off is ads and third-party tracking on the free tier.

## Deploying (Cloudflare Pages)

`yarn build` outputs a static site to `public/`. The site is deployed with
[Cloudflare Pages](https://developers.cloudflare.com/pages/), which watches this
repository and rebuilds on every push.

### One-time setup

1. Sign in at [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers &
   Pages** → **Create** → **Pages** → **Connect to Git**, and pick this
   repository.
2. Set the build settings:

   | Setting                | Value        |
   | ---------------------- | ------------ |
   | Framework preset       | Gatsby       |
   | Build command          | `yarn build` |
   | Build output directory | `public`     |

3. Add these environment variables (**Settings** → **Environment variables**),
   for both Production and Preview:

   | Variable       | Value                     | Why                                                                     |
   | -------------- | ------------------------- | ----------------------------------------------------------------------- |
   | `NODE_VERSION` | `18.20.4`                 | Matches `.nvmrc`; Gatsby 3 does not build on very new Node.             |
   | `SITE_URL`     | `https://your-domain.com` | Canonical URLs, sitemap, robots.txt, post citations. No trailing slash. |

4. Deploy. Every push to `main` publishes production; every other branch and
   pull request gets its own preview URL.

`static/_headers` sets security and caching headers; Cloudflare Pages picks it
up automatically from the build output.

### Custom domain

Cloudflare Pages gives you a `*.pages.dev` URL for free. To use your own domain:

1. Buy the domain — [Cloudflare Registrar](https://developers.cloudflare.com/registrar/)
   sells at wholesale cost with free WHOIS privacy, and skips the DNS step below
   since the domain is already on Cloudflare. Any other registrar works too; you
   then point its nameservers at Cloudflare.
2. In your Pages project: **Custom domains** → **Set up a domain** → enter the
   domain. Cloudflare adds the DNS record itself when the domain is on your
   account, and issues the TLS certificate automatically.
3. Update `SITE_URL` to the new domain and redeploy, so canonical URLs and the
   sitemap stop pointing at the old address.

If you keep the old GitHub Pages site at `szcheng0702.github.io`, add a redirect
there pointing at the new domain, so existing links and search rankings follow.

## License

MIT — see [LICENSE](LICENSE).
