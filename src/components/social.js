import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import config from '../config';

import { IconGithub, IconLinkedin, IconCodepen, IconInstagram, IconTwitter } from './icons';

import styled from 'styled-components';
import { theme, media, A, Ul } from '../style';

const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  vertical-align: middle;
  width: 40px;
  position: fixed;
  bottom: 0;
  left: 40px;
  color: ${theme.colors.lightSlate};
  ${media.desktop`left: 25px;`};
  ${media.tablet`display: none;`};
`;
const SocialItemList = styled(Ul)`
  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: ${theme.colors.lightSlate};
  }
`;
const SocialItem = styled.li`
  &:last-of-type {
    margin-bottom: 20px;
  }
`;
const SocialLink = styled(A)`
  padding: 10px;
  svg {
    width: 18px;
    height: 18px;
  }
`;

class Social extends Component {
  state = {
    show: false,
  };

  componentDidMount() {
    setTimeout(() => this.setState({ show: true }), 2000);
  }

  render() {
    const { show } = this.state;

    return (
      <SocialContainer>
        <TransitionGroup>
          {show && (
            <CSSTransition timeout={3000} classNames="fade">
              <SocialItemList>
                {config.socialMedia &&
                  config.socialMedia.map((social, i) => (
                    <SocialItem key={i}>
                      <SocialLink
                        href={social.url}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        aria-label={social.name}>
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
            </CSSTransition>
          )}
        </TransitionGroup>
      </SocialContainer>
    );
  }
}

export default Social;
