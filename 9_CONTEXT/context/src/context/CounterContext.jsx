// Criar contexto

import { createContext, useState } from "react";

export const CounterContext = createContext();

// criar provider

export const CounterContextProvider = ({ Children }) => {
  const [counter, setCounter] = useState(6);

  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {Children}
    </CounterContext.Provider>
  );
};
