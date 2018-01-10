import { connect } from 'react-redux';
import RouteIndex from './route_index';
import MarkerManager from '../../util/marker_manager';


const mapStateToProps = state => {
  return {

  };
};

const mapDispatchToProps = dispatch => {
  const manager = new MarkerManager();
  return {
    getState: () => manager.getState(),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RouteIndex);
