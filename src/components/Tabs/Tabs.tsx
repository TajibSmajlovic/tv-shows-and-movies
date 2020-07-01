import React from 'react';

import classes from './Tabs.module.css';

interface Props {
  Search: React.ReactNode;
  selected: string;
  handleClick: (key: string) => void;
  children: any;
}

const Tabs: React.FC<Props> = ({ Search, selected, handleClick, children }) => {
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

      {Search && Search}

      {children &&
        children.map((elem: any, index: number) => {
          const { label, tabKey, showTitle = false } = elem.props;

          return (
            <div key={index} className={selected !== tabKey ? classes.none : ''}>
              {showTitle && <h1 className={classes.title}>{label}</h1>}

              {children[index]}
            </div>
          );
        })}
    </div>
  );
};

export default Tabs;
