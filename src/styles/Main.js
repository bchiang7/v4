import styled from 'styled-components';
import mixins from './mixins';

const Main = styled.main`
  ${mixins.sidePadding};
  margin: 0 auto;
  width: 100%;
  color: rgba(255, 255, 255, 0.87);
`;

export default Main;
