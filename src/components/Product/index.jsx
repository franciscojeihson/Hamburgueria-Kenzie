import "./style.css";

const Product = ({ product, handleClick }) => {
  return (
    <div className="prod-container">
      <div id="img-box">
        <img src={product.img} alt={product.name} />
      </div>
      <div id="prod-infos">
        <h3>{product.name}</h3>
        <p>{product.category}</p>
        <span>R$: {product.price.toFixed(2)}</span>
        <button onClick={() => handleClick(product.id)}>Adicionar</button>
      </div>
    </div>
  );
};

export default Product;
