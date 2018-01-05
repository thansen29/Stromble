import { connect } from 'react-redux';
import WorkoutIndex from './workout_index';
import { createWorkout } from '../../actions/workouts/workout_actions';
import { showDropdown } from '../../actions/dropdowns/dropdown_actions';

const mapStateToProps = state => {
  return {
    userId: state.session.currentUser.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createWorkout: workout => dispatch(createWorkout(workout)),
    showDropdown: component => dispatch(showDropdown(component))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutIndex);
