import * as SessionAPIUtil from '../../util/session_api_util';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

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

export const signup = user => dispatch => {
  return SessionAPIUtil.signup(user).then((currentUser) => {
    dispatch(receiveCurrentUser(currentUser));
  }, (errors) => {
    dispatch(receiveErrors(errors));
    //dispatch clear errors
  });
};

export const login = user => dispatch => {
  return SessionAPIUtil.login(user).then((currentUser) => {
    dispatch(receiveCurrentUser(currentUser));
  }, (errors) => {
    dispatch(receiveErrors(errors));
    //dispatch clear errors
    
  });
};

export const logout = () => dispatch => {
  return SessionAPIUtil.logout().then(() => {
    dispatch(receiveCurrentUser(null));
  }, (errors) => {
    dispatch(receiveErrors(errors));
  });
};
