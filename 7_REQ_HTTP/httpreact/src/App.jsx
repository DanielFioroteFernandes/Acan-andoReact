import { useEffect, useState } from "react";
import "./App.css";

const url = "http://localhost:3000/products";

function App() {
  const [products, setProducts] = useState([]);

  // 1 - Resgatando Dados
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);

      const data = await res.json();

      setProducts(data);
    }

    fetchData();
  }, []);

  return (
    <>
      <h2>Lista de produtos</h2>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - R$: {product.price}{" "}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
