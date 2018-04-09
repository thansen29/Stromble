import { HashRouter } from 'react-router-dom';
import React from 'react';
import AppContainer from './app_container';
import { Provider } from 'react-redux';

const Root = ({ store }) => (
  <Provider store={ store }>
      <HashRouter>
        <AppContainer/>
      </HashRouter>
  </Provider>
);

export default Root;
