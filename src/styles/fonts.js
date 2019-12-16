import { css } from 'styled-components';

import CalibreLightTTF from '@fonts/Calibre/Calibre-Light.ttf';
import CalibreLightWOFF from '@fonts/Calibre/Calibre-Light.woff';
import CalibreLightWOFF2 from '@fonts/Calibre/Calibre-Light.woff2';
import CalibreLightItalicTTF from '@fonts/Calibre/Calibre-LightItalic.ttf';
import CalibreLightItalicWOFF from '@fonts/Calibre/Calibre-LightItalic.woff';
import CalibreLightItalicWOFF2 from '@fonts/Calibre/Calibre-LightItalic.woff2';
import CalibreRegularTTF from '@fonts/Calibre/Calibre-Regular.ttf';
import CalibreRegularWOFF from '@fonts/Calibre/Calibre-Regular.woff';
import CalibreRegularWOFF2 from '@fonts/Calibre/Calibre-Regular.woff2';
import CalibreRegularItalicTTF from '@fonts/Calibre/Calibre-RegularItalic.ttf';
import CalibreRegularItalicWOFF from '@fonts/Calibre/Calibre-RegularItalic.woff';
import CalibreRegularItalicWOFF2 from '@fonts/Calibre/Calibre-RegularItalic.woff2';
import CalibreMediumTTF from '@fonts/Calibre/Calibre-Medium.ttf';
import CalibreMediumWOFF from '@fonts/Calibre/Calibre-Medium.woff';
import CalibreMediumWOFF2 from '@fonts/Calibre/Calibre-Medium.woff2';
import CalibreMediumItalicTTF from '@fonts/Calibre/Calibre-MediumItalic.ttf';
import CalibreMediumItalicWOFF from '@fonts/Calibre/Calibre-MediumItalic.woff';
import CalibreMediumItalicWOFF2 from '@fonts/Calibre/Calibre-MediumItalic.woff2';
import CalibreSemiboldTTF from '@fonts/Calibre/Calibre-Semibold.ttf';
import CalibreSemiboldWOFF from '@fonts/Calibre/Calibre-Semibold.woff';
import CalibreSemiboldWOFF2 from '@fonts/Calibre/Calibre-Semibold.woff2';
import CalibreSemiboldItalicTTF from '@fonts/Calibre/Calibre-SemiboldItalic.ttf';
import CalibreSemiboldItalicWOFF from '@fonts/Calibre/Calibre-SemiboldItalic.woff';
import CalibreSemiboldItalicWOFF2 from '@fonts/Calibre/Calibre-SemiboldItalic.woff2';

import SFMonoRegularTTF from '@fonts/SFMono/SFMono-Regular.ttf';
import SFMonoRegularWOFF from '@fonts/SFMono/SFMono-Regular.woff';
import SFMonoRegularWOFF2 from '@fonts/SFMono/SFMono-Regular.woff2';
import SFMonoRegularItalicTTF from '@fonts/SFMono/SFMono-RegularItalic.ttf';
import SFMonoRegularItalicWOFF from '@fonts/SFMono/SFMono-RegularItalic.woff';
import SFMonoRegularItalicWOFF2 from '@fonts/SFMono/SFMono-RegularItalic.woff2';
import SFMonoMediumTTF from '@fonts/SFMono/SFMono-Medium.ttf';
import SFMonoMediumWOFF from '@fonts/SFMono/SFMono-Medium.woff';
import SFMonoMediumWOFF2 from '@fonts/SFMono/SFMono-Medium.woff2';
import SFMonoMediumItalicTTF from '@fonts/SFMono/SFMono-MediumItalic.ttf';
import SFMonoMediumItalicWOFF from '@fonts/SFMono/SFMono-MediumItalic.woff';
import SFMonoMediumItalicWOFF2 from '@fonts/SFMono/SFMono-MediumItalic.woff2';
import SFMonoSemiboldTTF from '@fonts/SFMono/SFMono-Semibold.ttf';
import SFMonoSemiboldWOFF from '@fonts/SFMono/SFMono-Semibold.woff';
import SFMonoSemiboldWOFF2 from '@fonts/SFMono/SFMono-Semibold.woff2';
import SFMonoSemiboldItalicTTF from '@fonts/SFMono/SFMono-SemiboldItalic.ttf';
import SFMonoSemiboldItalicWOFF from '@fonts/SFMono/SFMono-SemiboldItalic.woff';
import SFMonoSemiboldItalicWOFF2 from '@fonts/SFMono/SFMono-SemiboldItalic.woff2';

