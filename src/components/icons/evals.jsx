import React from 'react';

const IconEvals = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px">
    <rect width="48" height="48" rx="8" fill="#4C1D95" />
    {/* checklist with pass / fail marks */}
    <rect x="9" y="10" width="30" height="8" rx="2" fill="#EDE9FE" />
    <rect x="9" y="21" width="30" height="8" rx="2" fill="#EDE9FE" />
    <rect x="9" y="32" width="30" height="8" rx="2" fill="#EDE9FE" />
    <path
      d="M12 14l2.5 2.5L19 11.5"
      fill="none"
      stroke="#16A34A"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 25l2.5 2.5L19 22.5"
      fill="none"
      stroke="#16A34A"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.5 34.5l5 4M17.5 34.5l-5 4"
      fill="none"
      stroke="#DC2626"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <rect x="23" y="12.5" width="12" height="3" rx="1.5" fill="#A78BFA" />
    <rect x="23" y="23.5" width="9" height="3" rx="1.5" fill="#A78BFA" />
    <rect x="23" y="34.5" width="11" height="3" rx="1.5" fill="#A78BFA" />
  </svg>
);

export default IconEvals;
