import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const shift = keyframes`
  0%   { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
`;

const Text = styled.span`
  background: linear-gradient(110deg, var(--signal-color), var(--signal-soft), var(--signal-color));
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  animation: ${shift} 6s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const GradientText = ({ children, ...rest }) => <Text {...rest}>{children}</Text>;

GradientText.propTypes = { children: PropTypes.node };

export default GradientText;
