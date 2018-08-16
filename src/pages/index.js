import React from 'react';

import Hero from '../components/hero';
import About from '../components/about';
import Jobs from '../components/jobs';

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
  </MainContainer>
);

export default IndexPage;
