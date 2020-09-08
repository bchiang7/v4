import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { email } from '@config';
import { navDelay, loaderDelay } from '@utils';
import { Section } from '@styles';

const StyledHeroSection = styled(Section)`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;

  h1 {
    margin: 0 0 20px 4px;
    color: ${({ theme }) => theme.colors.green};
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-family: ${({ theme }) => theme.fonts.SFMono};
    font-weight: 400;

    @media (${({ theme }) => theme.bp.tabletL}) {
      font-size: ${({ theme }) => theme.fontSizes.sm};
    }
  }

  h2,
  h3 {
    margin: 0;
    font-size: 80px;
    line-height: 0.9;

    @media (${({ theme }) => theme.bp.tabletL}) {
      font-size: 60px;
    }
    @media (${({ theme }) => theme.bp.mobileL}) {
      font-size: 40px;
    }
  }

  h3 {
    margin: 10px 0 0;
    color: ${({ theme }) => theme.colors.slate};
  }

  p {
    margin: 20px 0 0;
    max-width: 500px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>Hi, my name is</h1>;
  const two = <h2>Brittany Chiang.</h2>;
  const three = <h3>I build things for the web.</h3>;
  const four = (
    <p>
      I'm a software engineer based in Boston, MA specializing in building (and occasionally
      designing) exceptional websites, applications, and everything in between.
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
