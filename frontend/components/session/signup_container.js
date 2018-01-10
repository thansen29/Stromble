import { connect } from 'react-redux';
import SignupForm from './signup_form';
import { signup, clearErrors } from '../../actions/session/session_actions';
import { closeModal } from '../../actions/modals/modal_actions';

const mapStateToProps = state => {
  return {
    errors: state.errors.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signup: user => dispatch(signup(user)),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
