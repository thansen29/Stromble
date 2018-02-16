import {
  RECEIVE_USER, RECEIVE_FOLLOWERS, RECEIVE_FOLLOWING, RECEIVE_FOLLOW, RECEIVE_UNFOLLOW
} from '../actions/profile/profile_actions';
import { RECEIVE_FOUND_USERS } from '../actions/search/search_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session/session_actions';
import merge from 'lodash/merge';

const defaultState = {
  viewedUser: null,
  foundUsers: null,
  followers: null,
  following: null,
  currentFollows: null,
  otherFollows: null
};

const userReducer = (state = defaultState, action) => {
  let newState;
  let otherState = merge({}, state);

  switch (action.type) {
    case RECEIVE_USER:
      newState = Object.assign({}, state);
      newState.viewedUser = action.user;
      return newState;

    case RECEIVE_CURRENT_USER:
      newState = Object.assign({}, state, { currentUser: action.user } );
      return newState;
    case RECEIVE_FOUND_USERS:
      newState = Object.assign({}, state);
      newState.foundUsers = action.foundUsers.users;
      return newState;

    //might need to adjust this
    case RECEIVE_FOLLOWERS:
      return Object.assign({}, state, { followers: action.users });

    case RECEIVE_FOLLOWING:
      return Object.assign({}, state, { following: action.users });

    case RECEIVE_FOLLOW: {
      const otherFollows = action.followData.other_follows;
      const currentFollows = action.followData.current;
      otherState.otherFollows = otherFollows;
      otherState.currentFollows = currentFollows;
      return otherState;
    }
    
    case RECEIVE_UNFOLLOW:
      const otherFollows = action.followData.other_follows;
      const currentFollows = action.followData.current;
      otherState.otherFollows = otherFollows;
      otherState.currentFollows = currentFollows;
      return otherState;
    default:
      return state;
  }
};

export default userReducer;
