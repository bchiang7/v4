import React from 'react';

const IconCICD = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px">
    <rect width="48" height="48" rx="8" fill="#1E293B" />
    {/* Build → Test → Deploy pipeline */}
    <circle cx="10" cy="24" r="7" fill="#F97316" />
    <circle cx="24" cy="24" r="7" fill="#3B82F6" />
    <circle cx="38" cy="24" r="7" fill="#22C55E" />
    {/* Arrows */}
    <polygon points="19,21 23,24 19,27" fill="white" />
    <polygon points="31,21 35,24 31,27" fill="white" />
  </svg>
);

export default IconCICD;
