import { connect } from 'react-redux';
import LandingIndex from './landing_index';
import { signup, clearErrors } from '../../actions/session/session_actions';
import { openModal, closeModal } from '../../actions/modals/modal_actions';

const mapStateToProps = state => {
  return {
    errors: state.errors.session,
    ui: state.ui.modal['isOpen']
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signup: user => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors()),
    openModal: () => dispatch(openModal()),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingIndex);
