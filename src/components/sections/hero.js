import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';
import { Icon } from '@components/icons';
import { socialMedia } from '@config';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0;

  @media (max-width: 480px) and (min-height: 700px) {
    padding-bottom: 10vh;
  }

  h1 {
    margin: 0 0 30px 4px;
    padding 15px 18px 15px 20px;
    color: var(--primary-color);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;
    border-radius: 20px 20px 20px 0px;
    border-width: thin;
    border-style: solid;
    border-color: var(--primary-color);
    transition: var(--transition);

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: -5px;
    color: var(--text-color);
    line-height: 0.9;
    font-size: clamp(50px, 9vw, 90px);
  }

  p {
    margin: 20px 0 0;
    max-width: 85%;
  }

  .resume-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 30px;
  }
`;

const StyledSocialLinks = styled.div`
  display: block;
  width: 100%;
  margin: 0 auto -5px;
  color: var(--light-text-color);

  ul {
    ${({ theme }) => theme.mixins.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;

    a {
      padding: 15px;
      &:hover,
      &:focus {
        transform: translateY(-3px);
      }
      svg {
        width: 20px;
        height: 20px;
      }
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

  const greeting = <h1>Hey, I'm</h1>;
  const name = <h2 className="big-heading name-heading">Ben Kostiuk</h2>;
  const brief = <h3 className="big-heading">Software Developer</h3>;
  const socials = (
    <StyledSocialLinks>
      <ul>
        {socialMedia &&
          socialMedia.map(({ name, url }, i) => (
            <li key={i}>
              <a href={url} aria-label={name}>
                <Icon name={name} />
              </a>
            </li>
          ))}
      </ul>
    </StyledSocialLinks>
  );
  const description = (
    <>
      <p>
        I’m a Computer Science student at{' '}
        <a href="https://www.mcmaster.ca/" target="_blank" rel="noreferrer">
          McMaster University
        </a>
        , with experience in web and application development. I've previously interned at{' '}
        <a href="https://www.rbcroyalbank.com/personal.html" target="_blank" rel="noreferrer">
          RBC
        </a>{' '}
        and{' '}
        <a href="https://www.coveo.com/en" target="_blank" rel="noreferrer">
          Coveo
        </a>{' '}
        supporting the development of large-scale data-intensive applications responsible for core
        business functionality. This summer I'm interning at{' '}
        <a href="https://www.affirm.ca/" target="_blank" rel="noreferrer">
          Affirm
        </a>
        !
      </p>
    </>
  );
  const button = (
    <a className="resume-link" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
      View Resume
    </a>
  );

  const items = [greeting, name, brief, socials, description, button];

  return (
    <StyledHeroSection>
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
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
