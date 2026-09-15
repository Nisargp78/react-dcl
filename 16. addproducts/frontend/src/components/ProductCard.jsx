const ProductCard = ({ data, handleDelete, handleCart }) => {
  return (
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
          <span className="text-ink-muted text-sm text-center leading-relaxed">{data.description.slice(0, 30)}</span>
        </div>
        <div>
          <span className="text-2xl font-bold text-indigo">$ {data.price}</span>
        </div>
        <div className="text-xs text-ink-muted flex gap-5 font-medium tracking-wide uppercase">
          <p>Qty: {data.qty}</p>
          <p>Mfg: {data.mfg}</p>
        </div>
        <div className="flex gap-3 w-full mt-2">
          <button
            onClick={() => {
              handleCart(data.id);
            }}
            className="flex-1 py-2.5 bg-indigo text-white font-medium rounded-xl cursor-pointer hover:bg-violet hover:shadow-lg hover:shadow-indigo/25 transition-all duration-300 active:scale-95 text-sm"
          >
            Add to Cart
          </button>
          <button
            onClick={() => {
              handleDelete(data.id);
            }}
            className="flex-1 py-2.5 bg-rose/10 border border-rose/20 text-rose font-medium rounded-xl cursor-pointer hover:bg-rose/20 transition-all duration-300 active:scale-95 text-sm"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
