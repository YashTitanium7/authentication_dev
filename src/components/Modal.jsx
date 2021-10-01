import React from "react";
import "../css/modal.css";

const Modal = ({ question, accept, decline, acceptFunc, declineFunc }) => {
  return (
    <>
      <div className="modal__main">
        <div className="modal__overlay">
          <div className="modal__window">
            <h3 className="modal__window-head">
              {question || "Do you really want to Continue?"}
            </h3>
            <div className="modal__window-buttons">
              <button
                className="modal__window-buttons-decline modal-buttons"
                onClick={declineFunc || null}
              >
                {decline || "No"}
              </button>
              <button
                className="modal__window-buttons-accept modal-buttons"
                onClick={acceptFunc || null}
              >
                {accept || "Yes"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
