import React from 'react';
import {v4 as uuid} from 'uuid'
import './NextVideo.scss'
import video1 from '../../../assets/Images/video-list-1.jpg'
import video2 from '../../../assets/Images/video-list-2.jpg'
import video3 from '../../../assets/Images/video-list-3.jpg'
import video4 from '../../../assets/Images/video-list-4.jpg'
import video5 from '../../../assets/Images/video-list-5.jpg'
import video6 from '../../../assets/Images/video-list-6.jpg'
import video7 from '../../../assets/Images/video-list-7.jpg'
import video8 from '../../../assets/Images/video-list-8.jpg'

class NextVideo extends React.Component{
    state = {
        sideVideos : [
           
            {id: uuid(), title: 'Become A Travel Pro In One Easy Lesson...', channel: 'Scotty Cranmer', src: video1 },
            {id: uuid(), title: 'Les Houches The Hidden Gem Of The...', channel: 'Scotty Cranmer', src: video2 },
            {id: uuid(), title: 'Travel Health Useful Medical Information...', channel: 'Scotty Cranmer', src: video3 },
            {id: uuid(), title: 'Cheap Airline Tickets Great Ways To Save', channel: 'Emily Harper', src: video4 },
            {id: uuid(), title: 'Take A Romantic Break In A Boutique Hotel', channel: 'Ethan Owen', src: video5 },
            {id: uuid(), title: 'Choose The Perfect Accommodations', channel: 'Lydia Perez', src: video6 },
            {id: uuid(), title: 'Cruising Destination Ideas', channel: 'Timothy Austin', src: video7 },
            {id: uuid(), title: 'Train Travel On Track For Safety', channel: 'Scotty Cranmer', src: video8 },  
        ]
    }

    render(){
    
        return(
            <section className='nextVideo'>
                <h3 className= 'sideVIdeo__heading'>NEXT VIDEO</h3>
                <div className = 'mainContainer'>
                    {this.state.sideVideos.map( item =>{
                        return (
                        <>
                        <div className = 'video__container'>
                            <div >
                                <img
                                    key= {uuid()}
                                    src = {item.src}
                                    className = 'sideImg'
                                    alt = 'description'></img>
                            </div>
                            
                            <div className = ' details_container'>
                                <p className ='details__title'> {item.title}</p>
                                <p className =' details__channel'> {item.channel}</p>
                            </div>
                        </div>
                            
                        </>
                        )
                    }
                )}
                </div>
            </section>
        )
    }
}



export default (NextVideo)