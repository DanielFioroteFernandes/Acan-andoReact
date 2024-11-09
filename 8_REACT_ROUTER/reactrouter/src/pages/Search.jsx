import { Link, useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Search = () => {
  const [searchparams] = useSearchParams();

  const url = "http://localhost:3000/products?" + searchparams;

  const { data: items, loading, error } = useFetch(url);

  return (
    <div>
      <h1>Resultados Disponiveis</h1>
      <ul className="products">
        {items &&
          items.map((item) => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>{item.price}</p>
              {/* 4 Rota Dinamica*/}

              <Link to={`/products/${item.id}`}>Detalhes</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Search;
