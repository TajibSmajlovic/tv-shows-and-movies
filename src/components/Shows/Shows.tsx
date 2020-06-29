import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import classes from './Shows.module.css';
import routes, { generateLink } from 'utils/routes';
import { Loader, Card, SearchedData, CenteredContent } from 'components';
import { useApi } from 'utils/hooks/api';
import { firstTenElements } from 'utils/helpers';
import { useApp } from 'context/AppContext';
import { API_ENDPOINTS } from 'utils/constants';

const Shows: React.FC<{ tabKey: string; label: string; showTitle?: boolean }> = ({ tabKey }) => {
  const history = useHistory();
  const [{ result, loading }, fetch]: Array<any> = useApi(API_ENDPOINTS.TOP_RATED_TV_SHOWS, { initialFetch: false });
  const { searchLoading, searchResult, selectedTab } = useApp();

  const goToShow = (id: number) => history.push(generateLink(routes.TV_SHOW, { id }));

  useEffect(() => {
    if (selectedTab === tabKey) fetch();
  }, [fetch, selectedTab, tabKey]);

  return loading || searchLoading ? (
    <CenteredContent>
      <Loader />
    </CenteredContent>
  ) : (
    <div className={classes.wrapper}>
      {searchResult && searchResult.results ? (
        <SearchedData data={searchResult.results} onClick={goToShow} />
      ) : (
        result &&
        result.results &&
        firstTenElements(result?.results).map((r: any) => (
          <Card key={r.id} title={r.name} imgUrl={r.poster_path} onClick={() => goToShow(r.id)} />
        ))
      )}
    </div>
  );
};

export default Shows;
