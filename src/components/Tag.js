import React from 'react';
import { Link } from 'react-router-dom';

import './Tag.css'

const Tag = ({ text, link }) => {
    return(
        <div className="tag">
            <p class="text" unselectable="on">{text}</p>
        </div>
    );
}

export default Tag;
