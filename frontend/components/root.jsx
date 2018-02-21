import { HashRouter } from 'react-router-dom';
import React from 'react';
import AppContainer from './app_container';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
// import persistor from '../store/store';

// <PersistGate loading={null} persistor={persistor}>
// </PersistGate>

const Root = ({ store }) => (
  <Provider store={ store }>
      <HashRouter>
        <AppContainer/>
      </HashRouter>
  </Provider>
);

export default Root;
