import '../styles/NewTodoButton.css'
function NewTodoButton({ onNewTodo }) {
	return (
		<button className="new-todo-button" onClick={onNewTodo}>
			<span className="iconify addicon new-todo-icon" data-icon="bytesize:plus"></span>
			New todo
		</button>
	)
}

export default NewTodoButton
