import {
	RECEIVE_WORKOUTS,
	RECEIVE_WORKOUT,
	REMOVE_WORKOUT,
	CLEAR_WORKOUTS,
	RECEIVE_COMMENT,
	REMOVE_COMMENT
} from '../actions/workouts/workout_actions';
import { RECEIVE_LIKE } from '../actions/profile/profile_actions';

const defaultState = {
	workouts: {},
	activeWorkout: null,
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
			const data = action.likeData;
			const currentWorkout = newState.workouts[data.workoutId];
			currentWorkout.liker_ids.push(data.likerId);
			if(currentWorkout.likers){
				currentWorkout.likers[data.liker.id] = data.liker;
			} else {
				currentWorkout['likers'] = [data.liker];
			}
      return newState;

		case RECEIVE_COMMENT:
			newState = Object.assign({}, state);
			const { workoutId, commentId, body, userId, avatarUrl, fname,
				 			lname } = action.commentData;

			const fullComment = { [commentId] :{
				avatarUrl, body, fname, lname, id: commentId, workoutId
			} };

			const comment = {
				avatarUrl, body, fname, lname, id: commentId, workoutId
			};
			if(newState.workouts[workoutId].comments){
				newState.workouts[workoutId].comments[commentId] = comment;
			} else {
				newState.workouts[workoutId]['comments'] = fullComment;
			}
			return newState;
		default:
			return state;
	}
};

export default workoutReducer;
