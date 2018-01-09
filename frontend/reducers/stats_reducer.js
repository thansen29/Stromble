import { RECEIVE_RUN_DISTANCE, RECEIVE_RIDE_DISTANCE, RECEIVE_LONGEST_DISTANCE, RECEIVE_LONGEST_DURATION, RECEIVE_TOTAL_RUNS, RECEIVE_TOTAL_RIDES, RECEIVE_FASTED_SPEED } from '../actions/statistics/workout_totals';

// const defaultState = {
//   runDistance: null,
//   rideDistance: null,
//   longestDistance: null,
//   longestDuration: null,
//   numRuns: null,
//   numRides: null,
//   fastedSpeed: null
// };

const statsReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_RUN_DISTANCE:
      newState = Object.assign({}, state, action.distance );
      return newState;
    case RECEIVE_RIDE_DISTANCE:
      newState = Object.assign({}, state, action.distance );
      return newState;
    case RECEIVE_LONGEST_DISTANCE:
      newState = Object.assign({}, state, action.distance);
      return newState;
    case RECEIVE_LONGEST_DURATION:
      newState = Object.assign({}, state, action.duration);
      return newState;
    case RECEIVE_TOTAL_RUNS:
      newState = Object.assign({}, state, action.total);
      return newState;
    case RECEIVE_TOTAL_RIDES:
      newState = Object.assign({}, state, action.total);
      return newState;
    case RECEIVE_FASTED_SPEED:
      newState = Object.assign({}, state, action.speed );
      return newState;
    default:
      return state;

  }
};

export default statsReducer;
