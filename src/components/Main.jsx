import React from 'react'

import { Generate } from './Generate'

import styles from './main.module.scss'

export const Main = () => {

	const [ingredients, setIngredients] = React.useState([])

	const ingredientList = ingredients.map(ingredient => {
		return (<li key={ ingredient }>{ ingredient }</li>);
	});

	function addIngredient(formData) {
		const recipe = formData.get('recipe')
		setIngredients(prev => (
				[...prev, recipe]
			)
		)
	}

  return (
    <main>
  	<section className={ styles.input }>
  		<form action={ addIngredient }>
  			<input
	  			type="text"
	  			placeholder="e.g. oregano"
	  			name="recipe"
	  		/>
	  		<button>+ Add ingredient</button>
  		</form>
  	</section>
		<section className={ styles.ingredients }>
			<p className={ styles.title }>Ingredients on hand:</p>
			<ul>
				{ ingredientList }
			</ul>
		</section>
		<Generate />
	</main>
  )
}