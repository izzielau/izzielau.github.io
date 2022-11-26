import React from 'react';
import RectanglePolaroid from './../../components/RectanglePolaroid.js'
import IconButton from './../../components/IconButton.js'

import './Landing.css';

import a from './../../assets/datathon.png';
import b from './../../assets/microsoft.png';
import c from './../../assets/spotify.png';
import d from './../../assets/music.png';

function Landing() {
    var datathon = <img class="image" src={a}></img>;
    var microsoft = <img class="image" src={b}></img>;
    var spotify = <img class="image" src={c}></img>;
    var info = <img class="image" src={d}></img>;

    return (
        <div class="landing">
            <div class="introduction">
                <p class="header"> Hey there, I'm Izzie! </p>
            </div>
            <div class="row">
                <RectanglePolaroid title="Machine Learning" subtitle="Microsoft" description="Implementing various NLP models for the Core Search & AI Metrics team." link="/microsoft" image={microsoft} tag="software"> </RectanglePolaroid>
                <RectanglePolaroid title="Blueprint Datathon" subtitle="Stanford University" description="Published a data science research paper on the COVID-19 pandemic." link="/datathon" image={datathon} tag="software"> </RectanglePolaroid>
                <RectanglePolaroid title="Research Project" subtitle="Spotify" description="Designed a logistic regression model for music recommendation." link="/spotify" image={spotify} tag="software"> </RectanglePolaroid>
                <RectanglePolaroid title="Research Project" subtitle="Info 159 • NLP" description="A research paper on the state-of-the-art ML models for music." link="/survey" image={info} tag="software"> </RectanglePolaroid>
                {/*
                <RectanglePolaroid title="Product Manager" subtitle="Akron Children's Hospital" description="Led a team of 8 to build a React application for streamlining the diagnosis of craniosynostosis in infants." link="/" image={akrn} tag="pm"> </RectanglePolaroid>
                <RectanglePolaroid title="VP of Development & Analytics" subtitle="Big Data at Berkeley" description="Founder of this role, pioneered the application of analytics to marketing to optimize recruitment strategies." link="/" image={bdab} tag="pm"> </RectanglePolaroid>
                <RectanglePolaroid title="Data 100 Course Staff" subtitle="UC Berkeley" description="Took a variety of roles over two semesters, including 1-on-1 virtual office hours during the pandemic." link="/" image={ds100} tag="pm"> </RectanglePolaroid>
                <RectanglePolaroid title="UI/UX Intern" subtitle="TigerTalk" description="Worked with founders to redesign the TigerTalk application through high-fidelity Figma mockups based on client input and user interviews." link="/" image={tigr} tag="design"> </RectanglePolaroid>
                <RectanglePolaroid title="UI/UX Designer" subtitle="OnLo" description="Employed by a startup team to create high-fidelity Figma mockups of a mobile application from start to finish. Iterated based on client input." link="/" image={onlo} tag="design"> </RectanglePolaroid>
                <RectanglePolaroid title="Frontend Engineer" subtitle="sproul.club" description="Joined the React.js engineering team for this website, aimed at making Berkeley's organizations more perusable." link="/" image={spcl} tag="software"> </RectanglePolaroid>
                */}
            </div>
            <div class="icon-row">
                <IconButton link="https://linkedin.com/in/izzielau" icon=<i class="fa fa-linkedin"/> />
                <IconButton link="https://github.com/izzielau" icon=<i class="fa fa-github"/> />
            </div>
        </div>
    );
}

export default Landing;
