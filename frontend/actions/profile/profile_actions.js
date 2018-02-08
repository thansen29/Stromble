import * as ProfileAPIUtil from '../../util/profile_util';
export const RECEIVE_USER = 'RECEIVE_USER';
export const UPDATE_FOLLOWS = 'UPDATE_FOLLOWS';

export const receiveUser = user => {
  return {
    type: RECEIVE_USER,
    user
  };
};

//need to make sure it goes in to the current user's following stuff
export const updateFollows = otherId => {
  return {
    type: UPDATE_FOLLOWS,
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

export const toggleFollow = (userId, otherId) => dispatch => {
  return ProfileAPIUtil.toggleFollow(userId, otherId).then(() => {
    dispatch(updateFollows(otherId));
  });
};
