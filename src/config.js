module.exports = {
  email: 'nguyenbv1994@gmail.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/bchiang7',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/bchiang7',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/bchiang7',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/bchiang7',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/bchiang7',
    },
  ],

  navLinks: [
    {
      name: 'Giới thiệu',
      url: '/#about',
    },
    {
      name: 'Kinh Nghiệm',
      url: '/#jobs',
    },
    {
      name: 'Công việc',
      url: '/#projects',
    },
    {
      name: 'Liên hệ',
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
