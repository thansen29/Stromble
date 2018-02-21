import { RECEIVE_CURRENT_USER } from '../actions/session/session_actions';
import { RECEIVE_USER, RECEIVE_LIKE } from '../actions/profile/profile_actions';


const defaultState = {
  currentUser: null,
  errors: [],
  likes: []
};

const sessionReducer = (state = defaultState, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState = Object.assign({}, state);
      newState.currentUser = action.user;
      return newState;
    case RECEIVE_USER:
      if(state.currentUser.id === action.user.id) {
        newState = Object.assign({}, state);
        newState.currentUser = action.user;
        return newState;
      } else {
        return state;
      }
    case RECEIVE_LIKE:
      newState = Object.assign({}, state);
      newState.likes.push(action.likeData.workoutId);
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;
