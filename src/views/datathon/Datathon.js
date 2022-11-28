import React from 'react';
import './Datathon.css';
import BackButton from './../../components/BackButton.js'
import IconButton from './../../components/IconButton.js'
import Tag from './../../components/Tag.js'

function Datathon() {
    return (
        <div>
            <div class='back'>
                <BackButton text="← BACK" link="/"/>
            </div>
            <div class="datathon">
                <div class="heading">
                    <p class="title">Blueprint Datathon</p>
                    <p class="subtitle">[ 1st place ]</p>
                    <p class="subtitle">Research to understand the factors that contributed to disparities in Covid-19 outcomes between segments of the American population, and analyze the progression of these disparities over time.</p>
                    <div class="icon-row">
                        <IconButton link="https://devpost.com/software/covid-19-health-disparities" icon=<i class="fa fa-link"/> />
                        <IconButton link="https://docs.google.com/document/d/1iCqGNhU1Oj0aYsO2XA-2T8Nz2-pdnyTKIHlEieF3_IM/edit" icon=<i class="fa fa-google"/> />
                    </div>
                </div>
                <div class="content">
                    <div class="tag-row">
                        <Tag text="Machine Learning"></Tag>
                        <Tag text="Data Science"></Tag>
                    </div>
                    <p class="text"> 
                        It was a very spontaneous decision to join some of my friends in this three-day datathon. 
                        It was my first time even hearing the term "datathon" (data marathon?), but with my three 
                        other incredibly sweet and talented teammates, it quickly became one of my favorite experiences 
                        during COVID. I remember being aware of the sunrise slowly illuminating my pitch-black living 
                        room during our last all-nighter, my teammates and I typing furiously to create seaborn plots
                        and do last-second model tuning. 
                        </p>
                    <p class="text"> 
                        We ended up getting the first place award for our research paper, which demonstrated trends
                        of Covid-19 disparities across language, race, education level, economic status, and disability 
                        status. This was truly an eye-opening experience for me in terms of the academic conclusions we  
                        came to, the technical skills I learned from my peers, and the memories our team made in such a  
                        short amount of time. 
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Datathon;
