import React from 'react';

import './Microsoft.css';

import BackButton from './../../components/BackButton.js'
import IconButton from '../../components/IconButton.js'
import Tag from '../../components/Tag.js'

function Microsoft() {
    return (
        <div>
            <div class='back'>
                <BackButton text="← BACK" link="/"/>
            </div>
            <div class="microsoft">
                <div class="heading">
                    <p class="title">Microsoft</p>
                    <p class="subtitle">Core Search & AI</p>
                    <p class="subtitle">I'm a software engineer on the Core Search & AI Metrics team, which is constantly implementing state-of-the-art ML models to manufacture and monitor the high-quality metrics that power Bing (the second most-used search engine in the world).</p>
                </div>
                <div class="content">
                    <div class="tag-row">
                        <Tag text="Machine Learning"></Tag>
                        <Tag text="Data Science"></Tag>
                        <Tag text="Data Analysis"></Tag>
                        <Tag text="Natural Language Processing"></Tag>
                        <Tag text="Software Engineering"></Tag>
                    </div>
                    <p class="text">
                        Some models I've worked with include BERT, Latent Dirichlet allocation (LDA), and logistic regression for binary and multi-class classification. I'm familiar with many data science tools including Azure Machine Learning, PyTorch, visualization libraries and have experience with semi-supervised learning and active learning pipelines.
                    </p>
                    <p class="text">
                        In my internship, I worked with implementing and evaluating a small-scale self-training pipeline previously explored by a team in Microsoft Research:
                    </p>
                </div>
                <div class="icon-row">
                    <IconButton link="https://www.microsoft.com/en-us/research/publication/self-training-weak-supervision-astra/" icon=<i class="fa fa-link"/> />
                </div>
            </div>
        </div>
    );
}

export default Microsoft;
