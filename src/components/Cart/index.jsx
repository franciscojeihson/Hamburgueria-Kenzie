import { CartTotal, CartProduct } from "./CartFunctions";
import "./style.css";

const Cart = ({ currentSale, cartTotal, handleCartProd, deleteProd }) => {
  return (
    <div id="cart-all">
      <div id="cart-title">
        <h3>Carrinho de Compras</h3>
      </div>

      {currentSale.length > 0 ? (
        <>
          <ul>
            {currentSale
              .map((prod) => (
                <li key={prod.id}>
                  <CartProduct prod={prod} handleCartProd={handleCartProd} />
                </li>
              ))
              .reverse()}
          </ul>
          <CartTotal cartTotal={cartTotal} deleteProd={deleteProd} />
        </>
      ) : (
        <ul id="empty-cart">
          <div id="empty-info">
            <h3>Sua sacola está vazia</h3>
            <p>Adicione itens</p>
          </div>
        </ul>
      )}
    </div>
  );
};

export default Cart;
