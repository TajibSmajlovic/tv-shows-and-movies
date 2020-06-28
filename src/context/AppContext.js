import React, { createContext, useMemo, useState, useContext, useCallback } from 'react';

import { useSearch } from 'utils/hooks/api';
import { useDebounce } from 'utils/hooks';
import { EVENT_TAB_KEYS } from 'utils/constants';

const AppContext = createContext();

export const AppProvider = props => {
  // const [isInitialized, setIsInitialized] = useState(false);
  const [selectedTab, setSelectedTab] = useState(EVENT_TAB_KEYS.TV);
  const [inputValue, setInputValue] = useState('');
  const searchValue = useDebounce(inputValue);
  const { result: searchResult, loading: searchLoading } = useSearch(selectedTab, searchValue);

  const onSearchHandler = useCallback(
    e => {
      let keyword = e.target.value;

      if (keyword.length > 2) setInputValue(keyword);

      if (inputValue !== '' && keyword.length < 3) setInputValue('');
    },
    [setInputValue, inputValue]
  );

  // const initialize = useCallback(async () => {
  //   try {
  //     setIsInitialized(false);
  //   } catch (error) {
  //   } finally {
  //     setIsInitialized(true);
  //   }
  // }, []);

  // useEffect(() => {
  //   initialize();
  // }, [initialize]);

  const context = useMemo(
    () => ({ selectedTab, setSelectedTab, onSearchHandler, searchValue, searchLoading, searchResult }),
    [selectedTab, setSelectedTab, onSearchHandler, searchValue, searchLoading, searchResult]
  );

  // if (!isInitialized) return 'Loading...';

  return <AppContext.Provider value={context}>{props.children}</AppContext.Provider>;
};

export function useRoot() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error(`useRoot must be used within a RootProvider`);
  }
  return context;
}

export const Consumer = AppContext.Consumer;
