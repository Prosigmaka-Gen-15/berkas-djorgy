import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductDetail from "../components/ProductDetail";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Details = (props) => {
  const { detailId } = useParams();
  const [item, setItem] = useState({});

  const getProduct = async () => {
    try {
      let response = await axios.get(" http://localhost:3001/data/" + detailId);
      setItem(response.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <Navbar />
      <div className="h-full">
        <ProductDetail
          name={item.nama}
          price={item.harga}
          desc={item.desc}
          image1={item.img1}
          image2={item.img2}
          image3={item.img3}
          image4={item.img4}
        />
      </div>
      <Footer />
    </>
  );
};

export default Details;
