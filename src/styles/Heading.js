import styled from 'styled-components';

const Heading = styled.h3`
  position: relative;
  display: flex;
  align-items: center;
  margin: 10px 0 40px;
  width: 100%;
  white-space: nowrap;
  font-size: ${({ theme }) => theme.fontSizes.h3};
  @media (${({ theme }) => theme.bp.tabletL}) {
    font-size: 24px;
  }

  &:before {
    counter-increment: section;
    content: '0' counter(section) '.';
    margin-right: 10px;
    font-family: ${({ theme }) => theme.fonts.SFMono};
    font-weight: 400;
    color: ${({ theme }) => theme.colors.green};
    font-size: ${({ theme }) => theme.fontSizes.xl};
    position: relative;
    bottom: 4px;
    @media (${({ theme }) => theme.bp.tabletL}) {
      font-size: ${({ theme }) => theme.fontSizes.lg};
    }
  }

  &:after {
    content: '';
    display: block;
    height: 1px;
    width: 300px;
    background-color: ${({ theme }) => theme.colors.lightestNavy};
    position: relative;
    top: -5px;
    margin-left: 20px;
    @media (${({ theme }) => theme.bp.desktopS}) {
      width: 200px;
    }
    @media (${({ theme }) => theme.bp.tabletL}) {
      width: 100%;
    }
    @media (${({ theme }) => theme.bp.tabletS}) {
      margin-left: 10px;
    }
  }
`;

export default Heading;
