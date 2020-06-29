import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import routes from 'utils/routes';

const Root: React.FC = () => (
  <Switch>
    {Object.values(routes).map(r => (
      <Route key={r.id} path={r.path} exact={r.exact} component={r.Component} />
    ))}
    <Route path="*">
      <Redirect to={routes.ROOT.path} />
    </Route>
  </Switch>
);

export default Root;
