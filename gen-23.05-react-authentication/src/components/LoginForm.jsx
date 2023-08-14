import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { setUser, setToken } from "../features/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const adminUser = useSelector(
    (state) => state.auth.email === "admin@admin.com"
  );

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const setInputValue = (event) =>
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

  const handleLoginEvent = (e) => {
    e.preventDefault();
    console.log(formData);
    axios
      .post("http://localhost:3000/login", formData)
      .then((res) => {
        const { accessToken, user } = res.data;
        dispatch(setToken(accessToken));
        dispatch(setUser(user));
        if (adminUser === "admin@admin.com") {
          navigate("/admin");
        } else {
          navigate("/home");
        }
      })
      .catch((err) => {
        alert("Something wrong!");
        console.log(err);
        console.log(err.ressponse);
      });
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen ">
        <form
          className="w-full max-w-sm border p-5 rounded-lg"
          onSubmit={handleLoginEvent}
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={setInputValue}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your Username"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={setInputValue}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-around">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign In
            </button>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Register
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
