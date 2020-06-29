import React from 'react';

import classes from './Button.module.css';

const Button: React.FC<{ onClick: () => void; children: React.ReactNode | string }> = ({ onClick, children }) => (
  <button className={classes.button} onClick={onClick}>
    {children}
  </button>
);

export default Button;
