import React from 'react'

import styles from './main.module.scss'

export const Main = () => {
  return (
    <main>
    	<section className={ styles.input }>
    		<input type="text" placeholder="e.g. oregano" />
    		<button type="button">+ Add ingredient</button>
    	</section>
	</main>
  )
}