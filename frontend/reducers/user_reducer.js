import {
  RECEIVE_USER,
  RECEIVE_FOLLOWERS,
  RECEIVE_FOLLOWING,
  RECEIVE_FOLLOW,
  RECEIVE_UNFOLLOW,
  RECEIVE_LIKE
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
  otherFollows: null,
  currentUserLikes: []
};

const userReducer = (state = defaultState, action) => {
  let newState;
  // let otherState = merge({}, state);

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

    case RECEIVE_FOLLOWERS:
      return Object.assign({}, state, { followers: action.users });

    case RECEIVE_FOLLOWING:
      return Object.assign({}, state, { following: action.users });

    case RECEIVE_FOLLOW: {
      newState = Object.assign({}, state);
      const otherFollows = action.followData.other_follows;
      const currentFollows = action.followData.current;
      newState.otherFollows = otherFollows;
      newState.currentFollows = currentFollows;
      return newState;
    }

    case RECEIVE_UNFOLLOW:
      newState = Object.assign({}, state);
      const otherFollows = action.followData.other_follows;
      const currentFollows = action.followData.current;
      newState.otherFollows = otherFollows;
      newState.currentFollows = currentFollows;
      return newState;
    case RECEIVE_LIKE:
      newState = Object.assign({}, state);
      newState.currentUserLikes.push(action.likeData.workoutId);
    default:
      return state;
  }
};

export default userReducer;
