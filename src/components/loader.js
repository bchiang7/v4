import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import anime from 'animejs';
import styled from 'styled-components';
import { IconLoader } from '@components/icons';

const StyledLoader = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: var(--dark-bg-color);
  z-index: 99;

  /* soft aurora glow behind the logo */
  &::before {
    content: '';
    position: absolute;
    width: 360px;
    height: 360px;
    border-radius: 50%;
    background: radial-gradient(circle, var(--glow-color), transparent 65%);
    filter: blur(30px);
    opacity: ${props => (props.isMounted ? 1 : 0)};
    transition: opacity 1.2s ease;
  }

  .logo-wrapper {
    position: relative;
    width: max-content;
    max-width: 100px;
    transition: var(--transition);
    opacity: ${props => (props.isMounted ? 1 : 0)};
    svg {
      display: block;
      width: 100%;
      height: 100%;
      margin: 0 auto;
      fill: none;
      user-select: none;
      filter: drop-shadow(0 0 14px var(--glow-color));
      #B {
        opacity: 0;
      }
    }
  }
`;

const SEEN_KEY = 'portfolio-loader-seen';

const Loader = ({ finishLoading }) => {
  const [isMounted, setIsMounted] = useState(false);

  const timeline = useRef(null);
  const finished = useRef(false);

  const finish = () => {
    if (finished.current) {
      return;
    }
    finished.current = true;
    try {
      window.sessionStorage.setItem(SEEN_KEY, '1');
    } catch (e) {
      // storage unavailable: the loader simply plays again next visit
    }
    finishLoading();
  };

  const animate = () => {
    const loader = anime.timeline({ complete: finish });
    timeline.current = loader;

    loader
      .add({
        targets: '#logo path',
        delay: 100,
        duration: 900,
        easing: 'easeInOutQuart',
        strokeDashoffset: [anime.setDashoffset, 0],
      })
      .add({
        targets: '#logo #B',
        duration: 350,
        easing: 'easeInOutQuart',
        opacity: 1,
      })
      .add({
        targets: '#logo',
        delay: 150,
        duration: 250,
        easing: 'easeInOutQuart',
        opacity: 0,
        scale: 0.1,
      })
      .add({
        targets: '.loader',
        duration: 150,
        easing: 'easeInOutQuart',
        opacity: 0,
        zIndex: -1,
      });
  };

  useEffect(() => {
    // Play once per browser session, and never for users who prefer reduced motion
    let seen = false;
    try {
      seen = window.sessionStorage.getItem(SEEN_KEY) === '1';
    } catch (e) {
      seen = false;
    }
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (seen || reduced) {
      finish();
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), 10);
    animate();

    // Any click or key press skips the intro
    const skip = () => {
      timeline.current?.pause();
      finish();
    };
    window.addEventListener('click', skip);
    window.addEventListener('keydown', skip);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener('click', skip);
      window.removeEventListener('keydown', skip);
      timeline.current?.pause();
    };
  }, []);

  return (
    <StyledLoader className="loader" isMounted={isMounted}>
      <Helmet bodyAttributes={{ class: `hidden` }} />

      <div className="logo-wrapper">
        <IconLoader />
      </div>
    </StyledLoader>
  );
};

Loader.propTypes = {
  finishLoading: PropTypes.func.isRequired,
};

export default Loader;
