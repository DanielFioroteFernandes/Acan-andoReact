const Events = () => {
  const handleMyEvent = (e) => {
    console.log(e);

    console.log("Ativou o evento!");
  };

  const renderSomething = (x) => {
    if (x) {
      return <h1>Renderizando isso</h1>;
    } else {
      return <h1>Renderizando isso aqui depois</h1>;
    }
  };

  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Clique aqui</button>
      </div>
      <div>
        <button onClick={() => console.log("clicou")}>Clique aqui tbm</button>
        <button
          onClick={() => {
            if (true) {
              console.log("isso não deveria esta aqui");
            }
          }}
        >
          Clica aqui, Por Favor
        </button>
      </div>
      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  );
};

export default Events;
