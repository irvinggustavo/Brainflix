import React from "react";
import { Btn } from "../../Header/Header";
import "./CommentsForm.scss";
import { Avatar } from "../../Header/Header";

class CommentsForm extends React.Component {
  render() {
    return (
      <section className="comments_input">
        {/* <div className= "fake_avatar"> </div> */}
        <Avatar />
        <div>
          <form className="form">
            <label htmlFor="comment" className="form__label">
              {" "}
              JOIN THE CONVERSATION
            </label>
            <div className="form__flex">
              <input
                id="comment"
                name="comment"
                type="text"
                className="form__input"
              ></input>
              <Btn text="COMMENT" />
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default CommentsForm;
