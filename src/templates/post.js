import React from 'react';
import { graphql, Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Layout, Comments } from '@components';

const StyledPostContainer = styled.main`
  max-width: 850px;
`;

const StyledPostHeader = styled.header`
  margin-bottom: 40px;

  h1 {
    margin: 0 0 15px;
    line-height: 1.1;
  }

  .post-meta {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px;
    margin: 0;
    color: var(--light-slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
  }

  .post-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 20px;
  }

  .tag {
    padding: 4px 12px;
    border-radius: var(--border-radius);
    background-color: var(--light-navy);
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
    transition: var(--transition);

    &:hover,
    &:focus {
      background-color: var(--lightest-navy);
    }
  }
`;

const StyledToc = styled.details`
  margin-bottom: 50px;
  padding: 15px 25px;
  border: 1px solid var(--lightest-navy);
  border-radius: var(--border-radius);
  background-color: var(--light-navy);

  summary {
    color: var(--lightest-slate);
    font-family: var(--font-mono);
    font-size: var(--fz-sm);
    cursor: pointer;
    outline-offset: 4px;
  }

  &[open] summary {
    margin-bottom: 10px;
  }

  ul {
    padding-left: 20px;
    margin: 0;
    list-style: none;
  }

  > ul {
    padding-left: 0;
  }

  li {
    margin: 6px 0;
  }

  a {
    color: var(--slate);
    font-size: var(--fz-sm);
    line-height: 1.4;

    &:hover,
    &:focus {
      color: var(--green);
    }
  }

  p {
    margin: 0;
  }
`;

const StyledPostContent = styled.div`
  margin-bottom: 60px;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 2em 0 0.8em;
    color: var(--lightest-slate);
    line-height: 1.3;
    scroll-margin-top: 100px;
  }

  h2 {
    font-size: var(--fz-heading);
  }

  p {
    margin: 1em 0;
    line-height: 1.7;
    color: var(--light-slate);
  }

  li {
    line-height: 1.7;
    color: var(--light-slate);
  }

  a {
    ${({ theme }) => theme.mixins.inlineLink};
  }

  blockquote {
    margin: 1.5em 0;
    padding-left: 20px;
    border-left: 2px solid var(--green);
    color: var(--light-slate);
  }

  img {
    max-width: 100%;
    border-radius: var(--border-radius);
  }

  hr {
    margin: 3em 0;
    border: 0;
    border-top: 1px solid var(--lightest-navy);
  }

  table {
    width: 100%;
    margin: 1.5em 0;
    border-collapse: collapse;
    font-size: var(--fz-sm);

    th,
    td {
      padding: 10px;
      border-bottom: 1px solid var(--lightest-navy);
      text-align: left;
      color: var(--light-slate);
    }

    th {
      color: var(--lightest-slate);
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
    }
  }

  code {
    background-color: var(--lightest-navy);
    color: var(--lightest-slate);
    border-radius: var(--border-radius);
    font-size: var(--fz-sm);
    padding: 0.2em 0.4em;
  }

  pre code {
    background-color: transparent;
    padding: 0;
  }

  /* KaTeX display equations scroll rather than overflow the page on mobile. */
  .katex-display {
    overflow-x: auto;
    overflow-y: hidden;
    padding: 4px 0;
  }
`;

const StyledCitation = styled.div`
  margin-bottom: 60px;
  padding: 20px 25px;
  border-left: 2px solid var(--green);
  background-color: var(--light-navy);
  color: var(--slate);
  font-size: var(--fz-sm);
  line-height: 1.6;

  .citation-label {
    margin: 0 0 10px;
    color: var(--lightest-slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
  }

  pre {
    margin: 0;
    padding: 0;
    background: transparent;
    color: var(--light-slate);
    font-size: var(--fz-xs);
    white-space: pre-wrap;
    word-break: break-word;
  }
`;

const StyledPagination = styled.nav`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 60px;
  padding-top: 30px;
  border-top: 1px solid var(--lightest-navy);

  a {
    max-width: 45%;
    color: var(--slate);
    font-size: var(--fz-sm);
    line-height: 1.4;

    &:hover,
    &:focus {
      color: var(--green);
    }
  }

  .direction {
    display: block;
    margin-bottom: 4px;
    color: var(--light-slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
  }

  .next {
    margin-left: auto;
    text-align: right;
  }
`;

const PostTemplate = ({ data, location, pageContext }) => {
  const { frontmatter, html, tableOfContents, timeToRead } = data.markdownRemark;
  const { title, date, tags, slug } = frontmatter;
  const { older, newer } = pageContext;

  const siteUrl = data.site.siteMetadata.siteUrl;
  const author = data.site.siteMetadata.title;
  const year = new Date(date).getFullYear();
  const postUrl = `${siteUrl}${slug}`;

  const citation = `@article{cheng${year}${kebabCase(title).replace(/-/g, '')},
  title   = "${title}",
  author  = "${author}",
  journal = "${author}'s blog",
  year    = "${year}",
  url     = "${postUrl}"
}`;

  return (
    <Layout location={location}>
      <Helmet title={title}>
        <meta name="description" content={frontmatter.description} />
        {/* Styles for LaTeX math rendered at build time by gatsby-remark-katex. */}
        <link rel="stylesheet" href="/katex/katex.min.css" />
      </Helmet>

      <StyledPostContainer>
        <span className="breadcrumb">
          <span className="arrow">&larr;</span>
          <Link to="/blog">All posts</Link>
        </span>

        <StyledPostHeader>
          <h1 className="medium-heading">{title}</h1>

          <p className="post-meta">
            <time dateTime={date}>
              {new Date(date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            {timeToRead && <span>&middot; {timeToRead} min read</span>}
          </p>

          {tags && tags.length > 0 && (
            <div className="post-tags">
              {tags.map((tag, i) => (
                <Link key={i} to={`/blog/tags/${kebabCase(tag)}/`} className="tag">
                  #{tag}
                </Link>
              ))}
            </div>
          )}
        </StyledPostHeader>

        {tableOfContents && (
          <StyledToc open>
            <summary>Table of Contents</summary>
            <div dangerouslySetInnerHTML={{ __html: tableOfContents }} />
          </StyledToc>
        )}

        <StyledPostContent dangerouslySetInnerHTML={{ __html: html }} />

        <StyledCitation>
          <p className="citation-label">Cited as:</p>
          <pre>{citation}</pre>
        </StyledCitation>

        {(older || newer) && (
          <StyledPagination aria-label="Post navigation">
            {older && (
              <Link to={older.slug} className="prev">
                <span className="direction">&larr; Previous</span>
                {older.title}
              </Link>
            )}
            {newer && (
              <Link to={newer.slug} className="next">
                <span className="direction">Next &rarr;</span>
                {newer.title}
              </Link>
            )}
          </StyledPagination>
        )}

        <Comments />
      </StyledPostContainer>
    </Layout>
  );
};

export default PostTemplate;

PostTemplate.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object,
  pageContext: PropTypes.object,
};

export const pageQuery = graphql`
  query($path: String!) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    markdownRemark(frontmatter: { slug: { eq: $path } }) {
      html
      tableOfContents(absolute: false, maxDepth: 3)
      timeToRead
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
