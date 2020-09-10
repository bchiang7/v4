import React from 'react';
import { Link, graphql } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout, Head } from '@components';

const StyledTagsContainer = styled.main`
  max-width: 1000px;

  h1 {
    margin-bottom: 50px;
  }
  ul {
    color: ${({ theme }) => theme.colors.lightSlate};

    li {
      font-size: ${({ theme }) => theme.fontSizes.xxl};

      a {
        color: ${({ theme }) => theme.colors.lightSlate};

        .count {
          color: ${({ theme }) => theme.colors.slate};
          font-family: ${({ theme }) => theme.fonts.SFMono};
          font-size: ${({ theme }) => theme.fontSizes.md};
        }
      }
    }
  }
`;

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
  },
  location,
}) => (
  <Layout location={location}>
    <Head title="Tags" />

    <StyledTagsContainer>
      <span className="breadcrumb">
        <span className="arrow">&larr;</span>
        <Link to="/pensieve">All memories</Link>
      </span>

      <h1>Tags</h1>
      <ul className="fancy-list">
        {group.map(tag => (
          <li key={tag.fieldValue}>
            <Link to={`/pensieve/tags/${kebabCase(tag.fieldValue)}/`} className="inline-link">
              {tag.fieldValue} <span className="count">({tag.totalCount})</span>
            </Link>
          </li>
        ))}
      </ul>
    </StyledTagsContainer>
  </Layout>
);

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired,
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
  location: PropTypes.object,
};

export default TagsPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(limit: 2000, filter: { frontmatter: { draft: { ne: true } } }) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
