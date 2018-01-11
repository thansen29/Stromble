import { connect } from 'react-redux';
import RouteIndex from './route_index';


const mapStateToProps = state => {
  return {
    userId: state.session.currentUser.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RouteIndex);
