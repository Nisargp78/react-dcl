import React, { useEffect, useState } from "react";

const FetchData = () => {
  const [allData, setAllData] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log("Cart updated:", cart);
  }, [cart]);

  async function getData() {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await res.json();
    setAllData(data);
  }

  const addToCart = (user) => {
    setCart((prevCart) => {
      const alreadyAdded = prevCart.some((item) => item.id === user.id);
      if (alreadyAdded) {
        return prevCart;
      }
      return [...prevCart, user];
    });
  };

  const deleteUser = (id) => {
    setAllData((prevData) => prevData.filter((user) => user.id !== id));
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <div className="flex flex-col gap-5 pt-4 bg-indigo-950 text-white pb-5 min-h-screen">
      <div className="px-5">
        <h2 className="text-2xl font-bold">Cart ({cart.length})</h2>
        {cart.length === 0 ? (
          <p className="text-lg text-indigo-300">No items in cart.</p>
        ) : (
          <ul className="mt-3 list-disc pl-5 text-lg text-indigo-200">
            {cart.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        )}
      </div>

      <div className="flex flex-wrap gap-10 justify-center items-center">
        {allData == null ? (
          <h1>Loading</h1>
        ) : (
          allData.map((user) => {
            return (
              <div key={user.id} className="text-2xl w-80 flex justify-center items-center rounded-2xl flex-col gap-3 p-5 bg-indigo-800">
                <h1>{user.name}</h1>
                <h1>{user.email}</h1>
                <h1>{user.phone}</h1>
                <h1>{user.website}</h1>
                <div className="flex gap-5">
                  <button
                    onClick={() => addToCart(user)}
                    className="bg-amber-400 p-1 text-lg cursor-pointer text-black rounded"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => deleteUser(user.id)}
                    className="bg-amber-400 p-1 text-lg cursor-pointer text-black rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default FetchData;
