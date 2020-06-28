import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import classes from './Movies.module.css';
import useApi from 'utils/hooks/api/useApi';
import routes, { generateLink } from 'utils/routes';
import { Loader, Card, SearchedData } from 'components';
import { firstTenElements } from 'utils/helpers';
import { useRoot } from 'context/AppContext';
import { API_ENDPOINTS } from 'utils/constants';

const Movies = ({ tabKey }) => {
  const history = useHistory();
  const [{ result, loading }, fetch] = useApi(API_ENDPOINTS.TOP_RATED_MOVIES, { initialFetch: false });
  const { searchLoading, searchResult, selectedTab } = useRoot();

  useEffect(() => {
    if (selectedTab === tabKey) fetch();
  }, [fetch, selectedTab, tabKey]);

  const goToMovie = id => history.push(generateLink(routes.MOVIE, { id }));

  return loading ? (
    <Loader />
  ) : (
    <>
      {searchLoading ? (
        <Loader />
      ) : (
        searchResult && searchResult.results && <SearchedData data={searchResult.results} onClick={goToMovie} />
      )}
      <div className={classes.wrapper}>
        {result &&
          result.results &&
          firstTenElements(result?.results).map(r => (
            <Card key={r.id} title={r.title} imgUrl={r.poster_path} onClick={() => goToMovie(r.id)} />
          ))}
      </div>
    </>
  );
};

export default Movies;
