import { OPEN_MODAL, CLOSE_MODAL } from '../actions/session/session_actions';

const defaultState = {
  "is-open": false
};

const uiReducer = (state = defaultState, action) => {
  let newState;
  switch (action.type) {
    case OPEN_MODAL:
      newState = Object.assign({}, state);
      newState["is-open"] = true;
      return newState;
    case CLOSE_MODAL:
      return defaultState;
    default:
      return state;
  }
};

export default uiReducer;
