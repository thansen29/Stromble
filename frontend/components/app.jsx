import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util.jsx';
import { Route } from 'react-router-dom';
import loginContainer from './session/login_container';
// <header>
//   <h1>Stromble</h1>
// </header>

const App = () => (
  <div>
    {<AuthRoute exact path="/login" component={loginContainer}></AuthRoute>}
  </div>
);

export default App;
