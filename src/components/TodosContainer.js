import Todo from './Todo'

import '../styles/TodosContainer.css'

function NoTodos() {
	return <div className="no-todos">You are all caught up!</div>
}

function TodosContainer({ todos, groups, sort, onEdit, onCheck, onDelete }) {
	function sortTodos(todos, sort) {
		todos.sort((a, b) => {
			if (a['dateAdded'] > b['dateAdded']) return -1
			else if (a['dateAdded'] === b['dateAdded']) return 0
			else return 1
		})
		if (sort === 'deadline')
			todos.sort((a, b) => {
				if (a['deadline'] > b['deadline']) return 1
				else if (a['deadline'] === b['deadline']) return 0
				else return -1
			})
		return todos
	}
	return <div className="todos-container">{todos.length ? sortTodos(todos, sort).map((todo) => <Todo todo={todo} key={todo.id} onEdit={onEdit} groups={groups} onCheck={onCheck} onDelete={onDelete} />) : <NoTodos />}</div>
}

export default TodosContainer
