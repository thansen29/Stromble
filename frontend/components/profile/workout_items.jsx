import React from 'react';
import WorkoutItem from '../dashboard/workout_item';
import Waypoint from 'react-waypoint';

const WorkoutItems = ({ workouts, currentUser, getWorkouts }) => {
  let workoutItems;
  if(workouts.length > 0){
    workoutItems = workouts.map((workout) => {
      return (
        <WorkoutItem workout={workout} key={workout.id} currentUser={currentUser} />
      );
    });
  }

  return (
    <main className="profile-workouts">
      <ul>
        { workoutItems }
      </ul>
      <Waypoint onEnter={getWorkouts} />

    </main>
  );
};

export default WorkoutItems;
