import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full fixed bg-green-400 flex flex-row content-center justify-between px-4 py-4 shadow top-0 z-50 font-montserrat">
      <div className="text-2xl font-bold text-white">
        <a href="/">ShoppingKuy</a>
      </div>
      <div className="hidden md:flex flex-row items-center gap-4 text-white ">
        <a href="#" className="cursor-pointer hover:opacity-50">
          Most Wanted
        </a>
        <a href="#" className="cursor-pointer hover:opacity-50">
          Catagories &nbsp;<i class="fa fa-angle-down"></i>
        </a>
        <a href="#" className="cursor-pointer hover:opacity-50">
          Brands &nbsp;
          <i class="fa fa-angle-down"></i>
        </a>
        <a href="#" className="cursor-pointer hover:opacity-50">
          New Arrivals
        </a>
      </div>
      <div className="hidden md:flex flex-row items-center gap-4">
        <form>
          <input
            type="text"
            placeholder="Search"
            class="border rounded-lg px-2 py-1 focus:outline-none focus:ring focus:border-blue-300"
          />
          <button
            type="submit"
            class="ml-2 px-4 py-1 bg-green-300 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring focus:bg-blue-600"
          >
            <i class="fa fa-search"></i>
          </button>
        </form>
        <a href="#" className="text-white cursor-pointer hover:opacity-50">
          <i class="fa fa-user"></i>
        </a>
        <a
          href="#"
          className="text-white cursor-pointer hover:opacity-50"
          onClick={() => navigate("/cart")}
        >
          <i class="fa fa-shopping-bag"></i>
        </a>
      </div>
      <div className="block text-white font-bold md:hidden">
        <a href="#">
          <i class="fa fa-bars"></i>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
