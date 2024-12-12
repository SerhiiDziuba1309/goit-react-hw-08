import React from 'react';
import ReactDOM from 'react-dom';
import s from './ConfirmModal.module.css';

const ConfirmModal = ({ isOpen, onClose, onConfirm, message }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={s.overlay}>
      <div className={s.modal}>
        <p className={s.message}>{message}</p>
        <div className={s.actions}>
          <button className={`${s.button} ${s.cancel}`} onClick={onClose}>
            Cancel
          </button>
          <button className={`${s.button} ${s.confirm}`} onClick={onConfirm}>
            Confirm
          </button>
        </div>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

export default ConfirmModal;
