import React from 'react';

import classes from './Title.module.css';

const Title: React.FC<{ children: string; centered: boolean }> = ({ children, centered }) => (
  <h4 className={centered ? [classes.title, classes.centered].join(' ') : classes.title}>{children}</h4>
);

export default Title;
