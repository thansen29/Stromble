import { connect } from 'react-redux';
import DashboardIndex from './dashboard_index';
import { requestWorkouts, clearWorkouts } from '../../actions/workouts/workout_actions';
import { requestRunDistance, requestRideDistance, requestLongestRunDistance,
   requestLongestRideDistance, requestLongestDuration, requestTotalRuns,
  requestTotalRides, requestFastedSpeed } from '../../actions/statistics/workout_totals';

const mapStateToProps = state => {
  return {
    workouts: Object.values(state.workout.workouts).reverse(),
    loggedIn: Boolean(state.session.currentUser.fname),
    stats: state.stats

  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestWorkouts: () => dispatch(requestWorkouts()),
    clearWorkouts: () => dispatch(clearWorkouts()),
    requestRunDistance: () => dispatch(requestRunDistance()),
    requestRideDistance: () => dispatch(requestRideDistance()),
    requestLongestRunDistance: () => dispatch(requestLongestRunDistance()),
    requestLongestRideDistance: () => dispatch(requestLongestRideDistance()),
    requestLongestDuration: () => dispatch(requestLongestDuration()),
    requestTotalRuns: () => dispatch(requestTotalRuns()),
    requestTotalRides: () => dispatch(requestTotalRides()),
    requestFastedSpeed: () => dispatch(requestFastedSpeed()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardIndex);
