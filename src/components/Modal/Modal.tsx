import React from 'react';

import classes from './Modal.module.css';

const Modal: React.FC<{ open: any; onClose: () => void; children: React.ReactNode }> = ({ open, onClose, children }) =>
  open ? (
    <>
      <div className={classes.backdrop} onClick={onClose} />
      <div className={classes.modal}>{children}</div>
    </>
  ) : null;

export default Modal;
