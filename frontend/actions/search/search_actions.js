import * as SearchAPIUtil from '../../util/search_api_util';
export const RECEIVE_USERS = 'RECEIVE_USERS';

export const receiveUsers = users => {
  return {
    type: RECEIVE_USERS,
    foundUsers: users
  };
};

export const search = (type, text) => dispatch => {
  return SearchAPIUtil.search(type, text).then((users) => {
    dispatch(receiveUsers(users));
  });
};
