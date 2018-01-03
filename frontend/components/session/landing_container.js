import { connect } from 'react-redux';
import LandingIndex from './landing_index';
import { signup, clearErrors, openModal, closeModal } from '../../actions/session/session_actions';
import SignupForm from './signup_form';

const mapStateToProps = state => {
  return {
    errors: state.errors.session,
    ui: state.ui['is-open']
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

export default connect(mapStateToProps, mapDispatchToProps)(LandingIndex, SignupForm);
