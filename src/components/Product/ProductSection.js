import React from "react";
import "./ProductSection.css";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

function ProductSection({ products, title }) {
  console.log(products[0].desc);
  return (
    <section className="product-section">
      <div className="head">
        <h2>{title}</h2>
        <Link className="see-all">
          See all <IoIosArrowForward />
        </Link>
      </div>
      <div className="products">
        {products.map((product, index) => (
          <div key={index} className="product">
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            {product.wight && <p className="wight">{product.wight}</p>}
            <div className="salary">
              <p className="price">${product.price}</p>
              {product.desc && <p className="desc">{product.desc}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductSection;
