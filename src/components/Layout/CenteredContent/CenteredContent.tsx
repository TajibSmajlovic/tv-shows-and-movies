import React from 'react';

import classes from './CenteredContent.module.css';

const CenteredContent: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className={classes.wrapper}> {children} </div>
);

export default CenteredContent;
