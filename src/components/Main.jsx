import React from 'react'

import { Generate } from './Generate'
import { Recipe } from './Recipe'
import { Ingredient } from './Ingredient'

import { getRecipeFromMistral } from './ai'

import styles from './main.module.scss'

export const Main = () => {

	console.log('API KEY :', import.meta.env.VITE_HF_API_TOKEN);

	const [ingredients, setIngredients] = React.useState([])
	const [recipeShown, setRecipeShown] = React.useState("")

	function addIngredient(formData) {
		const recipe = formData.get('recipe')
		if (recipe != '') {
			setIngredients(prev => (
					[...prev, recipe]
				)
			)
		}
	}

	async function generateRecipe() {
		const getRecipeFromApi = await getRecipeFromMistral(ingredients)
		console.log(getRecipeFromApi);
		setRecipeShown(getRecipeFromApi);
	}

	const renderCount = React.useRef(0);
	renderCount.current += 1;

	console.log('recipeShown : ', recipeShown);

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

			{ renderCount.current }
		</main>
  )
}