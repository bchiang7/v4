module.exports = {
  email: 'szcheng0702@gmail.com',

  // Giscus comments (GitHub Discussions backed).
  // See README "Blog comments" for how to fill these in.
  giscus: {
    repo: 'szcheng0702/v4-personal-website',
    repoId: '',
    category: 'Announcements',
    categoryId: '',
    mapping: 'pathname',
    reactionsEnabled: '1',
    inputPosition: 'top',
    lang: 'en',
  },

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/szcheng0702',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/sizhu-lindsay-cheng',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/lindsayscheng72',
    },
  ],

  navLinks: [
    // The first five match the numbered sections on the home page, so the numbers
    // shown in the nav line up with the numbers on the section headings.
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
      name: 'Publications',
      url: '/#publications',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
    {
      name: 'Blog',
      url: '/blog',
    },
    {
      name: 'Misc',
      url: '/misc',
    },
  ],

  // Kept in sync with src/styles/variables.js — used for the PWA manifest
  // theme colours and the traced-SVG placeholder colour for markdown images.
  colors: {
    green: '#f0b429',
    navy: '#16161a',
    darkNavy: '#0f0f12',
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
