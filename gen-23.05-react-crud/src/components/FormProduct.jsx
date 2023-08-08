import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const schema = yup.object().shape({
  nama: yup.string().required(),
  harga: yup
    .number()
    .positive("harga harus positif")
    .integer("harga ga boleh koma")
    .required(),
  desc: yup.string().required(),
});

export default function FormProduct({ setFormIsOpen, getProducts }) {
  const form = useForm({
    resolver: yupResolver(schema),
  });

  const { productId } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = form;

  const getProduct = () => {
    axios
      .get("http://localhost:3001/data/" + productId)
      .then((res) => {
        setValue("nama", res.data.nama);
        setValue("harga", res.data.harga);
        setValue("desc", res.data.desc);
      })
      .catch((err) => alert(err));
  };

  const onSubmit = async (data) => {
    try {
      if (productId)
        await axios.patch("http://localhost:3001/data/" + productId, data);
      else await axios.post("http://localhost:3001/data", data);

      setFormIsOpen(false);
      getProducts();
    } catch (err) {
      alert(err);
      console.log(err);
    }
  };

  useEffect(() => {
    if (productId) getProduct();
  }, [productId]);

  return (
    <div>
      <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
        <form
          className="bg-white p-8 rounded-lg shadow-lg w-2/4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className="text-2xl font-bold mb-4">Product Form</h2>
          <div className="mb-4">
            <label className="block font-bold mb-1">Name</label>
            {errors.nama?.message}
            <input
              type="text"
              id="nama"
              {...register("nama")}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-1">Price</label>
            {errors.harga?.message}
            <input
              type="text"
              id="harga"
              {...register("harga")}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-1">Description</label>
            {errors.desc?.message}
            <input
              type="text"
              id="desc"
              {...register("desc")}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-1">Image</label>
            <input
              accept="image/*"
              type="file"
              className="w-full border border-gray-300 p-2 rounded"
              {...register("image")}
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={() => setFormIsOpen(false)}
            className="ml-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}
