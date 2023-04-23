module.exports = {
  email: 'contact@maxvzl.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/Mojmilo',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/maxime_vozelle',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/maxime_vozelle',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/maxime-vozelle-14263717b/',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/Mojmilo',
    },
  ],

  navLinks: [
    {
      name: 'A propos',
      url: '/#about',
    },
    {
      name: 'Parcours & Expériences',
      url: '/#jobs',
    },
    {
      name: 'Projets',
      url: '/#projects',
    },
    {
      name: 'Veille technologique',
      url: '/#techwatch',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    green: '#64ffda',
    // #FF82A9
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
