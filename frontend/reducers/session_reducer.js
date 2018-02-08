import { RECEIVE_CURRENT_USER } from '../actions/session/session_actions';
import { RECEIVE_USER } from '../actions/profile/profile_actions';


const defaultState = {
  currentUser: null,
  errors: []
};

const sessionReducer = (state = defaultState, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        currentUser: action.user,
        errors: []
      };
    default:
      return state;
  }
};

export default sessionReducer;
