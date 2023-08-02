import React from "react";
import Navbar from "../components/Navbar";
import Catalog from "../components/Catalog";
import Footer from "../components/Footer";
import Banner from "../assets/images/banner-image.jpg";
import { useState, useEffect } from "react";
import axios from "axios";
const Home = () => {
  const [products, setProduct] = useState([]);

  const getProduct = async () => {
    try {
      let response = await axios.get(" http://localhost:3001/data");
      setProduct(response.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getProduct();
  }),
    [];

  return (
    <>
      <Navbar />
      <div className="flex justify-center gap-3 pt-16 w-full h-full">
        <img src={Banner} alt="banner" className="w-4/5" />
      </div>
      {products.map((product) => (
        <Catalog
          key={product.id}
          name={product.nama}
          harga={product.harga}
          desc={product.desc}
          img1={product.img1}
        />
      ))}
      <Footer />
    </>
  );
};

export default Home;
