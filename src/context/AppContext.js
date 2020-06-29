import React, { createContext, useMemo, useState, useContext, useCallback } from 'react';

import { useSearch } from 'utils/hooks/api';
import { useDebounce } from 'utils/hooks';
import { EVENT_TAB_KEYS } from 'utils/constants';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
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

  const context = useMemo(
    () => ({ selectedTab, setSelectedTab, onSearchHandler, searchValue, searchLoading, searchResult }),
    [selectedTab, setSelectedTab, onSearchHandler, searchValue, searchLoading, searchResult]
  );

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error(`useApp must be used within a AppProvider`);
  }
  return context;
}

export const Consumer = AppContext.Consumer;
