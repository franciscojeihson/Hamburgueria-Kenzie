import { useRef, useState } from "react";
import "./style.css";

const Header = ({ showProducts, setFilteredProducts }) => {
  const [inputData, setInputData] = useState("");
  const inputRef = useRef(null);

  const handleInput = () => {
    const inputElem = inputRef.current.querySelector("input");
    inputElem.value = "";

    showProducts(inputData);
  };

  return (
    <header>
      <img
        onClick={() => setFilteredProducts([])}
        id="logo"
        src="/assets/Mask Group.svg"
        alt="Burguer Kenzie Logo"
      />
      <form onSubmit={(evt) => evt.preventDefault()} ref={inputRef}>
        <input
          type="text"
          placeholder="Digitar Pesquisa"
          onChange={(evt) => setInputData(evt.target.value)}
        />
        <button onClick={handleInput}>Pesquisar</button>
      </form>
    </header>
  );
};

export default Header;
