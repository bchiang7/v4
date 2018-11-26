import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { email } from '../config';
import styled from 'styled-components';
import { theme, media } from '../styles';
const { colors, fontSizes, fonts } = theme;

const EmailContainer = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0;
  right: 40px;
  color: ${colors.lightSlate};
  ${media.desktop`right: 25px;`};
  ${media.tablet`display: none;`};
  div {
    width: 100%;
    margin: 0 auto;
  }
`;
const EmailLinkWrapper = styled.div`
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
const EmailLink = styled.a`
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.xsmall};
  letter-spacing: 0.5px;
  writing-mode: vertical-rl;
  margin: 20px auto;
  padding: 10px;
`;

class Email extends Component {
  state = {
    isMounted: false,
  };

  componentDidMount() {
    setTimeout(() => this.setState({ isMounted: true }), 2000);
  }

  componentWillUnmount() {
    this.setState({ isMounted: false });
  }

  render() {
    const { isMounted } = this.state;

    return (
      <EmailContainer>
        <TransitionGroup>
          {isMounted && (
            <CSSTransition timeout={3000} classNames="fade">
              <EmailLinkWrapper>
                <EmailLink href={`mailto:${email}`}>{email}</EmailLink>
              </EmailLinkWrapper>
            </CSSTransition>
          )}
        </TransitionGroup>
      </EmailContainer>
    );
  }
}

export default Email;
