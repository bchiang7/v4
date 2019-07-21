import React from 'react';

const IconLoader = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <title>Loader Logo</title>
    <g>
      <rect stroke="#70FB93" strokeWidth="0" x="33" y="0" width="25" height="55">
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
