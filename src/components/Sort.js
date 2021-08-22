import '../styles/Sort.css'

function Sort({ onChange }) {
	function handleSelectChange(e) {
		onChange(e.target.value)
	}
	return (
		<div className="sort-container">
			<select className="sort-select" onChange={handleSelectChange}>
				<option value="dateAdded">Date added</option>
				<option value="deadline">Deadline</option>
			</select>
			<span className="iconify sort-icon" data-icon="mdi:sort-variant"></span>
		</div>
	)
}

export default Sort
