import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import config from '../config';

import { IconGithub, IconLinkedin, IconCodepen, IconInstagram, IconTwitter } from './icons';

import styled from 'styled-components';
import { theme, mixins, media, Nav, Ol, Ul, A } from '../style';

const MenuContainer = styled.div`
  ${mixins.flexCenter};
  flex-direction: column;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 50vw;
  height: 100vh;
  padding: 50px;
  background-color: ${theme.colors.lightNavy};
  transition: ${theme.transition};
  z-index: 10;
  font-family: ${theme.fonts.SFMono};
  transform: translateX(${props => (props.menuOpen ? 0 : 100)}vw);
  ${media.thone`
    padding: 25px;
  `};
  ${media.phablet`
    padding: 15px;
    width: 75vw;
  `};
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
  max-width: 500px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto 10%;
  padding: 0 25px;
`;
const SocialItemList = Ul.extend`
  ${mixins.flexBetween};
  flex-wrap: wrap;
  ${media.phablet`
    ${mixins.flexCenter};
  `};
`;
const SocialItem = styled.li``;
const SocialLink = A.extend`
  padding: 10px;

  svg {
    width: 24px;
    height: 24px;
  }
`;

class Menu extends Component {
  static propTypes = {
    menuOpen: PropTypes.bool.isRequired,
    handleNavClick: PropTypes.func.isRequired,
  };

  render() {
    const { menuOpen, handleNavClick } = this.props;

    return (
      <MenuContainer menuOpen={menuOpen}>
        <NavLinks>
          <NavList>
            <NavListItem onClick={handleNavClick}>
              <NavLink href="#about">About</NavLink>
            </NavListItem>
            <NavListItem onClick={handleNavClick}>
              <NavLink href="#jobs">Experience</NavLink>
            </NavListItem>
            <NavListItem onClick={handleNavClick}>
              <NavLink href="#projects">Work</NavLink>
            </NavListItem>
            <NavListItem onClick={handleNavClick}>
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
