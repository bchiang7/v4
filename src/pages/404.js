import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { Layout } from '@components';
import styled from 'styled-components';
import { theme, mixins, media, Main } from '@styles';
const { colors, fonts } = theme;

const StyledMainContainer = styled(Main)`
  ${mixins.flexCenter};
  flex-direction: column;
  height: 100vh !important;
`;
const StyledTitle = styled.h1`
  color: ${colors.green};
  font-family: ${fonts.SFMono};
  font-size: 12vw;
  line-height: 1;
  ${media.bigDesktop`font-size: 200px;`}
  ${media.phablet`font-size: 120px;`};
`;
const StyledSubtitle = styled.h2`
  font-size: 3vw;
  font-weight: 400;
  ${media.bigDesktop`font-size: 50px;`};
  ${media.phablet`font-size: 30px;`};
`;
const StyledHomeButton = styled(Link)`
  ${mixins.bigButton};
  margin-top: 40px;
`;

const NotFoundPage = ({ location }) => (
  <Layout location={location}>
    <StyledMainContainer>
      <StyledTitle>404</StyledTitle>
      <StyledSubtitle>Page Not Found</StyledSubtitle>
      <StyledHomeButton to="/">Go Home</StyledHomeButton>
    </StyledMainContainer>
  </Layout>
);

NotFoundPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default NotFoundPage;
