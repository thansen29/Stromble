import React from 'react';
import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { updateUser, fetchUser } from '../../actions/profile/profile_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    id: ownProps.match.params.id,
    user: state.viewedUser.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateUser: (formData) => dispatch(updateUser(formData)),
    fetchUser: (id) => dispatch(fetchUser(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
