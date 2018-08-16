import styled from 'styled-components';

const H3 = styled.h3`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  font-size: $fzH3;

  &:before {
    counter-increment: section;
    content: '0' counter(section) '.';
    margin-right: 10px;
    font-family: $SFMono;
    font-weight: 400;
    color: $green;
    font-size: $fzXLarge;
    position: relative;
    bottom: 4px;
  }

  &:after {
    content: '';
    display: block;
    height: 1px;
    width: 300px;
    background-color: $medium-grey;
    position: relative;
    top: -5px;
    margin-left: 20px;
  }
`;

export default H3;
