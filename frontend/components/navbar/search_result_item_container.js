import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SearchResultItem from './search_result_item';
import { fetchUserFollowers, fetchUserFollowing,
followUser, unfollowUser } from '../../actions/profile/profile_actions';
import { search } from '../../actions/search/search_actions';
import { requestTotalRuns, requestTotalRides } from '../../actions/statistics/workout_totals';

const mapStateToProps = (state, ownProps) => {
  let searchType;
  if(ownProps.location.pathname.includes('athlete')){
    searchType = 'athlete';
  }

  return {
    id: ownProps.match.params.id,
    user: ownProps.user,
    currentUserId: state.session.currentUser.id,
    currentUser: state.session.currentUser,
    searchType,
    name: ownProps.location.search.slice(1),
    stats: state.stats,
    followers: state.viewedUsers.followers,
    following: state.viewedUsers.following,
    currentFollows: state.viewedUsers.currentFollows,
    otherFollows: state.viewedUsers.otherFollows,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserFollowers: id => dispatch(fetchUserFollowers(id)),
    fetchUserFollowing: id => dispatch(fetchUserFollowing(id)),
    followUser: id => dispatch(followUser(id)),
    unfollowUser: id => dispatch(unfollowUser(id)),
    search: (type, text) => dispatch(search(type, text)),
    requestTotalRuns: (id) => dispatch(requestTotalRuns(id)),
    requestTotalRides: (id) => dispatch(requestTotalRides(id))

  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchResultItem));
