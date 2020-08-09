module.exports = {
  siteTitle: 'Hamza AFFANI | Software Engineer',
  siteDescription:
    'Hamza AFFANI is a software engineer based in Casablanca, who specializes in developing high-quality systems with two years experience on the payment industry',
  siteKeywords:
    'Hamza AFFANI, Hamza, Affani, haffani, software engineer, front-end engineer, Java developer, javascript, elaffani',
  siteUrl: 'https://haffani.netlify.com/',
  siteLanguage: 'en_US',
  name: 'AFFANI Hamza',
  location: 'Casablanca, Morocco',
  email: 'elaffani95@gmail.com',
  github: 'https://github.com/haffani',
  twitterHandle: '@haffani95',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/haffani/',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/hamza-affani/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/haffani95/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/haffani95',
    },
  ],

  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 100) => ({
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
