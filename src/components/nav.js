import React, { Component } from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navLinks, navHeight } from '@config';
import { throttle, loaderDelay } from '@utils';
import { Menu } from '@components';
import { IconLogo } from '@components/icons';

const StyledHeader = styled.header`
  ${({ theme }) => theme.mixins.flexBetween};
  position: fixed;
  top: 0;
  padding: 0px 50px;
  background-color: ${({ theme }) => theme.colors.navy};
  transition: ${({ theme }) => theme.transition};
  z-index: 11;
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  width: 100%;
  height: ${({ theme, scrollDirection }) =>
    scrollDirection === 'none' ? theme.navHeight : theme.navScrollHeight};
  box-shadow: ${({ theme, scrollDirection }) =>
    scrollDirection === 'up' ? `0 10px 30px -10px ${theme.colors.shadowNavy}` : 'none'};
  transform: translateY(
    ${({ theme, scrollDirection }) =>
    scrollDirection === 'down' ? `-${theme.navScrollHeight}` : '0px'}
  );

  @media (${({ theme }) => theme.bp.desktopS}) {
    padding: 0 40px;
  }
  @media (${({ theme }) => theme.bp.tabletL}) {
    padding: 0 25px;
  }
`;

const StyledNav = styled.nav`
  ${({ theme }) => theme.mixins.flexBetween};
  position: relative;
  width: 100%;
  color: ${({ theme }) => theme.colors.lightestSlate};
  font-family: ${({ theme }) => theme.fonts.SFMono};
  counter-reset: item 0;
  z-index: 12;

  .logo {
    ${({ theme }) => theme.mixins.flexCenter};

    a {
      color: ${({ theme }) => theme.colors.green};
      width: 42px;
      height: 42px;

      &:hover,
      &:focus {
        svg {
          fill: ${({ theme }) => theme.colors.transGreen};
        }
      }

      svg {
        fill: none;
        transition: ${({ theme }) => theme.transition};
        user-select: none;
      }
    }
  }
`;

const StyledHamburgerButton = styled.button`
  display: none;

  @media (${({ theme }) => theme.bp.tabletL}) {
    ${({ theme }) => theme.mixins.flexCenter};
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
  }

  .ham-box {
    position: relative;
    display: inline-block;
    width: ${({ theme }) => theme.hamburgerWidth};
    height: 24px;
  }

  .ham-box-inner {
    background-color: ${({ theme }) => theme.colors.green};
    position: absolute;
    width: ${({ theme }) => theme.hamburgerWidth};
    height: 2px;
    border-radius: ${({ theme }) => theme.borderRadius};
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
      position: absolute;
      left: auto;
      right: 0;
      width: ${({ theme }) => theme.hamburgerWidth};
      height: 2px;
      transition-timing-function: ease;
      transition-duration: 0.15s;
      transition-property: transform;
      background-color: ${({ theme }) => theme.colors.green};
      border-radius: 4px;
    }
    &:before {
      width: ${props => (props.menuOpen ? `100%` : `120%`)};
      top: ${props => (props.menuOpen ? `0` : `-10px`)};
      opacity: ${props => (props.menuOpen ? 0 : 1)};
      transition: ${props =>
    props.menuOpen ? props.theme.hamBeforeActive : props.theme.hamBefore};
    }
    &:after {
      width: ${props => (props.menuOpen ? `100%` : `80%`)};
      bottom: ${props => (props.menuOpen ? `0` : `-10px`)};
      transform: rotate(${props => (props.menuOpen ? `-90deg` : `0`)});
      transition: ${props => (props.menuOpen ? props.theme.hamAfterActive : props.theme.hamAfter)};
    }
  }
`;

const StyledLinks = styled.div`
  display: flex;
  align-items: center;

  @media (${({ theme }) => theme.bp.tabletL}) {
    display: none;
  }

  ol {
    ${({ theme }) => theme.mixins.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      margin: 0 5px;
      position: relative;
      font-size: ${({ theme }) => theme.fontSizes.smish};
      counter-increment: item 1;

      a {
        padding: 10px;

        &:before {
          content: '0' counter(item) '.';
          margin-right: 5px;
          color: ${({ theme }) => theme.colors.green};
          font-size: ${({ theme }) => theme.fontSizes.xs};
          text-align: right;
        }
      }
    }
  }

  .resume-button {
    ${({ theme }) => theme.mixins.smallButton};
    margin-left: 15px;
    font-size: ${({ theme }) => theme.fontSizes.smish};
  }
`;

