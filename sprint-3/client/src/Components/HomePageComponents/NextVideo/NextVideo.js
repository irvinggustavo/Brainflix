import React from "react";
import "./NextVideo.scss";
import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";

const NextVideo = (props) => {
  let nonMainARR = props.nextVideo.filter(
    (video) => video.id !== props.details.id
  );

  return (
    <section className="nextVideo">
      <h3 className="sideVIdeo__heading">NEXT VIDEO</h3>
      <div className="mainContainer">
        {nonMainARR.map((item) => {
          return (
            <>
              <div className="video__container">
                <Link to={"/" + item.id}>
                  <div>
                    <img
                      key={uuid()}
                      src={item.image}
                      className="sideImg"
                      alt={item.title}
                    />
                  </div>
                </Link>
                <div className=" details_container">
                  <p className="details__title"> {item.title}</p>
                  <p className=" details__channel"> {item.channel}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </section>
  );
};

export default NextVideo;
