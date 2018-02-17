import React from 'react';
import { connect } from 'react-redux';
import * as _ from 'lodash';
import UserProfile from './user_profile';
import { requestWorkouts, clearWorkouts } from '../../actions/workouts/workout_actions';
import {
  updateUser, fetchUser, fetchUserFollowers, fetchUserFollowing,
  followUser, unfollowUser
} from '../../actions/profile/profile_actions';

const mapStateToProps = (state, ownProps) => {
  // const array = state.session.currentUser.following;
  return {
    id: ownProps.match.params.id,
    user: state.viewedUsers.viewedUser,
    currentUserId: state.session.currentUser.id.toString(),
    workouts: _.values(state.workout.workouts).reverse(),
    currentUser: state.session.currentUser,
    followers: state.viewedUsers.followers,
    following: state.viewedUsers.following,
    currentFollows: state.viewedUsers.currentFollows,
    otherFollows: state.viewedUsers.otherFollows,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateUser: (formData) => dispatch(updateUser(formData)),
    fetchUser: (id) => dispatch(fetchUser(id)),
    fetchUserFollowers: id => dispatch(fetchUserFollowers(id)),
    fetchUserFollowing: id => dispatch(fetchUserFollowing(id)),
    followUser: id => dispatch(followUser(id)),
    unfollowUser: id => dispatch(unfollowUser(id)),
    requestWorkouts: (page, id) => dispatch(requestWorkouts(page, id)),
    clearWorkouts: () => dispatch(clearWorkouts())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
