import * as ProfileAPIUtil from '../../util/profile_util';
export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUser = user => {
  return {
    type: RECEIVE_USER,
    user
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
