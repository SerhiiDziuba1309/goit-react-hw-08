import React from 'react';
import ReactDOM from 'react-dom';
import s from './ConfirmModal.module.css';

const ConfirmModal = ({ isOpen, onClose, onConfirm, message }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={s.modalOverlay}>
      <div className={s.modalContent}>
        <p className={s.modalMessage}>{message}</p>
        <div className={s.modalActions}>
          <button
            className={`${s.modalButton} ${s.cancelButton}`}
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className={`${s.modalButton} ${s.confirmButton}`}
            onClick={onConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

export default ConfirmModal;
