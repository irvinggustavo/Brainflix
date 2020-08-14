import React from 'react';

import './VideoDescription.scss'

class VideoDescription extends React.Component {
    render() {
      return (
        <div>
          <p className="HeroDescrip">{this.props.description}</p>
          <p className="HeroDescrip--mod">{this.props.comments} comments</p>
        </div>
      );
    }
  }

  export default (VideoDescription)