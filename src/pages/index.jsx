import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout, Hero, About, Jobs, Featured, Projects, Contact } from '@components';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const IndexPage = ({ location }) => {
  const heroRef = useRef(null)

  useEffect(() => {
    const updateMousePosition = ev => {
      if (!heroRef.current) return;
      const { clientX, clientY } = ev;
      document.documentElement.style.setProperty('--x', `${clientX}px`);
      document.documentElement.style.setProperty('--y', `${clientY}px`);
      console.log(clientX, clientY)
    };
    

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <div ref={heroRef}>
     <style jsx global>{`
        html body{
          height: 100vh;
          width: 100%;
          background-color: var(--navy) !important;

          background-image: radial-gradient(
            circle 250px at var(--x, 10px) var(--y, 10px),
            #0404b5 0%,
            var(--navy) 100%
          ) !important;
        }
`}</style>
  <div >
      <Layout location={location}>
        <StyledMainContainer >
          <Hero />
          <About />
          <Jobs />
          <Featured />
          <Projects />
          <Contact />
        </StyledMainContainer>
      </Layout>
    </div>
    </div>
  );
};

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;
