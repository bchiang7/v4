import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled, { keyframes } from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';
import { translations } from '../../config';
import TypeAnimation from 'react-type-animation';
import { useLanguage } from '../../hooks/LanguageContext';
// import { email } from '@config';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0;

  @media (max-width: 768px) {
    padding-top: calc(var(--nav-scroll-height) + 24px);
  }
  @media (max-width: 480px) {
    padding-top: calc(var(--nav-scroll-height) + 32px);
  }
  @media (max-width: 480px) and (min-height: 700px) {
    padding-bottom: 10vh;
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--signal-color);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 10px;
    color: var(--light-text-color);
    line-height: 1.0;
    font-size: var(--fz-heading);
  }

  p {
    margin: 20px 0 0;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const CreaiLine = styled.p`
  margin: 20px 0 0;
  color: var(--light-text-color);
  display: flex;
  align-items: center;
  gap: 8px;

  a {
    ${({ theme }) => theme.mixins.inlineLink};
    color: var(--signal-color);

    &:hover,
    &:focus,
    &:active {
      color: var(--signal-color);
      &:after {
        background-color: var(--signal-color);
      }
    }

    &:after {
      background-color: var(--signal-color);
    }
  }
`;

const livePulse = keyframes`
  0%, 100% { opacity: 1; transform: translateY(-2px) scale(1); box-shadow: 0 0 0 0 var(--signal-color); }
  50% { opacity: 0.85; transform: translateY(-2px) scale(1.15); box-shadow: 0 0 0 4px transparent; }
`;

const LiveDot = styled.span`
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--signal-color);
  flex-shrink: 0;
  transform: translateY(-2px);
  animation: ${livePulse} 1.5s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  const seq = [];
  for (const greeting of shuffleArray([...translations])) {
    seq.push(`${greeting.flag}  ${greeting.text}`);
    seq.push(1200);
    seq.push(``);
    seq.push(400);
  }

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const { t } = useLanguage();

  const one = prefersReducedMotion ? (
    <h1>{translations[0].flag}&nbsp;&nbsp;{translations[0].text}</h1>
  ) : (
    <TypeAnimation cursor={true} sequence={seq} wrapper="h1" repeat={Infinity} />
  );
  const two = <h2 className="big-heading">Angelo Ortiz.</h2>;
  const three = (
    <h3 className="big-heading">
      {t('hero_txt_keywords')}
    </h3>
  );
  const four = (
    <>
      <p>{t('hero_txt_about')}</p>
      <CreaiLine>
        <LiveDot aria-hidden />
        <span>
          {t('hero_txt_creai')}{' '}
          <a href="https://www.creai.mx/" target="_blank" rel="noopener noreferrer">
            @Creai
          </a>
          .
        </span>
      </CreaiLine>
    </>
  );
  const proudly = <p>{t('hero_text_proud')}</p>;
  const five = (
    <a className="email-link" href="#contact">
      {t('hero_btn_cta')}
    </a>
  );

  const items = [one, two, three, four, proudly, five];

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
