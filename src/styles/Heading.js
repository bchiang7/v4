import styled from 'styled-components';

const Heading = styled.h2`
  display: flex;
  align-items: center;
  position: relative;
  margin: 10px 0 40px;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSizes.h3};
  white-space: nowrap;

  @media (${({ theme }) => theme.bp.tabletL}) {
    font-size: 24px;
  }

  &:before {
    position: relative;
    bottom: 4px;
    counter-increment: section;
    content: '0' counter(section) '.';
    margin-right: 10px;
    color: ${({ theme }) => theme.colors.green};
    font-family: ${({ theme }) => theme.fonts.SFMono};
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: 400;

    @media (${({ theme }) => theme.bp.tabletL}) {
      font-size: ${({ theme }) => theme.fontSizes.lg};
    }
  }

  &:after {
    content: '';
    display: block;
    position: relative;
    top: -5px;
    width: 300px;
    height: 1px;
    margin-left: 20px;
    background-color: ${({ theme }) => theme.colors.lightestNavy};

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
