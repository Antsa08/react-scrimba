import React from 'react'

import { Generate } from './Generate'
import { Recipe } from './Recipe'
import { Ingredient } from './Ingredient'

import { getRecipeFromMistral } from './ai'

import styles from './main.module.scss'

export const Main = () => {

	console.log('API KEY :', import.meta.env.VITE_HF_API_TOKEN);

	// Initialize the state to an empty array
	const [ingredients, setIngredients] = React.useState([])
	// Initialize the state to an empty string
	const [recipeShown, setRecipeShown] = React.useState("")

	// add Ingredient from the form using formData
	function addIngredient(formData) {
		const recipe = formData.get('recipe')
		// Do not send empy value
		if (recipe != '') {
			// Change the state whenever the form is fullfiled
			setIngredients(prev => (
					[...prev, recipe]
				)
			)
		}
	}

	// Get the value generate by the IA api
	async function generateRecipe() {
		const getRecipeFromApi = await getRecipeFromMistral(ingredients)
		console.log(getRecipeFromApi);

		// Set to the state getRecipeFromApi whenever it return a results
		setRecipeShown(getRecipeFromApi);
	}

	// useRef is to count the number of rendered page
	const renderCount = React.useRef(0);
	renderCount.current += 1;
	console.log(renderCount);

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
			{ ingredients.length > 3 && <Generate generateRecipe={ generateRecipe } /> }
			{ recipeShown && <Recipe recipeFromAi={ recipeShown } /> }
		</main>
  )
}