import '../styles/Sort.css'

function Sort() {
	return (
		<div className="sort-container">
			<select className="sort-select">
				<option>Deadline</option>
				<option>Date added</option>
			</select>
			<span className="iconify sort-icon" data-icon="mdi:sort-variant"></span>
		</div>
	)
}

export default Sort
