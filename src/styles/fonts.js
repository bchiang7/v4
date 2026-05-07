import { css } from 'styled-components';

import CalibreRegularWoff2 from '@fonts/Calibre/Calibre-Regular.woff2';
import CalibreMediumWoff2 from '@fonts/Calibre/Calibre-Medium.woff2';
import CalibreSemiboldWoff2 from '@fonts/Calibre/Calibre-Semibold.woff2';

import CalibreRegularItalicWoff2 from '@fonts/Calibre/Calibre-RegularItalic.woff2';
import CalibreMediumItalicWoff2 from '@fonts/Calibre/Calibre-MediumItalic.woff2';
import CalibreSemiboldItalicWoff2 from '@fonts/Calibre/Calibre-SemiboldItalic.woff2';

import SFMonoRegularWoff2 from '@fonts/SFMono/SFMono-Regular.woff2';
import SFMonoSemiboldWoff2 from '@fonts/SFMono/SFMono-Semibold.woff2';

import SFMonoRegularItalicWoff2 from '@fonts/SFMono/SFMono-RegularItalic.woff2';
import SFMonoSemiboldItalicWoff2 from '@fonts/SFMono/SFMono-SemiboldItalic.woff2';

const calibreNormalWeights = {
  400: CalibreRegularWoff2,
  500: CalibreMediumWoff2,
  600: CalibreSemiboldWoff2,
};

const calibreItalicWeights = {
  400: CalibreRegularItalicWoff2,
  500: CalibreMediumItalicWoff2,
  600: CalibreSemiboldItalicWoff2,
};

const sfMonoNormalWeights = {
  400: SFMonoRegularWoff2,
  600: SFMonoSemiboldWoff2,
};

const sfMonoItalicWeights = {
  400: SFMonoRegularItalicWoff2,
  600: SFMonoSemiboldItalicWoff2,
};

const calibre = {
  name: 'Calibre',
  normal: calibreNormalWeights,
  italic: calibreItalicWeights,
};

const sfMono = {
  name: 'SF Mono',
  normal: sfMonoNormalWeights,
  italic: sfMonoItalicWeights,
};

const createFontFaces = (family, style = 'normal') => {
  let styles = '';

  for (const [weight, woff2] of Object.entries(family[style])) {
    styles += `
      @font-face {
        font-family: '${family.name}';
        src: url(${woff2}) format('woff2');
        font-weight: ${weight};
        font-style: ${style};
        font-display: swap;
      }
    `;
  }

  return styles;
};

const calibreNormal = createFontFaces(calibre);
const calibreItalic = createFontFaces(calibre, 'italic');

const sfMonoNormal = createFontFaces(sfMono);
const sfMonoItalic = createFontFaces(sfMono, 'italic');

const Fonts = css`
  ${calibreNormal + calibreItalic + sfMonoNormal + sfMonoItalic}
`;

export default Fonts;
