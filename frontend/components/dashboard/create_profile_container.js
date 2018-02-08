import { connect } from 'react-redux';
import CreateProfileForm from './create_profile_form';
import { updateUser } from '../../actions/profile/profile_actions';
import { closeModal } from '../../actions/modals/modal_actions';

const mapStateToProps = state => {
  return {
    ui: state.ui.modal["isOpen"],
    errors: state.errors.session,
    avatarUrl: state.session.currentUser.avatar_url
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    updateUser: (formData) => dispatch(updateUser(formData))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProfileForm);
