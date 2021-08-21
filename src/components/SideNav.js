import GroupMenuItem from './GroupMenuItem'
import '../styles/SideNav.css'

import Logo from '../assets/todos-logo.svg'

function SideNav() {
	return (
		<nav className="sidenav">
			<div className="sidenav-top">
				<div className="logo-wrapper">
					<img src={Logo} alt="Todos." />
				</div>
				<div className="logo-spacer"></div>
				<GroupMenuItem group={{ name: 'All todos', color: 'yellow' }} />
			</div>
			<div className="groups-title-container">
				<h3>Groups</h3>
				<button className="new-group-button">
					<span className="iconify addicon new-group-icon" data-icon="bytesize:plus"></span>
				</button>
			</div>
			<div className="groups-container">
				<GroupMenuItem group={{ name: 'Assignments', color: 'yellow' }} />
				<GroupMenuItem group={{ name: 'Coding', color: 'red' }} />
				<GroupMenuItem group={{ name: 'Works', color: 'pink' }} />
				<GroupMenuItem group={{ name: 'Club tasks', color: 'violet' }} />
				<GroupMenuItem group={{ name: 'Room cleaning', color: 'blue' }} />
				<GroupMenuItem group={{ name: 'Reading', color: 'green' }} />
			</div>
			<div className="sidenav-bottom">Made with ❤️ by Cris</div>
		</nav>
	)
}

export default SideNav
