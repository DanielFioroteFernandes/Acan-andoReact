const CarDetails = ({ brand, km, color }) => {
  return (
    <div>
      <h2>Detalhes do Carros</h2>

      <table>
        <thead>
          <tr>
            <th>Marca: </th>
            <th>Cor: </th>
            <th>KM: </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{brand}</td>
            <td>{km}</td>
            <td>{color}</td>
            <td>
              <div>
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
            </td>
          </tr>
        </tbody>
      </table>

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
