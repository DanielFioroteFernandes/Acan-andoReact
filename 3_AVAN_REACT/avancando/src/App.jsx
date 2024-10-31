import { useState } from "react";
import "./App.css";

//Importando imagens da pasta Assets
import City from "./assets/City.jpg";

//Components
import CarDetails from "./components/CarDetails";
import ConditionalRender from "./components/ConditionalRender";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import Fragment from "./components/Fragment";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import ShowUserName from "./components/ShowUserName";
import Message from "./components/Message";
import ChangeMessageState from "./components/ChangeMessageState";
import UserDetails from "./components/UserDetails";

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

  const pessoa = [
    { id: 8, nome: "Daniel", idade: "35", profissao: "suporte" },
    { id: 9, nome: "Jessica", idade: "15", profissao: "enfermeira" },
    { id: 10, nome: "Junio", idade: "35", profissao: "Script" },
  ];

  function showMessage() {
    console.log("Evento do componente pai");
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

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
        <CarDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
        />
      ))}

      {pessoa.map((pes) => (
        <UserDetails
          key={pes.id}
          nome={pes.nome}
          idade={pes.idade}
          profissao={pes.profissao}
        />
      ))}

      {/* Fragment */}

      <Fragment />

      {/* Children */}

      <Container myValue="Teste">
        <p>esse é o conteudo</p>
      </Container>
      <Container myValue="Teste2">
        <h5>testando container</h5>
      </Container>

      {/* Executar Função */}

      <ExecuteFunction myFunction={showMessage} />

      {/* state lift */}

      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
    </>
  );
}

export default App;
