import styled from 'styled-components';
import media from './media';

const Main = styled.main`
  margin: 0 auto;
  width: 100%;
  max-width: 1600px;
  min-height: 100vh;
  padding: 200px 150px;

  ${media.desktop`
    padding: 200px 100px;
  `};
  ${media.tablet`
    padding: 150px 50px;
  `};
  ${media.phablet`
    padding: 125px 25px;
  `};

  &.fillHeight {
    padding: 0 150px;

    ${media.desktop`
      padding: 0 100px;
    `};
    ${media.tablet`
      padding: 0 50px;
    `};
    ${media.phablet`
      padding: 0 25px;
    `};
  }
`;

export default Main;
