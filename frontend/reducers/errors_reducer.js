import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import workoutErrorsReducer from './workout_errors_reducer';
import routeErrorsReducer from './route_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  workout: workoutErrorsReducer,
  route: routeErrorsReducer
});

export default errorsReducer;
