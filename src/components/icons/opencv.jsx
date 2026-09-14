import React from 'react';

const IconOpenCV = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px">
    {/* Three 120° arcs forming the OpenCV logo — blue, red, green */}
    <path
      fill="none"
      stroke="#1565C0"
      strokeWidth="8"
      strokeLinecap="butt"
      d="M 24 6 A 18 18 0 0 1 39.6 33"
    />
    <path
      fill="none"
      stroke="#C62828"
      strokeWidth="8"
      strokeLinecap="butt"
      d="M 39.6 33 A 18 18 0 0 1 8.4 33"
    />
    <path
      fill="none"
      stroke="#2E7D32"
      strokeWidth="8"
      strokeLinecap="butt"
      d="M 8.4 33 A 18 18 0 0 1 24 6"
    />
  </svg>
);

export default IconOpenCV;
