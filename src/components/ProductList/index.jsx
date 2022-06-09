import Product from "../Product";

const ProductList = ({ products, handleClick }) => {
  return (
    <>
      {products.map((product) => (
        <Product key={product.id} product={product} handleClick={handleClick} />
      ))}
    </>
  );
};

export default ProductList;
