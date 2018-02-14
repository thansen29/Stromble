import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FollowsItem from './follows_item';
import { toggleFollow, fetchUser } from '../../actions/profile/profile_actions';

const mapStateToProps = (state, ownProps) => {

  return {
    user: ownProps.user,
    currentUserId: state.session.currentUser.id,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleFollow: (id) => dispatch(toggleFollow(id)),
    fetchUser: (id) => dispatch(fetchUser(id))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FollowsItem));
