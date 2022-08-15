module.exports = {
  email: 'ccleandroc@gmail.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/leandcesar',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/leandcesar',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/leandcesar',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/leandcesar',
    },
  ],

  navLinks: [
    {
      name: 'Bio',
      url: '/#about',
    },
    {
      name: 'Experiências',
      url: '/#jobs',
    },
    {
      name: 'Projetos',
      url: '/#projects',
    },
    {
      name: 'Contato',
      url: '/#contact',
    },
  ],

  colors: {
    purple: '#bc6bff',
    navy: '#2e2e2e',
    darkNavy: '#1c1c1c',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 250,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
