import React from "react";
import  Btn  from "../../HeaderComponents/Btn/Btn.js";
import "./CommentsForm.scss";
import Avatar  from '../../HeaderComponents/Avatar/Avatar.js';

class CommentsForm extends React.Component {
  render() {
    return (
      <section className="comments_input">
        {/* <div className= "fake_avatar"> </div> */}
        <Avatar className ="avatar"/>
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
              <Btn className = 'Btn' text="COMMENT" />
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default CommentsForm;
