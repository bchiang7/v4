module.exports = {
  email: 'vedantjainben10@gmail.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/vedant-jain03',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/vedantj_03',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/vedant-jain-781006145/',
    },
    {
      name: 'Leetcode',
      url: 'https://leetcode.com/vedantjain09/',
    },
    {
      name: 'Medium',
      url: 'https://medium.com/@vedantj03',
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
      url: '/blog',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
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
