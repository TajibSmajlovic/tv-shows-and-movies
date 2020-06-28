import React from 'react';

import { Tabs, Search, Shows, Movies } from 'components';
import { useRoot } from 'context/AppContext';
import { EVENT_TAB_KEYS } from 'utils/constants';

const Events = () => {
  const { selectedTab, setSelectedTab, searchValue, onSearchHandler } = useRoot();

  return (
    <Tabs
      selected={selectedTab}
      handleClick={setSelectedTab}
      search={<Search value={searchValue} onChange={onSearchHandler} />}
    >
      <Movies label="Movies" tabKey={EVENT_TAB_KEYS.MOVIES} />
      <Shows label="Tv shows" tabKey={EVENT_TAB_KEYS.TV} />
    </Tabs>
  );
};
export default Events;
