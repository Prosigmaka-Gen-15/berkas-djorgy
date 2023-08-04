import React from "react";
import { useState } from "react";

const AdminPage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleFormToggle = () => {
    setIsFormOpen(!isFormOpen);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsFormOpen(false);
  };

  const [formInput, setFormInput] = useState({
    nama: "",
    harga: "",
    desc: "",
    image: "",
  });

  const handleFormInput = (event) => {
    setFormInput({
      ...formInput,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmitData = (event) => {
    const formData = {
      nama: formInput.nama,
      harga: formInput.harga,
      desc: formInput.desc,
    };
    console.log("Submitted data:", formData);
  };

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
          <div className="flex flex-col gap-2 py-2">
            <button
              className="border rounded-lg bg-green-400 w-32 py-1 font-semibold text-white hover:bg-green-700 transition"
              onClick={handleFormToggle}
            >
              Add Product &nbsp;<i class="fa fa-plus"></i>
            </button>
            {isFormOpen && (
              <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
                <form
                  onSubmit={handleSubmit}
                  className="bg-white p-8 rounded-lg shadow-lg w-2/4 "
                >
                  <h2 className="text-2xl font-bold mb-4">Product Form</h2>
                  <div className="mb-4">
                    <label htmlFor="name" className="block font-bold mb-1">
                      Name
                    </label>
                    <input
                      name="nama"
                      type="text"
                      value={formInput.nama}
                      onChange={handleFormInput}
                      className="w-full border border-gray-300 p-2 rounded"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="name" className="block font-bold mb-1">
                      Price
                    </label>
                    <input
                      name="harga"
                      type="text"
                      value={formInput.harga}
                      onChange={handleFormInput}
                      className="w-full border border-gray-300 p-2 rounded"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="name" className="block font-bold mb-1">
                      Description
                    </label>
                    <input
                      name="desc"
                      type="text"
                      value={formInput.desc}
                      onChange={handleFormInput}
                      className="w-full border border-gray-300 p-2 rounded"
                      required
                    />
                  </div>
                  {/* <div className="mb-4">
                    <label htmlFor="name" className="block font-bold mb-1">
                      Images
                    </label>
                    <input
                      name="image"
                      type="file"
                      value={formInput.image}
                      onChange={handleFormInput}
                      className="w-full border border-gray-300 p-2 rounded"
                      required
                    />
                  </div> */}
                  <button
                    type="submit"
                    onSubmit={handleSubmitData}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    onClick={handleFormToggle}
                    className="ml-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                  >
                    Cancel
                  </button>
                </form>
              </div>
            )}

            <table className="table-auto w-full border-collapse border border-slate-500 p-24 ">
              <thead>
                <tr>
                  <th className="p-1 border border-slate-500">Product ID</th>
                  <th className="p-1 border border-slate-500">Product Name</th>
                  <th className="p-1 border border-slate-500">Description</th>
                  <th className="p-1 border border-slate-500">Price</th>
                  <th className="p-1 border border-slate-500">Images</th>
                  <th className="p-1 border border-slate-500">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-1 border border-slate-300">12345</td>
                  <td className="p-1 border border-slate-300">barang 1</td>
                  <td className="p-1 border border-slate-300">
                    Lorem ipsum dolor
                  </td>
                  <td className="p-1 border border-slate-300">$150.00</td>
                  <td className="p-1 border border-slate-300">
                    <div className="flex justify-center">
                      <button className="bg-green-400 border rounded-lg px-2 py-1 hover:bg-green-700 transition">
                        <i class="fa fa-upload text-white"></i>
                      </button>
                    </div>
                  </td>
                  <td className="p-1 border border-slate-300 text-center">
                    <div className="flex justify-center gap-1">
                      <button className="bg-green-400 border rounded-lg px-2 py-1 hover:bg-green-700 transition">
                        <i class="fa fa-edit text-white"></i>
                      </button>

                      <button className="bg-red-600 border rounded-lg px-2 py-1 hover:bg-red-700 transition">
                        <i class="fa fa-trash-o text-white"></i>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="p-1 border border-slate-300">12346</td>
                  <td className="p-1 border border-slate-300">barang 2</td>
                  <td className="p-1 border border-slate-300">
                    lorem ipsum dolor
                  </td>
                  <td className="p-1 border border-slate-300">$75.50</td>
                  <td className="p-1 border border-slate-300">
                    <div className="flex justify-center">
                      <button className="bg-green-400 border rounded-lg px-2 py-1 hover:bg-green-700 transition">
                        <i class="fa fa-upload text-white"></i>
                      </button>
                    </div>
                  </td>
                  <td className="p-1 border border-slate-300 text-center">
                    <div className="flex justify-center gap-1">
                      <button className="bg-green-400 border rounded-lg px-2 py-1 hover:bg-green-700 transition">
                        <i class="fa fa-edit text-white "></i>
                      </button>

                      <button className="bg-red-600 border rounded-lg px-2 py-1 hover:bg-red-700 transition">
                        <i class="fa fa-trash-o text-white"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdminPage;
