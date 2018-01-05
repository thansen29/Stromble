import { OPEN_MODAL, CLOSE_MODAL } from '../actions/session/session_actions';

const defaultState = {
  "isOpen": false
};

const modalReducer = (state = defaultState, action) => {
  let newState;
  switch (action.type) {
    case OPEN_MODAL:
      newState = Object.assign({}, state);
      newState["isOpen"] = true;
      return newState;
    case CLOSE_MODAL:
      return defaultState;
    default:
      return state;
  }
};

export default modalReducer;
