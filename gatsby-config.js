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
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'projects',
        path: `${__dirname}/src/content/hero`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'projects',
        path: `${__dirname}/src/content/about`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'jobs',
        path: `${__dirname}/src/content/jobs`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'featured',
        path: `${__dirname}/src/content/featured`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'projects',
        path: `${__dirname}/src/content/projects`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'projects',
        path: `${__dirname}/src/content/contact`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow noopener noreferrer',
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        displayName: true,
      },
    },
  ],
};
