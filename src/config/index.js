module.exports = {
  siteTitle: 'Cem Berke Cebi | Software Engineer',
  siteDescription:
    'Cem Berke Cebi is a software engineer based in Istanbul, TR who enjoys working with the things that related with technology. I develop different kind of websites, games and prediction models.',
  siteKeywords:
    'Cem Berke Cebi, Cem, Cebi, cemthecebi, software engineer, back-end engineer, web developer, java',
  siteUrl: 'https://cemcebi.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Cem Berke Cebi',
  location: 'Istanbul, TR',
  email: 'cemberkecebi@gmail.com',
  github: 'https://github.com/cemthecebi',
  twitterHandle: '@cemberkecebi',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/cemthecebi',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/cemberkecebi/',
    },
    {
      name: 'Codepen',
      url: '',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/cembcebi/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/cemberkecebi',
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
      name: 'Blog',
      url: 'https://medium.com/cem-cebi',
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
