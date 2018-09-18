import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import config from '../config';

import { IconGithub, IconLinkedin, IconCodepen, IconInstagram, IconTwitter } from './icons';

import styled from 'styled-components';
import { theme, mixins, media, Nav, Ol, Ul, A } from '../style';

const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  transition: ${theme.transition};
  transform: translateX(${props => (props.menuOpen ? 0 : 100)}vw);
`;
const Sidebar = styled.div`
  ${mixins.flexCenter};
  flex-direction: column;
  background-color: ${theme.colors.lightNavy};
  padding: 50px;
  width: 50vw;
  height: 100%;
  position: relative;
  right: 0;
  margin-left: auto;
  font-family: ${theme.fonts.SFMono};
  box-shadow: -2px 0px 4px ${theme.colors.transNavy};
  ${media.thone`
    padding: 25px;
  `};
  ${media.phablet`
    padding: 10px;
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
    font-size: ${theme.fontSizes.small};
    margin-bottom: 5px;
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
`;
const SocialItem = styled.li``;
const SocialLink = A.extend`
  padding: 10px;
  svg {
    width: 24px;
    height: 24px;
    ${media.phablet`
      width: 20px;
      height: 20px;
    `};
  }
`;

class Menu extends Component {
  static propTypes = {
    isHome: PropTypes.bool.isRequired,
    menuOpen: PropTypes.bool.isRequired,
    navLinks: PropTypes.array.isRequired,
    handleMenuClick: PropTypes.func.isRequired,
  };

  render() {
    const { isHome, menuOpen, navLinks, handleMenuClick } = this.props;

    return (
      <MenuContainer menuOpen={menuOpen} onClick={handleMenuClick}>
        <Sidebar>
          <NavLinks>
            {isHome && (
              <NavList>
                {navLinks &&
                  navLinks.map((link, i) => (
                    <NavListItem key={i}>
                      <NavLink href={link.url}>{link.name}</NavLink>
                    </NavListItem>
                  ))}
              </NavList>
            )}
            <ResumeLink href={config.resume} target="_blank" rel="nofollow noopener noreferrer">
              Resume
            </ResumeLink>
          </NavLinks>
          <SocialContainer>
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
          </SocialContainer>
        </Sidebar>
      </MenuContainer>
    );
  }
}

export default Menu;
