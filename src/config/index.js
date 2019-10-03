module.exports = {
  siteTitle: 'Leonardo Cogno | Software Developer',
  siteDescription:
    '',
  siteKeywords:
    '',
  siteUrl: 'https://localhost/portfolio_leo/',
  siteLanguage: 'en_US',
  googleAnalyticsID: '',
  googleVerification: '',
  name: 'Leonardo Cogno',
  location: 'Cuneo, IT',
  email: 'cogno93@gmail.com',
  github: 'https://github.com/SqlSnowCat',
  twitterHandle: '',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/SqlSnowCat',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/sqlcat',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '#about',
    },
    {
      name: 'Experience',
      url: '#jobs',
    },
    {
      name: 'Work',
      url: '#projects',
    },
    {
      name: 'Contact',
      url: '#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

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
