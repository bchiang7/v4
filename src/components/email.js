import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { theme, A } from '../style';

const EmailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  right: 40px;
  vertical-align: middle;
  width: 40px;

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

const Email = ({ email }) => (
  <EmailContainer>
    <EmailLink href={`mailto:${email}`}>{email}</EmailLink>
  </EmailContainer>
);

Email.propTypes = {
  email: PropTypes.string.isRequired,
};

export default Email;
