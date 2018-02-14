import React from 'react';
import * as _ from 'lodash';
import { connect } from 'react-redux';
import EditProfile from './edit_profile_form';
import { updateUser, fetchUser } from '../../actions/profile/profile_actions';
import { requestWorkouts, clearWorkouts } from '../../actions/workouts/workout_actions';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => {
  return {
    id: ownProps.match.params.id,
    user: state.viewedUsers.viewedUser,
    currentUserId: state.session.currentUser.id.toString(),
    currentUser: state.session.currentUser,
    workouts: _.values(state.workout.workouts).reverse()
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateUser: (formData) => dispatch(updateUser(formData)),
    fetchUser: (id) => dispatch(fetchUser(id)),
    requestWorkouts: (page, id) => dispatch(requestWorkouts(page, id)),
    clearWorkouts: () => dispatch(clearWorkouts())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditProfile));
