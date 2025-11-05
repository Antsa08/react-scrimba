import React from 'react'

import styles from './keyboard.module.scss'

const Keyboard = ({ keyboard }) => {



  return (
    <div className={ styles.keyboardContainer }>
    	{ keyboard }
    </div>
  )
}

export { Keyboard }