import { OPEN_SEARCH, CLOSE_SEARCH } from '../actions/search/search_actions';

const defaultState = {
  "isOpen": false
};

const searchReducer = (state = defaultState, action) => {
  let newState;
  switch (action.type) {
    case OPEN_SEARCH:
      newState = Object.assign({}, state);
      newState["isOpen"] = true;
      return newState;
    case CLOSE_SEARCH:
      return defaultState;
    default:
      return state;
  }
};

export default searchReducer;
