import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { navDelay } from '@utils';
import { Layout } from '@components';
import { usePrefersReducedMotion } from '@hooks';
import { LanguageProvider, useLanguage } from '../hooks/LanguageContext';

const StyledMainContainer = styled.main`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
`;
const StyledTitle = styled.h1`
  color: var(--signal-color);
  font-family: var(--font-mono);
  font-size: clamp(100px, 25vw, 200px);
  line-height: 1;
`;
const StyledSubtitle = styled.h2`
  font-size: clamp(var(--fz-heading), 5vw, 50px);
  font-weight: 400;
`;
const StyledHomeButton = styled(Link)`
  ${({ theme }) => theme.mixins.bigButton};
  margin-top: 40px;
`;

const NotFoundPage = ({ location }) => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  const { t } = useLanguage();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const content = (
    <StyledMainContainer className="fillHeight">
      <StyledTitle>404</StyledTitle>
      <StyledSubtitle>{t("general_404_notfound")}</StyledSubtitle>
      <StyledHomeButton to="/">{t("general_404_goHome")}</StyledHomeButton>
    </StyledMainContainer>
  );

  return (
    <LanguageProvider>
      <Layout location={location}>
        <Helmet title="Page Not Found" />

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
    </LanguageProvider>
  );
};

NotFoundPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default NotFoundPage;
