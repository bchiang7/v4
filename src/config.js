module.exports = {
  siteTitle: 'Shiyan Boxer | Software Engineer',
  siteDescription:
    'Shiyan Boxer is a software engineer based in Toronto, ON enjoys building websites, applications, and everything in between.',
  siteKeywords:
    'Shiyan Boxer, software engineer, computer engineering, intern, developer, university of waterloo, queens university',
  siteUrl: 'https://shiyanboxer.netlify.app/',
  siteLanguage: 'en_US',
  // googleAnalyticsID: 'UA-45666519-2',
  // googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Shiyan Boxer',
  location: 'Toronto, ON',
  email: 'shiyanboxer7@gmail.com',
  github: 'https://github.com/shiyanboxer',
  twitterHandle: '@shiyan_boxer',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/shiyanboxer',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/shiyanboxer',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/shiyanboxer',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/shiyan.boxer',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/shiyan_boxer',
    },
    {
      name: 'VSCO',
      url: 'https://vsco.co/shiyanboxer/gallery',
    },
    {
      name: 'Behance',
      url: 'https://www.behance.net/shiyanboxer',
    },    
    {
      name: 'Medium',
      url: 'https://medium.com/@shiyan.boxer',
    },
    {
      name: 'Spotify',
      url: 'https://open.spotify.com/user/shiyanboxer?si=sO5Ie0B5T4qNGMyngonkEg',
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
      name: 'Projects',
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
    black: '#000000',
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
