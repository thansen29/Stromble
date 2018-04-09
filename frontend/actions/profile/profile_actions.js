import * as ProfileAPIUtil from '../../util/profile_util';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_FOLLOWERS = 'RECEIVE_FOLLOWERS';
export const RECEIVE_FOLLOWING = 'RECEIVE_FOLLOWING';
export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const RECEIVE_UNFOLLOW = 'RECEIVE_UNFOLLOW';
export const RECEIVE_LIKE = 'RECEIVE_LIKE';

export const receiveCurrentUser = user => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  };
};

export const receiveUser = user => {
  return {
    type: RECEIVE_USER,
    user
  };
};

export const receiveFollowers = users => {
  return {
    type: RECEIVE_FOLLOWERS,
    users
  };
};

export const receiveFollowing = users => {
  return {
    type: RECEIVE_FOLLOWING,
    users
  };
};

export const receiveFollow = followData => {
  return {
    type: RECEIVE_FOLLOW,
    followData
  };
};

export const receiveUnfollow = followData => {
  return {
    type: RECEIVE_UNFOLLOW,
    followData
  };
};

export const receiveLike = likeData => ({
  type: RECEIVE_LIKE,
  likeData
});

export const fetchUser = id => dispatch => {
  return ProfileAPIUtil.fetchUser(id).then((user) => {
    dispatch(receiveUser(user));
  });
};

export const updateUser = (formData) => dispatch => {
  return ProfileAPIUtil.updateUser(formData).then((user) => {
    dispatch(receiveUser(user));
  });
};

export const followUser = (userToFollowId) => dispatch => {
  return ProfileAPIUtil.followUser(userToFollowId).then((payload) => {
    dispatch(receiveFollow(payload));
  });
};

export const unfollowUser = (userToUnfollowId) => dispatch => {
  return ProfileAPIUtil.unfollowUser(userToUnfollowId).then((payload) => {
    dispatch(receiveUnfollow(payload));
  });
};

export const fetchUserFollowers = (id) => dispatch => {
  return ProfileAPIUtil.fetchUserFollowers(id).then((followers) => {
    dispatch(receiveFollowers(followers));
  });
};

export const fetchUserFollowing = (id) => dispatch => {
  return ProfileAPIUtil.fetchUserFollowing(id).then((following) => {
    dispatch(receiveFollowing(following));
  });
};

export const likeWorkout = id => dispatch => {
  return ProfileAPIUtil.likeWorkout(id).then((payload) => {
    dispatch(receiveLike(payload));
  });
};
