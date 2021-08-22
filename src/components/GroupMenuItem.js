import '../styles/GroupMenuItem.css'

function GroupMenuItem({ groupId, group, onClick }) {
	function handleClick() {
		onClick(groupId)
	}
	return (
		<div className="group-menu-item" onClick={handleClick}>
			<span className={`iconify folder-icon ${group.color}-color`} data-icon="mdi:folder"></span>
			<p className="group-name">{group.name}</p>
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
