import { connect } from 'react-redux';
import WorkoutIndex from './workout_index';
import { createWorkout } from '../../actions/workouts/workout_actions';
import { openDropdown } from '../../actions/dropdowns/dropdown_actions';

const mapStateToProps = state => {
  return {
    userId: state.session.currentUser.id,
    component: state.ui.dropdown.component,
    workoutId: state.workout.activeWorkout
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createWorkout: workout => dispatch(createWorkout(workout)),
    openDropdown: component => dispatch(openDropdown(component))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutIndex);
