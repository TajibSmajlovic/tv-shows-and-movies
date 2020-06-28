import React from 'react';

import classes from './Text.module.css';

const Text = ({ children }) => <p className={classes.text}>{children}</p>;

export default Text;
