import { RECEIVE_USER, UPDATE_FOLLOWS } from '../actions/profile/profile_actions';

const defaultState = {
  viewedUser: null,
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case RECEIVE_USER:
      return {
        user: action.user,
      };
    case UPDATE_FOLLOWS:
      debugger
      break;
    default:
      return state;
  }
};

export default userReducer;
