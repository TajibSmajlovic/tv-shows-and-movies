import React from 'react';

import classes from './Button.module.css';

interface Props {
  children: string;
  onClick: () => void;
}

const Button: React.FC<Props> = ({ onClick, children }) => (
  <button className={classes.button} onClick={onClick}>
    {children}
  </button>
);

export default Button;
