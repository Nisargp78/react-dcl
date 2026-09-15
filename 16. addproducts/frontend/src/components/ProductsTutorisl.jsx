import React, { useEffect, useState } from "react";
import AddProduct from "./AddProduct";
import ProductList from "./ProductList";
import axios from "axios";

const ProductApp = () => {
  let [allProducts, setAllProducts] = useState(null);
  let getAllProducts = async () => {
    let res = await axios.get("http://localhost:5000/products");
    setAllProducts(res.data);
  };
  useEffect(() => {
    getAllProducts();
  }, []);

  let handleDelete = async (id) => {
    let filtered = allProducts.filter((el) => {
      return el.id != id;
    });
    setAllProducts(filtered);
    let res = await axios.delete(`http://localhost:5000/products/${id}`);
    console.log(res);
  };

  let handleAddProduct = async (data) => {
    let res = await axios.post("http://localhost:5000/products", data);
    setAllProducts([...allProducts, res.data]);
  };

  return (
    <div>
      <AddProduct handleAddProduct={handleAddProduct} />
      <ProductList allProducts={allProducts} handleDelete={handleDelete} />
    </div>
  );
};

export default ProductApp;







import React, { useRef } from "react";
import axios from "axios";
const AddProduct = ({ handleAddProduct }) => {
  let pnameRef = useRef("");
  let pImgRef = useRef("");
  let pPriceRef = useRef("");
  let pMfgRef = useRef("");
  let pQtyRef = useRef("");
  let pDescRef = useRef("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      pname: pnameRef.current.value,
      img: pImgRef.current.value,
      price: pPriceRef.current.value,
      mfg: pMfgRef.current.value,
      desc: pDescRef.current.value,
      qty: pQtyRef.current.value,
    };
    handleAddProduct(data);
  };
  return (
    <form onSubmit={handleSubmit} className="addPform">
      <input placeholder="product name" type="text" ref={pnameRef} />
      <input placeholder="img address" type="text" ref={pImgRef} />
      <input placeholder="price" type="text" ref={pPriceRef} />
      <input placeholder="qty" type="text" ref={pQtyRef} />
      <input placeholder="desc.." type="text" ref={pDescRef} />
      <input placeholder="mfg" type="text" ref={pMfgRef} />
      <button>Submit</button>
    </form>
  );
};



import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
const ProductList = ({ allProducts, handleDelete }) => {
  return (
    <div className="red">
      <h1>All Products</h1>
      <div className="container">
        {allProducts?.map((prod) => {
          return <ProductCard data={prod} handleDelete={handleDelete} />;
        })}
      </div>
    </div>
  );
};

export default ProductList;


import React from "react";

const ProductCard = ({ data, handleDelete }) => {
  let { pname, img, price, desc } = data;
  return (
    <div className="card">
      <img src={img} alt="" />
      <h2>{pname}</h2>
      <span>{price}</span>
      <p>{desc}</p>
      <button onClick={() => handleDelete(data.id)}>Delete</button>
    </div>
  );
};

export default ProductCard;








* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}

/* ! productList css here */

.container {
  display: flex;
  gap: 30px;
  padding: 20px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  border: solid;
}

.card {
  /* height: 320px; */
  width: 220px;
  border: 1px solid #a0a0a0;
  border-radius: 20px;
  padding: 20px;
  text-align: center;
  display: flex;
  gap: 20px;
  flex-direction: column;
}
.card > img{
    height: 150px;
}


/* ! add Products form css here  */
.addPform{
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    padding: 20px;
    width: fit-content;
    background-color: rgb(149, 149, 149);
    margin: auto;
    border-radius: 30px;
}
.addPform input{
    height: 40px;
    width: 300px;
    padding: 0px 10px;
    font-size: 20px;
    border: none;
    /* border-bottom:2px solid black ; */
}
.addPform input:focus{
    border: none;
    outline: none;
    border-bottom: 2px solid black;
}
.addPform button{
    padding: 10px 20px;
}
