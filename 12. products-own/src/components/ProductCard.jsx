const ProductCard = ({ data, handleDelete, handleCart }) => {
  return (
    <div className="w-78 bg-blue-300 shadow-2xl rounded-3xl">
      <div className="flex justify-center items-center h-100 flex-col gap-5 p-5">
        <div className="w-72 object-cover flex justify-center items-center rounded-2xl">
          <img className="h-40 object-cover p-2" src={data.image} alt="" />
        </div>
        <div className="text-xl font-bold">
          <h1>{data.title.slice(0, 15)}</h1>
        </div>
        <div className="text-justify h-22">
          <span>{data.description.slice(0, 100)}</span>
        </div>
        <div className="flex justify-center items-center gap-10 text-white">
          <button onClick={() => handleCart(data)} className="bg-sky-500 p-2 cursor-pointer rounded-lg">
            Add to Cart
          </button>
          <button
            onClick={() => handleDelete(data.id)}
            className="bg-red-400 p-2 cursor-pointer rounded-lg"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
