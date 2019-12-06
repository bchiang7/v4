import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Layout } from '@components';
import styled from 'styled-components';
import { Main } from '@styles';

const StyledMainContainer = styled(Main)`
  padding-top: 200px;
`;

const PensievePage = ({ location }) => (
  <Layout location={location}>
    <StyledMainContainer>
      <h1>Not A Blog</h1>
    </StyledMainContainer>
  </Layout>
);

PensievePage.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default PensievePage;

export const pageQuery = graphql`
  {
    pensieve: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/pensieve/" } }) {
      edges {
        node {
          frontmatter {
            title
            name
            subtitle
            contactText
          }
          html
        }
      }
    }
  }
`;
