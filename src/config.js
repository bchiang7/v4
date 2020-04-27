module.exports = {
  siteTitle: 'Zain Zafar | Software Engineer',
  siteDescription:
    'Zain Zafar is a software engineer based in Islamabad, PK who specializes in building (and occasionally designing) exceptional websites, applications, and everything in between.',
  siteKeywords:
    'Zain Zafar,  zainzafar90, software engineer, front-end engineer, web developer, javascript, islamabad',
  siteUrl: 'https://zainzafar.net',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-116099784-2',
  googleVerification: 'HGU8VMKOx-x5FPvIoLFZATc7os9MDFRXNe3T2iBfmEQ',
  name: 'Zain Zafar',
  location: 'Islamabad, PK',
  email: 'zainzafar90.@gmail.com',
  github: 'https://github.com/zainzafar90',
  twitterHandle: '@mzainzafar90',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/zainzafar90',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/zainzafar1',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/zainzafar',
    },
    {
      name: 'Medium',
      url: 'https://www.medium.com/@zainzafar',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/mzainzafar90',
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
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
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
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
