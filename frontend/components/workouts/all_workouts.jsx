import React from 'react';
import moment from 'moment';
import Navbar from '../navbar';
import { Link } from 'react-router-dom';

const AllWorkouts = ({workouts, deleteWorkout}) => {
  const workoutItems = workouts.map((workout) => {
    let momentDate = moment(workouts.time).parseZone();
    const parsedDate = momentDate.format("MMMM, M/DD/YYYY");
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
        <td>{parsedDate}</td>
        <td><Link to={`/workouts/${workout.id}`}>{workout.title}</Link></td>
        <td>{workout.duration_hr}:{durationMin}:{durationS}</td>
        <td>{workout.distance || 0} {workout.distance_unit}</td>
        <td>{workout.elevation || 0} {workout.elevation_unit}</td>
      </tr>
    );
  });

  return (
    <section>
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
      </main>
    </section>
  );
};

export default AllWorkouts;
