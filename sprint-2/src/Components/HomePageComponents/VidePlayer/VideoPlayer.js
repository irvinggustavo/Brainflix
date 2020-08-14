import React from 'react';
import './VideoPlayaer.scss';

// components
import MainVideo from '../Mainvideo/MainVideo.js';
import VideoPlayerBar from '../VideoPlayerBar/VideoPlayerBar';

class VideoPlayer extends React.Component{
    render(){
        return(
            <section className = 'videoPlayer'>
                <MainVideo/>
                <VideoPlayerBar/>
            </section>
        )
    }
}

export default (VideoPlayer)