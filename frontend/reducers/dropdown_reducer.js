import { OPEN_DROPDOWN, CLOSE_DROPDOWN } from '../actions/dropdowns/dropdown_actions';

const defaultState = {
  "isOpen": false
};

const dropdownReducer = (state = defaultState, action) => {
  let newState;
  switch (action.type) {
    case OPEN_DROPDOWN:
      newState = Object.assign({}, state);
      newState["isOpen"] = true;
      return newState;
    case CLOSE_DROPDOWN:
      return defaultState;
    default:
      return state;
  }
};

export default dropdownReducer;
