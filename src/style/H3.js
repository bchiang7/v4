import styled from 'styled-components';
import theme from './theme';

const H3 = styled.h3`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  font-size: ${theme.fontSizes.h3};

  &:before {
    counter-increment: section;
    content: '0' counter(section) '.';
    margin-right: 10px;
    font-family: ${theme.fonts.SFMono};
    font-weight: 400;
    color: ${theme.colors.green};
    font-size: ${theme.fontSizes.xlarge};
    position: relative;
    bottom: 4px;
  }

  &:after {
    content: '';
    display: block;
    height: 1px;
    width: 300px;
    background-color: ${theme.colors.mediumGrey};
    position: relative;
    top: -5px;
    margin-left: 20px;
  }
`;

export default H3;
