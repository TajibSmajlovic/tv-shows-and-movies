import React from 'react';

import classes from './Loader.module.css';
import { CenteredContent } from 'components';

const Loader: React.FC<{ isCentered?: boolean }> = ({ isCentered = true }) =>
  isCentered ? (
    <CenteredContent>
      <div className={classes.wrapper}>
        <div className={classes.loader} />
      </div>
    </CenteredContent>
  ) : (
    <div className={classes.wrapper}>
      <div className={classes.loader} />
    </div>
  );

export default Loader;
