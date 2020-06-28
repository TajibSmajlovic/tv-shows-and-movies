import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import classes from './Shows.module.css';
import useApi from 'utils/hooks/api/useApi';
import routes, { generateLink } from 'utils/routes';
import { Loader, Card, SearchedData } from 'components';
import { firstTenElements } from 'utils/helpers';
import { useRoot } from 'context/AppContext';
import { API_ENDPOINTS } from 'utils/constants';

const Shows = ({ tabKey }) => {
  const history = useHistory();
  const [{ result, loading }, fetch] = useApi(API_ENDPOINTS.TOP_RATED_TV_SHOWS, { initialFetch: false });
  const { searchLoading, searchResult, selectedTab } = useRoot();

  const goToShow = id => history.push(generateLink(routes.TV_SHOW, { id }));

  useEffect(() => {
    if (selectedTab === tabKey) fetch();
  }, [fetch, selectedTab, tabKey]);

  return loading ? (
    <Loader />
  ) : (
    <>
      {searchLoading ? (
        <Loader />
      ) : (
        searchResult && searchResult.results && <SearchedData data={searchResult.results} onClick={goToShow} />
      )}
      <div className={classes.wrapper}>
        {result &&
          result.results &&
          firstTenElements(result?.results).map(r => (
            <Card key={r.id} title={r.name} imgUrl={r.poster_path} onClick={() => goToShow(r.id)} />
          ))}
      </div>
    </>
  );
};

export default Shows;
