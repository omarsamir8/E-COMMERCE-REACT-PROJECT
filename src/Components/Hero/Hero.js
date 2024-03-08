import React from "react";
import "./Hero.css";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";

function Hero() {
  return (
    <>
      <div className="hero">
        <div className="hero-left">
          <h2>NEEW ARRIVALS ONLY</h2>
          <div>
            <div className="hero-hand-icon">
              <p>New</p>
              <img src={hand_icon} alt="loading hand icon" />
            </div>
            <p className="collection">Collections</p>
            <p className="evryone">For Everyone</p>
          </div>
          <div className="hero-latest-btn">
            <div>Lastest Collections</div>
            <img src={arrow_icon} alt=" loading arrow icon " />
          </div>
        </div>
        <div className="hero-right">
          <img src={hero_image} alt="loading hero img" />
        </div>
      </div>
    </>
  );
}
export default Hero;
