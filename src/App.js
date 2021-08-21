import { useState } from 'react'

import SideNav from './components/SideNav'
import DisplayControls from './components/DisplayControls'
import GroupHeading from './components/GroupHeading'

import './styles/global.css'
import './styles/App.css'
import NewTodoButton from './components/NewTodoButton'

function App() {
	const [todosType, setTodosType] = useState('incomplete')
	return (
		<div className="layout">
			<SideNav />
			<div className="margin">
				<div style={{ height: '5rem' }}></div>
				<NewTodoButton />
				<div style={{ height: '4rem' }}></div>
				<GroupHeading group={{ name: 'Assignments', color: 'yellow' }} />
				<div style={{ height: '2.5rem' }}></div>

				<DisplayControls type={todosType} onTypeChange={setTodosType} />
			</div>
		</div>
	)
}

export default App
