import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util.jsx';
import { Route } from 'react-router-dom';
import loginContainer from './session/login_container';
import landingContainer from './session/landing_container';
// import dashboardContainer from './dashboard/dashboard_container';

const App = () => (
  <div>
    <AuthRoute path="/login" component={loginContainer}></AuthRoute>
    {/*make auth later*/}<Route exact path="/" component={landingContainer}></Route>
    {/*<ProtectedRoute exact path="/dashboard" component={dashboardContainer}></ProtectedRoute>*/}
  </div>
);

export default App;
