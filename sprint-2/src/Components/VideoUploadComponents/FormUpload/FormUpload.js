import React from "react";
import "./formUpload.scss";

class FormUpload extends React.Component {
  render() {
    return (
      <form className=" Upload__form">
        <label className="form__label form__label--mod">TITLE YOUR VIDEO</label>
        <input
          type="text"
          name="upload"
          id="upload"
          className="vieo__title"
          placeholder=" Add the title for your video"
        />
        <label className="form__label">ADD A VIDEO DESCRIPTION</label>
        <textarea
          name="videoDescription"
          className="video__description"
          placeholder=" Add the description for your video"
        ></textarea>
      </form>
    );
  }
}

export default FormUpload;
