import React from 'react';
import Tag from '../../components/Tag.js'

import './Spotify.css';

import BackButton from './../../components/BackButton.js'

import gen from "./../../assets/spotify-demos/genres.png"
import pop from "./../../assets/spotify-demos/popularity.png"
import roc from "./../../assets/spotify-demos/rhizome_roc.png"

function Spotify() {
    return (
        <div>
            <div class='back'>
                <BackButton text="← BACK" link="/"/>
            </div>
            <div class="spotify">
                <div class="heading">
                    <p class="title">Spotify</p>
                    <p class="subtitle">Self-designed project</p>
                    <p class="subtitle">A project built using the Spotify API and data from 3 years of listening habits. Inspired by my data science and ML courses, fueled by my love for music.</p>
                </div>
                <div class="content">
                    <div class="tag-row">
                        <Tag text="Machine Learning"></Tag>
                        <Tag text="Data Science"></Tag>
                        <Tag text="Software Engineering"></Tag>
                    </div>
                    <p class="text"> <b> Exploration </b> </p>
                    <p class="text"> I first explored which genres I listened to the most by aggregating each genres' appearance in the list of genres corresponding to my top 20 artists. </p>
                    <div class="imageContainer">
                        <img class="image" src={gen} />
                    </div>
                    <p class="text"> I noticed that the API returns a feature called "popularity" for each artist, and have always been a little curious about whether the music I listen to is mainstream. To find out, I graphed the correlation between artist ranking and popularity: </p>
                    <div class="imageContainer">
                        <img className="image" src={pop} />
                    </div>
                    <p class="text"> With an r-value of -0.44945735259442465, I'd say there is definitely a chance that this could be true. A negative r-value of this magnitude could imply that my more popular artists have higher popularity scores-- a.k.a. a negative correlation between personal preference and artist popularity. </p>
                    <p class="text"> <b> Modeling </b> </p>
                    <p class="text"> I personally have had a variety of hit-and-misses with Spotify's recommendations algorithm. When I saw that the API could return certain features of song tracks, I wanted to see if I could build myself a personalized                   recommendations algorithm using these features and the information that I know about my personal preferences. </p>
                    <p class="text"> The features for each track returned by the API include:
                        <ul>
                            <li>acousticness</li>
                            <li>danceability</li>
                            <li>energy</li>
                            <li>instrumentalness</li>
                            <li>key</li>
                            <li>liveness</li>
                            <li>loudness</li>
                            <li>speechiness</li>
                            <li>tempo</li>
                            <li>time signature</li>
                            <li>valence</li>
                        </ul>
                    </p>
                    <p class="text"> Using the API, I pulled 552 songs from my own playlists and my friends' playlists and added a 0 (dislike) and 1 (like) label to each song. I cleaned the data and prepared it for training, including changes such as:
                        <ul>
                        <li>one-hot-encoding the "key" column</li>
                        <li>filling null values</li>
                        <li>removing time signature as a feature after realizing most values were missing or redundant (i.e.
                            all 4's) or incorrect (i.e. 0)</li>
                        </ul>
                    </p>
                    <p class="text">  Afterwards I did a 9:1 split of the data and trained a Logistic Regression model on the data using scikit-learn. With just these basic features, the model reached:
                        <ul>
                        <li>Training accuracy of 78.47%</li>
                        <li>Validation accuracy of 71.43%</li>
                        </ul>
                    </p>
                    <p class="text"> Plotting the ROC curve of the model reveals: </p>
                    <div class="imageContainer">
                        <img className="image" src={roc} />
                    </div>
                    <p class="text"> I also wanted to test how well the model responds to new data, so I created a completely new playlist of 40 songs I've never listened to before as a test set. After I listened to the songs and manually labeled them as gold labels, i then calculated the model's accuracy on the test dataset to be 65%.</p>
                    <p class="text"> This was not a statistically significant result (p=0.04), but the API was fun to implement and showed some promising results! Some ideas I have moving forward in the next iteration of this model are to add:
                        <ul>
                            <li>Add genre as a feature</li>
                            <li>Add artist name as a feature</li>
                            <li>Add album name as a feature</li>
                            <li>Incorporate other APIs for more external information</li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Spotify;
