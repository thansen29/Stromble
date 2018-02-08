import React from 'react';
import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { updateUser, fetchUser } from '../../actions/profile/profile_actions';
import { toggleFollow } from '../../actions/profile/profile_actions';
import { checkFollowing } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  return {
    id: ownProps.match.params.id,
    user: state.viewedUser.user,
    currentUserId: state.session.currentUser.id.toString(),
    isFollowing: checkFollowing(state, ownProps)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateUser: (formData) => dispatch(updateUser(formData)),
    fetchUser: (id) => dispatch(fetchUser(id)),
    toggleFollow: (otherId) => dispatch(toggleFollow(otherId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
