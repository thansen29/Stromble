import { connect } from 'react-redux';
import AllWorkouts from './all_workouts';
import { deleteWorkout, requestWorkouts } from '../../actions/workouts/workout_actions';

const mapStateToProps = state => {
  return {
    workouts: Object.values(state.workout.workouts).reverse()
  };
};

const mapDistpatchToProps = dispatch => {
  return {
    deleteWorkout: id => dispatch(deleteWorkout(id)),
    requestWorkouts: () => dispatch(requestWorkouts())
  };
};

export default connect(mapStateToProps, mapDistpatchToProps)(AllWorkouts);
