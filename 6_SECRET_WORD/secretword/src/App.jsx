//CSS

import "./App.css";

//React
import { useCallback, useEffect, useState } from "react";

//Componentes
import Game from "./components/Game";
import GameOver from "./components/GameOver";
import LigarTela from "./components/LigarTela";

//Data

import { wordsList } from "./data/words";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

const guessesQty = 3;

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  // Pontuação, tentativas, letras erradas, letras corretas

  const [guessedletters, setGeussedLetters] = useState([]);
  const [wrongletters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(guessesQty);
  const [score, setScore] = useState(0);

  const pickWordAndCategory = useCallback(() => {
    // Pega aleatoriamente uma das categorias
    const categories = Object.keys(words);
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];

    // pick a radom word --  palavra aleatoria
    const word =
      words[category][Math.floor(Math.random() * words[category].length)];

    return { word, category };
  }, [words]);

  // Start Game
  const startGame = useCallback(() => {
    // clear all letter

    clearLetterStates();

    //pick word and pick category
    const { word, category } = pickWordAndCategory();

    // transforma palavras em letras
    let wordLetters = word.split("");

    wordLetters = wordLetters.map((l) => l.toLowerCase());

    //fill states

    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);

    setGameStage(stages[1].name);
  }, [pickWordAndCategory]);

  // process the letter inpui
  const verifyLetter = (letter) => {
    const normalizedletter = letter.toLowerCase();

    //Verificar se a letra ja foi utilizada

    if (
      guessedletters.includes(normalizedletter) ||
      wrongletters.includes(normalizedletter)
    ) {
      return;
    }

    // Enviar letras certos ou remover letras erradas

    if (letters.includes(normalizedletter)) {
      setGeussedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedletter,
      ]);
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedletter,
      ]);

      setGuesses((actualGuesses) => actualGuesses - 1);
    }
  };

  const clearLetterStates = () => {
    setGeussedLetters([]);
    setWrongLetters([]);
  };

  // check if guesses ended
  useEffect(() => {
    if (guesses <= 0) {
      // reset all states
      clearLetterStates();

      setGameStage(stages[2].name);
    }
  }, [guesses]);

  // checar condicions
  useEffect(() => {
    const uniqueLetters = [...new Set(letters)];
    //win condition
    if (guessedletters.length === uniqueLetters.length) {
      //add core
      setScore((actualScore) => (actualScore += 100));
      //Restart Game
      startGame();
    }
  }, [guessedletters, letters, startGame]);

  //Restarte o jogo

  const retry = () => {
    setScore(0);
    setGuesses(guessesQty);

    setGameStage(stages[0].name);
  };

  return (
    <>
      <div className="App">
        {gameStage === "start" && <LigarTela startGame={startGame} />}
        {gameStage === "game" && (
          <Game
            verifyLetter={verifyLetter}
            pickedCategory={pickedCategory}
            pickedWord={pickedWord}
            letters={letters}
            guessedletters={guessedletters}
            wrongletters={wrongletters}
            guesses={guesses}
            score={score}
          />
        )}
        {gameStage === "end" && <GameOver retry={retry} score={score} />}
      </div>
    </>
  );
}

export default App;
