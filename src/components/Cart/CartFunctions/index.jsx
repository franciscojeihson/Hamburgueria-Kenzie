import Cart from "..";
import "../style.css";

export const CartTotal = ({ cartTotal, deleteProd }) => {
  return (
    <div id="box-total-btn">
      <div id="box-total">
        <p>Total</p>
        <span>R$: {cartTotal}</span>
      </div>

      <button onClick={() => deleteProd()}>Remover Todos</button>
    </div>
  );
};

export const CartProduct = ({ prod, handleCartProd }) => {
  return (
    <div id="cart-prod">
      <div id="cart-img">
        <img src={prod.img} alt={prod.name} />
      </div>
      <div id="cart-infos">
        <h3>{prod.name}</h3>
        <p>{prod.category}</p>
      </div>
      <span onClick={() => handleCartProd(prod.id, prod.name)}>Remover</span>
    </div>
  );
};
