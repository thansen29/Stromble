import { connect } from 'react-redux';
import DashboardIndex from './dashboard_index';
import { logout } from '../../actions/session/session_actions';

const mapStateToProps = state => {
  return {

  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardIndex);
