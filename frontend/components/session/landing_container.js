import { connect } from 'react-redux';
import LandingIndex from './landing_index';
import { signup, clearErrors } from '../../actions/session/session_actions';

const mapStateToProps = state => {
  return {
    errors: state.errors.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signup: user => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingIndex);
