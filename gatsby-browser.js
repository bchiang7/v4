/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

exports.onRouteUpdate = ({ location }) => {
  if (location.hash) {
    const id = location.hash.substring(1); // location.hash without the '#'
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView();
    }
  }
};
