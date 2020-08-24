import React from "react";
import axios from "axios";

import VideoPlayer from "../VidePlayer/VideoPlayer.js";
import CommentsForm from "../CommentsForm/CommentsForm.js";
import Comments from "../Comments/Comments.js";
import NextVideo from "../NextVideo/NextVideo";
import "./Home.scss";
import MainVideoDetails from "../MainVideoDetails/MainVideoDetails.js";

const url = "http://localhost:8080/";

class Home extends React.Component {
  state = {
    sideVideos: [],
    mainVideo: null,
  };

  componentDidMount() {
    axios.get(`${url}videos/1af0jruup5gu`).then((res) => {
      let mainV = res.data;

      axios.get(`${url}videos`).then((res) => {
        this.setState({
          mainVideo: mainV,
          sideVideos: res.data,
        });
      });
    });
  }

  componentDidUpdate(prevprops) {
    if (prevprops.match.params.videoId !== this.props.match.params.videoId) {
      axios
        .get(`${url}videos/${this.props.match.params.videoId}`)
        .then((res) => {
          this.setState({ mainVideo: res.data });
        });
    }
  }

  render() {
    return (
      <main>
        <VideoPlayer details={this.state.mainVideo} />
        <div className="deskFLex">
          <div className=" inner">
            <MainVideoDetails details={this.state.mainVideo} />
            <CommentsForm />
            <Comments details={this.state.mainVideo} />
          </div>
          <NextVideo
            nextVideo={this.state.sideVideos}
            details={this.state.mainVideo}
          />
        </div>
      </main>
    );
  }
}

export default Home;
