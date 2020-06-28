import React from 'react';

import classes from './CenteredContent.module.css';

const CenteredContent = ({ children }) => <div className={classes.wrapper}> {children} </div>;

export default CenteredContent;
