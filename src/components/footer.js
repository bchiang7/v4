import React from 'react';

import { socialMedia } from '../config';

import { IconGithub, IconLinkedin, IconCodepen, IconInstagram, IconTwitter } from './icons';

import styled from 'styled-components';
import { theme, mixins, media, A, P, Ul } from '../styles';

const FooterContainer = styled.footer`
  ${mixins.flexCenter};
  flex-direction: column;
  padding: 15px;
  background-color: ${theme.colors.darkNavy};
  color: ${theme.colors.slate};
  text-align: center;
  height: auto;
`;
const SocialContainer = styled.div`
  color: ${theme.colors.lightSlate};
  width: 100%;
  max-width: 270px;
  margin: 0 auto 10px;
  display: none;
  ${media.tablet`display: block;`};
`;
const SocialItemList = styled(Ul)`
  ${mixins.flexBetween};
`;
const SocialItem = styled.li``;
const SocialLink = styled(A)`
  padding: 10px;
  svg {
    width: 20px;
    height: 20px;
  }
`;
const Copy = styled(P)`
  margin: 5px 0 3px;
`;
const GithubLink = styled(A)`
  ${mixins.link};
  color: ${theme.colors.slate};
  font-family: ${theme.fonts.SFMono};
  font-size: ${theme.fontSizes.xsmall};
`;

const Footer = () => (
  <FooterContainer>
    <SocialContainer>
      <SocialItemList>
        {socialMedia &&
          socialMedia.map(({ name, url }, i) => (
            <SocialItem key={i}>
              <SocialLink
                href={url}
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label={name}>
                {name === 'Github' ? (
                  <IconGithub />
                ) : name === 'Linkedin' ? (
                  <IconLinkedin />
                ) : name === 'Codepen' ? (
                  <IconCodepen />
                ) : name === 'Instagram' ? (
                  <IconInstagram />
                ) : name === 'Twitter' ? (
                  <IconTwitter />
                ) : (
                  <IconGithub />
                )}
              </SocialLink>
            </SocialItem>
          ))}
      </SocialItemList>
    </SocialContainer>
    <Copy>
      <GithubLink
        href="https://github.com/bchiang7/v4"
        target="_blank"
        rel="nofollow noopener noreferrer">
        Designed &amp; Built by Brittany Chiang
      </GithubLink>
    </Copy>
  </FooterContainer>
);

export default Footer;
