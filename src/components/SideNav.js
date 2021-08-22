import GroupMenuItem from './GroupMenuItem'
import '../styles/SideNav.css'

import Logo from '../assets/todos-logo.svg'

function SideNav({ onNewGroup, groups, onGroupClick }) {
	function sortGroups(groups) {
		let temp = []
		for (let id in groups) {
			temp.push([id, groups[id]])
		}
		temp.sort((a, b) => (a[1].name > b[1].name ? 1 : -1))
		let newGroups = {}
		temp.map((group) => (newGroups[group[0]] = group[1]))
		return newGroups
	}
	return (
		<nav className="sidenav">
			<div className="sidenav-top">
				<div className="logo-wrapper">
					<img src={Logo} alt="Todos." />
				</div>
				<div className="logo-spacer"></div>
				<GroupMenuItem group={groups['all']} groupId="all" onClick={onGroupClick} />
			</div>
			<div className="groups-title-container">
				<h3>Groups</h3>
				<button className="new-group-button" onClick={onNewGroup}>
					<span className="iconify addicon new-group-icon" data-icon="bytesize:plus"></span>
				</button>
			</div>
			<div className="groups-container">
				{Object.keys(sortGroups(groups)).map((groupId) => {
					if (groupId === 'all') return null
					return <GroupMenuItem group={groups[groupId]} groupId={groupId} onClick={onGroupClick} key={groupId} />
				})}
			</div>
			<div className="sidenav-bottom">
				Made without 💤 by&nbsp;
				<a href="https://www.instagram.com/emanuel.christo/" target="_blank" rel="noreferrer">
					Cris
				</a>
			</div>
		</nav>
	)
}

export default SideNav
