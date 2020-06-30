import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import routes, { generateLink } from 'utils/routes';
import { useApi } from 'utils/hooks/api';
import { CenteredContent, Details, Loader } from 'components';
import { API_ENDPOINTS, VIDEO_TYPES } from 'utils/constants';

const Show = () => {
  const { id } = useParams();
  const [{ result, loading }]: Array<any> = useApi(API_ENDPOINTS.TV_SHOW(id));
  const history = useHistory();

  const onReturn = () => history.push(generateLink(routes.ROOT));

  return loading ? (
    <CenteredContent>
      <Loader />
    </CenteredContent>
  ) : (
    <Details
      backdropImg={result?.backdrop_path}
      posterImg={result?.poster_path}
      title={result?.name}
      genres={result?.genres || []}
      overview={result?.overview}
      video={result?.videos?.results.find((v: any) => v.type === VIDEO_TYPES.TRAILER)}
      rating={result?.vote_average > 0 ? result?.vote_average : null}
      onReturn={onReturn}
    />
  );
};

export default Show;
