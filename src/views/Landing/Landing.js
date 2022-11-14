import React from 'react';
import RectanglePolaroid from './../../components/RectanglePolaroid.js'
import IconButton from './../../components/IconButton.js'

import './Landing.css';

import o from './../../assets/onlo@2x.png';
import bd from './../../assets/datathon@2x.png';
import s from './../../assets/spotify@2x.png';
import sc from './../../assets/sproul@2x.png';
import t from './../../assets/tigertalk@2x.png';
import a from './../../assets/akron@2x.png';
import m from './../../assets/micro@2x.png';
import b from './../../assets/bdab@2x.png';
import d from './../../assets/ds100@2x.png';

function Landing() {
    var onlo = <img class="image" src={o}></img>;
    var data = <img class="image" src={bd}></img>;
    var spot = <img class="image" src={s}></img>;
    var spcl = <img class="image" src={sc}></img>;
    var tigr = <img class="image" src={t}></img>;
    var akrn = <img class="image" src={a}></img>;
    var micr = <img class="image" src={m}></img>;
    var bdab = <img class="image" src={b}></img>;
    var ds100 = <img class="image" src={d}></img>;

    return (
        <div class="landing">
            <div class="introduction">
                <p class="header"> Hey there, I'm Izzie! </p>
            </div>
            <div class="row">
                <RectanglePolaroid title="Machine Learning" subtitle="Microsoft" description="Implemented and experimented with various NLP models for Bing in conjunction with the Microsoft Research team." link="/" image={micr} tag="software"> </RectanglePolaroid>
                <RectanglePolaroid title="Product Manager" subtitle="Akron Children's Hospital" description="Led a team of 8 to build a React application for streamlining the diagnosis of craniosynostosis in infants." link="/" image={akrn} tag="pm"> </RectanglePolaroid>
                <RectanglePolaroid title="VP of Development & Analytics" subtitle="Big Data at Berkeley" description="Founder of this role, pioneered the application of analytics to marketing to optimize recruitment strategies." link="/" image={bdab} tag="pm"> </RectanglePolaroid>
                <RectanglePolaroid title="COVID-19 Research Project [1st]" subtitle="Blueprint Datathon" description="Published a research paper as the culmination of our team's research and models trained on data about the COVID-19 pandemic." link="/" image={data} tag="software"> </RectanglePolaroid>
                <RectanglePolaroid title="Data 100 Course Staff" subtitle="UC Berkeley" description="Took a variety of roles over two semesters, including 1-on-1 virtual office hours during the pandemic." link="/" image={ds100} tag="pm"> </RectanglePolaroid>
                <RectanglePolaroid title="UI/UX Intern" subtitle="TigerTalk" description="Worked with founders to redesign the TigerTalk application through high-fidelity Figma mockups based on client input and user interviews." link="/" image={tigr} tag="design"> </RectanglePolaroid>
                <RectanglePolaroid title="UI/UX Designer" subtitle="OnLo" description="Employed by a startup team to create high-fidelity Figma mockups of a mobile application from start to finish. Iterated based on client input." link="/" image={onlo} tag="design"> </RectanglePolaroid>
                <RectanglePolaroid title="Frontend Engineer" subtitle="sproul.club" description="Joined the React.js engineering team for this website, aimed at making Berkeley's organizations more perusable." link="/" image={spcl} tag="software"> </RectanglePolaroid>
            </div>
            <div class="icon-row">
                <IconButton link="https://linkedin.com/in/izzielau" icon=<i class="fa fa-linkedin"/> />
                <IconButton link="https://github.com/izzielau" icon=<i class="fa fa-github"/> />
            </div>
        </div>
    );
}

export default Landing;
