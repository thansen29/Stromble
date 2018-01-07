import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import App from './app';
import { closeDropdown } from '../actions/dropdowns/dropdown_actions';

const mapStateToProps = state => {
  return {
    isOpen: state.ui.dropdown.component
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeDropdown: () => dispatch(closeDropdown())
  };
};



export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App));
