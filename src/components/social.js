import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { socialMedia } from '@config';
import { FormattedIcon } from '@components/icons';
import styled from 'styled-components';
import { theme, media } from '@styles';
const { colors } = theme;

const SocialContainer = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0;
  left: 40px;
  color: ${colors.lightSlate};
  ${media.desktop`left: 25px;`};
  ${media.tablet`display: none;`};
`;
const SocialItemList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: ${colors.lightSlate};
  }
`;
const SocialItem = styled.li`
  &:last-of-type {
    margin-bottom: 20px;
  }
`;
const SocialLink = styled.a`
  padding: 10px;
  &:hover,
  &:focus {
    transform: translateY(-3px);
  }
  svg {
    width: 18px;
    height: 18px;
  }
`;

const Social = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <SocialContainer>
      <TransitionGroup>
        {isMounted && (
          <CSSTransition timeout={3000} classNames="fade">
            <SocialItemList>
              {socialMedia &&
                socialMedia.map(({ url, name }, i) => (
                  <SocialItem key={i}>
                    <SocialLink
                      href={url}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      aria-label={name}>
                      <FormattedIcon name={name} />
                    </SocialLink>
                  </SocialItem>
                ))}
            </SocialItemList>
          </CSSTransition>
        )}
      </TransitionGroup>
    </SocialContainer>
  );
};

export default Social;
