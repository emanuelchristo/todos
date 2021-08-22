import Sort from './Sort'
import TodoTypeSelector from './TodoTypeSelector'

import '../styles/DisplayControls.css'

function DisplayControls({ type, sort, onTypeChange, onSortChange }) {
	return (
		<div className="display-controls">
			<TodoTypeSelector type={type} onChange={onTypeChange} />
			<Sort sort={sort} onChange={onSortChange} />
		</div>
	)
}

export default DisplayControls
