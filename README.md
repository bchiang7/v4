<div align="center">
  <img alt="Logo" src="src/images/logo.png" width="100" />
</div>
<h1 align="center">
  tobi-omorubore.dev
</h1>
<p align="center">
  My personal site and portfolio — built with <a href="https://www.gatsbyjs.com/" target="_blank">Gatsby</a>, hosted on <a href="https://www.netlify.com/" target="_blank">Netlify</a>.
</p>
<p align="center">
  <a href="https://tobi-omorubore.dev" target="_blank"><strong>tobi-omorubore.dev</strong></a>
</p>

## Credit where it is due

This site is adapted from [**brittanychiang.com v4**](https://github.com/bchiang7/v4) by
[Brittany Chiang](https://brittanychiang.com), used under the MIT licence and with the
attribution she asks for. The design and the original build are hers. The content, the
projects and the writing are mine.

If you are here because you want to do the same: she allows it, and asks only that you
credit her and link back. Please do that rather than passing the work off as your own.

## Running it locally

The Node version is pinned in `.nvmrc`.

```sh
nvm install          # reads .nvmrc
yarn install
yarn develop         # http://localhost:8000
```

GraphQL explorer for the data layer: <http://localhost:8000/___graphql>

## Building for production

```sh
yarn build           # static build into ./public
yarn serve           # preview that build on http://localhost:9000
```

Other scripts:

| script        | what it does                                        |
| ------------- | --------------------------------------------------- |
| `yarn format` | Prettier over `js`, `jsx`, `json`, `md`             |
| `yarn clean`  | clears the Gatsby `.cache` and `public` directories |

A `pre-commit` hook runs Prettier and ESLint over staged files via `husky` and
`lint-staged`.

## Where the content lives

Page content is Markdown under `content/`, read at build time by
`gatsby-source-filesystem`:

| directory           | what it holds                                      |
| ------------------- | -------------------------------------------------- |
| `content/jobs/`     | roles in the experience section, ordered by `date` |
| `content/featured/` | the large project cards, ordered by `date`         |
| `content/projects/` | the smaller "noteworthy projects" grid             |
| `content/posts/`    | blog posts, served under `/pensieve`               |

Each entry is an `index.md` with frontmatter. Adding one is a new folder, not a code
change.

## Colour reference

| Colour         | Hex                                                                |
| -------------- | ------------------------------------------------------------------ |
| Navy           | ![#0a192f](https://via.placeholder.com/10/0a192f?text=+) `#0a192f` |
| Light Navy     | ![#112240](https://via.placeholder.com/10/112240?text=+) `#112240` |
| Lightest Navy  | ![#233554](https://via.placeholder.com/10/233554?text=+) `#233554` |
| Slate          | ![#8892b0](https://via.placeholder.com/10/8892b0?text=+) `#8892b0` |
| Light Slate    | ![#a8b2d1](https://via.placeholder.com/10/a8b2d1?text=+) `#a8b2d1` |
| Lightest Slate | ![#ccd6f6](https://via.placeholder.com/10/ccd6f6?text=+) `#ccd6f6` |
| White          | ![#e6f1ff](https://via.placeholder.com/10/e6f1ff?text=+) `#e6f1ff` |
| Green          | ![#64ffda](https://via.placeholder.com/10/64ffda?text=+) `#64ffda` |

## Licence

MIT — see [LICENSE](LICENSE). The copyright notice is Brittany Chiang's and stays, as
the licence requires.
