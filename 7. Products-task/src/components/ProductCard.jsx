import React from 'react';

const ProductCard = ({ product }) => {
  const { image, title , description, price} = product;

  return (
    <div className="flex justify-center items-center bg-slate-200 shadow-md rounded-lg overflow-hidden w-72.5 gap-3 flex-col p-2">
      <div className="h-70 flex justify-center items-center">
        <img src={product.image} alt={title} className='w-50 object-cover p-5' />
      </div>
      <div className = "text-justify font-bold">
        <h1>{title.slice(0 ,32)}</h1>
      </div>
      <div className = "p-2 text-justify">
        <h1>{description.slice(0 ,130)}</h1>
      </div>
      <div className = "p-2 text-justify">
        <h1>$ {price}</h1>
      </div>
    </div>
  );
};

export default ProductCard