import { RECEIVE_WORKOUT_ERRORS, CLEAR_ERRORS } from '../actions/workouts/workout_actions';

const workoutErrorsReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_WORKOUT_ERRORS:
      return action.errors.responseJSON;
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};

export default workoutErrorsReducer;
