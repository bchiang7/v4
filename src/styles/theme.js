import mixins from './mixins';

// Breakpoints for responsive design
const breakpointValues = {
  mobileS: 330,
  mobileM: 400,
  mobileL: 480,
  tabletS: 600,
  tabletL: 768,
  desktopXS: 900,
  desktopS: 1080,
  desktopM: 1200,
  desktopL: 1400,
};

const theme = {
  bp: Object.keys(breakpointValues).reduce((acc, key) => {
    acc[key] = `max-width: ${breakpointValues[key]}px`;
    return acc;
  }, {}),
  mixins,
};

export default theme;
