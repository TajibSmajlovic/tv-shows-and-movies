import React from 'react';

import classes from './Text.module.css';

const Text: React.FC<{ children: string }> = ({ children }) => <p className={classes.text}>{children}</p>;

export default Text;
