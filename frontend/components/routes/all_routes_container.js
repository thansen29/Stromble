import { connect } from 'react-redux';
import _ from 'lodash';
import AllRoutes from './all_routes';
import { requestRoutes } from '../../actions/routes/route_actions';

const mapStateToProps = state => {
  return {
    routes: _.values(state.route.routes).reverse()
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestRoutes: () => dispatch(requestRoutes())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllRoutes);
