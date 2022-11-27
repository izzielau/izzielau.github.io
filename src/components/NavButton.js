import React from 'react';
import { Link } from 'react-router-dom';

import './NavButton.css'

const NavButton = ({ text, link }) => {
    return(
        <div>
            <Link to={link} style={{ textDecoration: 'none' }}>
                <div className="nav-button">
                    <p class="text"><b>{text}</b></p>
                </div>
            </Link>
        </div>
    );
}

export default NavButton;
