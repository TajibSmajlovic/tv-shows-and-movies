import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import classes from './Movies.module.css';
import routes, { generateLink } from 'utils/routes';
import { Loader, Card, SearchedData } from 'components';
import { useApi } from 'utils/hooks/api';
import { useApp } from 'context/AppContext';
import { firstTenElements } from 'utils/helpers';
import { API_ENDPOINTS } from 'utils/constants';

interface Props {
  tabKey: string;
  label: string;
  showTitle?: boolean;
}

const Movies: React.FC<Props> = ({ tabKey }) => {
  const history = useHistory();
  const [{ result, loading }, fetch]: Array<any> = useApi(API_ENDPOINTS.TOP_RATED_MOVIES, { initialFetch: false });
  const { searchLoading, searchResult, selectedTab } = useApp();

  const goToMovie = (id: number) => history.push(generateLink(routes.MOVIE, { id }));

  useEffect(() => {
    if (selectedTab === tabKey) fetch();
  }, [fetch, selectedTab, tabKey]);

  return loading || searchLoading ? (
    <Loader />
  ) : (
    <>
      <div className={classes.wrapper}>
        {searchResult?.results ? (
          <SearchedData data={searchResult.results} onClick={goToMovie} />
        ) : (
          result?.results &&
          firstTenElements(result?.results).map((r: any) => (
            <Card key={r.id} title={r.title} imgUrl={r.poster_path} onClick={() => goToMovie(r.id)} />
          ))
        )}
      </div>
    </>
  );
};

export default Movies;
