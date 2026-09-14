import React from 'react';

const IconCpp = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px">
    <circle cx="24" cy="24" r="22" fill="#004785" />
    {/* C — arc open to the right, center at (15,24), outer r=9, inner r=5 */}
    <path
      fill="white"
      d="M22.8 19.5 A 9 9 0 1 0 22.8 28.5 L 19.3 26.5 A 5 5 0 1 1 19.3 21.5 Z"
    />
    {/* First + */}
    <rect x="29" y="22" width="9" height="3.5" rx="1" fill="white" />
    <rect x="31.75" y="19" width="3.5" height="9" rx="1" fill="white" />
    {/* Second + */}
    <rect x="39" y="22" width="7" height="3.5" rx="1" fill="white" />
    <rect x="41" y="19" width="3.5" height="9" rx="1" fill="white" />
  </svg>
);

export default IconCpp;
