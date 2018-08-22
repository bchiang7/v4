import React from 'react';
import PropTypes from 'prop-types';

import Hero from '../components/hero';
import About from '../components/about';
import Jobs from '../components/jobs';
import Featured from '../components/featured';
import Projects from '../components/projects';
import Contact from '../components/contact';

import { mixins, Main } from '../style';

const MainContainer = Main.extend`
  ${mixins.padding};
  counter-reset: section;
`;

const IndexPage = ({ data }) => (
  <MainContainer>
    <Hero hero={data.hero.edges} />
    <About about={data.about.edges} />
    <Jobs jobs={data.jobs.edges} />
    <Featured featured={data.featured.edges} />
    <Projects projects={data.projects.edges} />
    <Contact contact={data.contact.edges} />
  </MainContainer>
);

IndexPage.propTypes = {
  data: PropTypes.object,
};

export default IndexPage;

/* eslint no-undef: off */
export const query = graphql`
  query IndexQuery {
    hero: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/hero/" } }) {
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
    about: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/about/" } }) {
      edges {
        node {
          frontmatter {
            title
            avatar {
              childImageSharp {
                sizes(maxWidth: 700, quality: 90, traceSVG: { color: "#64ffda" }) {
                  ...GatsbyImageSharpSizes_withWebp_tracedSVG
                }
              }
            }
            skills
          }
          html
        }
      }
    }
    jobs: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/jobs/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            company
            location
            range
            url
          }
          html
        }
      }
    }
    featured: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/featured/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            cover {
              childImageSharp {
                sizes(maxWidth: 700, quality: 90, traceSVG: { color: "#64ffda" }) {
                  ...GatsbyImageSharpSizes_withWebp_tracedSVG
                }
                resize(width: 500, height: 500) {
                  src
                }
              }
            }
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
    contact: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/contact/" } }) {
      edges {
        node {
          frontmatter {
            title
          }
          html
        }
      }
    }
  }
`;
