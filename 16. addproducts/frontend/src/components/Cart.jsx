import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Cart = () => {
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      const response = await axios.get("http://localhost:3000/cart");
      setCartProducts(response.data);
    };
    fetchCart();
  }, []);

  let handleDelete = async (id) => {
    let filtered = cartProducts.filter((prod) => {
      return prod.id !== id;
    });
    setCartProducts(filtered);
    try {
      let res = await axios.delete(`http://localhost:3000/cart/${id}`);
      toast.success("Product removed from cart!");
    } catch (err) {
      toast.error("Failed to remove product!!");
    }
  };

  return (
    <div className="min-h-[calc(100vh-7rem)] bg-surface py-14 px-6">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-ink tracking-tight">Shopping Cart</h2>
        <p className="text-ink-muted mt-2 text-base">Review your selected items</p>
        <div className="w-20 h-1 bg-gradient-to-r from-indigo to-violet mx-auto mt-4 rounded-full"></div>
      </div>
      <div className="flex justify-center gap-8 flex-wrap">
        {cartProducts.map((data) => (
          <div className="w-72 bg-card shadow-lg shadow-black/5 border border-gray-100 rounded-2xl overflow-hidden group hover:shadow-xl hover:shadow-indigo/10 transition-all duration-500 hover:-translate-y-2">
            <div className="flex flex-col items-center gap-4 p-5">
              <div className="w-full h-48 overflow-hidden rounded-xl bg-gray-50">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  src={data.image}
                  alt=""
                />
              </div>
              <div>
                <h1 className="text-lg font-bold text-ink text-center">{data.name}</h1>
              </div>
              <div>
                <span className="text-ink-muted text-sm text-center">{data.description.slice(0, 50)}</span>
              </div>
              <div>
                <span className="text-2xl font-bold text-indigo">$ {data.price}</span>
              </div>
              <div className="w-full mt-2">
                <button
                  onClick={() => {
                    handleDelete(data.id);
                  }}
                  className="w-full py-2.5 bg-rose/10 border border-rose/20 text-rose font-medium rounded-xl cursor-pointer hover:bg-rose/20 transition-all duration-300 active:scale-95 text-sm"
                >
                  Remove from Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
