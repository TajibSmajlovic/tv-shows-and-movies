import React from 'react';

import classes from './Tabs.module.css';

const Tabs: React.FC<{
  selected: string;
  handleClick: (key: string) => void;
  search: React.ReactNode;
  children: React.ReactNode | any;
}> = ({ selected, handleClick, search, children }) => {
  return (
    <div>
      <ul className={classes.tabs}>
        {children.map((elem: any, index: number) => {
          const { label, tabKey } = elem.props;

          return (
            <li
              key={index}
              className={selected === tabKey ? [classes.tab, classes.active].join(' ') : classes.tab}
              onClick={() => handleClick(tabKey)}
            >
              {label}
            </li>
          );
        })}
      </ul>

      {search && search}

      {children &&
        children.map((elem: any, index: number) => {
          const { label, tabKey } = elem.props;

          return (
            <div key={index} className={selected !== tabKey ? classes.none : ''}>
              <h1>{label}</h1>
              {children[index]}
            </div>
          );
        })}
    </div>
  );
};

export default Tabs;
