import { RECEIVE_USER } from '../actions/profile/profile_actions';
import { RECEIVE_USERS } from '../actions/search/search_actions';

const defaultState = {
  viewedUser: null,
  foundUsers: null
};

const userReducer = (state = defaultState, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_USER:
      newState = Object.assign({}, state);
      newState.viewedUser = action.user;
      return newState;
    case RECEIVE_USERS:
      newState = Object.assign({}, state);
      newState.foundUsers = action.foundUsers.users;
      return newState;
    default:
      return state;
  }
};

export default userReducer;
