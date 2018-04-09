import React from 'react';
import WorkoutForm from './workout_form';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/navbar';

const WorkoutIndex = ({ createWorkout, userId, workoutId, history, errors }) => {
  return (
    <section className="background">
      <Navbar />
      <WorkoutForm
        createWorkout={ createWorkout }
        userId={ userId }
        workoutId={ workoutId }
        history={ history }
        errors={ errors }
      />

    </section>
  );
};

export default WorkoutIndex;
