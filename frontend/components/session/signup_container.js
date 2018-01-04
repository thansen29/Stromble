import { connect } from 'react-redux';
import SignupForm from './signup_form';
import { signup, closeModal, clearErrors } from '../../actions/session/session_actions';

const mapStateToProps = state => {
  return {
    errors: state.errors.session,
    ui: state.ui["is-open"],
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
