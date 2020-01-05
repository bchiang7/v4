module.exports = {
  siteTitle: 'Klement Tan | Software Engineer',
  siteDescription:
    'I\'m a computing under graduate at National University of Singapore, and I am passionate about improving the lives of others.',
  siteKeywords:
    'Klement Tan, Klement, Klement Tan De Ning, Tan De Ning, Klement, software engineer, front-end engineer, web developer, javascript, nus',
  siteUrl: 'https://klementtan.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-155375693-1',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Klement Tan',
  location: 'Singapore',
  email: 'klementtan@gmail.com',
  github: 'https://github.com/klementtan',
  twitterHandle: '',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/klementtan',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/tan-de-ning-klement-98724b181',
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
