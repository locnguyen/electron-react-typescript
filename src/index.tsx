if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(
      registration => {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      },
      err => {
        // registration failed :(
        console.error('ServiceWorker registration failed: ', err);
      }
    );
  });
}

import 'babel-polyfill';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, RouteComponentProps } from 'react-router-dom';
import { App } from '~/App';
import '~/style.css';

ReactDOM.render(<App />, document.getElementById('app'));
