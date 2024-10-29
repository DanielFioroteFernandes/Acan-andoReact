const CarDetails = ({ brand, km, color }) => {
  return (
    <div>
      <h2>Detalhes do Carros</h2>

      <ul>
        <li>Marca: {brand}</li>
        <li>KM: {km}</li>
        <li>Cor: {color}</li>
      </ul>
      {km === 0 ? (
        <div>
          <p>Carro é Novo</p>
        </div>
      ) : (
        <div>
          <p>O carro é usado</p>
        </div>
      )}
    </div>
  );
};

export default CarDetails;
