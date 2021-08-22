import '../styles/GroupHeading.css'

function GroupHeading({ group, onEdit, onDelete }) {
	function handleEditClick() {
		onEdit(group)
	}
	function handleDeleteClick() {
		onDelete(group)
	}
	return (
		<div className="group-heading-container">
			<div className={`icon-wrapper ${group.color}-color`}>
				<span className="iconify folder-icon" data-icon="mdi:folder"></span>
			</div>
			<h2>{group.name}</h2>
			{group.id !== 'all' && (
				<div className="icon-wrapper" onClick={handleEditClick}>
					<span className="iconify edit-icon" data-icon="mdi:pencil"></span>
				</div>
			)}
			{group.id !== 'all' && (
				<div className="icon-wrapper" onClick={handleDeleteClick}>
					<span className="iconify edit-icon" data-icon="mdi:trash"></span>
				</div>
			)}
		</div>
	)
}

GroupHeading.defaultProps = {
	group: {
		id: '',
		name: '--',
		color: 'yellow',
	},
}

export default GroupHeading
