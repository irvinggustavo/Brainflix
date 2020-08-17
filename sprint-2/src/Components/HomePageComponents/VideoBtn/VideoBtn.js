import React from "react";
import "./VideoBtn.scss";

class VideoBtn extends React.Component {
  render() {
    return (
      <div className="video__btn">
        <img src={this.props.src} alt={this.props.alt} />
      </div>
    );
  }
}

export default VideoBtn;
