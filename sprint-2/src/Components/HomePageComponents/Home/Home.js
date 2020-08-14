import React from "react";
import axios from 'axios'
import VideoPlayer from "../VidePlayer/VideoPlayer.js";
import CommentsForm from '../CommentsForm/CommentsForm.js';
import Comments from "../Comments/Comments.js";
import NextVideo from "../NextVideo/NextVideo";
import "./Home.scss";


import videoTest from "../../../assets/Video/BrainStationSampleVideo.mp4";
import MainVideoDetails from "../MainVideoDetails/MainVideoDetails.js";


const key ='?api_key=e7b81747-1e15-40fc-b6a2-8fdd8320ceb0'
const url = 'https://project-2-api.herokuapp.com/'

class Home extends React.Component {
  state = {
    sideVideos: [],

    comments: [
      {
        user: "Micheal Lyons",
        date: new Date().toLocaleTimeString(),
        comment:
          "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.",
      },
      {
        user: "Gary Wong",
        date: new Date().toLocaleTimeString(),
        comment:
          "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
      },
      {
        user: "Gary Wong",
        date: new Date().toLocaleTimeString(),
        comment:
          "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
      },
    ],

    mainVideo: {
      description:
        "On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title",
      title: "BMX Rampage: 201 Highlights ",
      channel: "By Red Cow",
      date: "12/18/24",
      views: "1,001,023",
      likes: "110,985",
      comments: "3",
      src: videoTest,
      duration: "type of <string>",
      timestamp: "12/18/2018",
      type: "video/mp4",
    },
  };

  componentDidMount(){
    axios
      .get(`${url}videos/${key}`)
      .then(res =>{
          console.log(res.data)
          this.setState (
            {sideVideos: res.data}
          )
      })
  }



  render() {
    return (
      <main>
        <VideoPlayer mainVideoD={this.state.mainVideo} icons={this.state.icons} />
        <div className="deskFLex">
           <div className=" inner">
            <MainVideoDetails mainVideo={this.state.mainVideo} />
            <CommentsForm />
            <Comments comments={this.state.comments} />
          </div>
          <NextVideo nextVideo={this.state.sideVideos} /> 
        </div> 
      </main>
    );
  }
}

export default (Home);
