import styles from './generate.module.scss'

export const Generate = (props) => {
    return (
        <section className={ styles.recipe }>
            <div>
                <p>Ready for a recipe?</p>
            <span>Generate a recipe from you list of ingredients</span>
            </div>
            <button onClick={ props.getRecipe } type="text">Get a recipe</button>
        </section>
    )
}