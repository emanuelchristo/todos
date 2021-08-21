import '../styles/GroupHeading.css'

function GroupMenuItem({ group }) {
	return (
		<div className="group-heading-container">
			<span className={`iconify folder-icon ${group.color}-color`} data-icon="mdi:folder"></span>
			<h2>{group.name}</h2>
			<span className="iconify edit-icon" data-icon="mdi:pencil"></span>
		</div>
	)
}

GroupMenuItem.defaultProps = {
	group: {
		id: '',
		name: '--',
		color: 'yellow',
	},
}

export default GroupMenuItem
