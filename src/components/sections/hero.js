import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled, { keyframes } from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';
import { useLanguage } from '../../hooks/LanguageContext';
import { GradientText, BlurText } from '../fx';
// import { email } from '@config';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0;
  position: relative;

  @media (max-width: 768px) {
    padding-top: calc(var(--nav-scroll-height) + 24px);
  }
  @media (max-width: 480px) {
    padding-top: calc(var(--nav-scroll-height) + 32px);
  }
  @media (max-width: 480px) and (min-height: 700px) {
    padding-bottom: 10vh;
  }

  h3 {
    margin-top: 10px;
    color: var(--light-text-color);
    line-height: 1;
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

const SiliaLine = styled.p`
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

  const { t } = useLanguage();

  const two = (
    <h2 className="big-heading">
      <BlurText text="Angelo" step={140} delay={navDelay} /> <GradientText>Ortiz.</GradientText>
    </h2>
  );
  const three = <h3 className="big-heading">{t('hero_txt_keywords')}</h3>;
  const four = (
    <>
      <p>{t('hero_txt_about')}</p>
      <SiliaLine>
        <LiveDot aria-hidden />
        <span>
          {t('hero_txt_silia')}{' '}
          <a href="https://www.silia.com/" target="_blank" rel="noopener noreferrer">
            @Silia
          </a>
          .
        </span>
      </SiliaLine>
    </>
  );
  const proudly = <p>{t('hero_text_proud')}</p>;
  const five = (
    <a className="email-link" href="#contact">
      {t('hero_btn_cta')}
    </a>
  );

  const items = [two, three, four, proudly, five];

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
