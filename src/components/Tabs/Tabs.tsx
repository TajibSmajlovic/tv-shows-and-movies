import React from 'react';

import classes from './Tabs.module.css';

interface Props {
  selected: string;
  handleClick: (key: string) => void;
  search: React.ReactNode;
  children: any;
}

const Tabs: React.FC<Props> = ({ selected, handleClick, search, children }) => {
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
