import styles from './generate.module.scss'

export const Generate = () => {
    return (
        <section className={ styles.recipe }>
            <div>
                <p>Ready for a recipe?</p>
            <span>Generate a recipe from you list of ingredients</span>
            </div>
            <button type="text">Get a recipe</button>
        </section>
    )
}