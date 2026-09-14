import React from 'react';

const IconFlask = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px">
    {/* Rim */}
    <rect x="15" y="4" width="18" height="5" rx="2.5" fill="#2D2D2D" />
    {/* Flask body — Erlenmeyer shape */}
    <path
      fill="#2D2D2D"
      d="M21 9 L21 22 L9 39 Q7 45 13 45 L35 45 Q41 45 39 39 L27 22 L27 9 Z"
    />
    {/* Liquid */}
    <path
      fill="#34D399"
      opacity="0.85"
      d="M16 33 L11 41 Q10 44 13 44 L35 44 Q38 44 37 41 L32 33 Z"
    />
    {/* Neck shadow line */}
    <rect x="23" y="9" width="2" height="13" fill="#444" rx="1" />
  </svg>
);

export default IconFlask;
