import React from "react";
import content1 from "../assets/images/content1cuy.jpeg";
import content2 from "../assets/images/content2cuy.jpeg";
import content3 from "../assets/images/content3cuy.jpeg";
import content4 from "../assets/images/content4cuy.jpeg";

const ProductDetail = () => {
  return (
    <div className="flex justify-center flex-row gap-3 py-12 px-16">
      <div
        class="flex flex-col justify-between h-10 pl-12 py-12 gap-2"
        id="image-grid"
      >
        <img
          src={content1}
          class="w-24 h-24 rounded-md border cursor-pointer object-cover"
        />
        <img
          src={content2}
          class="w-24 h-24 rounded-md border cursor-pointer object-cover"
        />
        <img
          src={content3}
          class="w-24 h-24 rounded-md border cursor-pointer object-cover"
        />
        <img
          src={content4}
          class="w-24 h-24 rounded-md border cursor-pointer object-cover"
        />
      </div>
      <div class="flex flex-row gap-1 w-2/5  py-12" id="main-image">
        <img
          src={content1}
          alt="jaket bagus"
          class="w-auto h-auto border aspect-square object-cover rounded-xl"
        />
      </div>

      <div class="flex flex-col justify-start py-14 md:w-2/4 gap-3 px-5">
        <div>
          <span class="text-green-600 font-semibold"> Best Choice </span>
          <h1 class="text-3xl font-bold">HEYMALE Bomber Jacket</h1>
        </div>
        <div class="flex items-baseline mt-1 mb-4 pb-4 border-b border-slate-200 lg:w-2/4">
          <div class="space-x-2 flex text-sm">
            <label>
              <input
                class="sr-only peer"
                name="size"
                type="radio"
                value="xs"
                checked
              />
              <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                XS
              </div>
            </label>
            <label>
              <input class="sr-only peer" name="size" type="radio" value="s" />
              <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                S
              </div>
            </label>
            <label>
              <input class="sr-only peer" name="size" type="radio" value="m" />
              <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                M
              </div>
            </label>
            <label>
              <input class="sr-only peer" name="size" type="radio" value="l" />
              <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                L
              </div>
            </label>
            <label>
              <input class="sr-only peer" name="size" type="radio" value="xl" />
              <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                XL
              </div>
            </label>
          </div>
        </div>
        <p class="text-gray-700" className="pr-36">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum minus
          odit ipsa, aspernatur, aliquam perferendis sed provident laborum ad,
          repellat fugit tempora quia debitis nisi accusamus. Quis harum
          expedita maxime?
        </p>
        <h6 class="text-2xl font-sans">Rp.229.999</h6>
        <div class="flex flex-row items-center gap-2">
          <button class="bg-green-400 py-2 px-5 rounded-lg text-white text-3xl">
            -
          </button>
          <span class="py-4 px-6 rounded-lg">1</span>
          <button class="bg-green-400 py-2 px-5 rounded-lg text-white text-3xl">
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
