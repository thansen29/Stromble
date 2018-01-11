import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util.jsx';
import { Route, Switch } from 'react-router-dom';
import loginContainer from './session/login_container';
import landingContainer from './session/landing_container';
import dashboardContainer from './dashboard/dashboard_container';
import workoutContainer from './workouts/workout_container';
import workoutShowContainer from './workouts/workout_show_container';
import allWorkoutsContainer from './workouts/all_workouts_container';
import ModalContainer from './modals/modal_container';
// import SearchContainer from './routes/search_container';
import RouteContainer from './routes/route_container';
import AllRoutesContainer from './routes/all_routes_container';
// import createProfileContainer from './dashboard/create_profile_container';
// import DropdownComponent from './dropdowns/dropdown_component';
//TODO: refactor - add stats container here and dont pass props down to run and  ride comps
const App = (props) => (
  <div>
    <Switch>
      <Route path="/routes/new" component={RouteContainer}></Route>
      <Route exact path="/routes" component={AllRoutesContainer}></Route>
    </Switch>
    <Route path="/login" component={loginContainer}></Route>
    <Route exact path="/" component={landingContainer}></Route>
    <ProtectedRoute path="/dashboard" component={dashboardContainer}></ProtectedRoute>
    <Switch>
      <ProtectedRoute path="/workouts/new" component={workoutContainer}></ProtectedRoute>
      <ProtectedRoute path="/workouts/:id" component={workoutShowContainer}></ProtectedRoute>
      <ProtectedRoute exact path="/workouts" component={allWorkoutsContainer}></ProtectedRoute>
    </Switch>
  </div>
);

export default App;
