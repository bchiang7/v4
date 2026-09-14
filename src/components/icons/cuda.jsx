import React from 'react';

const IconCUDA = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px">
    <rect width="48" height="48" rx="6" fill="#76B900" />
    {/* Parallel horizontal bars — GPU thread metaphor */}
    <rect x="8" y="11" width="32" height="5" rx="2" fill="white" opacity="0.95" />
    <rect x="8" y="19" width="32" height="5" rx="2" fill="white" opacity="0.95" />
    <rect x="8" y="27" width="32" height="5" rx="2" fill="white" opacity="0.95" />
    <rect x="8" y="35" width="22" height="5" rx="2" fill="white" opacity="0.95" />
    {/* Accent block — suggests diverging thread count */}
    <rect x="32" y="35" width="8" height="5" rx="2" fill="white" opacity="0.4" />
  </svg>
);

export default IconCUDA;
