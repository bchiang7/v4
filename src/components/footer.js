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

const StyledContainer = styled.footer`
  ${mixins.flexCenter};
  flex-direction: column;
  padding: 15px;
  background-color: ${colors.darkNavy};
  color: ${colors.slate};
  text-align: center;
  height: auto;
  min-height: 70px;
`;
const StyledSocial = styled.div`
  color: ${colors.lightSlate};
  width: 100%;
  max-width: 270px;
  margin: 0 auto 10px;
  display: none;
  ${media.tablet`display: block;`};
`;
const StyledSocialList = styled.ul`
  ${mixins.flexBetween};
`;
const StyledSocialLink = styled.a`
  padding: 10px;
  svg {
    width: 20px;
    height: 20px;
  }
`;
const StyledMetadata = styled.div`
  margin: 10px 0;
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.xsmall};
  line-height: 1;
`;
const StyledGithubLink = styled.a`
  color: ${colors.slate};
`;
const StyledGithubInfo = styled.div`
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
  <StyledContainer>
    <StyledSocial>
      <StyledSocialList>
        {socialMedia &&
          socialMedia.map(({ name, url }, i) => (
            <li key={i}>
              <StyledSocialLink
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
              </StyledSocialLink>
            </li>
          ))}
      </StyledSocialList>
    </StyledSocial>
    <StyledMetadata>
      <StyledGithubLink
        href="https://github.com/bchiang7/v4"
        target="_blank"
        rel="nofollow noopener noreferrer">
        <div>Designed &amp; Built by Brittany Chiang</div>

        {githubInfo.stars && githubInfo.forks && (
          <StyledGithubInfo>
            <span>
              <IconStar />
              <span>{githubInfo.stars}</span>
            </span>
            <span>
              <IconFork />
              <span>{githubInfo.forks}</span>
            </span>
          </StyledGithubInfo>
        )}
      </StyledGithubLink>
    </StyledMetadata>
  </StyledContainer>
);

Footer.propTypes = {
  githubInfo: PropTypes.object,
};

export default Footer;
