import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from '@components';
import styled from 'styled-components';
import { theme, media, Main } from '@styles';
const { colors, fonts, fontSizes } = theme;

const StyledMainContainer = styled(Main)`
  min-height: 100vh;
  height: 100%;
`;
const StyledTitleContainer = styled.div`
  margin-top: 200px;
`;
const StyledTitle = styled.h1`
  font-size: 80px;
  line-height: 1.1;
  margin: 0;
  ${media.desktop`font-size: 70px;`};
  ${media.tablet`font-size: 60px;`};
  ${media.phablet`font-size: 50px;`};
  ${media.phone`font-size: 40px;`};
`;
const StyledSubtitle = styled.h2`
  color: ${colors.green};
  margin: 0 0 20px 3px;
  font-size: ${fontSizes.medium};
  font-family: ${fonts.SFMono};
  font-weight: normal;
  ${media.desktop`font-size: ${fontSizes.small};`};
  ${media.tablet`font-size: ${fontSizes.smallish};`};
`;

const ArchivePage = ({ location }) => (
  <Layout location={location}>
    <StyledMainContainer>
      <StyledTitleContainer>
        <StyledTitle>Archive</StyledTitle>
        <StyledSubtitle>A big list of things I’ve worked on</StyledSubtitle>
      </StyledTitleContainer>
    </StyledMainContainer>
  </Layout>
);

ArchivePage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default ArchivePage;
