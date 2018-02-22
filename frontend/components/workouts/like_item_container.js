import { connect } from 'react-redux';
import LikeItem from './like_item';
import _ from 'lodash';
import { fetchUserFollowers, fetchUserFollowing,
followUser, unfollowUser } from '../../actions/profile/profile_actions';

export const mapStateToProps = (state, ownProps) => {
  //NOTE: viewedUsers is not populated here.
  return {
    user: ownProps.user,
    title: ownProps.title,
    currentUser: state.session.currentUser,
    followers: state.viewedUsers.followers,
    following: state.viewedUsers.following,
    currentFollows: state.viewedUsers.currentFollows,
    otherFollows: state.viewedUsers.otherFollows,
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    fetchUserFollowers: id => dispatch(fetchUserFollowers(id)),
    fetchUserFollowing: id => dispatch(fetchUserFollowing(id)),
    followUser: id => dispatch(followUser(id)),
    unfollowUser: id => dispatch(unfollowUser(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LikeItem);
