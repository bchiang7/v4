import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig, email } from '@config';
import sr from '@utils/sr';

const StyledContactSection = styled.section`
  text-align: center;
  max-width: 600px;
  margin: 0 auto 100px;

  @media (${({ theme }) => theme.bp.tabletL}) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    color: var(--green);
    font-size: var(--fz-md);
    font-family: var(--font-mono);
    font-weight: 400;
    margin-bottom: 20px;
    justify-content: center;
    @media (${({ theme }) => theme.bp.desktopS}) {
      font-size: var(--fz-sm);
    }

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
      @media (${({ theme }) => theme.bp.desktopS}) {
        font-size: var(--fz-xs);
      }
    }
    &:after {
      display: none;
    }
  }

  .title {
    font-size: 60px;

    @media (${({ theme }) => theme.bp.desktopS}) {
      font-size: 50px;
    }
    @media (${({ theme }) => theme.bp.tabletL}) {
      font-size: 40px;
    }
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Contact = () => {
  const revealContainer = useRef(null);
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);

  return (
    <StyledContactSection id="contact" ref={revealContainer}>
      <h2 className="numbered-heading overline">What’s Next?</h2>

      <h2 className="title">Get In Touch</h2>

      <p>
        Although I'm not currently looking for any new opportunities, my inbox is always open.
        Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>

      <a className="email-link" href={`mailto:${email}`}>
        Say Hello
      </a>
    </StyledContactSection>
  );
};

export default Contact;
