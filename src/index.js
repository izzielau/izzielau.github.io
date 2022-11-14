import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import './index.css';

import Header from './components/Header';
import Landing from './views/landing/Landing';
import About from './views/about/About';
import Spotify from './views/spotify/Spotify'

import * as serviceWorker from './serviceWorker';
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
    gtmId: 'G-29VY8EL103'
}
TagManager.initialize(tagManagerArgs)

const routing = (
    <div>
        <Router>
            <Header />
            <div class="background">
                <Route exact path="/" component={Landing} />
                <Route exact path="/about" component={About} />
                <Route path="/spotify" component={Spotify} />
            </div>
        </Router>
    </div>
)
ReactDOM.render(routing, document.getElementById('root'))
serviceWorker.unregister();
