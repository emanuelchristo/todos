import '../styles/Todo.css'
import { useState } from 'react'
import Checkbox from './Checkbox'

function Todo({ todo, groups, onCheck }) {
	const [value, setValue] = useState(false)

	function formatDeadline(datetime) {
		if (!datetime) return '--'
		const d = new Date(datetime)
		if (d === 'Invalid Date') return '--'
		const today = new Date()
		let date = d.getDate()
		let year = d.getFullYear()
		let month = d.toLocaleString('default', { month: 'short' })
		let time = d.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
		let str = `${date} ${month} ${today.getFullYear() === year ? '' : year} - ${time}`
		return str
	}

	function handleCheck() {
		onCheck(todo.id)
	}

	return (
		<div className="todo">
			<div className="checkbox-wrapper">
				<Checkbox checked={todo.complete} onClick={handleCheck} />
			</div>
			<div className="description-wrapper">
				<p className="description">{todo.description}</p>
			</div>
			<div className="time-wrapper">
				<p className="date-time">{formatDeadline(todo.deadline)}</p>
			</div>
			<div className="group-tag-wrapper">
				<p className={`group-tag group-tag-${groups[todo.groupId].color}`}>{groups[todo.groupId] ? groups[todo.groupId].name : '--'}</p>
			</div>
			<div className="todo-actions-wrapper">
				<span className="iconify delete-icon" data-icon="mdi:trash"></span>
				<span className="iconify edits-icon" data-icon="mdi:pencil"></span>
			</div>
		</div>
	)
}

Todo.defaultProps = {
	todo: {
		id: '',
		description: '--',
		groupId: '--',
		deadline: null,
	},
}

export default Todo
