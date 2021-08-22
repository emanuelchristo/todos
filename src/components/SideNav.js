import GroupMenuItem from './GroupMenuItem'
import '../styles/SideNav.css'

import Logo from '../assets/todos-logo.svg'

function SideNav({ onNewGroup, groups, onGroupClick }) {
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
				{Object.keys(groups).map((groupId) => {
					if (groupId === 'all') return null
					return <GroupMenuItem group={groups[groupId]} groupId={groupId} onClick={onGroupClick} key={groupId} />
				})}
			</div>
			<div className="sidenav-bottom">
				Made without 💤 by&nbsp;
				<a href="https://www.instagram.com/emanuel.christo/" target="_blank">
					Cris
				</a>
			</div>
		</nav>
	)
}

export default SideNav
