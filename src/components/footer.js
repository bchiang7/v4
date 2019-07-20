import React from 'react';
import PropTypes from 'prop-types';
import {
  IconGithub,
  IconLinkedin,
  IconCodepen,
  IconInstagram,
  IconTwitter,
  IconStar,
  IconFork,
} from '@components/icons';
import { socialMedia } from '@config';
import styled from 'styled-components';
import { theme, mixins, media } from '@styles';
const { colors, fontSizes, fonts } = theme;

const FooterContainer = styled.footer`
  ${mixins.flexCenter};
  flex-direction: column;
  padding: 15px;
  background-color: ${colors.primaryColorDark};
  color: ${colors.slate};
  text-align: center;
  height: auto;
  min-height: 70px;
`;
const SocialContainer = styled.div`
  color: ${colors.lightSlate};
  width: 100%;
  max-width: 270px;
  margin: 0 auto 10px;
  display: none;
  ${media.tablet`display: block;`};
`;
const SocialItemList = styled.ul`
  ${mixins.flexBetween};
`;
const SocialLink = styled.a`
  padding: 10px;
  svg {
    width: 20px;
    height: 20px;
  }
`;
const Copy = styled.div`
  ${mixins.flexCenterVertical};
  margin: 10px 0;
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.xsmall};
  line-height: 1;
`;
const GithubLink = styled.a`
  color: ${colors.slate};
`;
const GithubInfo = styled.div`
  margin-top: 10px;

  & > span {
    display: inline-flex;
    align-items: center;
    margin: 0 7px;
  }
  svg {
    display: inline-block;
    height: 15px;
    width: auto;
    margin-right: 5px;
  }
`;

const Footer = ({ githubInfo }) => (
  <FooterContainer>
    <SocialContainer>
      <SocialItemList>
        {socialMedia &&
          socialMedia.map(({ name, url }, i) => (
            <li key={i}>
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
            </li>
          ))}
      </SocialItemList>
    </SocialContainer>
    <Copy>
      <p>Credits</p>
      <GithubLink
        href="https://gatsby-hello-friend.now.sh/"
        target="_blank"
        rel="nofollow noopener noreferrer">
        <div>panr</div>
        {githubInfo.stars && githubInfo.forks && (
          <GithubInfo/>
        )}
      </GithubLink>
      <GithubLink
        href="https://github.com/bchiang7/v4"
        target="_blank"
        rel="nofollow noopener noreferrer">
        <div>Brittany Chiang</div>
        {githubInfo.stars && githubInfo.forks && (
          <GithubInfo/>
        )}
      </GithubLink>
      <GithubLink
        href="https://themes.gohugo.io//theme/hugo-theme-hello-friend-ng/"
        target="_blank"
        rel="nofollow noopener noreferrer">
        <div>rhazdon</div>
        {githubInfo.stars && githubInfo.forks && (
          <GithubInfo/>
        )}
      </GithubLink>

    </Copy>
  </FooterContainer>
);

Footer.propTypes = {
  githubInfo: PropTypes.object,
};

export default Footer;
