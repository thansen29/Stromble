import { connect } from 'react-redux';
import RunTotalsContent from './run_totals';
import RideTotalsContent from './ride_totals';
import { requestRunDistance, requestRideDistance, requestLongestDistance,
   requestLongestDuration, requestTotalRuns, requestTotalRides,
   requestFastedSpeed } from '../../actions/statistics/workout_totals';

const mapStateToProps = state => {
  return {
    stats: state.stats
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestRunDistance: () => dispatch(requestRunDistance()),
    requestRideDistance: () => dispatch(requestRideDistance()),
    requestLongestDistance: () => dispatch(requestLongestDistance()),
    requestLongestDuration: () => dispatch(requestLongestDuration()),
    requestTotalRuns: () => dispatch(requestTotalRuns()),
    requestTotalRides: () => dispatch(requestTotalRides()),
    requestFastedSpeed: () => dispatch(requestFastedSpeed()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RunTotalsContent, RideTotalsContent);
