import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import uiReducer from './ui_reducer';
import workoutReducer from './workout_reducer';
import routeReducer from './route_reducer';
import statsReducer from './stats_reducer';
import userReducer from './user_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  workout: workoutReducer,
  route: routeReducer,
  stats: statsReducer,
  errors: errorsReducer,
  ui: uiReducer,
  viewedUser: userReducer
});

export default rootReducer;
