import { useState } from "react";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";

const ProductCard = ({ prod, handleDelete, addToCart }) => {
  let [like, setLike] = useState(false);
  return (
    <div className="flex items-center justify-center border-2 h-100 w-62 flex-col gap-4">
      <div className="h-55">
        <img className="h-50 object-cover" src={prod.image} alt="" />
      </div>
      <h3>{prod.title.slice(0, 20) + "..."}</h3>
      <div className="flex justify-between items-center p-2 gap-2">
        <button onClick={() => addToCart(prod)} className="bg-gray-300 p-2">
          Add To Cart
        </button>
        <button
          onClick={() => handleDelete(prod.id)}
          className="bg-red-500 p-2"
        >
          Delete
        </button>
        <span
          className="text-2xl cursor-pointer"
          onClick={() => {
            setLike(!like);
          }}
        >
          {like ? <FcLike /> : <FcLikePlaceholder />}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
