import React from "react";
import "./UploadVideo.scss";

import Thumbnail from "../Thumbnail/Thumbnail.js";
import FormUpload from "../FormUpload/FormUpload";
import Btn from "../../HeaderComponents/Btn/Btn";
import previesVideo from "../../../assets/Images/Upload-video-preview.jpg";

class UploadVideo extends React.Component {
  render() {
    return (
      <article className="UploadVideo">
        <h1 className="Upload__head">Upload Video</h1>
        <section className="UploadVideo__conatiner">
          <Thumbnail previesVideo={previesVideo} className="Thumbnail" />

          <FormUpload />
        </section>
        <div className="CTA__container">
          <Btn className="Btn Btn--tablet" text="PUBLISH" />
          <div className="CTA--cancel">
            <p>CANCEL</p>
          </div>
        </div>
      </article>
    );
  }
}

export default UploadVideo;
