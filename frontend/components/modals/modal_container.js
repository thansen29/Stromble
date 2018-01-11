import { connect } from 'react-redux';
import ModalComponent from './modal_component';
import { closeModal } from '../../actions/modals/modal_actions';

const mapStateToProps = state => {
  return {
    isOpen: state.ui.modal["isOpen"]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalComponent);
