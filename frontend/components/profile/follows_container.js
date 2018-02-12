import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FollowItem from './follows_item';
import { toggleFollow } from '../../actions/profile/profile_actions';

const mapStateToProps = (state, ownProps) => {

  return {
    user: ownProps.user,
    currentUserId: state.session.currentUser.id,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleFollow: (id) => dispatch(toggleFollow(id))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FollowItem));
