import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import config from '@config';
import favicon from '@images/favicons/favicon.ico';
import ogImage from '@images/og.png';

import icon72x72 from '@images/favicons/72x72.png';
import icon96x96 from '@images/favicons/96x96.png';
import icon128x128 from '@images/favicons/128x128.png';
import icon144x144 from '@images/favicons/144x144.png';
import icon152x152 from '@images/favicons/152x152.png';
import icon192x192 from '@images/favicons/192x192.png';
import icon384x384 from '@images/favicons/384x384.png';
import icon512x512 from '@images/favicons/512x512.png';

const Head = ({ metadata }) => (
  <Helmet>
    <html lang="en" prefix="og: http://ogp.me/ns#" />
    <title itemProp="name" lang="en">
      {metadata.title}
    </title>
    <link rel="shortcut icon" href={favicon} />
    {/* <link rel="canonical" href="https://brittanychiang.com" /> */}

    <meta name="description" content={metadata.description} />
    <meta name="keywords" content={config.siteKeywords} />
    <meta name="google-site-verification" content={config.googleVerification} />
    <meta property="og:title" content={metadata.title} />
    <meta property="og:description" content={metadata.description} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={metadata.siteUrl} />
    <meta property="og:site_name" content={metadata.title} />
    <meta property="og:image" content={`${config.siteUrl}${ogImage}`} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:locale" content={config.siteLanguage} />
    <meta itemProp="name" content={metadata.title} />
    <meta itemProp="description" content={metadata.description} />
    <meta itemProp="image" content={`${config.siteUrl}${ogImage}`} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content={metadata.siteUrl} />
    <meta name="twitter:site" content={config.twitterHandle} />
    <meta name="twitter:creator" content={config.twitterHandle} />
    <meta name="twitter:title" content={metadata.title} />
    <meta name="twitter:description" content={metadata.description} />
    <meta name="twitter:image" content={`${config.siteUrl}${ogImage}`} />
    <meta name="twitter:image:alt" content={metadata.title} />

    <link rel="apple-touch-icon" sizes="72x72" href={icon72x72} />
    <link rel="apple-touch-icon" sizes="128x128" href={icon128x128} />
    <link rel="apple-touch-icon" sizes="144x144" href={icon144x144} />
    <link rel="apple-touch-icon" sizes="152x152" href={icon152x152} />
    <link rel="icon" type="image/png" sizes="192x192" href={icon192x192} />
    <link rel="icon" type="image/png" sizes="96x96" href={icon96x96} />
    <link rel="icon" type="image/png" sizes="384x384" href={icon384x384} />
    <link rel="icon" type="image/png" sizes="512x512" href={icon512x512} />
    <meta name="msapplication-TileColor" content={config.navyColor} />
    <meta name="theme-color" content={config.navyColor} />
  </Helmet>
);

export default Head;

Head.propTypes = {
  metadata: PropTypes.object.isRequired,
};
