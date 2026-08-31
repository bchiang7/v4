# Old site redirect

These files belong in the **`szcheng0702/szcheng0702.github.io`** repository, not
this one. They are kept here so the redirect stays version-controlled alongside
the site it points at.

## What they do

`szcheng0702.github.io` used to serve a Jekyll site (academicpages). Its content
now lives at <https://lindsay-cheng.com>, so the old address should send visitors
and search engines to the new one.

| File         | Purpose                                                                                       |
| ------------ | --------------------------------------------------------------------------------------------- |
| `.nojekyll`  | Stops GitHub Pages running Jekyll, so the old pages are no longer generated.                  |
| `index.html` | Redirects the home page to the new site.                                                      |
| `404.html`   | GitHub Pages serves this for any path that no longer exists, so it maps old URLs to new ones. |

Old URLs are mapped to their nearest equivalent:

| Old               | New                               |
| ----------------- | --------------------------------- |
| `/cv/`, `/resume` | `lindsay-cheng.com/#jobs`         |
| `/publications/`  | `lindsay-cheng.com/#publications` |
| `/projects/`      | `lindsay-cheng.com/#projects`     |
| `/miscellaneous/` | `lindsay-cheng.com/misc`          |
| `/year-archive/`  | `lindsay-cheng.com/blog`          |
| anything else     | `lindsay-cheng.com`               |

The `files/` directory in the old repository keeps working untouched, because
`.nojekyll` makes GitHub Pages serve it as plain static files. Links to
`szcheng0702.github.io/files/…` that exist out in the world will not break.

## Installing them

In a checkout of `szcheng0702/szcheng0702.github.io`, on its published branch
(check **Settings → Pages** for which branch that is — likely `master` or
`gh-pages`):

```sh
cp /path/to/old-site-redirect/.nojekyll  .
cp /path/to/old-site-redirect/index.html .
cp /path/to/old-site-redirect/404.html   .
git add .nojekyll index.html 404.html
git commit -m "Redirect to lindsay-cheng.com"
git push
```

Nothing is deleted — the old Jekyll source stays in the repository, it just stops
being built. To undo, delete these three files.

## A caveat on SEO

GitHub Pages cannot issue a real `301 Moved Permanently`; it only serves static
files. `<meta http-equiv="refresh" content="0; …">` plus `<link rel="canonical">`
is the strongest signal available there, and search engines do treat an instant
meta refresh as a permanent redirect — but it is a little weaker than a true 301,
and takes longer to be reflected in rankings.

If that matters, submit the new domain in
[Google Search Console](https://search.google.com/search-console) and use its
Change of Address tool.
