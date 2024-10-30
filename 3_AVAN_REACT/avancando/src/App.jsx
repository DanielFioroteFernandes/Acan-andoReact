import "./App.css";

//Importando imagens da pasta Assets
import City from "./assets/City.jpg";

//Components
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import ConditionalRender from "./components/ConditionalRender";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";

function App() {
  const name = "Jessica";

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
      <h1>Avançando no react</h1>

      {/* Imagem em public*/}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>

      {/* Imagem em Assets*/}

      <div>
        <img src={City} alt="Cidade" />
      </div>

      <ManageData />

      <ListRender />

      <ConditionalRender />

      {/* Props */}
      <ShowUserName name={name} />

      {/* Destructuring */}
      <CarDetails brand="vw" km={350000} color="Prata" newCar={false} />

      {/* Reaproveitando */}
      <CarDetails brand="Ford" km={0} color="Vermelho" newCar={true} />
      <CarDetails brand="Fiat" km={350000} color="Branco" newCar={false} />

      {/* Loop em array de objetos */}

      {cars.map((car) => (
        <CarDetails brand={car.brand} color={car.color} km={car.km} />
      ))}
    </>
  );
}

export default App;
