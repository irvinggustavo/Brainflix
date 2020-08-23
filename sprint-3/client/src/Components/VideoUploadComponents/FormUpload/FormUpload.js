import React from "react";
import "./formUpload.scss";
import axios from "axios";
import Btn from "../../HeaderComponents/Btn/Btn";

class FormUpload extends React.Component {
  
  onSumitHandler = (e) => {
    e.preventDefault();
      axios
        .post('http://localhost:8080/videos', {
          title: e.target.videoTitle.value,
          description: e.target.videoDescription.value
        })
        .then(console.log('sucess'))
        this.form.reset()
  }
  render() {
   
    return (
      <form className=" Upload__form" id= "Upload__form" onSubmit = {this.onSumitHandler} ref={form => this.form = form}>
        <label className="form__label form__label--mod">TITLE YOUR VIDEO</label>
        <input
          type="text"
          name="videoTitle"
          id="videoTitle"
          className="vieo__title"
          placeholder=" Add the title for your video"
        />
        <label className="form__label">ADD A VIDEO DESCRIPTION</label>
        <textarea
          id = "videoDescription"
          name="videoDescription"
          className="video__description"
          placeholder=" Add the description for your video"
        >
        </textarea>
        <div className="CTA__container">
            <button className="Btn Btn--tablet" text="PUBLISH" type ="submit" form = "Upload__form">PUBLISH </button>
          <div className="CTA--cancel">
            <p>CANCEL</p>
          </div>
        </div>
  
      </form>
    );
  }
}

export default FormUpload;
