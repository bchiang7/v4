import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import resume from '../images/resume.pdf';
import styled from 'styled-components';
import { theme, mixins, media, Nav } from '../styles';
const { colors, fontSizes, fonts } = theme;

const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  outline: 0;
  transition: ${theme.transition};
  transform: translateX(${props => (props.menuOpen ? 0 : 100)}vw);
  visibility: ${props => (props.menuOpen ? 'visible' : 'hidden')};
  display: none;
  ${media.tablet`display: block;`};
`;
const Sidebar = styled.div`
  ${mixins.flexCenter};
  flex-direction: column;
  background-color: ${colors.lightNavy};
  padding: 50px;
  width: 50vw;
  height: 100%;
  position: relative;
  right: 0;
  margin-left: auto;
  font-family: ${fonts.SFMono};
  box-shadow: -2px 0px 4px ${colors.transNavy};
  ${media.thone`padding: 25px;`};
  ${media.phablet`width: 75vw;`};
  ${media.tiny`padding: 10px;`};
`;
const NavLinks = styled(Nav)`
  ${mixins.flexBetween};
  flex-direction: column;
  text-align: center;
`;
const NavList = styled.ol`
  width: 100%;
`;
const NavListItem = styled.li`
  margin: 0 auto 20px;
  position: relative;
  font-size: ${fontSizes.large};
  counter-increment: item 1;
  ${media.thone`
    margin: 0 auto 10px;
    font-size: ${fontSizes.medium};
  `};
  ${media.tiny`font-size: ${fontSizes.smallish};`};
  &:before {
    display: block;
    content: '0' counter(item) '.';
    color: ${colors.green};
    font-size: ${fontSizes.small};
    margin-bottom: 5px;
  }
`;
const NavLink = styled(AnchorLink)`
  ${mixins.link};
  padding: 3px 20px 20px;
  width: 100%;
`;
const ResumeLink = styled.a`
  ${mixins.bigButton};
  padding: 18px 50px;
  margin: 10% auto 0;
  width: max-content;
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
      <MenuContainer
        menuOpen={menuOpen}
        onClick={handleMenuClick}
        aria-hidden={!menuOpen}
        tabIndex={menuOpen ? 1 : -1}>
        <Sidebar>
          <NavLinks>
            {isHome && (
              <NavList>
                {navLinks &&
                  navLinks.map(({ url, name }, i) => (
                    <NavListItem key={i}>
                      <NavLink href={url}>{name}</NavLink>
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
