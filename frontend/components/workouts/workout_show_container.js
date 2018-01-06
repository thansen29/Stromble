import { connect } from 'react-redux';
import WorkoutShow from './workout_show';
import { updateWorkout, deleteWorkout, requestWorkout } from '../../actions/workouts/workout_actions';

const mapStateToProps = (state, ownProps) => {
  let workoutId = ownProps.match.params.id;
  return {
    workout: state.workout.workouts[workoutId]
    // workout:
    // {
    //   activity_type: "Workout",
    //   date: "2018-05-01T00:00:00.000Z",
    //   description: "A great workout",
    //   distance: 3,
    //   distance_unit: "miles",
    //   duration_hr: 1,
    //   duration_min: 30,
    //   duration_s: 10,
    //   elevation: 50,
    //   elevation_unit: "feet",
    //   id: 43,
    //   private: false,
    //   sport: "Run",
    //   time: "2018-01-06T22:05:00.000Z",
    //   title: "Evening Run",
    //   user_id: 15
    // }
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
