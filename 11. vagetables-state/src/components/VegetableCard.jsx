const VegetableCard = ({ data, handleDelete }) => {
  return (
    <div>
      <div
        className="border-2 border-slate-200 p-10 rounded-lg shadow-md w-70 flex flex-col items-center gap-7 bg-cyan-800 justify-center">
        <h1 className="text-2xl text-white"> {data.name} </h1>
        <button
          className="bg-teal-600 p-2 rounded-xl text-white cursor-pointer"
          onClick={() => handleDelete(data.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default VegetableCard;
