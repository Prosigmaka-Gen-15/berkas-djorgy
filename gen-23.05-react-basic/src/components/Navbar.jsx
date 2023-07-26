import React from "react";

const Navbar = () => {
  return (
    <div className="w-full bg-green-400 flex flex-row content-center justify-between px-4 py-5 shadow ">
      <div className="text-2xl">
        <a href="#">ShoppingKuy</a>
      </div>
      <div className="flex flex-row items-center gap-4">
        <a href="#">Most Wanted</a>
        <a href="#">Catagories</a>
        <a href="#">Brands</a>
        <a href="#">New Arrivals</a>
      </div>
      <div className="flex flex-row items-center gap-4">
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
        <a href="#">Login</a>
        <a href="#">Cart</a>
      </div>
    </div>
  );
};

export default Navbar;
