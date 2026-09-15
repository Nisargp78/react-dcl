const UserCard = ({ data, deleteUser, addToCart }) => {
  return (
    <div className=" w-80 h-80 p-4 gap-2 flex justify-between items-center flex-col rounded-2xl bg-sky-300 text-white text-xl">
      <div className="flex flex-col p-9 h-70 justify-between">
        <h1 className="text-2xl text-cyan-900">{data.name}</h1>
        <h1>{data.username}</h1>
        <h1>{data.email}</h1>
        <h1>{data.phone}</h1>
      </div>
      <div className="flex gap-5">
        <button
          onClick={() => addToCart(data)}
          className="bg-gray-600 text-white p-2 rounded-xl text-lg cursor-pointer"
        >
          Add to cart
        </button>
        <button
          onClick={() => deleteUser(data.id)}
          className="bg-red-700 text-white p-2 rounded-xl text-lg cursor-pointer"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;
