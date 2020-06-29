import React from 'react';

import classes from './Search.module.css';

interface Props {
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<Props> = ({ placeholder = 'Type to search...', value, onChange }) => (
  <input className={classes.search} placeholder={placeholder} defaultValue={value} onChange={onChange} />
);

export default Search;
