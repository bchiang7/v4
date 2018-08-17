module.exports = {
  siteMetadata: {
    title: 'V4',
    siteUrl: `https://brittanychiang.com`,
    description: `Description TBD`,
    email: `brittany.chiang@gmail.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        displayName: true,
      },
    },
  ],
};
