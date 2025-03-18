import React from 'react'

import { Generate } from './Generate'

import styles from './main.module.scss'

export const Main = () => {
  return (
    <main>
    	<section className={ styles.input }>
    		<input type="text" placeholder="e.g. oregano" />
    		<button type="button">+ Add ingredient</button>
    	</section>
		<section className={ styles.ingredients }>
			<p className={ styles.title }>Ingredients on hand:</p>
			<ul className={ styles.list }>
				<li>Chicken breasts</li>
				<li>Most of the main spices</li>
				<li>Olive oil</li>
				<li>Heavy cream</li>
				<li>Chicken broth</li>
				<li>Parmesan cheese</li>
				<li>Spinach</li>
			</ul>
		</section>
		<Generate />
	</main>
  )
}