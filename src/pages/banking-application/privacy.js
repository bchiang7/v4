// src/pages/banking-application/privacy.js
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { Layout } from '@components';
import { navDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';

const StyledMainContainer = styled.main`
  max-width: 900px;
  margin: 0 auto;
  padding: 120px 20px 80px;

  h1 {
    margin: 0 0 18px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(32px, 4vw, 48px);
    line-height: 1.2;
  }

  h2 {
    margin: 34px 0 12px;
    font-size: 22px;
    font-weight: 600;
  }

  p,
  li {
    font-size: 16px;
    line-height: 1.6;
    color: var(--light-slate);
  }

  ul {
    margin: 10px 0 0;
    padding-left: 20px;
  }

  a {
    color: var(--green);
  }

  .meta {
    margin-top: 6px;
    font-size: 14px;
    color: var(--slate);
  }

  .card {
    margin-top: 22px;
    padding: 18px 18px 14px;
    border: 1px solid rgba(136, 146, 176, 0.25);
    border-radius: 12px;
    background: rgba(2, 12, 27, 0.35);
  }

  .strong {
    font-weight: 600;
    color: var(--lightest-slate);
  }

  code {
    font-family: var(--font-mono);
    font-size: 0.95em;
    padding: 2px 6px;
    border-radius: 6px;
    background: rgba(136, 146, 176, 0.12);
  }
`;

const PrivacyPolicyPage = ({ location }) => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, [prefersReducedMotion]);

  const content = (
    <StyledMainContainer>
      <h1>Banking Application — Privacy Policy</h1>
      <div className="meta">Last updated: {new Date().toLocaleDateString()}</div>

      <div className="card">
        <p className="strong">
          Summary: Banking Application runs locally on the user’s computer and is designed to import
          bank transaction files into a Google Sheet selected by the user. The application does not
          operate any external servers and does not sell or share user data.
        </p>
      </div>

      <h2>1. What the Application Does</h2>
      <p>
        Banking Application helps users import transaction files (such as <code>.csv</code>, <code>.xlsx</code>,
        and supported <code>.pdf</code> statements) into a Google Sheets budget spreadsheet chosen by the
        user.
      </p>

      <h2>2. Data the Application Accesses</h2>
      <p>The application may access the following data on your device:</p>
      <ul>
        <li>Transaction files that you manually upload into the application (e.g., CSV/XLSX/PDF).</li>
        <li>Temporary review data generated during import (to allow you to confirm categories before writing).</li>
      </ul>

      <p>
        The application also accesses Google Sheets only after you authorize it via Google OAuth, and only
        to read from and write to the spreadsheet you link.
      </p>

      <h2>3. Google OAuth &amp; Google Sheets Permissions</h2>
      <p>
        Banking Application requests permission to access Google Sheets in order to append your transactions
        to the sheet tabs in your budget spreadsheet.
      </p>
      <p className="strong">
        The application does not request access to Gmail, Contacts, Google Drive files, or any other Google services
        beyond Google Sheets.
      </p>

      <h2>4. Data Storage</h2>
      <p>
        Banking Application is a local desktop application. It does not transmit your transaction data to the developer
        or to any external server.
      </p>
      <ul>
        <li>Your Google authorization token is stored locally on your computer so you do not need to sign in every time.</li>
        <li>Imported transactions are written to your own Google Sheet.</li>
        <li>The developer does not receive, collect, or store your transaction data.</li>
      </ul>

      <h2>5. Data Sharing</h2>
      <p>
        Banking Application does not sell, rent, or share personal data. Your data remains on your device and in your
        Google Sheet. No analytics or tracking is performed by the application.
      </p>

      <h2>6. Security</h2>
      <p>
        The application uses Google’s OAuth flow for authorization and communicates with Google Sheets using encrypted
        HTTPS connections. You should keep your computer and Google account secured and avoid sharing your Google Sheet
        with untrusted parties.
      </p>

      <h2>7. Changes to this Policy</h2>
      <p>
        This policy may be updated occasionally. Updates will be posted on this page with a revised “Last updated” date.
      </p>

      <h2>8. Contact</h2>
      <p>
        For questions about this Privacy Policy, contact: <a href="mailto:adambenalia287@gmail.com">adambenalia287@gmail.com</a>
      </p>
    </StyledMainContainer>
  );

  return (
    <Layout location={location}>
      <Helmet title="Banking Application — Privacy Policy" />

      {prefersReducedMotion ? (
        <>{content}</>
      ) : (
        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition timeout={500} classNames="fadeup">
              {content}
            </CSSTransition>
          )}
        </TransitionGroup>
      )}
    </Layout>
  );
};

PrivacyPolicyPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default PrivacyPolicyPage;
