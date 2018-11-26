import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { socialMedia } from '../config';
import { IconGithub, IconLinkedin, IconCodepen, IconInstagram, IconTwitter } from './icons';
import styled from 'styled-components';
import { theme, media } from '../styles';
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
  svg {
    width: 18px;
    height: 18px;
  }
`;

class Social extends Component {
  state = {
    isMounted: false,
  };

  componentDidMount() {
    setTimeout(() => this.setState({ isMounted: true }), 2000);
  }

  render() {
    const { isMounted } = this.state;

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
                    </SocialItem>
                  ))}
              </SocialItemList>
            </CSSTransition>
          )}
        </TransitionGroup>
      </SocialContainer>
    );
  }
}

export default Social;
