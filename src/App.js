import { useState, useEffect } from 'react'

import SideNav from './components/SideNav'
import DisplayControls from './components/DisplayControls'
import GroupHeading from './components/GroupHeading'
import NewTodoButton from './components/NewTodoButton'
import TodosContainer from './components/TodosContainer'
import NewGroup from './components/NewGroup'

import './styles/global.css'
import './styles/App.css'
import NewTodo from './components/NewTodo'

function App() {
	// STATE
	const [todosType, setTodosType] = useState('incomplete')
	const [sort, setSort] = useState('deadline')
	const [showNewGroup, setShowNewGroup] = useState(false)
	const [showNewTodo, setShowNewTodo] = useState(false)
	const [allTodos, setAllTodos] = useState([
		{
			id: 'akdf',
			description: 'Lorem, ipsum dolor sit amet consectetur adipisicing',
			deadline: '2021-08-22T06:38:59.531Z',
			groupId: 'ksafla',
			complete: false,
		},
		{
			id: 'asdfaf',
			description: 'This is a sample todo',
			deadline: '2021-08-22T06:38:59.531Z',
			groupId: 'asdfgewer',
			complete: false,
		},
		{
			id: 'sadgad',
			description: 'Lorem, ipsum dolor sit amet consectetur adipisicing',
			deadline: '2021-08-22T06:38:59.531Z',
			groupId: 'wgwg',
			complete: false,
		},
		{
			id: 'agda',
			description: 'Lorem, ipsum dolor sit amet consectetur adipisicing',
			deadline: '2021-08-22T06:38:59.531Z',
			groupId: 'sgdsd',
			complete: false,
		},
	])
	const [displayTodos, setDisplayTodos] = useState([])

	const [groups, setGroups] = useState({
		all: { color: 'yellow', name: 'All todos' },
		ksafla: { color: 'yellow', name: 'Assignment' },
		asdfsf: { color: 'red', name: 'Coding' },
		asdfgewer: { color: 'pink', name: 'Work' },
		wgwg: { color: 'violet', name: 'Club tasks' },
		asdfa: { color: 'blue', name: 'Room cleaning' },
		sgdsd: { color: 'green', name: 'Reading' },
	})

	const [selectedGroup, setSelectedGroup] = useState({ id: 'all', name: 'All todos', color: 'yellow' })

	function handleOnNewGroup() {
		setShowNewGroup(true)
	}
	function handleCancelNewGroup() {
		setShowNewGroup(false)
	}
	function handleOnNewTodo() {
		setShowNewTodo(true)
	}
	function handleCancelNewTodo() {
		setShowNewTodo(false)
	}

	function handleGroupClick(groupId) {
		if (!groups[groupId]) return
		setSelectedGroup({
			id: groupId,
			...groups[groupId],
		})
	}

	function handleOnCheck(todoId) {
		const newTodos = [...allTodos]
		const todo = newTodos.find((todo) => todo.id === todoId)
		todo.complete = !todo.complete
		setAllTodos(newTodos)
	}

	function updateDisplayTodos() {
		setDisplayTodos(
			allTodos.filter((todo) => {
				if (selectedGroup.id === 'all' || selectedGroup.id === todo.groupId) return todosType === (todo.complete ? 'complete' : 'incomplete')
				return false
			})
		)
	}

	useEffect(() => {
		updateDisplayTodos()
	})

	return (
		<div className="layout">
			<SideNav onNewGroup={handleOnNewGroup} groups={groups} onGroupClick={handleGroupClick} />
			<div className="margin content">
				<div style={{ height: '4rem', flexShrink: '0' }}></div>
				<NewTodoButton onNewTodo={handleOnNewTodo} />
				<div style={{ height: '3rem', flexShrink: '0' }}></div>
				<GroupHeading group={selectedGroup} />
				<div style={{ height: '2.5rem', flexShrink: '0' }}></div>
				<DisplayControls type={todosType} onTypeChange={setTodosType} sort={sort} onSortChange={setSort} />
				<div style={{ height: '2.5rem', flexShrink: '0' }}></div>
				<TodosContainer todos={displayTodos} groups={groups} onCheck={handleOnCheck} />
				<div style={{ height: '2rem', flexShrink: '0' }}></div>
			</div>
			{showNewGroup && <NewGroup onCancel={handleCancelNewGroup} />}
			{showNewTodo && <NewTodo onCancel={handleCancelNewTodo} />}
		</div>
	)
}

export default App
