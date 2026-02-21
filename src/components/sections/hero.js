import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';
import Jobs from './jobs'; // Ensure the path to Jobs component is correct
import About from './about'; // Ensure the path to About component is correct

const StyledHeroSection = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr; /* Allocate more space to the hero content */
  min-height: 100vh;
  padding: 5px;
  align-items: start;
  position: relative;

  .hero-content {
    display: flex;
    flex-direction: column;
    padding-top: 175px; /* Adjust this value to position the content */
    padding-right: 20px; /* Add padding to the right */
    width: 200%; /* Ensure full width */
    padding-left: 0px;
    padding-bottom: 0px;
    margin-left: -200px;
    h2,
    h3 {
      width: 200%; /* Ensure full width for headings and paragraphs */
      margin-bottom: 10px;
    }
    p {
      width: 200%; /* Ensure full width for headings and paragraphs */
      margin-bottom: 10px;
    }
  }

  .jobs-content {
    display: flex;
    align-items: center; /* Center content vertically */
    padding-top: 75px; /* Adjust this value to position the content */
    margin-right: 20px;
  }

  .big-heading {
    color: #ffffff;
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }

  .scroll-down-arrow {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
    animation: jump 2s infinite;

    svg {
      width: 75px;
      height: 75px;
      color: var(--dark-slate);
    }
  }

  @keyframes jump {
    0%,
    100% {
      transform: translate(-50%, 0);
    }
    50% {
      transform: translate(-50%, -10px);
    }
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const two = <h2 className="big-heading">Grant Chiu</h2>;
  const three = <h3 className="medium-heading">Software Engineer</h3>;

  const items = [two, three];

  return (
    <StyledHeroSection>
      <div className="hero-content">
        {prefersReducedMotion ? (
          <>
            {items.map((item, i) => (
              <div key={i}>{item}</div>
            ))}
          </>
        ) : (
          <TransitionGroup component={null}>
            {isMounted &&
              items.map((item, i) => (
                <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                  <div style={{ transitionDelay: `${i + 1}0ms` }}>{item}</div>
                </CSSTransition>
              ))}
          </TransitionGroup>
        )}
        <About style={{ marginTop: '20px' }} /> {/* Add the About component with top margin */}
      </div>

      <div className="jobs-content">
        <Jobs />
      </div>

      <a href="#contact" className="scroll-down-arrow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M11.29 14.46 6 9.17 7.41 7.75l4.59 4.58 4.59-4.58 1.41 1.42-5.29 5.29a1 1 0 0 1-1.42 0Z"
          />
          <path
            fill="currentColor"
            d="m11.29 19.46-5.29-5.29L7.41 12.75l4.59 4.58 4.59-4.58 1.41 1.42-5.29 5.29a1 1 0 0 1-1.42 0Z"
          />
        </svg>
      </a>
    </StyledHeroSection>
  );
};

export default Hero;
