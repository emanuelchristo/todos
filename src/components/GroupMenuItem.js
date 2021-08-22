import '../styles/GroupMenuItem.css'

function GroupMenuItem({ groupId, group, onClick }) {
	function handleClick() {
		onClick(groupId)
	}
	return (
		<div className="group-menu-item" onClick={handleClick}>
			<div className={`icon-wrapper ${group.color}-color`}>
				<span className="iconify folder-icon" data-icon="mdi:folder"></span>
			</div>
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
