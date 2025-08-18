import React from 'react'

import styles from './keyboard.module.scss'

const Keyboard = () => {

	const alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

	const alphabet = alphabets.map((i, index) => {
    return <button key={ index } type="button">{ i }</button>
  });

  return (
    <div className={ styles.keyboardContainer }>
    	{ alphabet }
    </div>
  )
}

export { Keyboard }