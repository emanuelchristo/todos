import { useState, useEffect, useRef } from 'react'

import Modal from './Modal'
import ColorPicker from './ColorPicker'

import '../styles/NewGroup.css'

const MAX_GROUPNAME_LENGTH = 20

function NewGroup({ onCancel, onCreate, onEdit, edit, group }) {
	const [groupName, setGroupName] = useState('')
	const [color, setColor] = useState('yellow')
	const [disabled, setDisabled] = useState(true)

	const groupNameInput = useRef()

	function handleInputChange(e) {
		if (e.target) {
			if (e.target.value.length > MAX_GROUPNAME_LENGTH) e.target.value = e.target.value.substring(0, MAX_GROUPNAME_LENGTH)
			setGroupName(e.target.value)
		}
	}

	// Add custom validate function
	function validateGroupName(groupName) {
		return groupName.length > 0 && groupName.length <= MAX_GROUPNAME_LENGTH
	}

	// If in edit mode populating fields with group info
	useEffect(() => {
		if (!edit) return
		setGroupName(group.name)
		setColor(group.color)
		groupNameInput.current.value = group.name
	}, [group.name, group.color, edit])

	useEffect(() => {
		setDisabled(!validateGroupName(groupName))
	}, [groupName])

	function handleSuccess(e) {
		if (e) e.preventDefault()
		if (!validateGroupName(groupName)) return
		if (edit) onEdit({ id: group.id, name: groupName, color: color })
		else onCreate({ name: groupName, color: color })
		groupNameInput.current.value = ''
	}

	return (
		<Modal onCancel={onCancel} onSuccess={handleSuccess} disabled={disabled} customSuccess={edit ? 'Save' : 'Create'}>
			<div className="new-group">
				<div className="new-group-heading">
					<div className={`icon-wrapper ${color}-color`}>
						<span className="iconify folder-icon" data-icon="mdi:folder"></span>
					</div>
					<h3>{edit ? 'Edit' : 'New'} group</h3>
				</div>
				<form onSubmit={handleSuccess}>
					<input type="text" ref={groupNameInput} onChange={handleInputChange} placeholder="New group" className="group-name-input" />
				</form>
				<ColorPicker onChange={setColor} />
				<div style={{ height: '2rem' }}></div>
			</div>
		</Modal>
	)
}

export default NewGroup
