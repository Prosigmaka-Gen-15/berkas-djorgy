import React from "react";
import Navbar from "../components/Navbar";
import Catalog from "../components/Catalog";
import Footer from "../components/Footer";
import ProductDetail from "../components/ProductDetail";

const Home = () => {
  return (
    <>
      <Navbar />
      <Catalog />
      <Footer />
    </>
  );
};

export default Home;
