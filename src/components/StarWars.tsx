import React from 'react';
// import GithubImg from '../../static/github.png';
// import '../styles/StarWars.css';

const StarWars: React.FC = () => {
  return (
    // <div className="image-container">
    //   <div className="image-grid">
    //     <a href="https://xsj-ui.vercel.app/">
    //       <img className="imgC" src="../../content/featured/XSJ-Website/demo.png" alt="XXX" />
    //     </a>
    //     <a href="https://github.com/XavierElon/xsj-users-microservice">
    //       <img
    //         className="imgA"
    //         src="./content/featured/PropertyManagementWebsite/demo.png"
    //         alt="User Authentication Microservice"
    //       />
    //     </a>
    //     <a href="https://github.com/XavierElon/rate_my_classes">
    //       <img
    //         className="imgB"
    //         src="./content/featured/RateMyClasses/demo.png"
    //         alt="Rate My Classes"
    //       />
    //     </a>
    //     <a href="https://github.com/XavierElon">
    //       <img className="imgD" src="./static/github.png" alt="Github" />
    //     </a>
    //   </div>
    // </div>
    <div className="flex justify-center">
      <ul
        className="inline-grid grid-cols-1 gap-2 md:grid-cols-2"
        aria-label="Previous iterations of brittanychiang.com">
        <li>
          <a
            className="group relative block transition-all"
            href="https://xsj-ui.vercel.app/"
            aria-label="XXX Chat App">
            <img
              alt="Screenshot of XXX"
              //   loading="lazy"
              width="180"
              height="48"
              //   decoding="async"
              className="mx-auto rounded border-2 border-zinc-900/30 drop-shadow-md group-hover:drop-shadow-xl"
              src={'/github.png'}
              style={{ color: 'transparent' }}>
              {/* <div className="absolute left-0 top-0 hidden h-full w-full items-center justify-center rounded border-4 border-teal-400/0 bg-zinc-900/30 align-middle opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 lg:flex">
                <h3 className="not-sr-only text-xl font-semibold text-white">v1</h3>
              </div> */}
            </img>
          </a>
        </li>
        <li>
          <a
            className="group relative block transition-all"
            href="https://v2.brittanychiang.com"
            aria-label="XavierElon's Github">
            <img
              alt="Screenshot of Xavier Elon's Github"
              //   loading="lazy"
              width="180"
              height="48"
              //   decoding="async"
              //   data-nimg="1"
              className="mx-auto rounded border-2 border-zinc-900/30 drop-shadow-md group-hover:drop-shadow-xl"
              //   srcSet="/_next/image?url=%2Fimages%2Fold%2Fv2.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fold%2Fv2.png&amp;w=384&amp;q=75 2x"
              src={'/github.png'}
              style={{ color: 'transparent' }}>
              {/* <div className="absolute left-0 top-0 hidden h-full w-full items-center justify-center rounded border-4 border-teal-400/0 bg-zinc-900/30 align-middle opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 lg:flex">
                <h3 className="not-sr-only text-xl font-semibold text-white">Github</h3>
              </div> */}
            </img>
          </a>
        </li>
        <li>
          <a
            className="group relative block transition-all"
            href="https://v3.brittanychiang.com"
            aria-label="User Authentication/Authorization Microservice">
            <img
              alt="Screenshot User Authentication/Authorization Microservice"
              //   loading="lazy"
              width="180"
              height="48"
              //   decoding="async"
              //   data-nimg="1"
              className="mx-auto rounded border-2 border-zinc-900/30 drop-shadow-md group-hover:drop-shadow-xl"
              //   srcSet="/_next/image?url=%2Fimages%2Fold%2Fv3.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fold%2Fv3.png&amp;w=384&amp;q=75 2x"
              src={'/github.png'}
              style={{ color: 'transparent' }}>
              {/* <div className="absolute left-0 top-0 hidden h-full w-full items-center justify-center rounded border-4 border-teal-400/0 bg-zinc-900/30 align-middle opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 lg:flex">
                <h3 className="not-sr-only text-xl font-semibold text-white">v3</h3>
              </div> */}
            </img>
          </a>
        </li>
        <li>
          <a
            className="group relative block transition-all"
            href="https://v4.brittanychiang.com"
            aria-label="Rate My Classes">
            <img
              alt="Screenshot of Rate My Classes"
              //   loading="lazy"
              width="180"
              height="48"
              //   decoding="async"
              //   data-nimg="1"
              className="mx-auto rounded border-2 border-zinc-900/30 drop-shadow-md group-hover:drop-shadow-xl"
              //   srcSet="/_next/image?url=%2Fimages%2Fold%2Fv4.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fold%2Fv4.png&amp;w=384&amp;q=75 2x"
              src={'/github.png'}
              style={{ color: 'transparent' }}>
              {/* <div className="absolute left-0 top-0 hidden h-full w-full items-center justify-center rounded border-4 border-teal-400/0 bg-zinc-900/30 align-middle opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 lg:flex">
                <h3 className="not-sr-only text-xl font-semibold text-white">Rate My Classes</h3>
              </div> */}
            </img>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default StarWars;
