import { connect } from 'react-redux';
import _ from 'lodash';
import DashboardIndex from './dashboard_index';
import { requestWorkouts, clearWorkouts } from '../../actions/workouts/workout_actions';
import { requestRunDistance, requestRideDistance, requestLongestRunDistance,
   requestLongestRideDistance, requestLongestRunDuration, requestLongestRideDuration,
    requestTotalRuns, requestTotalRides, requestFastedSpeed } from '../../actions/statistics/workout_totals';
import { openModal, closeModal } from '../../actions/modals/modal_actions';

const mapStateToProps = state => {
  const workouts = _.values(state.workout.workouts);
  workouts.sort((a, b) => {
    return b.date.localeCompare(a.date);
  });
  return {
    workouts,
    stats: state.stats,
    isOpen: state.ui.modal["isOpen"],
    newUser: state.session.currentUser.fname === null,
    currentUser: state.session.currentUser,

  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestWorkouts: (page, id, location) => dispatch(requestWorkouts(page, id, location)),
    clearWorkouts: () => dispatch(clearWorkouts()),
    requestRunDistance: (id) => dispatch(requestRunDistance(id)),
    requestRideDistance: (id) => dispatch(requestRideDistance(id)),
    requestLongestRunDistance: (id) => dispatch(requestLongestRunDistance(id)),
    requestLongestRideDistance: (id) => dispatch(requestLongestRideDistance(id)),
    requestLongestRunDuration: (id) => dispatch(requestLongestRunDuration(id)),
    requestLongestRideDuration: (id) => dispatch(requestLongestRideDuration(id)),
    requestTotalRuns: (id) => dispatch(requestTotalRuns(id)),
    requestTotalRides: (id) => dispatch(requestTotalRides(id)),
    requestFastedSpeed: (id) => dispatch(requestFastedSpeed(id)),
    openModal: () => dispatch(openModal()),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardIndex);
