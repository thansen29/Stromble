import { connect } from 'react-redux';
import LoginIndex from './login_index';
import { login, clearErrors, openModal, closeModal, signup } from '../../actions/session/session_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.session,
    ui: state.ui.modal['isOpen']
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
    signup: user => dispatch(signup(user)),
    openModal: () => dispatch(openModal()),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginIndex);
