import React, { useState } from 'react';
import styled from 'styled-components';
import { Icon } from '@components/icons';
import { socialMedia } from '@config';
import ScrollToTop from './scrollToTop';
import { useLanguage } from '../hooks/LanguageContext';
import { useKeyboardShortcuts } from '../hooks/KeyboardShortcutsContext';

const StyledFooter = styled.footer`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  height: auto;
  min-height: 70px;
  padding: 15px;
  text-align: center;
`;

const StyledSocialLinks = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    max-width: 270px;
    margin: 0 auto 10px;
    color: var(--light-text-color);
  }

  ul {
    ${({ theme }) => theme.mixins.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;

    a {
      padding: 10px;
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

const StyledCredit = styled.div`
  color: var(--text-color);
  font-family: var(--font-mono);
  font-size: var(--fz-xxs);
  line-height: 1;

  a {
    padding: 10px;
  }

  .footer-shortcuts {
    margin-top: 10px;

    button {
      font-family: inherit;
      font-size: inherit;
      color: inherit;
      background: none;
      border: none;
      padding: 10px;
      cursor: pointer;
      text-decoration: underline;
      text-underline-offset: 2px;

      &:hover {
        color: var(--primary-color);
      }
    }
  }

  .github-stats {
    margin-top: 10px;

    & > span {
      display: inline-flex;
      align-items: center;
      margin: 0 7px;
    }
    svg {
      display: inline-block;
      margin-right: 5px;
      width: 14px;
      height: 14px;
    }
  }

  .footer-how-wrap {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 0.25s ease, opacity 0.2s ease;
    opacity: 0;
  }

  .footer-how-wrap.expanded {
    grid-template-rows: 1fr;
    margin-top: 6px;
    opacity: 1;
  }

  .footer-how-trigger {
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    background: none;
    border: none;
    padding: 4px 6px;
    margin-left: 2px;
    cursor: pointer;
    text-decoration: underline;
    text-underline-offset: 2px;
    opacity: 0.8;

    &:hover {
      color: var(--primary-color);
      opacity: 1;
    }
  }

  .footer-how-stack {
    overflow: hidden;
    min-height: 0;
    padding: 8px 12px;
    font-size: var(--fz-xxs);
    color: var(--text-color);
    background: var(--light-bg-color);
    border-radius: var(--border-radius);
  }

  .footer-time-msg {
    margin-top: 10px;
    font-size: var(--fz-xxs);
    color: var(--text-color);
    opacity: 0.75;
  }
`;

const formatBuildDate = isoString => {
  if (!isoString) {
    return '';
  }
  const date = new Date(isoString);
  return new Intl.DateTimeFormat('en', { month: 'long', year: 'numeric' }).format(date);
};

const getTimeGreetingKey = () => {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) {return 'footer_time_morning';}
  if (hour >= 21 || hour < 5) {return 'footer_time_night';}
  return null;
};

const Footer = () => {
  const { t } = useLanguage();
  const { openShortcuts } = useKeyboardShortcuts();
  const [showHow, setShowHow] = useState(false);
  const buildDate = typeof process !== 'undefined' && process.env.GATSBY_BUILD_DATE;
  const lastUpdated = formatBuildDate(buildDate);
  const timeGreetingKey = getTimeGreetingKey();

  return (
    <StyledFooter>
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

      <StyledCredit tabIndex={-1}>
        <div>
          <a href="https://www.angelortizv.com/authors/angelo-ortiz-vega/">
            {t('footer_text_build')} Angelo Ortiz
          </a>
          <button
            type="button"
            className="footer-how-trigger"
            onClick={() => setShowHow(prev => !prev)}
            aria-expanded={showHow}
            aria-label={showHow ? t('footer_how_trigger') : t('footer_how_trigger')}>
            · {t('footer_how_trigger')}
          </button>
        </div>
        <div className={`footer-how-wrap${showHow ? ' expanded' : ''}`}>
          <div
            className="footer-how-stack"
            role="region"
            aria-label={t('footer_how_stack')}
            aria-hidden={!showHow}>
            {t('footer_how_stack')}
          </div>
        </div>
        {lastUpdated && (
          <div className="footer-updated" style={{ marginTop: '8px', opacity: 0.8 }}>
            {t('footer_last_updated')} {lastUpdated}
          </div>
        )}
        {timeGreetingKey && (
          <div className="footer-time-msg" aria-hidden="true">
            {t(timeGreetingKey)}
          </div>
        )}
        <div className="footer-shortcuts">
          <button type="button" onClick={openShortcuts}>
            {t('accessibility_text_shortcuts')}
          </button>
        </div>
      </StyledCredit>

      <ScrollToTop className="scrollToTop" />
    </StyledFooter>
  );
};

export default Footer;
