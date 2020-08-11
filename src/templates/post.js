import React from 'react';
import { graphql, Link } from 'gatsby';
import Helmet from 'react-helmet';
import kebabCase from 'lodash/kebabCase';
import PropTypes from 'prop-types';
import { Layout } from '@components';
import styled from 'styled-components';
import { Main, theme, mixins } from '@styles';
const { colors, fontSizes } = theme;

const StyledResumeButton = styled.a`
  ${mixins.bigButton};
  margin-left: 10px;
  font-size: ${fontSizes.smish};
`;

const StyledPostContainer = styled(Main)`
  max-width: 1000px;
`;
const StyledPostHeader = styled.header`
  margin-bottom: 50px;
  .tag {
    margin-right: 10px;
  }
`;
const StyledPostContent = styled.div`
  margin-bottom: 100px;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 2em 0 1em;
  }

  p {
    margin: 1em 0;
    line-height: 1.5;
    color: ${colors.lightSlate};
  }
`;

const PostTemplate = ({ data, location }) => 
  //const {   html } = data.markdownRemark;
  //const { title, date, tags } = frontmatter;
  (
    <Layout location={location}>
      <Helmet>
        <title>
          {data &&
          data.markdownRemark &&
          data.markdownRemark.frontmatter &&
          data.markdownRemark.frontmatter.title
            ? data.markdownRemark.frontmatter.title
            : 'Title'}{' '}
          | Hamza AFFANI
        </title>
        <link rel="canonical" href="https://haffani.netlify.com/publications/" />
      </Helmet>

      <StyledPostContainer>
        <span className="breadcrumb">
          <span className="arrow">&larr;</span>
          <Link to="/publications/">All posts</Link>
        </span>

        <StyledPostHeader>
          <h1 className="medium-title">
            {data &&
            data.markdownRemark &&
            data.markdownRemark.frontmatter &&
            data.markdownRemark.frontmatter.title
              ? data.markdownRemark.frontmatter.title
              : 'Title'}
          </h1>
          <p className="subtitle">
            <time>
              {new Date(
                data.markdownRemark && data.markdownRemark.frontmatter.date,
              ).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <span>&nbsp;&mdash;&nbsp;</span>

            {data.markdownRemark &&
              data.markdownRemark.frontmatter &&
              data.markdownRemark.frontmatter.tags &&
              data.markdownRemark.frontmatter.tags.length > 0 &&
              data.markdownRemark.frontmatter.tags.map((tag, i) => (
                <Link key={i} to={`/publications/tags/${kebabCase(tag)}/`} className="tag">
                  #{tag}
                </Link>
              ))}
          </p>
        </StyledPostHeader>

        <StyledPostContent
          dangerouslySetInnerHTML={{ __html: data.markdownRemark && data.markdownRemark.html }}
        />
        {data.markdownRemark &&
          data.markdownRemark.frontmatter &&
          data.markdownRemark.frontmatter.isDocumentExist &&
          data.markdownRemark.frontmatter.img && (
          <StyledResumeButton
            href={`/${data.markdownRemark.frontmatter.img}.pdf`}
            target="_blank"
            rel="nofollow noopener noreferrer">
              See the post
          </StyledResumeButton>
        )}
      </StyledPostContainer>
    </Layout>
  )
;
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
        isDocumentExist
        img
      }
    }
  }
`;
