import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import classes from './Root.module.css';
import routes from 'utils/routes';
import { CenteredContent, Button } from 'components';

const Root: React.FC = () => {
  if (!window.navigator.onLine)
    return (
      <CenteredContent>
        <div className={classes.noInternet}>
          <h1>Check your internet connection!</h1>
          <Button isRounded onClick={() => window.location.reload()}>
            Reload
          </Button>
        </div>
      </CenteredContent>
    );

  return (
    <Switch>
      {Object.values(routes).map(r => (
        <Route key={r.id} path={r.path} exact={r.exact} component={r.Component} />
      ))}
      <Route path="*">
        <Redirect to={routes.ROOT.path} />
      </Route>
    </Switch>
  );
};

export default Root;
