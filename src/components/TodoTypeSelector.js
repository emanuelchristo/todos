import '../styles/TodoTypeSelector.css'

function TodoTypeSelector({ type, onChange }) {
	function handleClick(e) {
		onChange(e.target.innerText.toLowerCase())
	}
	return (
		<div className="todo-type-selector">
			<div onClick={handleClick} className={`todo-type-item ${type === 'incomplete' ? 'todo-type-selected' : ''}`}>
				Incomplete
			</div>
			<div onClick={handleClick} className={`todo-type-item ${type === 'complete' ? 'todo-type-selected' : ''}`}>
				Complete
			</div>
		</div>
	)
}

export default TodoTypeSelector
