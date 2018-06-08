import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Route, Redirect } from 'react-router-dom';
import { SiteNavigation } from '~/layout/SiteNavigation';
import { Home } from '~/features/Home';

const Authenticated: React.SFC<{}> = () => (
  <div>
    <SiteNavigation />
    <div style={{ margin: 15 }}>
      <Route exact path="/app/" render={() => <Redirect to="/app/home" />} />
      <Route path="/app/home" component={Home} />
    </div>
  </div>
);

export { Authenticated };
