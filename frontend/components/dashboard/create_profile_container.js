import { connect } from 'react-redux';
import CreateProfile from './create_profile';
import { openModal, closeModal } from '../../actions/session/session_actions';

const mapStateToProps = state => {
  return {
    ui: state.ui["isOpen"],
    newUser: Boolean(state.session.currentUser.fname === null)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openModal: () => dispatch(openModal()),
    closeModa: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProfile);
