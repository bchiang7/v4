import React from 'react'
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  RedditShareButton,
  RedditIcon
} from 'react-share'
export const ShareButtons = ({ twitterHandle, url, title, tags }) => (
  <div>
    <FacebookShareButton url={url}>
      <FacebookIcon />
    </FacebookShareButton>

    <TwitterShareButton url={url} title={title} via={twitterHandle} hashtags={tags}>
      <TwitterIcon />
    </TwitterShareButton>

    <LinkedinShareButton url={url}>
      <LinkedinIcon />
    </LinkedinShareButton>

    <RedditShareButton url={url} title={title}>
      <RedditIcon />
    </RedditShareButton>

    <WhatsappShareButton url={url} title={title}>
      <WhatsappIcon />
    </WhatsappShareButton>
  </div>
)

export default ShareButtons