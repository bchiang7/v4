import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  margin: 0;
  min-height: 100vh;
  min-width: 50vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: -5%;
  left: 25%;
  z-index: 1000;
  //   background: radial-gradient(circle at 50% 35%, #334455, #000);
`;

const StarWarsDiv = styled.div`
  position: relative;
  top: 50%;
  left: 50%
  -webkit-transform: perspective(300px) rotateX(50deg);
  -moz-transform: perspective(300px) rotateX(50deg);
  -ms-transform: perspective(3000px) rotateX(50deg);
  -o-transform: perspective(300px) rotateX(50deg);
  transform: perspective(300px) rotateX(25deg);

  ul {
    list-style-type: none;
    padding-left: 0;
  }
  
  li {
    padding-top: 1rem
  }
`;

const HoverBlurImage = styled.img`
  transition: filter 0.4s ease;

  &:hover {
    filter: blur(3px); // adjust the px value to control the amount of blur
  }
`;

const StarWars: React.FC = () => {
  return (
    <StyledContainer>
      <StarWarsDiv>
        <ul className="inline-grid grid-cols-2 grid-rows-2 gap-2 float-right" aria-label="XXX">
          <li>
            <a
              className="block transition-all"
              href="https://xsj-ui.vercel.app/"
              aria-label="XXX Chat App">
              <HoverBlurImage
                alt="Screenshot of XXX"
                width="280"
                height="92"
                className="mx-auto rounded border-2 border-zinc-900/30 drop-shadow-md group-hover:drop-shadow-xl"
                src={'/resized/xxx-resized.png'}
                style={{ color: 'transparent' }}
              />
            </a>
          </li>
          <li>
            <a
              className="block transition-all"
              href="https://github.com/XavierElon"
              aria-label="XavierElon's Github">
              <HoverBlurImage
                alt="Screenshot of Xavier Elon's Github"
                width="280"
                height="92"
                className="mx-auto rounded border-2 border-zinc-900/30 drop-shadow-md group-hover:drop-shadow-xl"
                src={'/resized/github-resized.png'}
                style={{ color: 'transparent' }}
              />
            </a>
          </li>
          <li>
            <a
              className="block transition-all"
              href="https://github.com/XavierElon/xsj-users-microservice"
              aria-label="User Authentication/Authorization Microservice">
              <HoverBlurImage
                alt="Screenshot User Authentication/Authorization Microservice"
                width="280"
                height="92"
                className="mx-auto rounded border-2 border-zinc-900/30 drop-shadow-md group-hover:drop-shadow-xl"
                src={'/resized/users-microservice-resized.png'}
                style={{ color: 'transparent' }}
              />
            </a>
          </li>
          <li>
            <a
              className="block transition-all"
              href="https://github.com/XavierElon/rate_my_classes"
              aria-label="Rate My Classes">
              <HoverBlurImage
                alt="Screenshot of Rate My Classes"
                width="280"
                height="92"
                className="mx-auto rounded border-2 border-zinc-900/30 drop-shadow-md group-hover:drop-shadow-xl"
                src={'/resized/rate-my-classes-resized.png'}
                style={{ color: 'transparent' }}
              />
              {/* <div className="absolute left-0 top-0 hidden h-full w-full items-center justify-center rounded border-4 border-teal-400/0 bg-zinc-900/30 align-middle opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 lg:flex">
                <h3 className="not-sr-only text-xl font-semibold text-white">Rate My Classes</h3>
              </div> */}
            </a>
          </li>
        </ul>
      </StarWarsDiv>
    </StyledContainer>
  );
};

export default StarWars;
