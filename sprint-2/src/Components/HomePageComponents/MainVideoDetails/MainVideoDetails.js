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
        <h1 className="heading">{this.props.details ? this.props.details.title : '' }</h1>
        <div className="wtf">
          <HeadingDeatils
            channel = {this.props.details ? this.props.details.channel : ''}
            timestamp ={this.props.details ? this.props.details.timestamp : ''}
          />
          <div className="heading__inner divider">
            <Views views= {this.props.details ? this.props.details.views : ''} />
            <Likes likes= {this.props.details ? this.props.details.likes : ''} />
          </div>
        </div>
        <VideoDescription
          description = {this.props.details ? this.props.details.description : ''}
          comments = { this.props.details ? this.props.details.comments : ''}
        />
      </section>
    );
  }
}





export default MainVideoDetails;