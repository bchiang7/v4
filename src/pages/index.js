import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import { Layout, Hero, About, Jobs, Featured, Projects, Contact } from '@components';
// import Portal from '../components/custom/Portal';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const GlobalStyle = createGlobalStyle`
  html body {
    height: 100vh;
    width: 100%;
    background-color: var(--navy) !important;
    background-image: radial-gradient(
      circle 250px at var(--x, 10px) var(--y, 10px),
      #0404b5 0%,
      var(--navy) 100%
    ) !important;
  }
`;

// const PortalContainer = styled.div`
//   position: fixed;
//   top: 100px; // Always stay 10px from the top
//   left: ${props => (props.centered ? '50%' : '10px')};
//   transform: ${props => (props.centered ? 'translateX(-50%) scale(1)' : 'scale(0.15)')};
//   width: ${props => (props.centered ? '35%' : '0%')};
//   transition:
//     left 0.5s ease-in-out,
//     transform 0.5s ease-in-out;
//   z-index: 500;

//   &:hover {
//     transform: ${props => (props.centered ? 'translateX(-50%) scale(1)' : 'scale(0.25)')};
//   }
// `;

const IndexPage = ({ location }) => {
  const heroRef = useRef(null);
  const portalRef = useRef(null);
  const [showPortal, setShowPortal] = useState(false);

  useEffect(() => {
    const updateMousePosition = ev => {
      if (!heroRef.current) {return;}
      const { clientX, clientY } = ev;
      document.documentElement.style.setProperty('--x', `${clientX}px`);
      document.documentElement.style.setProperty('--y', `${clientY}px`);
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = event => {
      // console.log('Clicked target: ', event.target); // Check the clicked element

      if (showPortal && portalRef.current && !portalRef.current.contains(event.target)) {
        // console.log('Closing portal.'); // Check if the portal is being closed
        setShowPortal(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [showPortal]);

  // const handleContainerClick = e => {
  //   if (!showPortal) {
  //     // Only toggle the portal if it's not enlarged
  //     setShowPortal(true);
  //   }
  //   e.stopPropagation();
  // };

  return (
    <div ref={heroRef}>
      <GlobalStyle />
      <div>
        <Layout location={location}>
          <StyledMainContainer>
            {/* <PortalContainer centered={showPortal ? true : undefined} onClick={handleContainerClick} ref={portalRef}>
              <Portal />
            </PortalContainer> */}

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
