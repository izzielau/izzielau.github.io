import React from 'react';

import TransparentButton from './../../components/TransparentButton.js'
import RectanglePolaroid from './../../components/RectanglePolaroid.js'

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

import { Link } from 'react-router-dom';

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
            <div class="text-container">
                <p class="big-text"> Izzie Lau </p>
                <p class="text"> 📍 <b>Sunnyvale, California</b> </p>
                <p class="text"></p>
                <p class="text">Software Engineer @ <b>Microsoft</b></p>
                <p class="text">CS + Cognitive Science '22 @ <b>UC Berkeley</b></p>
                <p class="text"></p>
                <p class="link"><Link to="/about" style={{ textDecoration: 'none' }} /> </p>
            </div>
            <div class="button-container">
                <RectanglePolaroid title="Machine Learning @ Microsoft" subtitle="Implemented and experimented with various NLP models for Bing in conjunction with the Microsoft Research team." link="/" image={micr} tag="software"> </RectanglePolaroid>
                <RectanglePolaroid title="Product Manager @ Develop for Good" subtitle="Led the development of a mobile application from the ground up, aimed at streamlining the diagnosis of craniosynostosis in infants." link="/" image={akrn} tag="pm"> </RectanglePolaroid>
                <RectanglePolaroid title="VP of Development & Analytics @ Big Data at Berkeley" subtitle="Founder of this role, pioneered the application of analytics to marketing to optimize recruitment strategies." link="/" image={bdab} tag="pm"> </RectanglePolaroid>
                <RectanglePolaroid title="Blueprint Datathon: COVID-19 Research Project [1st]" subtitle="Published a research paper as the culmination of our team's research and models trained on data about the COVID-19 pandemic." link="/" image={data} tag="software"> </RectanglePolaroid>
                <RectanglePolaroid title="Course Staff @ UC Berkeley's Data 100 (Data Science)" subtitle="Took a variety of roles over two semesters, including 1-on-1 virtual office hours during the pandemic." link="/" image={ds100} tag="pm"> </RectanglePolaroid>
                <RectanglePolaroid title="UI/UX Intern @ TigerTalk" subtitle="Worked with founders to redesign the TigerTalk application through high-fidelity Figma mockups based on client input and user interviews." link="/" image={tigr} tag="design"> </RectanglePolaroid>
                <RectanglePolaroid title="UI/UX Designer @ OnLo" subtitle="Employed by a startup team to create high-fidelity Figma mockups of a mobile application from start to finish. Iterated based on client input." link="/" image={onlo} tag="design"> </RectanglePolaroid>
                <RectanglePolaroid title="Frontend Engineer @ sproul.club" subtitle="Joined the React.js engineering team for this website, aimed at making Berkeley's organizations more perusable." link="/" image={spcl} tag="software"> </RectanglePolaroid>
            </div>
      </div>
  );
}

export default Landing;
