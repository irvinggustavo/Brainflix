import React from "react";
import "./VideoPlayerBar.scss";

import play from "../../../assets/Icons/SVG/Icon-play.svg";
import volumen from "../../../assets/Icons/SVG/Icon-volume.svg";
import expand from "../../../assets/Icons/SVG/Icon-fullscreen.svg";

// components
import VideoBtn from "../VideoBtn/VideoBtn.js";
import VideoBtnScrub from "../VideoBtnScrub/VideoBtnScrub.js";

class VideoPlayerBar extends React.Component {
  render() {
    return (
      <div className="videoPlayerBar">
        <VideoBtn src={play} alt={""} />
        <VideoBtnScrub />
        <div className="VideoPlayerBar--inner">
          <VideoBtn src={volumen} alt="" />
          <VideoBtn src={expand} alt="" />
        </div>
      </div>
    );
  }
}

export default VideoPlayerBar;
