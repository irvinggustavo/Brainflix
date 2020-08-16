import React from 'react';
import "./NextVideo.scss";
import { v4 as uuid } from "uuid";

const NextVideo = (props) => {
  
    return (
      <section className="nextVideo">
        <h3 className="sideVIdeo__heading">NEXT VIDEO</h3>
        <div className="mainContainer">
          {props.nextVideo.map((item) => {
            return (
              <>
                <div className="video__container">
                  <div>
                    <img
                      key={uuid()}
                      src={item.image}
                      className="sideImg"
                      alt="description"
                    ></img>
                  </div>
  
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
