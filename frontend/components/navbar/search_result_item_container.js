import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SearchResultItem from './search_result_item';
import { toggleFollow } from '../../actions/profile/profile_actions';
import { search } from '../../actions/search/search_actions';
import { requestTotalRuns, requestTotalRides } from '../../actions/statistics/workout_totals';

const mapStateToProps = (state, ownProps) => {
  let searchType;
  if(ownProps.location.pathname.includes('athlete')){
    searchType = 'athlete';
  }

  return {
    user: ownProps.user,
    currentUserId: state.session.currentUser.id,
    searchType,
    name: ownProps.location.search.slice(1),
    stats: state.stats
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleFollow: (id) => dispatch(toggleFollow(id)),
    search: (type, text) => dispatch(search(type, text)),
    requestTotalRuns: (id) => dispatch(requestTotalRuns(id)),
    requestTotalRides: (id) => dispatch(requestTotalRides(id))

  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchResultItem));