const DELTA = 5;

class Nav extends Component {
  state = {
    isMounted: !this.props.isHome,
    menuOpen: false,
    scrollDirection: 'none',
    lastScrollTop: 0,
  };

  componentDidMount() {
    setTimeout(
      () =>
        this.setState({ isMounted: true }, () => {
          window.addEventListener('scroll', () => throttle(this.handleScroll()));
          window.addEventListener('resize', () => throttle(this.handleResize()));
          window.addEventListener('keydown', e => this.handleKeydown(e));
        }),
      100,
    );
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', () => this.handleScroll());
    window.removeEventListener('resize', () => this.handleResize());
    window.removeEventListener('keydown', e => this.handleKeydown(e));
  }

  toggleMenu = () => this.setState({ menuOpen: !this.state.menuOpen });

  handleScroll = () => {
    const { isMounted, menuOpen, scrollDirection, lastScrollTop } = this.state;
    const fromTop = window.scrollY;

    // Make sure they scroll more than DELTA
    if (!isMounted || Math.abs(lastScrollTop - fromTop) <= DELTA || menuOpen) {
      return;
    }

    if (fromTop < DELTA) {
      this.setState({ scrollDirection: 'none' });
    } else if (fromTop > lastScrollTop && fromTop > navHeight) {
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
    if (window.innerWidth > 768 && this.state.menuOpen) {
      this.toggleMenu();
    }
  };

  handleKeydown = e => {
    if (!this.state.menuOpen) {
      return;
    }

    if (e.key === 'Escape') {
      this.toggleMenu();
    }
  };

  render() {
    const { isMounted, menuOpen, scrollDirection } = this.state;
    const { isHome } = this.props;
    const timeout = isHome ? loaderDelay : 0;
    const fadeClass = isHome ? 'fade' : '';
    const fadeDownClass = isHome ? 'fadedown' : '';

    return (
      <StyledHeader scrollDirection={scrollDirection}>
        <Helmet>
          <body className={menuOpen ? 'blur' : ''} />
        </Helmet>

        <StyledNav>
          <TransitionGroup component={null}>
            {isMounted && (
              <CSSTransition classNames={fadeClass} timeout={timeout}>
                <div className="logo" tabIndex="-1">
                  {isHome ? (
                    <a href="/" aria-label="home">
                      <IconLogo />
                    </a>
                  ) : (
                    <Link to="/" aria-label="home">
                      <IconLogo />
                    </Link>
                  )}
                </div>
              </CSSTransition>
            )}
          </TransitionGroup>

          <TransitionGroup component={null}>
            {isMounted && (
              <CSSTransition classNames={fadeClass} timeout={timeout}>
                <StyledHamburgerButton onClick={this.toggleMenu} menuOpen={menuOpen}>
                  <div className="ham-box">
                    <div className="ham-box-inner" />
                  </div>
                </StyledHamburgerButton>
              </CSSTransition>
            )}
          </TransitionGroup>

          <StyledLinks>
            <ol>
              <TransitionGroup component={null}>
                {isMounted &&
                  navLinks &&
                  navLinks.map(({ url, name }, i) => (
                    <CSSTransition key={i} classNames={fadeDownClass} timeout={timeout}>
                      <li key={i} style={{ transitionDelay: `${isHome ? i * 100 : 0}ms` }}>
                        <Link to={url}>{name}</Link>
                      </li>
                    </CSSTransition>
                  ))}
              </TransitionGroup>
            </ol>

            <TransitionGroup component={null}>
              {isMounted && (
                <CSSTransition classNames={fadeDownClass} timeout={timeout}>
                  <div style={{ transitionDelay: `${isHome ? navLinks.length * 100 : 0}ms` }}>
                    <a href="/resume.pdf" className="resume-button">
                      Resume
                    </a>
                  </div>
                </CSSTransition>
              )}
            </TransitionGroup>
          </StyledLinks>
        </StyledNav>

        <Menu menuOpen={menuOpen} toggleMenu={this.toggleMenu} />
      </StyledHeader>
    );
  }
}

Nav.propTypes = {
  isHome: PropTypes.bool,
};

export default Nav;
