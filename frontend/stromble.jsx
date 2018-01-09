import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root.jsx';
import { requestRoutes, requestRoute, createRoute, deleteRoute } from './actions/routes/route_actions';

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.dispatch = store.dispatch;
  window.getState = store.getState;

  window.requestRoutes = requestRoutes;
  window.requestRoute = requestRoute;
  window.createRoute = createRoute;
  window.deleteRoute = deleteRoute;

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});
