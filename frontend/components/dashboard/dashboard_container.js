import { connect } from 'react-redux';
import DashboardIndex from './dashboard_index';
import { requestWorkouts } from '../../actions/workouts/workout_actions';

const mapStateToProps = state => {
//workouts needs to be an array with all the workouts in it
  return {
    workouts: Object.values(state.workout.workouts).reverse()
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestWorkouts: () => dispatch(requestWorkouts())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardIndex);
// workout: {
//   activity_type: null,
//   date: "2017-12-31T00:00:00.000Z",
//   description:"Running is hard",
//   distance: 2.0,
//   distance_unit: "miles",
//   duration_hr: 1,
//   duration_min: 30,
//   duration_s: 0,
//   elevation: 100,
//   elevation_unit: "feet",
//   id: 1,
//   private: true,
//   sport: "Ride",
//   time: "2018-01-04T22:51:05.000Z",
//   title: "Test Run",
//   user_id: 15
// }
