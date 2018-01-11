import { connect } from 'react-redux';
import ModalComponent from './modal_component';
import { hideModal } from '../../actions/modals/modal_actions';

const mapStateToProps = state => {
  return {
    isOpen: state.ui.modal["isOpen"]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    hideModal: () => dispatch(hideModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalComponent);
