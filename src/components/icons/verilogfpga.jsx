import React from 'react';

const IconVerilogFPGA = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px">
    {/* IC chip body */}
    <rect x="13" y="10" width="22" height="28" rx="2" fill="#37474F" />
    {/* Pins — left side */}
    <rect x="5" y="14" width="8" height="3" rx="1" fill="#78909C" />
    <rect x="5" y="20" width="8" height="3" rx="1" fill="#78909C" />
    <rect x="5" y="26" width="8" height="3" rx="1" fill="#78909C" />
    <rect x="5" y="32" width="8" height="3" rx="1" fill="#78909C" />
    {/* Pins — right side */}
    <rect x="35" y="14" width="8" height="3" rx="1" fill="#78909C" />
    <rect x="35" y="20" width="8" height="3" rx="1" fill="#78909C" />
    <rect x="35" y="26" width="8" height="3" rx="1" fill="#78909C" />
    <rect x="35" y="32" width="8" height="3" rx="1" fill="#78909C" />
    {/* Circuit pattern inside chip */}
    <rect x="17" y="18" width="6" height="6" rx="1" fill="#546E7A" />
    <rect x="25" y="18" width="6" height="6" rx="1" fill="#546E7A" />
    <rect x="17" y="27" width="6" height="6" rx="1" fill="#546E7A" />
    <rect x="25" y="27" width="6" height="6" rx="1" fill="#546E7A" />
    <line x1="23" y1="21" x2="25" y2="21" stroke="#546E7A" strokeWidth="1.5" />
    <line x1="23" y1="30" x2="25" y2="30" stroke="#546E7A" strokeWidth="1.5" />
    <line x1="20" y1="24" x2="20" y2="27" stroke="#546E7A" strokeWidth="1.5" />
    <line x1="28" y1="24" x2="28" y2="27" stroke="#546E7A" strokeWidth="1.5" />
    {/* Top notch */}
    <path fill="#263238" d="M20 10 A4 4 0 0 0 28 10 Z" />
  </svg>
);

export default IconVerilogFPGA;
