import React from 'react';

import classes from './SearchedData.module.css';
import { Card } from 'components';

interface Props {
  data: Array<{ id: number; name?: string; title?: string; poster_path?: string }>;
  onClick: (id: number) => void;
}

const SearchedData: React.FC<Props> = ({ data, onClick }) =>
  data.length < 1 ? (
    <div className={classes.noData}>
      <h1 className={classes.title}>No searched data found!</h1>
    </div>
  ) : (
    <>
      {data.map(d => (
        <Card key={d.id} id={d.id} title={d.name || d.title || ''} imgUrl={d.poster_path} onClick={onClick} />
      ))}
    </>
  );

export default SearchedData;
