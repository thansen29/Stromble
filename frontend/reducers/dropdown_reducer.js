import { OPEN_DROPDOWN, CLOSE_DROPDOWN } from '../actions/dropdowns/dropdown_actions';

const defaultState = {
  component: null
};

const dropdownReducer = (state = defaultState, action) => {
  switch (action.type) {
    case OPEN_DROPDOWN:
      return { component: [action.component] };
    case CLOSE_DROPDOWN:
      return defaultState;
    default:
      return state;
  }
};

export default dropdownReducer;
