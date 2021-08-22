import { useState } from 'react'

import Modal from './Modal'
import ColorPicker from './ColorPicker'

import '../styles/NewGroup.css'

function NewGroup({ onCancel }) {
	const [color, setColor] = useState('blue')

	return (
		<Modal onCancel={onCancel}>
			<div className="new-group">
				<div className="new-group-heading">
					{color}
					<span className={`iconify folder-icon ${color}-color`} data-icon="mdi:folder"></span>
					<h3>New group</h3>
				</div>
				<form>
					<input type="text" placeholder="New group" className="group-name-input" />
				</form>
				<ColorPicker onChange={setColor} />
				<div style={{ height: '2rem' }}></div>
			</div>
		</Modal>
	)
}

export default NewGroup
