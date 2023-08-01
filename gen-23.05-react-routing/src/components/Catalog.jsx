import React from "react";
import Card from "./Card";
import Banner from "../assets/images/banner-image.jpg";
import { useNavigate } from "react-router-dom";

const Catalog = () => {
  const navigate = useNavigate();

  const data = [
    {
      id: 1,
      nama: "lorem ipsum",
      harga: "200.000",
      desc: "lorem ipsum dolor sit",
      img: "../assets/images/headphone1.jpg",
    },
    {
      id: 2,
      nama: "lorem ipsum",
      harga: "100.000",
      desc: "lorem ipsum dolor sit",
      img: "../assets/images/blueheadphone1.jpg",
    },
    {
      id: 3,
      nama: "lorem ipsum",
      harga: "350.000",
      desc: "lorem ipsum dolor sit",
      img: "../assets/images/headphone3.jpg",
    },
    {
      id: 4,
      nama: "lorem ipsum",
      harga: "400.000",
      desc: "lorem ipsum dolor sit",
      img: "../assets/images/headphone4.jpg",
    },
    {
      id: 5,
      nama: "lorem ipsum",
      harga: "1.000.000",
      desc: "lorem ipsum dolor sit",
      img: "../assets/images/headphone1.jpg",
    },
    {
      id: 6,
      nama: "lorem ipsum",
      harga: "2.300.000",
      desc: "lorem ipsum dolor sit",
      img: "../assets/images/headphone2.jpg",
    },
    {
      id: 7,
      nama: "lorem ipsum",
      harga: "1.300.000",
      desc: "lorem ipsum dolor sit",
      img: "../assets/images/headphone3.jpg",
    },
    {
      id: 8,
      nama: "lorem ipsum",
      harga: "1.200.000",
      desc: "lorem ipsum dolor sit",
      img: "../assets/images/headphone4.jpg",
    },
  ];
  console.log(data);
  return (
    <div className="flex flex-col gap-3 px-24">
      <img src={Banner} alt="banner" />
      <div className="flex flex-row flex-wrap justify-center gap-4">
        {data.map((item) => (
          <div className="h-full" key={item.id}>
            <Card
              name={item.nama}
              price={item.harga}
              desc={item.desc}
              image={item.img}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
