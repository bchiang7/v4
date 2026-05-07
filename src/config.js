module.exports = {
  email: 'hello@bachngo.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/bachngb',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/ngo.giabach/',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/ngogiabach/',
    },
    {
      name: 'Goodreads',
      url: 'https://www.goodreads.com/user/show/95558094-b-ch-ng-gia',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Writing',
      url: '/#writing',
    },
    {
      name: 'Community',
      url: '/#community',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    green: '#cf8d2e',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
