import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Layout, Hero, About, Jobs, Featured, Projects, Contact } from '../components';
import WobbleComponent from '@components/portal';
import StarWars from '@components/StarWars';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

interface PortalContainerProps {
  centered: boolean;
}

const PortalContainer = styled.div<PortalContainerProps>`
  position: fixed;
  top: 10px; // Always stay 10px from the top
  left: ${props => (props.centered ? '50%' : '10px')};
  transform: ${props => (props.centered ? 'translateX(-50%) scale(1)' : 'scale(0.15)')};
  transition:
    left 0.5s ease-in-out,
    transform 0.5s ease-in-out;
  z-index: 1000;
  cursor: pointer; // Makes the div appear clickable

  &:hover {
    transform: ${props => (props.centered ? 'translateX(-50%) scale(1)' : 'scale(0.25)')};
  }
`;

interface IndexPageProps {
  location: {
    pathname: string;
    search: string;
    state: any;
    hash: string;
  };
}

const IndexPage: React.FC<IndexPageProps> = ({ location }) => {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const portalRef = useRef<HTMLDivElement | null>(null);
  const [showPortal, setShowPortal] = useState<boolean>(false);

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!showPortal) {
      // Only toggle the portal if it's not enlarged
      setShowPortal(true);
    }
    e.stopPropagation();
  };

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      if (!heroRef.current) return;
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
    const handleOutsideClick = (event: MouseEvent) => {
      if (showPortal && portalRef.current && !portalRef.current.contains(event.target as Node)) {
        setShowPortal(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [showPortal]);

  return (
    <div ref={heroRef}>
      <style jsx global>
        {
          `
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
      ` as any
        }
      </style>
      <div>
        <Layout location={location}>
          <StyledMainContainer>
            <PortalContainer centered={showPortal} onClick={handleContainerClick} ref={portalRef}>
              <WobbleComponent showImages={showPortal} />
            </PortalContainer>
            <StarWars />
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

export default IndexPage;
