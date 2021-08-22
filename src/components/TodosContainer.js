import Todo from './Todo'

import '../styles/TodosContainer.css'

function NoTodos() {
	return <div className="no-todos">You are all caught up!</div>
}

function TodosContainer({ todos, groups, sort, onEdit, onCheck, onDelete }) {
	function sortTodos(todos, sort) {
		todos.sort((a, b) => {
			if (a[sort] > b[sort]) return 1
			if (a[sort] == b[sort]) return 0
			else return -1
		})
		if (sort === 'dateAdded') todos.reverse()
		return todos
	}
	return <div className="todos-container">{todos.length ? sortTodos(todos, sort).map((todo) => <Todo todo={todo} key={todo.id} onEdit={onEdit} groups={groups} onCheck={onCheck} onDelete={onDelete} />) : <NoTodos />}</div>
}

export default TodosContainer
