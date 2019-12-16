import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { email } from '@config';
import styled from 'styled-components';
import { theme, media } from '@styles';
const { colors, fontSizes, fonts } = theme;

const StyledContainer = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0;
  right: 40px;
  z-index: 10;
  color: ${colors.lightSlate};
  ${media.desktop`right: 25px;`};
  ${media.tablet`display: none;`};
`;
const StyledLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: ${colors.lightSlate};
  }
`;
const StyledEmailLink = styled.a`
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.xs};
  letter-spacing: 0.1em;
  writing-mode: vertical-rl;
  margin: 20px auto;
  padding: 10px;

  &:hover,
  &:focus {
    transform: translateY(-3px);
  }
`;

const Email = ({ isHome }) => {
  const [isMounted, setIsMounted] = useState(!isHome);

  useEffect(() => {
    if (!isHome) {
      return;
    }
    const timeout = setTimeout(() => setIsMounted(true), 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <StyledContainer>
      <TransitionGroup component={null}>
        {isMounted && (
          <CSSTransition classNames={isHome ? 'fade' : ''} timeout={isHome ? 3000 : 0}>
            <StyledLinkWrapper>
              <StyledEmailLink href={`mailto:${email}`}>{email}</StyledEmailLink>
            </StyledLinkWrapper>
          </CSSTransition>
        )}
      </TransitionGroup>
    </StyledContainer>
  );
};

Email.propTypes = {
  isHome: PropTypes.bool,
};

export default Email;
