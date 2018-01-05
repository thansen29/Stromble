import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util.jsx';
import { Route } from 'react-router-dom';
import loginContainer from './session/login_container';
import landingContainer from './session/landing_container';
import dashboardContainer from './dashboard/dashboard_container';
import workoutContainer from './workouts/workout_container';
import { closeDropdown } from '../actions/dropdowns/dropdown_actions';
import DropdownComponent from './dropdowns/dropdown_component';

const App = () => (
  <div onClick={closeDropdown}>
    <DropdownComponent />
    <Route path="/login" component={loginContainer}></Route>
    <Route exact path="/" component={landingContainer}></Route>
    <ProtectedRoute path="/dashboard" component={dashboardContainer}></ProtectedRoute>
    <ProtectedRoute path="/workouts/new" component={workoutContainer}></ProtectedRoute>
  </div>
);

export default App;
