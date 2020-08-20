import React from "react";

import viewIcon from "../../../assets/Icons/SVG/Icon-views.svg";

class Views extends React.Component {
  render() {
    return (
      <div className="iconDetail iconDetail--mod">
        <img src={viewIcon} alt="Views icon" />
        <ViewCount views={this.props.views} />
      </div>
    );
  }
}

class ViewCount extends React.Component {
  render() {
    return <h3 className="subHeading silver">{this.props.views}</h3>;
  }
}

export default Views;
