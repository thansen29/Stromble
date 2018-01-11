import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import App from './app';
import { closeModal } from '../actions/modals/modal_actions';

const mapStateToProps = state => {
  return {
    isOpen: state.ui.modal["isOpen"]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};



export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App));
