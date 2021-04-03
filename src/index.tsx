import React from 'react';
import ReactDOM from 'react-dom';
// import whyDidYouRender from '@welldone-software/why-did-you-render';

import './index.css';
import * as serviceWorker from './serviceWorker';
import App from 'components/App/App';

// whyDidYouRender(React, {
//   onlyLogs: true,
//   titleColor: 'green',
//   diffNameColor: 'darkturquoise',
// });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
