import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: html }} />

        <h3>Tags:</h3>
        <ul>
          {frontmatter.tags.length > 0 && frontmatter.tags.map(tag => <li key={tag}>{tag}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default Template;

Template.propTypes = {
  data: PropTypes.object,
};

export const pageQuery = graphql`
  query($slug: String) {
    markdownRemark(
      fileAbsolutePath: { regex: "/posts/" }
      frontmatter: { slug: { eq: $slug }, draft: { ne: true } }
    ) {
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
