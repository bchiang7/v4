module.exports = {
  siteTitle: 'Brittany Chiang | Software Engineer',
  siteDescription:
    'Design-minded software engineer based in Boston, MA who specializes in developing (and occasionally designing) beautiful, high-quality websites and applications.',
  siteKeywords:
    'brittany chiang, brittany, chiang, bchiang7, software engineer, web developer, javascript, northeastern',
  siteUrl: 'https://brittanychiang.com',
  siteLanguage: 'en_US',
  siteImage: '', // 1280px x 800px
  siteIcon: '../static/logo.png', // TODO: og icons

  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',

  avatar: '/logos/social.png',
  name: 'Brittany Chiang',
  location: 'Boston, MA',
  email: 'brittany.chiang@gmail.com',
  resume: 'https://brittanychiang.com/resume.pdf',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/bchiang7/',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/bchiang7/',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/bchiang7/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/bchiang7/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/bchiang7',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '#about',
    },
    {
      name: 'Experience',
      url: '#jobs',
    },
    {
      name: 'Work',
      url: '#projects',
    },
    {
      name: 'Contact',
      url: '#contact',
    },
  ],

  twitterHandle: '@bchiang7',
  googleAnalyticsID: 'UA-12345689-1',

  projectMaxWidth: 1100,
  headerHeight: 100,

  navyColor: '#0a192f',

  srConfig: (delay = 200) => {
    return {
      // 'bottom', 'left', 'top', 'right'
      origin: 'bottom',

      // Can be any valid CSS distance, e.g. '5rem', '10%', '20vw', etc.
      distance: '20px',

      // Time in milliseconds.
      duration: 500,
      delay,

      // Starting angles in degrees, will transition from these values to 0 in all axes.
      rotate: { x: 0, y: 0, z: 0 },

      // Starting opacity value, before transitioning to the computed opacity.
      opacity: 0,

      // Starting scale value, will transition from this value to 1
      scale: 1,

      // Accepts any valid CSS easing, e.g. 'ease', 'ease-in-out', 'linear', etc.
      easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',

      // true/false to control reveal animations on mobile.
      mobile: true,

      // true:  reveals occur every time elements become visible
      // false: reveals occur once as elements become visible
      reset: false,

      // 'always' — delay for all reveal animations
      // 'once'   — delay only the first time reveals occur
      // 'onload' - delay only for animations triggered by first load
      useDelay: 'always',

      // Change when an element is considered in the viewport. The default value
      // of 0.20 means 20% of an element must be visible for its reveal to occur.
      viewFactor: 0.25,

      // Pixel values that alter the container boundaries.
      // e.g. Set `{ top: 48 }`, if you have a 48px tall fixed toolbar.
      // --
      // Visual Aid: https://scrollrevealjs.org/assets/viewoffset.png
      viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
    };
  },
};
