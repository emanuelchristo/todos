import '../styles/ColorPicker.css'

function Color({ color, onClick }) {
	function handleClick() {
		onClick(color)
	}
	return (
		<div className={`color-border color-border-${color}`} onClick={handleClick}>
			<div className={`color color-${color}`}></div>
		</div>
	)
}

Color.defaultProps = {
	color: 'yellow',
}

function ColorPicker({ onChange }) {
	function handleColorClick(color) {
		onChange(color)
	}

	return (
		<div className="color-picker">
			<Color color="yellow" onClick={handleColorClick} />
			<Color color="red" onClick={handleColorClick} />
			<Color color="pink" onClick={handleColorClick} />
			<Color color="violet" onClick={handleColorClick} />
			<Color color="blue" onClick={handleColorClick} />
			<Color color="green" onClick={handleColorClick} />
		</div>
	)
}

export default ColorPicker
