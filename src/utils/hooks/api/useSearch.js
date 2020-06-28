import { useEffect } from 'react';

import useApi from 'utils/hooks/api/useApi';
import { API_ENDPOINTS } from 'utils/constants';

const useSearch = (key, searchValue) => {
  const [{ result, loading }, fetch, setResult] = useApi(API_ENDPOINTS.SEARCH(key, searchValue), {
    initialFetch: false,
  });

  useEffect(() => {
    if (searchValue.length > 2) fetch();

    return () => setResult(null);
  }, [searchValue, fetch, setResult]);

  useEffect(() => {
    if (result && !searchValue) setResult(null);
  }, [searchValue, result, setResult]);

  return { result, loading };
};

export default useSearch;
