import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
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

const Nav = ({ isHome }) => {
  const [isMounted, setIsMounted] = useState(!isHome);
  const [scrollDirection, setScrollDirection] = useState('none');
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const handleScroll = () => {
    const fromTop = window.scrollY;

    // Make sure they scroll more than DELTA
    if (!isMounted || Math.abs(lastScrollTop - fromTop) <= DELTA) {
      return;
    }

    if (fromTop < DELTA) {
      setScrollDirection('none');
    } else if (fromTop > lastScrollTop && fromTop > navHeight) {
      if (scrollDirection !== 'down') {
        setScrollDirection('down');
      }
    } else if (fromTop + window.innerHeight < document.body.scrollHeight) {
      if (scrollDirection !== 'up') {
        setScrollDirection('up');
      }
    }

    setLastScrollTop(fromTop);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
      document.addEventListener('scroll', () => throttle(handleScroll()));
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  const timeout = isHome ? loaderDelay : 0;
  const fadeClass = isHome ? 'fade' : '';
  const fadeDownClass = isHome ? 'fadedown' : '';

  return (
    <StyledHeader scrollDirection={scrollDirection}>
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

        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition classNames={fadeClass} timeout={timeout}>
              <Menu />
            </CSSTransition>
          )}
        </TransitionGroup>
      </StyledNav>
    </StyledHeader>
  );
};

Nav.propTypes = {
  isHome: PropTypes.bool,
};

export default Nav;
