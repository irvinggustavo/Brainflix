import React from "react";

import './HeadingDetails.scss'

class HeadingDeatils extends React.Component {
    render() {
      return (
        <>
          <div className="heading__inner subHeading">
            <h3 className="channel">{this.props.channel}</h3>
            <h3 className="silver">{this.props.date}</h3>
          </div>
        </>
      );
    }
  }

  export default HeadingDeatils;