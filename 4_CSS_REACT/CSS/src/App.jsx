import { useState } from "react";

import "./App.css";
import MyComponent from "./components/MyComponent";
import Title from "./components/Title";

function App() {
  const n = 15;
  const [name] = useState("Daniel");

  const redTitle = false;

  return (
    <>
      {/* CSS Global */}
      <h1>React com CSS</h1>

      {/* CSS de componente */}

      <MyComponent />

      <p>Esse paragrafo é do App.js</p>

      {/* Inline CSS */}

      <p style={{ color: "blue", padding: "25px", borderTop: "2px solid red" }}>
        Esse elemento foi estilizado de forma Inline
      </p>

      {/* Inline dinamique CSS */}

      <h2 style={n > 10 ? { color: "purple" } : { color: "pink" }}>
        CSS Dinamique
      </h2>

      <h2 style={n < 10 ? { color: "purple" } : { color: "pink" }}>
        CSS Dinamique
      </h2>

      <h2
        style={
          name === "Daniel"
            ? { color: "purple", backgroundColor: "yellow" }
            : null
        }
      >
        Teste o nome
      </h2>

      {/* Classe dinamica */}

      <h2 className={redTitle ? "red-title" : "title"}>
        Esse titulo vai ter classe dinamica
      </h2>

      {/* CSS Modules */}
      <Title />
    </>
  );
}

export default App;
