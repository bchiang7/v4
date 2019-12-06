import styled from 'styled-components';
import mixins from './mixins';

const Main = styled.main`
  ${mixins.sidePadding};
  margin: 0 auto;
  width: 100%;
  min-height: 100vh;
`;

export default Main;
