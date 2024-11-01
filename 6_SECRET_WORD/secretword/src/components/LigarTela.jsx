import "./LigarTela.css";

const LigarTela = ({ startGame }) => {
  return (
    <div className="ligar">
      <h1>Secret Word</h1>
      <p>Clique abaixo para começar o jogo</p>
      <button onClick={startGame}>Começar Jogo</button>
    </div>
  );
};

export default LigarTela;
