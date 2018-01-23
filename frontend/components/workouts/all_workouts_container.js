import { connect } from 'react-redux';
import _ from 'lodash';
import AllWorkouts from './all_workouts';
import { deleteWorkout, requestWorkouts } from '../../actions/workouts/workout_actions';

const mapStateToProps = state => {
  return {
    workouts: _.values(state.workout.workouts).reverse()
  };
};

const mapDistpatchToProps = dispatch => {
  return {
    deleteWorkout: id => dispatch(deleteWorkout(id)),
    requestWorkouts: () => dispatch(requestWorkouts())
  };
};

export default connect(mapStateToProps, mapDistpatchToProps)(AllWorkouts);
