module.exports = {
  siteTitle: 'Mike Laderman | Software Engineer',
  siteDescription:
    'Mike Laderman is a Software Engineer with over 6 years of experience specializing in building data-driven products for platform companies',
  siteKeywords:
    'Mike Laderman, Mike, Laderman, mladerman, software engineer, backend engineer, sql, python, java, data engineer, boston, database, kafka',
  siteUrl: 'https://mikeladerman.com',
  siteLanguage: 'en_US',

  googleVerification: 'TODO',

  name: 'Mike Laderman',
  location: 'Somerville, MA',
  email: 'me@mikeladerman.com',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/mladerman/',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/michaelladerman/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/mbltoo/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/mbltoo',
    },
  ],

  nav: [
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

  twitterHandle: '@mbltoo',
  googleAnalyticsID: 'TODO',

  headerHeight: 100,

  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => {
    return {
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
    };
  },
};
