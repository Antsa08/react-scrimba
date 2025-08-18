import React from 'react'

import styles from './eliminations.module.scss'

const Eliminations = () => {

	// 💀
	const eliminations = [{'value': 'HTML', 'color': '#e2680f', 'isEliminate': false}, {'value': 'CSS', 'color': '#328af1', 'isEliminate': false}, {'value': 'Javascript', 'color': '#f4eb13', 'isEliminate': false}, {'value': 'React', 'color': '#298ec6', 'isEliminate': false}, {'value': 'Typescript', 'color': '#599137', 'isEliminate': false}, {'value':  'Node.js', 'color': '#ffd742', 'isEliminate': false}, {'value': 'Python', 'color': '#ffd742', 'isEliminate': false}, {'value': 'Ruby', 'color': '#D02B2B', 'isEliminate': false}, {'value': 'Assembly', 'color': '#2d519f', 'isEliminate': false}];

	const eliminationsList = eliminations.map(elimination => {
		return <span style={ { 'background-color': elimination.color } }>{ elimination.value }</span>;
	})
  return (
    <>
    	<div className={ styles.eliminationsContainer }>
    		{ eliminationsList }
    	</div>
    </>
  )
}

export { Eliminations }