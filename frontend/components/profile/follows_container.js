import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FollowsItem from './follows_item';
import {
  followUser, unfollowUser, fetchUser, fetchUserFollowers,
   fetchUserFollowing, } from '../../actions/profile/profile_actions';
import { requestWorkouts } from '../../actions/workouts/workout_actions';

const mapStateToProps = (state, ownProps) => {

  return {
    user: ownProps.user,
    currentUser: state.session.currentUser,
    currentFollows: state.viewedUsers.currentFollows,
    otherFollows: state.viewedUsers.otherFollows,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    followUser: id => dispatch(followUser(id)),
    unfollowUser: id => dispatch(unfollowUser(id)),
    fetchUser: id => dispatch(fetchUser(id)),
    fetchUserFollowers: id => dispatch(fetchUserFollowers(id)),
    fetchUserFollowing: id => dispatch(fetchUserFollowing(id)),
    requestWorkouts: (page, id) => dispatch(requestWorkouts(page, id)),
    
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FollowsItem));
