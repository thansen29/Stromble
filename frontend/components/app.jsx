import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util.jsx';
import { Route } from 'react-router-dom';
import loginContainer from './session/login_container';

const App = () => (
  <div>
    <header>
      <h1>Stromble</h1>
    </header>

    {<AuthRoute path="/login" component={loginContainer}></AuthRoute>}
  </div>
);

export default App;
