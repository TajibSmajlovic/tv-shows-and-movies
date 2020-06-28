import { useState, useEffect, useCallback } from 'react';

import API, { getData } from 'utils/apiConfig';
import { HTTP_VERBS } from 'utils/constants';

const useApi = (url, { initialFetch = true, client = API, verb = HTTP_VERBS.GET, data = null } = {}) => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(initialFetch);

  const execute = useCallback(() => {
    let route = null;
    switch (verb) {
      case HTTP_VERBS.GET:
        route = client.get(url);
        break;
      default:
        route = client.get(url);
        break;
    }

    return route;
  }, [url, verb, client]);

  const fetch = useCallback(
    async obj => {
      setLoading(true);

      try {
        const response = await execute(obj || data);
        const items = getData(response);
        setResult(items);
        setError(null);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(err);
      }
    },
    [execute, data]
  );

  useEffect(() => {
    if (initialFetch) {
      fetch();
    }
  }, [url, fetch, initialFetch]);

  return [{ result, loading, error }, fetch, setResult];
};

export default useApi;
