import { useEffect } from 'react';

import { useApi } from 'utils/hooks/api';
import { API_ENDPOINTS } from 'utils/constants';

const useSearch = (key: string, searchValue: string) => {
  const [{ result, loading }, fetch, setResult]: Array<any> = useApi(API_ENDPOINTS.SEARCH(key, searchValue), {
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
