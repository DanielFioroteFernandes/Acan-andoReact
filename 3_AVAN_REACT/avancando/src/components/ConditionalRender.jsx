import { useState } from "react";

const ConditionalRender = () => {
  const [x] = useState(false);

  const [name, setName] = useState("Fiorote");

  return (
    <div>
      <h1>Isso será ixibido</h1>
      {x && <p>Se x for true, sim !</p>}
      {!x && <p>Se x for true, sim !</p>}

      <h1>If ternaria</h1>

      {name === "Daniel" ? (
        <div>
          <p>O Nome é daniel</p>
        </div>
      ) : (
        <div>
          <p>O nome não é daniel</p>
        </div>
      )}

      <button onClick={() => setName("Daniel")}>Verificar</button>
    </div>
  );
};

export default ConditionalRender;
