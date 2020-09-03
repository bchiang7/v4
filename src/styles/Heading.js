import styled from 'styled-components';
import media from './media';

const Heading = styled.h3`
  position: relative;
  display: flex;
  align-items: center;
  margin: 10px 0 40px;
  width: 100%;
  white-space: nowrap;
  font-size: ${({ theme }) => theme.fontSizes.h3};
  ${media.tablet`
    font-size: 24px;
  `};

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
    ${media.tablet`
      font-size: ${({ theme }) => theme.fontSizes.lg};
    `};
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
    ${media.desktop`
      width: 200px
    `};
    ${media.tablet`
      width: 100%;
    `};
    ${media.thone`
      margin-left: 10px;
    `};
  }
`;

export default Heading;
