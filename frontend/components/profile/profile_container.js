import React from 'react';
import { connect } from 'react-redux';
import UserProfile from './user_profile';

const mapStateToProps = state => {
  return {
    id: state.session.currentUser.id
  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
