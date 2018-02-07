import React from 'react';
import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { updateAvatar } from '../../actions/session/session_actions';

const mapStateToProps = state => {
  return {
    id: state.session.currentUser.id,
    avatarUrl: state.session.currentUser.avatar_url
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateAvatar: (formData) => dispatch(updateAvatar(formData))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
