/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

import { resolve as _resolve } from 'path';
import { kebabCase } from 'lodash';

export async function createPages({ actions, graphql, reporter }) {
  const { createPage } = actions;
  const postTemplate = _resolve(`src/templates/post.js`);
  const tagTemplate = _resolve('src/templates/tag.js');

  const result = await graphql(`
    {
      postsRemark: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/posts/" } }
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
      tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  // Create post detail pages
  const posts = result.data.postsRemark.edges;

  posts.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: postTemplate,
      context: {},
    });
  });

  // Extract tag data from query
  const tags = result.data.tagsGroup.group;
  // Make tag pages
  tags.forEach(tag => {
    createPage({
      path: `/pensieve/tags/${kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    });
  });
}

// https://www.gatsbyjs.org/docs/node-apis/#onCreateWebpackConfig
export function onCreateWebpackConfig({ stage, loaders, actions }) {
  // https://www.gatsbyjs.org/docs/debugging-html-builds/#fixing-third-party-modules
  if (stage === 'build-html' || stage === 'develop-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /scrollreveal/,
            use: loaders.null(),
          },
          {
            test: /animejs/,
            use: loaders.null(),
          },
          {
            test: /miniraf/,
            use: loaders.null(),
          },
        ],
      },
    });
  }

  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': _resolve(__dirname, 'src/components'),
        '@config': _resolve(__dirname, 'src/config'),
        '@fonts': _resolve(__dirname, 'src/fonts'),
        '@hooks': _resolve(__dirname, 'src/hooks'),
        '@images': _resolve(__dirname, 'src/images'),
        '@pages': _resolve(__dirname, 'src/pages'),
        '@styles': _resolve(__dirname, 'src/styles'),
        '@utils': _resolve(__dirname, 'src/utils'),
      },
    },
  });
}
