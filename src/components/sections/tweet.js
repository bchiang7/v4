/*

To embed tweets, the react-twitter-embed package is used. In the below code, simply add the TwitterTweetEmbed element and tweets will be displayed.

The tweets are shown left-to-right top-to-bottom in 3 columns on desktop and 1 column on mobile.

*/

import React from 'react';
import { TwitterTweetEmbed } from 'react-twitter-embed';

export default function TwitterTweets() {
  return (
    <div>
      <ul
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          listStyleType: 'none',
          justifyContent: 'center',
          columnGap: '10px',
        }}>
        <TwitterTweetEmbed tweetId={'1539670459142537216'} />

        <TwitterTweetEmbed tweetId={'1540022171149701120'} />

        <TwitterTweetEmbed tweetId={'1536600005884391424'} />

        <TwitterTweetEmbed tweetId={'1538976281844662272'} />
      </ul>
    </div>
  );
}
