import { useState, useEffect, useRef } from 'react'
import Modal from './Modal'

import '../styles/NewTodo.css'

const MAX_DESCRIPTION_LENGTH = 100
const MIN_DESCRIPTION_LENGTH = 3

function NewTodo({ onCancel, onCreate, onEdit, edit, todo, groups, selectedGroup }) {
	// HTML references
	const descriptionInput = useRef()
	const dateTimeInput = useRef()
	const groupInput = useRef()
	const todoForm = useRef()

	// States
	const [disabled, setDisabled] = useState(true)
	const [deadlineExists, setDeadlineExists] = useState(false)

	const [dateTime, setDateTime] = useState('')
	const [description, setDescription] = useState('')
	const [group, setGroup] = useState('')

	// State input binding
	function handleDateTimeChange(e) {
		setDateTime(new Date(e.target.value).toJSON())
	}
	function handleDescriptionChange(e) {
		if (e.target.value.length > MAX_DESCRIPTION_LENGTH) e.target.value = e.target.value.substring(0, MAX_DESCRIPTION_LENGTH)
		setDescription(e.target.value)
	}
	function handleGroupChange(e) {
		setGroup(e.target.value)
	}

	// Submitting
	function handleSuccess(e) {
		if (e) {
			e.preventDefault()
			if (!validateInfo()) return
		}
		if (edit)
			onEdit({
				id: todo.id,
				description,
				deadline: dateTime,
				dateAdded: new Date().toJSON(),
				groupId: group,
				complete: todo.complete,
			})
		else
			onCreate({
				description,
				deadline: dateTime,
				dateAdded: new Date().toJSON(),
				groupId: group,
				complete: false,
			})
		todoForm.current.reset()
	}

	// Adding or removing deadline
	function handleDeadlineButtonClick() {
		setDeadlineExists(!deadlineExists)
	}

	// Populate fields with todo info if edit mode

	// Showing and hiding datetime input
	useEffect(() => {
		if (deadlineExists) dateTimeInput.current.value = formatDateTime(todo.deadline)
		else setDateTime('')
	}, [deadlineExists, todo])

	// Verifying inputs
	useEffect(() => {
		setDisabled(!validateInfo())
	}, [dateTime, description, group, deadlineExists])

	// Mounting
	useEffect(() => {
		groupInput.current.value = selectedGroup.id
		setGroup(selectedGroup.id)
		if (edit) {
			descriptionInput.current.value = todo.description
			groupInput.current.value = todo.groupId
			setDeadlineExists(String(new Date(todo.deadline)) !== 'Invalid Date')
			setGroup(todo.groupId)
			setDescription(todo.description)
			setDateTime(todo.deadline)
		}
		descriptionInput.current.focus()
	}, [])

	// Input validation
	function validateInfo() {
		if (description.length >= MIN_DESCRIPTION_LENGTH && description.length <= MAX_DESCRIPTION_LENGTH && group) {
			if (deadlineExists) {
				if (String(new Date(dateTime)) !== 'Invalid Date') return true
				else return false
			}
			return true
		}
		return false
	}

	function formatDateTime(datetime) {
		let d = new Date(datetime)
		if (String(d) === 'Invalid Date') return ''

		let month = '' + (d.getMonth() + 1)
		let day = '' + d.getDate()
		let year = d.getFullYear()

		if (month.length < 2) month = '0' + month
		if (day.length < 2) day = '0' + day
		let date = [year, month, day].join('-')
		let time = d.toLocaleTimeString().slice(0, -3)
		return `${date}T${time}`
	}

	return (
		<Modal onCancel={onCancel} onSuccess={handleSuccess} disabled={disabled} customSuccess={edit ? 'Save' : 'Create'}>
			<div className="new-todo">
				<div className="new-todo-heading">
					<span className="iconify todo-icon purple-color" data-icon="mdi:bookmark"></span>
					<h3>{edit ? 'Edit' : 'New'} todo</h3>
				</div>
				<form ref={todoForm} onSubmit={handleSuccess}>
					<input className="todo-description-input" ref={descriptionInput} type="text" placeholder="Todo description" onChange={handleDescriptionChange} />
					<button className="add-deadline-button" type="button" onClick={handleDeadlineButtonClick}>
						<div className={`icon-wrapper ${deadlineExists ? 'cross' : ''}`}>
							<span className="iconify addicon add-deadline-icon" data-icon="bytesize:plus"></span>
						</div>
						{deadlineExists ? 'Clear' : 'Deadline'}
					</button>
					{deadlineExists ? <input ref={dateTimeInput} type="datetime-local" onChange={handleDateTimeChange} className="datetime-picker" /> : ''}
					<div style={{ height: '1.5rem' }}></div>
					<label className="group-label">Group</label>
					<select ref={groupInput} className="todo-group-select" onChange={handleGroupChange}>
						{Object.keys(groups).map((groupId) => (
							<option value={groupId} key={groupId}>
								{groups[groupId].name}
							</option>
						))}
					</select>
				</form>
			</div>
		</Modal>
	)
}

export default NewTodo
