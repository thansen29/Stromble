import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util.jsx';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <header>
      <h1>Stromble</h1>
    </header>

    {/*<AuthRoute path="/login" component={SessionContainer}></AuthRoute>*/}
  </div>
);

export default App;
