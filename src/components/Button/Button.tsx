import React from 'react';

import classes from './Button.module.css';

interface Props {
  isRounded?: boolean;
  children: string;
  onClick: () => void;
}

const Button: React.FC<Props> = ({ isRounded, onClick, children }) => (
  <button className={isRounded ? classes.rounded : classes.button} onClick={onClick}>
    {children}
  </button>
);

export default Button;
