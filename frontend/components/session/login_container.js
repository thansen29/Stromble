import { connect } from 'react-redux';
import loginForm from './login_form';
import { login } from '../../actions/session/session_actions';

const mapStateToProps = state => {
  return {
    errors: state.errors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: user => dispatch(login(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(loginForm);
