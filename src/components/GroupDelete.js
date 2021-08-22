import { useState } from 'react'
import Modal from './Modal'

import '../styles/GroupDelete.css'

function GroupDelete({ onCancel, onDelete, group }) {
	const [checked, setChecked] = useState(false)

	function handleDelete() {
		onDelete({
			checked,
			group,
		})
	}
	return (
		<Modal onCancel={onCancel} onSuccess={handleDelete} customSuccess="Delete">
			<div className="group-delete">
				<div className="delete-group-heading">
					<span className="iconify trash-icon" data-icon="mdi:trash"></span>
					<h3>Delete group</h3>
				</div>
				<div style={{ height: '2.5rem' }}></div>
				<div>
					<p className={`group-tag group-tag-${group.color}`}>{group.name || '--'}</p>
				</div>
				<div style={{ height: '2.5rem' }}></div>

				<div className="checkbox-wrapper">
					<Check onChange={setChecked} />
					&nbsp;&nbsp; Delete todos in the group
				</div>
				<div style={{ height: '2.5rem' }}></div>
			</div>
		</Modal>
	)
}

function Check({ onChange }) {
	function handleChange(e) {
		onChange(e.target.checked)
	}
	return (
		<label className="checkbox-2 bounce">
			<input type="checkbox" onChange={handleChange} />
			<svg viewBox="0 0 21 21">
				<polyline points="5 10.75 8.5 14.25 16 6"></polyline>
			</svg>
		</label>
	)
}

GroupDelete.defaultProps = {
	group: {
		id: '',
		name: 'Assignments',
		color: 'yellow',
	},
}

export default GroupDelete
