import React from 'react';
import './MainVideo.scss';

import poster from '../../../assets/Images/video-list-0.jpg';

class MainVideo extends React.Component{
    
    render(){
        return(
            <div className="mainVideo__bg">
                <video
                    className="mainVideo"
                    poster={poster}
                    src={this.props.mainVideo}
                    type={this.props.mainVideo}
                />
             </div>
        )
    }
}

export default (MainVideo)