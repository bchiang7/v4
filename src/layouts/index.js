import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Social from '../components/social';
import Email from '../components/email';
import Header from '../components/header';
import Footer from '../components/footer';

import { Main } from '../style';

const MainContainer = Main.extend`
  padding: 0 150px;
  counter-reset: section;
`;

const Layout = ({ children, data }) => (
  <div id="root">
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />

    <Header />

    <Social />
    <Email emailAddress={data.site.siteMetadata.email} />

    <MainContainer>{children()}</MainContainer>

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
        email
      }
    }
  }
`;
