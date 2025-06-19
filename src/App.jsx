import React from 'react'

import { useWindowSize } from 'react-use'

import { nanoid } from 'nanoid'

import Confetti from 'react-confetti'

import { Die } from './components/Die'

import './App.scss'

function App() {

  const [dices, setDices] = React.useState(() =>generateAllNewDice());

  const { width, height } = useWindowSize();

  let gameWon = dices.every(item => item.isHeld) &&
    dices.every(item => item.value == dices[0].value)

  function generateAllNewDice() {
    return new Array(10)
      .fill(0)
      .map(() => ({
        value: Math.round(Math.random() * 6),
        isHeld: false,
        id: nanoid(5)
      }))
  }

  function roll() {
    setDices(oldDices => oldDices.map(item => item.isHeld ?
        item :
        ({ ...item, value: Math.round(Math.random() * 6) })
      )
    )
  }

  function newGame() {
    setDices(generateAllNewDice());
  }

  function hold(id) {
    setDices(prevDices => prevDices.map(item => {
      return item.id === id ?
        { ...item, isHeld: !item.isHeld} :
        { ...item }
    }))
  }

  const dieElements = dices.map(dice => {
    return <Die
      key={ dice.id }
      value={ dice.value }
      held={ dice.isHeld }
      fhold={ () => hold(dice.id) }
    />
  })

  return (
    <>
      <main className="container">
          { gameWon && <Confetti
            width={ width }
            height={ height }
          /> }
          <section className="tenzies">
            <h1>{ gameWon ? "Congratulations!!!" : 'Tenzies' }</h1>
            <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="tenziesBlock">
              { dieElements }
            </div>
            <button
              className="btnRoll"
              onClick={ gameWon ? newGame : roll }
            >{ gameWon ? 'New Game': 'Roll' }</button>
          </section>
      </main>
    </>
  )
}

export default App
