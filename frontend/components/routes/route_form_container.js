import { connect } from 'react-redux';
import RouteForm from './route_form';
import { createRoute } from '../../actions/routes/route_actions';

const mapStateToProps = state => {
  return {
    isOpen: state.ui["isOpen"]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createRoute: route => dispatch(createRoute(route))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RouteForm);
