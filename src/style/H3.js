import styled from 'styled-components';
import theme from './theme';
import media from './media';

const H3 = styled.h3`
  position: relative;
  display: flex;
  align-items: center;
  margin: 10px 0 40px;
  white-space: nowrap;
  font-size: ${theme.fontSizes.h3};

  ${media.tablet`
    font-size: 24px;
  `};

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

    ${media.tablet`
      font-size: ${theme.fontSizes.large};
    `};
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

    ${media.desktop`width: 200px`};
    ${media.tablet`width: 100%;`};
  }
`;

export default H3;
