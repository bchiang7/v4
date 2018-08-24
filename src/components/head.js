import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import config from '../config';

import logo from '../static/logo.png';

const Head = ({ siteMetadata }) => (
  <Helmet>
    <title itemProp="name" lang="en">
      {siteMetadata.title}
    </title>

    <link rel="icon" type="image/png" href={logo} />

    <meta name="description" content={siteMetadata.description} />
    <meta name="keywords" content={config.siteKeywords} />
    <meta name="google-site-verification" content={siteMetadata.googleVerification} />

    <meta property="og:title" content={siteMetadata.title} />
    <meta property="og:description" content={siteMetadata.description} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={siteMetadata.siteUrl} />
    <meta property="og:site_name" content={siteMetadata.title} />
    <meta property="og:image" content={config.siteImage} />
    <meta property="og:image:width" content="1280" />
    <meta property="og:image:height" content="800" />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:locale" content={config.siteLanguage} />

    <meta itemProp="name" content={siteMetadata.title} />
    <meta itemProp="description" content={siteMetadata.description} />
    <meta itemProp="image" content={config.siteImage} />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content={siteMetadata.siteUrl} />
    <meta name="twitter:site" content={config.twitterHandle} />
    <meta name="twitter:creator" content={config.twitterHandle} />
    <meta name="twitter:title" content={siteMetadata.title} />
    <meta name="twitter:description" content={siteMetadata.description} />
    <meta name="twitter:image:src" content={config.siteImage} />
    <meta name="twitter:image:alt" content={siteMetadata.title} />

    <link rel="shortcut icon" sizes="16x16 24x24 32x32 48x48 64x64" href="" />
    <link rel="apple-touch-icon" sizes="57x57" href="" />
    <link rel="apple-touch-icon-precomposed" sizes="57x57" href="" />
    <link rel="apple-touch-icon" sizes="72x72" href="" />
    <link rel="apple-touch-icon" sizes="114x114" href="" />
    <link rel="apple-touch-icon" sizes="120x120" href="" />
    <link rel="apple-touch-icon" sizes="144x144" href="" />
    <link rel="apple-touch-icon" sizes="152x152" href="" />
    <meta name="application-name" content={siteMetadata.title} />
    <meta name="msapplication-TileImage" content="" />
    <meta name="msapplication-TileColor" content="#0a192f" />
  </Helmet>
);

Head.propTypes = {
  siteMetadata: PropTypes.object.isRequired,
};

export default Head;
