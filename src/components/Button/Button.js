import React from 'react';

import classes from './Button.module.css';

const Button = ({ onClick, children }) => (
  <button className={classes.button} onClick={onClick}>
    {children}
  </button>
);

export default Button;
