import React, { useRef, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const AddProducts = () => {
  let imgRef = useRef("");
  let nameRef = useRef("");
  let descRef = useRef("");
  let priceRef = useRef("");
  let mfgRef = useRef("");
  let qtyRef = useRef("");

  let [data, setData] = useState([]);

  let handleSubmit = async (e) => {
    e.preventDefault();

    let name = nameRef.current.value.trim();
    let image = imgRef.current.value.trim();
    let description = descRef.current.value.trim();
    let price = priceRef.current.value.trim();
    let mfg = mfgRef.current.value.trim();
    let qty = qtyRef.current.value.trim();

    if (name === "") {
      toast.error("Product name is required!");
      nameRef.current.focus();
      return;
    }

    if (name.length < 3) {
      toast.error("Product name must be at least 3 characters!");
      nameRef.current.focus();
      return;
    }

    if (image === "") {
      toast.error("Image URL is required!");
      imgRef.current.focus();
      return;
    }

    if (description === "") {
      toast.error("Description is required!");
      descRef.current.focus();
      return;
    }

    if (description.length < 10) {
      toast.error("Description must be at least 10 characters!");
      descRef.current.focus();
      return;
    }

    if (price === "") {
      toast.error("Price is required!");
      priceRef.current.focus();
      return;
    }

    if (isNaN(price) || Number(price) <= 0) {
      toast.error("Price must be greater than 0!");
      priceRef.current.focus();
      return;
    }

    if (mfg === "") {
      toast.error("Manufactured date is required!");
      mfgRef.current.focus();
      return;
    }

    if (isNaN(mfg)) {
      toast.error("Please enter a valid manufactured date!");
      mfgRef.current.focus();
      return;
    }

    if (qty === "") {
      toast.error("Quantity is required!");
      qtyRef.current.focus();
      return;
    }

    if (isNaN(qty) || Number(qty) <= 0) {
      toast.error("Quantity must be a positive whole number!");
      qtyRef.current.focus();
      return;
    }

    let newProduct = {
      image: image,
      name: name,
      description: description,
      price: Number(price),
      mfg: mfg,
      qty: Number(qty),
    };

    try {
      let res = await axios.post("http://localhost:3000/products", newProduct);
      setData([...data, newProduct]);
      imgRef.current.value = "";
      nameRef.current.value = "";
      descRef.current.value = "";
      priceRef.current.value = "";
      mfgRef.current.value = "";
      qtyRef.current.value = "";

      toast.success("Product added successfully!");
    } catch (error) {
      toast.error("Failed to add product!!");
    }
  };

  return (
    <div className="min-h-[calc(100vh-7rem)] flex flex-col justify-center items-center bg-surface py-16 px-4">
      <div className="mb-8 text-center">
        <h2 className="text-4xl font-bold text-ink tracking-tight">Add New Product</h2>
        <p className="text-ink-muted mt-2 text-base">Fill in the details to list a new product</p>
        <div className="w-20 h-1 bg-gradient-to-r from-indigo to-violet mx-auto mt-4 rounded-full"></div>
      </div>
      <form
        className="flex flex-col p-8 gap-5 rounded-2xl bg-card shadow-xl shadow-black/5 border border-gray-100 w-full max-w-lg"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          ref={nameRef}
          className="bg-gray-50 border border-gray-200 w-full p-3.5 rounded-xl text-ink placeholder-ink-muted/60 focus:outline-none focus:border-indigo focus:ring-2 focus:ring-indigo/20 transition-all duration-300 text-base"
          placeholder="Product Name"
        />

        <input
          type="text"
          ref={imgRef}
          className="bg-gray-50 border border-gray-200 w-full p-3.5 rounded-xl text-ink placeholder-ink-muted/60 focus:outline-none focus:border-indigo focus:ring-2 focus:ring-indigo/20 transition-all duration-300 text-base"
          placeholder="Image URL"
        />

        <input
          type="text"
          ref={descRef}
          className="bg-gray-50 border border-gray-200 w-full p-3.5 rounded-xl text-ink placeholder-ink-muted/60 focus:outline-none focus:border-indigo focus:ring-2 focus:ring-indigo/20 transition-all duration-300 text-base"
          placeholder="Description"
        />

        <input
          type="number"
          ref={priceRef}
          className="bg-gray-50 border border-gray-200 w-full p-3.5 rounded-xl text-ink placeholder-ink-muted/60 focus:outline-none focus:border-indigo focus:ring-2 focus:ring-indigo/20 transition-all duration-300 text-base"
          placeholder="Price"
        />

        <input
          type="number"
          ref={mfgRef}
          className="bg-gray-50 border border-gray-200 w-full p-3.5 rounded-xl text-ink placeholder-ink-muted/60 focus:outline-none focus:border-indigo focus:ring-2 focus:ring-indigo/20 transition-all duration-300 text-base"
          placeholder="Manufactured Date"
        />

        <input
          type="number"
          ref={qtyRef}
          className="bg-gray-50 border border-gray-200 w-full p-3.5 rounded-xl text-ink placeholder-ink-muted/60 focus:outline-none focus:border-indigo focus:ring-2 focus:ring-indigo/20 transition-all duration-300 text-base"
          placeholder="Quantity"
        />

        <button className="mt-4 p-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo to-violet hover:shadow-lg hover:shadow-indigo/25 transition-all duration-300 hover:scale-[1.02] active:scale-95 text-base tracking-wide">Add Product</button>
      </form>
    </div>
  );
};

export default AddProducts;
