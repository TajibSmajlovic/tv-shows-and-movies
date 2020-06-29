import React from 'react';

import classes from './Modal.module.css';

interface Props {
  open: any;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<Props> = ({ open, onClose, children }) =>
  open ? (
    <>
      <div className={classes.backdrop} onClick={onClose} />
      <div className={classes.modal}>{children}</div>
    </>
  ) : null;

export default Modal;
