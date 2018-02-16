import * as SearchAPIUtil from '../../util/search_api_util';
export const RECEIVE_FOUND_USERS = 'RECEIVE_USERS';
export const OPEN_SEARCH = 'OPEN_SEARCH';
export const CLOSE_SEARCH = 'CLOSE_SEARCH';

export const receiveFoundUsers = users => {
  return {
    type: RECEIVE_FOUND_USERS,
    foundUsers: users
  };
};

export const openSearch = () => {
  return {
    type: OPEN_SEARCH
  };
};

export const closeSearch = () => {
  return {
    type: CLOSE_SEARCH
  };
};

export const search = (type, text) => dispatch => {
  return SearchAPIUtil.search(type, text).then((users) => {
    dispatch(receiveFoundUsers(users));
  });
};
