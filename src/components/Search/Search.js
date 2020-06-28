import React from 'react';

import classes from './Search.module.css';

const Search = ({ placeholder = 'Type to search...', value, onChange }) => (
  <input className={classes.search} placeholder={placeholder} defaultValue={value} onChange={onChange} />
);

export default Search;
