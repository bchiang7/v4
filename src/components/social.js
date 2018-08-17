import React from 'react';

import { IconGithub, IconLinkedin, IconCodepen, IconInstagram, IconTwitter } from './icons';

import styled from 'styled-components';
import { theme, A, Ul } from '../style';

const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${theme.colors.lightSlate};
  position: fixed;
  bottom: 0;
  left: 40px;

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

const Social = () => (
  <SocialContainer>
    <SocialItemList>
      <SocialItem>
        <SocialLink href="https://github.com/bchiang7" target="_blank" rel="noopener">
          <IconGithub />
        </SocialLink>
      </SocialItem>
      <SocialItem>
        <SocialLink href="https://www.linkedin.com/in/bchiang7/" target="_blank" rel="noopener">
          <IconLinkedin />
        </SocialLink>
      </SocialItem>
      <SocialItem>
        <SocialLink href="https://codepen.io/bchiang7/" target="_blank" rel="noopener">
          <IconCodepen />
        </SocialLink>
      </SocialItem>
      <SocialItem>
        <SocialLink href="https://www.instagram.com/bchiang7/" target="_blank" rel="noopener">
          <IconInstagram />
        </SocialLink>
      </SocialItem>
      <SocialItem>
        <SocialLink href="https://twitter.com/bchiang7" target="_blank" rel="noopener">
          <IconTwitter />
        </SocialLink>
      </SocialItem>
    </SocialItemList>
  </SocialContainer>
);

export default Social;
