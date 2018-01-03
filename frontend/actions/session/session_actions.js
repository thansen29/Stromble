import * as SessionAPIUtil from '../../util/session_api_util';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = () => {
  return {
    type: OPEN_MODAL
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};

export const receiveCurrentUser = user => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  };
};

export const receiveErrors = errors => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};

export const signup = user => dispatch => {
  return SessionAPIUtil.signup(user).then((currentUser) => {
    dispatch(receiveCurrentUser(currentUser));
  }, (errors) => {
    dispatch(receiveErrors(errors));
  });
};

export const login = user => dispatch => {
  return SessionAPIUtil.login(user).then((currentUser) => {
    dispatch(receiveCurrentUser(currentUser));
  }, (errors) => {
    dispatch(receiveErrors(errors));

  });
};

export const logout = () => dispatch => {
  return SessionAPIUtil.logout().then(() => {
    dispatch(receiveCurrentUser(null));
  }, (errors) => {
    dispatch(receiveErrors(errors));
  });
};
