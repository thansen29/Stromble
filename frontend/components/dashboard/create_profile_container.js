import { connect } from 'react-redux';
import CreateProfileForm from './create_profile_form';
import { openModal, closeModal } from '../../actions/session/session_actions';

const mapStateToProps = state => {
  return {
    ui: state.ui["isOpen"]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openModal: () => dispatch(openModal()),
    closeModa: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProfileForm);
