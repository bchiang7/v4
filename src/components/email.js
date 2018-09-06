import React from 'react';

import config from '../config';

import styled from 'styled-components';
import { theme, media, A } from '../style';

const EmailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  vertical-align: middle;
  width: 40px;
  position: fixed;
  bottom: 0;
  right: 40px;

  ${media.desktop`right: 25px;`};
  ${media.tablet`display: none;`};

  &:after {
    content: '';
    height: 90px;
    width: 1px;
    background-color: ${theme.colors.lightSlate};
    display: block;
  }
`;
const EmailLink = A.extend`
  font-family: ${theme.fonts.SFMono};
  font-size: ${theme.fontSizes.xsmall};
  color: ${theme.colors.lightSlate};
  letter-spacing: 0.5px;
  writing-mode: vertical-rl;
  margin: 20px 0;
  padding: 10px;
  right: -1px;
`;

// use simple transition instead of scroll reveal to animate in from right

const Email = () => (
  <EmailContainer>
    <EmailLink href={`mailto:${config.email}`}>{config.email}</EmailLink>
  </EmailContainer>
);

export default Email;
