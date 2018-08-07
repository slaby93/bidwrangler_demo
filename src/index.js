import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import './utils/firebase';
import store, { history } from './store/store';
import Router from './routes/router';
import './globalStyles';
import { NODE_ENV, ENVIROMENTS } from './consts/environment';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Router />
    </ConnectedRouter>
  </Provider>
  , document.getElementById('app'),
);
removeInitialLoader();

if (NODE_ENV === ENVIROMENTS.PRODUCTION && 'serviceWorker' in navigator) {
  installServiceWorker();
}

function removeInitialLoader() {
  /**
   * This is fix for IE11
   * Previously: document.getElementById('loader').remove();
   * IE11 rocks <3
   */
  const element = document.getElementById('loader');
  element.parentNode.removeChild(element);
}

function installServiceWorker() {
  window.addEventListener('load', async () => {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js');
      console.info('ServiceWorker registration successful with scope: ', registration.scope);
    } catch (err) {
      console.error('ServiceWorker registration failed: ', err);
    }
  });
}
