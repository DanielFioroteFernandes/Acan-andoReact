import { useRef, useState } from "react";
import "./Game.css";

const Game = ({
  verifyLetter,
  pickedCategory,
  pickedWord,
  letters,
  guessedletters,
  wrongletters,
  guesses,
  score,
}) => {
  const [letter, setLetter] = useState("");
  const letterinputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    verifyLetter(letter);

    setLetter("");

    letterinputRef.current.focus();
  };

  return (
    <div className="game">
      <p className="points">
        <span>Pontuação: {score}</span>
      </p>
      <h1>Adivinhe a Palavra</h1>
      <h3 className="tip">
        Dica sobre a palavra: <span>{pickedCategory}</span>
      </h3>
      <p>Você ainda tem {guesses} Tentativas</p>

      <div className="wordContainer">
        {letters.map((letter, i) =>
          guessedletters.includes(letter) ? (
            <span key={i} className="letter">
              {letter}
            </span>
          ) : (
            <span key={i} className="blankSquare"></span>
          )
        )}
      </div>

      <div className="letterContainer">
        <p>Tente advinhar uma letra da palavra: </p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="letter"
            maxLength="1"
            required
            onChange={(e) => setLetter(e.target.value)}
            value={letter}
            ref={letterinputRef}
          />
          <button>Jogar!</button>
        </form>
      </div>

      <div className="wronglettersContainer">
        <p>Letras ja utilizadas: </p>

        {wrongletters.map((letter, i) => (
          <span key={i}>{letter} - </span>
        ))}
      </div>
    </div>
  );
};

export default Game;
