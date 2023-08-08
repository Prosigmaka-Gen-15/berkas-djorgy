import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Banner from "../assets/images/banner-image.jpg";
// import { useState, useEffect } from "react";
// import axios from "axios";
import { useGetAllProductsQuery } from "../features/productsApi";

const Home = () => {
  const { data } = useGetAllProductsQuery();
  // const [products, setProduct] = useState([]);

  // const getProduct = async () => {
  //   try {
  //     let response = await axios.get(" http://localhost:3001/data");
  //     setProduct(response.data);
  //   } catch (e) {
  //     console.log(e.message);
  //   }
  // };

  // useEffect(() => {
  //   getProduct();
  // }, []);

  return (
    <>
      <Navbar />
      <div className="flex justify-center gap-3 pt-16 w-full h-full">
        <img src={Banner} alt="banner" className="w-4/5" />
      </div>
      <div className="flex justify-center gap-4 py-24">
        {/* {products.map((product) => (
          <div className="h-full" key={product.id}>
            <Card
              productId={product.id}
              name={product.nama}
              harga={product.harga}
              desc={product.desc}
              img1={product.img1}
            />
          </div>
        ))} */}
        {data?.map((product) => (
          <div key={product.id} className="h-full">
            <Card
              productId={product.id}
              name={product.nama}
              harga={product.harga}
              desc={product.desc}
              img1={product.img1}
            />
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Home;
