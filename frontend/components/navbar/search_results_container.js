import { connect } from 'react-redux';
import SearchResults from './search_results';
import { search } from '../../actions/search/search_actions';
import { toArray } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  let searchType;
  if(ownProps.location.pathname.includes('athlete')){
    searchType = 'athlete';
  }

  return {
    name: ownProps.location.search.slice(1),
    searchType,
    foundUsers: toArray(state.viewedUsers.foundUsers)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    search: (type, text) => dispatch(search(type, text))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
