import React from "react";
import "./Modal.css";

function Modal({ show, onClose, children }) {
  return (
    <div>
      {show && (
        <div className="modal-backdrop" onClick={onClose}>
          <div className="modal-wrapper">
            <div className="modal-close" onClick={onClose}>
              X
            </div>
            <div className="modal-body">{children}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
