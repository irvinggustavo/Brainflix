import React from 'react';
import videoTest from '../../../assets/Video/BrainStationSampleVideo.mp4';
import poster from  '../../../assets/Images/video-list-0.jpg';
import play from '../../../assets/Icons/SVG/Icon-play.svg';
// import scrubberLoad from '../../assets/Icons/SVG/Icon-scrubber-control.svg'
import volumen from '../../../assets/Icons/SVG/Icon-volume.svg';
import fullScreen from '../../../assets/Icons/SVG/Icon-fullscreen.svg';
import './Hero.scss'
// import {v4 as uuid} from 'uuid'

class Hero extends React.Component{
    render () {
        return (
            <section className = "hero">
            <div className= 'video__bg'>
                 <video className = "hero__video" poster= {poster} src ={videoTest} type="video/mp4" />
            </div>
               
                 <div className = 'video__controls'>

                    <div className="controls__icon"> 
                        <img src = {play} alt = 'play' />
                    </div>
                    <div className="video__controls--scrub">
                        {/* <img src = {scrubberLoad} /> */}
                    </div>
                    <div className= "hero__videoTools">
                        <div className="controls__icon">
                            <img src = {volumen}  alt ='volumen'/>
                        </div>
                        <div className="controls__icon">
                            <img src = {fullScreen}  alt = 'expand'/>
                        </div>
                    </div>
                    
                 </div>   
            </section>
        )  
    }
}

// class Hero extends React.Component{

//     state ={
//         mainVIdeo: {
//             id: uuid(),
//             channel: 'By Red COw',
//             src: videoTest ,
//             duration: 'type of <string>',
//             video: 'type of <string>',
//             timestamp: '12/18/2018',
//         },
        
//     }

    

//         render(){
//             return(
//                 <section className = "hero">
//                     <HeroVideo
//                         className = 'hero__video'
//                         poster = {poster} 
//                         src = {videoTest }
//                         type= 'video/mp4'
//                         alt = 'Bikes racing'
                       
//                     />
//                     <VideoBTn 
//                         Src = {this.state.playButton.image.src}
//                         alt = {this.state.playButton.alt}
//                     />
//                     <div className = 'loadBar'> 
    
//                     </div>
//                     <div>
//                         <VideoBTn 
//                             src = {volumen}
//                             alt = "Volumen button"
//                         />
//                         <VideoBTn 
//                             src = {fullScreen}
//                             alt = "Expand button"
//                         /> 
//                     </div>
//                 </section> 
//             )
//         }
//     }
    

// class HeroVideo extends React.Component{
//     render(){
//         return(
//             <video
//                 className = 'hero'
//                 poster ={poster} 
//                 alt =   'Bikes racing'>
//                 <source
//                     src = {videoTest}
//                     type= 'video/mp4' >
//                 </source>
//             </video>
                     
//         )
//     }
// }

// class VideoBTn extends React.Component {
    
//     render(){
//         return(
//             <div className = "videoBtn">
//                 <img 
//                     src = {this.props.src}
//                     alt = {this.props.alt}
//                 />
//             </div>
//         )
//     }
// }









export default (Hero)