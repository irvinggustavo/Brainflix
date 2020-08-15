import React from "react";
import axios from "axios";
import VideoPlayer from "../VidePlayer/VideoPlayer.js";
import CommentsForm from "../CommentsForm/CommentsForm.js";
import Comments from "../Comments/Comments.js";
import NextVideo from "../NextVideo/NextVideo";
import "./Home.scss";

// import videoTest from "../../../assets/Video/BrainStationSampleVideo.mp4";
import MainVideoDetails from "../MainVideoDetails/MainVideoDetails.js";

const key = "?api_key=e7b81747-1e15-40fc-b6a2-8fdd8320ceb0";
const url = "https://project-2-api.herokuapp.com/";

class Home extends React.Component {
  state = {
    sideVideos: [],

    mainVideo: null,
  };

  componentDidMount() {
    axios.get(`${url}videos/1af0jruup5gu/${key}`).then((res) => {
      console.log(res);
      let mainV = res.data;

      // console.log(mainV)
      axios.get(`${url}videos/${key}`).then((res) => {
        console.log(res);

        this.setState({
          mainVideo: mainV,
          sideVideos: res.data,
        });
        //  () =>{console.log(this.state.mainVideo)}
      });
    });
  }

  render() {
    console.log(this.state);
    return (
      <main>
        <VideoPlayer details={this.state.mainVideo} />
        <div className="deskFLex">
          <div className=" inner">
            <MainVideoDetails details={this.state.mainVideo}  />
            <CommentsForm />
            <Comments details={this.state.mainVideo}  />
          </div>
          <NextVideo nextVideo={this.state.sideVideos} />
        </div>
      </main>
    );
  }
}

export default Home;
