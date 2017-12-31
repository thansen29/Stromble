import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS } from '../actions/session/session_actions';

const sessionErrorsReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors.responseJSON;
    case RECEIVE_CURRENT_USER:
      return [];
    default:
      return state;
  }
};


export default sessionErrorsReducer;
