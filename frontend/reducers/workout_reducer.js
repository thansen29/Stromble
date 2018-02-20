import { RECEIVE_WORKOUTS, RECEIVE_WORKOUT, REMOVE_WORKOUT, CLEAR_WORKOUTS } from '../actions/workouts/workout_actions';

const defaultState = {
  workouts: {},
  activeWorkout: { id: null, userId: null }
};

const workoutReducer = (state = defaultState, action) => {
  let newState;
  let newWorkoutList;
  switch (action.type) {
    case RECEIVE_WORKOUTS:
      newWorkoutList = Object.assign({}, state.workouts, action.workouts);
      newState = Object.assign({}, state, {workouts: newWorkoutList});
      return newState;
    case RECEIVE_WORKOUT:
      newWorkoutList = Object.assign({}, state.workouts, {[action.workout.id]: action.workout });
      newState = Object.assign({}, state,
        {workouts: newWorkoutList,
         activeWorkout: {id: action.workout.id, userId: action.workout.user_id } });
      return newState;
    case REMOVE_WORKOUT:
      newState = Object.assign({}, state);
      delete newState.workouts[action.workoutId];
      newState.activeWorkout = null;
      return newState;
    case CLEAR_WORKOUTS:
      return defaultState;
    default:
      return state;
  }
};

export default workoutReducer;



// workout: {
//   workouts: {
//     30: {}
//   },
//   activeWorkout: 30,
//   workoutLoading: true
// }
