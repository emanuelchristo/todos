import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import sample from './sample-data.js'

import SideNav from './components/SideNav'
import DisplayControls from './components/DisplayControls'
import GroupHeading from './components/GroupHeading'
import NewTodoButton from './components/NewTodoButton'
import LoadSampleButton from './components/LoadSampleButton'
import TodosContainer from './components/TodosContainer'
import NewGroup from './components/NewGroup'
import NewTodo from './components/NewTodo'
import GroupDelete from './components/GroupDelete'
import ResetButton from './components/ResetButton.js'
import MobileDevice from './components/MobileDevice.js'

import './styles/global.css'
import './styles/App.css'

const DEFAULT_GROUP = { all: { name: 'All todos', color: 'yellow' } }

function App() {
	// STATE
	const [isMobile, setIsMobile] = useState(false)

	const [todosType, setTodosType] = useState('incomplete')
	const [sort, setSort] = useState('dateAdded')
	const [showNewGroup, setShowNewGroup] = useState(false)
	const [showNewTodo, setShowNewTodo] = useState(false)
	const [showDeleteGroup, setShowDeleteGroup] = useState(false)
	const [deleteGroupInfo, setDeletGroupInfo] = useState({})
	const [editGroup, setEditGroup] = useState(false)
	const [editGroupInfo, setEditGroupInfo] = useState({})
	const [editTodo, setEditTodo] = useState(false)
	const [editTodoInfo, setEditTodoInfo] = useState({})

	const [allTodos, setAllTodos] = useState([])
	const [groups, setGroups] = useState(DEFAULT_GROUP)

	const [displayTodos, setDisplayTodos] = useState([])

	const [selectedGroup, setSelectedGroup] = useState({ id: 'all', name: 'All todos', color: 'yellow' })

	function handleOnNewGroup() {
		setShowNewGroup(true)
	}
	function handleCancelNewGroup() {
		setShowNewGroup(false)
		setEditGroup(false)
		setEditGroupInfo({})
	}
	function handleOnNewTodo() {
		setShowNewTodo(true)
	}
	function handleCancelNewTodo() {
		setShowNewTodo(false)
		setEditTodo(false)
		setEditTodoInfo({})
	}

	function handleCreateNewGroup(info) {
		if (!(info.name && info.color)) return
		const newGroups = { ...groups }
		newGroups[uuidv4()] = { ...info }
		setGroups(newGroups)
		setShowNewGroup(false)
	}

	function handleGroupEdit(group) {
		setEditGroup(true)
		setEditGroupInfo(group)
		setShowNewGroup(true)
	}

	function handleEditGroupSuccess(info) {
		if (!(info.name && info.color)) return
		const newGroups = { ...groups }
		newGroups[info.id] = { name: info.name, color: info.color }
		setGroups(newGroups)
		setSelectedGroup({ id: info.id, name: info.name, color: info.color })
		setShowNewGroup(false)
		setEditGroup(false)
		setEditGroupInfo({})
	}

	function handleDeleteGroup(group) {
		setDeletGroupInfo(group)
		setShowDeleteGroup(true)
	}

	function handleCancelDeleteGroup() {
		setShowDeleteGroup(false)
		setDeletGroupInfo({})
	}

	async function handleDeleteGroupSuccess(info) {
		let newAllTodos
		if (info.checked) {
			newAllTodos = allTodos.filter((todo) => todo.groupId !== info.group.id)
		} else {
			newAllTodos = [...allTodos]
			for (let t of newAllTodos) {
				if (t.groupId === info.group.id) t.groupId = 'all'
			}
		}
		await setAllTodos(newAllTodos)
		setSelectedGroup({ id: 'all', name: 'All todos', color: 'yellow' })
		const newGroups = { ...groups }
		delete newGroups[info.group.id]
		setGroups(newGroups)

		setShowDeleteGroup(false)
		setDeletGroupInfo({})
	}

	function handleGroupClick(groupId) {
		if (!groups[groupId]) return
		setSelectedGroup({
			id: groupId,
			...groups[groupId],
		})
	}

	function handleCreateNewTodo(todo) {
		const newAllTodos = [...allTodos, { id: uuidv4(), ...todo }]
		setAllTodos(newAllTodos)
		setShowNewTodo(false)
	}

	function handleTodoEdit(todo) {
		setEditTodo(true)
		setEditTodoInfo(todo)
		setShowNewTodo(true)
	}

	function handleEditTodoSuccess(todo) {
		const newAllTodos = allTodos.filter((t) => t.id !== todo.id)
		newAllTodos.push({ id: uuidv4(), ...todo })
		setAllTodos(newAllTodos)
		setShowNewTodo(false)
		setEditTodo(false)
		setEditTodoInfo({})
	}

	function handleOnCheck(todoId) {
		const newTodos = [...allTodos]
		const todo = newTodos.find((todo) => todo.id === todoId)
		todo.complete = !todo.complete
		setAllTodos(newTodos)
	}

	function handleTodoDelete(todoId) {
		console.log(todoId)
		setAllTodos(allTodos.filter((todo) => todo.id !== todoId))
	}

	function handleLoadSample() {
		setAllTodos(sample.todos)
		setGroups(sample.groups)
	}

	function reset() {
		window.localStorage.clear()
		window.location.reload()
	}

	useEffect(() => {
		//Checking if mobile device
		setIsMobile(window.matchMedia('only screen and (max-width: 880px)').matches)

		// Loading from localstorage
		const groups = window.localStorage.getItem('groups')
		const todos = window.localStorage.getItem('todos')
		if (groups) setGroups(JSON.parse(groups))
		if (todos) setAllTodos(JSON.parse(todos))
	}, [])

	useEffect(() => {
		setDisplayTodos(
			allTodos.filter((todo) => {
				if (selectedGroup.id === 'all' || selectedGroup.id === todo.groupId) return todosType === (todo.complete ? 'complete' : 'incomplete')
				return false
			})
		)
	}, [allTodos, todosType, selectedGroup, sort])

	useEffect(() => {
		window.localStorage.setItem('todos', JSON.stringify(allTodos))
	}, [allTodos])

	useEffect(() => {
		window.localStorage.setItem('groups', JSON.stringify(groups))
	}, [groups])

	return (
		<div>
			{!isMobile && (
				<div className="layout">
					<SideNav onNewGroup={handleOnNewGroup} groups={groups} onGroupClick={handleGroupClick} />
					<div className="margin content">
						<div style={{ height: '4rem', flexShrink: '0' }}></div>
						<div className="top-buttons-wrapper">
							<NewTodoButton onNewTodo={handleOnNewTodo} />
							<div className="right">
								<LoadSampleButton onClick={handleLoadSample} />
								<ResetButton onClick={reset} />
							</div>
						</div>

						<div style={{ height: '3rem', flexShrink: '0' }}></div>
						<GroupHeading group={selectedGroup} onEdit={handleGroupEdit} onDelete={handleDeleteGroup} />
						<div style={{ height: '2.5rem', flexShrink: '0' }}></div>
						<DisplayControls type={todosType} onTypeChange={setTodosType} sort={sort} onSortChange={setSort} />
						<div style={{ height: '2.5rem', flexShrink: '0' }}></div>
						<TodosContainer todos={displayTodos} groups={groups} onEdit={handleTodoEdit} onCheck={handleOnCheck} onDelete={handleTodoDelete} sort={sort} />
						<div style={{ height: '2rem', flexShrink: '0' }}></div>
					</div>
					{showDeleteGroup && <GroupDelete onCancel={handleCancelDeleteGroup} onDelete={handleDeleteGroupSuccess} group={deleteGroupInfo} />}
					{showNewGroup && <NewGroup onCancel={handleCancelNewGroup} onCreate={handleCreateNewGroup} onEdit={handleEditGroupSuccess} edit={editGroup} group={editGroupInfo} />}
					{showNewTodo && <NewTodo onCancel={handleCancelNewTodo} onCreate={handleCreateNewTodo} onEdit={handleEditTodoSuccess} edit={editTodo} todo={editTodoInfo} groups={groups} selectedGroup={selectedGroup} />}
				</div>
			)}
			{isMobile && <MobileDevice />}
		</div>
	)
}

export default App
