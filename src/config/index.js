module.exports = {
  siteTitle: 'Tudor Pop | Software Engineer',
  siteDescription:
    'I\'m a software engineer based in Cluj-Napoca (Romania), specialised in building (and occasionally designing) exceptional, high-quality systems and applications.',
  siteKeywords:
    'Tudor Pop, Tudor, tudorpop, mobile engineer, blockchain engineer, blockchain developer, ethereum, golang',
  siteUrl: 'https://tudor-pop.com',
  siteLanguage: 'en_US',

  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',

  name: 'Tudor Pop',
  location: 'Cluj-Napoca, Romania',
  email: 'tudor14pop@gmail.com',
  github: 'https://github.com/poptudor/',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/poptudor/',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/tudor-pop-21958bb5/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/TudorPop_',
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

  twitterHandle: '@TudorPop_',
  // googleAnalyticsID: 'UA-45666519-2',

  navHeight: 100,

  greenColor: '#50fa7b',
  navyColor: '#50fa7b',
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
