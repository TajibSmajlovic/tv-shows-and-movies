import { useState, useEffect, useCallback } from 'react';

import API, { getData } from 'utils/apiConfig';
import { HTTP_VERBS } from 'utils/constants';

const useApi = (url: string, { initialFetch = true, client = API, verb = HTTP_VERBS.GET } = {}) => {
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<any>(initialFetch);

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

  const fetch = useCallback(async () => {
    setLoading(true);

    try {
      const response = await execute();
      const items = getData(response);

      setResult(items);
      setError(null);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err);
    }
  }, [execute]);

  useEffect(() => {
    if (initialFetch) {
      fetch();
    }
  }, [url, fetch, initialFetch]);

  return [{ result, loading, error }, fetch, setResult];
};

export default useApi;
