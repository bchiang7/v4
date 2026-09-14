import React from 'react';

// The letter A is a rocket:
//   apex  → nose cone
//   legs  → body & fins
//   crossbar → engine ring
// A single continuous path is drawn by stroke-dashoffset,
// then the cockpit window + ignition flame fade in.
const IconLoader = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <title>Loader Logo</title>
    <g>
      {/* Fade-in after outline is drawn: cockpit window + engine flame */}
      <g id="B">
        <circle cx="50" cy="30" r="6" fill="currentColor" />
        <path fill="currentColor" d="M 40 84 Q 50 99 60 84 Q 55 94 50 96 Q 45 94 40 84 Z" />
      </g>

      {/*
        A-as-rocket — single closed path, drawn by stroke-dashoffset:
          (50,6)  nose tip
          → (80,84) right outer leg / fin tip
          → (65,84) fin inner
          → (60,46) right of crossbar / engine ring
          → (40,46) left of crossbar
          → (35,84) left fin inner
          → (20,84) left fin tip
          → Z closes back to nose
      */}
      <path
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        d="M 50 6 L 80 84 L 65 84 L 60 46 L 40 46 L 35 84 L 20 84 Z"
      />
    </g>
  </svg>
);

export default IconLoader;
