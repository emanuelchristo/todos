import React from 'react'
import Logo from '../assets/todos-logo.svg'

import '../styles/SideNav.css'
import GroupMenuItem from './GroupMenuItem'

function SideNav() {
	return (
		<nav className="sidenav">
			<div className="sidenav-top">
				<div className="logo-wrapper">
					<img src={Logo} alt="Todos." />
				</div>
				<div className="logo-spacer"></div>
				<GroupMenuItem groupName="All todos" />
			</div>
      <div className="groups-title-container">
					<h3>Groups</h3>
					<button className="new-group-button">
						<span className="iconify addicon new-group-icon" data-icon="bytesize:plus"></span>
					</button>
				</div>
			<div className="groups-container">
					<GroupMenuItem groupName="Assignments" color="yellow" />
					<GroupMenuItem groupName="Coding" color="red" />
					<GroupMenuItem groupName="Works" color="pink" />
					<GroupMenuItem groupName="Club tasks" color="violet" />
					<GroupMenuItem groupName="Room cleaning" color="blue" />
					<GroupMenuItem groupName="Reading" color="green" />
			</div>
      <div className="sidenav-bottom">
        Made with ❤️ by Cris
      </div>
		</nav>
	)
}

export default SideNav
