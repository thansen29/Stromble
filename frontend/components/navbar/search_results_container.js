import { connect } from 'react-redux';
import SearchResults from './search_results';
import { search } from '../../actions/search/search_actions';
import { toArray } from '../../reducers/selectors';
import { toggleFollow } from '../../actions/profile/profile_actions';
import { requestTotalRuns, requestTotalRides } from '../../actions/statistics/workout_totals';
import { closeModal } from '../../actions/modals/modal_actions';


const mapStateToProps = (state, ownProps) => {
  let searchType;
  if(ownProps.location.pathname.includes('athlete')){
    searchType = 'athlete';
  }

  return {
    name: ownProps.location.search.slice(1),
    searchType,
    foundUsers: toArray(state.viewedUsers.foundUsers),
    currentUserId: state.session.currentUser.id,
    stats: state.stats
  };
};

const mapDispatchToProps = dispatch => {
  return {
    search: (type, text) => dispatch(search(type, text)),
    toggleFollow: (id) => dispatch(toggleFollow(id)),
    requestTotalRuns: (id) => dispatch(requestTotalRuns(id)),
    requestTotalRides: (id) => dispatch(requestTotalRides(id)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
