import React from "react";
import "./CategorySection.css";
import Business from "../../assets/Business.png";
import Outline from "../../assets/Outline.png";
import Home from "../../assets/home.png";
// import Home from "../../assets/home.png";

import Packaging from "../../assets/packaging.png";
import Fabrics from "../../assets/faprics.png";
import Car from "../../assets/car.png";
import Electronics from "../../assets//electronic.png";

function CategorySection() {
  return (
    <section className="category-section">
      <h2>Explore millions of offers tailored to your company's needs</h2>
      <div className="categories">
        <div className="category">
          <div className="content">
            <img src={Business} />
            <span>Business services</span>
          </div>
        </div>
        <div className="category">
          <div className="content">
            <img src={Home} />
            <span>Home and garden</span>
          </div>
        </div>
        <div className="category">
          <div className="content">
            <img src={Outline} />
            <span>Beauty</span>
          </div>
        </div>
        <div className="category">
          <div className="content">
            <img src={Fabrics} />
            <span>Fabrics and raw materials</span>
          </div>
        </div>
        <div className="category">
          <div className="content">
            <img src={Packaging} />
            <span>Packaging and printing</span>
          </div>
        </div>
        <div className="category">
          <div className="content">
            <img src={Car} />
            <span>Car spare parts and accessories</span>
          </div>
        </div>
        <div className="category">
          <div className="content">
            <img src={Electronics} />

            <span>Electronics</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CategorySection;
