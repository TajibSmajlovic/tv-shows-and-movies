import React from 'react';

import classes from './SearchedData.module.css';
import { Card } from 'components';
import { CARD_SIZES } from 'utils/constants';

const SearchedData: React.FC<{
  data: Array<{ id: number; name?: string; title?: string; poster_path: string }>;
  onClick: (id: number) => void;
}> = ({ data, onClick }) =>
  data.length < 1 ? (
    <div className={classes.noData}>
      <h1 className={classes.title}>No searched data found!</h1>
    </div>
  ) : (
    <>
      <h1 className={classes.title}>Searched results:</h1>

      <div className={classes.wrapper}>
        {data.map(d => (
          <Card
            key={d.id}
            title={d.name || d.title || ''}
            imgUrl={d.poster_path}
            size={CARD_SIZES.SMALL}
            onClick={() => onClick(d.id)}
          />
        ))}
      </div>
    </>
  );

export default SearchedData;
