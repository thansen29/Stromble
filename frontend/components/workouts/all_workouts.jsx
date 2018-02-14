import React from 'react';
import moment from 'moment';
import Navbar from '../navbar/navbar';
import { Link } from 'react-router-dom';
import Waypoint from 'react-waypoint';

class AllWorkouts extends React.Component {
  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.state = {
      workoutId: '',
      page: 1
    };

    this.getWorkouts = this.getWorkouts.bind(this);
  }

  componentDidMount(){
    this.getWorkouts();
  }

  handleDelete(id){
    return ((e) => {
      this.props.deleteWorkout(id);
    }).bind(this);
  }

  getWorkouts(){
    const location = this.props.location.pathname;
    this.props.requestWorkouts(this.state.page, this.props.currentUser.id, location);
    this.setState({ page: this.state.page += 1 });
  }

  render(){
    const workoutItems = this.props.workouts.map((workout) => {
      let momentDate = moment(this.props.workouts.time).parseZone();
      const day = momentDate.format("dddd").substring(0, 3);
      const parsedDate = momentDate.format("M/DD/YYYY");
      let durationMin = workout.duration_min;
      let durationS = workout.duration_s;
      if(durationMin.toString().length < 2){
        durationMin = `0${workout.duration_min}`;
      }
      if(durationS.toString().length < 2){
        durationS = `0${workout.duration_s}`;
      }
      return (
        <tr key={workout.id}>
          <td>{workout.sport}</td>
          <td>{day}, {parsedDate}</td>
          <td><Link to={`/workouts/${workout.id}`}>{workout.title}</Link></td>
          <td>{workout.duration_hr}:{durationMin}:{durationS}</td>
          <td>{workout.distance || 0} {workout.distance_unit}</td>
          <td>{workout.elevation || 0} {workout.elevation_unit}</td>
          <td>
            <span className="table-util" onClick={this.handleDelete(workout.id)}>Delete</span>
          </td>
        </tr>
      );
    });

    return (
      <section className="background">
        <Navbar />
        <main className="table-container">
          <table>
            <tbody>
              <tr>
                <th>Sport</th>
                <th>Date</th>
                <th>Title</th>
                <th>Time</th>
                <th>Distance</th>
                <th>Elevation</th>
                <th>Utilities</th>
              </tr>
              {workoutItems}
            </tbody>
          </table>
          <Waypoint onEnter={this.getWorkouts} />
        </main>
      </section>
    );
  }
}

export default AllWorkouts;
