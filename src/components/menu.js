import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import resume from '../../static/resume.pdf';

import styled from 'styled-components';
import { theme, mixins, media, Nav, Ol, A } from '../style';

const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  min-height: 100vh;
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
  ${media.thone`padding: 25px;`};
  ${media.phablet`width: 75vw;`};
  ${media.tiny`padding: 10px;`};
`;
const NavLinks = styled(Nav)`
  ${mixins.flexBetween};
  flex-direction: column;
  text-align: center;
`;
const NavList = styled(Ol)`
  width: 100%;
`;
const NavListItem = styled.li`
  margin: 0 auto 20px;
  position: relative;
  font-size: ${theme.fontSizes.large};
  counter-increment: item 1;
  ${media.thone`
    margin: 0 auto 10px;
    font-size: ${theme.fontSizes.medium};
  `};
  ${media.tiny`
    font-size: ${theme.fontSizes.smallish};
  `};
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
const ResumeLink = styled(A)`
  ${mixins.bigButton};
  padding: 18px 50px;
  margin: 10% auto 0;
  width: max-content;
`;

class Menu extends Component {
  static propTypes = {
    isHome: PropTypes.bool,
    menuOpen: PropTypes.bool.isRequired,
    navLinks: PropTypes.array.isRequired,
    handleMenuClick: PropTypes.func.isRequired,
  };

  componentWillUnmount() {
    document.body.classList.remove('blur');
  }

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
            <ResumeLink href={resume} target="_blank" rel="nofollow noopener noreferrer">
              Resume
            </ResumeLink>
          </NavLinks>
        </Sidebar>
      </MenuContainer>
    );
  }
}

export default Menu;
