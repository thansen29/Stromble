import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session/session_actions';

const defaultState = {
  currentUser: null,
  errors: []
};

const sessionReducer = (state = defaultState, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        currentUser: { [action.user.id]: action.user },
        errors: []
      };
    default:
      return state;
  }
};

export default sessionReducer;
