import { connect } from 'react-redux';
import DashboardIndex from './dashboard_index';
import { requestWorkouts } from '../../actions/workouts/workout_actions';

const mapStateToProps = state => {

  return {
    workout: {
      activity_type: null,
      date: "2017-12-31T00:00:00.000Z",
      description:"Running is hard",
      distance: 1.5,
      distance_unit: "miles",
      duration_hr: 1,
      duration_min: 0,
      duration_s: 0,
      elevation: 1,
      elevation_unit: "feet",
      id: 1,
      private: true,
      sport: "Run",
      time: "2018-01-04T22:51:05.000Z",
      title: "Test Run",
      user_id: 15
    }
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestWorkouts: () => dispatch(requestWorkouts())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardIndex);
