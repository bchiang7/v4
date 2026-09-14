import React from 'react';

const IconNodeJS = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px">
    {/* Node.js green hexagon */}
    <polygon points="24,3 41.4,13 41.4,35 24,45 6.6,35 6.6,13" fill="#539E43" />
    {/* Letter N as a stroke — simple and legible at small sizes */}
    <path
      fill="none"
      stroke="white"
      strokeWidth="4"
      strokeLinecap="square"
      strokeLinejoin="miter"
      d="M15 32 L15 16 L32 32 L32 16"
    />
  </svg>
);

export default IconNodeJS;
