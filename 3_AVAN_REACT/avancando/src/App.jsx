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
    </>
  );
}

export default App;
