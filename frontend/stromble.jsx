import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root.jsx';
import { signup, login, logout } from './actions/session/session_actions';


document.addEventListener("DOMContentLoaded", () => {
  // let store;
  // if (window.currentUser) {
  //   const preloadedState = { session: { currentUser: window.currentUser } };
  //   store = configureStore(preloadedState);
  //
  //   delete window.currentUser;
  //
  // } else {
  //   store = configureStore;
  // }
  const store = configureStore();
  window.dispatch = store.dispatch;
  window.getState = store.getState;
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  const root = document.getElementById("root");
  // ReactDOM.render(<Root store={store} />, root);
  ReactDOM.render(<Root store={store} />, root);
});
