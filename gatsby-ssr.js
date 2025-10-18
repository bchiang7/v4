import React from 'react';
import { Helmet } from 'react-helmet';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <Helmet key="seo">
      <title>Ben Arlanda - Full Stack Engineer</title>
      <meta
        name="description"
        content="Ben Arlanda is a Full Stack Engineer who focuses on building accessible and impactful products."
      />
      <meta property="og:title" content="Ben Arlanda" />
      <meta property="og:description" content="Ben Arlanda is a Full Stack Engineer..." />
      <meta property="og:image" content="https://benarlanda.com/og.png" />
      <meta property="og:url" content="https://benarlanda.com" />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>,
  ]);
};
