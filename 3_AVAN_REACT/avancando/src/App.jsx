import "./App.css";

//Components
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";

//Importando imagens da pasta Assets
import City from "./assets/City.jpg";

function App() {
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
    </>
  );
}

export default App;
