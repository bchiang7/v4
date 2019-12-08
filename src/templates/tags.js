import React from 'react';
import { Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Layout } from '@components';
import styled from 'styled-components';
import { theme, mixins, media, Main } from '@styles';

const StyledTagsContainer = styled(Main)``;

const TagTemplate = ({ pageContext, data, location }) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;
  const tagHeader = `${totalCount} post${totalCount === 1 ? '' : 's'} tagged with "${tag}"`;

  return (
    <Layout location={location}>
      <StyledTagsContainer>
        <Link to="/pensieve/tags">All tags</Link>
        <h1>{tagHeader}</h1>
        <ul>
          {edges.map(({ node }) => {
            const { title, slug } = node.frontmatter;
            return (
              <li key={slug}>
                <Link to={slug}>{title}</Link>
              </li>
            );
          })}
        </ul>
      </StyledTagsContainer>
    </Layout>
  );
};

export default TagTemplate;

TagTemplate.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired,
      ),
    }),
  }),
  location: PropTypes.object,
};

export const pageQuery = graphql`
  query($tag: String!) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`;
