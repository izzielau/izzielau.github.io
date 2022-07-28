import React from 'react';
import { Link } from 'react-router-dom';

import './Carousel.css'

const Carousel = ({ tags }) => {
    var buttons = [];
    console.log("length", tags.length);
    for (var i = 0; i < tags.length; i++) {
        console.log('hi')
        buttons.push(
            <div class="button">
                <div class="margin" />
                <div class="tag">
                    {tags[i]}
                </div>
                <div class="margin" />
            </div>
        );
    };

    return(
        <div class="buttons">
            {buttons}
        </div>
    );
}

export default Carousel;
