import React from "react";
import { v4 as uuid } from "uuid";

// import Comment from "../Comment/comment.js";
import "./Comments.scss";

const Comments = (props) => {
  if (!props.details) {
    return null;
  }
  return (
    <section className="comments__main">
      {props.details.comments.map((item) => {
        return (
          <div className="comment__container" key={uuid()}>
            <div className="fakeAvatar"></div>
            <div className="comment__box">
              <div className="comm__subheading">
                <p className="bold"> {item.name}</p>
                <p className="date"> {item.timestamp}</p>
              </div>
              <div>
                <p className="comment__p">{item.comment}</p>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Comments;
