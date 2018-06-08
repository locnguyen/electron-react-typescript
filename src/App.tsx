import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { Routes } from '~/Routes';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes />
      </Router>
    );
  }
}

const HotApp = hot(module)(App);

export { HotApp as App };
