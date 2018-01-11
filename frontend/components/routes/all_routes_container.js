import { connect } from 'react-redux';
import AllRoutes from './all_routes';
import { requestRoutes } from '../../actions/routes/route_actions';

const mapStateToProps = state => {
  return {
    routes: Object.values(state.route.routes)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestRoutes: () => dispatch(requestRoutes())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllRoutes);
