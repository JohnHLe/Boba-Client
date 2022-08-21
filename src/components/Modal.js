import React from 'react';
import './css/Modal.css';

const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className='overlay'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'
      >
        <video src="/videos/bobapour.mp4" autoPlay loop muted />

        <div className='modalRight'>
          <p className='closeBtn' onClick={onClose}>
            X
          </p>
          <div className='content'>
          </div>
          <div className='btnContainer'>
          </div>
        <div className='closeBtn' onClick={onClose}>
          X
        </div>
        <div className='content'>
        </div>
        <div className='btnContainer'>

        </div>
      </div>
    </div>
  );
};

export default Modal;