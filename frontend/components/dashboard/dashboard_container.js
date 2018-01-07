import { connect } from 'react-redux';
import DashboardIndex from './dashboard_index';
import { requestWorkouts } from '../../actions/workouts/workout_actions';

const mapStateToProps = state => {
  return {
    workouts: state.workout
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestWorkouts: () => dispatch(requestWorkouts())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardIndex);
