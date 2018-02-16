import {
  RECEIVE_USER, RECEIVE_FOLLOWERS, RECEIVE_FOLLOWING, RECEIVE_FOLLOW, RECEIVE_UNFOLLOW
} from '../actions/profile/profile_actions';
import { RECEIVE_FOUND_USERS } from '../actions/search/search_actions';
import merge from 'lodash/merge';

const defaultState = {
  viewedUser: null,
  foundUsers: null,
  followers: null,
  following: null
};

const userReducer = (state = defaultState, action) => {
  let newState;
  let otherState = merge({}, state);

  switch (action.type) {
    case RECEIVE_USER:
      newState = Object.assign({}, state);
      newState.viewedUser = action.user;
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
      const {
        follower_id, followed_id
      } = action.followData;

      otherState[follower_id].following_ids.push(followed_id);
      return otherState;
    }
    case RECEIVE_UNFOLLOW:
      const {
        follower_id, followed_id
      } = action.followData;

      const followerIdx =
        otherState[followed_id].follower_ids.indexOf(follower_id);
      otherState[followed_id].follower_ids.splice(followerIdx, 1);

      if(otherState[follower_id]){
        const followedIdx =
          otherState[follower_id].following_ids.indexOf(followed_id);
        otherState[follower_id].following_ids.splice(followedIdx, 1);
      }
      return otherState;
    default:
      return state;
  }
};

export default userReducer;
