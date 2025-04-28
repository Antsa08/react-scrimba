import styles from './ingredients.module.scss'

export function Ingredient({ ingredients }) {

	const ingredientList = ingredients.map(ingredient => {
		return (<li key={ ingredient }>{ ingredient }</li>);
	});

	return (
		<section className={ styles.ingredients }>
			<p className={ styles.title }>Ingredients on hand:</p>
			<ul>
				{ ingredientList }
			</ul>
		</section>
	)
}
