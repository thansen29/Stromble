import { connect } from 'react-redux';
import RouteForm from './route_form';
import { createRoute } from '../../actions/routes/route_actions';
import { closeModal } from '../../actions/modals/modal_actions';

const mapStateToProps = (state) => {
  return {
    isOpen: state.ui["isOpen"],
    errors: state.errors.route
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createRoute: route => dispatch(createRoute(route)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RouteForm);
