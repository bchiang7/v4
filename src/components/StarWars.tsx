import React from 'react';
import '../styles/StarWars.css';

const StarWars: React.FC = () => {
  return (
    <div className="image-container">
      <div className="image-grid">
        <a href="https://xsj-ui.vercel.app/">
          <img className="imgC" src="../../content/featured/XSJ-Website/demo.png" alt="XXX" />
        </a>
        <a href="https://github.com/XavierElon/xsj-users-microservice">
          <img
            className="imgA"
            src="./content/featured/PropertyManagementWebsite/demo.png"
            alt="User Authentication Microservice"
          />
        </a>
        <a href="https://github.com/XavierElon/rate_my_classes">
          <img
            className="imgB"
            src="./content/featured/RateMyClasses/demo.png"
            alt="Rate My Classes"
          />
        </a>
        <a href="https://github.com/XavierElon">
          <img className="imgD" src="./static/github.png" alt="Github" />
        </a>
      </div>
    </div>
  );
};

export default StarWars;
