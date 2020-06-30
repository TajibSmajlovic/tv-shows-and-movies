import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import classes from './Movies.module.css';
import routes, { generateLink } from 'utils/routes';
import { Loader, Card, SearchedData, CenteredContent } from 'components';
import { useApi } from 'utils/hooks/api';
import { firstTenElements } from 'utils/helpers';
import { useApp } from 'context/AppContext';
import { API_ENDPOINTS } from 'utils/constants';

const Movies: React.FC<{ tabKey: string; label: string; showTitle?: boolean }> = ({ tabKey }) => {
  const history = useHistory();
  const [{ result, loading }, fetch]: Array<any> = useApi(API_ENDPOINTS.TOP_RATED_MOVIES, { initialFetch: false });
  const { searchLoading, searchResult, selectedTab } = useApp();

  useEffect(() => {
    if (selectedTab === tabKey) fetch();
  }, [fetch, selectedTab, tabKey]);

  const goToMovie = (id: number) => history.push(generateLink(routes.MOVIE, { id }));

  return loading || searchLoading ? (
    <CenteredContent>
      <Loader />
    </CenteredContent>
  ) : (
    <>
      <div className={classes.wrapper}>
        {searchResult && searchResult.results ? (
          <SearchedData data={searchResult.results} onClick={goToMovie} />
        ) : (
          result &&
          result.results &&
          firstTenElements(result?.results).map((r: any) => (
            <Card key={r.id} title={r.title} imgUrl={r.poster_path} onClick={() => goToMovie(r.id)} />
          ))
        )}
      </div>
    </>
  );
};

export default Movies;
