module.exports = {
  siteTitle: 'Dennis Trautwein | Software Engineer',
  siteDescription:
    'Dennis Trautwein is a physicist working as a software engineer based in Hamburg, Germany currently specializing in building highly available, scalable cloud native applications.',
  siteKeywords:
    'Dennis Trautwein, Dennis, Trautwein, dennis-tra, software, backend, engineer, physicist, kiel, hamburg, cloud developer, golang, germany',
  siteUrl: 'https://dtrautwein.eu',
  siteLanguage: 'en_US',

  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',

  name: 'Dennis Trautwein',
  location: 'Hamburg, Germany',
  email: 'hi@dtrautwein.eu',
  github: 'https://github.com/dennis-tra/',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/dennis-tra/',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/dennis-trautwein-6a4307106',
    },
    // {
    //   name: 'Codepen',
    //   url: 'https://codepen.io/dennis-tra/',
    // },
    // {
    //   name: 'Instagram',
    //   url: 'https://www.instagram.com/dennis-tra/',
    // },
    // {
    //   name: 'Twitter',
    //   url: 'https://twitter.com/dennis-tra',
    // },
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
      name: 'Projects',
      url: '#projects',
    },
    {
      name: 'Contact',
      url: '#contact',
    },
  ],

  twitterHandle: '@dennis-tra',
  googleAnalyticsID: 'UA-45666519-2',

  navHeight: 100,

  greenColor: '#64ffda',
  navyColor: '#52b7ff',
  darkNavyColor: '#212121',

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
