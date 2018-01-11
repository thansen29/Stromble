import { connect } from 'react-redux';
import RouteIndex from './route_index';
import { openModal } from '../../actions/modals/modal_actions';

const mapStateToProps = state => {
  return {
    userId: state.session.currentUser.id,
    isOpen: state.ui.modal["isOpen"]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openModal: () => dispatch(openModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RouteIndex);
