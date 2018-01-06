import { connect } from 'react-redux';
import WorkoutShow from './workout_show';
import { updateWorkout, deleteWorkout } from '../../actions/workouts/workout_actions';

const mapStateToProps = (state, ownProps) => {
  let workoutId = ownProps.match.params.id;
  return {
    // workout: state.workout.workouts[workoutId]
    workout:
    {
      activity_type:"",
      date:"2018-05-01T00:00:00.000Z",
      description:null,
      distance:null,
      distance_unit:"miles",
      duration_hr:1,
      duration_min:0,
      duration_s:0,
      elevation:null,
      elevation_unit:"feet",
      id:43,
      private:false,
      sport:"Run",
      time:"2018-01-06T22:05:00.000Z",
      title:"Run",
      user_id:15
    }
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateWorkout: workout => dispatch(updateWorkout(workout)),
    deleteWorkout: id => dispatch(deleteWorkout(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutShow);
