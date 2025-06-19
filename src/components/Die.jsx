const Die = function Die({ value, held, fhold }) {
	return (
		<span
			className={ held ? 'active' : '' }
			onClick={ fhold }
		>
			{ value }
		</span>
	)
}
export { Die };