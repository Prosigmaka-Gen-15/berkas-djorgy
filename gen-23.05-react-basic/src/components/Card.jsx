import React from "react";

const Card = (props) => {
  function getImgUrl(name) {
    return new URL(`${name}`, import.meta.url).href;
  }
  return (
    <div className="flex items-center justify-center w-full h-72 rounded-lg px-4 py-60">
      <div className="bg-white text-gray-700 w-56 min-h-[10rem] shadow-lg rounded-md overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={getImgUrl(props.image)}
          alt="image product"
        />

        <div className="flex p-5 flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs bg-gray-100">
              stock ready
            </span>
            <span className="px-3 py-1 rounded-full text-xs bg-gray-100">
              official store
            </span>
          </div>

          <h2 className="font-semibold text-2xl overflow-ellipsis whitespace-nonwrap">
            {props.name}
          </h2>
          <span className="text-xl font-bold">Rp.{props.price}</span>
          <p>{props.desc}</p>
          <div className="flex items-center">
            <button className="flex items-center border rounded-lg rounded-4xl px-4 py-1 font-semibold  bg-green-500 text-white transition hover:bg-green-700 ">
              Add to Cart &nbsp; <i class="fa fa-cart-plus"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
