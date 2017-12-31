import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root.jsx';


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
  const root = document.getElementById("root");
  // ReactDOM.render(<Root store={store} />, root);
  ReactDOM.render(<Root />, root);
});