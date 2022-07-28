import React from 'react';

import './Design.css';

import tigertalkcover from './../../assets/tigertalk@2x.png';
import sproulcover from './../../assets/sproul@2x.png';
import onlocover from './../../assets/onlo@2x.png';
import blue from './../../assets/blue.png';

import RectanglePolaroid from './../../components/RectanglePolaroid';
import RectangleExternalPolaroid from '../../components/RectangleExternalPolaroid';

function Design() {
    var tigertalk = <img class="image" src={tigertalkcover}></img>;
    var sproul = <img class="image" src={sproulcover}></img>;
    var onlo = <img class="image" src={onlocover}></img>;

    return (
    <div class="design">
        <div class="text-container">
            <text class="big-text">design</text>
            <text class="small-text"></text>
        </div>
        <div class="links-container">
            <div class="row">
                <RectanglePolaroid title="ui/ux intern" subtitle="tigertalk" link="/tigertalk" image={tigertalk}> </RectanglePolaroid>
                <RectanglePolaroid title="product designer" subtitle="sproul.club" link="/sproul" image={sproul}> </RectanglePolaroid>
                <RectanglePolaroid title="ui/ux designer" subtitle="onlo" link="/onlo" image={onlo}> </RectanglePolaroid>
            </div>
            <div class="text-container-small-top">
                <text class="medium-text">other experiences</text>
                
                <text class="small-text" style={{fontWeight: 600}}> 
                    marketing chair for <b style={{color: "#2898FF", marginLeft: 3, marginBottom: 5}}> web development at berkeley </b> 
                </text>
                <text class="small-text" style={{fontWeight: 600}}> 
                    public relations chair for <b style={{color: "#2898FF", marginLeft: 3, marginBottom: 5}}> sigma psi zeta</b> 
                </text>
                <text class="small-text" style={{fontWeight: 600}}> 
                    chair of design for <b style={{color: "#2898FF", marginLeft: 3, marginBottom: 5}}> afx dance</b> 
                </text>
                <text class="small-text" style={{fontWeight: 600}}> 
                    marketing chair for <b style={{color: "#2898FF", marginLeft: 3, marginBottom: 5}}> techfair at berkeley </b> 
                </text>
            </div>
        </div>
    </div>
  );
}

export default Design;
