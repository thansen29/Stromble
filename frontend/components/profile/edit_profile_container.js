import React from 'react';
import { connect } from 'react-redux';
import EditProfile from './edit_profile_form';
import { updateUser, fetchUser } from '../../actions/profile/profile_actions';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => {
  return {
    id: ownProps.match.params.id,
    user: state.viewedUser.user,
    currentUserId: state.session.currentUser.id.toString()
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateUser: (formData) => dispatch(updateUser(formData)),
    fetchUser: (id) => dispatch(fetchUser(id))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditProfile));
