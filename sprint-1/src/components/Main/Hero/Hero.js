import React from 'react';
import videoTest from '../../../assets/Video/BrainStationSampleVideo.mp4';
import poster from  '../../../assets/Images/video-list-0.jpg';
import play from '../../../assets/Icons/SVG/Icon-play.svg';
// import scrubberLoad from '../../assets/Icons/SVG/Icon-scrubber-control.svg'
import volumen from '../../../assets/Icons/SVG/Icon-volume.svg';
import fullScreen from '../../../assets/Icons/SVG/Icon-fullscreen.svg';



class Hero extends React.Component{

    render(){
        return(
            <section className = "hero">
                <HeroVideo
                    className = 'hero__video'
                    poster = {poster} 
                    src = {videoTest} 
                    type= 'video.mp4'
                    alt = 'Bikes racing'
                />
                <VideoBTn 
                    src = {play}
                    alt = "Play button"
                />
                <div className = 'loadBar'> 

                </div>
                <div>
                    <VideoBTn 
                        src = {volumen}
                        alt = "Volumen button"
                    />
                    <VideoBTn 
                        src = {fullScreen}
                        alt = "Expand button"
                    />
                </div>
            </section>
        )
    }
}

class HeroVideo extends React.Component{
    render(){
        return(
            <video 
                className = {this.props.className}
                poster ={this.props.Url} 
                src = {this.props.Url} 
                type= {this.props.type}
                alt =  {this.props.description}
                />
        )
    }
}

class VideoBTn extends React.Component {
    
    render(){
        return(
            <div className = " videoBtn">
                <img 
                    src = {this.props.src}
                    alt = {this.props.alt}
                />
            </div>
        )
    }
}


export default (Hero)