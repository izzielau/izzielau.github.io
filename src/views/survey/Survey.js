import React from 'react';
import './Survey.css';
import IconButton from '../../components/IconButton.js'
import Tag from '../../components/Tag.js'

function Survey() {
    return (
        <div class="survey">
            <div class="heading">
                <p class="title">Research Survey</p>
                <p class="subtitle">Info 159 • Natural Language Processing</p>
                <p class="subtitle">As the final project for UC Berkeley's Info 159 course in natural language processing, students were asked to write a research survey on a subfield of NLP. I decided to focus on music recommendation algorithms and music composition models. </p>
            </div>
            <div class="content">
                <div class="tag-row">
                    <Tag text="Machine Learning"></Tag>
                    <Tag text="Natural Language Processing"></Tag>
                </div>
                <p class="text">
                </p>
                <p class="text">
                    The paper can be read on Academia here at this link:
                </p>
            </div>
            <div class="icon-row">
                <IconButton link="https://www.academia.edu/84397392/" icon=<i class="fa fa-link"/> />
            </div>
        </div>
    );
}

export default Survey;
