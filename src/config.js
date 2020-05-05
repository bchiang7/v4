module.exports = {
  siteTitle: 'Sajal Goyal | Software Engineer',
  siteDescription:
    'Sajal Goyal is a Machine Learning Enthusiast, who specializes in Machine Learning Algorithms and Computer Vision.',
  siteKeywords:
    'Sajal Goyal, Sajal, Goyal, software engineer,iit, iit kanpur, iitk, data science, machine learning, agra, coursera, auv, auviitk, sajal goyal iitk',
  //siteUrl: 'https://brittanychiang.com',
  //  siteUrl: 'http://auv-iitk.github.io'
  siteUrl: 'https://sajalgoyal113.github.io/',
  siteLanguage: 'en_US',
  //  googleAnalyticsID: 'UA-45666519-2',
  //  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Sajal Goyal',
  location: 'Agra, India',
  email: 'sajalg@iitk.ac.in',
  github: 'https://github.com/sajalgoyal113',
  twitterHandle: '@yashsharmaddgg',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/sajalgoyal113',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/sajal-goyal-94854388',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/sajalgoyal_/?hl=en',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/home',
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
