import React from 'react';
import Hero from './Hero/Hero.js'
import HeroHeading from './HeroHeading/HeroHeading'
import CommentsForm from './CommentsForm/ComentsForm'
import Comments from './Comments/Comments.js'
import NextVideo from './NextVideo/NextVideo'
import './Main.scss'


import video1 from '../../assets/Images/video-list-1.jpg'
import video2 from '../../assets/Images/video-list-2.jpg'
import video3 from '../../assets/Images/video-list-3.jpg'
import video4 from '../../assets/Images/video-list-4.jpg'
import video5 from '../../assets/Images/video-list-5.jpg'
import video6 from '../../assets/Images/video-list-6.jpg'
import video7 from '../../assets/Images/video-list-7.jpg'
import video8 from '../../assets/Images/video-list-8.jpg'
import {v4 as uuid} from 'uuid'

import videoTest from '../../assets/Video/BrainStationSampleVideo.mp4';


class Main extends React.Component{

    state = {

        sideVideos :[
           
        {id: uuid(), title: 'Become A Travel Pro In One Easy Lesson...', channel: 'Scotty Cranmer', src: video1 },
        {id: uuid(), title: 'Les Houches The Hidden Gem Of The...', channel: 'Scotty Cranmer', src: video2 },
        {id: uuid(), title: 'Travel Health Useful Medical Information...', channel: 'Scotty Cranmer', src: video3 },
        {id: uuid(), title: 'Cheap Airline Tickets Great Ways To Save', channel: 'Emily Harper', src: video4 },
        {id: uuid(), title: 'Take A Romantic Break In A Boutique Hotel', channel: 'Ethan Owen', src: video5 },
        {id: uuid(), title: 'Choose The Perfect Accommodations', channel: 'Lydia Perez', src: video6 },
        {id: uuid(), title: 'Cruising Destination Ideas', channel: 'Timothy Austin', src: video7 },
        {id: uuid(), title: 'Train Travel On Track For Safety', channel: 'Scotty Cranmer', src: video8 },  
        ],

        comments: [
            {
            user: 'Micheal Lyons',
            date: '12/18/2018',
            comment: 'They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.'
            },
            {
            user: 'Gary Wong',
            date: '12/18/2018',
            comment: 'Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!'
            },
            {
             user: 'Gary Wong',
            date: '12/18/2018',
            comment: 'How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!'
            }
        ],

        mainVideo: {
            description: 'On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title',
            title: 'BMX Rampage: 201 Highlights ',
            channel: 'By Red Cow',
            date: '12/18/24',
            views: '1,001,023',
            likes: '110,985',
            comments: '3', 
            src: videoTest ,
            duration: 'type of <string>',   
            timestamp: '12/18/2018',
            type: 'video/mp4'                 
            },
            
    } 

    render(){
        return(
            <main>
               
                <Hero 
                    mainVideoD = {this.state.mainVideo}
                    icons = {this.state.icons}/>
                <div className ='deskFLex'>
                    <div className = ' inner'>
                        <HeroHeading mainVideo = {this.state.mainVideo}/>
                        <CommentsForm/>
                        <Comments comments = {this.state.comments} />
                    </div>
                    <NextVideo nextVideo = {this.state.sideVideos}/>
                </div>
                
           
            </main>
            
        )
    }
}


export default(Main)


