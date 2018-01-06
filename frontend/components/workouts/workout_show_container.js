import { connect } from 'react-redux';
import WorkoutShow from './workout_show';
import { updateWorkout, deleteWorkout, requestWorkout } from '../../actions/workouts/workout_actions';

const mapStateToProps = (state, ownProps) => {
  let workoutId = ownProps.match.params.id;
  return {
    workout: state.workout.workouts[workoutId]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateWorkout: workout => dispatch(updateWorkout(workout)),
    deleteWorkout: id => dispatch(deleteWorkout(id)),
    requestWorkout: id => dispatch(requestWorkout(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutShow);
