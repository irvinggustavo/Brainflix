import React from "react";
import poster from "../../../assets/Images/video-list-0.jpg";
import play from "../../../assets/Icons/SVG/Icon-play.svg";
// import scrubberLoad from '../../assets/Icons/SVG/Icon-scrubber-control.svg'
import volumen from "../../../assets/Icons/SVG/Icon-volume.svg";
import fullScreen from "../../../assets/Icons/SVG/Icon-fullscreen.svg";
import "./Hero.scss";

class Hero extends React.Component {
  render() {
    return (
      <section className="hero">
        <div className="video__bg">
          <video
            className="hero__video"
            poster={poster}
            src={this.props.mainVideo}
            type={this.props.mainVideo}
          />
        </div>

        <div className="video__controls">
          <div className="controls__icon">
            <img src={play} alt="play" />
          </div>
          <div className="video__controls--scrub">
            {/* <img src = {scrubberLoad} /> */}
          </div>
          <div className="hero__videoTools">
            <div className="controls__icon">
              <img src={volumen} alt="volumen" />
            </div>
            <div className="controls__icon">
              <img src={fullScreen} alt="expand" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
