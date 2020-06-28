import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import useApi from 'utils/hooks/api/useApi';
import routes, { generateLink } from 'utils/routes';
import { CenteredContent, Details, Loader } from 'components';
import { API_ENDPOINTS } from 'utils/constants';

const Movie = () => {
  const { id } = useParams();
  const [{ result, loading }] = useApi(API_ENDPOINTS.MOVIE(id));
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
      title={result?.title}
      genres={result?.genres || []}
      overview={result?.overview}
      video={result?.videos.results[0]}
      onReturn={onReturn}
    />
  );
};

export default Movie;
