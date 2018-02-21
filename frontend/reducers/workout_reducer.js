import {
	RECEIVE_WORKOUTS,
	RECEIVE_WORKOUT,
	REMOVE_WORKOUT,
	CLEAR_WORKOUTS,
  RECEIVE_LIKE,
  RECEIVE_UNLIKE
} from '../actions/workouts/workout_actions';

const defaultState = {
	workouts: {},
	activeWorkout: null,
  likeData: null
};

const workoutReducer = (state = defaultState, action) => {
	let newState;
	let newWorkoutList;
	switch (action.type) {
		case RECEIVE_WORKOUTS:
			newWorkoutList = Object.assign({}, state.workouts, action.workouts);
			newState = Object.assign({}, state, { workouts: newWorkoutList });
			return newState;
		case RECEIVE_WORKOUT:
			newWorkoutList = Object.assign({}, state.workouts, {
				[action.workout.id]: action.workout
			});
			newState = Object.assign({}, state, {
				workouts: newWorkoutList,
				activeWorkout: action.workout.id
			});
			return newState;
		case REMOVE_WORKOUT:
			newState = Object.assign({}, state);
			delete newState.workouts[action.workoutId];
			newState.activeWorkout = null;
			return newState;
		case CLEAR_WORKOUTS:
			return defaultState;
    case RECEIVE_LIKE:
      newState = Object.assign({}, state);
      newState.likeData = {
        user: action.likeData.user,
        likers: action.likeData.likers
      };
      return newState;
    case RECEIVE_UNLIKE:
      newState = Object.assign({}, state);
      newState.likeData = {
        user: action.likeData.user,
        likers: action.likeData.likers
      };
      return newState;
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
