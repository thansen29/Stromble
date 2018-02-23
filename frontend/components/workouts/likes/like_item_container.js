import { connect } from 'react-redux';
import LikeItem from './like_item';
import _ from 'lodash';
import { fetchUserFollowers, fetchUserFollowing,
followUser} from '../../../actions/profile/profile_actions';

export const mapStateToProps = (state, ownProps) => {
  let followers;
  if(state.viewedUsers.followers){
    followers = Object.keys(state.viewedUsers.followers);
  }

  return {
    user: ownProps.user,
    title: ownProps.title,
    currentUser: state.session.currentUser,
    followers,
    currentFollowing: state.session.currentUser.following
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    fetchUserFollowers: id => dispatch(fetchUserFollowers(id)),
    fetchUserFollowing: id => dispatch(fetchUserFollowing(id)),
    followUser: id => dispatch(followUser(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LikeItem);
