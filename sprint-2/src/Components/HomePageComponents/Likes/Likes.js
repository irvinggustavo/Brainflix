 import React from 'react'
 import likesIcon from "../../../assets/Icons/SVG/Icon-likes.svg";
import './Likes.scss';


 class Likes extends React.Component {
    render() {
      return (
        <div className="iconDetail">
          <img src={likesIcon} alt="Likes icon" />
          <LikesCount likes={this.props.likes} />
        </div>
      );
    }
  }
  
  class LikesCount extends React.Component {
    render() {
      return <h3 className="subHeading silver">{this.props.likes}</h3>;
    }
  }
  

  export default (Likes)