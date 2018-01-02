import { connect } from 'react-redux';
import SignupForm from './signup_form';
import { signup } from '../../actions/session/session_actions';

const mapStateToProps = state => {
<<<<<<< HEAD

=======
>>>>>>> Auth
  return {
    errors: state.errors.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signup: user => dispatch(signup(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
