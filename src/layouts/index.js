import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import config from '../config';

import Loader from '../components/loader';
import Header from '../components/header';
import Social from '../components/social';
import Email from '../components/email';
import Footer from '../components/footer';

class Layout extends Component {
  render() {
    const { children, data } = this.props;
    const navLinks = data.nav.edges[0].node.frontmatter.links;

    return (
      <div id="root">
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />

        <Loader />

        <Header navLinks={navLinks} />

        <Social />
        <Email email={config.email} />

        {children()}
        <Footer />
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.func,
  data: PropTypes.object,
};

export default Layout;

/* eslint no-undef: off */
export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        siteUrl
        description
      }
    }
    nav: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/nav/" } }) {
      edges {
        node {
          frontmatter {
            title
            linkTitles
            links
          }
        }
      }
    }
  }
`;
