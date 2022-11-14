import React from 'react';
import { Link } from 'react-router-dom';

import './RectanglePolaroid.css';
import blue from './../assets/blue.png';

const RectanglePolaroid = ({ image, title, subtitle, description, link }) => {
  return (
    <div className="rectangle-polaroid">
      <Link to={link} style={{ textDecoration: 'none' }}>
        <div class="image">
          {image != null ? image : <img class="image" src={blue}></img>}
        </div>
        <div class="text">
          <p class="title"> {title} </p>
          <p class="subtitle"> {subtitle} </p>
          <p class="description"> {description} </p>
        </div>
      </Link>
    </div>
  );
}

export default RectanglePolaroid;
