function Jokes(props) {
	console.log(props);
	return (
		<div>
			<p>{ props.setup }</p>
			<p>{ props.punchline }</p>
			<hr />
		</div>
	)
}

export default Jokes
