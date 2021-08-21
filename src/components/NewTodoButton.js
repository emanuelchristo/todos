import '../styles/NewTodoButton.css'
function NewTodoButton() {
	return (
		<button className="new-todo-button">
			<span className="iconify addicon new-todo-icon" data-icon="bytesize:plus"></span>
			New todo
		</button>
	)
}

export default NewTodoButton
