import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import kebabCase from 'lodash/kebabCase';
import { Layout } from '@components';
import { IconZap } from '@components/icons';
import styled from 'styled-components';
import { theme, mixins, media, Main } from '@styles';
const { colors, fontSizes, fonts } = theme;

const StyledPostContainer = styled(Main)``;
const StyledPostHeader = styled.header`
  margin-bottom: 100px;
`;
const StyledPostContent = styled.div`
  margin-bottom: 100px;
`;

const PostTemplate = ({ data, location }) => {
  const { frontmatter, html } = data.markdownRemark;
  const { title, date, tags } = frontmatter;

  return (
    <Layout location={location}>
      <StyledPostContainer>
        <Link to="/pensieve">Back to all memories</Link>

        <StyledPostHeader>
          <h1>{title}</h1>
          <p className="subtitle">
            <time>
              {new Date(date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <span>&nbsp;&mdash;&nbsp;</span>
            {tags &&
              tags.length > 0 &&
              tags.map((tag, i) => (
                <Link key={i} to={`/pensieve/tags/${kebabCase(tag)}/`}>
                  #{tag}
                </Link>
              ))}
          </p>
        </StyledPostHeader>

        <StyledPostContent dangerouslySetInnerHTML={{ __html: html }} />
      </StyledPostContainer>
    </Layout>
  );
};

export default PostTemplate;

PostTemplate.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object,
};

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { slug: { eq: $path } }) {
      html
      frontmatter {
        title
        description
        date
        slug
        tags
      }
    }
  }
`;
