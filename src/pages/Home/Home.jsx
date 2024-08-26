import React from "react";
import Navbar from "../../components/NavBar/Navbar";
import HomeImage from "../../components/HomeCompo.js/HomeImage";
import CategorySection from "../../components/Category/CategorySection";
import ProductSection from "../../components/Product/ProductSection";
import image from "../../assets/devicongoogle.png";
import Info from "../../components/info/Info";
import Footer from "../../components/Fotter/Footer"
const Home = () => {
  const products = [
    { desc: 50.0, image: image, name: "name1", price: 200, wight: "20g" },
    {
      desc: 50.0,

      image: image,
      name: "name2",
      price: 200,
    },
    {
      desc: 50.0,
      image: image,
      name: "name3",
      price: 200,
    },
    {
      desc: 50.0,

      image: image,
      name: "name4",
      price: 200,
    },
  ];

  return (
    <>
      <Navbar />
      <HomeImage />
      <CategorySection />
      <ProductSection products={products} title={"Best Seller"} />
      <ProductSection products={products} title={"on Sale"} />
      <ProductSection products={products} title={"new Arrived"} />
      <ProductSection products={products} title={"Best Seller"} />
      <Info/>
      <Footer/>
    </>
  );
};

export default Home;
