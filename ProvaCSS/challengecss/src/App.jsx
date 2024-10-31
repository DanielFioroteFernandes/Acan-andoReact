import "./App.css";
import CarrosDetales from "./components/CarrosDetales";

function App() {
  const cars = [
    { id: 1, brand: "Fiat", color: "Amarelo", km: 0 },
    { id: 2, brand: "VW", color: "vermelho", km: 130 },
    { id: 3, brand: "Chevrolet", color: "Roxo", km: 0 },
    { id: 4, brand: "Poshe", color: "Azul", km: 500000 },
    { id: 5, brand: "BYD", color: "Lilaz", km: 150 },
    { id: 6, brand: "Honda", color: "Laranjado", km: 0 },
  ];

  return (
    <>
      <h3>Detalhes dos carros abaixo</h3>

      {cars.map((car) => (
        <CarrosDetales
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
        />
      ))}
    </>
  );
}

export default App;
