import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled, { css } from 'styled-components';
import { navLinks } from '@config';
import { loaderDelay } from '@utils';
import { useScrollDirection, usePrefersReducedMotion } from '@hooks';
import { Menu } from '@components';
import { IconLogo } from '@components/icons';
import IconLight from './icons/light';
import IconDark from './icons/dark';
import Colors from '../styles/colors';
import IconEnglish from './icons/english';
import IconSpanish from './icons/spanish';
import { useLanguage } from '../hooks/LanguageContext';
import IconAccessibility from './icons/accessibility';
import AccessibilityModal from './accessibilityModal';

const StyledHeader = styled.header`
  ${({ theme }) => theme.mixins.flexBetween};
  position: fixed;
  top: 0;
  z-index: 11;
  padding: 0px 50px;
  width: 100%;
  height: var(--nav-height);
  background-color: var(--bg-color);
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  backdrop-filter: blur(10px);
  transition: var(--transition);

  @media (max-width: 1080px) {
    padding: 0 40px;
  }
  @media (max-width: 768px) {
    padding: 0 25px;
  }

  @media (prefers-reduced-motion: no-preference) {
    ${props =>
    props.scrollDirection === 'up' &&
      !props.scrolledToTop &&
      css`
        height: var(--nav-scroll-height);
        transform: translateY(0px);
        background-color: var(--bg-color);
        box-shadow: 0 10px 30px -10px var(--bg-color-shadow);
      `};

    ${props =>
    props.scrollDirection === 'down' &&
      !props.scrolledToTop &&
      css`
        height: var(--nav-scroll-height);
        transform: translateY(calc(var(--nav-scroll-height) * -1));
        box-shadow: 0 10px 30px -10px var(--bg-color-shadow);
      `};
  }
`;

const StyledNav = styled.nav`
  ${({ theme }) => theme.mixins.flexBetween};
  position: relative;
  width: 100%;
  color: var(--lightest-text-color);
  counter-reset: item 0;
  z-index: 12;

  .logo {
    ${({ theme }) => theme.mixins.flexCenter};

    a {
      color: var(--primary-color);
      width: 42px;
      height: 42px;

      svg {
        fill: none;
        transition: var(--transition);
        transition: var(--transition);
        user-select: none;
      }
    }
  }

  .theme-switch {
    button {
      background: none;
      border: none;
      padding: 0 !important;
      border-radius: var(--border-radius-circle);
      cursor: pointer;
      color: var(--primary-color);
      width: 48px;
      height: 48px;

      &:hover {
        background-color: var(--highlight-tint);
      }

      svg {
        width: 32px;
        height: 32px;
        fill: var(--primary-color);
        transition: var(--transition);
        user-select: none;
      }
    }
  }

  .tools-switcher {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
  }
`;

const StyledLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
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
      counter-increment: item 1;
      font-size: var(--fz-xxs);

      a {
        padding: 10px;
        text-transform: uppercase;
        letter-spacing: 0.12em;
        font-weight: 400;
        color: var(--light-text-color);

        &:hover,
        &:focus {
          color: var(--contrast-color);
        }
      }
    }
  }
  }
`;

const Nav = ({ isHome }) => {
  const [isMounted, setIsMounted] = useState(!isHome);
  const scrollDirection = useScrollDirection('down');
  const [scrolledToTop, setScrolledToTop] = useState(true);
  const prefersReducedMotion = usePrefersReducedMotion();

  const THEME_KEY = 'portfolio-theme';
  const [IsDarkMode, setIsDarkMode] = useState(false);

  const [modalOpened, setModalOpened] = useState(false);

  // Restore theme from localStorage (or system preference) on mount
  useEffect(() => {
    if (typeof window === 'undefined') {return;}

    const saved = window.localStorage.getItem(THEME_KEY);
    const mode = saved === 'dark' || saved === 'light' ? saved : 'dark';

    const root = window.document.documentElement;
    for (const prop in Colors[mode]) {
      root.style.setProperty(prop, Colors[mode][prop]);
    }
    setIsDarkMode(mode === 'dark');
  }, []);

  const { t, lang, toggleLang } = useLanguage();
  const isEnglish = lang === 'en';

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50);
  };

  const toggleTheme = () => {
    const mode = IsDarkMode ? 'light' : 'dark';
    const root = window.document.documentElement;
    for (const prop in Colors[mode]) {
      root.style.setProperty(prop, Colors[mode][prop]);
    }
    window.localStorage.setItem(THEME_KEY, mode);
    setIsDarkMode(!IsDarkMode);
  };

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 100);

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const timeout = isHome ? loaderDelay : 0;
  const fadeClass = isHome ? 'fade' : '';
  const fadeDownClass = isHome ? 'fadedown' : '';

  const Logo = (
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
  );

  const ThemeSwitch = (
    <div className="theme-switch">
      <button
        onClick={() => {
          toggleTheme();
        }}>
        {IsDarkMode ? <IconLight /> : <IconDark />}
      </button>
    </div>
  );

  const LangSwitch = (
    <div className="theme-switch">
      <button onClick={toggleLang}>{isEnglish ? <IconEnglish /> : <IconSpanish />}</button>
    </div>
  );

  const OpenAccessibility = (
    <div className="theme-switch">
      <button
        onClick={() => {
          setModalOpened(true);
        }}>
        <IconAccessibility />
      </button>
    </div>
  );

  return (
    <StyledHeader scrollDirection={scrollDirection} scrolledToTop={scrolledToTop}>
      <StyledNav>
        {prefersReducedMotion ? (
          <>
            {Logo}

            <StyledLinks>
              <ol>
                {navLinks &&
                  navLinks.map(({ url, name }, i) => (
                    <li key={i}>
                      <Link to={url}>{t(`menu_text_${name}`)}</Link>
                    </li>
                  ))}
              </ol>
            </StyledLinks>

            {ThemeSwitch}

            <Menu />
          </>
        ) : (
          <>
            <TransitionGroup component={null}>
              {isMounted && (
                <CSSTransition classNames={fadeClass} timeout={timeout}>
                  <>{Logo}</>
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
                          <Link to={url}>{t(`menu_text_${name}`)}</Link>
                        </li>
                      </CSSTransition>
                    ))}
                </TransitionGroup>
              </ol>
            </StyledLinks>

            <AccessibilityModal isOpen={modalOpened} onClose={() => setModalOpened(false)} />

            <div className="tools-switcher">
              <TransitionGroup component={null}>
                {isMounted && (
                  <CSSTransition classNames={fadeClass} timeout={timeout}>
                    <>{ThemeSwitch}</>
                  </CSSTransition>
                )}
              </TransitionGroup>

              <TransitionGroup component={null}>
                {isMounted && (
                  <CSSTransition classNames={fadeClass} timeout={timeout}>
                    <>{OpenAccessibility}</>
                  </CSSTransition>
                )}
              </TransitionGroup>

              <TransitionGroup component={null}>
                {isMounted && (
                  <CSSTransition classNames={fadeClass} timeout={timeout}>
                    <>{LangSwitch}</>
                  </CSSTransition>
                )}
              </TransitionGroup>
            </div>

            <TransitionGroup component={null}>
              {isMounted && (
                <CSSTransition classNames={fadeClass} timeout={timeout}>
                  <Menu />
                </CSSTransition>
              )}
            </TransitionGroup>
          </>
        )}
      </StyledNav>
    </StyledHeader>
  );
};

Nav.propTypes = {
  isHome: PropTypes.bool,
};

export default Nav;
