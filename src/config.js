module.exports = {
  email: 'avaneesh.khandekar@gmail.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/AvaneeshKhandekar',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/4v4neesh',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/avaneesh-khandekar/',
    }
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
      name: 'Education',
      url: '/#education',
    },
    {
      name: 'Projects',
      url: '/#projects',
    }
  ],

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
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
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
