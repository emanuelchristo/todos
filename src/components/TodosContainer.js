import Todo from './Todo'

import '../styles/TodosContainer.css'
import NewTodoButton from './NewTodoButton'

function TodosContainer({ todos, groups, onCheck }) {
	return (
		<div className="todos-container">
			{todos.map((todo) => (
				<Todo todo={todo} key={todo.id} groups={groups} onCheck={onCheck} />
			))}
		</div>
	)
}

export default TodosContainer
