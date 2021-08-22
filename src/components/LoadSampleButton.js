import '../styles/LoadSampleButton.css'
function LoadSampleButton({ onClick }) {
	return (
		<button className="load-sample-button" onClick={onClick}>
			<span className="iconify load-icon" data-icon="clarity:download-line"></span>
			Sample
		</button>
	)
}

export default LoadSampleButton
