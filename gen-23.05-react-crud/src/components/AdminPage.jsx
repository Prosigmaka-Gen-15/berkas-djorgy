import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import FormProduct from "./FormProduct";

const AdminPage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [products, setProducts] = useState([]);

  const getProduct = () => {
    axios
      .get("http://localhost:3001/data")
      .then((res) => setProducts(res.data))
      .catch((err) => {
        alert(err);
        console.log(err);
      });
  };

  const deleteProduct = (productId) => {
    axios
      .delete("http://localhost:3001/data/" + productId)
      .then(() => getProduct())
      .catch((err) => alert(err));
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="flex flex-col top-0 gap-3 ">
      <h2 className="text-2xl font-montserrat font-bold">Welcome, Admin!</h2>
      <div className="grid grid-cols-1 gap-4 ">
        <section className=" px-4 ">
          <h2 className="text-2xl font-montserrat font-bold border-b-2 border-green-700">
            Recent Orders <i class="fa fa-cart-arrow-down"></i>
          </h2>
          <div className="py-2 px-5">
            <table className="table-auto w-full border-collapse border border-slate-500 p-24 ">
              <thead>
                <tr>
                  <th className="p-1 border border-slate-500">Order ID</th>
                  <th className="p-1 border border-slate-500">Customer Name</th>
                  <th className="p-1 border border-slate-500">Order Date</th>
                  <th className="p-1 border border-slate-500">Total Amount</th>
                  <th className="p-1 border border-slate-500">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-1 border border-slate-300">12345</td>
                  <td className="p-1 border border-slate-300">John Doe</td>
                  <td className="p-1 border border-slate-300">2023-08-01</td>
                  <td className="p-1 border border-slate-300">$150.00</td>
                  <td className="p-1 border border-slate-300">Shipped</td>
                </tr>
                <tr>
                  <td className="p-1 border border-slate-300">12346</td>
                  <td className="p-1 border border-slate-300">Jane Smith</td>
                  <td className="p-1 border border-slate-300">2023-08-02</td>
                  <td className="p-1 border border-slate-300">$75.50</td>
                  <td className="p-1 border border-slate-300">Delivered</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section className="px-4">
          <h2 className="text-2xl font-montserrat font-bold border-b-2 border-green-700">
            Product Management
          </h2>
          <div className="flex flex-col gap-2 items-end py-2">
            <button
              className="border rounded-lg bg-green-400 w-32 py-1 font-semibold text-white hover:bg-green-700 transition"
              onClick={() => setIsFormOpen(true)}
            >
              Add Product &nbsp;<i class="fa fa-plus"></i>
            </button>
            {isFormOpen && <FormProduct setFormIsOpen={setIsFormOpen} />}

            <table className="table-auto w-full border-collapse border border-slate-500 p-24 ">
              <thead>
                <tr>
                  <th className="p-1 border border-slate-500">Product ID</th>
                  <th className="p-1 border border-slate-500">Product Name</th>
                  <th className="p-1 border border-slate-500">Description</th>
                  <th className="p-1 border border-slate-500">Price</th>
                  <th className="p-1 border border-slate-500">Image URL</th>
                  <th className="p-1 border border-slate-500">Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr>
                    <td className="p-1 border border-slate-300">
                      {product.id}
                    </td>
                    <td className="p-1 border border-slate-300">
                      {product.nama}
                    </td>
                    <td className="p-1 border border-slate-300">
                      {product.desc}
                    </td>
                    <td className="p-1 border border-slate-300">
                      Rp.{product.harga}
                    </td>
                    <td className="p-1 border border-slate-300">Image URL</td>
                    <td className="p-1 border border-slate-300 text-center">
                      <div className="flex justify-center gap-1">
                        <button className="bg-green-400 border rounded-lg px-2 py-1 hover:bg-green-700 transition">
                          <i class="fa fa-edit text-white"></i>
                        </button>

                        <button
                          className="bg-red-600 border rounded-lg px-2 py-1 hover:bg-red-700 transition"
                          onClick={() => deleteProduct(product.id)}
                        >
                          <i class="fa fa-trash-o text-white"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdminPage;
