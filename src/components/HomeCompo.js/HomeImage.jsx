import React from "react";
import unsplash from "../../assets/unsplash.png"
import "./HomeImage.css"
const HomeImage = () => {
  return (
    <>
    <div className="homeImage">
    <div className="container">
      <div className="overlay"></div>
      <div className="content">
        <div className="left">
          <h3>Best Way to Dropship<br/> your products</h3>
          <p>
            The leading e-commerce platform <br/> specialized in drop shipping for
            global trade
          </p>
          <button>Explore Now</button>
        </div>
        <div className="right">
          <div className="cover"></div>

            <img src={unsplash} alt="" />
          
        </div>
      </div>
    </div>
    </div>
  </>
  
  );
};

export default HomeImage;
