import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import config from '../config';

import Loader from '../components/loader';
import Header from '../components/header';
import Social from '../components/social';
import Email from '../components/email';
import Footer from '../components/footer';

const Layout = ({ children, data }) => (
  <div id="root">
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: data.site.siteMetadata.description },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />

    <Loader />

    <Social />

    <Email email={config.email} />

    <Header />

    {children()}

    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.func,
  data: PropTypes.object,
};

export default Layout;

/* eslint no-undef: off */
export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        siteUrl
        description
      }
    }
  }
`;
