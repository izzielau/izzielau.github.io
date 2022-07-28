import React from 'react';

import './Header.css';
import Button from './NavButton.js'

const Header = (active) => {
    return (
        <div className="header">
            <div class="left">
            </div>
            <div class="right">
                <Button text="HOME" link="/"/>
                <Button text="ABOUT ME" link="/about"/>
            </div>
        </div>
    );
}

export default Header;
