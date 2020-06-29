import { useState, useEffect } from 'react';

import { DEBOUNCE_TIMEOUT } from 'utils/constants';

const useDebounce = (value: string, delay: number = DEBOUNCE_TIMEOUT) => {
  const [debouncedValue, setDebouncedValue] = useState<string>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
