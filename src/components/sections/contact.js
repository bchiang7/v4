import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { srConfig, email } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';
import { useLanguage } from '../../hooks/LanguageContext';

const CopyIcon = props => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}>
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);

const CheckIcon = props => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--primary-color);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .response-time {
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
    color: var(--text-color);
    margin: 0;
    opacity: 0.7;
  }

  .location {
    margin-top: 16px;
    font-family: var(--font-mono);
    font-size: var(--fz-sm);
    color: var(--light-text-color);
  }

  .contact-actions {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    gap: 12px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
  }

  .copy-email-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
    color: var(--text-color);
    background: none;
    border: none;
    padding: 6px 0;
    cursor: pointer;
    transition: var(--transition);
    opacity: 0.85;

    &:hover {
      color: var(--primary-color);
      opacity: 1;
    }

    .copy-icon {
      width: 12px;
      height: 12px;
      opacity: 0.9;
    }
  }
`;

const Contact = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [copied, setCopied] = useState(false);

  const { t } = useLanguage();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback: open mailto
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <StyledContactSection id="contact" ref={revealContainer}>
      <h2 className="numbered-heading overline">{t('contact_text_over')}</h2>

      <h2 className="title">{t('contact_text_cta')}</h2>

      <p>{t('contact_text_desc')}</p>

      <p className="location" aria-label={t('contact_location_aria')}>
        {t('contact_location')}
      </p>

      <div className="contact-actions">
        <a className="email-link" href={`mailto:${email}`}>
          {t('contact_btn_hello')}
        </a>
        <p className="response-time">{t('contact_response_time')}</p>
        <button
          type="button"
          className="copy-email-btn"
          onClick={handleCopyEmail}
          aria-label={t('contact_btn_copy_aria')}>
          {copied ? (
            <>
              <CheckIcon className="copy-icon" aria-hidden />
              {t('contact_btn_copied')}
            </>
          ) : (
            <>
              <CopyIcon className="copy-icon" aria-hidden />
              {t('contact_btn_copy')}
            </>
          )}
        </button>
      </div>
    </StyledContactSection>
  );
};

export default Contact;
