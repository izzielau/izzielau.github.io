import React from 'react';
import { Link } from 'react-router-dom';

import './PictureButton.css';
import blue from './../assets/blue.png';

const PictureButton = ({ image, subtitle, link }) => {
  return (
      <div className="picture-button">
        <Link to={link} style={{ textDecoration: 'none' }}>
          <div class="imageContainer">
            {image != null ? image : null}
          </div>
          <div class="textContainer">
            <text class="subtitle">
              {subtitle}
            </text>
          </div>
        </Link>
      </div>
  );
}

export default PictureButton;
