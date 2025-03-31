import React from 'react'

function Jokes(props) {
	console.log(props);

	const [isShown, setIsShown] = React.useState(false)

	function toggle() {
		setIsShown(prev => prev = !isShown)
		console.log(isShown)
	}

	return (
		<div>
			{ isShown ?
				<div>
					<p>{ props.setup }</p>
					<p>{ props.punchline }</p>
				</div>
			 :
				<p><b>Rien à afficher pour le moment</b></p>
			}
			<button onClick={ toggle }>{ isShown ? 'Hide answer' : 'Show answer' }</button>
			<hr />
		</div>
	)
}

export default Jokes
