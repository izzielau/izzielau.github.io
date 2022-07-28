import React from 'react';
import { Link } from 'react-router-dom';

import './IconButton.css';
import blue from './../assets/blue.png';


const IconButton = ({ icon, link }) => {
  return (
      <a href={link} target="_blank">
      <div className="icon-button">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
          <div class="icon">
              {icon}
          </div>
      </div>
      </a>
  );
}

export default IconButton;
