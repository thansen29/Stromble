import { RECEIVE_USER, UPDATE_FOLLOWS } from '../actions/profile/profile_actions';

const defaultState = {
  viewedUser: null,
};

const userReducer = (state = defaultState, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_USER:
      return {
        user: action.user,
      };
    case UPDATE_FOLLOWS:
    // newState = Object.assign({}, state);
    // newState.user.followers.push({ follower_id: action.id });
    // return newState;
    default:
      return state;
  }
};

export default userReducer;
