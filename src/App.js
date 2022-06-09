import { useEffect, useState } from "react";
import "./App.css";
import api from "./components/Api/api";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./Styles/style.css";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    api
      .get("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((res) => setProducts(res.data));
    currentSaleTotal();
  }, [currentSale]);

  const removeAccents = (str) => {
    const newStr = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return newStr.toLowerCase();
  };

  const showProducts = (str) => {
    const nString = removeAccents(str);

    const productFound = products.filter((product) => {
      return removeAccents(product.name).includes(nString);
    });
    setFilteredProducts(productFound);
  };

  const handleClick = (productID) => {
    const checkCart = currentSale.find((product) => product.id === productID);

    if (checkCart === undefined) {
      const selectedProd = products.find((product) => {
        return product.id === productID;
      });
      setCurrentSale([...currentSale, selectedProd]);
    }
  };

  const handleCartProd = (prodId) => {
    const newCurrentSale = currentSale.filter((prod) => prod.id !== prodId);
    setCurrentSale(newCurrentSale);
  };

  const currentSaleTotal = () => {
    const total = currentSale.reduce((a, prod) => a + prod.price, 0);
    setCartTotal(total.toFixed(2));
  };

  const deleteProd = () => {
    setCurrentSale([]);
  };

  return (
    <>
      <Header
        showProducts={showProducts}
        setFilteredProducts={setFilteredProducts}
      />
      <main>
        <div id="box-container">
          <ProductList
            products={filteredProducts.length > 0 ? filteredProducts : products}
            handleClick={handleClick}
          />
        </div>
        <aside>
          <Cart
            currentSale={currentSale}
            cartTotal={cartTotal}
            handleCartProd={handleCartProd}
            deleteProd={deleteProd}
          />
        </aside>
      </main>
    </>
  );
}

export default App;
