import Modal from './Modal'

import '../styles/NewTodo.css'
function NewTodo({ onCancel }) {
	function handleDateTimeChange(e) {
		console.log()
	}

	return (
		<Modal onCancel={onCancel}>
			<div className="new-todo">
				<div className="new-todo-heading">
					<span className="iconify todo-icon purple-color" data-icon="mdi:bookmark"></span>
					<h3>New todo</h3>
				</div>
				<form>
					<input className="todo-description-input" type="text" placeholder="Todo description" />
					<button className="add-deadline-button">
						<span className="iconify addicon add-deadline-icon" data-icon="bytesize:plus"></span>
						Deadline
					</button>
					<input type="datetime-local" onChange={handleDateTimeChange} className="datetime-picker" />
					<div style={{ height: '1.5rem' }}></div>
					<label className="group-label">Group</label>
					<select className="todo-group-select">
						<option value="">All todos</option>
						<option value="">Assignments</option>
					</select>
				</form>
			</div>
		</Modal>
	)
}

export default NewTodo
