import '../styles/GroupMenuItem.css'

function GroupMenuItem({ group }) {
	return (
		<div className="group-menu-item">
			<span className={`iconify folder-icon ${group.color}-color`} data-icon="mdi:folder"></span>
			{group.name}
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
