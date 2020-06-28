import React, { useEffect } from 'react';

import classes from './Movies.module.css';
import useApi from 'utils/hooks/api/useApi';
import { Loader, Card, SearchedData } from 'components';
import { firstTenElements } from 'utils/helpers';
import { useRoot } from 'context/AppContext';
import { API_ENDPOINTS } from 'utils/constants';

const Movies = ({ tabKey }) => {
  const [{ result, loading }, fetch] = useApi(API_ENDPOINTS.TOP_RATED_MOVIES, { initialFetch: false });
  const { searchLoading, searchResult, selectedTab } = useRoot();

  // Add comments
  useEffect(() => {
    if (selectedTab === tabKey) fetch();
  }, [fetch, selectedTab, tabKey]);

  return loading ? (
    <Loader />
  ) : (
    <div className={classes.wrapper}>
      {searchLoading ? (
        <Loader />
      ) : (
        searchResult && searchResult.results && <SearchedData data={searchResult.results} />
      )}
      {result &&
        result.results &&
        firstTenElements(result?.results).map(r => <Card key={r.id} title={r.title} imgUrl={r.poster_path} />)}
    </div>
  );
};

export default Movies;
