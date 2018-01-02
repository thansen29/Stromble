import React from 'react';
import { withRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const Auth = ({component: Component, path, loggedIn}) => {
  return (
    <Route path={path} render={(props) => {
        return !loggedIn ? (
          <Component {...props} />
          ) : (
            <Redirect to="/" />
          );
      }} />
  );
};

const Protected = ({component: Component, path, loggedIn}) => {
  return (
    <Route path={path} render={(props) => {
      return loggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" /> //might need to change?
      );
    }} />
  );
};

const mapStateToProps = state => {
  return {
    loggedIn: Boolean(state.session.currentUser)
  };
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));
