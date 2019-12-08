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
  ${media.tablet`
    padding-top: 150px;
  `};
`;

export default Main;
