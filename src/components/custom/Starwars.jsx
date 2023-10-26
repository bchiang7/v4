// import React, { useEffect } from 'react';
// import styled from 'styled-components';

// const StyledContainer = styled.div.attrs<{ isPortalOpen }>(props => ({
//   // Here, we don't pass down the isPortalOpen prop to the DOM element
// }))<{ isPortalOpen }>`
//   margin: 0;
//   min-height: 100vh;
//   min-width: 35vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: fixed;
//   top: ${props => (props.isPortalOpen ? '-20%' : '-12%')};
//   left: ${props => (props.isPortalOpen ? '50%' : '40%')};
//   transform: ${props => (props.isPortalOpen ? 'translate(-50%, -50%) scale(1)' : 'none')};
//   z-index: 1000;
//   transition:
//     left 2s ease-in-out,
//     top 2s ease-in-out,
//     transform 2s ease-in-out;
// `;

// const StarWarsDiv = styled.div`
//   position: fixed;
//   top: 0%;
//   right: 10%
//   -webkit-transform: perspective(300px) rotateX(50deg);
//   -moz-transform: perspective(300px) rotateX(50deg);
//   -ms-transform: perspective(3000px) rotateX(50deg);
//   -o-transform: perspective(300px) rotateX(50deg);
//   transform: perspective(300px) rotateX(25deg);

//   ul {
//     list-style-type: none;
//     padding-left: 0;
//   }

//   li {
//     padding-top: 1rem
//   }
// `;

// const StyledHeader = styled.div`
//   color: var(--green);
//   font-size: 2rem;
//   position: relative;
//   right: 12%;
// `;

// const HoverBlurImage = styled.img`
//   transition: filter 0.4s ease;

//   &:hover {
//     filter: blur(3px); // adjust the px value to control the amount of blur
//   }
// `;

// const ImageWrapper = styled.div`
//   position: relative;
//   display: inline-block; // This will keep the size of the container matching the image

//   &:hover ${HoverBlurImage} {
//     filter: blur(3px);
//   }
//   &:hover div {
//     opacity: 1;
//   }
// `;

// const ImageOverlayText = styled.div<{ color?: string }>`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   opacity: 0;
//   transition: opacity 0.3s ease;
//   color: ${props => props.color || 'white'};
//   padding: 8px;
//   border-radius: 4px;
//   font-weight: bold;
// `;

// const StarWars = React.forwardRef(({ isPortalOpen }, ref) => {
//   useEffect(() => {
//     console.log(isPortalOpen);
//   }, [isPortalOpen]);
//   return (
//     <StyledContainer>
//       <StarWarsDiv ref={ref}>
//         <StyledHeader>Travel Back in Time</StyledHeader>
//         <ul className="inline-grid grid-cols-2 grid-rows-2 gap-2 float-right" aria-label="XXX">
//           <li>
//             <a
//               className="block transition-all"
//               href="https://github.com/XavierElon/rate_my_classes"
//               aria-label="Rate My Classes"
//               target="_blank"
//               rel="noopener noreferrer">
//               <ImageWrapper>
//                 <HoverBlurImage
//                   alt="Screenshot of Rate My Classes"
//                   width="280"
//                   height="92"
//                   className="mx-auto rounded border-2 border-zinc-900/30 drop-shadow-md group-hover:drop-shadow-xl"
//                   src={'/resized/rate-my-classes-resized.png'}
//                   style={{ color: 'transparent' }}
//                 />
//                 <ImageOverlayText color="black">Rate My Classes</ImageOverlayText>
//               </ImageWrapper>
//             </a>
//           </li>
//           <li>
//             <a
//               className="block transition-all"
//               href="https://youtube.com/channel/UCkzn_i33n79ljur943FlMqw"
//               aria-label="Xavier Elon Youtube Channel"
//               target="_blank"
//               rel="noopener noreferrer">
//               <ImageWrapper>
//                 <HoverBlurImage
//                   alt="Xavier Elon Youtube Channel"
//                   width="280"
//                   height="92"
//                   className="mx-auto rounded border-2 border-zinc-900/30 drop-shadow-md group-hover:drop-shadow-xl"
//                   src={'/resized/youtube-resized.png'}
//                   style={{ color: 'transparent' }}
//                 />
//                 <ImageOverlayText>Algo/DS Youtube Channel</ImageOverlayText>
//               </ImageWrapper>
//             </a>
//           </li>
//           <li>
//             <a
//               className="block transition-all"
//               href="https://github.com/XavierElon/xsj-users-microservice"
//               aria-label="User Authentication/Authorization Microservice"
//               target="_blank"
//               rel="noopener noreferrer">
//               <ImageWrapper>
//                 <HoverBlurImage
//                   alt="Screenshot User Authentication/Authorization Microservice"
//                   width="280"
//                   height="92"
//                   className="mx-auto rounded border-2 border-zinc-900/30 drop-shadow-md group-hover:drop-shadow-xl"
//                   src={'/resized/users-microservice-resized.png'}
//                   style={{ color: 'transparent' }}
//                 />
//                 <ImageOverlayText>User Auth MicroService</ImageOverlayText>
//               </ImageWrapper>
//             </a>
//           </li>
//           <li>
//             <a
//               className="block transition-all"
//               href="https://github.com/XavierElon"
//               aria-label="XavierElon's Github"
//               target="_blank"
//               rel="noopener noreferrer">
//               <ImageWrapper>
//                 <HoverBlurImage
//                   alt="Screenshot of Xavier Elon's Github"
//                   width="280"
//                   height="92"
//                   className="mx-auto rounded border-2 border-zinc-900/30 drop-shadow-md group-hover:drop-shadow-xl"
//                   src={'/resized/github-resized.png'}
//                   style={{ color: 'transparent' }}
//                 />
//                 <ImageOverlayText>Github</ImageOverlayText>
//               </ImageWrapper>
//             </a>
//           </li>
//           <li>
//             <a
//               className="block transition-all"
//               href="https://xsj-ui.vercel.app/"
//               aria-label="XXX Chat App"
//               target="_blank"
//               rel="noopener noreferrer">
//               <ImageWrapper>
//                 <HoverBlurImage
//                   alt="Screenshot of XXX"
//                   width="280"
//                   height="92"
//                   className="mx-auto rounded border-2 border-zinc-900/30 drop-shadow-md group-hover:drop-shadow-xl"
//                   src={'/resized/xxx-resized.png'}
//                   style={{ color: 'transparent' }}
//                 />
//                 <ImageOverlayText>XXX</ImageOverlayText>
//               </ImageWrapper>
//             </a>
//           </li>
//         </ul>
//       </StarWarsDiv>
//     </StyledContainer>
//   );
// });

// export default StarWars;
