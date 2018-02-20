import { RECEIVE_CURRENT_USER } from '../actions/session/session_actions';
import { RECEIVE_USER } from '../actions/profile/profile_actions';


const defaultState = {
  currentUser: null,
  errors: []
};

const sessionReducer = (state = defaultState, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState = Object.assign({}, state, { currentUser: action.user } );
      return newState;
    case RECEIVE_USER:
      if(state.currentUser.id === action.user.id) {
        newState = Object.assign({}, state, { currentUser: action.user } );
        return newState;
      } else {
        return state;
      }

    default:
      return state;
  }
};

export default sessionReducer;
