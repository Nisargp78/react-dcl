import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  return (
    <div className="flex flex-wrap p-8 gap-15 min-h-150">
      {products.map((product ,i) => (
        <ProductCard key={i} product={product} />
      ))}
    </div>
  );
};

export default ProductList