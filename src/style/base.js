import { injectGlobal } from 'styled-components';
import theme from './theme';
import media from './media';
import * as fonts from './fonts';

const base = injectGlobal`
  @font-face {
    font-family: 'Calibre';
    src: local('Calibre'),
    url(${fonts.CalibreRegularWOFF2}) format('woff2'),
    url(${fonts.CalibreRegularWOFF}) format('woff'),
    url(${fonts.CalibreRegularTTF}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Calibre';
    src: local('Calibre'),
    url(${fonts.CalibreRegularItalicWOFF2}) format('woff2'),
    url(${fonts.CalibreRegularItalicWOFF}) format('woff'),
    url(${fonts.CalibreRegularItalicTTF}) format('truetype');
    font-weight: normal;
    font-style: italic;
    font-display: swap;
  }
  @font-face {
    font-family: 'Calibre';
    src: local('Calibre'),
    url(${fonts.CalibreMediumWOFF2}) format('woff2'),
    url(${fonts.CalibreMediumWOFF}) format('woff'),
    url(${fonts.CalibreMediumTTF}) format('truetype');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Calibre';
    src: local('Calibre'),
    url(${fonts.CalibreMediumItalicWOFF2}) format('woff2'),
    url(${fonts.CalibreMediumItalicWOFF}) format('woff'),
    url(${fonts.CalibreMediumItalicTTF}) format('truetype');
    font-weight: 500;
    font-style: italic;
    font-display: swap;
  }
  @font-face {
    font-family: 'Calibre';
    src: local('Calibre'),
    url(${fonts.CalibreSemiboldWOFF2}) format('woff2'),
    url(${fonts.CalibreSemiboldWOFF}) format('woff'),
    url(${fonts.CalibreSemiboldTTF}) format('truetype');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Calibre';
    src: local('Calibre'),
    url(${fonts.CalibreSemiboldItalicWOFF2}) format('woff2'),
    url(${fonts.CalibreSemiboldItalicWOFF}) format('woff'),
    url(${fonts.CalibreSemiboldItalicTTF}) format('truetype');
    font-weight: 600;
    font-style: italic;
    font-display: swap;
  }
  @font-face {
    font-family: 'SF Mono';
    src: local('SF Mono'),
    url(${fonts.SFMonoRegularWOFF2}) format('woff2'),
    url(${fonts.SFMonoRegularWOFF}) format('woff'),
    url(${fonts.SFMonoRegularTTF}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'SF Mono';
    src: local('SF Mono'),
    url(${fonts.SFMonoRegularItalicWOFF2}) format('woff2'),
    url(${fonts.SFMonoRegularItalicWOFF}) format('woff'),
    url(${fonts.SFMonoRegularItalicTTF}) format('truetype');
    font-weight: normal;
    font-style: italic;
    font-display: swap;
  }
  @font-face {
    font-family: 'SF Mono';
    src: local('Calibre'),
    url(${fonts.SFMonoMediumWOFF2}) format('woff2'),
    url(${fonts.SFMonoMediumWOFF}) format('woff'),
    url(${fonts.SFMonoMediumTTF}) format('truetype');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'SF Mono';
    src: local('SF Mono'),
    url(${fonts.SFMonoMediumItalicWOFF2}) format('woff2'),
    url(${fonts.SFMonoMediumItalicWOFF}) format('woff'),
    url(${fonts.SFMonoMediumItalicTTF}) format('truetype');
    font-weight: 500;
    font-style: italic;
    font-display: swap;
  }
  @font-face {
    font-family: 'SF Mono';
    src: local('SF Mono'),
    url(${fonts.SFMonoSemiboldWOFF2}) format('woff2'),
    url(${fonts.SFMonoSemiboldWOFF}) format('woff'),
    url(${fonts.SFMonoSemiboldTTF}) format('truetype');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'SF Mono';
    src: local('SF Mono'),
    url(${fonts.SFMonoSemiboldItalicWOFF2}) format('woff2'),
    url(${fonts.SFMonoSemiboldItalicWOFF}) format('woff'),
    url(${fonts.SFMonoSemiboldItalicTTF}) format('truetype');
    font-weight: 600;
    font-style: italic;
    font-display: swap;
  }

  html {
    box-sizing: border-box;
    width: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: ${theme.colors.navy};
    color: ${theme.colors.slate};
    font-family: ${theme.fonts.Calibre};
    font-size: ${theme.fontSizes.xlarge};
    ${media.tablet`font-size: ${theme.fontSizes.large};`}

    &.blur {
      #root > * {
        filter: blur(5px) brightness(0.7);
        transition: ${theme.transition};
        pointer-events: none;
        user-select: none;
      }
    }
  }

  ::selection {
    background-color: rgba(76, 87, 114, 0.5);
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 600;
    color: ${theme.colors.white};
    margin: 0 0 10px 0;
  }

  #root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
  }

  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
    vertical-align: middle;
  }

  button {
    outline: 0;
    border: 0;
  }

  .gatsby-image-outer-wrapper {
    height: 100%;
  }
`;

export default base;
