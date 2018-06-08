import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Authenticated } from '~/layout/Authenticated';
import { Landing } from '~/features/Landing';
import { Login } from '~/features/Login';
import { NotFound } from '~/features/NotFound';

const Routes: React.SFC<{}> = () => (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/login" component={Login} />
    <Route path="/app" component={Authenticated} />
    <Route component={NotFound} />
  </Switch>
);

export { Routes };
