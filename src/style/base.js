import { injectGlobal } from 'styled-components';
import theme from './theme';
import * as fonts from './fonts';

const base = injectGlobal`
  @font-face {
    font-family: 'Calibre';
    src: url(${fonts.CalibreMediumTTF}) format('ttf'),
    url(${fonts.CalibreMediumWOFF}) format('woff'),
    url(${fonts.CalibreMediumtruetype}) format('woff2');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'Calibre';
    src: url(${fonts.CalibreMediumItalicTTF}) format('truetype'),
    url(${fonts.CalibreMediumItalicWOFF}) format('woff'),
    url(${fonts.CalibreMediumItalictruetype}) format('woff2');
    font-weight: 500;
    font-style: italic;
  }
  @font-face {
    font-family: 'Calibre';
    src: url(${fonts.CalibreRegularTTF}) format('truetype'),
    url(${fonts.CalibreRegularWOFF}) format('woff'),
    url(${fonts.CalibreRegulartruetype}) format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Calibre';
    src: url(${fonts.CalibreRegularItalicTTF}) format('truetype'),
    url(${fonts.CalibreRegularItalicWOFF}) format('woff'),
    url(${fonts.CalibreRegularItalictruetype}) format('woff2');
    font-weight: normal;
    font-style: italic;
  }
  @font-face {
    font-family: 'Calibre';
    src: url(${fonts.CalibreSemiboldTTF}) format('truetype'),
    url(${fonts.CalibreSemiboldWOFF}) format('woff'),
    url(${fonts.CalibreSemiboldtruetype}) format('woff2');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'Calibre';
    src: url(${fonts.CalibreSemiboldItalicTTF}) format('truetype'),
    url(${fonts.CalibreSemiboldItalicWOFF}) format('woff'),
    url(${fonts.CalibreSemiboldItalictruetype}) format('woff2');
    font-weight: 500;
    font-style: italic;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url(${fonts.SFMonoMediumTTF}) format('truetype'),
    url(${fonts.SFMonoMediumWOFF}) format('woff'),
    url(${fonts.SFMonoMediumtruetype}) format('woff2');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url(${fonts.SFMonoMediumItalicTTF}) format('truetype'),
    url(${fonts.SFMonoMediumItalicWOFF}) format('woff'),
    url(${fonts.SFMonoMediumItalictruetype}) format('woff2');
    font-weight: 500;
    font-style: italic;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url(${fonts.SFMonoRegularTTF}) format('truetype'),
    url(${fonts.SFMonoRegularWOFF}) format('woff'),
    url(${fonts.SFMonoRegulartruetype}) format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url(${fonts.SFMonoRegularItalicTTF}) format('truetype'),
    url(${fonts.SFMonoRegularItalicWOFF}) format('woff'),
    url(${fonts.SFMonoRegularItalictruetype}) format('woff2');
    font-weight: normal;
    font-style: italic;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url(${fonts.SFMonoSemiboldTTF}) format('truetype'),
    url(${fonts.SFMonoSemiboldWOFF}) format('woff'),
    url(${fonts.SFMonoSemiboldtruetype}) format('woff2');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url(${fonts.SFMonoSemiboldItalicTTF}) format('truetype'),
    url(${fonts.SFMonoSemiboldItalicWOFF}) format('woff'),
    url(${fonts.SFMonoSemiboldItalictruetype}) format('woff2');
    font-weight: 500;
    font-style: italic;
  }

  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: ${theme.colors.navy};
    color: ${theme.colors.slate};
    font-family: ${theme.fonts.Calibre};
    font-size: ${theme.fontSizes.xlarge};
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
`;

export default base;
