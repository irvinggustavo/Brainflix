import React from "react";
import "./UploadVideo.scss";

import Thumbnail from "../Thumbnail/Thumbnail.js";
import FormUpload from "../FormUpload/FormUpload";
// import Btn from "../../HeaderComponents/Btn/Btn";
import previesVideo from "../../../assets/Images/Upload-video-preview.jpg";
// import axios from "axios";

class UploadVideo extends React.Component {

  render() {
    return (
      <article className="UploadVideo">
        <h1 className="Upload__head">Upload Video</h1>
        <section className="UploadVideo__conatiner">
          <Thumbnail previesVideo={previesVideo} className="Thumbnail" />

          <FormUpload summitHandler = {this.summitData}/>
        </section>
      </article>
    );
  }
}

export default UploadVideo;
