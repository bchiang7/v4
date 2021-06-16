import ScrollReveal from 'scrollreveal';

const isSSR = typeof window === 'undefined';
const sr = isSSR ? null : ScrollReveal();

export default sr;
