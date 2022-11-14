import React from 'react';
import IconButton from './../../components/IconButton.js'
import './About.css';

function About() {
    return (
        <div class="about">
            <div class="centered">
                <div class="content">
                    <div class="left-panel">
                        <p class="text"> <b> Nice to see you here! :-) </b> </p>
                        <p class="text"> I studied Computer Science, Cognitive Science, Data Science, and Entrepreneurship at University of California, Berkeley. </p>
                        <p class="text"> I'm currently working in data science and machine learning in the Core Search & AI Metrics team at Microsoft! </p>
                        <p class="text"> Avid learner of all things at the intersection of neuroscience, technology, and philosophy. </p>
                        <p class="text"> My ideal night in: my cloud lamp, a lavender-scented candle, a slightly-caffeinated beverage, one of the podcasts on my to-listen list, and a comfy video game. :3 </p>
                        <p class="text"> Passionate consumer of EDM (been to 32 events and counting)! </p>
                        <p class="text"> ପ(๑•ᴗ•๑)ଓ ♡ </p>
                    </div>
                    <div class="right-panel">
                        <iframe class="spotify-embed" src="https://open.spotify.com/embed/playlist/3bxMxrIYazwlOmuyVsQHJo?utm_source=generator&theme=0" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        <p class="text"> Take a look at the podcasts that I'm currently listening to! ↑ </p>
                    </div>
                </div>
                <div class="icon-row">
                    <IconButton link="https://linkedin.com/in/izzielau" icon=<i class="fa fa-linkedin"/> />
                    <IconButton link="https://github.com/izzielau" icon=<i class="fa fa-github"/> />
                </div>
            </div>
        </div>
    );
}

export default About;
