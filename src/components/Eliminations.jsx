import React from 'react'

import styles from './eliminations.module.scss'

const Eliminations = ({ elimination }) => {

	// 💀

  return (
    <>
    	<div className={ styles.eliminationsContainer }>
    		{ elimination }
    	</div>
    </>
  )
}

export { Eliminations }