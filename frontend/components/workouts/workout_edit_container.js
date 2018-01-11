import { connect } from 'react-redux';
import WorkoutEditForm from './workout_edit_form';
import { updateWorkout } from '../../actions/workouts/workout_actions';
import { closeModal } from '../../actions/modals/modal_actions';

const mapStateToProps = state => {
  return {
    isOpen: state.ui.modal["isOpen"],
    userId: state.session.currentUser.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    updateWorkout: workout => dispatch(updateWorkout(workout))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutEditForm);
