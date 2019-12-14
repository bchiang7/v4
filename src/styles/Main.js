import styled from 'styled-components';
import mixins from './mixins';
import media from './media';

const Main = styled.main`
  ${mixins.sidePadding};
  margin: 0 auto;
  width: 100%;
  max-width: 1600px;
  min-height: 100vh;
  padding-top: 200px;
  padding-bottom: 200px;
  ${media.desktop`
    padding-top: 200px;
    padding-bottom: 200px;
  `};
  ${media.tablet`
    padding-top: 150px;
    padding-bottom: 150px;
  `};
  ${media.phablet`
    padding-top: 125px;
    padding-bottom: 125px;
  `};

  &.fillHeight {
    padding-top: 0;
    padding-bottom: 0;
    ${media.desktop`
    padding-top: 0;
    padding-bottom: 0;
  `};
    ${media.tablet`
    padding-top: 0;
    padding-bottom: 0;
  `};
    ${media.phablet`
    padding-top: 0;
    padding-bottom: 0;
  `};
  }
`;

export default Main;
