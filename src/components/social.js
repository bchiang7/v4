import React from 'react';

import config from '../config';

import { IconGithub, IconLinkedin, IconCodepen, IconInstagram, IconTwitter } from './icons';

import styled from 'styled-components';
import { theme, media, A, Ul } from '../style';

const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${theme.colors.lightSlate};
  vertical-align: middle;
  width: 40px;
  position: fixed;
  bottom: 0;
  left: 40px;

  ${media.desktop`left: 25px;`};
  ${media.tablet`display: none;`};

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    background-color: ${theme.colors.lightSlate};
  }
`;
const SocialItemList = Ul.extend`
  margin-bottom: 10px;
`;
const SocialItem = styled.li``;
const SocialLink = A.extend`
  padding: 10px;

  svg {
    width: 18px;
    height: 18px;
  }
`;

// use simple transition instead of scroll reveal to animate in from left

const Social = () => (
  <SocialContainer>
    <SocialItemList>
      {config.socialMedia &&
        config.socialMedia.map((social, i) => (
          <SocialItem key={i}>
            <SocialLink href={social.url} target="_blank" rel="nofollow noopener noreferrer">
              {social.name === 'Github' ? (
                <IconGithub />
              ) : social.name === 'Linkedin' ? (
                <IconLinkedin />
              ) : social.name === 'Codepen' ? (
                <IconCodepen />
              ) : social.name === 'Instagram' ? (
                <IconInstagram />
              ) : social.name === 'Twitter' ? (
                <IconTwitter />
              ) : (
                <IconGithub />
              )}
            </SocialLink>
          </SocialItem>
        ))}
    </SocialItemList>
  </SocialContainer>
);

export default Social;
