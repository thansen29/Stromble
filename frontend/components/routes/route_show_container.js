import { connect } from 'react-redux';
import RouteShow from './route_show';
import { deleteRoute, requestRoute } from '../../actions/routes/route_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    route: state.route.routes[ownProps.match.params.id],
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteRoute: id => dispatch(deleteRoute(id)),
    requestRoute: id => dispatch(requestRoute(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RouteShow);