const FontFaces = css`
  @font-face {
    font-family: 'Calibre';
    src: url(${CalibreLightWOFF2}) format('woff2'), url(${CalibreLightWOFF}) format('woff'),
      url(${CalibreLightTTF}) format('truetype');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'Calibre';
    src: url(${CalibreLightItalicWOFF2}) format('woff2'),
      url(${CalibreLightItalicWOFF}) format('woff'),
      url(${CalibreLightItalicTTF}) format('truetype');
    font-weight: 300;
    font-style: italic;
  }
  @font-face {
    font-family: 'Calibre';
    src: url(${CalibreRegularWOFF2}) format('woff2'), url(${CalibreRegularWOFF}) format('woff'),
      url(${CalibreRegularTTF}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Calibre';
    src: url(${CalibreRegularItalicWOFF2}) format('woff2'),
      url(${CalibreRegularItalicWOFF}) format('woff'),
      url(${CalibreRegularItalicTTF}) format('truetype');
    font-weight: normal;
    font-style: italic;
  }
  @font-face {
    font-family: 'Calibre';
    src: url(${CalibreMediumWOFF2}) format('woff2'), url(${CalibreMediumWOFF}) format('woff'),
      url(${CalibreMediumTTF}) format('truetype');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'Calibre';
    src: url(${CalibreMediumItalicWOFF2}) format('woff2'),
      url(${CalibreMediumItalicWOFF}) format('woff'),
      url(${CalibreMediumItalicTTF}) format('truetype');
    font-weight: 500;
    font-style: italic;
  }
  @font-face {
    font-family: 'Calibre';
    src: url(${CalibreSemiboldWOFF2}) format('woff2'), url(${CalibreSemiboldWOFF}) format('woff'),
      url(${CalibreSemiboldTTF}) format('truetype');
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'Calibre';
    src: url(${CalibreSemiboldItalicWOFF2}) format('woff2'),
      url(${CalibreSemiboldItalicWOFF}) format('woff'),
      url(${CalibreSemiboldItalicTTF}) format('truetype');
    font-weight: 600;
    font-style: italic;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url(${SFMonoRegularWOFF2}) format('woff2'), url(${SFMonoRegularWOFF}) format('woff'),
      url(${SFMonoRegularTTF}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url(${SFMonoRegularItalicWOFF2}) format('woff2'),
      url(${SFMonoRegularItalicWOFF}) format('woff'),
      url(${SFMonoRegularItalicTTF}) format('truetype');
    font-weight: normal;
    font-style: italic;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url(${SFMonoMediumWOFF2}) format('woff2'), url(${SFMonoMediumWOFF}) format('woff'),
      url(${SFMonoMediumTTF}) format('truetype');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url(${SFMonoMediumItalicWOFF2}) format('woff2'),
      url(${SFMonoMediumItalicWOFF}) format('woff'),
      url(${SFMonoMediumItalicTTF}) format('truetype');
    font-weight: 500;
    font-style: italic;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url(${SFMonoSemiboldWOFF2}) format('woff2'), url(${SFMonoSemiboldWOFF}) format('woff'),
      url(${SFMonoSemiboldTTF}) format('truetype');
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url(${SFMonoSemiboldItalicWOFF2}) format('woff2'),
      url(${SFMonoSemiboldItalicWOFF}) format('woff'),
      url(${SFMonoSemiboldItalicTTF}) format('truetype');
    font-weight: 600;
    font-style: italic;
  }
`;

export default FontFaces;
