import { connect } from 'react-redux';
import WorkoutIndex from './workout_index';
import { createWorkout } from '../../actions/workouts/workout_actions';

const mapStateToProps = state => {
  return {

  };
};

const mapDispatchToProps = dispatch => {
  return {
    createWorkout: workout => dispatch(createWorkout(workout))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutIndex);
