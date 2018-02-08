import * as ProfileAPIUtil from '../../util/profile_util';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_USER = 'RECEIVE_USER';
export const UPDATE_FOLLOWS = 'UPDATE_FOLLOWS';

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

//need to make sure it goes in to the current user's following stuff
export const updateFollows = (user, otherId) => {
  debugger
  return {
    type: UPDATE_FOLLOWS,
    user,
    id: otherId
  };
};

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

export const toggleFollow = (otherId) => dispatch => {
  return ProfileAPIUtil.toggleFollow(otherId).then((user) => {
    dispatch(receiveCurrentUser(user));
    // dispatch(updateFollows(user, other));
  });
};
