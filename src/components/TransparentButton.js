import React from 'react';

import './TransparentButton.css'

const TransparentButton = ({ text, link }) => {
    return(
        <div>
            <a rel="noopener noreferrer" href={link} style={{ textDecoration: 'none' }}>
                <div className="button">
                    {text}
                </div>
            </a>
        </div>
    );
}

export default TransparentButton;
