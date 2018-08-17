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

// const IndexPage = ({
//   data: {
//     allMarkdownRemark: { edges },
//   },
// }) => (
const IndexPage = () => (
  <MainContainer>
    <Hero />
    <About />
    <Jobs />
    <Featured />
    <Projects />
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            date(formatString: "DD.MM.YYYY")
            title
            tech
          }
        }
      }
    }
  }
`;
