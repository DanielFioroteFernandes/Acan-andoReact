const UserDetails = ({ nome, idade, profissao }) => {
  return (
    <div>
      <ul>
        <li>Nome: {nome}</li>
        <li>Idade: {idade}</li>
        <li>Profissão: {profissao}</li>
      </ul>
      {idade >= 18 ? (
        <div>
          <p>Pode tirar carteira</p>
        </div>
      ) : (
        <div>
          <p>Não pode tirar carteira</p>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
