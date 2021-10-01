import React from 'react'
import '../css/modal.css'

const Modal = () => {
  return (
    <>
      <div className="modal__main">
        <div className="modal__overlay">
          <div className="modal__window">
            <h3 className="modal__window-head">
              Do you really want to Logout?
            </h3>
            <div className="modal__window-buttons">
              <button className="modal__window-buttons-decline modal-buttons">
                No
              </button>
              <button className="modal__window-buttons-accept modal-buttons">
                Yeah
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal
