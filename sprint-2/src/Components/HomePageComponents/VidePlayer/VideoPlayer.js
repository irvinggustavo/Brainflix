import React from "react";
import "./VideoPlayaer.scss";

// components
import MainVideo from "../Mainvideo/MainVideo.js";
import VideoPlayerBar from "../VideoPlayerBar/VideoPlayerBar";

class VideoPlayer extends React.Component {
  render() {
    console.log(this.props);
    return (
      <section className="videoPlayer">
        <MainVideo details={this.props.details} />
        <VideoPlayerBar />
      </section>
    );
  }
}

export default VideoPlayer;
