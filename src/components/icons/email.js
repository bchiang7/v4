import React from 'react';

const IconEmailFolder = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="60" // Adjust the width as needed
    height="60" // Adjust the height as needed
    viewBox="0 0 24 24"
    style={{
      fill: '#a8b2d1', // Default fill color
      transition: 'fill 0.3s', // Smooth transition
    }}
    onMouseEnter={e => (e.currentTarget.style.fill = '#64ffda')} // Color on hover (accent)
    onMouseLeave={e => (e.currentTarget.style.fill = '#a8b2d1')} // Default color when not hovered
  >
    <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" />
  </svg>
);

export default IconEmailFolder;
