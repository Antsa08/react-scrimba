import React from 'react'

import { Generate } from './Generate'
import { Recipe } from './Recipe'
import { Ingredient } from './Ingredient'

import styles from './main.module.scss'

export const Main = () => {

	const [ingredients, setIngredients] = React.useState([])
	const [recipeShown, setRecipeShown] = React.useState(false)

	function addIngredient(formData) {
		const recipe = formData.get('recipe')
		setIngredients(prev => (
				[...prev, recipe]
			)
		)
	}

	function getRecipe(e) {
		e.preventDefault()
		setRecipeShown( prevShown => !prevShown )
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
		{ ingredients.length > 0 && <Ingredient ingredients={ ingredients } /> }
		{ ingredients.length > 3 && <Generate getRecipe={ getRecipe } /> }
		{ recipeShown && <Recipe /> }
	</main>
  )
}