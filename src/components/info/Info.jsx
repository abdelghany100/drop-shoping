import React from "react";
import lamp from "../../assets/lampa.png";
import security from "../../assets/protected.png";
import squer from "../../assets/squer.png";
import poard from "../../assets/poard.png";
import "./Info.css"
const Info = () => {
  return (
    <>
      <div className="info-section">
        <div className="carts">
            
          <div className="cart">
            <img src={lamp} alt="" />
            <h2>Millions of business offers</h2>
            <p>
              Explore products and suppliers for your company from millions of
              offers around the world
            </p>
          </div>

          <div className="cart">
            <img src={security} alt="" />
            <h2>Quality protected by guarantee</h2>
            <p>
              Explore products and suppliers for your company from millions of
              offers around the world
            </p>
          </div>

          <div className="cart">
            <img src={squer} alt="" />
            <h2>One-stop trading solutions</h2>
            <p>
              Explore products and suppliers for your company from millions of
              offers around the world
            </p>
          </div>
          <div className="cart">
            <img src={poard} alt="" />
            <h2>A trading experience designed just for you</h2>
            <p>
              Explore products and suppliers for your company from millions of
              offers around the world
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
