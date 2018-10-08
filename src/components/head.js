import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import config from '../config';

import logo from '../images/logo.png';
import appleIcon57x57 from '../images/favicons/apple-icon-57x57.png';
import appleIcon60x60 from '../images/favicons/apple-icon-60x60.png';
import appleIcon72x72 from '../images/favicons/apple-icon-72x72.png';
import appleIcon76x76 from '../images/favicons/apple-icon-76x76.png';
import appleIcon114x114 from '../images/favicons/apple-icon-114x114.png';
import appleIcon120x120 from '../images/favicons/apple-icon-120x120.png';
import appleIcon144x144 from '../images/favicons/apple-icon-144x144.png';
import appleIcon152x152 from '../images/favicons/apple-icon-152x152.png';
import appleIcon180x180 from '../images/favicons/apple-icon-180x180.png';
import androidIcon192x192 from '../images/favicons/android-icon-192x192.png';
import favicon32x32 from '../images/favicons/favicon-32x32.png';
import favicon96x96 from '../images/favicons/favicon-96x96.png';
import favicon16x16 from '../images/favicons/favicon-16x16.png';
import msIcon144x144 from '../images/favicons/ms-icon-144x144.png';

const Head = ({ metaData }) => (
  <Helmet>
    <html lang="en" prefix="og: http://ogp.me/ns#" />
    <title itemProp="name" lang="en">
      {metaData.title}
    </title>
    <link rel="icon" type="image/png" href={logo} />
    <meta name="description" content={metaData.description} />
    <meta name="keywords" content={config.siteKeywords} />
    <meta name="google-site-verification" content={config.googleVerification} />
    <meta property="og:title" content={metaData.title} />
    <meta property="og:description" content={metaData.description} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={metaData.siteUrl} />
    <meta property="og:site_name" content={metaData.title} />
    <meta property="og:image" content={config.siteImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:locale" content={config.siteLanguage} />
    <meta itemProp="name" content={metaData.title} />
    <meta itemProp="description" content={metaData.description} />
    <meta itemProp="image" content={config.siteImage} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content={metaData.siteUrl} />
    <meta name="twitter:site" content={config.twitterHandle} />
    <meta name="twitter:creator" content={config.twitterHandle} />
    <meta name="twitter:title" content={metaData.title} />
    <meta name="twitter:description" content={metaData.description} />
    <meta name="twitter:image:src" content={config.siteImage} />
    <meta name="twitter:image:alt" content={metaData.title} />

    <link rel="apple-touch-icon" sizes="57x57" href={appleIcon57x57} />
    <link rel="apple-touch-icon" sizes="60x60" href={appleIcon60x60} />
    <link rel="apple-touch-icon" sizes="72x72" href={appleIcon72x72} />
    <link rel="apple-touch-icon" sizes="76x76" href={appleIcon76x76} />
    <link rel="apple-touch-icon" sizes="114x114" href={appleIcon114x114} />
    <link rel="apple-touch-icon" sizes="120x120" href={appleIcon120x120} />
    <link rel="apple-touch-icon" sizes="144x144" href={appleIcon144x144} />
    <link rel="apple-touch-icon" sizes="152x152" href={appleIcon152x152} />
    <link rel="apple-touch-icon" sizes="180x180" href={appleIcon180x180} />
    <link rel="icon" type="image/png" sizes="192x192" href={androidIcon192x192} />
    <link rel="icon" type="image/png" sizes="32x32" href={favicon32x32} />
    <link rel="icon" type="image/png" sizes="96x96" href={favicon96x96} />
    <link rel="icon" type="image/png" sizes="16x16" href={favicon16x16} />
    <meta name="msapplication-TileColor" content={config.navyColor} />
    <meta name="msapplication-TileImage" content={msIcon144x144} />
    <meta name="theme-color" content={config.navyColor} />
  </Helmet>
);

export default Head;

Head.propTypes = {
  metaData: PropTypes.object.isRequired,
};
