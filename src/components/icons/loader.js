import React from 'react';

const IconLoader = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <title>Loader Logo</title>
    <g>
      {/* Hexagon outline */}
      <path
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M 50, 5
           L 11, 27
           L 11, 72
           L 50, 95
           L 89, 73
           L 89, 28 z"
      />
      {/* Inter "A" text */}
      <text
        x="50"
        y="63"
        textAnchor="middle"
        fontSize="39"
        fontFamily="Inter, sans-serif"
        fill="currentColor"
        fontWeight="600">
        A
      </text>
    </g>
  </svg>
);

export default IconLoader;
