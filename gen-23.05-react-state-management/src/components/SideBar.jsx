import React from "react";
import AdminPage from "../components/AdminPage";

const SideBar = () => {
  return (
    <div className="flex">
      <div className="flex flex-col h-screen p-3 bg-green-500 shadow w-60">
        <div className="space-y-3">
          <div className="flex items-center">
            <h2 className="text-xl font-bold text-white">Dashboard</h2>
          </div>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center py-4">
              <button
                type="submit"
                className="p-2 focus:outline-none focus:ring"
              >
                <i class="fa fa-search text-xl text-green-500"></i>
              </button>
            </span>
            <input
              type="search"
              name="Search"
              placeholder="Search..."
              className="w-full py-2 pl-10 text-sm rounded-md focus:outline-none"
            />
          </div>
          <div className="flex-1">
            <ul className="pt-2 pb-4 space-y-1 text-sm">
              <li className="rounded-sm hover:bg-green-700 transition">
                <a
                  href="#"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <i class="fa fa-home text-2xl text-white"></i>
                  <span className="text-gray-100">Home</span>
                </a>
              </li>
              <li className="rounded-sm hover:bg-green-700 transition">
                <a
                  href="#"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <i class="fa fa-gear text-2xl text-white"></i>
                  <span className="text-gray-100">Settings</span>
                </a>
              </li>
              <li className="rounded-sm hover:bg-green-700 transition">
                <a
                  href="#"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-gray-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                    />
                  </svg>
                  <span className="text-gray-100">Logout</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-12 px-12">
        <AdminPage />
      </div>
    </div>
  );
};

export default SideBar;
