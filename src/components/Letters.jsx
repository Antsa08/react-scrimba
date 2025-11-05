import React from 'react'

import styles from './letters.module.scss'

const Letters = ({ letters }) => {
  return (
    <>
    	<div className={ styles.lettersContainer }>
    		{ letters }
    	</div>
    </>
  )
}

export { Letters }