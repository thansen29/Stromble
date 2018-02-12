import { UPDATE_LOADING } from '../actions/loading/loading_actions';

const defaultState = {
  "isLoading": true
};

const loadingReducer = (state = defaultState, action) => {
  let newState;
  switch (action.type) {
    case UPDATE_LOADING:
      newState = Object.assign({}, state);
      newState["isLoading"] = false;
      return newState;
    default:
      return state;
  }
};

export default loadingReducer;
