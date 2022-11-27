import React from 'react';
import { Link } from 'react-router-dom';

import './BackButton.css'

const BackButton = ({ text, link }) => {
    return(
        <div>
            <Link to={link} style={{ textDecoration: 'none' }}>
                <div className="back-button">
                    <p class="text">{text}</p>
                </div>
            </Link>
        </div>
    );
}

export default BackButton;
