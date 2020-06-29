import React from 'react';

import classes from './Container.module.css';

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className={classes.container}>{children}</div>
);

export default Container;
