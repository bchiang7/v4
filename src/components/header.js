import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Link from 'gatsby-link';

import Menu from '../components/menu';
import config from '../config';
import { throttle } from '../utils';
import { IconLogo } from './icons';

import styled from 'styled-components';
import { theme, mixins, media, Nav, Ol, A } from '../style';

const HeaderContainer = styled.header`
  ${mixins.flexBetween};
  position: fixed;
  top: 0;
  padding: 0px 50px;
  background-color: ${theme.colors.navy};
  transition: ${theme.transition};
  z-index: 11;
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  width: 100%;
  height: ${props =>
    props.scrollDirection === 'none' ? theme.headerHeight : theme.headerScrollHeight};
  box-shadow: ${props =>
    props.scrollDirection === 'up' ? `0 2px 4px ${theme.colors.shadowNavy}` : 'none'};
  transform: translateY(
    ${props => (props.scrollDirection === 'down' ? `-${theme.headerScrollHeight}` : '0px')}
  );
  ${media.desktop`padding: 0 40px;`};
  ${media.tablet`padding: 0 25px;`};
`;
const Navbar = Nav.extend`
  ${mixins.flexBetween};
  font-family: ${theme.fonts.SFMono};
  width: 100%;
  color: ${theme.colors.white};
  counter-reset: item 0;
  position: relative;
  z-index: 12;
`;
const Logo = styled.div`
  ${mixins.flexCenter};
`;
const LogoLink = styled(Link)`
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
const Hamburger = styled.div`
  ${mixins.flexCenter};
  overflow: visible;
  margin: 0 -12px 0 0;
  padding: 15px;
  cursor: pointer;
  transition-timing-function: linear;
  transition-duration: 0.15s;
  transition-property: opacity, filter;
  text-transform: none;
  color: inherit;
  border: 0;
  background-color: transparent;
  display: none;
  ${media.tablet`display: flex;`};
`;
const HamburgerBox = styled.div`
  position: relative;
  display: inline-block;
  width: ${theme.hamburgerWidth}px;
  height: 24px;
`;
const HamburgerInner = styled.div`
  background-color: ${theme.colors.green};
  position: absolute;
  width: ${theme.hamburgerWidth}px;
  height: 2px;
  border-radius: ${theme.borderRadius};
  top: 50%;
  left: 0;
  right: 0;
  transition-duration: 0.22s;
  transition-property: transform;
  transition-delay: ${props => (props.menuOpen ? `0.12s` : `0s`)};
  transform: rotate(${props => (props.menuOpen ? `225deg` : `0deg`)});
  transition-timing-function: cubic-bezier(
    ${props => (props.menuOpen ? `0.215, 0.61, 0.355, 1` : `0.55, 0.055, 0.675, 0.19`)}
  );

  &:before,
  &:after {
    content: '';
    display: block;
    background-color: ${theme.colors.green};
    position: absolute;
    left: auto;
    right: 0;
    width: ${theme.hamburgerWidth}px;
    height: 2px;
    transition-timing-function: ease;
    transition-duration: 0.15s;
    transition-property: transform;
    border-radius: 4px;
  }
  &:before {
    width: ${props => (props.menuOpen ? `100%` : `120%`)};
    top: ${props => (props.menuOpen ? `0` : `-10px`)};
    opacity: ${props => (props.menuOpen ? 0 : 1)};
    transition: ${props => (props.menuOpen ? theme.hamBeforeActive : theme.hamBefore)};
  }
  &:after {
    width: ${props => (props.menuOpen ? `100%` : `80%`)};
    bottom: ${props => (props.menuOpen ? `0` : `-10px`)};
    transform: rotate(${props => (props.menuOpen ? `-90deg` : `0`)});
    transition: ${props => (props.menuOpen ? theme.hamAfterActive : theme.hamAfter)};
  }
`;
const NavLinks = styled.div`
  display: flex;
  align-items: center;
  ${media.tablet`display: none;`};
`;
const NavList = Ol.extend`
  display: flex;
`;
const NavListItem = styled.li`
  margin: 0 10px;
  position: relative;
  font-size: ${theme.fontSizes.smallish};
  counter-increment: item 1;

  &:before {
    content: '0' counter(item) '.';
    text-align: right;
    color: ${theme.colors.green};
    font-size: ${theme.fontSizes.xsmall};
  }
`;
const NavLink = styled(AnchorLink)`
  ${mixins.link};
  padding: 10px;
`;
const ResumeLink = A.extend`
  ${mixins.smallButton};
  margin-left: 10px;
  font-size: ${theme.fontSizes.smallish};
`;

const DELTA = 5;

class Header extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    navLinks: PropTypes.array.isRequired,
  };

  state = {
    lastScrollTop: 0,
    scrollDirection: 'none',
    menuOpen: false,
  };

  componentDidMount() {
    window.addEventListener('scroll', () => throttle(this.handleScroll()));
    window.addEventListener('resize', () => throttle(this.handleResize()));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const { lastScrollTop, menuOpen, scrollDirection } = this.state;
    const fromTop = window.scrollY;
    const headerHeight = config.headerHeight;

    // Make sure they scroll more than DELTA
    if (Math.abs(lastScrollTop - fromTop) <= DELTA || menuOpen) {
      return;
    }

    if (fromTop < DELTA) {
      this.setState({ scrollDirection: 'none' });
    } else if (fromTop > lastScrollTop && fromTop > headerHeight) {
      if (scrollDirection !== 'down') {
        this.setState({ scrollDirection: 'down' });
      }
    } else if (fromTop + window.innerHeight < document.body.scrollHeight) {
      if (scrollDirection !== 'up') {
        this.setState({ scrollDirection: 'up' });
      }
    }

    this.setState({ lastScrollTop: fromTop });
  }

  handleResize = () => {
    const { menuOpen } = this.state;

    if (window.innerWidth > 768 && menuOpen) {
      this.toggleMenu('closed');
    }
  };

  toggleMenu = (menuState = null) => {
    const { menuOpen } = this.state;

    document.body.style.overflow = `${menuOpen ? 'auto' : 'hidden'}`;
    document.body.classList.toggle('blur');

    this.setState({ menuOpen: menuState === 'closed' ? false : !menuOpen });
  };

  handleMenuClick = e => {
    const target = e.target;
    const isLink = target.hasAttribute('href');
    const isContainer = target.classList ? target.classList[0].includes('MenuContainer') : false;

    if (isLink || isContainer) {
      this.toggleMenu();
    }
  };

  render() {
    const { scrollDirection, menuOpen } = this.state;
    const { location, navLinks } = this.props;
    const isHome = location.pathname === '/';

    return (
      <HeaderContainer innerRef={x => (this.header = x)} scrollDirection={scrollDirection}>
        <Navbar>
          <Logo>
            <LogoLink to="/">
              <IconLogo />
            </LogoLink>
          </Logo>

          <Hamburger onClick={this.toggleMenu}>
            <HamburgerBox>
              <HamburgerInner menuOpen={menuOpen} />
            </HamburgerBox>
          </Hamburger>

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
        </Navbar>

        <Menu
          isHome={isHome}
          navLinks={navLinks}
          menuOpen={menuOpen}
          handleMenuClick={e => this.handleMenuClick(e)}
        />
      </HeaderContainer>
    );
  }
}

export default Header;
