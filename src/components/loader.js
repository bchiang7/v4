import React, { Component } from 'react';

import anime from 'animejs';

import styled from 'styled-components';
import { theme, mixins } from '../style';

const LoaderContainer = styled.div`
  ${mixins.flexCenter};
  background-color: ${theme.colors.darkNavy};
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
`;
const LogoWrapper = styled.div`
  width: max-content;
  max-width: 100px;

  svg {
    width: 100%;
    height: 100%;
    display: block;
    margin: 0 auto;
    fill: none;
    user-select: none;

    #B {
      opacity: 0;
    }
  }
`;

class Loader extends Component {
  componentDidMount() {
    document.body.style.overflow = 'hidden';
    this.animate();
  }

  animate() {
    const loader = anime.timeline({
      complete: () => (document.body.style.overflow = 'visible'),
    });

    loader
      .add({
        targets: '#logo path',
        delay: 1000,
        duration: 2000,
        easing: 'easeInOutQuart',
        strokeDashoffset: [anime.setDashoffset, 0],
      })
      .add({
        targets: '#logo #B',
        duration: 750,
        easing: 'easeInOutQuart',
        opacity: 1,
      })
      .add({
        targets: '#logo',
        delay: 1000,
        duration: 750,
        easing: 'easeInOutQuart',
        opacity: 0,
      })
      .add({
        targets: '.loader',
        duration: 500,
        easing: 'easeInOutQuart',
        opacity: 0,
        zIndex: -1,
      });
  }

  render() {
    return (
      <LoaderContainer className="loader">
        <LogoWrapper>
          <svg
            id="logo"
            xmlns="http://www.w3.org/2000/svg"
            aria-labelledby="title"
            viewBox="0 0 100 100">
            <title>Logo</title>
            <g>
              <g
                id="B"
                transform="translate(36, 33)"
                fill="#64FFDA"
                fontFamily="Calibre-Medium, Calibre"
                fontSize="50"
                fontWeight="400"
                letterSpacing="4.16666603">
                <text>
                  <tspan x="0.141666985" y="33">
                    B
                  </tspan>
                </text>
              </g>
              <path
                stroke="#64FFDA"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="
            M 50, 5
            L 11, 27
            L 11, 72
            L 50, 95
            L 89, 73
            L 89, 28 z"
              />
            </g>
          </svg>
        </LogoWrapper>
      </LoaderContainer>
    );
  }
}

export default Loader;
