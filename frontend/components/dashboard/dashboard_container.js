import { connect } from 'react-redux';
import DashboardIndex from './dashboard_index';
import { requestWorkouts, clearWorkouts } from '../../actions/workouts/workout_actions';
import { requestRunDistance, requestRideDistance, requestLongestRunDistance,
   requestLongestRideDistance, requestLongestRunDuration, requestLongestRideDuration,
    requestTotalRuns, requestTotalRides, requestFastedSpeed } from '../../actions/statistics/workout_totals';

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
    requestLongestRunDuration: () => dispatch(requestLongestRunDuration()),
    requestLongestRideDuration: () => dispatch(requestLongestRideDuration()),
    requestTotalRuns: () => dispatch(requestTotalRuns()),
    requestTotalRides: () => dispatch(requestTotalRides()),
    requestFastedSpeed: () => dispatch(requestFastedSpeed()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardIndex);
