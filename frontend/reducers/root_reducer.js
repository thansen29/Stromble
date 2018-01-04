import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import uiReducer from './ui_reducer';
import workoutReducer from './workout_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  workout: workoutReducer,
  errors: errorsReducer,
  ui: uiReducer
});

export default rootReducer;
