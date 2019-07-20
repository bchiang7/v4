import React from 'react';

const IconLoader = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <title>Loader Logo</title>
    <g>
      <rect stroke="#70FB93" strokeWidth="0" x="40" y="20" width="15" height="40">
        <animate
          attributeType="XML"
          attributeName="fill"
          values="#70FB93;#121212;#121212;#70FB93"
          dur="1.0s"
          repeatCount="indefinite"
        />
      </rect>
    </g>
  </svg>
);

export default IconLoader;
