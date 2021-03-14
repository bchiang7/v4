import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { email } from '@config';
import { navDelay, loaderDelay } from '@utils';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;

  h1 {
    margin: 0 0 10px 0px;
    color: black;
    font-family: Times New Roman;
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-bottom: 5px;
    color: black;
    letter-spacing: -2px;
    font-family: Times New Roman;
    font-weight: 300;
  }

  p {
    margin: 0px 0 0;
    max-width: 430px;
    color: black;
    font-family: Times New Roman;
    font-weight: 100;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 25px;
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>Hi, my name is</h1>;
  const two = <h2 className="big-heading">Celine F. Nicolas.</h2>;
  const three = <h3 className="big-heading">I like to solve problems.</h3>;
  const four = (
    <p>
      I'm a science enthusiast and serial tinkerer navigating life as if it were a pas de deux.
      based in New York, NY.
    </p>
  );
  const five = (
    <a href={`mailto:${email}`} className="email-link">
      Get In Touch
    </a>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      <TransitionGroup component={null}>
        {isMounted &&
          items.map((item, i) => (
            <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
              <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
            </CSSTransition>
          ))}
      </TransitionGroup>
    </StyledHeroSection>
  );
};

export default Hero;
