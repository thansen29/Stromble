import { RECEIVE_USER } from '../actions/profile/profile_actions';

const defaultState = {
  viewedUser: null,
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case RECEIVE_USER:
      return {
        user: action.user,
      };
    default:
      return state;
  }
};

export default userReducer;
