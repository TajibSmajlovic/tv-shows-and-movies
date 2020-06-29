import React from 'react';

import classes from './Search.module.css';

const Search: React.FC<{
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ placeholder = 'Type to search...', value, onChange }) => (
  <input className={classes.search} placeholder={placeholder} defaultValue={value} onChange={onChange} />
);

export default Search;
