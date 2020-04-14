module.exports = {
  siteTitle: 'Sambit Panda | Graduate Student',
  siteDescription:
    'Sambit Panda is a P student based in Baltimore, MD who specializes in developing exceptional, high-quality machine learning software and applications.',
  siteKeywords:
    'Sambit Panda, Sambit, Panda, sampan501, sampan, sampanda501, graduate student, data scientist, software developer, python, johns hopkins',
  siteUrl: 'https://sampan.me',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-159239956-1',
  googleVerification: 'OxQ_60ky4rW9Kb3MrX8_oXsFIAVb_KW9N_no0uqmRqo',
  name: 'Sambit Panda',
  location: 'Baltimore, MD',
  email: 'spanda3@jhu.edu',
  github: 'https://github.com/sampan501',
  twitterHandle: '@sampan501',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/sampan501',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sampan501',
    },
    {
      name: 'Scholar',
      url: 'https://scholar.google.com/citations?user=-V3CmPoAAAAJ&hl=en',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/sampan501',
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
