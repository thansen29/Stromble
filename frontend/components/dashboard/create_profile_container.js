import { connect } from 'react-redux';
import CreateProfileForm from './create_profile_form';
import { closeModal } from '../../actions/modals/modal_actions';

const mapStateToProps = state => {
  return {
    ui: state.ui["isOpen"]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProfileForm);
