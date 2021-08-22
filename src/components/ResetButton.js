import '../styles/LoadSampleButton.css'
function ResetButton({ onClick }) {
	return (
		<button className="reset-button" onClick={onClick}>
			<span className="iconify load-icon" data-icon="carbon:reset"></span>
			{/* Sample */}
		</button>
	)
}

export default ResetButton
