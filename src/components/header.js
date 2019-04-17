import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from 'gatsby';
import { throttle } from '@utils';
import { headerHeight } from '@config';
import resume from '@images/resume.pdf';
import Menu from './menu';
import { IconLogo } from './icons';
import styled from 'styled-components';
import { theme, mixins, media, Nav } from '@styles';
const { colors, fontSizes, fonts } = theme;

const HeaderContainer = styled.header`
  ${mixins.flexBetween};
  position: fixed;
  top: 0;
  padding: 0px 50px;
  background-color: ${colors.navy};
  transition: ${theme.transition};
  z-index: 11;
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  width: 100%;
  height: ${props =>
    props.scrollDirection === 'none' ? theme.headerHeight : theme.headerScrollHeight};
  box-shadow: ${props =>
    props.scrollDirection === 'up' ? `0 2px 4px ${colors.shadowNavy}` : 'none'};
  transform: translateY(
    ${props => (props.scrollDirection === 'down' ? `-${theme.headerScrollHeight}` : '0px')}
  );
  ${media.desktop`padding: 0 40px;`};
  ${media.tablet`padding: 0 25px;`};
`;
const Navbar = styled(Nav)`
  ${mixins.flexBetween};
  font-family: ${fonts.SFMono};
  color: ${colors.lightestSlate};
  counter-reset: item 0;
  position: relative;
  z-index: 12;
`;
const Logo = styled.div`
  ${mixins.flexCenter};
`;
const LogoLink = styled(Link)`
  color: ${colors.green};
  width: 42px;
  height: 42px;
  &:hover,
  &:focus {
    svg {
      fill: ${colors.transGreen};
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
  background-color: ${colors.green};
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
    background-color: ${colors.green};
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
const NavList = styled.ol`
  div {
    ${mixins.flexBetween};
  }
`;
const NavListItem = styled.li`
  margin: 0 10px;
  position: relative;
  font-size: ${fontSizes.smallish};
  counter-increment: item 1;
  &:before {
    content: '0' counter(item) '.';
    text-align: right;
    color: ${colors.green};
    font-size: ${fontSizes.xsmall};
  }
`;
const NavLink = styled(AnchorLink)`
  padding: 12px 10px;
`;
const ResumeLink = styled.a`
  ${mixins.smallButton};
  margin-left: 10px;
  font-size: ${fontSizes.smallish};
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
    isMounted: false,
  };

  componentDidMount() {
    setTimeout(() => this.setState({ isMounted: true }), 100);

    window.addEventListener('scroll', () => throttle(this.handleScroll()));
    window.addEventListener('resize', () => throttle(this.handleResize()));
    window.addEventListener('keydown', () => this.handleKeydown());
  }

  componentWillUnmount() {
    this.setState({ isMounted: false });

    window.removeEventListener('scroll', () => this.handleScroll());
    window.removeEventListener('resize', () => this.handleResize());
    window.removeEventListener('keydown', () => this.handleKeydown());
  }

  handleScroll = () => {
    const { isMounted, lastScrollTop, menuOpen, scrollDirection } = this.state;
    const fromTop = window.scrollY;

    // Make sure they scroll more than DELTA
    if (!isMounted || Math.abs(lastScrollTop - fromTop) <= DELTA || menuOpen) {
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
  };

  handleResize = () => {
    const { menuOpen } = this.state;

    if (window.innerWidth > 768 && menuOpen) {
      this.toggleMenu();
    }
  };

  handleKeydown = evt => {
    const { menuOpen } = this.state;

    if (!menuOpen) {
      return;
    }

    if (evt.key === 'Escape' || evt.key === 'Esc') {
      this.toggleMenu();
    }
  };

  toggleMenu = () => this.setState({ menuOpen: !this.state.menuOpen });

  handleMenuClick = e => {
    const target = e.target;
    const isLink = target.hasAttribute('href');
    const isContainer = target.classList && target.classList[0].includes('MenuContainer');

    if (isLink || isContainer) {
      this.toggleMenu();
    }
  };

  render() {
    const { scrollDirection, menuOpen, isMounted } = this.state;
    const { location, navLinks } = this.props;
    const isHome = location && location.pathname === '/';

    return (
      <HeaderContainer ref={el => (this.header = el)} scrollDirection={scrollDirection}>
        <Helmet>
          <body className={menuOpen ? 'blur' : ''} />
        </Helmet>
        <Navbar>
          <TransitionGroup>
            {isMounted && (
              <CSSTransition classNames="fade" timeout={3000}>
                <Logo>
                  <LogoLink to="/" aria-label="Home">
                    <IconLogo />
                  </LogoLink>
                </Logo>
              </CSSTransition>
            )}
          </TransitionGroup>

          <TransitionGroup>
            {isMounted && (
              <CSSTransition classNames="fade" timeout={3000}>
                <Hamburger onClick={this.toggleMenu}>
                  <HamburgerBox>
                    <HamburgerInner menuOpen={menuOpen} />
                  </HamburgerBox>
                </Hamburger>
              </CSSTransition>
            )}
          </TransitionGroup>

          <NavLinks>
            {isHome && (
              <NavList>
                <TransitionGroup>
                  {isMounted &&
                    navLinks &&
                    navLinks.map(({ url, name }, i) => (
                      <CSSTransition key={i} classNames="fadedown" timeout={3000}>
                        <NavListItem key={i} style={{ transitionDelay: `${i * 100}ms` }}>
                          <NavLink href={url}>{name}</NavLink>
                        </NavListItem>
                      </CSSTransition>
                    ))}
                </TransitionGroup>
              </NavList>
            )}
            <TransitionGroup>
              {isMounted && (
                <CSSTransition classNames="fadedown" timeout={3000}>
                  <div style={{ transitionDelay: `600ms` }}>
                    <ResumeLink href={resume} target="_blank" rel="nofollow noopener noreferrer">
                      Resume
                    </ResumeLink>
                  </div>
                </CSSTransition>
              )}
            </TransitionGroup>
          </NavLinks>
        </Navbar>

        {navLinks && (
          <Menu
            isHome={isHome}
            navLinks={navLinks}
            menuOpen={menuOpen}
            handleMenuClick={e => this.handleMenuClick(e)}
          />
        )}
      </HeaderContainer>
    );
  }
}

export default Header;
