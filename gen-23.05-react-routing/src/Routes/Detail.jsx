import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductDetail from "../components/ProductDetail";

const Details = () => {
  const data = [
    {
      id: 1,
      nama: "Sony Headphone 1",
      harga: "1.199.999",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum minus",
      img1: "../assets/images/headphone1.jpg",
      img2: "../assets/images/headphone2.jpg",
      img3: "../assets/images/headphone3.jpg",
      img4: "../assets/images/headphone4.jpg",
    },
    {
      id: 2,
      nama: "Sony Heaphone 2",
      harga: "899.999",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum minus",
      img1: "../assets/images/headphone2.jpg",
      img2: "../assets/images/headphone3.jpg",
      img3: "../assets/images/headphone4.jpg",
      img4: "../assets/images/headphone1.jpg",
    },
  ];
  return (
    <>
      <Navbar />
      {data.map((item) => (
        <div className="h-full" key={item.id}>
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
      ))}
      <Footer />
    </>
  );
};

export default Details;
