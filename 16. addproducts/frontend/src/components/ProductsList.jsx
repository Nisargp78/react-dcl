import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import toast from "react-hot-toast";

const ProductsList = () => {
  let [allData, setAllData] = useState([]);
  let [cart, setCart] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      let products = await axios.get("http://localhost:3000/products");
      setAllData(products.data);
    };
    fetchProducts();
  }, []);

  let handleDelete = async (id) => {
    let filtered = allData.filter((prod) => {
      return prod.id !== id;
    });
    setAllData(filtered);
    try {
      let res = await axios.delete(`http://localhost:3000/products/${id}`);
      toast.success("Product deleted successfully!");
    } catch (err) {
      toast.error("Failed to delete product!!");
    }
  };

  let handleCart = async (id) => {
    try {
      let cartData = await axios.get(`http://localhost:3000/products/${id}`);
      let product = await axios.post("http://localhost:3000/cart", cartData.data);
      setCart([...cart, product]);
      toast.success("Product added to cart successfully!");
    } catch (err) {
      toast.error("Failed to add product to cart!!");
    }
  };

  return (
    <div className="flex flex-col items-center gap-10 py-14 px-6 bg-surface min-h-[calc(100vh-7rem)]">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-ink tracking-tight">Our Products</h2>
        <p className="text-ink-muted mt-2 text-base">Browse our curated collection</p>
        <div className="w-20 h-1 bg-gradient-to-r from-indigo to-violet mx-auto mt-4 rounded-full"></div>
      </div>
      <div className="flex justify-center items-start gap-8 flex-wrap">
        {allData.map((prod) => {
          return (
            <ProductCard
              key={prod.id}
              data={prod}
              handleDelete={handleDelete}
              handleCart={handleCart}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductsList;
