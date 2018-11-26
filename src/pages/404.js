import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import styled from 'styled-components';
import { theme, mixins, media, Main } from '../styles';
const { colors, fonts } = theme;

const MainContainer = styled(Main)`
  ${mixins.flexCenter};
  flex-direction: column;
  height: 100vh !important;
`;
const Title = styled.h1`
  color: ${colors.green};
  font-family: ${fonts.SFMono};
  font-size: 20vw;
  line-height: 1;
  ${media.bigDesktop`font-size: 200px;`}
  ${media.phablet`font-size: 120px;`};
`;
const Subtitle = styled.h2`
  font-size: 5vw;
  font-weight: 400;
  ${media.bigDesktop`font-size: 50px;`};
  ${media.phablet`font-size: 30px;`};
`;
const HomeButton = styled(Link)`
  ${mixins.bigButton};
  margin-top: 40px;
`;

const NotFoundPage = () => (
  <Layout>
    <MainContainer id="content">
      <Title>404</Title>
      <Subtitle>Page Not Found</Subtitle>
      <HomeButton to="/">Go Home</HomeButton>
    </MainContainer>
  </Layout>
);

export default NotFoundPage;
