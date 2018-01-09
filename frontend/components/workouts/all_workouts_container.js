import { connect } from 'react-redux';
import AllWorkouts from './all_workouts';
import { deleteWorkout } from '../../actions/workouts/workout_actions';

const mapStateToProps = state => {
  return {
    workouts: Object.values(state.workout.workouts).reverse()
  };
};

const mapDistpatchToProps = dispatch => {
  return {
    deleteWorkout: id => dispatch(deleteWorkout(id))
  };
};

export default connect(mapStateToProps, mapDistpatchToProps)(AllWorkouts);
