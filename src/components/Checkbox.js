import '../styles/Checkbox.css'

function Checkbox({ checked, onClick }) {
	return (
		<div className={`checkbox ${checked ? 'checked' : ''}`} onClick={onClick}>
			<span className="iconify tick" data-icon="mdi:circle"></span>
		</div>
	)
}

export default Checkbox
