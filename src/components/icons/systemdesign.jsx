import React from 'react';

const IconSystemDesign = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px">
    <rect width="48" height="48" rx="8" fill="#312E81" />
    {/* architecture: gateway → services → store */}
    <rect x="17" y="6" width="14" height="9" rx="2" fill="#EDE9FE" />
    <rect x="5" y="22" width="14" height="9" rx="2" fill="#C4B5FD" />
    <rect x="29" y="22" width="14" height="9" rx="2" fill="#C4B5FD" />
    <ellipse cx="24" cy="40" rx="8" ry="3" fill="#A78BFA" />
    <path d="M16 38v3c0 1.7 3.6 3 8 3s8-1.3 8-3v-3" fill="#8B5CF6" />
    <ellipse cx="24" cy="38" rx="8" ry="3" fill="#C4B5FD" />
    <path
      d="M24 15v4M24 19H12v3M24 19h12v3M12 31v3h12M36 31v3H24"
      fill="none"
      stroke="#A78BFA"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default IconSystemDesign;
