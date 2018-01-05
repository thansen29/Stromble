import { connect } from 'react-redux';
import DropdownComponent from './dropdown_component';

const mapStateToProps = state => {
  return {
    component: state.ui.dropdown.component
  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DropdownComponent);
