import * as SessionAPIUtil from '../../util/session_api_util';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveCurrentUser = user => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  };
};

export const receiveErrors = errors => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

export const signup = user => dispatch => {
  return SessionAPIUtil.signup(user).then(currentUser => {
    // dispatch(receiveCurrentUser(currentUser));
    console.log("working");
  }, errors => {
    console.log("failing sign up");
    // dispatch(receiveErrors(errors));
  });
};

export const login = user => dispatch => {
  return SessionAPIUtil.login(user).then(currentUser => {
    console.log("logged in");
    // dispatch(receiveCurrentUser(currentUser));
  }, errors => {
    console.log("failing");
    // dispatch(receiveErrors(errors));
  });
};

export const logout = () => dispatch => {
  return SessionAPIUtil.logout().then(() => {
    // dispatch(receiveCurrentUser(null));
    console.log("logged out");
  }, errors => {
    // dispatch(receiveErrors(errors));
  });
};
