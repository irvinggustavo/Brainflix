import React from 'react';

import './VideoDescription.scss'

class VideoDescription extends React.Component {
    render() {
      console.log(this.props)
      return (
        <div>
          {/* <p className="HeroDescrip"> {this.props.details.description} </p>
          <p className="HeroDescrip--mod"> {this.props.details ? this.props.details.comments : ''} comments</p> */}
        </div>
      );
    }
  }

  export default (VideoDescription)