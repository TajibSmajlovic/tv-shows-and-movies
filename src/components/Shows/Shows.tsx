import React, { useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import classes from './Shows.module.css';
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

const Shows: React.FC<Props> = ({ tabKey }) => {
  const history = useHistory();
  const [{ result, loading }, fetch]: Array<any> = useApi(API_ENDPOINTS.TOP_RATED_TV_SHOWS, { initialFetch: false });
  const { searchLoading, searchResult, selectedTab } = useApp();

  const goToShow = useCallback(
    (id: number) => {
      history.push(generateLink(routes.TV_SHOW, { id }));
    },
    [history]
  );

  useEffect(() => {
    if (selectedTab === tabKey) fetch();
  }, [fetch, selectedTab, tabKey]);

  return loading || searchLoading ? (
    <Loader />
  ) : (
    <div className={classes.wrapper}>
      {searchResult?.results ? (
        <SearchedData data={searchResult.results} onClick={goToShow} />
      ) : (
        result?.results &&
        firstTenElements(result?.results).map((r: any) => (
          <Card key={r.id} id={r.id} title={r.name} imgUrl={r.poster_path} onClick={goToShow} />
        ))
      )}
    </div>
  );
};

export default Shows;
