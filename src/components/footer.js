import React from 'react';

import styled from 'styled-components';
import { theme, mixins, media, A, P } from '../style';

const FooterContainer = styled.footer`
  ${mixins.flexCenter};
  ${mixins.padding};
  flex-direction: column;
  background-color: ${theme.colors.darkNavy};
  color: ${theme.colors.slate};
  text-align: center;
  height: 75px;
  ${media.phone`padding: 0 20px;`};
`;
const Copy = styled(P)`
  margin: 5px 0 3px;
  font-size: ${theme.fontSizes.medium};
`;
const GithubLink = styled(A)`
  ${mixins.inlineLink};
  color: ${theme.colors.lightGrey};
  font-family: ${theme.fonts.SFMono};
  font-size: ${theme.fontSizes.xsmall};
  &:after {
    display: none;
  }
`;

const Footer = () => (
  <FooterContainer>
    <Copy>Designed &amp; Built by Brittany Chiang</Copy>
    <GithubLink
      href="https://github.com/bchiang7/v4"
      target="_blank"
      rel="nofollow noopener noreferrer">
      View Source
    </GithubLink>
  </FooterContainer>
);

export default Footer;
