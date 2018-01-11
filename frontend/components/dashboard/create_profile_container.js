import { connect } from 'react-redux';
import CreateProfileForm from './create_profile_form';
import { updateUser } from '../../actions/session/session_actions';
import { closeModal } from '../../actions/modals/modal_actions';

const mapStateToProps = state => {
  return {
    ui: state.ui["isOpen"],
    errors: state.errors.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    updateUser: user => dispatch(updateUser(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProfileForm);
