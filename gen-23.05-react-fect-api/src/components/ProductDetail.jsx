import React, { useEffect } from "react";
import { useState } from "react";
import content1 from "../assets/images/headphone1.jpg";
import content2 from "../assets/images/headphone2.jpg";
import content3 from "../assets/images/headphone3.jpg";
import content4 from "../assets/images/headphone4.jpg";

const ProductDetail = (props) => {
  function getImgUrl(name) {
    return new URL(`${name}`, import.meta.url).href;
  }
  const [gambarAwal, setGambar] = useState('');
  const [angkaAwal, setAngka] = useState(1);

  const decreaseValue = () => {
    if (angkaAwal > 1) {
      setAngka((prev) => prev - 1);
    } else {
      setAngka(1);
    }
  };

  const increaseValue = () => {
    setAngka((prev) => prev + 1);
  };

  useEffect(() => {
    setGambar(getImgUrl(props.image1))
  }, [props.image1])

  return (
    <div
      className="gap-3 py-12 px-16 flex flex-col md:flex justify-center md:flex-row"
      id={props.id}
    >
      <div class="flex flex-row justify-between h-10 pl-12 py-12 gap-2 md:flex md:flex-col">
        <img
          onClick={() => setGambar(content1)}
          src={getImgUrl(props.image1)}
          class="w-24 h-24 rounded-md border cursor-pointer object-cover"
        />
        <img
          onClick={() => setGambar(content2)}
          src={getImgUrl(props.image2)}
          class="w-24 h-24 rounded-md border cursor-pointer object-cover"
        />
        <img
          onClick={() => setGambar(content3)}
          src={getImgUrl(props.image3)}
          class="w-24 h-24 rounded-md border cursor-pointer object-cover"
        />
        <img
          onClick={() => setGambar(content4)}
          src={getImgUrl(props.image4)}
          class="w-24 h-24 rounded-md border cursor-pointer object-cover"
        />
      </div>
      <div class="flex flex-col gap-1 w-2/5 py-12">
        <img
          src={gambarAwal}
          alt="jaket bagus"
          class="w-auto h-auto border aspect-square object-cover rounded-xl"
        />
      </div>

      <div class="md:flex flex-col gap-4 w-2/4 md:py-12">
        <div>
          <span class="text-green-600 font-semibold"> Best Choice </span>
          <h1 class="text-3xl font-bold">{props.name}</h1>
        </div>
        <div class="flex items-baseline mt-1 mb-4 pb-4 border-b border-slate-200 lg:w-2/4">
          <span class="flex items-center space-x-3">
            <label class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-400">
              <input
                type="radio"
                name="color-choice"
                value="White"
                class="sr-only"
                aria-labelledby="color-choice-0-label"
              />
              <span id="color-choice-0-label" class="sr-only">
                White
              </span>
              <span
                aria-hidden="true"
                class="h-8 w-8 bg-white rounded-full border border-black border-opacity-10"
              ></span>
            </label>

            <label class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-400">
              <input
                type="radio"
                name="color-choice"
                value="Gray"
                class="sr-only"
                aria-labelledby="color-choice-1-label"
              />
              <span id="color-choice-1-label" class="sr-only">
                Gray
              </span>
              <span
                aria-hidden="true"
                class="h-8 w-8 bg-gray-200 rounded-full border border-black border-opacity-10"
              ></span>
            </label>

            <label class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-900">
              <input
                type="radio"
                name="color-choice"
                value="Black"
                class="sr-only"
                aria-labelledby="color-choice-2-label"
              />
              <span id="color-choice-2-label" class="sr-only">
                Black
              </span>
              <span
                aria-hidden="true"
                class="h-8 w-8 bg-gray-900 rounded-full border border-black border-opacity-10"
              ></span>
            </label>
          </span>
        </div>
        <p class="text-gray-700" className="md:pr-36">
          {props.desc}
        </p>
        <h6 class="text-2xl font-sans">{props.price}</h6>
        <div class="flex flex-row items-center gap-2">
          <button
            onClick={decreaseValue}
            class="bg-green-400 py-2 px-5 rounded-lg text-white text-3xl"
          >
            -
          </button>
          <span class="py-4 px-6 rounded-lg">{angkaAwal}</span>
          <button
            onClick={increaseValue}
            class="bg-green-400 py-2 px-5 rounded-lg text-white text-3xl"
          >
            +
          </button>
        </div>
        <button class="bg-green-400 text-white font-semibold py-3 px16 rounded-xl h-12 w-48 ">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
