import React from "react";
import likesIcon from "../../../assets/Icons/SVG/Icon-likes.svg";
import "./Likes.scss";
import axios from "axios";

class Likes extends React.Component {
  clickHandler = () => {
    const video = this.props.details;
    const currentVideo = video.id;

    // pls tell me what I'm missing, the back end works with Postman
    axios
      .put("/videos/:id/likes", {
        id: currentVideo,
      })
      .then(console.log("sucess"));
  };

  render() {
    return (
      <div className="iconDetail" onClick={this.clickHandler}>
        <img src={likesIcon} alt="Likes icon" />
        <LikesCount likes={this.props.likes} />
      </div>
    );
  }
}

class LikesCount extends React.Component {
  render() {
    return <h3 className="subHeading silver">{this.props.likes} </h3>;
  }
}

export default Likes;
