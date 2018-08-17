import React from 'react';

import Hero from '../components/hero';
import About from '../components/about';
import Jobs from '../components/jobs';
import Featured from '../components/featured';
import Projects from '../components/projects';
import Contact from '../components/contact';

import { Main } from '../style';

const MainContainer = Main.extend`
  padding: 0 150px;
  counter-reset: section;
`;

const IndexPage = () => (
  <MainContainer>
    <Hero />
    <About />
    <Jobs />
    <Featured />
    <Projects />
    <Contact />
  </MainContainer>
);

export default IndexPage;
