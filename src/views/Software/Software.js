import React, { useState } from 'react';

import './Software.css';

import btcover from "./../../assets/bt-cover.png";
import sccover from "./../../assets/sproul@2x.png";
import bdabcover from "./../../assets/bdab-cover.png";
import spotifycover from "./../../assets/spotify@2x.png";
import bpdatacover from "./../../assets/datathon@2x.png";

import RectanglePolaroid from './../../components/RectanglePolaroid'
import RectangleExternalPolaroid from './../../components/RectangleExternalPolaroid'

function Software() {
    var blue = <img className="image" src={blue}></img>
    var sproul = <img className="image" src={sccover}></img>
    var spotify = <img className="image" src={spotifycover}></img>
    var datathon = <img className="image" src={bpdatacover}></img>

    const [analystDropdown, setAnalystDropdown] = useState(false);
    const toggleAnalystDropdown = () => setAnalystDropdown((analystDropdown) => !analystDropdown);

    const [dsusDropdown, setDSUSDropdown] = useState(false);
    const toggleDSUSDropdown = () => setDSUSDropdown((dsusDropdown) => !dsusDropdown);

    const [microsoftMLDropdown, setMicrosoftMLDropdown] = useState(false);
    const toggleMicrosoftMLDropdown = () => setMicrosoftMLDropdown((microsoftMLDropdown) => !microsoftMLDropdown);

    const [berkeleytimeDropdown, setBerkeleytimeDropdown] = useState(false);
    const toggleBerkeleytimeDropdown = () => setBerkeleytimeDropdown((berkeleytimeDropdown) => !berkeleytimeDropdown);

    const [mobileDropdown, setMobileDropdown] = useState(false);
    const toggleMobileDropdown = () => setMobileDropdown((mobileDropdown) => !mobileDropdown);

    const [microsoftSWEDropdown, setMicrosoftSWEDropdown] = useState(false);
    const toggleMicrosoftSWEDropdown = () => setMicrosoftSWEDropdown((microsoftSWEDropdown) => !microsoftSWEDropdown);

    const [vrDropdown, setVRDropdown] = useState(false);
    const toggleVRDropdown = () => setVRDropdown((vrDropdown) => !vrDropdown);

    const [idealabDropdown, setIdealabDropdown] = useState(false);
    const toggleIdealabDropdown = () => setIdealabDropdown((idealabDropdown) => !idealabDropdown);

    const [allOpen, setAllOpen] = useState(false);

    const openAllToggles = () => {
        setAnalystDropdown(true);
        setDSUSDropdown(true);
        setMicrosoftMLDropdown(true);
        setBerkeleytimeDropdown(true);
        setMobileDropdown(true);
        setMicrosoftSWEDropdown(true);
        setVRDropdown(true);
        setIdealabDropdown(true);
        setAllOpen(true);
    }

    const closeAllToggles = () => {
        setAnalystDropdown(false);
        setDSUSDropdown(false);
        setMicrosoftMLDropdown(false);
        setBerkeleytimeDropdown(false);
        setMobileDropdown(false);
        setMicrosoftSWEDropdown(false);
        setVRDropdown(false);
        setIdealabDropdown(false);
        setAllOpen(false);
    }

    const OpenAllButton = ({ text }) => {
        return(
            <div class="open-all" onClick={openAllToggles}>
                <div className="button" >
                    {text}
                </div>
            </div>
        );
    }
  
    const CloseAllButton = ({ text }) => {
        return(
            <div class="close-all" onClick={closeAllToggles}>
                <div className="button" >
                    {text}
                </div>
            </div>
        );
    }

    return (
        <div class="software">
            <div class="text-container">
                <text class="big-text">software</text>
                <text class="small-text"></text>
            </div>
            <div class="links-container">
                <div class="row">
                    <RectangleExternalPolaroid title="frontend engineer" subtitle="volunteer for sproul.club" image={sproul} link="https://sproul.club"> </RectangleExternalPolaroid>
                    <RectanglePolaroid title="machine learning self-project" subtitle="built using spotify api data" image={spotify} link="/spotify"> </RectanglePolaroid>
                    <RectanglePolaroid title="blueprint datathon [1st place]" subtitle="performing covid-19 research" image={datathon} link="/datathon"> </RectanglePolaroid>
                </div>
            </div>

            {/* 
            <OpenAllButton text="Open all"/>
            <CloseAllButton text="Close all"/>
            */}

            <div class="text-container-small-top">
                <text class="medium-text">past experiences</text>

                <text class="small-text" style={{marginTop: 5}}>
                    Data scientist for the Online Learning Services team funded by
                    <b style={{color: "#2898FF", marginLeft: 3}}>UC Berkeley's Division of Data Science</b>.
                </text>

                <text class="small-text" style={{marginTop: 5}}>
                    Data science consultant for the McBride Sisters company as part of 
                    <b style={{color: "#2898FF", marginLeft: 3}}>Big Data at Berkeley</b>.
                </text>

                <text class="small-text" style={{marginTop: 5}}>
                    Used Python, PyTorch, and ML libraries to build NLP models for Bing's core caption team at
                    <b style={{color: "#2898FF", marginLeft: 3}}>Microsoft</b>.
                </text>

                <text class="small-text" style={{marginTop: 5}}>
                    Maintained Python backend and began infrastructure for student accounts at 
                    <a target="_blank" href="https://berkeleytime.com/landing" style={{textDecoration: "none"}}><b style={{color: "#2898FF", marginLeft: 3}}>BerkeleyTime</b></a>.
                </text>

                <text class="small-text" style={{marginTop: 5}}>
                    Implemented more than 7 full-stack mobile applications in iOS/Swift through
                    <b style={{color: "#2898FF", marginLeft: 3}}>Mobile Developers at Berkeley</b>.
                </text>

                <text class="small-text" style={{marginTop: 5}}>
                    Designed and implemented an internal website tool in React for 
                    <b style={{color: "#2898FF", marginLeft: 3}}>Microsoft</b>.
                </text>

                <text class="small-text" style={{marginTop: 5}}>
                    Backend software developer for a biofeedback therapy-focused group within 
                    <b style={{color: "#2898FF", marginLeft: 3}}>Virtual Reality at Berkeley</b>.
                </text>

                <text class="small-text" style={{marginTop: 5}}>
                    Computer vision and product design intern for 
                    <b style={{color: "#2898FF", marginLeft: 3}}>aiPod</b>, an autonomous vehicle startup at Idealab.
                </text>

                {/* 
                <text class="small-text" style={{cursor: "pointer", fontWeight: 600}} onClick={toggleDSUSDropdown}> 
                    data scientist for <b style={{color: "#2898FF", marginLeft: 3, marginBottom: 5}}> uc berkeley division of data science</b> 
                </text>
                {dsusDropdown ? <text class="hover-text"> Creating visualizations and conducting analysis on JupyterHub usage and error reports.</text> : null }

                <text class="small-text" style={{cursor: "pointer", fontWeight: 600}} onClick={toggleAnalystDropdown}> 
                    data analyst at <b style={{color: "#2898FF", marginLeft: 3, marginBottom: 5}}> big data at berkeley</b> 
                </text>
                {analystDropdown ? <text class="hover-text"> Used Python, data science libraries, and Google Analytics to create data visualizations and go-to-market strategies for the McBride Sisters wine company. </text> : null }
                
                <text class="small-text" style={{cursor: "pointer", fontWeight: 600}} onClick={toggleMicrosoftMLDropdown}> 
                    machine learning intern at <b style={{color: "#2898FF", marginLeft: 3, marginBottom: 5}}> microsoft</b> 
                </text>
                {microsoftMLDropdown ? <text class="hover-text"> Used Python, PyTorch, and ML libraries to build NLP models for Bing page ranking. </text> : null }

                <text class="small-text" style={{cursor: "pointer", fontWeight: 600}} onClick={toggleBerkeleytimeDropdown}> 
                    backend engineer at <b style={{color: "#2898FF", marginLeft: 3, marginBottom: 5}}> berkeleytime </b> 
                </text>
                {berkeleytimeDropdown ? <text class="hover-text"> Maintained Python backend for a year, wrote documentation and began infrastructure for student accounts. </text> : null }
                
                <text class="small-text" style={{cursor: "pointer", fontWeight: 600}} onClick={toggleMobileDropdown}> 
                    mobile developer for <b style={{color: "#2898FF", marginLeft: 3, marginBottom: 5}}> mobile developers of berkeley</b> 
                </text>
                {mobileDropdown ? <text class="hover-text"> Implemented more than 7 full-stack mobile applications including RecruitMate using Swift and React Native. </text> : null }

                <text class="small-text" style={{cursor: "pointer", fontWeight: 600}} onClick={toggleMicrosoftSWEDropdown}> 
                    software engineering intern at <b style={{color: "#2898FF", marginLeft: 3, marginBottom: 5}}> microsoft</b> 
                </text>
                {microsoftSWEDropdown ? <text class="hover-text"> Implemented an internal web application for Bing employees using React, Node, and C++. </text> : null }

                <text class="small-text" style={{cursor: "pointer", fontWeight: 600}} onClick={toggleVRDropdown}> 
                    software developer for <b style={{color: "#2898FF", marginLeft: 3, marginBottom: 5}}> virtual reality at berkeley </b> 
                </text>
                {vrDropdown ? <text class="hover-text"> Used Unity and C++ to create environmental therapy VR applications. </text> : null }

                <text class="small-text" style={{cursor: "pointer", fontWeight: 600}} onClick={toggleIdealabDropdown}> 
                    computer vision intern at <b style={{color: "#2898FF", marginLeft: 3, marginBottom: 5}}> idealab</b> 
                </text>
                {idealabDropdown ? <text class="hover-text"> Implemented computer vision algorithms (PyTorch, Deep Tensor) on different CPU's for an autonomous vehicle startup. </text> : null }


                { !allOpen ?
                    <div>
                        <div class="spacer"></div>
                        <text class="medium-text">
                            {true ? "(´｡• ᵕ •｡`) ♡" : null }
                        </text> 
                    </div> : null
                }
                */}
            </div>
            <div className="spacer" />
        </div>
    );
}

export default Software;
