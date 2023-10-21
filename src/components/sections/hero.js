import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';
// import { email } from '@config';

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
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 10px;
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

  const one = <h1>Hi, my name is</h1>;
  const two = <h2 className="big-heading">Xavier Elon Hollingsworth.</h2>;
  const three = <h3 className="big-heading">I shape the future.</h3>;
  const four = (
    <>
      <p>
        I am a full-stack software engineer specializing in React, Typescript, Node, Express, and
        MongoDB. I am currently working at{' '}
        <a href="https://boozallen.com/" target="_blank" rel="noreferrer">
          Booz Allen
        </a>{' '}
        and will be attending{' '}
        <a href="https://omscs.gatech.edu/specialization-machine-learning">Georgia Tech</a> for my
        MS in AI/Machine Leaning Specizalization starting in January 2024. I have 4 years of
        professional experience. I am also working on building my own full stack application that
        can be found <a href="https://xsj-ui.vercel.app/">here</a> which implements user
        authentication and allows users to message each other instantly as well as message Chat GPT.
        It was created in Next/Typescript/React, MongoDB, Node, Express, PostgreSQL and Firebase.
      </p>
      <a
        className="group relative block transition-all"
        href="https://xsj-ui.vercel.app/"
        aria-label="XXX Chat App">
        <img
          alt="Screenshot of XXX"
          //   loading="lazy"
          width="180"
          height="48"
          //   decoding="async"
          className="mx-auto rounded border-2 border-zinc-900/30 drop-shadow-md group-hover:drop-shadow-xl"
          src={'./github.png'}
          style={{ color: 'transparent' }}>
          {/* <div className="absolute left-0 top-0 hidden h-full w-full items-center justify-center rounded border-4 border-teal-400/0 bg-zinc-900/30 align-middle opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 lg:flex">
                <h3 className="not-sr-only text-xl font-semibold text-white">v1</h3>
              </div> */}
        </img>
      </a>
    </>
  );
  const five = (
    <a
      className="email-link"
      href="https://github.com/XavierElon/XavierElon/blob/main/README.md"
      target="_blank"
      rel="noreferrer">
      Check out my Github
    </a>
  );

  const items = [one, two, three, four, five];

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
