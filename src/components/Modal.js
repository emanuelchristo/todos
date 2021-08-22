import '../styles/Modal.css'

function Modal({ onCancel, children }) {
	return (
		<div className="modal-shade">
			<div className="modal-bg">
				<div className="modal-content">{children}</div>
				<div className="modal-actions">
					<button className="cancel" onClick={onCancel}>
						Cancel
					</button>
					<div style={{ width: '1rem' }}></div>
					<button className="success">Create</button>
				</div>
			</div>
		</div>
	)
}

export default Modal
