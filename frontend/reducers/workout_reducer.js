import { RECEIVE_WORKOUTS, RECEIVE_WORKOUT, REMOVE_WORKOUT } from '../actions/workouts/workout_actions';

const defaultState = {
  workouts: {},
  activeWorkout: null
};

const workoutReducer = (state = defaultState, action) => {
  let newState;
  let newWorkoutList;
  switch (action.type) {
    case RECEIVE_WORKOUTS:
      newWorkoutList = Object.assign({}, state.workouts, action.workouts);
      newState = Object.assign({}, state, {workouts: newWorkoutList});
      return newState;
      // return action.workouts;
    case RECEIVE_WORKOUT:
      // newState = Object.assign({}, state, {[action.workout.id]: action.workout } );
      newWorkoutList = Object.assign({}, state.workouts, {[action.workout.id]: action.workout });
      newState = Object.assign({}, state, {workouts: newWorkoutList, activeWorkout: action.workout.id});
      return newState;
    case REMOVE_WORKOUT:
      newState = Object.assign({}, state);
      delete newState.workouts[action.workoutId];
      newState.activeWorkout = null;
      return newState;
    default:
      return state;
  }
};

//TODO: change the remove workout

export default workoutReducer;



// workout: {
//   workouts: {
//     30: {}
//   },
//   activeWorkout: 30,
//   workoutLoading: true
// }
