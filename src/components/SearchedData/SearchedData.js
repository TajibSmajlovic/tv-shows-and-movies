import React from 'react';

import classes from './SearchedData.module.css';
import { Card } from 'components';
import { CARD_SIZES } from 'utils/constants';

const SearchedData = ({ data }) => (
  <div className={classes.wrapper}>
    {data.map(d => (
      <Card key={d.id} title={d.name || d.title} imgUrl={d.poster_path} size={CARD_SIZES.SMALL} />
    ))}
  </div>
);

export default SearchedData;
