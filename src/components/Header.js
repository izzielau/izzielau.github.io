import React from 'react';

import './Header.css';
import NavButton from './NavButton.js'

const Header = (active) => {
    return (
        <div className="header">
            <div class="left">
            </div>
            <div class="right">
                <NavButton text="HOME" link="/"/>
                <NavButton text="ABOUT ME" link="/about"/>
            </div>
        </div>
    );
}

export default Header;
