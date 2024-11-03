import { useState } from "react";

// 4 - custom hook
import { useFetch } from "./hooks/useFetch";

import "./App.css";

const url = "http://localhost:3000/products";

function App() {
  const [products, setProducts] = useState([]);

  //4 custom hook

  const { data: items, httpConfig, Loading } = useFetch(url);

  // atrributos para envio de dados
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // 1 - Resgatando Dados
  // useEffect(() => {
  //  async function fetchData() {
  //  const res = await fetch(url);

  //const data = await res.json();

  //   setProducts(data);
  // }

  //fetchData();
  //}, []);

  // adicionando produtos

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };

    //   const res = await fetch(url, {
    //   method: "POST",
    // headers: {
    // "Content-Type": "application/json",
    //},
    // body: JSON.stringify(product),
    // });

    //3 _ Carregamento dinamico
    // const addedProduct = await res.json();

    //setProducts((prevProducts) => [...prevProducts, addedProduct]);

    // 5 - refatorando POST

    httpConfig(product, "POST");

    setName("");
    setPrice("");
  };

  return (
    <div className="App">
      <h2>Lista de produtos</h2>
      {/* 6  - Loading */}

      {Loading && <p>Esta carregando os dados</p>}
      <ul>
        {items &&
          items.map((product) => (
            <li key={product.id}>
              {product.name} - R$: {product.price}
            </li>
          ))}
      </ul>

      {/* Formalario para envio de dados enciado dados para handleSubmit */}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label>
            Preço:
            <input
              type="number"
              value={price}
              name="price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          {/* State de loading no POST */}
          {Loading && <input type="submit" disabled value="Aguarde" />}
          {!Loading && <input type="submit" value="Criar " />}
        </form>
      </div>
    </div>
  );
}

export default App;
