import "./App.css";

import React from "react";

import { clsx } from "clsx";

import { Headline } from "./components/Headline";
import { Notice } from "./components/Notice";
import { Eliminations } from "./components/Eliminations";
import { Keyboard } from "./components/Keyboard";
import { Letters } from "./components/Letters";

import alphabets from "./assets/alphabets";
import eliminations from "./assets/eliminations";
import { getFarewellText, randomWords } from "./assets/utils";

import Confetti from 'react-confetti';

function App() {
  // State variables
  const [currentWord, setCurrentWord] = React.useState(() => randomWords());

  const [typedWord, setTypedWord] = React.useState([]);

  const [wrongGuessedList, setWrongGuessedList] = React.useState([]);

  console.log('randomWords', currentWord);

  // Derived variables
  const wrongGuessedCount = typedWord.filter(
    (letter) => !currentWord.includes(letter),
  ).length;

  const typing = (key) => {
    setTypedWord((oldTyped) =>
      oldTyped.includes(key) ? oldTyped : [...oldTyped, key],
    );
    if (wrongGuessedCount <= eliminations.length - 1) {
      setWrongGuessedList((value) => [
        ...value,
        eliminations[wrongGuessedCount].value
      ])
    }
  };

  const isGameWon = currentWord
    .split("")
    .every((letter) => typedWord.includes(letter));

  const isGameLost = wrongGuessedCount >= eliminations.length;

  const isGameOver = isGameWon || isGameLost;

  // Static variables
  const lettersElement = currentWord
    .split("")
    .map((letter, index) => {
      const shouldItRevealed = isGameLost || typedWord.includes(letter)
      const letterClassName = clsx(shouldItRevealed && !typedWord.includes(letter) && 'over')
      return (
        <span key={index} className={ letterClassName }>
          { shouldItRevealed ? letter.toUpperCase() : "" }
        </span>
      )
    });

  const KeyboardElement = alphabets.map((letter, index) => {
    const isGuessed = typedWord.includes(letter.value)
    const isCorrect = isGuessed && currentWord.includes(letter.value)
    const isWrong = isGuessed && !currentWord.includes(letter.value)
    const putClass = clsx({
      correct: isCorrect,
      wrong: isWrong,
    });

    return (
      <button
        key={index}
        type="button"
        onClick={() => typing(letter.value)}
        className={putClass}
        disabled={ isGameOver && 'disabled' }
      >
        {letter.value}
      </button>
    );
  });

  const eliminationsList = eliminations.map((elimination, index) => {
    const isLanguageLost = index < wrongGuessedCount;
    return (
      <span
        key={index}
        style={{ backgroundColor: elimination.background, color: elimination.color }}
        className={isLanguageLost ? "dead" : ""}
      >
        {elimination.value}
      </span>
    );
  });

  const startNewGame = () => {
    setCurrentWord(randomWords())
    setTypedWord([])
  }

  return (
    <div className="container">
      { isGameWon &&
        <Confetti
          recycle={ false }
          numberOfPieces=1000/>
      }
      <section className="head-group">
        <Headline />

        { isGameWon &&
          <Notice
            styleNotice="win"
            text="<h3>You win!</h3><p>Well done! 🎉</p>"
          />
        }

        { (isGameLost && !isGameWon) &&
          <Notice
            styleNotice="lose"
            text={`<h3>Game over!</h3><p>You lose! Better start learning ${currentWord} 😭</p>`}
          />
        }

        { (!isGameWon && !isGameLost && wrongGuessedCount == 0) &&
          <Notice
            styleNotice="empty"
            text=""
          />
        }

        { ((wrongGuessedCount > 0 && wrongGuessedCount < eliminations.length) && !isGameWon && !isGameLost) &&
          <Notice
            styleNotice="farewell"
            // text={`Farewell ${wrongGuessedList} 😥`}
            text={ getFarewellText(eliminations[wrongGuessedCount - 1].value) }
          />
        }

      </section>

      <Eliminations elimination={eliminationsList} />

      <Letters letters={lettersElement} />

      <Keyboard keyboard={KeyboardElement} />

      { (isGameOver || isGameWon) &&
        <div className="btn-new-game">
          <button onClick={ startNewGame }>New Game</button>
        </div>
      }

    </div>
  );
}

export default App;
