import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Layout,
  Hero,
  About,
  Skills,
  Jobs,
  Featured,
  Projects,
  Blog,
  Gallery,
  Contact,
} from '@components';

const StyledMainContainer = styled.main`
  counter-reset: sections;
`;

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <StyledMainContainer className="fillHeight">
      <Hero />
      <About />
      <Skills />
      <Jobs />
      <Featured />
      <Projects />
      <Blog />
      <Gallery />
      <Contact />
    </StyledMainContainer>
  </Layout>
);

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;
