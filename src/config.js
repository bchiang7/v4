module.exports = {
  siteTitle: 'Helen Gezahegn | Software Developer',
  siteDescription:
    'Helen Gezahegn is a senior student and full-stack software developer based in Edmonton, Alberta (Canada). I\'m passionate about learning and currently have experience in designing and building web, mobile, and back-end database applications.',
  siteKeywords:
    'Helen Gezahegn, Helen, Gezahegn, HelenGezahegn, HelenG123, software developer, front-end engineer, back-end engineer, web developer, javascript, react, university of alberta',
  siteUrl: 'https://brittanychiang.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Helen Gezahegn',
  location: 'Edmonton, AB',
  email: 'gezahegn@ualberta.ca',
  github: 'https://github.com/HelenGezahegn',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/HelenGezahegn',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/HelenGezahegn',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/HelenGezahegn',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/helen.gezahegn',
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
