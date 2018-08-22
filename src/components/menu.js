import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import config from '../config';

import {
  IconLogo,
  IconHamburger,
  IconGithub,
  IconLinkedin,
  IconCodepen,
  IconInstagram,
  IconTwitter,
} from './icons';

import styled from 'styled-components';
import { theme, mixins, media, Header, Nav, Ol, Ul, A } from '../style';

const MenuContainer = styled.div`
  ${mixins.flexCenter};
  flex-direction: column;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  padding: 50px;
  background-color: ${theme.colors.lightNavy};
  transition: ${theme.transition};
  z-index: 20;
  font-family: ${theme.fonts.SFMono};
  display: none;
  ${media.tablet`
    display: flex;
  `};
`;
const HeaderContainer = Header.extend`
  ${mixins.flexBetween};
  height: ${theme.headerScrollHeight};
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 22px;
  display: flex;
`;
const Logo = styled.div`
  ${mixins.flexCenter};
`;
const LogoLink = A.extend`
  color: ${theme.colors.green};
  width: 40px;
  height: 40px;

  &:hover {
    svg {
      fill: ${theme.colors.transGreen};
    }
  }

  svg {
    fill: none;
    transition: ${theme.transition};
    user-select: none;
  }
`;
const Buns = styled.div`
  width: 80px;

  .ham {
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    transition: transform 400ms;
    user-select: none;

    &.active {
      transform: rotate(45deg);
      .top,
      .bottom {
        stroke-dashoffset: -68px;
      }
    }

    .line {
      fill: none;
      transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
      stroke: ${theme.colors.green};
      stroke-width: 5;
      stroke-linecap: round;

      &.top,
      &.bottom {
        stroke-dasharray: 40 121;
      }
    }
  }
`;
const NavLinks = Nav.extend`
  ${mixins.flexBetween};
  flex-direction: column;
  text-align: center;
`;
const NavList = Ol.extend`
  width: 100%;
`;
const NavListItem = styled.li`
  margin: 0 auto 20px;
  position: relative;
  font-size: ${theme.fontSizes.large};
  counter-increment: item 1;

  &:before {
    display: block;
    content: '0' counter(item) '.';
    color: ${theme.colors.green};
    font-size: ${theme.fontSizes.medium};
  }
`;
const NavLink = styled(AnchorLink)`
  ${mixins.link};
  padding: 3px 20px 20px;
  width: 100%;
`;
const ResumeLink = A.extend`
  ${mixins.bigButton};
  margin: 10% auto 0;
  padding-top: 15px;
  width: max-content;
`;
const SocialContainer = styled.div`
  color: ${theme.colors.lightSlate};
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin-bottom: 10%;
  padding: 0 25px;
`;
const SocialItemList = Ul.extend`
  ${mixins.flexBetween};
`;
const SocialItem = styled.li``;
const SocialLink = A.extend`
  padding: 10px;

  svg {
    width: 18px;
    height: 18px;
  }
`;

class Menu extends Component {
  state = {};

  componentDidMount() {}

  toggleMenu() {
    document.querySelector('.ham').classList.toggle('active');
  }

  render() {
    return (
      <MenuContainer>
        <HeaderContainer>
          <Logo>
            <LogoLink to="/">
              <IconLogo />
            </LogoLink>
          </Logo>
          <Buns onClick={this.toggleMenu}>
            <IconHamburger />
          </Buns>
        </HeaderContainer>
        <NavLinks>
          <NavList>
            <NavListItem>
              <NavLink href="#about">About</NavLink>
            </NavListItem>
            <NavListItem>
              <NavLink href="#jobs">Experience</NavLink>
            </NavListItem>
            <NavListItem>
              <NavLink href="#projects">Work</NavLink>
            </NavListItem>
            <NavListItem>
              <NavLink href="#contact">Contact</NavLink>
            </NavListItem>
          </NavList>
          <ResumeLink href={config.resume} target="_blank" rel="nofollow noopener noreferrer">
            Resume
          </ResumeLink>
        </NavLinks>
        <SocialContainer>
          <SocialItemList>
            {config.socialMedia &&
              config.socialMedia.map((social, i) => (
                <SocialItem key={i}>
                  <SocialLink href={social.url} target="_blank" rel="nofollow noopener noreferrer">
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
        </SocialContainer>
      </MenuContainer>
    );
  }
}

export default Menu;
