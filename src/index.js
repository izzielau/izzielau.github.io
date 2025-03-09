import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'

import './index.css';

import Header from './components/Header';
import Landing from './views/Landing/Landing';
import About from './views/about/About';
import Spotify from './views/spotify/Spotify'
import Datathon from './views/datathon/Datathon'
import Microsoft from './views/microsoft/Microsoft'
import Survey from './views/survey/Survey'

import * as serviceWorker from './serviceWorker';

const routing = (
    <div>
        <Router>
            <Header />
            <div class="background">
                <Route exact path="/" component={Landing} />
                <Route exact path="/about" component={About} />
                <Route path="/spotify" component={Spotify} />
                <Route path="/datathon" component={Datathon} />
                <Route path="/microsoft" component={Microsoft} />
                <Route path="/survey" component={Survey} />
            </div>
        </Router>
    </div>
)
ReactDOM.render(routing, document.getElementById('root'))
serviceWorker.unregister();
