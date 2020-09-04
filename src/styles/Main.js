import styled from 'styled-components';

const Main = styled.main`
  margin: 0 auto;
  width: 100%;
  max-width: 1600px;
  min-height: 100vh;
  padding: 200px 150px;

  @media (${({ theme }) => theme.bp.desktopS}) {
    padding: 200px 100px;
  }
  @media (${({ theme }) => theme.bp.tabletL}) {
    padding: 150px 50px;
  }
  @media (${({ theme }) => theme.bp.mobileL}) {
    padding: 125px 25px;
  }

  &.fillHeight {
    padding: 0 150px;

    @media (${({ theme }) => theme.bp.desktopS}) {
      padding: 0 100px;
    }
    @media (${({ theme }) => theme.bp.tabletL}) {
      padding: 0 50px;
    }
    @media (${({ theme }) => theme.bp.mobileL}) {
      padding: 0 25px;
    }
  }
`;

export default Main;
