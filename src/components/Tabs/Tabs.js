import React from 'react';

import classes from './Tabs.module.css';

const Tabs = ({ selected, handleClick, search, children }) => {
  return (
    <div>
      <ul className={classes.tabs}>
        {children.map((elem, index) => {
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
        children.map((elem, index) => {
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
