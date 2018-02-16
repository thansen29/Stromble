import * as ProfileAPIUtil from '../../util/profile_util';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const RECEIVE_UNFOLLOW = 'RECEIVE_UNFOLLOW';

// export const UPDATE_FOLLOWS = 'UPDATE_FOLLOWS';

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

export const receiveUsers = users => {
  return {
    type: RECEIVE_USERS,
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



// export const updateFollows = (user) => {
//   return {
//     type: UPDATE_FOLLOWS,
//     id: user.id
//   };
// };

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
    dispatch(receiveUsers(followers));
  });
};

export const fetchUserFollowing = (id) => dispatch => {
  return ProfileAPIUtil.fetchUserFollowing(id).then((following) => {
    dispatch(receiveUsers(following));
  });
};



// export const toggleFollow = (otherId) => dispatch => {
//   return ProfileAPIUtil.toggleFollow(otherId).then((user) => {
//     dispatch(receiveCurrentUser(user));
//     // dispatch(updateFollows(user));
//   });//.then(() => {
//   //   console.log('here');
//   //   fetchUser(otherId);
//   // });
// };
