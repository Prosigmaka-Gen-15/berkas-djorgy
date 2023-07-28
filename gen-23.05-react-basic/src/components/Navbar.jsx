import React from "react";

const Navbar = () => {
  return (
    <div className="w-full bg-green-400 flex flex-row content-center justify-between px-4 py-4 shadow font-montserrat">
      <div className="text-2xl font-bold text-white">
        <a href="#">ShoppingKuy</a>
      </div>
      <div className="hidden md:flex flex-row items-center gap-4 text-white">
        <a href="#">Most Wanted</a>
        <a href="#">
          Catagories &nbsp;<i class="fa fa-angle-down"></i>
        </a>
        <a href="#">
          Brands &nbsp;
          <i class="fa fa-angle-down"></i>
        </a>
        <a href="#">New Arrivals</a>
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
        <a href="#" className="text-white">
          <i class="fa fa-user"></i>
        </a>
        <a href="#" className="text-white">
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
