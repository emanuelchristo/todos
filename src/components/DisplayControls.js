import Sort from './Sort'
import TodoTypeSelector from './TodoTypeSelector'

import '../styles/DisplayControls.css'

function DisplayControls({ type, sort, onTypeChange }) {
	return (
		<div className="display-controls">
			<TodoTypeSelector type={type} onChange={onTypeChange} />
			<Sort />
		</div>
	)
}

export default DisplayControls
