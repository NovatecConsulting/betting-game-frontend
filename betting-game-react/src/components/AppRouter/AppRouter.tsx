import React from 'react';
import { Redirect, Route, RouteProps, Switch } from 'react-router-dom';

import routes, { MATCHES } from '../../config/routes';

const AppRouter: React.FC = () => (
  <Switch>
    {routes.map((route: RouteProps, index: number) => (
      <Route key={index} exact path={route.path} component={route.component} />
    ))}
    <Redirect to={MATCHES.path} />
  </Switch>
);

export default AppRouter;
