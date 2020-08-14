import React from "react";

import "./MainVideoDetails.scss";
import HeadingDeatils from '../HeadingDeatils/HeadingDeatils';
import Views from '../Views/Views';
import Likes from '../Likes/Likes';
import VideoDescription from '../VideoDescription/VideoDescription';

class MainVideoDetails extends React.Component {
  render() {
    return (
      <section className="MainVideo__details">
        <h1 className="heading">{this.props.mainVideo.title}</h1>
        <div className="wtf">
          <HeadingDeatils
            channel={this.props.mainVideo.channel}
            date={this.props.mainVideo.date}
          />
          <div className="heading__inner divider">
            <Views views={this.props.mainVideo.views} />
            <Likes likes={this.props.mainVideo.likes} />
          </div>
        </div>
        <VideoDescription
          description={this.props.mainVideo.description}
          comments={this.props.mainVideo.comments}
        />
      </section>
    );
  }
}



export default MainVideoDetails;