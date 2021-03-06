import React from 'react';

import Button from './../../components/Button.js'
import Header from './../../components/Header.js'

import './Resume.css';

import resume from "./../../assets/resume-preview.png";

import PDF from "react-pdf-js";

function Resume() {
  return (
      <div class="resume">
          <div class="glass">
              <Header />
              <div class="container">
                  <div class="pdf">
                      <a href="https://drive.google.com/file/d/1PqEBOfa-BTcA_8s2sghYpWHKMOYzbH9Z/view?usp=sharing" target="_blank">
                          <img class="pdf" src={resume} />
                      </a>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default Resume;
