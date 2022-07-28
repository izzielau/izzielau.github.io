import React from 'react';

import PictureButton from './../../components/PictureButton.js'
import IconButton from './../../components/IconButton.js'
import Carousel from './../../components/Carousel.js'
import RectanglePolaroid from './../../components/RectanglePolaroid.js'

import './About.css';

import s from './../../assets/spotify@4x.png';

function About() {
    var spot = <img class="image" src={s}></img>;
    return (
        <div class="about">
            <div class="top">
                <div class="left-container">
                    <p class="big-text"> Izzie Lau </p>
                    <div class="icon-row">
                        <IconButton link="https://linkedin.com/in/izzielau" icon=<i class="fa fa-linkedin"/> />
                        <IconButton link="https://github.com/izzielau" icon=<i class="fa fa-github"/> />
                    </div>
                </div>
                <div class="right-container">
                    <p class="text"> <b> Graduated from University of California, Berkeley in 2022. Currently a software engineer at Microsoft. </b> </p>
                    <p class="text"> Majors in <i>computer science</i> and <i>cognitive science</i>.</p>
                    <p class="text"> Minor in <i>data science</i>.</p>
                    <p class="text"> Certificate in <i>entrepreneurship & technology</i>.</p>
                </div>
            </div>
            <div class="bottom">
                <p class="text"> </p>
                <p class="text"> <b>A bit about me :-)</b> </p>
                <p class="text"> My love for learning runs deep. Ever since I was little, I've loved learning random facts about the world and sharing it with my loved ones (although, I honestly used to spout quite a good deal of nonsense as well). This curiosity and drive very easily translated into my professional career. </p>
                <p class="text"> At Berkeley, I often took over 18 units per semester in courses that I enjoyed, joined 5 tech organizations, filled leadership roles in 6 organizations, joined student government, learned how to dance to hip-hop (3 times!), and worked 3 part-time jobs, all while pursuing side-projects and volunteer opportunities. More than that, I've learned countless lessons about interacting with people and working in groups, attained many professional skills in a variety of fields, and only furthered my desire to make a beneficial impact wherever I go. </p>
                <p class="text"> I'm probably one of the most work-hard, play-hard people you'll meet. I take my energy and passion for learning and use it to find where I fit best in any team that I work on. </p>
                <p class="text"> </p>
                <p class="text"> </p>
                <p class="text"> <b>Relevant courses</b> </p>
                <p class="text"> At Berkeley, I took classes related to the variety of fields that I have a deep love of learning for: software engineering, statistics, data science, design, and neuroscience. I even ended up joining the course staff of Data 100, the largest upper-division class in the data science department. </p>
                <p class="text"> Here are some of my favorite classes that I've taken: </p>
                <p class="text"> → Artificial Intelligence [<i>CS 188 </i>] </p>
                <p class="text"> → Deep Neural Networks [<i>CS 182 </i>] </p>
                <p class="text"> → Data Science [<i>DATA 100 </i>] </p>
                <p class="text"> → Machine Learning [<i>CS 189 </i>] </p>
                <p class="text"> → Natural Language Processing [<i>INFO 159 </i>] </p>
                <p class="text"> → Computational Models of Cognition [<i>COGSCI 131 </i>] </p>
                <p class="text"> → Algorithms [<i>CS 170 </i>] </p>
                <p class="text"> → Database Systems [<i>CS 186 </i>] </p>
                <p class="text"> → Linguistic Science [<i>LING 100 </i>] </p>
                <p class="text"> → Product Management [<i>IEOR 172 </i>] </p>
                <p class="text"> → Engineering Statistics, Quality Control, and Forecasting [<i>IEOR 165 </i>] </p>
                <p class="text"> → Industrial Design and Human Factors [<i>IEOR 170 </i>] </p>
                <p class="text"> → Probability and Risk Analysis [<i>IEOR 172 </i>] </p>
                <p class="spacer"> </p>
                <p class="text"> <b> Projects </b> </p>
                <p class="text"> </p>
                <div class="polaroid">
                    <a href="/spotify">
                        <img class="image" src={s}></img>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default About;
