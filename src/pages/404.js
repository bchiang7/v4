import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { navDelay } from '@utils';
import { Layout } from '@components';

const StyledMainContainer = styled.main`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
`;
const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.colors.green};
  font-family: ${({ theme }) => theme.fonts.SFMono};
  font-size: 12vw;
  line-height: 1;
  @media (${({ theme }) => theme.bp.desktopM}) {
    font-size: 200px;
  }
  @media (${({ theme }) => theme.bp.mobileL}) {
    font-size: 120px;
  }
`;
const StyledSubtitle = styled.h2`
  font-size: 3vw;
  font-weight: 400;
  @media (${({ theme }) => theme.bp.desktopM}) {
    font-size: 50px;
  }
  @media (${({ theme }) => theme.bp.mobileL}) {
    font-size: 30px;
  }
`;
const StyledHomeButton = styled(Link)`
  ${({ theme }) => theme.mixins.bigButton};
  margin-top: 40px;
`;

const NotFoundPage = ({ location }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Layout location={location}>
      <Helmet title="Page Not Found" />

      <TransitionGroup component={null}>
        {isMounted && (
          <CSSTransition timeout={500} classNames="fadeup">
            <StyledMainContainer className="fillHeight">
              <StyledTitle>404</StyledTitle>
              <StyledSubtitle>Page Not Found</StyledSubtitle>
              <StyledHomeButton to="/">Go Home</StyledHomeButton>
            </StyledMainContainer>
          </CSSTransition>
        )}
      </TransitionGroup>
    </Layout>
  );
};

NotFoundPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default NotFoundPage;
