import React from 'react';
import WorkoutItem from './workout_item';
import Waypoint from 'react-waypoint';

const WorkoutItems = ({ workouts, getWorkouts, currentUser, likeWorkout }) => {
  let workoutItems;
  if(workouts.length > 0){
    workoutItems = workouts.map((workout) => {
      return (
        <WorkoutItem
          workout={workout}
          key={workout.id}
          currentUser={currentUser}
          likeWorkout={likeWorkout} />
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
