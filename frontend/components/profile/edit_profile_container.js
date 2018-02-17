import React from 'react';
import * as _ from 'lodash';
import { connect } from 'react-redux';
import EditProfile from './edit_profile_form';
import {
  updateUser, fetchUser, fetchUserFollowers, fetchUserFollowing,
  followUser, unfollowUser
} from '../../actions/profile/profile_actions';
import { requestWorkouts, clearWorkouts } from '../../actions/workouts/workout_actions';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => {
  return {
    id: ownProps.match.params.id,
    user: state.viewedUsers.viewedUser,
    currentUserId: state.session.currentUser.id.toString(),
    currentUser: state.session.currentUser,
    workouts: _.values(state.workout.workouts).reverse(),
    followers: state.viewedUsers.followers,
    following: state.viewedUsers.following
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateUser: (formData) => dispatch(updateUser(formData)),
    fetchUser: (id) => dispatch(fetchUser(id)),
    requestWorkouts: (page, id) => dispatch(requestWorkouts(page, id)),
    clearWorkouts: () => dispatch(clearWorkouts()),
    fetchUserFollowers: id => dispatch(fetchUserFollowers(id)),
    fetchUserFollowing: id => dispatch(fetchUserFollowing(id)),
    followUser: id => dispatch(followUser(id)),
    unfollowUser: id => dispatch(unfollowUser(id)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditProfile));
