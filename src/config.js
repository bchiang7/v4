module.exports = {
  siteTitle: 'Dikshant Yadav | Software Engineer',
  siteDescription:
    'Dikshant Yadav is a software engineer based in Bangalore who specializes in building (and occasionally designing) exceptional websites, applications, and everything in between.',
  siteKeywords:
    'Dikshant Yadav, Dikshant, Yadav, DikshantYadav, dikshantyadav19, software engineer, front-end engineer, bacnend engineer, java, python, angular bangalore',
  siteUrl: 'https://dikshantyadav19.github.io',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Dikshant Yadav',
  location: 'Bangalore',
  email: 'dikshantyadav19@gmail.com',
  github: 'https://github.com/DikshantYadav19',
  twitterHandle: '@dikshantyadav19',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/DikshantYadav19',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/dikshantyadav19',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/dikshantyadav19',
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
