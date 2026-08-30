/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// KaTeX styles are served from /static/katex and linked from the post template.
// They are deliberately not imported here: a CSS import routes through Gatsby 3's
// postcss-loader, which fails on Node 17+ ("subpath './package.json' is not defined").
