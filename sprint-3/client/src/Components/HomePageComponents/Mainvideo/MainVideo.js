import React from "react";
import "./MainVideo.scss";

class MainVideo extends React.Component {
  render() {
    return (
      <div className="mainVideo__bg">
        <video
          className="mainVideo"
          poster={this.props.details ? this.props.details.image : ""}
        />
      </div>
    );
  }
}

export default MainVideo;
