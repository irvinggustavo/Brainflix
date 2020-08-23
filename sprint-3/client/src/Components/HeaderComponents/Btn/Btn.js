import React from "react";
import "./Btn.scss";

const Btn = (props) => {
  return (
    <div className={props.className} type= "submit">
      <img src={props.url} alt={props.description}  />
      <p>{props.text}</p>
    </div>
  );
};

export default Btn;
