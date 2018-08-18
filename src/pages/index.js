import React from 'react';
import PropTypes from 'prop-types';

import Hero from '../components/hero';
import About from '../components/about';
import Jobs from '../components/jobs';
import Featured from '../components/featured';
import Projects from '../components/projects';
import Contact from '../components/contact';

import { Main } from '../style';

const MainContainer = Main.extend`
  padding: 0 150px;
  counter-reset: section;
`;

const IndexPage = ({ data }) => (
  <MainContainer>
    <Hero />
    <About />
    <Jobs />
    <Featured featured={data.featured.edges} />
    <Projects projects={data.projects.edges} />
    <Contact />
  </MainContainer>
);

IndexPage.propTypes = {
  data: PropTypes.object,
};

export default IndexPage;

/* eslint no-undef: off */
export const query = graphql`
  query IndexQuery {
    featured: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/featured/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            date(formatString: "MM.DD.YYYY")
            title
            image
            tech
            github
            external
          }
          html
        }
      }
    }
    projects: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/projects/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            date(formatString: "MM.DD.YYYY")
            title
            image
            tech
            github
            external
          }
          html
        }
      }
    }
  }
`;
