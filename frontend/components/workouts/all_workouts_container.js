import { connect } from 'react-redux';
import _ from 'lodash';
import AllWorkouts from './all_workouts';
import { deleteWorkout, requestWorkouts } from '../../actions/workouts/workout_actions';

const mapStateToProps = state => {
  const workouts = _.values(state.workout.workouts);
  workouts.sort((a, b) => {
    return b.date.localeCompare(a.date);
  });
  return {
    // workouts: _.values(state.workout.workouts),//.reverse(),
    workouts,
    currentUser: state.session.currentUser
  };
};

const mapDistpatchToProps = dispatch => {
  return {
    deleteWorkout: id => dispatch(deleteWorkout(id)),
    requestWorkouts: (page, id, location) => dispatch(requestWorkouts(page, id, location))
  };
};

export default connect(mapStateToProps, mapDistpatchToProps)(AllWorkouts);
