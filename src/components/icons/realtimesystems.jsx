import React from 'react';

const IconRealTimeSystems = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px">
    <rect width="48" height="48" rx="8" fill="#1E1B4B" />
    {/* live telemetry trace */}
    <path
      d="M5 26h8l3-9 5 18 5-24 4 15h13"
      fill="none"
      stroke="#A78BFA"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="43" cy="26" r="3" fill="#22C55E" />
    <circle cx="43" cy="26" r="5.5" fill="none" stroke="#22C55E" strokeWidth="1" opacity="0.6" />
  </svg>
);

export default IconRealTimeSystems;
