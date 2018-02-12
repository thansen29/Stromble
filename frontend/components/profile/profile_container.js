import React from 'react';
import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { updateUser, fetchUser, toggleFollow } from '../../actions/profile/profile_actions';
import { checkFollowing } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  const array = state.session.currentUser.following;
  const id = ownProps.match.params.id;
  return {
    id,
    user: state.viewedUsers.viewedUser,
    currentUserId: state.session.currentUser.id.toString(),
    isFollowing: checkFollowing(array, id)
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
