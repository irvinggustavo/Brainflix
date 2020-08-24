import React from "react";
import "./VideoPlayaer.scss";

import MainVideo from "../Mainvideo/MainVideo.js";
import VideoPlayerBar from "../VideoPlayerBar/VideoPlayerBar";

class VideoPlayer extends React.Component {
  render() {
    return (
      <section className="videoPlayer">
        <MainVideo details={this.props.details} />
        <VideoPlayerBar />
      </section>
    );
  }
}

export default VideoPlayer;
